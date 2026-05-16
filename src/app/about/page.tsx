import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Heart, Users, BookOpen, Award, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="bg-olive text-cream section-padding">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              About Rooted With Liza
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl">
              A structured support system built by someone who's been in the classroom, 
              not just behind a business plan.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-8">The Story Behind Rooted With Liza</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-warm-gray leading-relaxed mb-6">
                  I didn't set out to build a business. I set out to understand why so many capable, 
                  intelligent teens were struggling—not because they couldn't learn, but because 
                  nobody had taught them <em>how</em> to learn effectively.
                </p>

                <p className="text-warm-gray leading-relaxed mb-6">
                  After years in Intermediate and Senior Phase education, I watched the same 
                  patterns repeat. Students who wanted to succeed but didn't have the systems to 
                  get there. Parents who wanted to help but didn't know where to start. Everyone 
                  was trying harder, but trying harder wasn't the answer.
                </p>

                <p className="text-warm-gray leading-relaxed mb-6">
                  My background in theology studies taught me something valuable: people don't 
                  change because they're told to. They change when they understand the "why" and 
                  when they have practical tools that fit their reality.
                </p>

                <p className="text-warm-gray leading-relaxed mb-6">
                  Volunteer teen counselling work showed me the other side—the emotional toll 
                  that academic pressure takes on young people. Anxiety, burnout, feelings of 
                  inadequacy. Not because they're failing, but because they're overwhelmed by 
                  expectations they don't have the tools to meet.
                </p>

                <p className="text-warm-gray leading-relaxed mb-6">
                  So I went deeper. I studied learning science—neuroplasticity, memory formation, 
                  how the teenage brain actually processes and retains information. I completed 
                  specialized training including the "Highly Effective Study/Learning Techniques 
                  Course for Teachers" and "The Ultimate Solutions to Barriers Experienced by 
                  Teachers" through Dr Emsie Rheeders Education (SACE Provider PR 13273).
                </p>

                <p className="text-warm-gray leading-relaxed mb-6">
                  What I learned wasn't complicated. In fact, it was surprisingly simple. 
                  But "simple" doesn't mean "easy," and it definitely doesn't mean it's being 
                  taught in schools.
                </p>

                <p className="text-charcoal leading-relaxed mb-6 font-medium">
                  Rooted With Liza exists because teens need someone to teach them HOW to learn, 
                  not just WHAT to learn. And parents need guidance on how to support that process 
                  without adding to the pressure.
                </p>

                <p className="text-warm-gray leading-relaxed mb-6">
                  This isn't about motivation or positive thinking. It's about building real 
                  systems—study frameworks, resilience tools, recovery plans—that actually work 
                  because they're designed around how the teenage brain functions.
                </p>

                <p className="text-warm-gray leading-relaxed">
                  Everything I offer is grounded in real education experience, real research, 
                  and a genuine desire to see overwhelmed teens not just survive school, 
                  but develop the skills they'll use for the rest of their lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-sand">
          <div className="container-main">
            <h2 className="section-title text-center mb-12">Background & Training</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-10 w-10 text-olive mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-charcoal mb-2">
                    Education Background
                  </h3>
                  <p className="text-warm-gray text-sm">
                    Intermediate and Senior Phase teaching experience
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-10 w-10 text-olive mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-charcoal mb-2">
                    Learning Science
                  </h3>
                  <p className="text-warm-gray text-sm">
                    Research in neuroplasticity and effective learning methods
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 text-olive mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-charcoal mb-2">
                    Teacher Training
                  </h3>
                  <p className="text-warm-gray text-sm">
                    SACE accredited professional development
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Heart className="h-10 w-10 text-olive mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-charcoal mb-2">
                    Youth Support
                  </h3>
                  <p className="text-warm-gray text-sm">
                    Volunteer teen counselling experience
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-warm-gray text-sm max-w-2xl mx-auto">
                Completed training includes: "Highly Effective Study/Learning Techniques Course for Teachers" 
                and "The Ultimate Solutions to Barriers Experienced by Teachers" — Dr Emsie Rheeders Education 
                Teacher Training Skills Grade Qualification (SACE Provider PR 13273)
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">What I Believe</h2>
              
              <div className="space-y-6">
                <Card className="bg-cream border-none">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Systems over willpower
                    </h3>
                    <p className="text-warm-gray">
                      Success in school isn't about who tries hardest. It's about who has the 
                      best systems. We focus on building frameworks that work with your brain, 
                      not against it.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Emotional wellbeing matters
                    </h3>
                    <p className="text-warm-gray">
                      You can't learn when you're burnt out, anxious, or overwhelmed. We address 
                      the emotional foundation before we build academic skills.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Parents are partners
                    </h3>
                    <p className="text-warm-gray">
                      Supporting a struggling teen isn't intuitive. Parents need guidance too— 
                      not blame, not pressure, but actual tools for how to help.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Practical over theoretical
                    </h3>
                    <p className="text-warm-gray">
                      We don't do vague motivation or abstract concepts. Every tool, every 
                      framework, every session is designed to be used immediately.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main text-center">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-cream/80 mb-6 max-w-xl mx-auto">
              Download the free starter kit or join a membership to access 
              structured support designed for real teens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lead-magnet">
                <Button variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-olive">
                  Get Free Starter Kit
                </Button>
              </Link>
              <Link href="/membership">
                <Button size="lg" className="bg-cream text-olive hover:bg-beige">
                  View Membership
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
