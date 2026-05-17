'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Lock, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate sending reset email
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-[80vh] flex items-center section-padding bg-cream">
          <div className="container-main max-w-lg mx-auto">
            <Card className="bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-olive" />
                </div>
                <h1 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  Check Your Email
                </h1>
                <p className="text-warm-gray mb-6">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your inbox and spam folder.
                </p>
                <p className="text-sm text-warm-gray mb-6">
                  Didn't receive the email? Contact us at rootedwithliza@gmail.com
                </p>
                <Link href="/login">
                  <Button variant="outline" className="border-olive text-olive">
                    Back to Login
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-[80vh] flex items-center section-padding bg-cream">
        <div className="container-main max-w-lg mx-auto">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-olive" />
                </div>
                <h1 className="text-2xl font-serif font-semibold text-charcoal mb-2">
                  Reset Your Password
                </h1>
                <p className="text-warm-gray">
                  Enter your email and we'll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-warm-gray" />
                    <Input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-olive hover:bg-olive/90"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-warm-gray">
                  Remember your password?{' '}
                  <Link href="/login" className="text-olive hover:underline">
                    Back to login
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  )
}
