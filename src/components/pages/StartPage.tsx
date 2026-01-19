import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, MessageCircle, Languages, Users } from 'lucide-react';
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

const LEARNING_PATHS = [
  {
    title: 'Pronunciation Foundations',
    level: 'Beginner',
    description: 'Build the core sounds first: vowels, rhythm, liaison, and the mistakes English speakers repeat.',
    cta: 'Start Foundations',
    path: '/pronunciation#foundations',
    icon: Mic
  },
  {
    title: 'Fix My Accent',
    level: 'Intermediate/Advanced',
    description: 'Targeted corrections for persistent problems: nasal vowels, R placement, vowel openness, and flow.',
    cta: 'Fix my Accent',
    path: '/pronunciation#fix',
    icon: MessageCircle
  },
  {
    title: 'Real Spoken French',
    level: 'Fast Speech',
    description: 'Learn the reductions and contractions that make French sound "different" from textbook French.',
    cta: 'Real Spoken French',
    path: '/slang',
    icon: Languages
  }
];

export default function StartPage() {
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
                Start here
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={400}>
              <p className="font-paragraph text-xl lg:text-2xl text-primary/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                If you found Chase on social media, this is the fastest way to get the right lesson for your level.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* CHOOSE YOUR PATH - 3 LEARNING PATHS */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32 bg-secondary">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                Choose your path
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {LEARNING_PATHS.map((path, index) => (
              <AnimatedElement key={index} delay={index * 150}>
                <div className="bg-background p-8 lg:p-10 h-full flex flex-col border border-primary/10 hover:border-primary/30 transition-all group">
                  <path.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                    {path.title}
                  </h3>
                  <p className="font-paragraph text-sm text-primary/60 mb-4">
                    {path.level}
                  </p>
                  <p className="font-paragraph text-base text-primary/80 mb-8 leading-relaxed flex-grow">
                    {path.description}
                  </p>
                  <Link 
                    to={path.path}
                    className="inline-flex items-center gap-2 font-heading font-semibold text-primary group-hover:text-accent-red transition-colors"
                  >
                    {path.cta}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* TODAY'S RECOMMENDED LESSON */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8">
                Today's lesson
              </h2>
              <div className="bg-secondary p-8 lg:p-12 border border-primary/10">
                <p className="font-paragraph text-lg text-primary/80 mb-8 leading-relaxed">
                  A single featured lesson that matches current social posts.
                </p>
                <Link 
                  to="/pronunciation"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  Read the lesson
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* JOIN LIVE CLASSES */}
        <section className="w-full bg-primary text-primary-foreground py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8">
                  Want real feedback?
                </h2>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link 
                    to="/classes/group"
                    className="px-10 py-5 bg-secondary text-primary font-heading font-bold text-lg hover:bg-secondary/90 transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-3"
                  >
                    <Users className="w-5 h-5" />
                    Group Classes
                  </Link>
                  <Link 
                    to="/classes/private"
                    className="px-10 py-5 border-2 border-secondary text-secondary font-heading font-bold text-lg hover:bg-secondary hover:text-primary transition-all w-full sm:w-auto inline-flex items-center justify-center gap-3"
                  >
                    Private Lessons
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
