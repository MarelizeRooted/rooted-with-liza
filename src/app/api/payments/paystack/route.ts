import { NextRequest, NextResponse } from 'next/server'
import { getPaystackProvider } from '@/lib/payments/providers/paystack'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

function getSupabaseAdmin() {
  return createClient(supabaseUrl, supabaseServiceKey)
}

// POST /api/payments/paystack - Initialize a payment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, email, name, phone, metadata, description, productId, productType } = body

    if (!amount || !email) {
      return NextResponse.json(
        { error: 'Amount and email are required' },
        { status: 400 }
      )
    }

    // Validate amount (minimum R1 = 100 cents)
    const amountInCents = Math.max(Math.round(amount), 100)

    const paystack = getPaystackProvider()
    
    const result = await paystack.initializePayment({
      amount: amountInCents,
      email,
      name,
      phone,
      description: description || `Rooted With Liza - ${productType || 'Purchase'}`,
      metadata: {
        ...metadata,
        productId,
        productType,
        platform: 'rooted-with-liza',
      },
    })

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      reference: result.reference,
      authorizationUrl: result.authorizationUrl,
    })
  } catch (error: any) {
    console.error('Paystack payment init error:', error)
    return NextResponse.json(
      { error: 'Payment initialization failed' },
      { status: 500 }
    )
  }
}

// GET /api/payments/paystack - Verify a payment
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get('reference')

    if (!reference) {
      return NextResponse.json(
        { error: 'Reference is required' },
        { status: 400 }
      )
    }

    const paystack = getPaystackProvider()
    const result = await paystack.verifyPayment(reference)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error, verified: false },
        { status: 400 }
      )
    }

    // If payment was successful, create order/purchase record
    if (result.status === 'success') {
      const supabase = getSupabaseAdmin()
      
      // The metadata should contain product info
      // In a real implementation, you'd look up the product and create an order
      await supabase.from('orders').insert({
        user_id: null, // Would be set if user is logged in
        status: 'completed',
        total: result.amount || 0,
        stripe_payment_intent_id: reference, // Using reference as the ID
        customer_email: result.customerEmail,
      })
    }

    return NextResponse.json({
      verified: true,
      success: result.status === 'success',
      reference: result.reference,
      amount: result.amount,
      status: result.status,
    })
  } catch (error: any) {
    console.error('Paystack verification error:', error)
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    )
  }
}
