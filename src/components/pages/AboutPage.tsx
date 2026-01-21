import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Chase in French';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Chase in French is built by Chase Emery Davis — bilingual French pronunciation specialist, on‐set dialect coach, and host of Learning French by Accident.');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-primary text-primary-foreground py-20 md:py-32">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl"
            >
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8">About</h1>
              <p className="font-paragraph text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl">
                Chase in French is a bilingual learning platform built for one goal: helping English speakers understand and speak real French with clear pronunciation, natural rhythm, and modern conversational patterns.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="font-paragraph text-base">
                  <Link to="/">Start Here</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-paragraph text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/pronunciation">Browse Pronunciation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-paragraph text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/podcasts">Listen to the Podcast</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-paragraph text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chase Photo Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/a60e36_538c0bdfd29d45f1afdbca4de8d395c1~mv2.png?originWidth=896&originHeight=640"
                  alt="Chase Emery Davis - French pronunciation specialist and dialect coach"
                  className="w-full h-full object-cover"
                  width={1200}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Chase in French */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                About Chase in French
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-6 font-paragraph text-lg leading-relaxed text-foreground">
                <p>
                  Chase in French started as a response to the same problem most learners hit: you can "know French", but still not understand native speakers — and still not sound clear when you speak. The missing piece is almost always pronunciation and real spoken rhythm.
                </p>
                
                <p>
                  This site is organised as a structured library. Each topic hub gives you a short "Start here" path, so you can progress without getting lost in random videos or textbook rules that don't match real speech.
                </p>
                
                <div className="bg-secondary p-8 rounded-xl mt-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">What you'll find here:</h3>
                  <ul className="space-y-4 font-paragraph text-lg">
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span>Pronunciation training (phonetics, mouth placement, rhythm, liaison, reductions).</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span>Modern spoken French patterns (what disappears, what links, what changes in speed).</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span>Culture notes that explain the "why" behind everyday French choices.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span>Podcast listening training (Learning French by Accident).</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span>Songs & videos selected specifically to train ear + accent (not generic playlists).</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Chase Emery Davis */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                About Chase Emery Davis
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-6 font-paragraph text-lg leading-relaxed text-foreground">
                <p>
                  Chase Emery Davis is a bilingual French/English pronunciation specialist, trained performer, and on‐set language consultant. Born in New York and raised in Paris, he grew up speaking French at school and English at home — an upbringing that makes him unusually precise about the differences between the two sound systems.
                </p>
                
                <p>
                  His work is shaped by voice. Chase has professional acting training (including movement and performance work) and a classical vocal background. He also holds a Master's degree in Music Production with a focus on recording the human voice — which directly informs how he teaches placement, resonance, clarity, and rhythm.
                </p>
                
                <p>
                  Chase is also a professional voice actor and vocal performer. That means he doesn't teach "ideas about pronunciation" — he teaches the physical habits that create a sound, because he has to deliver those habits professionally under pressure.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Professional Credibility */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Professional credibility
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-6 font-paragraph text-lg leading-relaxed text-foreground">
                <p>
                  On‐set French language coach and multilingual consultant for international film and television productions, responsible for pronunciation accuracy, line delivery, translation support, and linguistic authenticity.
                </p>
                
                <div className="bg-secondary p-8 rounded-xl mt-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Selected credits include:</h3>
                  <ul className="grid md:grid-cols-2 gap-4 font-paragraph text-lg">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Napoleon</strong> (Ridley Scott) — French translation and dialect direction</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>The Boys</strong> (Season 4) — French language coach</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>My Lady Jane</strong> — Latin/French/Italian/Spanish/German coaching</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>The Lazarus Project</strong> — Japanese dialect work</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Great Expectations</strong> — French language coach</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Tetris</strong> — Japanese support and multilingual coaching</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Boat Story</strong> — French dialect coaching</span>
                    </li>
                  </ul>
                </div>
                
                <p className="pt-4">
                  Chase teaches a large learner community across TikTok, Instagram, YouTube and podcast platforms (750k+ followers across channels as of 2026).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Teaching approach (the Chase in French method)
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-6 font-paragraph text-lg leading-relaxed text-foreground">
                <p>Chase's method is built around two realities:</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-background p-8 rounded-xl border-2 border-accent-red">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">Everything begins in the mouth</h3>
                    <p className="font-paragraph text-base">The shape, placement, airflow and rhythm create the sound.</p>
                  </div>
                  <div className="bg-background p-8 rounded-xl border-2 border-accent-red">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">Listening is not passive</h3>
                    <p className="font-paragraph text-base">You need trained expectations so your ear can detect what French is actually doing.</p>
                  </div>
                </div>
                
                <p>
                  Lessons focus on a small number of high‐impact patterns, taught in a sequence that trains the subconscious (so you don't have to "think of rules" while speaking). The objective is clarity and confidence — not perfection for an exam.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects & Formats */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Projects & formats
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-6 font-paragraph text-lg leading-relaxed text-foreground">
                <p>
                  Chase's work includes multiple formats designed to teach modern French through voice and pattern recognition:
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="bg-secondary p-8 rounded-xl">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">The Book of Wesh</h3>
                    <p className="font-paragraph text-base">A practical guide to modern French contractions, levels of speech, and how real sentences are delivered (audiobook format emphasises the listening component).</p>
                  </div>
                  
                  <div className="bg-secondary p-8 rounded-xl">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Vas‐y, Vas‐y, Let's Go</h3>
                    <p className="font-paragraph text-base">A children's French learning concept designed to support bilingualism, with a book series attached.</p>
                  </div>
                  
                  <div className="bg-secondary p-8 rounded-xl">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Conjugation raps</h3>
                    <p className="font-paragraph text-base">Rhythmic learning tools for grammar patterns (planned YouTube releases) designed to help learners memorise through sound.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Connect with Chase
              </motion.h2>
              
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="lg" className="font-paragraph">
                  <a href="https://www.linkedin.com/in/language-expert-chase-emery-davis/" target="_blank" rel="noopener noreferrer">
                    LinkedIn <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-paragraph">
                  <a href="https://www.instagram.com/chaseinfrench/" target="_blank" rel="noopener noreferrer">
                    Instagram <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-paragraph">
                  <a href="https://www.tiktok.com/@chaseinfrench" target="_blank" rel="noopener noreferrer">
                    TikTok <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-paragraph">
                  <a href="https://podcasts.apple.com/us/podcast/learning-french-by-accident/id1684581201" target="_blank" rel="noopener noreferrer">
                    Apple Podcasts <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-paragraph">
                  <a href="https://learningfrenchbyaccident.buzzsprout.com/" target="_blank" rel="noopener noreferrer">
                    Buzzsprout <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What to do next */}
        <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold mb-8">
                What to do next
              </motion.h2>
              
              <motion.p variants={itemVariants} className="font-paragraph text-xl mb-12 max-w-3xl mx-auto">
                Ready to start improving your French pronunciation and comprehension?
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="font-paragraph text-base">
                  <Link to="/">Start Here</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-paragraph text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/pronunciation">Browse Pronunciation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-paragraph text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/podcasts">Listen to the Podcast</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-paragraph text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Contact</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
