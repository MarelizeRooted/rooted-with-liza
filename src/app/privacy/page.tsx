import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl font-serif font-semibold text-charcoal mb-6">
            Privacy Policy
          </h1>
          
          <div className="prose prose-olive space-y-4 text-warm-gray">
            <p>Last updated: January 2024</p>
            
            <h2 className="text-xl font-semibold text-charcoal">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Name and email address when you sign up</li>
              <li>Payment information processed through Paystack</li>
              <li>Communication preferences</li>
              <li>Content you download or access</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-charcoal">2. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Process payments securely</li>
              <li>Send you relevant updates and resources</li>
              <li>Improve our services</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-charcoal">3. Data Storage</h2>
            <p>
              Your data is stored securely in Supabase, our database provider. Payment information is handled directly by Paystack and is never stored on our servers.
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who help us operate our business (e.g., payment processors).
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. Contact us at rootedwithliza@gmail.com to exercise these rights.
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">6. Cookies</h2>
            <p>
              We use essential cookies to maintain your session and preferences. We do not use tracking or advertising cookies.
            </p>
            
            <h2 className="text-xl font-semibold text-charcoal">7. Contact</h2>
            <p>
              For privacy concerns, please contact us at rootedwithliza@gmail.com.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
