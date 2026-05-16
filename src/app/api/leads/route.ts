import { NextRequest, NextResponse } from 'next/server'

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key'
  )
}

export async function POST(request: NextRequest) {
  try {
    const { email, whatsappOptIn } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const supabaseAdmin = await getSupabaseAdmin()

    // Check if email already exists
    const { data: existing } = await supabaseAdmin
      .from('lead_magnet_signups')
      .select('id')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json(
        { message: 'Email already registered', alreadyExists: true }
      )
    }

    // Insert new lead
    const { data, error } = await supabaseAdmin
      .from('lead_magnet_signups')
      .insert({
        email,
        whatsapp_opt_in: whatsappOptIn || false,
        downloaded_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Lead capture error:', error)
      return NextResponse.json(
        { error: 'Failed to capture lead' },
        { status: 500 }
      )
    }

    // Also add to email subscribers
    await supabaseAdmin
      .from('email_subscribers')
      .upsert({
        email,
        status: 'active',
        subscribed_at: new Date().toISOString(),
      }, {
        onConflict: 'email',
      })

    return NextResponse.json({
      success: true,
      data
    })
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const supabaseAdmin = await getSupabaseAdmin()

    const { data, error } = await supabaseAdmin
      .from('lead_magnet_signups')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch leads' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Leads fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
