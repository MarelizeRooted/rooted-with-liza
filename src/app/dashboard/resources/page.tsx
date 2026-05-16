import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, FileText, BookOpen, Calendar } from 'lucide-react'

const resources = [
  {
    id: '1',
    title: 'January Study System Pack',
    type: 'study-pack',
    date: '2024-01-01',
    description: 'Complete study system templates and worksheets for the new year.',
  },
  {
    id: '2',
    title: 'Exam Preparation Guide',
    type: 'guide',
    date: '2024-01-10',
    description: 'Comprehensive guide to preparing for exams without stress.',
  },
  {
    id: '3',
    title: 'Weekly Planner Template',
    type: 'planner',
    date: '2024-01-15',
    description: 'Printable weekly planner to organize your study sessions.',
  },
  {
    id: '4',
    title: 'Focus Tracker',
    type: 'tracker',
    date: '2024-01-20',
    description: 'Track your focus sessions and identify your most productive times.',
  },
  {
    id: '5',
    title: 'Resilience Journal Prompts',
    type: 'journal',
    date: '2024-01-25',
    description: 'Daily journal prompts to build mental resilience.',
  },
  {
    id: '6',
    title: 'Parent Support Guide',
    type: 'guide',
    date: '2024-02-01',
    description: 'How to support your teen through exam season.',
  },
]

const typeIcons: Record<string, React.ReactNode> = {
  'study-pack': <BookOpen className="h-5 w-5" />,
  'guide': <FileText className="h-5 w-5" />,
  'planner': <Calendar className="h-5 w-5" />,
  'tracker': <FileText className="h-5 w-5" />,
  'journal': <BookOpen className="h-5 w-5" />,
}

const typeLabels: Record<string, string> = {
  'study-pack': 'Study Pack',
  'guide': 'Guide',
  'planner': 'Planner',
  'tracker': 'Tracker',
  'journal': 'Journal',
}

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">
              Member Resources
            </h1>
            <p className="text-warm-gray">
              Download and access all your member resources here.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-olive/10 rounded-card flex items-center justify-center text-olive">
                      {typeIcons[resource.type]}
                    </div>
                    <Badge variant="secondary" className="bg-sand text-charcoal">
                      {typeLabels[resource.type]}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-charcoal mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-warm-gray mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-warm-gray">
                      {new Date(resource.date).toLocaleDateString('en-ZA', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    
                    <Button variant="ghost" size="sm" className="text-olive">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Need Help Section */}
          <div className="mt-12 p-6 bg-sand rounded-card">
            <h3 className="font-semibold text-charcoal mb-2">
              Need something specific?
            </h3>
            <p className="text-sm text-warm-gray mb-4">
              Contact us if you need access to a specific resource or have any questions about your membership.
            </p>
            <Button variant="primary" size="sm" className="bg-olive hover:bg-olive/90">
              Contact Support
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
