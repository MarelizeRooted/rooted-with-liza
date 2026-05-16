import { NextRequest, NextResponse } from 'next/server'

const PRICE_IDS: Record<string, string> = {
  'rooted-core': process.env.STRIPE_PRICE_CORE || 'price_core_placeholder',
  'rooted-plus': process.env.STRIPE_PRICE_PLUS || 'price_plus_placeholder',
  'rooted-family': process.env.STRIPE_PRICE_FAMILY || 'price_family_placeholder',
}

async function getStripe() {
  const Stripe = (await import('stripe')).default
  return new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')
}

export async function POST(request: NextRequest) {
  try {
    const { tier, userId, email } = await request.json()

    if (!tier || !PRICE_IDS[tier]) {
      return NextResponse.json(
        { error: 'Invalid membership tier' },
        { status: 400 }
      )
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const stripe = await getStripe()

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: PRICE_IDS[tier],
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/membership`,
      metadata: {
        userId: userId || '',
        tier,
      },
      subscription_data: {
        metadata: {
          userId: userId || '',
          tier,
        },
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
