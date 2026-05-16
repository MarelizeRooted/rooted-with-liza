import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, BookOpen, Heart, Users, Zap, Shield, Clock } from 'lucide-react'

const testimonials = [
  {
    quote: "Liza helped my daughter understand that struggling with studying doesn't mean she's lazy. She learned actual systems that work for her brain.",
    author: "Sarah M.",
    role: "Parent of Grade 10 student",
  },
  {
    quote: "I was burned out and felt like I was failing. The Bootcamp gave me practical tools and a reset I actually needed.",
    author: "Jordan (16)",
    role: "Grade 11 student",
  },
  {
    quote: "The monthly workshops have changed how I support my teens. I'm not trying to fix them anymore - I'm learning how to actually help.",
    author: "Micheal K.",
    role: "Parent of two teens",
  },
]

const valueProps = [
  {
    icon: BookOpen,
    title: "Study Systems That Work",
    description: "Not generic advice. Actual frameworks designed for real teens with real challenges.",
  },
  {
    icon: Heart,
    title: "Emotional Resilience Training",
    description: "Build the internal strength to handle academic pressure without breaking.",
  },
  {
    icon: Users,
    title: "Parent Guidance Included",
    description: "Learn how to support your teen without adding to their stress.",
  },
  {
    icon: Zap,
    title: "Burnout Recovery",
    description: "Practical, compassionate recovery for teens who've hit a wall.",
  },
  {
    icon: Shield,
    title: "Structured Support",
    description: "A complete system, not random tips. Everything connects and builds.",
  },
  {
    icon: Clock,
    title: "Built for South Africa",
    description: "Designed specifically for the CAPS curriculum and local context.",
  },
]

const problems = [
  "Your teen seems overwhelmed but won't talk about it",
  "You've tried motivational talks and they don't stick",
  "They know they should study but can't seem to start",
  "Exams cause anxiety that affects performance",
  "You want to help but don't know how",
  "They've tried studying harder but nothing changes",
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-sand to-beige" />
          <div className="absolute inset-0 paper-texture" />
          
          <div className="container-main relative z-10 py-20">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                Structured Support for Overwhelmed Teens
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-tight mb-6 fade-in">
                When "Just Try Harder" 
                <span className="block text-olive">Isn't Working</span>
              </h1>
              
              <p className="text-lg md:text-xl text-warm-gray mb-8 max-w-2xl fade-in stagger-1">
                A structured support system for teens who've hit a wall and parents who 
                don't know how to help. Not motivation. Actual systems, tools, and guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
                <Link href="/lead-magnet">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Free Starter Kit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/membership">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    View Membership
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">
                  Sound familiar?
                </h2>
                <p className="text-warm-gray mb-6">
                  You love your teen. You want to help. But nothing you try seems to make 
                  a real difference. They say they understand, but the patterns keep repeating.
                </p>
                <ul className="space-y-3">
                  {problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal">
                      <span className="text-terracotta mt-1">•</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="bg-sand/50 border-none">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">
                    The truth nobody talks about
                  </h3>
                  <p className="text-warm-gray mb-4">
                    Most teens who struggle aren't lazy. They don't lack intelligence. 
                    They lack <em>systems</em> that work with their brain.
                  </p>
                  <p className="text-warm-gray mb-4">
                    Pushing harder without the right approach just creates more exhaustion. 
                    What they need is a different way—not more effort, but <strong>smarter systems</strong>.
                  </p>
                  <p className="text-charcoal font-medium">
                    That's what Rooted With Liza provides.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">What We Actually Provide</h2>
              <p className="section-subtitle mx-auto">
                Not another motivational program. A structured system designed for 
                teens who need practical support, not pep talks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.map((prop, i) => (
                <Card key={i} hover className="bg-white">
                  <CardContent className="p-6">
                    <prop.icon className="h-10 w-10 text-olive mb-4" />
                    <h3 className="text-lg font-serif font-semibold text-charcoal mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-warm-gray text-sm">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Spotlight */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="default" className="mb-4 bg-cream/20 text-cream">
                  Most Popular
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                  Rooted Plus Membership
                </h2>
                <p className="text-cream/80 mb-6 text-lg">
                  Everything a teen needs to build sustainable study systems and 
                  the emotional resilience to match. R599/month.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Weekly live group sessions",
                    "Full exam prep library",
                    "Complete resource vault",
                    "Monthly parent workshop",
                    "Burnout recovery systems",
                    "Priority Q&A access"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-beige" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/membership">
                  <Button variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-olive">
                    See All Membership Options
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <Card className="bg-white text-charcoal">
                <CardContent className="p-8">
                  <div className="text-center">
                    <p className="text-warm-gray mb-2">Starting at</p>
                    <p className="text-5xl font-serif font-bold text-olive">R299</p>
                    <p className="text-warm-gray mb-6">/month</p>
                    <p className="text-sm mb-6">
                      Core membership includes monthly study packs, printable planners, 
                      and community access.
                    </p>
                    <Link href="/membership">
                      <Button className="w-full">Compare Plans</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Magnet CTA */}
        <section className="section-padding bg-sand">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title mb-4">
                Start with the Free Starter Kit
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                The Overwhelmed Teen Starter Kit includes a 5-day reset plan, 
                study schedule template, and a parent communication guide. 
                No commitment—just practical tools.
              </p>
              <Link href="/lead-magnet">
                <Button size="lg">
                  Download Free Kit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="section-title text-center mb-12">
              What Families Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="bg-cream border-none">
                  <CardContent className="p-6">
                    <p className="text-charcoal italic mb-4 font-accent text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-medium text-charcoal">{testimonial.author}</p>
                      <p className="text-sm text-warm-gray">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Preview */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="section-title">Digital Resources</h2>
                <p className="text-warm-gray">
                  Practical tools available for one-time purchase.
                </p>
              </div>
              <Link href="/shop">
                <Button variant="ghost">
                  View Shop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Exam Prep Kit",
                  price: "R199",
                  desc: "Complete toolkit for exam preparation"
                },
                {
                  name: "Study Planner Pack",
                  price: "R99",
                  desc: "Printable planners and trackers"
                },
                {
                  name: "Burnout Recovery Kit",
                  price: "R249",
                  desc: "Gentle recovery tools and guides"
                }
              ].map((product, i) => (
                <Card key={i} hover className="bg-white">
                  <CardContent className="p-6">
                    <div className="bg-sand rounded-card h-32 mb-4 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-warm-gray/50" />
                    </div>
                    <h3 className="font-serif font-semibold text-charcoal mb-1">
                      {product.name}
                    </h3>
                    <p className="text-warm-gray text-sm mb-3">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-olive">{product.price}</span>
                      <Link href="/shop">
                        <Button variant="ghost" size="sm">View</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-olive-dark text-cream">
          <div className="container-main text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Build Something That Lasts?
            </h2>
            <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
              Whether you need a quick reset or ongoing structured support, 
              we have options that meet you where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lead-magnet">
                <Button size="lg" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-olive">
                  Start Free
                </Button>
              </Link>
              <Link href="/membership">
                <Button size="lg" className="bg-cream text-olive hover:bg-beige">
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
