import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Podcasts } from '@/entities';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';

export default function PodcastsPage() {
  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Podcasts>('podcasts');
        setPodcasts(items);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
              className="max-w-4xl"
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to home
              </Link>
              
              <p className="font-paragraph text-sm uppercase tracking-wider opacity-80 mb-4">
                Audio Content
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Podcasts
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Listen to authentic French content and improve your listening comprehension.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Podcasts List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                Available Episodes
              </h2>
              <p className="font-paragraph text-lg text-foreground">
                {podcasts.length} {podcasts.length === 1 ? 'episode available' : 'episodes available'}
              </p>
            </motion.div>

            {loading ? (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground">Loading podcasts...</p>
              </div>
            ) : podcasts.length === 0 ? (
              <div className="text-center py-12 bg-secondary p-12">
                <p className="font-paragraph text-lg text-secondary-foreground">
                  No podcasts available at the moment.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {podcasts.map((podcast, index) => (
                  <motion.div
                    key={podcast._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <a 
                      href={podcast.audioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="bg-secondary p-8 lg:p-10 border border-primary/10 hover:border-primary/30 transition-all">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-3 group-hover:opacity-80 transition-opacity">
                              {podcast.title}
                            </h3>
                            
                            {podcast.description && (
                              <p className="font-paragraph text-base text-foreground mb-4">
                                {podcast.description}
                              </p>
                            )}
                            
                            {podcast.duration && (
                              <p className="font-paragraph text-sm text-foreground/70">
                                Duration: {formatDuration(podcast.duration)}
                              </p>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-primary font-paragraph font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
                            <Play className="w-5 h-5 fill-current" />
                            Listen
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
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
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                  Explore other topics
                </h2>
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Discover our other learning topics to enrich your French skills.
                </p>
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                >
                  Back to Home
                  <ArrowRight className="w-5 h-5" />
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
