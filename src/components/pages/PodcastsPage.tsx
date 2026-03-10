import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { setMetaTags } from '@/lib/meta-tags';

export default function PodcastsPage() {
  useEffect(() => {
    setMetaTags(
      'Learning French by Accident Podcast | Chase in French',
      'French pronunciation podcast, learn French listening, spoken French podcast',
      'Listen to the Learning French by Accident podcast to improve your French pronunciation and listening skills.'
    );
  }, []);

  useEffect(() => {
    // Load Buzzsprout scripts for each episode
    const loadBuzzsproutScripts = () => {
      const episodeIds = [
        'buzzsprout-player-12720257',
        'buzzsprout-player-13096226',
        'buzzsprout-player-17546850',
        'buzzsprout-player-14517473',
        'buzzsprout-player-15324531'
      ];

      episodeIds.forEach(id => {
        const script = document.createElement('script');
        script.src = `https://www.buzzsprout.com/2179138/episodes/${id.split('-')[2]}-*.js?container_id=${id}&player=small`;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        const container = document.getElementById(id);
        if (container) {
          container.appendChild(script);
        }
      });
    };

    loadBuzzsproutScripts();
  }, []);

  const episodes = [
    {
      id: 'il',
      number: '01',
      title: 'How we actually say "IL"',
      buzzsproutId: '12720257',
      buzzsproutUrl: 'https://www.buzzsprout.com/2179138/episodes/12720257-the-ultimate-french-pronunciation-podcast-how-we-actually-say-il.js'
    },
    {
      id: 'je',
      number: '02',
      title: 'How we actually say "JE"',
      buzzsproutId: '13096226',
      buzzsproutUrl: 'https://www.buzzsprout.com/2179138/episodes/13096226-the-ultimate-french-pronunciation-podcast-how-we-actually-say-je.js'
    },
    {
      id: 'tu',
      number: '03',
      title: 'How we actually say "TU"',
      buzzsproutId: '17546850',
      buzzsproutUrl: 'https://www.buzzsprout.com/2179138/episodes/17546850-free-preview-the-ultimate-french-pronunciation-podcast-how-we-actually-say-te.js'
    },
    {
      id: 'nous-on',
      number: '04',
      title: '"NOUS" vs "ON" (usage + real speech)',
      buzzsproutId: '14517473',
      buzzsproutUrl: 'https://www.buzzsprout.com/2179138/episodes/14517473-the-ultimate-french-pronunciation-podcast-how-we-actually-say-nous.js'
    },
    {
      id: 'vous',
      number: '05',
      title: 'How we actually say "VOUS"',
      buzzsproutId: '15324531',
      buzzsproutUrl: 'https://www.buzzsprout.com/2179138/episodes/15324531-the-ultimate-french-pronunciation-podcast-how-we-actually-say-vous.js'
    }
  ];

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
              className="max-w-4xl"
            >
              <h1 className="font-heading text-5xl lg:text-7xl font-bold mb-6">
                Learning French by Accident (Podcast)
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90 mb-8">
                This podcast trains your ear for real French — the pronunciation shifts, contractions, and sentence flow that disappear in textbooks. Each episode focuses on a single high‐frequency pattern so you can hear it, copy it, and use it.
              </p>
              
              {/* Top CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://podcasts.apple.com/us/podcast/learning-french-by-accident/id1684581201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent-red text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe on Apple Podcasts
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://learningfrenchbyaccident.buzzsprout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity border border-primary-foreground"
                >
                  Listen on Buzzsprout
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/start"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/40"
                >
                  Start Here
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
                Available Episodes
              </h2>
            </motion.div>

            <div className="space-y-12">
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary p-8 lg:p-12 rounded-lg"
                >
                  <div className="mb-6">
                    <p className="font-paragraph text-sm uppercase tracking-wider text-primary/70 mb-2">
                      Episode {episode.number}
                    </p>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4">
                      {episode.title}
                    </h3>
                  </div>

                  {/* Buzzsprout Player */}
                  <div className="mb-6 bg-white p-6 rounded">
                    <div id={`buzzsprout-player-${episode.buzzsproutId}`}></div>
                  </div>

                  {/* Read Episode Link */}
                  <Link
                    to={`/podcast/${episode.id}`}
                    className="inline-flex items-center gap-2 text-primary font-paragraph font-semibold hover:gap-4 transition-all"
                  >
                    Read episode
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Next Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                Coming Next
              </h2>
              <p className="font-paragraph text-lg text-foreground">
                Next season (planned): Passé composé in real speech — pronouns, questions, negatives, and the forms people actually use (6 weeks).
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold">
                  Continue Your Learning
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/pronunciation"
                    className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                  >
                    Browse Pronunciation Lessons
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/classes"
                    className="inline-flex items-center justify-center gap-2 bg-accent-red text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                  >
                    Join Classes
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/start"
                    className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/40"
                  >
                    Start Here
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
