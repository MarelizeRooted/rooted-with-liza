import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Calendar, Download, Play, Settings, CreditCard } from 'lucide-react'

const membershipDetails = {
  tier: 'Rooted Plus',
  status: 'active',
  renewsOn: '2024-02-15',
}

const resources = [
  {
    id: '1',
    title: 'January Study System Pack',
    type: 'study-pack',
    date: '2024-01-01',
  },
  {
    id: '2',
    title: 'Exam Preparation Guide',
    type: 'guide',
    date: '2024-01-10',
  },
  {
    id: '3',
    title: 'Weekly Planner Template',
    type: 'planner',
    date: '2024-01-15',
  },
]

const upcomingSessions = [
  {
    id: '1',
    title: 'Teen Focus Group Session',
    date: '2024-01-16',
    time: '4:00 PM',
    type: 'teen',
  },
  {
    id: '2',
    title: 'Parent Workshop: Study Stress',
    date: '2024-01-20',
    time: '7:00 PM',
    type: 'parent',
  },
]

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">
              Welcome Back
            </h1>
            <div className="flex items-center gap-4">
              <Badge variant="default" className="bg-olive">
                {membershipDetails.tier}
              </Badge>
              <span className="text-sm text-warm-gray">
                Renews on {new Date(membershipDetails.renewsOn).toLocaleDateString('en-ZA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-olive/10 rounded-card flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-olive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">12</p>
                  <p className="text-xs text-warm-gray">Resources</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-olive/10 rounded-card flex items-center justify-center">
                  <Play className="h-5 w-5 text-olive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">3</p>
                  <p className="text-xs text-warm-gray">Sessions This Month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-olive/10 rounded-card flex items-center justify-center">
                  <Download className="h-5 w-5 text-olive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">8</p>
                  <p className="text-xs text-warm-gray">Downloads</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-olive/10 rounded-card flex items-center justify-center">
                  <Users className="h-5 w-5 text-olive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">156</p>
                  <p className="text-xs text-warm-gray">Community Members</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* New Resources */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-serif font-semibold text-charcoal">
                      Latest Resources
                    </h2>
                    <Link href="/dashboard/resources">
                      <Button variant="ghost" size="sm">View All</Button>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {resources.map((resource) => (
                      <div key={resource.id} className="flex items-center justify-between p-4 bg-sand rounded-card">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-olive/10 rounded-card flex items-center justify-center">
                            <Download className="h-5 w-5 text-olive" />
                          </div>
                          <div>
                            <p className="font-medium text-charcoal">{resource.title}</p>
                            <p className="text-sm text-warm-gray">{resource.type}</p>
                          </div>
                        </div>
                        <Button size="sm">Download</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-serif font-semibold text-charcoal">
                      Upcoming Sessions
                    </h2>
                    <Link href="/dashboard/sessions">
                      <Button variant="ghost" size="sm">View Calendar</Button>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-sand rounded-card">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-card flex items-center justify-center ${
                            session.type === 'teen' ? 'bg-olive/10' : 'bg-terracotta/10'
                          }`}>
                            {session.type === 'teen' ? (
                              <Users className="h-5 w-5 text-olive" />
                            ) : (
                              <Users className="h-5 w-5 text-terracotta" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-charcoal">{session.title}</p>
                            <p className="text-sm text-warm-gray">
                              {new Date(session.date).toLocaleDateString('en-ZA', {
                                month: 'short',
                                day: 'numeric',
                              })} at {session.time}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Join</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Account */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-charcoal mb-4">
                    Your Account
                  </h3>
                  <div className="space-y-3">
                    <Link href="/dashboard/account" className="flex items-center gap-3 text-charcoal hover:text-olive transition-colors">
                      <Settings className="h-4 w-4" />
                      Account Settings
                    </Link>
                    <Link href="/dashboard/membership" className="flex items-center gap-3 text-charcoal hover:text-olive transition-colors">
                      <CreditCard className="h-4 w-4" />
                      Manage Membership
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-olive text-cream">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold mb-4">
                    Need Help?
                  </h3>
                  <p className="text-cream/80 text-sm mb-4">
                    Access the help center or contact support for assistance.
                  </p>
                  <Button variant="secondary" className="w-full border-cream text-cream hover:bg-cream hover:text-olive">
                    Get Support
                  </Button>
                </CardContent>
              </Card>

              {/* Upgrade CTA */}
              <Card className="bg-sand border-none">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-charcoal mb-2">
                    Upgrade Your Membership
                  </h3>
                  <p className="text-warm-gray text-sm mb-4">
                    Get more resources, sessions, and support with Rooted Family.
                  </p>
                  <Link href="/membership">
                    <Button className="w-full">View Options</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
