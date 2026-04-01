// HPI 1.7-V3
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, MessageCircle, BookOpen, Radio, Languages, GraduationCap, MoveRight, Play, Apple, Headphones, Users, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Leons, Hubs } from '@/entities';
import { setMetaTags } from '@/lib/meta-tags';

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
    path: '/pronunciation',
    hubSlug: 'pronunciation'
  },
  { 
    title: 'Slang & Expressions', 
    description: 'Explore informal vocabulary and idiomatic expressions of living French.', 
    icon: Languages,
    phonetic: '/ʃ/',
    path: '/slang',
    hubSlug: 'slang'
  },
  { 
    title: 'Grammar & Sound', 
    description: 'Understand how grammar directly influences pronunciation and rhythm.', 
    icon: BookOpen,
    phonetic: '/ʒ/',
    path: '/grammar',
    hubSlug: 'grammar'
  },
  { 
    title: 'French Culture', 
    description: 'Dive into the cultural context that enriches your linguistic understanding.', 
    icon: GraduationCap,
    phonetic: '/ɑ̃/',
    path: '/culture',
    hubSlug: 'culture'
  },
  { 
    title: 'Podcasts', 
    description: 'Listen to authentic French content and improve your listening comprehension.', 
    icon: Radio,
    phonetic: '/y/',
    path: '/podcasts',
    hubSlug: 'podcasts'
  },
  { 
    title: 'Songs & Videos', 
    description: 'Learn French through music and video content from native speakers.', 
    icon: Radio,
    phonetic: '/ə/',
    path: '/songs',
    hubSlug: 'songs'
  }
];

// --- PAGE COMPONENT ---

