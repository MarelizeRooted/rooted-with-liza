import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Users, Heart, BookOpen, Shield, Moon, Sparkles, MessageCircle } from 'lucide-react'

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

const transformation = [
  "Teens learn to understand their own emotional landscape",
  "Build resilience before crisis hits",
  "Create sustainable routines that honour rest",
  "Develop quiet confidence independent of grades",
  "Connect faith to daily life",
  "Parents learn to support without adding pressure",
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
                The Flagship Programme
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-tight mb-6">
                ROOTED Circle
              </h1>
              
              <p className="text-xl text-warm-gray mb-8 leading-relaxed">
                A monthly mentorship community where teens build unshakeable inner foundations—
                and parents learn to walk alongside them with confidence.
              </p>
              
              <p className="text-2xl font-serif text-olive mb-10">
                R1,497/month
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark w-full sm:w-auto">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/free-starter-kit">
                  <Button variant="outline" size="lg" className="border-olive text-olive hover:bg-olive/5 w-full sm:w-auto">
                    Start with Free Kit
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
                  ROOTED Circle is a selective monthly membership programme for teens who 
                  are ready to build something deeper than academic success—inner foundation 
                  that stays with them long after exams are over.
                </p>
                <p className="text-warm-gray text-lg leading-relaxed mb-6">
                  Through weekly group mentorship sessions, a structured resilience framework, 
                  and an engaged parent community, we walk alongside families through the 
                  ups and downs of the teenage years.
                </p>
                <p className="text-charcoal text-lg leading-relaxed">
                  This isn't tutoring. This isn't motivation. This is real, relational 
                  work that changes how teens see themselves and how parents support them.
                </p>
              </div>
              
              <Card className="bg-linen border-none">
                <CardContent className="p-10">
                  <h3 className="text-xl font-serif font-semibold text-charcoal mb-6">
                    Who is ROOTED Circle for?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Teens aged 13-18 who feel overwhelmed",
                      "Teens who are capable but stuck",
                      "Teens who push themselves but don't feel 'enough'",
                      "Parents who want to help but don't know how",
                      "Families who value faith and emotional depth",
                      "Families ready to commit to real change",
                    ].map((item, i) => (
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

        {/* For Teens */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="text-center mb-16">
              <p className="text-olive font-medium text-sm tracking-wide mb-3">
                For Teens
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
                What you'll receive
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* The Transformation */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                  The transformation
                </h2>
                <p className="text-cream/80 text-lg leading-relaxed mb-8">
                  This isn't about getting better grades (though that often happens). 
                  It's about something more lasting—teens who know who they are, 
                  who can rest without guilt, and who face life's challenges with 
                  quiet, unshakeable confidence.
                </p>
                <ul className="space-y-3">
                  {transformation.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-cream/90">
                      <Sparkles className="h-5 w-5 text-sage flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="bg-olive-dark/30 border-0">
                <CardContent className="p-10">
                  <h3 className="text-xl font-serif font-semibold text-cream mb-6 text-center">
                    Ready to begin?
                  </h3>
                  <div className="text-center mb-8">
                    <p className="text-cream/60 mb-2">Investment</p>
                    <p className="text-4xl font-serif font-bold text-cream">R1,497</p>
                    <p className="text-cream/70">per month</p>
                  </div>
                  <ul className="space-y-2 text-cream/80 text-sm mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sage" />
                      4+ live sessions per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sage" />
                      Full resource library access
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sage" />
                      Monthly parent workshop
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sage" />
                      Teen + parent community
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sage" />
                      Direct access to Liza
                    </li>
                  </ul>
                  <Link href="/apply">
                    <Button className="w-full bg-cream text-olive hover:bg-beige">
                      Apply for ROOTED Circle
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="section-padding bg-cream">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal text-center mb-6">
                How to join
              </h2>
              <p className="text-warm-gray text-lg text-center mb-12 max-w-xl mx-auto">
                ROOTED Circle is selective because we keep groups small and genuine. 
                The application process helps us ensure every family is a good fit.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Submit your application",
                    description: "Fill out a brief form telling us about your teen and your family. No wrong answers—we just want to understand if ROOTED is the right fit.",
                  },
                  {
                    step: "02",
                    title: "We'll reach out",
                    description: "After reviewing your application, we'll schedule a call to chat further, answer questions, and see if we're the right match.",
                  },
                  {
                    step: "03",
                    title: "Begin your journey",
                    description: "Once accepted, you'll get immediate access to resources and be welcomed into the next available group cohort.",
                  },
                ].map((item, i) => (
                  <Card key={i} className="bg-white border-none">
                    <CardContent className="p-8 flex gap-6">
                      <span className="text-4xl font-serif font-bold text-olive/30 flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                          {item.title}
                        </h3>
                        <p className="text-warm-gray leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link href="/apply">
                  <Button size="lg" className="bg-olive text-cream hover:bg-olive-dark">
                    Start Your Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
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
              Ready to find your roots?
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-10">
              Applications are currently open for a limited number of families. 
              If you're feeling the pull, that's often a sign something is ready to shift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-cream text-olive hover:bg-beige w-full sm:w-auto">
                  Apply Now
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
