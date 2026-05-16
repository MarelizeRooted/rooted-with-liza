import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Video, Users } from 'lucide-react'

const sessions = [
  {
    id: '1',
    title: 'Teen Focus Group Session',
    date: '2024-01-20',
    time: '4:00 PM - 5:00 PM',
    type: 'teen',
    status: 'upcoming',
    description: 'Weekly check-in for teens to share experiences and support each other.',
  },
  {
    id: '2',
    title: 'Parent Workshop: Managing Study Stress',
    date: '2024-01-25',
    time: '7:00 PM - 8:30 PM',
    type: 'parent',
    status: 'upcoming',
    description: 'Learn practical strategies to help your teen manage exam stress.',
  },
  {
    id: '3',
    title: 'Resilience Building Workshop',
    date: '2024-02-01',
    time: '4:00 PM - 5:30 PM',
    type: 'teen',
    status: 'upcoming',
    description: 'Interactive workshop focused on building mental resilience.',
  },
]

const pastSessions = [
  {
    id: '4',
    title: 'Getting Started with Study Systems',
    date: '2024-01-10',
    type: 'teen',
    recording: true,
  },
  {
    id: '5',
    title: 'Understanding Your Learning Style',
    date: '2024-01-05',
    type: 'parent',
    recording: true,
  },
]

export default function SessionsPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">
              Upcoming Sessions
            </h1>
            <p className="text-warm-gray">
              Join our live workshops and support groups.
            </p>
          </div>

          {/* Upcoming Sessions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sessions.map((session) => (
              <Card key={session.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge 
                      variant="secondary" 
                      className={session.type === 'teen' ? 'bg-olive/10 text-olive' : 'bg-sand text-charcoal'}
                    >
                      {session.type === 'teen' ? 'Teen' : 'Parent'}
                    </Badge>
                    <Badge variant="secondary" className="text-olive">
                      {session.status}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-charcoal mb-3">
                    {session.title}
                  </h3>
                  
                  <p className="text-sm text-warm-gray mb-4">
                    {session.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-warm-gray">
                      <Calendar className="h-4 w-4" />
                      {new Date(session.date).toLocaleDateString('en-ZA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-warm-gray">
                      <Clock className="h-4 w-4" />
                      {session.time}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-olive hover:bg-olive/90">
                    <Video className="h-4 w-4 mr-2" />
                    Join Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Past Sessions */}
          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-6">
              Past Session Recordings
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {pastSessions.map((session) => (
                <Card key={session.id} className="bg-white">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-sand rounded-full flex items-center justify-center">
                        <Video className="h-5 w-5 text-warm-gray" />
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">
                          {session.title}
                        </h4>
                        <p className="text-sm text-warm-gray">
                          {new Date(session.date).toLocaleDateString('en-ZA', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-olive">
                      Watch Recording
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Session Info */}
          <div className="mt-12 p-6 bg-sand rounded-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-olive" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  About Our Sessions
                </h3>
                <p className="text-sm text-warm-gray">
                  All sessions are conducted via Zoom. You'll receive a link to join 
                  30 minutes before the session starts. Recordings are available for 
                  7 days after each session for members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
