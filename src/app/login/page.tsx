'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // In production, this would authenticate with Supabase
      // const { error } = await supabase.auth.signInWithPassword(formData)
      
      // Simulate login
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      router.push('/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-[80vh] flex items-center section-padding bg-cream">
        <div className="container-main max-w-md mx-auto">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-serif font-semibold text-charcoal mb-2">
                  Welcome Back
                </h1>
                <p className="text-warm-gray">
                  Log in to access your membership resources
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-sand" />
                    <span className="text-warm-gray">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-olive hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full" size="lg" loading={loading}>
                  Log In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-sand text-center">
                <p className="text-warm-gray text-sm">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-olive font-medium hover:underline">
                    Sign up
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
