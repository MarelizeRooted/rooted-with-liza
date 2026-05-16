import { NextRequest, NextResponse } from 'next/server'
import { getPaystackProvider } from '@/lib/payments/providers/paystack'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

function getSupabaseAdmin() {
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Paystack Webhook Handler
// This endpoint receives notifications when payments are successful
export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-paystack-signature')

    // Verify webhook signature
    const paystack = getPaystackProvider()
    
    // In production, verify the signature:
    // const hash = crypto.createHmac('sha512', process.env.PAYSTACK_WEBHOOK_SECRET || '').update(body).digest('hex')
    // if (hash !== signature) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })

    const event = JSON.parse(body)

    console.log('Paystack webhook received:', event.event)

    switch (event.event) {
      case 'charge.success':
        // Payment successful
        const transaction = event.data
        
        console.log('Payment successful:', transaction.reference, transaction.amount)

        // Store the successful payment
        const supabase = getSupabaseAdmin()
        
        await supabase.from('orders').insert({
          user_id: null, // Would need to be linked via metadata
          status: 'completed',
          total: transaction.amount,
          stripe_payment_intent_id: transaction.reference, // Using reference field
          customer_email: transaction.customer?.email,
        })

        break

      case 'charge.refund':
        // Refund processed
        console.log('Refund processed for:', event.data.reference)
        break

      default:
        console.log('Unhandled webhook event:', event.event)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
