import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Filter, BookOpen, ArrowRight } from 'lucide-react'
import { ShopProductCard } from '@/components/shop/ShopProductCard'

const products = [
  {
    id: '1',
    name: 'Exam Prep Kit - Senior Phase',
    slug: 'exam-prep-kit-senior',
    description: 'A comprehensive exam preparation kit for Grades 7-9. Includes study schedule templates, revision techniques, stress management tools, and practice planning worksheets.',
    price: 199,
    memberPrice: 159,
    category: 'kits',
    isFeatured: true,
    image: 'kit',
  },
  {
    id: '2',
    name: 'Study Planner Printable Pack',
    slug: 'study-planner-pack',
    description: 'A collection of printable study planners including weekly schedules, subject trackers, and goal-setting worksheets.',
    price: 99,
    memberPrice: 89,
    category: 'planners',
    isFeatured: true,
    image: 'planner',
  },
  {
    id: '3',
    name: 'Resilience Journal for Teens',
    slug: 'resilience-journal-teens',
    description: 'A guided journal for building emotional resilience. Includes daily prompts, reflection exercises, and coping strategy templates.',
    price: 149,
    memberPrice: 127,
    category: 'journals',
    isFeatured: false,
    image: 'journal',
  },
  {
    id: '4',
    name: 'Focus & Productivity Tracker',
    slug: 'focus-tracker',
    description: 'Track your study sessions, breaks, and productivity patterns. Includes daily, weekly, and monthly tracking sheets.',
    price: 79,
    memberPrice: 71,
    category: 'tracks',
    isFeatured: false,
    image: 'tracker',
  },
  {
    id: '5',
    name: 'Burnout Recovery Kit',
    slug: 'burnout-recovery-kit',
    description: 'A gentle but practical toolkit for recovering from study burnout. Includes self-assessment tools, recovery plans, and gradual re-entry strategies.',
    price: 249,
    memberPrice: 187,
    category: 'kits',
    isFeatured: true,
    image: 'burnout',
  },
  {
    id: '6',
    name: 'Complete Study Systems Bundle',
    slug: 'study-systems-bundle',
    description: 'Get all our study system resources at once. Includes the Study Planner Pack, Exam Prep Kit, Focus Tracker, and Resilience Journal at a special bundle price.',
    price: 499,
    memberPrice: 349,
    category: 'bundles',
    isFeatured: true,
    image: 'bundle',
  },
]

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'planners', name: 'Planners' },
  { id: 'kits', name: 'Kits' },
  { id: 'journals', name: 'Journals' },
  { id: 'tracks', name: 'Trackers' },
  { id: 'bundles', name: 'Bundles' },
]

export default function ShopPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="bg-sand section-padding">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-4">
              Digital Resources Shop
            </h1>
            <p className="text-warm-gray text-lg max-w-2xl">
              Practical tools for teens and parents. Download instantly. 
              Secure payment via Paystack. Members get discounted prices.
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-card p-6 shadow-card sticky top-24">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="h-5 w-5 text-olive" />
                    <h3 className="font-serif font-semibold text-charcoal">Categories</h3>
                  </div>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button className="w-full text-left px-3 py-2 rounded-card text-charcoal hover:bg-sand transition-colors text-sm">
                          {cat.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-sand">
                    <p className="text-sm text-warm-gray mb-2">Member Pricing</p>
                    <p className="text-xs text-warm-gray">
                      Members save 10-30% on all products. 
                      <Link href="/membership" className="text-olive underline ml-1">
                        Join membership
                      </Link>
                    </p>
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="flex-1">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Get Member Pricing on All Products
              </h2>
              <p className="text-cream/80 mb-6">
                Join Rooted Plus for R599/month and get 20% off all shop products, 
                plus weekly live sessions and full resource access.
              </p>
              <Link href="/membership">
                <Button variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-olive">
                  View Membership Options
                  <ArrowRight className="ml-2 h-4 w-4" />
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

// Need to import Button
import { Button } from '@/components/ui/button'
