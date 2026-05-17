import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Heart, Users, Sparkles, Moon, Sun, Shield } from 'lucide-react'

const principles = [
  {
    icon: Heart,
    title: "You Are Not Alone",
    description: "The overwhelm your teen feels—and the helplessness you feel watching them—it's real. But struggling doesn't mean failing.",
  },
  {
    icon: Shield,
    title: "Roots Before Results",
    description: "We build internal foundation first: emotional resilience, self-understanding, quiet confidence. Everything else grows from there.",
  },
  {
    icon: Moon,
    title: "Rest Is Not Weakness",
    description: "Sustainable success comes from rhythm, not burnout. We teach teens to honour their limits while reaching for their potential.",
  },
  {
    icon: Sun,
    title: "Faith Is Central",
    description: "Our work is rooted in the belief that lasting change comes from connecting with something greater than ourselves.",
  },
]

const testimonials = [
  {
    quote: "For the first time, my daughter spoke about feeling 'grounded' instead of just surviving. The shift was palpable. Liza doesn't just teach—she walks alongside.",
    author: "Carla",
    role: "Mother to Emma, 15",
  },
  {
    quote: "I didn't know how to help my son without making things worse. ROOTED gave me language, tools, and most importantly, hope. We both breathed again.",
    author: "David",
    role: "Father to Luke, 16",
  },
  {
    quote: "The weekly sessions became something I looked forward to. Not because they're easy, but because they're honest. Real tools for real struggles.",
    author: "Amara",
    role: "18 years old, Grade 12",
  },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-sand/30" />
          
          <div className="container-main relative z-10 py-24">
            <div className="max-w-2xl">
              <p className="text-olive font-medium text-sm tracking-wide mb-6 fade-in">
                A mentorship community for teens and families
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-tight mb-8 fade-in stagger-1">
                When the pressure feels 
                <span className="block text-olive mt-2">too heavy to carry</span>
              </h1>
              
              <p className="text-lg md:text-xl text-warm-gray mb-10 max-w-xl leading-relaxed fade-in stagger-2">
                ROOTED Circle is a monthly programme where teens learn to build unshakeable 
                inner foundations—and parents learn to walk alongside them with confidence, 
                not fear.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-3">
                <Link href="/rooted-circle">
                  <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark w-full sm:w-auto">
                    Discover ROOTED Circle
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/free-starter-kit">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-olive text-olive hover:bg-olive/5">
                    Start with Free Kit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-8">
                At the heart of Rooted
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                I started Rooted because I kept seeing the same story repeat: capable teens 
                crumbling under pressure, parents desperate to help but unsure how, and a 
                system that rewards output over wellbeing.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                ROOTED Circle isn't about getting better grades or pushing harder. It's about 
                building something deeper—the kind of resilience that holds steady when 
                life gets hard, that knows its worth beyond achievements, that can rest 
                without guilt and try without fear.
              </p>
              <p className="text-lg text-charcoal font-medium">
                This is work that changes the whole family.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="section-padding bg-linen">
          <div className="container-main">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                What we believe
              </h2>
              <p className="text-warm-gray max-w-xl mx-auto">
                Not just what we do, but why we do it this way.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {principles.map((principle, i) => (
                <Card key={i} className="bg-white border-none shadow-soft">
                  <CardContent className="p-8">
                    <principle.icon className="h-10 w-10 text-olive mb-5" />
                    <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROOTED Circle Preview */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sage font-medium text-sm tracking-wide mb-4">
                  The Programme
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                  ROOTED Circle
                </h2>
                <p className="text-cream/80 text-lg leading-relaxed mb-8">
                  A monthly mentorship community for teens ready to build unshakeable inner 
                  foundations—and parents ready to support without adding pressure.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Weekly group mentorship sessions",
                    "Emotional resilience framework",
                    "Sustainable study systems",
                    "Monthly parent workshop included",
                    "Private teen community",
                    "Direct access to Liza"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-cream/90">
                      <Sparkles className="h-5 w-5 text-sage flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/rooted-circle">
                  <Button size="lg" variant="secondary" className="bg-cream text-olive hover:bg-beige border-0">
                    Learn About ROOTED Circle
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-olive-dark/30 rounded-2xl p-10 text-center">
                <p className="text-cream/60 mb-3 text-sm uppercase tracking-wider">Investment</p>
                <p className="text-5xl font-serif font-bold text-cream mb-2">R1,497</p>
                <p className="text-cream/70 mb-8">per month</p>
                <p className="text-cream/80 text-sm leading-relaxed mb-8">
                  This includes everything: teen sessions, parent workshops, 
                  community access, and resource library.
                </p>
                <Link href="/apply">
                  <Button className="bg-cream text-olive hover:bg-beige w-full">
                    Apply for ROOTED Circle
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Free Starter Kit CTA */}
        <section className="section-padding bg-sand/30">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">
                Not ready to commit?
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
                Start with the Free Starter Kit
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                A 5-day gentle reset plan, study schedule template, and parent guide—completely free. 
                No commitment, no pressure. Just practical tools to help you pause and reset.
              </p>
              <Link href="/free-starter-kit">
                <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark">
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
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal text-center mb-16">
              What families are saying
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="bg-linen border-none">
                  <CardContent className="p-8">
                    <p className="text-charcoal italic mb-6 font-accent text-lg leading-relaxed">
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

        {/* Who Is This For */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="bg-white border-none">
                <CardContent className="p-10">
                  <Users className="h-10 w-10 text-olive mb-6" />
                  <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                    For Parents
                  </h3>
                  <p className="text-warm-gray leading-relaxed mb-6">
                    You love your teen fiercely. But lately, it feels like nothing you do 
                    makes a difference. You watch them struggle, you try to help, and somehow 
                    it makes things worse.
                  </p>
                  <p className="text-warm-gray leading-relaxed">
                    ROOTED helps you understand what's really happening beneath the surface, 
                    and gives you practical ways to support without adding pressure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none">
                <CardContent className="p-10">
                  <Heart className="h-10 w-10 text-olive mb-6" />
                  <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                    For Teens
                  </h3>
                  <p className="text-warm-gray leading-relaxed mb-6">
                    You're not lazy. You're not broken. You're carrying weight that nobody 
                    else seems to see, and trying harder hasn't worked.
                  </p>
                  <p className="text-warm-gray leading-relaxed">
                    ROOTED is a space to breathe, to understand yourself better, and to 
                    build the kind of quiet strength that stays with you beyond exams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-olive-dark text-cream">
          <div className="container-main text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to find your roots?
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-10">
              Whether you're ready to join ROOTED Circle or just want to explore, 
              we're here. No hard sell, no pressure—just a conversation about 
              what might help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-cream text-olive hover:bg-beige w-full sm:w-auto">
                  Apply for ROOTED Circle
                </Button>
              </Link>
              <Link href="/free-starter-kit">
                <Button size="lg" variant="secondary" className="bg-transparent border-cream text-cream hover:bg-cream/10 w-full sm:w-auto">
                  Start with Free Kit
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
