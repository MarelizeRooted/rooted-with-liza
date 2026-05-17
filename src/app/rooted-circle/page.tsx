import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Users, Heart, BookOpen, Shield, Moon, Sparkles, MessageCircle, Focus as FocusIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ROOTED Circle | Weekly Teen Mentorship Programme',
  description: 'Small-group weekly mentoring for overwhelmed teens. Build study habits, emotional resilience, and quiet confidence. Apply for ROOTED Circle today.',
}

const teenBenefits = [
  {
    icon: Heart,
    title: "Emotional Resilience Framework",
    description: "Learn to understand your emotional landscape, regulate your responses, and build inner steadiness that holds when life gets hard.",
  },
  {
    icon: BookOpen,
    title: "Sustainable Study Systems",
    description: "Not another productivity hack. Real study methods that work with your brain, honour your limits, and actually stick.",
  },
  {
    icon: Users,
    title: "Weekly Group Sessions",
    description: "Small group mentorship (max 12 families) where real conversations happen. A safe space to be honest about struggles.",
  },
  {
    icon: Shield,
    title: "Monthly Theme Exploration",
    description: "Each month we dive deep into a core topic: identity, purpose, rest, boundaries, relationships—things that actually matter.",
  },
  {
    icon: MessageCircle,
    title: "Private Teen Community",
    description: "Connect with other teens on the same journey. Sometimes the best support comes from people who just get it.",
  },
  {
    icon: Moon,
    title: "Rest & Rhythm",
    description: "Learn to rest without guilt, set boundaries without fear, and build sustainable rhythms that honour your whole self.",
  },
]

const parentBenefits = [
  {
    title: "Monthly Parent Workshop",
    description: "Deep-dive sessions on understanding your teen, supporting without enabling, and creating home environments that nurture growth.",
  },
  {
    title: "Parent Community",
    description: "Connect with other parents walking the same path. Share struggles, celebrate wins, learn from each other.",
  },
  {
    title: "Direct Access to Liza",
    description: "Monthly Q&A sessions where you can ask anything. No judgment, no generic advice—just honest conversation.",
  },
  {
    title: "Family Implementation Guides",
    description: "Practical ways to support your teen's growth at home. Small shifts that make real difference.",
  },
]

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
  { step: "03", title: "Learn to focus in a distracted world", desc: "Practical strategies for attention, environment, and energy" },
  { step: "04", title: "Develop confidence under pressure", desc: "Tools for exams, deadlines, and moments that feel too big" },
  { step: "05", title: "Strengthen emotional resilience", desc: "How to recover from bad days, setbacks, and disappointment" },
  { step: "06", title: "Grow into consistency", desc: "Moving from short bursts of effort to steady, lasting habits" },
]

