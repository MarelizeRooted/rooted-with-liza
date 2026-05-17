import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Heart, BookOpen, Award, ArrowRight, Sparkles } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-sage/10" />
          
          <div className="container-main relative z-10 py-20">
            <div className="max-w-2xl">
              <p className="text-olive font-medium text-sm tracking-wide mb-4">
                About Liza
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-6">
                Rooted in something deeper
              </h1>
              <p className="text-warm-gray text-lg leading-relaxed">
                Rooted with Liza exists because I believe lasting change doesn't come 
                from trying harder—it comes from going deeper.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold text-charcoal mb-8">
                The heart behind Rooted
              </h2>
              
              <div className="space-y-6 text-warm-gray leading-relaxed">
                <p>
                  I didn't set out to build a programme. I set out to understand why so many 
                  capable teens were struggling—not because they couldn't learn, but because 
                  nobody had taught them <em>how</em> to learn in a way that actually works.
                </p>

                <p>
                  After years in Intermediate and Senior Phase education, I watched the same 
                  patterns repeat. Students who wanted to succeed but didn't have the systems to 
                  get there. Parents who wanted to help but didn't know where to start. Everyone 
                  was trying harder, but trying harder wasn't the answer.
                </p>

                <p>
                  My theology studies taught me something I'll never forget: people don't change 
                  because they're told to. They change when they understand the <em>why</em>—when 
                  they have tools that fit their reality, and when someone walks alongside them 
                  without judgment.
                </p>

                <p>
                  Volunteer teen counselling showed me the other side—the emotional toll that 
                  academic pressure takes on young people. Anxiety, burnout, feelings of never 
                  being enough. Not because they're failing, but because they're overwhelmed 
                  by expectations they don't have the foundation to meet.
                </p>

                <p>
                  So I went deeper. I studied learning science—how the teenage brain actually 
                  works, how to work <em>with</em> it instead of against it. I completed specialized 
                  training including the "Highly Effective Study/Learning Techniques Course for 
                  Teachers" and "The Ultimate Solutions to Barriers Experienced by Teachers" 
                  through Dr Emsie Rheeders Education.
                </p>

                <p className="text-charcoal font-medium">
                  What I learned wasn't complicated. But "simple" doesn't mean "easy"—and it 
                  definitely wasn't being taught anywhere.
                </p>

                <p>
                  Rooted with Liza exists because teens need someone to teach them HOW to learn, 
                  not just WHAT to learn. And parents need guidance on how to support that 
                  process without adding to the pressure.
                </p>

                <p>
                  But here's what I've also learned: systems and strategies only get you so far. 
                  <em> Real</em> change happens when you address the heart—building the kind of 
                  quiet, unshakeable foundation that holds steady whether you're in exam season 
                  or not.
                </p>

                <p>
                  That foundation is spiritual, emotional, and practical all at once. It's about 
                  understanding who you are beyond your grades, knowing your worth isn't tied to 
                  your performance, and building resilience before you need it—not after you've 
                  already broken.
                </p>

                <p className="text-charcoal font-medium">
                  This is work I'm deeply passionate about, because I've seen what happens when 
                  teens get it right—not just better marks, but genuine peace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-linen">
          <div className="container-main">
            <h2 className="text-3xl font-serif font-semibold text-charcoal text-center mb-12">
              Background & Training
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-white border-none">
                <CardContent className="p-8 flex gap-5">
                  <GraduationCap className="h-10 w-10 text-olive flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Education Background
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Intermediate and Senior Phase teaching experience
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none">
                <CardContent className="p-8 flex gap-5">
                  <BookOpen className="h-10 w-10 text-olive flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Learning Science
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Research in how the teenage brain actually learns
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none">
                <CardContent className="p-8 flex gap-5">
                  <Award className="h-10 w-10 text-olive flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Teacher Training
                    </h3>
                    <p className="text-warm-gray text-sm">
                      SACE accredited professional development
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none">
                <CardContent className="p-8 flex gap-5">
                  <Heart className="h-10 w-10 text-olive flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-charcoal mb-2">
                      Youth Support
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Volunteer teen counselling experience
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-warm-gray text-sm">
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
              <h2 className="text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
                What I believe
              </h2>
              
              <div className="space-y-5">
                <Card className="bg-cream border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="h-5 w-5 text-olive" />
                      <h3 className="font-serif font-semibold text-charcoal">
                        Roots before results
                      </h3>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      Sustainable success comes from foundation, not forcing. We build the internal 
                      stuff first—resilience, self-understanding, quiet confidence. Everything 
                      else grows from there.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="h-5 w-5 text-olive" />
                      <h3 className="font-serif font-semibold text-charcoal">
                        Rest is not weakness
                      </h3>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      You can't pour from an empty cup. We teach teens to honour their limits, 
                      rest without guilt, and understand that sustainable effort beats burnout every time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="h-5 w-5 text-olive" />
                      <h3 className="font-serif font-semibold text-charcoal">
                        Faith is central
                    </h3>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      Our work is grounded in the belief that real change happens when we connect 
                      with something greater than ourselves. We don't push faith, but we honour it 
                      as central to how we were made to thrive.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="h-5 w-5 text-olive" />
                      <h3 className="font-serif font-semibold text-charcoal">
                        Parents are partners
                      </h3>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      Supporting a struggling teen isn't instinctive—it has to be learned. We walk 
                      alongside parents too, giving them tools and understanding, not blame.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-olive text-cream">
          <div className="container-main text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Ready to begin?
            </h2>
            <p className="text-cream/80 mb-8 max-w-lg mx-auto leading-relaxed">
              Whether you're looking for the Free Starter Kit to explore on your own, 
              or ready to join ROOTED Circle for deeper work, I'm here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-starter-kit">
                <Button variant="secondary" size="lg" className="bg-cream text-olive hover:bg-beige border-0 w-full sm:w-auto">
                  Start with Free Kit
                </Button>
              </Link>
              <Link href="/rooted-circle">
                <Button size="lg" className="bg-transparent border border-cream text-cream hover:bg-cream/10 w-full sm:w-auto">
                  Discover ROOTED Circle
                  <ArrowRight className="ml-2 h-5 w-5" />
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
