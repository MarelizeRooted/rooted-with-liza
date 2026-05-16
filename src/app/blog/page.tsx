import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: "Why 'Just Try Harder' Doesn't Work for Overwhelmed Teens",
    slug: 'why-try-harder-doesnt-work',
    excerpt: 'The push to work harder often makes things worse. Here\'s what actually helps when teens are struggling with school.',
    category: 'Teen Burnout',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'The 5-Day Study Reset: A Practical Guide',
    slug: '5-day-study-reset',
    excerpt: 'A step-by-step guide to resetting your study habits when things have gotten off track. Takes about 30 minutes a day.',
    category: 'Study Systems',
    date: '2024-01-08',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: '3',
    title: 'For Parents: How to Talk to Your Teen About School Stress',
    slug: 'talk-teen-school-stress',
    excerpt: 'Practical conversation starters and approaches for parents who want to support their teen without making things worse.',
    category: 'Parent Guidance',
    date: '2024-01-01',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: '4',
    title: 'Understanding Procrastination in Teens: It\'s Not Laziness',
    slug: 'understanding-procrastination',
    excerpt: 'When teens procrastinate, it\'s usually a sign of something deeper. Here\'s how to understand and address it.',
    category: 'Study Skills',
    date: '2023-12-20',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: '5',
    title: 'Building Emotional Resilience in Teen Students',
    slug: 'building-emotional-resilience',
    excerpt: 'Resilience isn\'t about being tough—it\'s about having the tools to bounce back. Here\'s how to develop it.',
    category: 'Emotional Resilience',
    date: '2023-12-15',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: '6',
    title: 'Exam Preparation: A Different Approach',
    slug: 'exam-preparation-different-approach',
    excerpt: 'Most exam prep advice focuses on content. This focuses on the system that makes content study effective.',
    category: 'Exam Preparation',
    date: '2023-12-10',
    readTime: '10 min read',
    featured: false,
  },
]

const categories = [
  'All',
  'Teen Burnout',
  'Study Systems',
  'Parent Guidance',
  'Study Skills',
  'Emotional Resilience',
  'Exam Preparation',
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="bg-sand section-padding">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-4">
              Resources & Articles
            </h1>
            <p className="text-warm-gray text-lg max-w-2xl">
              Practical insights on teen study support, burnout recovery, and 
              building sustainable academic resilience.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b border-sand">
          <div className="container-main py-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0 
                      ? 'bg-olive text-cream' 
                      : 'bg-sand text-charcoal hover:bg-beige'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            {posts.filter(p => p.featured).map((post) => (
              <Card key={post.id} className="bg-white overflow-hidden mb-8">
                <div className="grid md:grid-cols-2">
                  <div className="bg-sand h-64 md:h-auto flex items-center justify-center">
                    <div className="text-warm-gray/30 text-6xl font-serif">📚</div>
                  </div>
                  <CardContent className="p-8">
                    <Badge variant="default" className="mb-4">
                      {post.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-4">
                      {post.title}
                    </h2>
                    <p className="text-warm-gray mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-warm-gray mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-ZA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="section-title mb-8">All Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.filter(p => !p.featured).map((post) => (
                <Card key={post.id} hover className="bg-cream border-none">
                  <CardContent className="p-6">
                    <div className="bg-sand rounded-card h-32 mb-4 flex items-center justify-center">
                      <span className="text-3xl">📖</span>
                    </div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="font-serif font-semibold text-charcoal mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-warm-gray text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-warm-gray">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-ZA', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm">
                          Read
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main text-center">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Get Articles Delivered
            </h2>
            <p className="text-cream/80 mb-6 max-w-xl mx-auto">
              Subscribe to receive new articles and resources as they're published. 
              No spam, just practical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-card bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream"
              />
              <Button className="bg-cream text-olive hover:bg-beige">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
