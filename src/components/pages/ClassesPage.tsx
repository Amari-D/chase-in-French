import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, User } from 'lucide-react';
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

export default function ClassesPage() {
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
                Classes
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={400}>
              <p className="font-paragraph text-xl lg:text-2xl text-primary/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Choose the format that fits your schedule — group classes for consistency, private lessons for precision.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* CARDS */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Group Classes Card */}
            <AnimatedElement delay={200}>
              <div className="bg-secondary p-8 lg:p-12 h-full flex flex-col border border-primary/10 hover:border-primary/30 transition-all group">
                <Users className="w-16 h-16 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                  Group Classes (Instagram Live)
                </h3>
                <p className="font-paragraph text-lg text-primary/80 mb-8 leading-relaxed flex-grow">
                  Weekly live sessions with replay access. Ask questions in the chat and train your ears and pronunciation in real time.
                </p>
                <Link 
                  to="/classes/group"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  Join Group Classes
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedElement>

            {/* Private Lessons Card */}
            <AnimatedElement delay={400}>
              <div className="bg-secondary p-8 lg:p-12 h-full flex flex-col border border-primary/10 hover:border-primary/30 transition-all group">
                <User className="w-16 h-16 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                  Private Lessons
                </h3>
                <p className="font-paragraph text-lg text-primary/80 mb-8 leading-relaxed flex-grow">
                  Personalised correction and an action plan. Ideal if you want fast results and direct feedback.
                </p>
                <Link 
                  to="/classes/private"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  Book a Private Lesson
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
