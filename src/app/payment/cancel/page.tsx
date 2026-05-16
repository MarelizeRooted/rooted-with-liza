import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { XCircle, RefreshCw, ArrowLeft } from 'lucide-react'

export default function PaymentCancelPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-[70vh] flex items-center section-padding bg-cream">
        <div className="container-main max-w-lg mx-auto text-center">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-10 w-10 text-red-500" />
              </div>
              
              <h1 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Payment Cancelled
              </h1>
              
              <p className="text-warm-gray mb-6">
                Your payment was cancelled and no charges were made. 
                You can try again whenever you're ready.
              </p>

              <div className="bg-sand rounded-card p-4 mb-6">
                <p className="text-sm text-charcoal">
                  <strong>Need help?</strong>
                </p>
                <p className="text-sm text-warm-gray mt-2">
                  If you experienced any issues with the payment process, 
                  please contact us and we'll be happy to assist.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/shop">
                  <Button className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
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
