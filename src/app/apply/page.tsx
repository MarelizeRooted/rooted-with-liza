'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Heart, MessageCircle } from 'lucide-react'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    teenName: '',
    teenAge: '',
    teenGrade: '',
    whatStruggling: '',
    heardAbout: '',
    commitment: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!formData.commitment) {
      setError('Please confirm your commitment to the programme before submitting.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }
      
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-[80vh] flex items-center section-padding bg-cream">
          <div className="container-main">
            <Card className="max-w-xl mx-auto bg-white border-none shadow-soft">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-olive" />
                </div>
                <h1 className="text-3xl font-serif font-semibold text-charcoal mb-4">
                  Application Received
                </h1>
                <p className="text-warm-gray leading-relaxed mb-6">
                  Thank you for your interest in ROOTED Circle. I've received your application 
                  and will review it carefully.
                </p>
                <p className="text-warm-gray leading-relaxed mb-8">
                  You'll hear from me within a few days. If you don't see an email, please 
                  check your spam folder, or feel free to reach out directly.
                </p>
                <p className="text-charcoal font-medium">
                  I look forward to learning more about your family.
                </p>
                <p className="text-olive mt-2">— Liza</p>
                <div className="mt-8">
                  <Link href="/">
                    <Button variant="outline" className="border-olive text-olive hover:bg-olive/5">
                      Return Home
                    </Button>
                  </Link>
                </div>
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
      
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-sage/10" />
          
          <div className="container-main relative z-10 py-16">
            <div className="max-w-2xl">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">
                Applications Open
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-6">
                Apply for ROOTED Circle
              </h1>
              <p className="text-warm-gray text-lg leading-relaxed">
                ROOTED Circle is selective because we keep groups small and genuine. 
                This application helps me understand if we're the right fit for each other.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding bg-linen">
          <div className="container-main">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white border-none shadow-soft">
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Parent Details */}
                    <div>
                      <h2 className="text-xl font-serif font-semibold text-charcoal mb-4">
                        Your Details
                      </h2>
                      <div className="space-y-4">
                        <Input
                          type="text"
                          label="Your Name"
                          placeholder="What should I call you?"
                          required
                          value={formData.parentName}
                          onChange={(e) => handleChange('parentName', e.target.value)}
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            type="email"
                            label="Email Address"
                            placeholder="your@email.com"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                          />
                          <Input
                            type="tel"
                            label="Phone Number"
                            placeholder="Your WhatsApp number"
                            required
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Teen Details */}
                    <div>
                      <h2 className="text-xl font-serif font-semibold text-charcoal mb-4">
                        About Your Teen
                      </h2>
                      <div className="space-y-4">
                        <Input
                          type="text"
                          label="Teen's Name"
                          placeholder="What should I call them?"
                          required
                          value={formData.teenName}
                          onChange={(e) => handleChange('teenName', e.target.value)}
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            type="text"
                            label="Teen's Age"
                            placeholder="e.g., 15"
                            required
                            value={formData.teenAge}
                            onChange={(e) => handleChange('teenAge', e.target.value)}
                          />
                          <Input
                            type="text"
                            label="Current Grade"
                            placeholder="e.g., Grade 10"
                            required
                            value={formData.teenGrade}
                            onChange={(e) => handleChange('teenGrade', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Struggles */}
                    <div>
                      <h2 className="text-xl font-serif font-semibold text-charcoal mb-4">
                        What's Brought You Here?
                      </h2>
                      <Textarea
                        label="Tell me a little about what your teen (and family) are struggling with"
                        placeholder="This isn't a test. I'm asking because I want to understand if I can genuinely help..."
                        rows={5}
                        required
                        value={formData.whatStruggling}
                        onChange={(e) => handleChange('whatStruggling', e.target.value)}
                      />
                    </div>

                    {/* How They Heard */}
                    <div>
                      <h2 className="text-xl font-serif font-semibold text-charcoal mb-4">
                        How Did You Find Rooted?
                      </h2>
                      <Input
                        type="text"
                        label="Referred by a friend, Instagram, Google...?"
                        placeholder="I'm curious how you found your way here"
                        required
                        value={formData.heardAbout}
                        onChange={(e) => handleChange('heardAbout', e.target.value)}
                      />
                    </div>

                    {/* Commitment */}
                    <div className="bg-linen p-6 rounded-card">
                      <div className="flex items-start gap-4">
                        <Heart className="h-6 w-6 text-olive flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-serif font-semibold text-charcoal mb-2">
                            A word about commitment
                          </h3>
                          <p className="text-warm-gray text-sm leading-relaxed mb-4">
                            ROOTED Circle works best for families who are ready to show up fully. 
                            That means attending sessions, doing the work between sessions, and 
                            being open to change. This isn't a quick fix—it's a journey.
                          </p>
                          <p className="text-warm-gray text-sm leading-relaxed mb-4">
                            I also ask that both parent and teen are on board. If one person is 
                            being dragged along reluctantly, it rarely works for anyone.
                          </p>
                          <p className="text-charcoal text-sm font-medium">
                            Do you and your teen both understand and agree to this commitment?
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 ml-10">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.commitment}
                            onChange={(e) => handleChange('commitment', e.target.checked)}
                            className="w-5 h-5 rounded border-sand text-olive focus:ring-olive"
                          />
                          <span className="text-charcoal text-sm">
                            Yes, we understand and are ready to commit
                          </span>
                        </label>
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-olive text-cream hover:bg-olive-dark" 
                      size="lg"
                      loading={loading}
                    >
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-center text-warm-gray">
                      After submitting, I'll review your application and reach out within a few days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-6 text-center">
                What happens after you apply?
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "I review your application",
                    description: "I read every application carefully. I'm not looking for perfect teens or perfect families—just honesty.",
                  },
                  {
                    step: "2",
                    title: "We have a conversation",
                    description: "If it seems like we might be a good fit, I'll reach out to schedule a call. This is just us getting to know each other.",
                  },
                  {
                    step: "3",
                    title: "We decide together",
                    description: "After our conversation, we'll both have a clearer picture of whether ROOTED Circle is the right next step. There's no pressure either way.",
                  },
                  {
                    step: "4",
                    title: "If yes, we begin",
                    description: "Once accepted, you'll get everything you need to join the next available cohort and start your journey.",
                  },
                ].map((item, i) => (
                  <Card key={i} className="bg-linen border-none">
                    <CardContent className="p-6 flex gap-5">
                      <span className="text-2xl font-serif font-bold text-olive/30 flex-shrink-0 w-8">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-serif font-semibold text-charcoal mb-1">
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
          </div>
        </section>

        {/* Questions */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <MessageCircle className="h-12 w-12 text-olive mx-auto mb-6" />
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Questions before applying?
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                If you have questions about whether ROOTED Circle is right for your family, 
                or about the application process, I'm happy to chat.
              </p>
              <p className="text-charcoal">
                Email me at{' '}
                <a href="mailto:hello@rootedwithliza.co.za" className="text-olive hover:underline">
                  hello@rootedwithliza.co.za
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
