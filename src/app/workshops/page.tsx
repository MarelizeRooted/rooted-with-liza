import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

const workshops = [
  {
    id: '1',
    title: 'Understanding Teen Study Stress',
    slug: 'teen-study-stress',
    description: 'A monthly workshop for parents to understand the sources of study stress in teens and learn practical ways to support them without adding pressure.',
    shortDescription: 'Understanding and addressing study stress',
    price: 199,
    date: '2024-02-15',
    time: '7:00 PM',
    duration: '90 minutes',
    topic: 'Parent Support',
    spotsLeft: 12,
  },
  {
    id: '2',
    title: 'Building Teen Resilience',
    slug: 'building-teen-resilience',
    description: 'Learn practical strategies for helping your teen develop emotional resilience that will serve them throughout their academic journey and beyond.',
    shortDescription: 'Strategies for lasting emotional strength',
    price: 199,
    date: '2024-03-01',
    time: '7:00 PM',
    duration: '90 minutes',
    topic: 'Parent Support',
    spotsLeft: 18,
  },
  {
    id: '3',
    title: 'Creating Home Study Routines',
    slug: 'home-study-routines',
    description: 'A workshop on creating effective study routines at home that support your teen without becoming a source of conflict.',
    shortDescription: 'Building sustainable home routines',
    price: 199,
    date: '2024-03-15',
    time: '7:00 PM',
    duration: '90 minutes',
    topic: 'Parent Support',
    spotsLeft: 20,
  },
]

export default function WorkshopsPage() {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="bg-olive text-cream section-padding">
          <div className="container-main">
            <Badge className="mb-4 bg-cream/20 text-cream">Workshops</Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Parent Workshops
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl">
              Monthly online workshops helping parents support their teens through 
              academic challenges without adding to the pressure.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">What You Get</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-sand border-none">
                  <CardContent className="p-6">
                    <Calendar className="h-8 w-8 text-olive mb-4" />
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Monthly Sessions
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Live online workshops every month, each focused on a specific challenge 
                      parents face when supporting teens.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-sand border-none">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-olive mb-4" />
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      90-Minute Format
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Long enough to go deep, short enough to fit into busy schedules. 
                      7:00 PM - 8:30 PM South African time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-sand border-none">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-olive mb-4" />
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Interactive Format
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Q&A time built in. Get answers to your specific situation, 
                      not just generic advice.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-sand border-none">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-olive mb-4" />
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Recording Access
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Can't attend live? No problem. All workshops are recorded 
                      for members to watch later.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <h2 className="section-title text-center mb-8">Upcoming Workshops</h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              {workshops.map((workshop) => (
                <Card key={workshop.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {workshop.topic}
                        </Badge>
                        <h3 className="text-xl font-serif font-semibold text-charcoal">
                          {workshop.title}
                        </h3>
                        <p className="text-warm-gray text-sm mt-1">
                          {workshop.shortDescription}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-serif font-bold text-olive">
                          R{workshop.price}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-warm-gray mb-4">{workshop.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-warm-gray">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(workshop.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {workshop.time} ({workshop.duration})
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-sand">
                      <p className="text-sm text-warm-gray">
                        {workshop.spotsLeft} spots remaining
                      </p>
                      <Button>Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Access */}
        <section className="section-padding bg-sand">
          <div className="container-main">
            <Card className="bg-olive text-cream border-none">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4">
                      Included in Plus & Family Memberships
                    </h3>
                    <p className="text-cream/80 mb-6">
                      Parent workshops are included in Rooted Plus and Rooted Family memberships. 
                      Plus members get monthly workshops included. Family members get everything 
                      plus additional family strategy sessions.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-beige" />
                        <span>All monthly workshops</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-beige" />
                        <span>Workshop recordings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-beige" />
                        <span>Family sessions (Family tier)</span>
                      </li>
                    </ul>
                    <Link href="/membership">
                      <Button variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-olive">
                        View Membership Options
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="text-center bg-olive-dark rounded-card p-8">
                    <p className="text-cream/60 mb-2">From</p>
                    <p className="text-5xl font-serif font-bold">R599</p>
                    <p className="text-cream/70 mb-4">/month</p>
                    <p className="text-sm text-cream/60">
                      Plus membership includes all workshops
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
