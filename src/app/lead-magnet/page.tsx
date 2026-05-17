'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Download, CheckCircle, ArrowRight, FileText, Calendar, Users, Heart } from 'lucide-react'

const kitContents = [
  {
    icon: Calendar,
    title: 'The 5-Day Gentle Reset',
    description: 'A structured daily plan to help your teen pause, breathe, and find their footing again. No pressure, just presence.',
  },
  {
    icon: FileText,
    title: 'The Sunday Reset Template',
    description: 'A printable weekly planning tool designed for overwhelmed students. Simple, calm, and effective.',
  },
  {
    icon: Heart,
    title: 'The Parent Pause',
    description: 'A short guide for parents on regulated breathing and quiet presence. Sometimes the best thing you can do is just be there.',
  },
  {
    icon: Users,
    title: 'The First Step Quiz',
    description: 'A reflection tool to help your teen (and you) understand what is really going on beneath the surface.',
  },
]

export default function FreeStarterKitPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappOptIn: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // In production, this would call the API to save the lead
      // await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-sage/10" />
          
          <div className="container-main relative z-10 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">
                A free gift for families
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-6">
                The Free Starter Kit
              </h1>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                A gentle beginning for families who are tired of fighting against 
                overwhelm. No commitment, no pressure. Just practical tools to help 
                you pause, breathe, and take the first step.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-charcoal mb-4">What's Inside</h2>
              <p className="text-warm-gray max-w-xl mx-auto">
                Four practical resources designed for real families facing real challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {kitContents.map((item, i) => (
                <Card key={i} className="bg-linen border-none">
                  <CardContent className="p-8 flex gap-5">
                    <item.icon className="h-10 w-10 text-olive flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-semibold text-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-warm-gray text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="section-padding bg-sand/30" id="download">
          <div className="container-main">
            <div className="max-w-xl mx-auto">
              {submitted ? (
                <Card className="bg-white border-none shadow-soft">
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-olive" />
                    </div>
                    <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                      Check Your Email
                    </h2>
                    <p className="text-warm-gray mb-6 leading-relaxed">
                      Your Free Starter Kit is on its way. Look for an email from Rooted with Liza 
                      with everything you need to get started.
                    </p>
                    <p className="text-sm text-warm-gray mb-8">
                      While you wait, feel free to learn more about{' '}
                      <Link href="/rooted-circle" className="text-olive hover:underline">
                        ROOTED Circle
                      </Link>{' '}
                      —our monthly mentorship community for families ready for deeper work.
                    </p>
                    <Link href="/rooted-circle">
                      <Button variant="outline" className="border-olive text-olive hover:bg-olive/5">
                        Discover ROOTED Circle
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-white border-none shadow-soft">
                  <CardContent className="p-10">
                    <div className="text-center mb-8">
                      <Download className="h-12 w-12 text-olive mx-auto mb-4" />
                      <h2 className="text-2xl font-serif font-semibold text-charcoal mb-2">
                        Get Your Free Kit
                      </h2>
                      <p className="text-warm-gray">
                        Enter your details below and we'll send the download link to your email.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        type="text"
                        label="Your Name"
                        placeholder="What should we call you?"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />

                      <Input
                        type="email"
                        label="Email Address"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />

                      {error && (
                        <p className="text-sm text-red-500">{error}</p>
                      )}

                      <Button type="submit" className="w-full bg-olive text-cream hover:bg-olive-dark" size="lg" loading={loading}>
                        Send Me the Free Kit
                      </Button>

                      <p className="text-xs text-center text-warm-gray">
                        We respect your privacy. Unsubscribe anytime. 
                        Your information is never sold.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
                Is This for You?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-linen border-none">
                  <CardContent className="p-8">
                    <h3 className="font-serif font-semibold text-charcoal mb-4">For Teens Who:</h3>
                    <ul className="space-y-2 text-warm-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Feel overwhelmed by expectations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Know they should act but can't start
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Have tried "pushing harder" without results
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Feel like they're not doing enough
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-linen border-none">
                  <CardContent className="p-8">
                    <h3 className="font-serif font-semibold text-charcoal mb-4">For Parents Who:</h3>
                    <ul className="space-y-2 text-warm-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Want to help but feel helpless
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Watch their teen struggle without knowing what to do
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Need practical tools, not just theory
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive">•</span>
                        Are looking for a different approach
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Ready for Deeper Work?
            </h2>
            <p className="text-cream/80 mb-8 max-w-lg mx-auto leading-relaxed">
              The Free Starter Kit is a beginning. If you're looking for ongoing support, 
              mentorship, and community, ROOTED Circle might be what your family needs.
            </p>
            <Link href="/rooted-circle">
              <Button size="lg" variant="secondary" className="bg-cream text-olive hover:bg-beige border-0">
                Learn About ROOTED Circle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
