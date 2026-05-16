import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, X, ArrowRight, Users, Star } from 'lucide-react'

const tiers = [
  {
    name: 'Rooted Core',
    slug: 'rooted-core',
    price: 299,
    description: 'Your foundation for structured study and resilience.',
    features: [
      { name: 'Monthly study system pack', included: true },
      { name: 'Printable planners', included: true },
      { name: 'Basic exam kits', included: true },
      { name: 'Resilience worksheets', included: true },
      { name: 'Community access', included: true },
      { name: 'Monthly group teaching session', included: true },
      { name: 'Parent guidance PDFs', included: true },
      { name: 'Weekly live group sessions', included: false },
      { name: 'Full exam prep library', included: false },
      { name: 'Full digital resource vault', included: false },
      { name: 'Monthly parent workshop', included: false },
      { name: 'Teen accountability sessions', included: false },
      { name: 'Burnout recovery systems', included: false },
      { name: 'Priority Q&A access', included: false },
      { name: 'Small group coaching sessions', included: false },
      { name: 'Bootcamps included', included: false },
    ],
    cta: 'Start Core',
    popular: false,
  },
  {
    name: 'Rooted Plus',
    slug: 'rooted-plus',
    price: 599,
    description: 'Everything in Core, plus weekly sessions and full resource access.',
    features: [
      { name: 'Monthly study system pack', included: true },
      { name: 'Printable planners', included: true },
      { name: 'Basic exam kits', included: true },
      { name: 'Resilience worksheets', included: true },
      { name: 'Community access', included: true },
      { name: 'Monthly group teaching session', included: true },
      { name: 'Parent guidance PDFs', included: true },
      { name: 'Weekly live group sessions', included: true },
      { name: 'Full exam prep library', included: true },
      { name: 'Full digital resource vault', included: true },
      { name: 'Monthly parent workshop', included: true },
      { name: 'Teen accountability sessions', included: true },
      { name: 'Burnout recovery systems', included: true },
      { name: 'Priority Q&A access', included: true },
      { name: 'Small group coaching sessions', included: false },
      { name: 'Bootcamps included', included: false },
    ],
    cta: 'Join Plus',
    popular: true,
  },
  {
    name: 'Rooted Family',
    slug: 'rooted-family',
    price: 999,
    description: 'Complete family support with personal coaching.',
    features: [
      { name: 'Monthly study system pack', included: true },
      { name: 'Printable planners', included: true },
      { name: 'Basic exam kits', included: true },
      { name: 'Resilience worksheets', included: true },
      { name: 'Community access', included: true },
      { name: 'Monthly group teaching session', included: true },
      { name: 'Parent guidance PDFs', included: true },
      { name: 'Weekly live group sessions', included: true },
      { name: 'Full exam prep library', included: true },
      { name: 'Full digital resource vault', included: true },
      { name: 'Monthly parent workshop', included: true },
      { name: 'Teen accountability sessions', included: true },
      { name: 'Burnout recovery systems', included: true },
      { name: 'Priority Q&A access', included: true },
      { name: 'Small group coaching sessions', included: true },
      { name: 'Bootcamps included', included: true },
    ],
    cta: 'Join Family',
    popular: false,
  },
]

const faqs = [
  {
    question: "Can I switch between membership tiers?",
    answer: "Yes, you can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing period."
  },
  {
    question: "What if I need to cancel?",
    answer: "You can cancel your membership at any time. You'll continue to have access until the end of your current billing period."
  },
  {
    question: "Are bootcamps included in all tiers?",
    answer: "Bootcamps are available to all members at a discount. Rooted Family members get all bootcamps included. Rooted Plus members get one bootcamp included per quarter."
  },
  {
    question: "Can parents attend sessions alone?",
    answer: "Yes. Plus and Family memberships include dedicated parent-focused sessions. The Family membership includes additional family implementation strategy sessions."
  },
  {
    question: "What's the age range for teens?",
    answer: "Our programs are designed for teens roughly between 12 and 18 years old, covering the Intermediate and Senior Phase of education."
  },
]

