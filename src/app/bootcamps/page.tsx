import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Clock, Calendar, ArrowRight } from 'lucide-react'

const bootcamps = [
  {
    id: '1',
    name: 'Exam Reset Bootcamp',
    slug: 'exam-reset-bootcamp',
    description: 'A 4-week intensive program designed to help teens reset their exam approach. Learn proven study techniques, build sustainable routines, and develop confidence for exam success.',
    shortDescription: 'Transform your exam approach in 4 weeks',
    price: 1299,
    duration: '4 weeks',
    schedule: 'Live sessions every Tuesday at 4pm',
    maxParticipants: 30,
    currentEnrollments: 18,
    outcomes: [
      'Understanding your personal learning style',
      'Building a sustainable study schedule',
      'Mastering active recall techniques',
      'Managing exam anxiety effectively',
      'Creating effective revision plans',
      'Building lasting study habits',
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'Study Systems Bootcamp',
    slug: 'study-systems-bootcamp',
    description: 'Learn how to build a complete study system that works for your brain. This 3-week bootcamp covers planning, execution, review, and adaptation.',
    shortDescription: 'Build a study system that actually works',
    price: 999,
    duration: '3 weeks',
    schedule: 'Live sessions every Thursday at 4pm',
    maxParticipants: 40,
    currentEnrollments: 12,
    outcomes: [
      'Designing your ideal study environment',
      'Creating subject-specific study approaches',
      'Building review cycles that stick',
      'Using spaced repetition effectively',
      'Tracking progress and adjusting',
    ],
    featured: false,
  },
  {
    id: '3',
    name: 'Burnout Recovery Bootcamp',
    slug: 'burnout-recovery-bootcamp',
    description: 'A compassionate 4-week program for teens who are experiencing study burnout. Gentle, practical recovery strategies with ongoing support.',
    shortDescription: 'A compassionate recovery program',
    price: 1199,
    duration: '4 weeks',
    schedule: 'Live sessions every Wednesday at 4pm',
    maxParticipants: 25,
    currentEnrollments: 8,
    outcomes: [
      'Understanding burnout and its signs',
      'Creating a gentle recovery plan',
      'Gradual reintroduction to study',
      'Building sustainable routines',
      'Developing self-compassion practices',
      'Preventing future burnout',
    ],
    featured: false,
  },
]

export default function BootcampsPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="bg-olive text-cream section-padding">
          <div className="container-main">
            <Badge className="mb-4 bg-cream/20 text-cream">Programs</Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Bootcamps
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl">
              Intensive, structured programs for teens who need a reset. 
              Live sessions, practical tools, and ongoing support.
            </p>
          </div>
        </section>

        {/* Bootcamp List */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="space-y-8">
              {bootcamps.map((bootcamp) => (
                <Card key={bootcamp.id} className="bg-white overflow-hidden">
                  <div className="grid lg:grid-cols-3">
                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {bootcamp.duration}
                          </Badge>
                          <h2 className="text-2xl font-serif font-semibold text-charcoal">
                            {bootcamp.name}
                          </h2>
                          <p className="text-warm-gray mt-1">{bootcamp.shortDescription}</p>
                        </div>
                        {bootcamp.featured && (
                          <Badge className="bg-terracotta text-cream">Popular</Badge>
                        )}
                      </div>
                      
                      <p className="text-charcoal mb-6">{bootcamp.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className="h-5 w-5 text-olive" />
                          <span className="text-warm-gray">{bootcamp.schedule}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="h-5 w-5 text-olive" />
                          <span className="text-warm-gray">
                            {bootcamp.currentEnrollments}/{bootcamp.maxParticipants} enrolled
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif font-semibold text-charcoal mb-3">
                        What You'll Learn
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {bootcamp.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-warm-gray">
                            <CheckCircle className="h-4 w-4 text-olive flex-shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Enrollment Sidebar */}
                    <div className="bg-sand p-8">
                      <div className="mb-6">
                        <p className="text-warm-gray text-sm mb-1">Investment</p>
                        <p className="text-4xl font-serif font-bold text-olive">
                          R{bootcamp.price}
                        </p>
                        <p className="text-warm-gray text-sm">per person</p>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-sm text-warm-gray mb-2">Membership Pricing:</p>
                        <ul className="text-sm space-y-1">
                          <li className="flex justify-between">
                            <span>Core Members</span>
                            <span className="text-olive font-medium">10% off</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Plus Members</span>
                            <span className="text-olive font-medium">1 free/quarter</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Family Members</span>
                            <span className="text-olive font-medium">Included</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button className="w-full mb-3">
                        Enroll Now
                      </Button>
                      <Link href={`/bootcamps/${bootcamp.slug}`} className="block">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                      
                      <div className="mt-4 pt-4 border-t border-beige">
                        <div className="bg-white rounded-card p-4">
                          <p className="text-xs text-warm-gray mb-2">Starts soon</p>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-olive" />
                            <span className="text-sm font-medium text-charcoal">
                              {Math.ceil((bootcamp.maxParticipants - bootcamp.currentEnrollments) / 3)} spots left
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section className="section-padding bg-sand">
          <div className="container-main">
            <Card className="bg-olive text-cream border-none">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4">
                      Get Bootcamps Included with Family Membership
                    </h3>
                    <p className="text-cream/80 mb-6">
                      Rooted Family members get unlimited access to all bootcamps, 
                      plus small group coaching and personalized feedback.
                    </p>
                    <Link href="/membership">
                      <Button variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-olive">
                        View Family Membership
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-serif font-bold mb-2">R999</p>
                    <p className="text-cream/70">Family membership / month</p>
                    <p className="text-sm text-cream/50 mt-2">
                      Includes all bootcamps + coaching
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
