import { Head } from '@/components/Head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Target, Users } from 'lucide-react';

export default function PrivateLessonsPage() {
  const packages = [
    {
      title: 'Starter',
      sessions: '4 sessions',
      duration: '30 minutes each',
      price: '$120',
      description: 'Perfect for trying out private lessons and getting personalized feedback.',
      features: [
        'Personalized assessment',
        'Focused pronunciation work',
        'Custom exercises',
        'Email support',
      ],
    },
    {
      title: 'Intensive',
      sessions: '8 sessions',
      duration: '45 minutes each',
      price: '$240',
      description: 'Build momentum with consistent, focused training on your specific goals.',
      features: [
        'Personalized assessment',
        'Deep pronunciation training',
        'Custom lesson plans',
        'Between-session support',
        'Progress tracking',
      ],
      highlighted: true,
    },
    {
      title: 'Premium',
      sessions: '12 sessions',
      duration: '60 minutes each',
      price: '$360',
      description: 'Comprehensive training with ongoing support and accountability.',
      features: [
        'Personalized assessment',
        'Advanced accent training',
        'Detailed lesson plans',
        'Priority support',
        'Progress tracking',
        'Monthly check-ins',
      ],
    },
  ];

  return (
    <>
      <Head
        title="Private Lessons | Chase in French"
        description="Book personalized 1:1 French lessons with Chase Emery Davis. Focus on pronunciation, listening, and real spoken French."
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <Link to="/classes" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
              Back to Classes
            </Link>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Private Lessons
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
              Get a personalized plan targeting your exact pronunciation and listening challenges. Work 1:1 with Chase to accelerate your progress.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all ${
                  pkg.highlighted
                    ? 'border-2 border-primary bg-secondary/30 shadow-lg'
                    : 'border border-secondary bg-white hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Most Popular
                  </div>
                )}

                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </h2>
                <p className="text-sm text-medium-blue font-semibold mb-4">{pkg.sessions}</p>

                <div className="mb-6">
                  <p className="font-heading text-3xl font-bold text-foreground mb-2">
                    {pkg.price}
                  </p>
                  <p className="font-paragraph text-sm text-foreground/80">
                    {pkg.duration}
                  </p>
                </div>

                <p className="font-paragraph text-foreground/80 mb-6">
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-semibold text-foreground/60 mb-3">INCLUDES</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-paragraph text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full ${
                    pkg.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  Book Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            How private lessons work
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                1
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Assessment
              </h3>
              <p className="font-paragraph text-foreground/80">
                We start with a detailed assessment to understand your goals and challenges.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                2
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Custom Plan
              </h3>
              <p className="font-paragraph text-foreground/80">
                Create a personalized lesson plan targeting your specific needs.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                3
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Learn
              </h3>
              <p className="font-paragraph text-foreground/80">
                Work through focused lessons with real-time feedback and corrections.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                4
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Progress
              </h3>
              <p className="font-paragraph text-foreground/80">
                Track your improvement and adjust the plan as you advance.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="bg-secondary rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
              Why choose private lessons?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    Personalized Focus
                  </h3>
                  <p className="font-paragraph text-foreground/80">
                    Every lesson is tailored to your specific pronunciation challenges and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="font-paragraph text-foreground/80">
                    Book lessons at times that work for you. No fixed class schedule.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    Direct Feedback
                  </h3>
                  <p className="font-paragraph text-foreground/80">
                    Get immediate, detailed feedback on your pronunciation and progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to transform your French?
            </h2>
            <p className="font-paragraph text-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a private lesson and start your personalized journey to fluent, confident French.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Your First Lesson
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