export default function HomePage() {
  const [latestLessons, setLatestLessons] = useState<Leons[]>([]);
  const [lessonsLoading, setLessonsLoading] = useState(true);

  useEffect(() => {
    setMetaTags(
      'French Pronunciation & Real Spoken French | Chase in French',
      'French pronunciation, real spoken French, French accent training, learn French pronunciation',
      'Master authentic French pronunciation and real spoken French with Chase in French. Learn from a professional dialect coach.'
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items: lessons } = await BaseCrudService.getAll<Leons>('lecons', {}, { limit: 3 });
        setLatestLessons(lessons);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLessonsLoading(false);
      }
    };

    fetchData();
  }, []);

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
        
        {/* HERO SECTION - SEO-optimized with content first on mobile */}
        <section className="w-full max-w-[120rem] mx-auto relative">
          <div className="grid lg:grid-cols-2 min-h-[90vh]">
            
            {/* CONTENT SIDE - First in DOM for SEO (Dark Blue) */}
            <div className="bg-primary text-white flex flex-col justify-center p-12 lg:p-20 relative overflow-hidden order-1 lg:order-2">
               {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E")' }}></div>

               <div className="relative z-10 max-w-2xl">
                  <AnimatedElement animation="fade-in" delay={300}>
                    <p className="font-paragraph text-sm font-medium tracking-[0.2em] uppercase text-white/80 mb-8">
                      French pronunciation • Real spoken French
                    </p>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={500}>
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-[1.1] mb-8 text-white">
                      Learn the French You Actually Hear
                    </h1>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={700}>
                    <div className="space-y-6 text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                      <p>
                        Real pronunciation, modern spoken French, and clear bilingual explanations .. built for English speakers.
                      </p>
                      <p>
                        Chase in French is a structured learning library for people who want French to sound natural, not textbook. Train your ear, shape the mouth correctly, and copy the rhythm native speakers actually use.
                      </p>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={900}>
                    <p className="text-sm text-white/70 mb-8 font-paragraph">
                      Created by Chase Emery Davis — on-set French dialect coach, voice professional, and host of Learning French by Accident.
                    </p>
                  </AnimatedElement>

                  <AnimatedElement animation="fade-up" delay={1000}>
                    <div className="mt-8 flex flex-col gap-4">
                      <Link 
                        to="/start"
                        className="px-6 py-3 bg-accent-red text-white font-heading font-bold rounded-sm hover:bg-accent-red/90 transition-colors text-center w-full sm:w-auto"
                      >
                        Start Here
                      </Link>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          to="/pronunciation"
                          className="px-6 py-3 border-2 border-secondary text-secondary font-heading font-bold rounded-sm hover:bg-secondary/10 transition-colors text-center flex-1 text-sm sm:text-base"
                        >
                          Explore Pronunciation
                        </Link>
                        <Link 
                          to="/classes"
                          className="px-6 py-3 border-2 border-secondary text-secondary font-heading font-bold rounded-sm hover:bg-secondary/10 transition-colors text-center flex-1 text-sm sm:text-base"
                        >
                          Join Classes
                        </Link>
                        <Link 
                          to="/podcast"
                          className="px-6 py-3 border-2 border-secondary text-secondary font-heading font-bold rounded-sm hover:bg-secondary/10 transition-colors text-center flex-1 text-sm sm:text-base"
                        >
                          Listen to Podcast
                        </Link>
                      </div>
                    </div>
                  </AnimatedElement>
               </div>
            </div>

            {/* VISUAL SIDE - Chase Photo (Full Height) */}
            <div className="bg-primary relative overflow-hidden flex flex-col justify-center items-center order-2 lg:order-1">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03]" 
                   style={{ backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>

              {/* Chase Photo */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="https://static.wixstatic.com/media/a60e36_d4a910895cdd4abfb6465b6f9821a3a0~mv2.webp"
                  width={400}
                  className="w-full h-full object-cover"
                  originWidth={1000}
                  originHeight={709}
                  focalPointX={39.2}
                  focalPointY={40.83215796897038} />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - CHOOSE YOUR TRACK */}
        <section className="w-full max-w-[120rem] mx-auto bg-background py-24 lg:py-32 px-6 lg:px-12 border-b border-primary/5">
          <div className="mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">Choose your track</h2>
              <p className="font-paragraph text-lg text-primary/70 max-w-2xl">
                Browse by topic, then use the "Start here" list on each hub to get moving quickly.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Pronunciation Foundations', description: 'Start with the sound system — vowels, rhythm, liaison, and core drills.', path: '/pronunciation', delay: 100 },
              { title: 'Fix My Accent', description: 'Diagnose the 3–5 errors that create a "foreign sound" and correct them fast.', path: '/slang', delay: 200 },
              { title: 'Real Spoken French', description: 'Learn what disappears, what links, and why French sounds "compressed".', path: '/grammar', delay: 300 }
            ].map((track) => {
              return (
                <AnimatedElement key={track.path} delay={track.delay} className="group">
                  <Link to={track.path} className="block h-full">
                    <div className="bg-primary p-8 lg:p-10 rounded-lg hover:opacity-90 transition-all duration-300 h-full flex flex-col">
                      <h3 className="font-heading text-2xl font-bold text-white mb-3">{track.title}</h3>
                      <p className="font-paragraph text-white/80 mb-6 flex-grow">
                        {track.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-accent-red font-heading font-bold hover:opacity-70 transition-opacity">
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 - THE TOPICS (Vertical Sticky Layout) */}
        <section className="w-full max-w-[120rem] mx-auto bg-background relative">
          {/* Decorative Divider */}
          <div className="w-full h-px bg-primary/10"></div>

          <div className="flex flex-col lg:flex-row">
            {/* Sticky Sidebar */}
            <div className="lg:w-1/3 lg:sticky lg:top-0 lg:h-screen bg-primary border-r border-primary/10 p-8 lg:p-16 flex flex-col justify-center z-10">
              <AnimatedElement>
                <div className="w-12 h-1 bg-accent-red mb-8"></div>
                <h2 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                  Learning<br/>Topics
                </h2>
                <p className="font-paragraph text-lg text-white/70 max-w-xs leading-relaxed">
                  Browse by topic, then use the "Start here" list on each hub to get moving quickly.
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
                      group relative border-b border-primary/10 p-10 lg:p-16 min-h-[200px] flex flex-col justify-between hover:bg-secondary transition-colors duration-500
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
                    <div>
                      <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-2">Latest lessons</h2>
                      <p className="font-paragraph text-secondary/70">
                        New lessons are added weekly. If you're here from social, start with /start and then come back here for what's new.
                      </p>
                    </div>
                    <Link to="/lecons" className="hidden md:flex items-center gap-2 text-secondary/70 hover:text-secondary transition-colors whitespace-nowrap ml-8">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
              </AnimatedElement>

              <div className="grid md:grid-cols-3 gap-8">
                 {!lessonsLoading && latestLessons.length > 0 ? (
                   latestLessons.map((lesson, i) => (
                      <Link
                        key={lesson._id}
                        to={`/lecons/${lesson._id}`}
                        className="group cursor-pointer"
                      >
                        <AnimatedElement delay={i * 150} className="h-full">
                            <div className="border-t border-secondary/20 pt-6 hover:border-secondary transition-colors duration-300 h-full flex flex-col">
                                <span className="font-paragraph text-xs font-bold tracking-widest text-secondary/50 mb-3 block">LESSON 0{i + 1}</span>
                                <h3 className="font-heading text-2xl font-medium mb-4 group-hover:underline decoration-1 underline-offset-4">
                                    {lesson.lessonTitle || "Untitled Lesson"}
                                </h3>
                                <p className="font-paragraph text-secondary/60 text-sm leading-relaxed mb-6 flex-grow">
                                    {lesson.shortDescription || "An in-depth analysis of essential phonetic mechanisms for natural speech."}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary/40 group-hover:text-secondary transition-colors">
                                    <Play className="w-3 h-3 fill-current" />
                                    <span>Start</span>
                                </div>
                            </div>
                        </AnimatedElement>
                      </Link>
                   ))
                 ) : (
                   [1, 2, 3].map((i) => (
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
                   ))
                 )}
              </div>
           </div>

           {/* Infinite Text Marquee */}
           <div className="relative w-full py-12 border-t border-secondary/10 bg-primary/50 backdrop-blur-sm">
              <div className="flex whitespace-nowrap overflow-hidden">
                <div className="animate-marquee flex gap-16 items-center">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-stroke-light opacity-30">PRONUNCIATION</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-secondary opacity-80">CULTURE</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-stroke-light opacity-30">GRAMMAR</span>
                            <span className="text-6xl lg:text-8xl font-heading font-bold text-secondary opacity-80">SLANG</span>
                        </React.Fragment>
                    ))}
                </div>
                <div className="animate-marquee flex gap-16 items-center ml-16" aria-hidden="true">
                    {[...Array(2)].map((_, i) => (
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

        {/* SECTION 5 - PODCAST TEASER */}
        <section className="w-full max-w-[120rem] mx-auto bg-background py-24 lg:py-32 px-6 lg:px-12 border-b border-primary/5">
          <div className="mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">Learning French by Accident (Podcast)</h2>
              <p className="font-paragraph text-lg text-primary/70 max-w-2xl">
                Weekly listening training focused on real spoken French and the pronunciation shifts you never see in textbooks.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement delay={100}>
              <Link 
                to="/podcasts"
                className="bg-secondary p-8 lg:p-10 rounded-lg hover:opacity-90 transition-all duration-300 text-center"
              >
                <Headphones className="w-12 h-12 text-accent-red mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Listen on the site</h3>
                <p className="font-paragraph text-primary/70 text-sm">Browse and listen to all episodes</p>
              </Link>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <a 
                href="https://podcasts.apple.com/us/podcast/learning-french-by-accident/id1684581201"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-8 lg:p-10 rounded-lg hover:opacity-90 transition-all duration-300 text-center"
              >
                <Apple className="w-12 h-12 text-accent-red mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Subscribe on Apple Podcasts</h3>
                <p className="font-paragraph text-primary/70 text-sm">Get new episodes automatically</p>
              </a>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <a 
                href="https://learningfrenchbyaccident.buzzsprout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-8 lg:p-10 rounded-lg hover:opacity-90 transition-all duration-300 text-center"
              >
                <Radio className="w-12 h-12 text-accent-red mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Open on Buzzsprout</h3>
                <p className="font-paragraph text-primary/70 text-sm">Listen on Buzzsprout platform</p>
              </a>
            </AnimatedElement>
          </div>
        </section>

        {/* SECTION 6 - CLASSES TEASER */}
        <section className="w-full max-w-[120rem] mx-auto bg-background py-24 lg:py-32 px-6 lg:px-12 border-b border-primary/5">
          <div className="mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">Classes</h2>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedElement delay={100} className="group">
              <div className="bg-secondary p-8 lg:p-10 rounded-lg hover:opacity-90 transition-all duration-300 h-full flex flex-col">
                <Users className="w-12 h-12 text-accent-red mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">Group Classes</h3>
                <p className="font-paragraph text-primary/70 mb-6 flex-grow">
                  Weekly live sessions via Instagram subscription.
                </p>
                <Link 
                  to="/classes/group"
                  className="inline-flex items-center gap-2 text-accent-red font-heading font-bold hover:opacity-70 transition-opacity"
                >
                  Group classes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200} className="group">
              <div className="bg-secondary p-8 lg:p-10 rounded-lg hover:opacity-90 transition-all duration-300 h-full flex flex-col">
                <User className="w-12 h-12 text-accent-red mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">Private Lessons</h3>
                <p className="font-paragraph text-primary/70 mb-6 flex-grow">
                  1:1 pronunciation and spoken French coaching.
                </p>
                <Link 
                  to="/classes/private"
                  className="inline-flex items-center gap-2 text-accent-red font-heading font-bold hover:opacity-70 transition-opacity"
                >
                  Private lessons <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* SECTION 7 - CTA / FOOTER PRELUDE */}
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
                            to="/start" 
                            className="px-10 py-5 bg-primary text-secondary font-heading font-bold text-lg rounded-sm hover:bg-primary/90 transition-colors w-full sm:w-auto"
                        >
                            Start Here
                        </Link>
                        <Link 
                            to="/contact" 
                            className="px-10 py-5 border-2 border-accent-red text-accent-red font-heading font-bold text-lg rounded-sm hover:bg-accent-red hover:text-white transition-all w-full sm:w-auto"
                        >
                            Contact
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
