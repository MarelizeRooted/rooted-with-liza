import { NextRequest, NextResponse } from 'next/server'

async function getStripe() {
  const Stripe = (await import('stripe')).default
  return new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')
}

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key'
  )
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder'

  let event: any

  try {
    const stripe = await getStripe()
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    const supabaseAdmin = await getSupabaseAdmin()

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const userId = session.metadata?.userId
        const tier = session.metadata?.tier

        if (userId && tier) {
          // Find the tier_id
          const { data: tierData } = await supabaseAdmin
            .from('membership_tiers')
            .select('id')
            .eq('slug', tier)
            .single()

          if (tierData) {
            // Create membership record
            await supabaseAdmin.from('memberships').insert({
              user_id: userId,
              tier_id: tierData.id,
              status: 'active',
              stripe_subscription_id: session.subscription,
              stripe_customer_id: session.customer,
              current_period_start: new Date().toISOString(),
              current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            })
          }
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const userId = subscription.metadata?.userId

        if (userId) {
          await supabaseAdmin
            .from('memberships')
            .update({
              status: subscription.status === 'active' ? 'active' : 'paused',
              current_period_end: subscription.current_period_end 
                ? new Date(subscription.current_period_end * 1000).toISOString() 
                : null,
            })
            .eq('stripe_subscription_id', subscription.id)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        await supabaseAdmin
          .from('memberships')
          .update({ status: 'cancelled' })
          .eq('stripe_subscription_id', subscription.id)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        await supabaseAdmin
          .from('memberships')
          .update({ status: 'past_due' })
          .eq('stripe_customer_id', invoice.customer)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}
