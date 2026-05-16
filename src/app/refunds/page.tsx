import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RefreshCw, Mail, MessageCircle } from 'lucide-react'

export default function RefundsPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="h-8 w-8 text-olive" />
            </div>
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-4">
              Refund Policy
            </h1>
            <p className="text-warm-gray max-w-lg mx-auto">
              We want you to be completely satisfied with your purchase. 
              Here's how our refund process works.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-semibold text-charcoal mb-3">
                  7-Day Money-Back Guarantee
                </h2>
                <p className="text-warm-gray">
                  We offer a 7-day money-back guarantee on all digital products 
                  and memberships. If you're not satisfied within the first 7 days 
                  of your purchase, contact us for a full refund.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-semibold text-charcoal mb-3">
                  How to Request a Refund
                </h2>
                <p className="text-warm-gray mb-4">
                  To request a refund, please contact us with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-warm-gray">
                  <li>Your name and email address</li>
                  <li>Order number or receipt</li>
                  <li>Reason for the refund request</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-semibold text-charcoal mb-3">
                  Refund Timeline
                </h2>
                <p className="text-warm-gray">
                  Once your refund request is approved, the refund will be processed 
                  within 5-10 business days. The refund will be credited to your 
                  original payment method.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-semibold text-charcoal mb-3">
                  Non-Refundable Items
                </h2>
                <p className="text-warm-gray">
                  Due to the digital nature of our products, we cannot offer refunds 
                  after 7 days from the date of purchase. However, if you experience 
                  technical issues accessing our materials, please contact us and we'll 
                  resolve it promptly.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-sand rounded-card">
            <h3 className="font-semibold text-charcoal mb-4">
              Contact Us About Refunds
            </h3>
            <p className="text-sm text-warm-gray mb-6">
              Have questions about refunds? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-olive text-olive flex-1">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </Button>
              <Button className="bg-olive hover:bg-olive/90 flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
