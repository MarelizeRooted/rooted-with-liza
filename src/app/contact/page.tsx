'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="section-padding bg-cream min-h-screen flex items-center">
          <div className="container-main max-w-xl mx-auto text-center">
            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-olive" />
            </div>
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-4">
              Message Sent!
            </h1>
            <p className="text-warm-gray mb-6">
              Thank you for reaching out. I'll get back to you within 24-48 hours.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSubmitted(false)}
              className="border-olive text-olive"
            >
              Send Another Message
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-4">
              Get in Touch
            </h1>
            <p className="text-warm-gray max-w-lg mx-auto">
              Have questions about membership, need support, or want to collaborate? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-olive" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Email</h3>
                <p className="text-sm text-warm-gray">rootedwithliza@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-olive" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">WhatsApp</h3>
                <p className="text-sm text-warm-gray">Available for members</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can I help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me more about how I can help you..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-olive hover:bg-olive/90"
                  disabled={loading}
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  )
}
