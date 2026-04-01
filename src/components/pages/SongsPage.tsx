import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Songs } from '@/entities';
import { ArrowRight, ArrowLeft, Music } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { setMetaTags } from '@/lib/meta-tags';

export default function SongsPage() {
  const [songs, setSongs] = useState<Songs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMetaTags(
      'Learn French Through Songs | Chase in French',
      'learn French through songs, French listening practice, French pronunciation songs',
      'Improve your French pronunciation and listening skills by learning through authentic French songs.'
    );
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Songs>('songs');
        setSongs(items);
      } catch (error) {
        console.error('Error fetching songs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
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
                Video Content
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Songs & Videos
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Learn French through music and video content from native speakers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Songs List */}
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
                Available Songs
              </h2>
              <p className="font-paragraph text-lg text-foreground">
                {songs.length} {songs.length === 1 ? 'song available' : 'songs available'}
              </p>
            </motion.div>

            {loading ? (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground">Loading songs...</p>
              </div>
            ) : songs.length === 0 ? (
              <div className="text-center py-12 bg-secondary p-12">
                <p className="font-paragraph text-lg text-secondary-foreground">
                  No songs available at the moment.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {songs.slice(0, 10).map((song, index) => (
                   <motion.div
                     key={song._id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.05 }}
                   >
                     <a 
                       href={song.videoUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block group h-full"
                     >
                       <div className="relative bg-primary/10 aspect-video overflow-hidden rounded">
                         {song.thumbnail ? (
                           <Image 
                             src={song.thumbnail}
                             alt={song.title || 'Song thumbnail'}
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                             width={400}
                             height={225}
                           />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center bg-secondary">
                             <Music className="w-12 h-12 text-primary/30" />
                           </div>
                         )}
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                           <div className="bg-primary text-primary-foreground rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                             <ArrowRight className="w-6 h-6" />
                           </div>
                         </div>
                       </div>
                      
                      {/* Content Below Thumbnail */}
                      <div className="pt-4">
                        <h3 className="font-heading text-lg font-bold text-primary mb-2 group-hover:opacity-80 transition-opacity line-clamp-2">
                          {song.title}
                        </h3>
                        
                        {song.artist && (
                          <p className="font-paragraph text-sm text-foreground/70 mb-2">
                            {song.artist}
                          </p>
                        )}
                        
                        {song.duration && (
                          <p className="font-paragraph text-xs text-foreground/60">
                            Duration: {formatDuration(song.duration)}
                          </p>
                        )}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Browse by Training Mode Section */}
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
                Browse by training mode
              </h2>
              <p className="font-paragraph text-lg text-foreground">
                Choose your learning path
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Pronunciation foundations',
                  description: 'Master the fundamentals of French pronunciation with guided exercises and native speaker examples.',
                  link: '/pronunciation'
                },
                {
                  title: 'Modern flow',
                  description: 'Learn contemporary French through songs, slang, and cultural content for real-world communication.',
                  link: '/slang'
                },
                {
                  title: 'Articulation',
                  description: 'Develop clear and precise articulation through targeted practice and detailed phonetic guidance.',
                  link: '/grammar'
                }
              ].map((mode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={mode.link}
                    className="block group h-full"
                  >
                    <div className="bg-secondary border border-primary/10 hover:border-primary/30 transition-all p-8 h-full flex flex-col hover:opacity-90">
                      <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:opacity-80 transition-opacity">
                        {mode.title}
                      </h3>
                      <p className="font-paragraph text-foreground flex-1 mb-4">
                        {mode.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Want faster progress */}
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
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold">
                    Want faster progress?
                  </h2>
                  <p className="font-paragraph text-lg opacity-90">
                    Join a group class for live practice, or book a private lesson for targeted correction.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/classes/group"
                    className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                  >
                    Group Classes
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/classes/private"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:bg-primary-foreground/10 transition-colors"
                  >
                    Private Lessons
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Explore other topics Section */}
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
