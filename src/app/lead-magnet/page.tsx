'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, CheckCircle, ArrowRight, FileText, Calendar, Users, BookOpen, Heart, MessageCircle } from 'lucide-react'

const kitContents = [
  {
    icon: Calendar,
    title: '5-Day Reset Plan',
    description: 'A structured daily plan to help your teen get back on track without overwhelm.'
  },
  {
    icon: FileText,
    title: 'Study Schedule Template',
    description: 'A printable weekly planner designed specifically for overwhelmed students.'
  },
  {
    icon: Users,
    title: 'Procrastination Fix Guide',
    description: 'Practical strategies for breaking through the paralysis of procrastination.'
  },
  {
    icon: BookOpen,
    title: 'Exam Stress Toolkit',
    description: 'Techniques and tools for managing exam anxiety and pressure.'
  },
  {
    icon: MessageCircle,
    title: 'Parent Communication Guide',
    description: 'How to talk to your teen about stress without making it worse.'
  },
  {
    icon: Heart,
    title: 'Resilience Mini Exercise',
    description: 'A gentle but effective exercise for building emotional strength.'
  },
]

export default function LeadMagnetPage() {
  const [formData, setFormData] = useState({
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
        <section className="bg-olive text-cream section-padding">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-cream/20 text-cream">Free Download</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Overwhelmed Teen Starter Kit
              </h1>
              <p className="text-cream/80 text-lg mb-8">
                Everything you need to help your teen reset their approach to studying. 
                Practical tools, not motivation. Free to download.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="section-title text-center mb-4">What's Inside</h2>
            <p className="section-subtitle text-center mx-auto mb-12">
              Six practical resources designed for real teens facing real challenges.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kitContents.map((item, i) => (
                <Card key={i} hover className="bg-cream border-none">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-olive mb-4" />
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="section-padding bg-sand" id="download">
          <div className="container-main">
            <div className="max-w-xl mx-auto">
              {submitted ? (
                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-olive" />
                    </div>
                    <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                      You're All Set!
                    </h2>
                    <p className="text-warm-gray mb-6">
                      Check your email for the download link. We've also included 
                      a few helpful resources to get you started.
                    </p>
                    {formData.whatsappOptIn && (
                      <p className="text-sm text-warm-gray mb-6">
                        We'll send occasional WhatsApp messages with tips and resources. 
                        You can unsubscribe anytime.
                      </p>
                    )}
                    <Link href="/membership">
                      <Button>
                        Explore Membership
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-white">
                  <CardContent className="p-8">
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
                        type="email"
                        label="Email Address"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />

                      <Checkbox
                        label="Also send me occasional WhatsApp messages with tips (optional)"
                        checked={formData.whatsappOptIn}
                        onChange={(e) => setFormData({ ...formData, whatsappOptIn: e.target.checked })}
                      />

                      {error && (
                        <p className="text-sm text-red-500">{error}</p>
                      )}

                      <Button type="submit" className="w-full" size="lg" loading={loading}>
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
              <h2 className="section-title mb-6">Who Is This For?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif font-semibold text-charcoal mb-4">For Teens Who:</h3>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Feel overwhelmed by school and assignments</li>
                    <li>• Know they should study but can't get started</li>
                    <li>• Have tried "trying harder" without success</li>
                    <li>• Experience stress or anxiety around exams</li>
                    <li>• Feel like they're falling behind</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-charcoal mb-4">For Parents Who:</h3>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Want to help but don't know how</li>
                    <li>• Have tried talking to their teen without success</li>
                    <li>• Feel frustrated watching their teen struggle</li>
                    <li>• Want practical tools, not just advice</li>
                    <li>• Need a different approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main text-center">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Want More Structured Support?
            </h2>
            <p className="text-cream/80 mb-6 max-w-xl mx-auto">
              The free kit is a great starting point. For ongoing support, 
              consider joining our membership for continuous guidance and resources.
            </p>
            <Link href="/membership">
              <Button variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-olive">
                View Membership Options
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
