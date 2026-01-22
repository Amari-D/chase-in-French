import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function FrenchSongsLab11Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link 
                to="/songs"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to songs
              </Link>
              
              <div className="max-w-4xl">
                <p className="font-paragraph text-sm uppercase tracking-wider opacity-80 mb-4">
                  Songs
                </p>
                
                <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                  French Songs Lab 11
                </h1>
                
                <p className="font-paragraph text-xl lg:text-2xl opacity-90">
                  Rap as a French study tool: timing, consonant clarity, and memory
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl space-y-16"
            >
              {/* What this lesson is */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  What this lesson is
                </h2>
                <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                  This is a practical method lesson: you will use songs (and rap) as a controlled training tool for pronunciation, rhythm, and real spoken French delivery — without relying on guessing or 'singing your way to fluency'.
                </p>
              </motion.div>

              {/* What you'll be able to do */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  What you'll be able to do after this
                </h2>
                <ul className="space-y-3">
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Extract a short line from any track and turn it into a repeatable drill.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Improve rhythm groups, linking, and vowel purity using music as a metronome.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Transfer the result back into spoken French (the real goal).</span>
                  </li>
                </ul>
              </motion.div>

              {/* Why songs work */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Why songs work for pronunciation (in one minute)
                </h2>
                <ul className="space-y-3">
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Repetition is built in:</strong> your ear gets multiple passes without boredom.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Timing forces flow:</strong> you can't pause after every word, so linking becomes natural.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Vowels become clearer:</strong> melody exposes sloppy vowel shapes instantly.</span>
                  </li>
                </ul>
              </motion.div>

              {/* The Method */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  The method (repeatable on any song)
                </h2>
                <ol className="space-y-4">
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">1.</span>
                    <span><strong>Sound first:</strong> listen without reading. Mark what you actually hear.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">2.</span>
                    <span><strong>Chunk:</strong> isolate 2–4 seconds (one rhythm group).</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">3.</span>
                    <span><strong>Speak in rhythm:</strong> same timing, no melody. 10 repetitions.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">4.</span>
                    <span><strong>Add melody lightly:</strong> 10 repetitions.</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">5.</span>
                    <span><strong>Return to speech:</strong> say it normally (conversation speed). 10 repetitions.</span>
                  </li>
                </ol>
              </motion.div>

              {/* Worked Example */}
              <motion.div variants={itemVariants} className="space-y-4 bg-secondary p-8 border border-primary/10">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Worked example (copyright-safe, invented line)
                </h2>
                <div className="space-y-4">
                  <p className="font-paragraph text-lg text-foreground/80">
                    <strong>Training line:</strong> <em>J'ai parlé, t'as compris, il est parti, on a fini.</em>
                  </p>
                  <div className="space-y-3">
                    <p className="font-paragraph text-lg text-foreground/80">
                      <strong>What to notice</strong>
                    </p>
                    <ul className="space-y-2">
                      <li className="font-paragraph text-base text-foreground/80 flex gap-4">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span><strong>Rap drills timing:</strong> keep syllables even and consonants crisp.</span>
                      </li>
                      <li className="font-paragraph text-base text-foreground/80 flex gap-4">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span><strong>Linking:</strong> <em>t'as compris</em> should flow; avoid hard resets.</span>
                      </li>
                      <li className="font-paragraph text-base text-foreground/80 flex gap-4">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span><strong>Use one bar to drill</strong> one grammar/pronunciation pattern repeatedly.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 10-Minute Practice Protocol */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  10-minute practice protocol
                </h2>
                <ul className="space-y-3">
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Listen x5</strong> (no text).</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Speak-in-rhythm x10</strong> (keep timing; stay relaxed).</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Sing/rap lightly x10</strong> (do not force volume).</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Record x1</strong> (one take).</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Compare x1</strong> (timing + vowel shape + linking).</span>
                  </li>
                  <li className="font-paragraph text-lg text-foreground/80 flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Fix one thing only,</strong> then record again.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Common Mistakes */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Common mistakes (and fixes)
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-paragraph text-lg text-foreground/80">
                      <strong>Over‐pronouncing every letter.</strong>
                    </p>
                    <p className="font-paragraph text-base text-foreground/70 ml-4">
                      Fix: copy flow first; spelling comes later.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-paragraph text-lg text-foreground/80">
                      <strong>English stress inside French phrases.</strong>
                    </p>
                    <p className="font-paragraph text-base text-foreground/70 ml-4">
                      Fix: land at the end of the rhythm group.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-paragraph text-lg text-foreground/80">
                      <strong>Losing vowel purity (turning vowels into English glides).</strong>
                    </p>
                    <p className="font-paragraph text-base text-foreground/70 ml-4">
                      Fix: freeze the mouth shape; repeat slowly.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Transfer to Real Conversation */}
              <motion.div variants={itemVariants} className="space-y-4 bg-accent-red/10 p-8 border border-accent-red/20">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Transfer to real conversation (the non-negotiable step)
                </h2>
                <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                  Say the same line as if you were speaking to a friend. Keep the rhythm groups and linking, but remove the 'performance' tone. This is where music becomes a language tool instead of entertainment.
                </p>
              </motion.div>

              {/* Internal Links */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Related pronunciation topics
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    to="/pronunciation#rhythm-groups"
                    className="p-6 bg-secondary border border-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-paragraph text-sm text-foreground/70 mb-2">Pronunciation</p>
                        <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          Rhythm groups and stress
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                  </Link>

                  <Link
                    to="/pronunciation#enchainement"
                    className="p-6 bg-secondary border border-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-paragraph text-sm text-foreground/70 mb-2">Pronunciation</p>
                        <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          Enchaînement (linking)
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                  </Link>

                  <Link
                    to="/pronunciation#schwa"
                    className="p-6 bg-secondary border border-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-paragraph text-sm text-foreground/70 mb-2">Pronunciation</p>
                        <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          Schwa (e muet) and reductions
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                  </Link>

                  <Link
                    to="/pronunciation#liaison"
                    className="p-6 bg-secondary border border-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-paragraph text-sm text-foreground/70 mb-2">Pronunciation</p>
                        <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          Liaison (when it happens)
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link 
                  to="/songs"
                  className="block bg-background p-8 border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3 text-primary font-paragraph font-semibold group-hover:gap-5 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                    Back to songs
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link 
                  to="/pronunciation"
                  className="block bg-background p-8 border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-2">
                    <p className="font-paragraph text-sm text-foreground/70">
                      Explore more
                    </p>
                    <div className="flex items-center gap-3 text-primary font-paragraph font-semibold">
                      Pronunciation lessons
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
