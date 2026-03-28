import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Songs } from '@/entities';
import { BaseCrudService } from '@/integrations';

interface CuratedSong {
  artist: string;
  title: string;
  focus: string;
  songId: string;
}

const curatedSongs: CuratedSong[] = [
  {
    artist: 'Édith Piaf',
    title: 'La Vie en rose',
    focus: 'foundations',
    songId: 'piaf-vie-en-rose'
  },
  {
    artist: 'Joe Dassin',
    title: 'Les Champs‐Élysées',
    focus: 'nasals + repetition',
    songId: 'dassin-champs-elysees'
  },
  {
    artist: 'Stromae',
    title: 'Papaoutai',
    focus: 'modern timing',
    songId: 'stromae-papaoutai'
  },
  {
    artist: 'Indila',
    title: 'Dernière danse',
    focus: 'nasal vowel density',
    songId: 'indila-derniere-danse'
  },
  {
    artist: 'Grand Corps Malade',
    title: 'Les Voyages en train',
    focus: 'spoken pacing',
    songId: 'grand-corps-malade-voyages'
  }
];

export default function TopicsSongsPage() {
  const [songs, setSongs] = useState<Songs[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const result = await BaseCrudService.getAll<Songs>('songs');
        setSongs(result.items || []);
      } catch (error) {
        console.error('Error loading songs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSongs();
  }, []);

  const getSongById = (songId: string) => {
    return songs.find(song => song._id === songId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-secondary to-white py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">
                Songs & Videos
              </h1>
              <p className="font-heading text-2xl md:text-3xl text-medium-blue font-semibold">
                Use music to train French rhythm, vowel stability, and connected speech. Each page gives you a clear listening target and a short drill you can repeat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="max-w-[100rem] mx-auto px-6 md:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-foreground leading-relaxed max-w-3xl"
            >
              Music is one of the fastest ways to improve pronunciation because it forces timing. You learn where French connects, where it drops sounds, and how rhythm groups carry meaning. Start with the five songs below, then browse by training mode.
            </motion.p>
          </div>
        </section>

        {/* Start Here Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12"
            >
              Start here
            </motion.h2>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg h-64 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {curatedSongs.map((curatedSong, index) => {
                  const song = getSongById(curatedSong.songId);
                  
                  return (
                    <motion.div
                      key={curatedSong.songId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        to={`/songs#${curatedSong.songId}`}
                        className="group block h-full"
                      >
                        <div className="bg-white rounded-lg overflow-hidden hover:opacity-90 transition-opacity h-full flex flex-col">
                          {song?.thumbnail && (
                            <div className="relative w-full aspect-video overflow-hidden bg-secondary">
                              <Image
                                src={song.thumbnail}
                                alt={`${song.title} by ${song.artist}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                width={400}
                              />
                            </div>
                          )}
                          <div className="p-6 flex flex-col flex-1">
                            <p className="font-paragraph text-sm text-medium-blue font-semibold mb-2">
                              {curatedSong.artist}
                            </p>
                            <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {curatedSong.title}
                            </h3>
                            <p className="font-paragraph text-sm text-foreground opacity-75 mb-4 flex-1">
                              {curatedSong.focus}
                            </p>
                            <div className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                              Listen & drill →
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Browse All Songs Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-[100rem] mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Browse all songs
              </h2>
              <p className="font-paragraph text-lg text-foreground opacity-75 mb-8 max-w-2xl mx-auto">
                Explore our full collection of French songs organized by training focus and difficulty level.
              </p>
              <Link
                to="/songs"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                View all songs
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