export default function RootedCirclePage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-sage/10" />
          
          <div className="container-main relative z-10 py-24">
            <div className="max-w-2xl">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">
                Weekly mentoring for overwhelmed teens
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-tight mb-6">
                Structured weekly mentoring for teens who feel stuck
              </h1>
              
              <p className="text-xl text-warm-gray mb-8 leading-relaxed">
                ROOTED Circle is a small-group mentoring membership where overwhelmed teens meet 
                weekly for live guidance, practical study support, and resilience coaching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
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

        {/* What Is ROOTED Circle */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
                  What is ROOTED Circle?
                </h2>
                <p className="text-warm-gray text-lg leading-relaxed mb-6">
                  ROOTED Circle is a small-group mentoring membership where overwhelmed teens meet 
                  weekly for live guidance, practical study support, and resilience coaching.
                </p>
                <p className="text-warm-gray text-lg leading-relaxed mb-6">
                  This isn't tutoring. It's not a course you watch alone. It's consistent, caring 
                  mentorship that helps your teen build the habits, routines, and emotional strength 
                  they need to show up for themselves—week after week.
                </p>
              </div>
              
              <Card className="bg-linen border-none">
                <CardContent className="p-10">
                  <h3 className="text-xl font-serif font-semibold text-charcoal mb-6">
                    Who is ROOTED Circle for?
                  </h3>
                  <ul className="space-y-4">
                    {whoItsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-warm-gray">
                        <CheckCircle className="h-5 w-5 text-olive flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-linen">
          <div className="container-main">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                What's included
              </h2>
              <p className="text-warm-gray max-w-xl mx-auto">
                Everything your teen needs to move from overwhelmed to grounded.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teenBenefits.map((benefit, i) => (
                <Card key={i} className="bg-white border-none">
                  <CardContent className="p-8">
                    <benefit.icon className="h-10 w-10 text-olive mb-5" />
                    <h3 className="text-lg font-serif font-semibold text-charcoal mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {benefit.description}
                    </p>
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

        {/* For Parents */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-olive font-medium text-sm tracking-wide mb-3">
                  For Parents
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
                  We walk alongside you too
                </h2>
                <p className="text-warm-gray text-lg leading-relaxed mb-8">
                  Parent involvement is central to ROOTED Circle. You can't change a teen 
                  from the outside—but you can change the environment they come home to. 
                  We help you become that safe harbour.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="border-olive text-olive hover:bg-olive/5">
                    About Liza's Approach
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {parentBenefits.map((benefit, i) => (
                  <Card key={i} className="bg-linen border-none">
                    <CardContent className="p-6">
                      <h3 className="font-serif font-semibold text-charcoal mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-warm-gray text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-sand/30">
          <div className="container-main">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">Founding Member Pricing</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                R1,497/month
              </h2>
              <p className="text-warm-gray mb-8">
                ROOTED Circle is premium, small-group mentoring—not a course you watch alone 
                or a once-off workshop.
              </p>
              <div className="text-left max-w-md mx-auto mb-8">
                <p className="text-charcoal font-medium mb-4">Founding members get:</p>
                <ul className="space-y-2 text-warm-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-olive" />
                    Weekly live mentoring sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-olive" />
                    Ongoing accountability and support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-olive" />
                    Direct access to guidance and encouragement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-olive" />
                    A structured path through overwhelm to confidence
                  </li>
                </ul>
              </div>
              <p className="text-sm text-warm-gray mb-8">
                Spots are limited to keep the group small and the support personal.
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

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal text-center mb-12">
              Common questions
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  q: "What age is ROOTED Circle for?",
                  a: "Typically teens aged 13-18, though we evaluate each application individually. The readiness to engage matters more than age.",
                },
                {
                  q: "Do parents have to attend sessions?",
                  a: "Teen sessions are for teens only. Parent sessions are separate—monthly workshops and Q&As where parents can show up without their teen present.",
                },
                {
                  q: "What if my teen doesn't want to join?",
                  a: "We find that when teens hear the honest, non-pressuring approach of ROOTED, they often become curious. But we never force. If your teen isn't ready, the Free Starter Kit might be a better first step.",
                },
                {
                  q: "Is this faith-based?",
                  a: "Rooted is rooted in Christian faith, but we welcome families from all backgrounds. The principles of resilience, rest, and relationship are universal.",
                },
                {
                  q: "Can we cancel anytime?",
                  a: "Yes. ROOTED Circle is month-to-month. We ask for a minimum 3-month commitment to see real transformation, but after that, you're free to cancel with notice.",
                },
                {
                  q: "What makes this different from therapy?",
                  a: "We're not therapists, and this doesn't replace therapy when needed. ROOTED is more like mentorship and community—practical, relational, and focused on building skills and foundations.",
                },
              ].map((faq, i) => (
                <Card key={i} className="bg-linen border-none">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-cream text-olive hover:bg-beige w-full sm:w-auto">
                  Apply for ROOTED Circle
                </Button>
              </Link>
              <Link href="/free-starter-kit">
                <Button size="lg" variant="secondary" className="bg-transparent border-cream text-cream hover:bg-cream/10 w-full sm:w-auto">
                  Get the Free Starter Kit
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
