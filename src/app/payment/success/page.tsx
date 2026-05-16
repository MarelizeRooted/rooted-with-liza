import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Download, ArrowRight } from 'lucide-react'

export default function PaymentSuccessPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-[70vh] flex items-center section-padding bg-cream">
        <div className="container-main max-w-lg mx-auto text-center">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Payment Successful!
              </h1>
              
              <p className="text-warm-gray mb-6">
                Thank you for your purchase. Your payment has been processed successfully.
                You will receive a confirmation email shortly.
              </p>

              <div className="bg-sand rounded-card p-4 mb-6">
                <p className="text-sm text-charcoal">
                  <strong>What happens next?</strong>
                </p>
                <ul className="text-sm text-warm-gray mt-2 space-y-1 text-left">
                  <li>• Check your email for confirmation and download link</li>
                  <li>• Access your purchased resources from your dashboard</li>
                  <li>• If you purchased a bootcamp, you'll receive session details</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/dashboard">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                    <ArrowRight className="h-4 w-4 ml-2" />
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
