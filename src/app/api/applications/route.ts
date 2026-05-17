import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  return createClient(supabaseUrl, supabaseServiceKey)
}

interface Application {
  parent_name: string
  email: string
  phone: string
  teen_name: string
  teen_age: string
  teen_grade: string
  what_struggling: string
  heard_about: string
  commitment: boolean
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase()
    const body: Application = await request.json()

    // Validate required fields
    const requiredFields = ['parent_name', 'email', 'phone', 'teen_name', 'teen_age', 'teen_grade', 'what_struggling', 'heard_about']
    for (const field of requiredFields) {
      if (!body[field as keyof Application]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into database
    const { data, error } = await supabase
      .from('applications')
      .insert({
        parent_name: body.parent_name,
        email: body.email,
        phone: body.phone,
        teen_name: body.teen_name,
        teen_age: body.teen_age,
        teen_grade: body.teen_grade,
        what_struggling: body.what_struggling,
        heard_about: body.heard_about,
        commitment: body.commitment,
        status: 'pending',
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const supabase = getSupabase()
    
    // This would be protected by admin auth in production
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch applications' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
