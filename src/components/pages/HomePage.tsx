// HPI 1.6-V
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, MessageCircle, BookOpen, Radio, Languages, GraduationCap, MoveRight, Play } from 'lucide-react';
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

const TOPICS_DATA = [
  { 
    title: 'Pronunciation', 
    description: 'Master the fundamental sounds and phonetic rules that define authentic French.', 
    icon: Mic,
    phonetic: '/ʁ/',
    path: '/pronunciation'
  },
  { 
    title: 'Modern French', 
    description: 'Discover how native French speakers actually communicate in everyday life.', 
    icon: MessageCircle,
    phonetic: '/œ̃/',
    path: '/modern-french'
  },
  { 
    title: 'Slang & Expressions', 
    description: 'Explore informal vocabulary and idiomatic expressions of living French.', 
    icon: Languages,
    phonetic: '/ʃ/',
    path: '/slang'
  },
  { 
    title: 'Grammar & Sound', 
    description: 'Understand how grammar directly influences pronunciation and rhythm.', 
    icon: BookOpen,
    phonetic: '/ʒ/',
    path: '/grammar'
  },
  { 
    title: 'French Culture', 
    description: 'Dive into the cultural context that enriches your linguistic understanding.', 
    icon: GraduationCap,
    phonetic: '/ɑ̃/',
    path: '/culture'
  },
  { 
    title: 'Podcasts', 
    description: 'Listen to authentic French content and improve your listening comprehension.', 
    icon: Radio,
    phonetic: '/y/',
    path: '/podcasts'
  },
  { 
    title: 'Songs & Videos', 
    description: 'Learn French through music and video content from native speakers.', 
    icon: Radio,
    phonetic: '/ə/',
    path: '/songs'
  }
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
            -webkit-text-stroke: 1px rgba(21, 47, 35, 0.2);
            color: transparent;
        }
        .text-stroke-light {
            -webkit-text-stroke: 1px rgba(231, 235, 216, 0.3);
            color: transparent;
        }
        .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }
      `}</style>

      <Header />
      
      <main className="flex-1 w-full">
        
        {/* HERO SECTION - Replicating the Inspiration Image Structure */}
        {/* Left: Visual/Architectural (Beige) | Right: Content (Dark Green) */}
        <section className="w-full max-w-[120rem] mx-auto relative">
          <div className="grid lg:grid-cols-2 min-h-[90vh]">
            
            {/* LEFT COLUMN - The "Image" Replacement (Architectural Typography) */}
            <div className="bg-secondary relative overflow-hidden flex flex-col justify-between p-8 lg:p-12 border-r border-primary/10">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03]" 
                   style={{ backgroundImage: 'linear-gradient(#152F23 1px, transparent 1px), linear-gradient(90deg, #152F23 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>

              {/* Floating Phonetic Symbols - Parallax Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <ParallaxElement speed={0.2} className="absolute top-[10%] left-[10%]">
                    <span className="font-heading text-[12rem] leading-none text-primary/5 font-bold">/R/</span>
                 </ParallaxElement>
                 <ParallaxElement speed={-0.1} className="absolute top-[40%] right-[5%]">
                    <span className="font-heading text-[8rem] leading-none text-primary/5 font-bold">/y/</span>
                 </ParallaxElement>
                 <ParallaxElement speed={0.15} className="absolute bottom-[15%] left-[20%]">
                    <span className="font-heading text-[10rem] leading-none text-primary/5 font-bold">/œ̃/</span>
                 </ParallaxElement>
              </div>

              {/* Content mimicking the "Visual" side */}
              <div className="relative z-10">
                <AnimatedElement animation="fade-in" delay={200}>
                    <span className="font-heading font-bold text-primary text-xl tracking-tight">01.</span>
                </AnimatedElement>
              </div>

              <div className="relative z-10 mt-auto">
                 <AnimatedElement animation="fade-up" delay={400}>
                    <h2 className="font-heading text-6xl lg:text-8xl font-bold text-primary tracking-tighter leading-[0.9]">
                      PHON<br/>E<br/>TICS
                    </h2>
                 </AnimatedElement>
              </div>
            </div>
            
            {/* RIGHT COLUMN - The Content Side (Dark Green) */}
            <div className="bg-primary text-primary-foreground flex flex-col justify-center p-12 lg:p-20 relative overflow-hidden">
               {/* Subtle noise texture overlay */}
               <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

               <div className="relative z-10 max-w-2xl">
                  <AnimatedElement animation="fade-in" delay={300}>
                    <p className="font-paragraph text-sm font-medium tracking-[0.2em] uppercase text-secondary/80 mb-8">
                      The Art of Speech
                    </p>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={500}>
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-[1.1] mb-8 text-secondary">
                      Our journey begins where convention ends.
                    </h1>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={700}>
                    <div className="space-y-6 text-lg lg:text-xl text-secondary/80 font-light leading-relaxed">
                      <p>
                        Pronunciation is not a detail, it's the foundation. We don't accept the word "impossible" when it comes to mastering French accent.
                      </p>
                      <p>
                        Here, we are exceptionally skilled in our craft. Phonetic challenges are our guiding stars, and precision is our compass of confidence.
                      </p>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={900}>
                    <div className="mt-12 flex flex-wrap gap-6">
                      <Link 
                        to="/pronunciation"
                        className="group inline-flex items-center gap-3 text-secondary font-heading font-semibold text-lg hover:text-white transition-colors"
                      >
                        <span className="border-b border-secondary/30 pb-1 group-hover:border-white transition-colors">Explore Topics</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </AnimatedElement>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - Project Spotlight / Introduction (Replicating bottom part of inspiration) */}
        <section className="w-full max-w-[120rem] mx-auto bg-secondary py-24 lg:py-32 px-6 lg:px-12 border-b border-primary/5">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
               <AnimatedElement>
                  <span className="font-paragraph text-xs font-bold tracking-[0.2em] uppercase text-primary/60 block mb-4">
                    Our Approach
                  </span>
                  <h3 className="font-heading text-3xl lg:text-4xl font-bold text-primary leading-tight">
                    An authoritative structure for the modern learner.
                  </h3>
               </AnimatedElement>
            </div>
            <div className="lg:col-span-8 lg:pl-12 border-l border-primary/10">
               <AnimatedElement delay={200}>
                  <p className="font-heading text-4xl lg:text-6xl font-medium text-primary mb-8 leading-[1.1]">
                    Pronunciation, <br/>
                    <span className="text-primary/40">Spoken French,</span> <br/>
                    <span className="text-primary/40">Culture.</span>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-end gap-8 mt-16">
                    <p className="font-paragraph text-primary/70 max-w-md leading-relaxed">
                      Our comprehensive approach covers pronunciation, modern French, slang, grammar, culture, podcasts, and songs to give you a complete learning experience.
                    </p>
                    <Link to="/a-propos" className="inline-flex items-center gap-2 font-heading font-bold text-primary hover:opacity-70 transition-opacity">
                      <MoveRight className="w-4 h-4" />
                      <span>Learn More</span>
                    </Link>
                  </div>
               </AnimatedElement>
            </div>
          </div>
        </section>

        {/* SECTION 3 - THE TOPICS (Vertical Sticky Layout) */}
        <section className="w-full max-w-[120rem] mx-auto bg-background relative">
          {/* Decorative Divider */}
          <div className="w-full h-px bg-primary/10"></div>

          <div className="flex flex-col lg:flex-row">
            {/* Sticky Sidebar */}
            <div className="lg:w-1/3 lg:sticky lg:top-0 lg:h-screen bg-background border-r border-primary/10 p-8 lg:p-16 flex flex-col justify-center z-10">
              <AnimatedElement>
                <div className="w-12 h-1 bg-primary mb-8"></div>
                <h2 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-6 tracking-tight">
                  Learning<br/>Topics
                </h2>
                <p className="font-paragraph text-lg text-primary/60 max-w-xs leading-relaxed">
                  An organized collection of resources for every aspect of your linguistic journey.
                </p>
              </AnimatedElement>
            </div>

            {/* Scrollable Content */}
            <div className="lg:w-2/3 bg-secondary/30">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {TOPICS_DATA.map((topic, index) => (
                  <Link
                    key={index}
                    to={topic.path}
                    className={`
                      group relative border-b border-primary/10 p-10 lg:p-16 min-h-[400px] flex flex-col justify-between hover:bg-secondary transition-colors duration-500
                      ${index % 2 === 0 ? 'border-r' : ''}
                    `}
                  >
                    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <span className="font-heading text-8xl font-bold text-primary">{topic.phonetic}</span>
                    </div>

                    <AnimatedElement delay={index * 100}>
                      <div className="mb-8">
                        <topic.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:translate-x-2 transition-transform duration-300">
                          {topic.title}
                        </h3>
                        <p className="font-paragraph text-primary/70 leading-relaxed max-w-sm">
                          {topic.description}
                        </p>
                      </div>
                    </AnimatedElement>

                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-3 text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>Explore Topic</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 - FEATURED LESSONS (Marquee / List) */}
        <section className="bg-primary text-secondary py-24 overflow-hidden relative">
           {/* Background Elements */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
           
           <div className="max-w-[120rem] mx-auto px-6 lg:px-12 mb-16">
              <AnimatedElement>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold">Latest Lessons</h2>
                    <Link to="/lecons" className="hidden md:flex items-center gap-2 text-secondary/70 hover:text-secondary transition-colors">
                        View all <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
              </AnimatedElement>

              <div className="grid md:grid-cols-3 gap-8">
                 {[1, 2, 3].map((i) => (
                    <AnimatedElement key={i} delay={i * 150} className="group cursor-pointer">
                        <div className="border-t border-secondary/20 pt-6 hover:border-secondary transition-colors duration-300">
                            <span className="font-paragraph text-xs font-bold tracking-widest text-secondary/50 mb-3 block">LESSON 0{i}</span>
                            <h3 className="font-heading text-2xl font-medium mb-4 group-hover:underline decoration-1 underline-offset-4">
                                {i === 1 ? "Nasal vowels in detail" : i === 2 ? "Forbidden elision" : "Sentence rhythm"}
                            </h3>
                            <p className="font-paragraph text-secondary/60 text-sm leading-relaxed mb-6">
                                An in-depth analysis of essential phonetic mechanisms for natural speech.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary/40 group-hover:text-secondary transition-colors">
                                <Play className="w-3 h-3 fill-current" />
                                <span>Start</span>
                            </div>
                        </div>
                    </AnimatedElement>
                 ))}
              </div>
           </div>

           {/* Infinite Text Marquee */}
           <div className="relative w-full py-12 border-t border-secondary/10 bg-primary/50 backdrop-blur-sm">
              <div className="flex whitespace-nowrap overflow-hidden">
                <div className="animate-marquee flex gap-16 items-center">
                    {[...Array(4)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-stroke-light opacity-30">PRONUNCIATION</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-secondary opacity-80">CULTURE</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-stroke-light opacity-30">GRAMMAR</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-secondary opacity-80">SLANG</span>
                        </React.Fragment>
                    ))}
                </div>
                <div className="animate-marquee flex gap-16 items-center ml-16" aria-hidden="true">
                    {[...Array(4)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-stroke-light opacity-30">PRONUNCIATION</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-secondary opacity-80">CULTURE</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-stroke-light opacity-30">GRAMMAR</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-secondary opacity-80">SLANG</span>
                        </React.Fragment>
                    ))}
                </div>
              </div>
           </div>
        </section>

        {/* SECTION 5 - CTA / FOOTER PRELUDE */}
        <section className="bg-secondary py-32 lg:py-40 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-primary/20"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <AnimatedElement animation="fade-up">
                    <h2 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-8 tracking-tight">
                        Ready to perfect<br/>your accent?
                    </h2>
                    <p className="font-paragraph text-xl text-primary/70 mb-12 max-w-2xl mx-auto">
                        Join thousands of learners who have transformed the way they speak French through our structured method.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            to="/pronunciation" 
                            className="px-10 py-5 bg-primary text-secondary font-heading font-bold text-lg rounded-sm hover:bg-primary/90 transition-colors w-full sm:w-auto"
                        >
                            Start Learning
                        </Link>
                        <Link 
                            to="/contact" 
                            className="px-10 py-5 border border-primary text-primary font-heading font-bold text-lg rounded-sm hover:bg-primary hover:text-secondary transition-all w-full sm:w-auto"
                        >
                            Contact Us
                        </Link>
                    </div>
                </AnimatedElement>
            </div>

            {/* Decorative large letters in background */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-12 pointer-events-none opacity-[0.03]">
                <span className="font-heading text-[20vw] font-bold text-primary leading-none -mb-12">F</span>
                <span className="font-heading text-[20vw] font-bold text-primary leading-none -mb-12">R</span>
            </div>
        </section>

      </main>
      
      <Footer />
      
      {/* Global Styles for Marquee and Animations */}
      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}