export default function MembershipPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="bg-olive text-cream section-padding">
          <div className="container-main text-center">
            <Badge className="mb-4 bg-cream/20 text-cream">Membership</Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Structured Support That Grows With You
            </h1>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg">
              Three membership levels designed to meet you where you are. 
              Start with Core and upgrade as needed, or go all in with Family.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <Card 
                  key={tier.slug} 
                  className={`relative ${tier.popular ? 'ring-2 ring-olive' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-olive text-cream">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-warm-gray text-sm mb-4">
                      {tier.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-serif font-bold text-olive">
                        R{tier.price}
                      </span>
                      <span className="text-warm-gray">/month</span>
                    </div>
                    <Link href={`/signup?tier=${tier.slug}`} className="block mb-6">
                      <Button 
                        className="w-full" 
                        variant={tier.popular ? 'primary' : 'outline'}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                    <ul className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <li 
                          key={i} 
                          className={`flex items-center gap-2 text-sm ${
                            feature.included ? 'text-charcoal' : 'text-warm-gray/50'
                          }`}
                        >
                          {feature.included ? (
                            <CheckCircle className="h-4 w-4 text-olive flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-warm-gray/30 flex-shrink-0" />
                          )}
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bootcamp Access */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <Card className="bg-sand border-none">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                      Bootcamp Access by Tier
                    </h3>
                    <p className="text-warm-gray mb-4">
                      Bootcamps are standalone high-value programs available to all members:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary">Core</Badge>
                        <span className="text-warm-gray text-sm">Discount access to all bootcamps</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="default">Plus</Badge>
                        <span className="text-warm-gray text-sm">1 bootcamp included per quarter</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-olive-dark text-cream">Family</Badge>
                        <span className="text-warm-gray text-sm">Full bootcamp access included</span>
                      </li>
                    </ul>
                    <Link href="/bootcamps" className="inline-flex items-center mt-6 text-olive font-medium">
                      View Bootcamps
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-beige/30 rounded-card p-6">
                    <h4 className="font-serif font-semibold text-charcoal mb-3">
                      Available Bootcamps
                    </h4>
                    <ul className="space-y-2 text-sm text-warm-gray">
                      <li>• Exam Reset Bootcamp - R1,299</li>
                      <li>• Study Systems Bootcamp - R999</li>
                      <li>• Burnout Recovery Bootcamp - R1,199</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <h2 className="section-title text-center mb-8">
              Full Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-card overflow-hidden shadow-card">
                <thead>
                  <tr className="bg-sand">
                    <th className="text-left p-4 font-serif font-semibold text-charcoal">Feature</th>
                    <th className="text-center p-4 font-serif font-semibold text-charcoal">Core</th>
                    <th className="text-center p-4 font-serif font-semibold text-charcoal bg-olive/10">Plus</th>
                    <th className="text-center p-4 font-serif font-semibold text-charcoal">Family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-sand">
                    <td className="p-4 text-charcoal">Monthly study system pack</td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center bg-olive/5"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-sand">
                    <td className="p-4 text-charcoal">Printable planners</td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center bg-olive/5"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-sand">
                    <td className="p-4 text-charcoal">Weekly live sessions</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-warm-gray/30 mx-auto" /></td>
                    <td className="p-4 text-center bg-olive/5"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-sand">
                    <td className="p-4 text-charcoal">Full resource vault</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-warm-gray/30 mx-auto" /></td>
                    <td className="p-4 text-center bg-olive/5"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-sand">
                    <td className="p-4 text-charcoal">Parent workshop</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-warm-gray/30 mx-auto" /></td>
                    <td className="p-4 text-center bg-olive/5"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-sand">
                    <td className="p-4 text-charcoal">Small group coaching</td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-warm-gray/30 mx-auto" /></td>
                    <td className="p-4 text-center bg-olive/5"><X className="h-5 w-5 text-warm-gray/30 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-olive mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-sand font-semibold">
                    <td className="p-4 text-charcoal">Bootcamp access</td>
                    <td className="p-4 text-center text-sm">Discount</td>
                    <td className="p-4 text-center bg-olive/5 text-sm">1/quarter</td>
                    <td className="p-4 text-center text-sm">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="section-title text-center mb-8">
              Common Questions
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-warm-gray text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-sand">
          <div className="container-main text-center">
            <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-warm-gray mb-6 max-w-xl mx-auto">
              Start with the free starter kit to get a taste of our approach, 
              or join a membership that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lead-magnet">
                <Button variant="outline" size="lg">
                  Get Free Starter Kit
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg">
                  Join Membership
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
