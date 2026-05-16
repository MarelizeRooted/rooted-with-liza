'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

const tiers = [
  { slug: 'rooted-core', name: 'Rooted Core', price: 299 },
  { slug: 'rooted-plus', name: 'Rooted Plus', price: 599 },
  { slug: 'rooted-family', name: 'Rooted Family', price: 999 },
]

function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tierParam = searchParams.get('tier')
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedTier = tiers.find(t => t.slug === tierParam) || tiers[1]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      setLoading(false)
      return
    }

    try {
      // In production, this would create account with Supabase and set up Stripe
      // const { data, error } = await supabase.auth.signUp({
      //   email: formData.email,
      //   password: formData.password,
      //   options: { data: { full_name: formData.fullName } }
      // })
      
      // Simulate signup
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      router.push('/dashboard')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <CardContent className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-serif font-semibold text-charcoal mb-2">
          Create Your Account
        </h1>
        <p className="text-warm-gray">
          Start your membership journey today
        </p>
      </div>

      {/* Selected Tier */}
      {selectedTier && (
        <div className="bg-sand rounded-card p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-warm-gray">Selected Plan</p>
              <p className="font-semibold text-charcoal">{selectedTier.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-olive">R{selectedTier.price}</p>
              <p className="text-xs text-warm-gray">/month</p>
            </div>
          </div>
          <Link href="/membership" className="text-sm text-olive hover:underline mt-2 inline-block">
            Change plan
          </Link>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          label="Full Name"
          placeholder="Your full name"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />

        <Input
          type="email"
          label="Email Address"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          type="password"
          label="Password"
          placeholder="Create a password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          required
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <div className="text-sm text-warm-gray">
          <p className="mb-2">Your membership includes:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-olive" />
              Access to member resources
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-olive" />
              Live session access
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-olive" />
              Community access
            </li>
          </ul>
        </div>

        <Button type="submit" className="w-full" size="lg" loading={loading}>
          Create Account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-xs text-center text-warm-gray">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="text-olive">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-olive">Privacy Policy</Link>
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-sand text-center">
        <p className="text-warm-gray text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-olive font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </CardContent>
  )
}

export default function SignupPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-[80vh] flex items-center section-padding bg-cream">
        <div className="container-main max-w-lg mx-auto">
          <Card className="bg-white">
            <Suspense fallback={
              <CardContent className="p-8">
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-sand rounded w-1/2 mx-auto"></div>
                  <div className="h-4 bg-sand rounded w-3/4 mx-auto"></div>
                  <div className="h-12 bg-sand rounded"></div>
                  <div className="h-12 bg-sand rounded"></div>
                </div>
              </CardContent>
            }>
              <SignupForm />
            </Suspense>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
