import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export default function TermsPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl font-serif font-semibold text-charcoal mb-6">
            Terms of Service
          </h1>
          
          <div className="prose prose-olive space-y-4 text-warm-gray">
            <p>Last updated: January 2024</p>
            
            <h2 className="text-xl font-semibold text-charcoal">1. Agreement to Terms</h2>
            <p>
              By accessing or using Rooted With Liza services, you agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">2. Services</h2>
            <p>
              Rooted With Liza provides resilience and study support services for teens and parents, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Membership programs with digital resources</li>
              <li>Study planning tools and materials</li>
              <li>Parent workshops and guidance</li>
              <li>Bootcamp programs</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-charcoal">3. Membership</h2>
            <p>
              Membership fees are billed monthly. You may cancel your membership at any time, and access will continue until the end of your billing period.
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">4. Payment</h2>
            <p>
              Payments are processed securely through Paystack. All prices are in South African Rand (ZAR).
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">5. User Responsibilities</h2>
            <p>
              Users agree to use our services responsibly and not share account access with others.
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">6. Contact</h2>
            <p>
              For questions about these terms, please contact us at rootedwithliza@gmail.com.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
