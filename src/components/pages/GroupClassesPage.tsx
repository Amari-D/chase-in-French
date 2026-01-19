import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in';
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in': return 'opacity-0 transition-opacity duration-1000 ease-out';
      case 'fade-up':
      default: return 'opacity-0 translate-y-8 transition-all duration-1000 ease-out';
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default function GroupClassesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-paragraph text-foreground">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>

      <Header />
      
      <main className="flex-1 w-full">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fade-up" delay={200}>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
                Group Classes
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={400}>
              <p className="font-paragraph text-xl lg:text-2xl text-primary/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Live French classes on Instagram — focused on pronunciation, listening, and real spoken French.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="w-full bg-secondary py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12">
                  What you get
                </h2>
              </AnimatedElement>

              <div className="space-y-6">
                <AnimatedElement delay={200}>
                  <div className="flex items-start gap-4 bg-background p-6 border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-primary/80">
                      1 hour live class once per week (schedule shared on Instagram)
                    </p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={300}>
                  <div className="flex items-start gap-4 bg-background p-6 border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-primary/80">
                      Ask questions in the chat during the live session
                    </p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={400}>
                  <div className="flex items-start gap-4 bg-background p-6 border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-primary/80">
                      Replay access to past lessons for 3 months (via Instagram subscriber content)
                    </p>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO JOIN */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12">
                How to join
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <ol className="space-y-6">
                <li className="flex items-start gap-6">
                  <span className="font-heading text-3xl font-bold text-accent-red flex-shrink-0">1</span>
                  <p className="font-paragraph text-lg text-primary/80 pt-1">
                    Go to the @chaseinfrench Instagram profile
                  </p>
                </li>
                <li className="flex items-start gap-6">
                  <span className="font-heading text-3xl font-bold text-accent-red flex-shrink-0">2</span>
                  <p className="font-paragraph text-lg text-primary/80 pt-1">
                    Tap the subscriber icon (crown) and subscribe
                  </p>
                </li>
                <li className="flex items-start gap-6">
                  <span className="font-heading text-3xl font-bold text-accent-red flex-shrink-0">3</span>
                  <p className="font-paragraph text-lg text-primary/80 pt-1">
                    When the class is live, tap the profile photo to join
                  </p>
                </li>
                <li className="flex items-start gap-6">
                  <span className="font-heading text-3xl font-bold text-accent-red flex-shrink-0">4</span>
                  <p className="font-paragraph text-lg text-primary/80 pt-1">
                    To watch replays, return to the subscriber area and select the recording
                  </p>
                </li>
              </ol>
            </AnimatedElement>
          </div>
        </section>

        {/* PRICING */}
        <section className="w-full bg-secondary py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8">
                  Pricing
                </h2>
                <p className="font-paragraph text-lg text-primary/80 mb-12">
                  Pricing is shown inside Instagram at checkout.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://www.instagram.com/chaseinfrench"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  Go to Instagram
                </a>
                <Link 
                  to="/classes/private"
                  className="px-10 py-5 border-2 border-primary text-primary font-heading font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto inline-flex items-center justify-center gap-3"
                >
                  Prefer 1:1 feedback?
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
