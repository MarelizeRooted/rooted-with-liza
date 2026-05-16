import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, CreditCard, Calendar, AlertCircle } from 'lucide-react'

const membershipDetails = {
  tier: 'Rooted Plus',
  status: 'active',
  renewsOn: '2024-02-15',
  price: 599,
  features: [
    'Access to all digital resources',
    'Weekly group sessions',
    'Parent community access',
    'Study planning tools',
    'Email support',
  ],
}

const plans = [
  {
    name: 'Rooted Core',
    price: 299,
    description: 'Perfect for self-motivated teens',
    features: [
      'Access to basic resources',
      'Bi-weekly group sessions',
      'Study planning templates',
    ],
    current: false,
  },
  {
    name: 'Rooted Plus',
    price: 599,
    description: 'Most popular for teens needing support',
    features: [
      'Access to all digital resources',
      'Weekly group sessions',
      'Parent community access',
      'Study planning tools',
      'Email support',
    ],
    current: true,
  },
  {
    name: 'Rooted Family',
    price: 999,
    description: 'For families with multiple teens',
    features: [
      'Everything in Rooted Plus',
      'Up to 3 teen accounts',
      'Family coaching sessions',
      'Priority support',
      'Workshop discounts',
    ],
    current: false,
  },
]

export default function MembershipPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main max-w-4xl">
          <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">
            Membership
          </h1>
          <p className="text-warm-gray mb-8">
            Manage your membership plan and billing.
          </p>

          {/* Current Plan */}
          <Card className="bg-white mb-8">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-charcoal">
                      {membershipDetails.tier}
                    </h2>
                    <Badge className="bg-olive">{membershipDetails.status}</Badge>
                  </div>
                  <p className="text-warm-gray">
                    Your current membership plan
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-charcoal">
                    R{membershipDetails.price}
                    <span className="text-sm font-normal text-warm-gray">/month</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-sand pt-6 mb-6">
                <h3 className="font-medium text-charcoal mb-4">Your Features:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {membershipDetails.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-olive" />
                      <span className="text-warm-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-sand rounded-card mb-6">
                <Calendar className="h-5 w-5 text-warm-gray" />
                <div className="flex-1">
                  <p className="text-sm text-warm-gray">Next billing date</p>
                  <p className="font-medium text-charcoal">
                    {new Date(membershipDetails.renewsOn).toLocaleDateString('en-ZA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="border-olive text-olive">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Update Payment
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 border-olive text-olive">
                  Cancel Membership
                </Button>
                <Button className="flex-1 bg-olive hover:bg-olive/90">
                  Upgrade to Family
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Available Plans */}
          <h2 className="text-xl font-semibold text-charcoal mb-6">
            Available Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`bg-white ${plan.current ? 'ring-2 ring-olive' : ''}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-1">{plan.name}</h3>
                  <p className="text-sm text-warm-gray mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-charcoal">
                      R{plan.price}
                    </span>
                    <span className="text-warm-gray">/month</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-olive mt-0.5" />
                        <span className="text-sm text-warm-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.current ? (
                    <Badge className="w-full justify-center bg-olive">Current Plan</Badge>
                  ) : (
                    <Button 
                      variant={plan.name === 'Rooted Family' ? 'primary' : 'outline'} 
                      className={`w-full ${plan.name === 'Rooted Family' ? 'bg-olive hover:bg-olive/90' : 'border-olive text-olive'}`}
                    >
                      {plan.price > membershipDetails.price ? 'Upgrade' : 'Downgrade'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <div className="p-6 bg-sand rounded-card">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-olive flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Questions about membership?
                </h3>
                <p className="text-sm text-warm-gray mb-4">
                  Contact us at rootedwithliza@gmail.com for help with your membership, 
                  billing questions, or if you need to make changes to your plan.
                </p>
                <Button variant="outline" size="sm" className="border-olive text-olive">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
