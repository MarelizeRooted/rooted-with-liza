import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Heart, Users, Sparkles, Moon, Sun, Shield, CheckCircle } from 'lucide-react'

const whoItsFor = [
  "Procrastinate constantly and leave everything to the last minute",
  "Feel behind and don't know how to catch up",
  "Shut down or get emotional when schoolwork piles up",
  "Struggle to focus and get distracted easily",
  "Feel anxious or panicked before tests and exams",
  "Have lost confidence in their ability to succeed",
  "Know what they should do but can't seem to start",
  "Need structure, encouragement, and someone who actually gets it",
]

const framework = [
  { step: "01", title: "Understand the overwhelm", desc: "We start by naming what's really going on, not just the symptoms" },
  { step: "02", title: "Build sustainable structure", desc: "Simple routines that fit real life, not impossible ideals" },
  { step: "03", title: "Learn to focus", desc: "Practical strategies for attention, environment, and energy" },
  { step: "04", title: "Develop confidence under pressure", desc: "Tools for exams, deadlines, and moments that feel too big" },
  { step: "05", title: "Strengthen emotional resilience", desc: "How to recover from bad days, setbacks, and disappointment" },
  { step: "06", title: "Grow into consistency", desc: "Moving from short bursts of effort to steady, lasting habits" },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-sand/30" />
          
          <div className="container-main relative z-10 py-24">
            <div className="max-w-2xl">
              <p className="text-olive font-medium text-sm tracking-wide mb-6 fade-in">
                Weekly mentoring for overwhelmed teens
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-tight mb-8 fade-in stagger-1">
                When teenagers feel constantly behind, even small tasks start to feel impossible.
              </h1>
              
              <p className="text-lg md:text-xl text-warm-gray mb-10 max-w-xl leading-relaxed fade-in stagger-2">
                ROOTED Circle is weekly mentoring for overwhelmed teens navigating procrastination, exam stress, shutdown, and self-doubt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-3">
                <Link href="/apply">
                  <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark w-full sm:w-auto">
                    Apply for ROOTED Circle
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/free-starter-kit">
                  <Button variant="outline" size="lg" className="border-olive text-olive hover:bg-olive/5 w-full sm:w-auto">
                    Get the Free Starter Kit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-8 text-center">
                When "just try harder" stops working
              </h2>
              
              <div className="prose prose-lg text-warm-gray space-y-6">
                <p>
                  You've watched your teen shut down before exams. Avoid homework until midnight. 
                  Say they'll start tomorrow—again.
                </p>
                <p>
                  It's easy to call it laziness. But most overwhelmed teens aren't unmotivated. 
                  They're anxious, discouraged, or so far behind they don't know where to begin.
                </p>
                <p>
                  They don't need another lecture. They need someone in their corner—someone who 
                  understands what overwhelm actually feels like, and knows how to help them find their footing again.
                </p>
                <p className="text-charcoal font-medium text-xl">
                  That's what ROOTED Circle is for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROOTED Circle Overview */}
        <section className="section-padding bg-linen">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
                  Structured weekly mentoring for teens who feel stuck
                </h2>
                <div className="prose prose-lg text-warm-gray space-y-4">
                  <p>
                    ROOTED Circle is a small-group mentoring membership where overwhelmed teens meet 
                    weekly for live guidance, practical study support, and resilience coaching.
                  </p>
                  <p>
                    This isn't tutoring. It's not a course you watch alone. It's consistent, 
                    caring mentorship that helps your teen build the habits, routines, and emotional 
                    strength they need to show up for themselves—week after week.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Weekly live mentoring sessions",
                  "Practical study systems",
                  "Accountability check-ins",
                  "Resilience and mindset support",
                  "Printable planners and guides",
                  "Faith-grounded encouragement"
                ].map((item, i) => (
                  <Card key={i} className="bg-white border-none">
                    <CardContent className="p-4 flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-olive flex-shrink-0" />
                      <span className="text-charcoal">{item}</span>
                    </CardContent>
                  </Card>
                ))}
                <div className="pt-4">
                  <Link href="/rooted-circle">
                    <Button className="bg-olive text-cream hover:bg-olive-dark">
                      Learn More About ROOTED Circle
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal text-center mb-4">
              This is for your teen if they...
            </h2>
            <p className="text-warm-gray text-center mb-12 max-w-2xl mx-auto">
              If any of this sounds familiar, your teen isn't broken. They just need the right kind of support.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {whoItsFor.map((item, i) => (
                <Card key={i} className="bg-linen border-none">
                  <CardContent className="p-5 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-olive flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Framework */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-center">
              How we help teens move from overwhelmed to grounded
            </h2>
            <p className="text-cream/80 text-center mb-12 max-w-2xl mx-auto">
              This isn't a rigid programme. It's a mentoring relationship that meets your teen 
              where they are and helps them grow from there.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {framework.map((item, i) => (
                <Card key={i} className="bg-olive-dark/30 border-0">
                  <CardContent className="p-6">
                    <span className="text-4xl font-serif font-bold text-cream/20 mb-4 block">{item.step}</span>
                    <h3 className="text-lg font-serif font-semibold text-cream mb-2">{item.title}</h3>
                    <p className="text-cream/70 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="section-padding bg-sand/30">
          <div className="container-main">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">Founding Member Pricing</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                R1,497/month
              </h2>
              <p className="text-warm-gray mb-8">
                ROOTED Circle is premium, small-group mentoring—not a course you watch alone 
                or a once-off workshop. Spots are limited to keep the group small and the support personal.
              </p>
              <Link href="/apply">
                <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark">
                  Apply for ROOTED Circle
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Free Starter Kit CTA */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                Not ready to join? Start here.
              </h2>
              <p className="text-warm-gray text-lg mb-8">
                A free practical guide for teens who feel stuck, stressed, or behind—and 
                the parents who want to help.
              </p>
              <Link href="/free-starter-kit">
                <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark">
                  Get the Free Starter Kit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-olive-dark text-cream">
          <div className="container-main text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Your teen doesn't need more pressure.
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-10">
              They need someone who understands overwhelm—and knows how to help them find their way through it. 
              ROOTED Circle offers weekly mentoring, practical study support, and quiet encouragement 
              for teens who feel stuck. No shame. No gimmicks. Just consistent guidance from someone 
              who genuinely cares.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-cream text-olive hover:bg-beige">
                Apply for ROOTED Circle
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
