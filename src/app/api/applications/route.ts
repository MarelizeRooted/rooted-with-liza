import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  return createClient(supabaseUrl, supabaseServiceKey)
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY not configured - email notifications disabled')
    return null
  }
  return new Resend(apiKey)
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

// Convert camelCase to snake_case
function toSnakeCase(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  for (const key in obj) {
    const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase()
    result[snakeKey] = obj[key]
  }
  return result
}

async function sendApplicationNotification(application: Application) {
  const resend = getResend()
  const adminEmail = process.env.ADMIN_EMAIL || 'hello@rootedwithliza.co.za'
  
  if (!resend) {
    console.log('Email notification skipped - no RESEND_API_KEY')
    return false
  }
  
  try {
    await resend.emails.send({
      from: 'ROOTED with Liza <onboarding@resend.dev>',
      to: adminEmail,
      subject: `New ROOTED Circle Application: ${application.parent_name}`,
      html: `
        <h2>New Application Received</h2>
        
        <h3>Parent Details</h3>
        <p><strong>Name:</strong> ${application.parent_name}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone}</p>
        
        <h3>Teen Details</h3>
        <p><strong>Name:</strong> ${application.teen_name}</p>
        <p><strong>Age:</strong> ${application.teen_age}</p>
        <p><strong>Grade:</strong> ${application.teen_grade}</p>
        
        <h3>What Brought Them Here</h3>
        <p>${application.what_struggling}</p>
        
        <h3>How They Found Rooted</h3>
        <p>${application.heard_about || 'Not specified'}</p>
        
        <h3>Commitment Confirmed</h3>
        <p>${application.commitment ? 'Yes' : 'No'}</p>
        
        <hr />
        <p><small>Submitted via rootedwithliza.co.za/apply</small></p>
      `,
    })
    return true
  } catch (error) {
    console.error('Failed to send email notification:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase()
    const body = await request.json()

    // Convert camelCase to snake_case
    const application = toSnakeCase(body) as unknown as Application

    // Validate required fields
    const requiredFields = ['parent_name', 'email', 'phone', 'teen_name', 'teen_age', 'teen_grade', 'what_struggling', 'heard_about']
    for (const field of requiredFields) {
      if (!application[field as keyof Application]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(application.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into database
    const { data, error } = await supabase
      .from('applications')
      .insert({
        parent_name: application.parent_name,
        email: application.email,
        phone: application.phone,
        teen_name: application.teen_name,
        teen_age: application.teen_age,
        teen_grade: application.teen_grade,
        what_struggling: application.what_struggling,
        heard_about: application.heard_about,
        commitment: application.commitment,
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

    // Send email notification (don't fail if email fails)
    await sendApplicationNotification(application)

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
