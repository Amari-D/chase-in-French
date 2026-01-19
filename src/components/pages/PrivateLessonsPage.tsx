import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
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

export default function PrivateLessonsPage() {
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
                Private Lessons
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={400}>
              <p className="font-paragraph text-xl lg:text-2xl text-primary/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Precision coaching for pronunciation, rhythm, and modern spoken French — with direct feedback and a clear plan.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* INTRO SESSION */}
        <section className="w-full bg-secondary py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12">
                  Intro session
                </h2>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <p className="font-paragraph text-lg text-primary/80 mb-8 leading-relaxed">
                  Start with a 30-minute intro session
                </p>
              </AnimatedElement>

              <div className="space-y-6">
                <AnimatedElement delay={300}>
                  <div className="flex items-start gap-4 bg-background p-6 border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-primary/80">
                      ~20 minutes diagnosis (pronunciation, listening, sentence building, reading)
                    </p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={400}>
                  <div className="flex items-start gap-4 bg-background p-6 border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-primary/80">
                      ~10 minutes personalised action plan
                    </p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={500}>
                  <div className="flex items-start gap-4 bg-background p-6 border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-primary/80">
                      Open Q&A
                    </p>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12">
                Who this is for
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-lg text-primary/80">
                    You already "know French" but people don't understand you
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-lg text-primary/80">
                    You want to stop guessing and start hearing real spoken French
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-lg text-primary/80">
                    You want an efficient plan with correction — not generic homework
                  </p>
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </section>

        {/* CTAs */}
        <section className="w-full bg-primary text-primary-foreground py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link 
                    to="/contact"
                    className="px-10 py-5 bg-secondary text-primary font-heading font-bold text-lg hover:bg-secondary/90 transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-3"
                  >
                    Book / Enquire
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/classes/group"
                    className="px-10 py-5 border-2 border-secondary text-secondary font-heading font-bold text-lg hover:bg-secondary hover:text-primary transition-all w-full sm:w-auto inline-flex items-center justify-center gap-3"
                  >
                    Not ready for 1:1?
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
