import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, MessageCircle, BookOpen, Radio, Languages, GraduationCap, Users, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- UTILS & COMPONENTS ---

/**
 * AnimatedElement
 * Uses IntersectionObserver to trigger a reveal animation when the element enters the viewport.
 */
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'reveal-text';
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
        // Add a small delay via style if needed, or just let CSS handle it
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
        case 'slide-in-right': return 'opacity-0 translate-x-10 transition-all duration-1000 ease-out';
        case 'reveal-text': return 'opacity-0 translate-y-full transition-all duration-700 ease-out';
        case 'fade-up':
        default: return 'opacity-0 translate-y-8 transition-all duration-1000 ease-out';
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className} group`}>
      {children}
    </div>
  );
};

/**
 * ParallaxText
 * A simple parallax effect for text or elements using scroll position
 */
const ParallaxElement: React.FC<{ children: React.ReactNode; speed?: number; className?: string }> = ({ children, speed = 0.5, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const scrolled = window.scrollY;
            const val = scrolled * speed;
            ref.current.style.transform = `translateY(${val}px)`;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return <div ref={ref} className={className}>{children}</div>;
};

// --- CANONICAL DATA SOURCES ---

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

const TOPICS_LIST = [
  { name: 'Pronunciation', description: 'the sound system and delivery', path: '/pronunciation', icon: Mic },
  { name: 'Slang & Real Speech', description: 'contractions, reductions, modern usage', path: '/slang', icon: Languages },
  { name: 'Grammar', description: 'practical micro-guides for speaking (not textbook theory)', path: '/grammar', icon: BookOpen },
  { name: 'Culture', description: 'the social signals behind what people say (and how)', path: '/culture', icon: GraduationCap },
  { name: 'Podcast', description: 'Learning French by Accident', path: '/podcast', icon: Radio },
  { name: 'Songs & Videos', description: 'learn through listening and music', path: '/songs', icon: Video }
];

// --- PAGE COMPONENT ---

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-paragraph text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        .text-stroke {
            -webkit-text-stroke: 1px rgba(26, 43, 74, 0.2);
            color: transparent;
        }
        .text-stroke-light {
            -webkit-text-stroke: 1px rgba(232, 239, 247, 0.3);
            color: transparent;
        }
        .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }
      `}</style>

      <Header />
      
      <main className="flex-1 w-full">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedElement animation="fade-up" delay={200}>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
                Learn the French you actually hear
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={400}>
              <p className="font-paragraph text-xl lg:text-2xl text-primary/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Real pronunciation, modern spoken French, and clear bilingual explanations — built for the way French is spoken in real life.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/start"
                  className="px-10 py-5 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-3"
                >
                  Start here
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/topics"
                  className="px-10 py-5 border-2 border-primary text-primary font-heading font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto inline-flex items-center justify-center gap-3"
                >
                  Browse Topics
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* WHAT CHASE IN FRENCH IS */}
        <section className="w-full bg-secondary py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-8">
                  What Chase in French is
                </h2>
                <p className="font-paragraph text-lg lg:text-xl text-primary/80 mb-12 leading-relaxed">
                  Chase in French is a pronunciation-first learning platform. We focus on the sound system, the rhythm, and the patterns behind real spoken French — so you stop guessing and start hearing what's actually being said.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent-red rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-paragraph text-lg text-primary/80">Short lessons you can actually finish</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent-red rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-paragraph text-lg text-primary/80">Clear explanations (English + real French examples)</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent-red rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-paragraph text-lg text-primary/80">Modern spoken French: reductions, rhythm, contractions, and delivery</p>
                  </li>
                </ul>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* START HERE - 3 LEARNING PATHS */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                Start here
              </h2>
              <p className="font-paragraph text-lg text-primary/70 max-w-2xl mx-auto">
                This is not the topic menu. It is a fast entry point for new visitors.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {LEARNING_PATHS.map((path, index) => (
              <AnimatedElement key={index} delay={index * 150}>
                <div className="bg-secondary p-8 lg:p-10 h-full flex flex-col border border-primary/10 hover:border-primary/30 transition-all group">
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

        {/* BROWSE BY TOPIC */}
        <section className="w-full bg-secondary py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12 text-center">
                Browse by topic
              </h2>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOPICS_LIST.map((topic, index) => (
                <AnimatedElement key={index} delay={index * 100}>
                  <Link 
                    to={topic.path}
                    className="group bg-background p-8 border border-primary/10 hover:border-primary/30 transition-all flex items-start gap-4"
                  >
                    <topic.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent-red transition-colors">
                        {topic.name}
                      </h3>
                      <p className="font-paragraph text-sm text-primary/70">
                        {topic.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* CLASSES CONVERSION */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8">
                Want feedback from Chase?
              </h2>
              <p className="font-paragraph text-lg lg:text-xl text-primary/70 mb-12 leading-relaxed">
                If you want correction and fast progress, join a group class or book private lessons.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/classes/group"
                  className="px-10 py-5 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  Group Classes
                </Link>
                <Link 
                  to="/classes/private"
                  className="px-10 py-5 border-2 border-primary text-primary font-heading font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto inline-flex items-center justify-center gap-3"
                >
                  Private Lessons
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* CREDIBILITY */}
        <section className="w-full bg-primary text-primary-foreground py-20 lg:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement>
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                  <div className="text-center">
                    <p className="font-heading text-5xl lg:text-6xl font-bold mb-4">650,000+</p>
                    <p className="font-paragraph text-base opacity-90">learners across TikTok, Instagram, YouTube, and podcast platforms</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl lg:text-4xl font-bold mb-4">On-set coaching</p>
                    <p className="font-paragraph text-base opacity-90">language coaching and pronunciation direction for major film & TV productions</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl lg:text-4xl font-bold mb-4">Proven method</p>
                    <p className="font-paragraph text-base opacity-90">built on voice, performance, and the realities of spoken French</p>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <p className="font-paragraph text-sm text-center opacity-70">
                  Selected credits include Napoleon, The Boys S4, Boat Story, Great Expectations.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                Get the weekly lesson
              </h2>
              <p className="font-paragraph text-lg text-primary/70 mb-12">
                One short lesson per week, plus new podcast episodes and new topic pages.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="flex-1 px-6 py-4 border-2 border-primary/20 focus:border-primary outline-none font-paragraph text-base"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-6 py-4 border-2 border-primary/20 focus:border-primary outline-none font-paragraph text-base"
                />
                <button 
                  type="submit"
                  className="px-10 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </AnimatedElement>
          </div>
        </section>

      </main>
      
      <Footer />
      
      {/* Global Styles for Animations */}
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </div>
  );
}