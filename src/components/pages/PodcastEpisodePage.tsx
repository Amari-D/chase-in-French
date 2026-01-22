import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function PodcastEpisodePage() {
  const { slug } = useParams<{ slug: string }>();

  const episodes: Record<string, {
    id: string;
    number: string;
    title: string;
    buzzsproutId: string;
    description: string;
  }> = {
    'il': {
      id: 'il',
      number: '01',
      title: 'How we actually say "IL"',
      buzzsproutId: '12720257',
      description: 'Learn how French speakers actually pronounce the pronoun "il" in real conversation, including the subtle shifts and contractions that disappear in textbooks.'
    },
    'je': {
      id: 'je',
      number: '02',
      title: 'How we actually say "JE"',
      buzzsproutId: '13096226',
      description: 'Discover the real pronunciation of "je" as native speakers use it, including the common elisions and connected speech patterns.'
    },
    'tu': {
      id: 'tu',
      number: '03',
      title: 'How we actually say "TU"',
      buzzsproutId: '17546850',
      description: 'Explore how "tu" is pronounced in authentic French speech, with focus on the variations you\'ll hear in everyday conversation.'
    },
    'nous-on': {
      id: 'nous-on',
      number: '04',
      title: '"NOUS" vs "ON" (usage + real speech)',
      buzzsproutId: '14517473',
      description: 'Understand the difference between "nous" and "on" in real French speech, including when and how native speakers use each form.'
    },
    'vous': {
      id: 'vous',
      number: '05',
      title: 'How we actually say "VOUS"',
      buzzsproutId: '15324531',
      description: 'Master the pronunciation of "vous" in formal and informal contexts, with real-world examples from native speakers.'
    }
  };

  const episode = slug ? episodes[slug] : null;

  useEffect(() => {
    // Load Buzzsprout script for this episode
    if (episode) {
      const script = document.createElement('script');
      script.src = `https://www.buzzsprout.com/2179138/episodes/${episode.buzzsproutId}-*.js?container_id=buzzsprout-player-${episode.buzzsproutId}&player=small`;
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      const container = document.getElementById(`buzzsprout-player-${episode.buzzsproutId}`);
      if (container) {
        container.appendChild(script);
      }
    }
  }, [episode]);

  if (!episode) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-primary text-primary-foreground py-20 lg:py-28">
            <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
              <Link 
                to="/podcasts"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Podcasts
              </Link>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold">
                Episode Not Found
              </h1>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

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
            >
              <Link 
                to="/podcasts"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Podcasts
              </Link>
              
              <p className="font-paragraph text-sm uppercase tracking-wider opacity-80 mb-4">
                Episode {episode.number}
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                {episode.title}
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                {episode.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Episode Player */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-secondary p-8 lg:p-12 rounded-lg">
                <div id={`buzzsprout-player-${episode.buzzsproutId}`}></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                  Continue Your Learning
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/podcasts"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                  >
                    Back to All Episodes
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/pronunciation"
                    className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity border border-primary"
                  >
                    Pronunciation Lessons
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/start"
                    className="inline-flex items-center justify-center gap-2 bg-accent-red text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
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
