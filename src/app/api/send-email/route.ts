import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }
  return new Resend(apiKey)
}

interface EmailRequest {
  to: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const resend = getResend()
    
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const body: EmailRequest = await request.json()

    if (!body.to || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, message' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'ROOTED with Liza <onboarding@resend.dev>',
      to: body.to,
      subject: body.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #6B7B5C; padding: 20px; text-align: center;">
            <h1 style="color: #FAF8F5; margin: 0; font-size: 24px;">ROOTED with Liza</h1>
          </div>
          <div style="padding: 30px; background-color: #FAF8F5;">
            ${body.message.replace(/\n/g, '<br>')}
          </div>
          <div style="padding: 20px; text-align: center; color: #7A7A6C; font-size: 12px;">
            <p>This email was sent from rootedwithliza.co.za</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message || String(error) },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Server error:', errorMessage)
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: errorMessage },
      { status: 500 }
    )
  }
}
