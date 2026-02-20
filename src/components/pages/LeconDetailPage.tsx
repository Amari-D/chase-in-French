import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Leons, Hubs } from '@/entities';
import { ArrowLeft } from 'lucide-react';

export default function LeconDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lecon, setLecon] = useState<Leons | null>(null);
  const [hub, setHub] = useState<Hubs | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedSlug = slug ? decodeURIComponent(slug) : '';
        const { items: allLecons } = await BaseCrudService.getAll<Leons>('lecons');
        const foundLecon = allLecons.find(l => l._id === decodedSlug);
        
        if (foundLecon) {
          setLecon(foundLecon);
          
          if (foundLecon.hub) {
            const { items: allHubs } = await BaseCrudService.getAll<Hubs>('hubs');
            const foundHub = allHubs.find(h => h.name === foundLecon.hub);
            if (foundHub) {
              setHub(foundHub);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching lecon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <p className="font-paragraph text-lg text-foreground">Chargement...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!lecon) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-4">
            <p className="font-paragraph text-lg text-foreground">Leçon non trouvée</p>
            <Link to="/lecons" className="inline-flex items-center gap-2 text-primary font-paragraph font-semibold hover:opacity-80">
              <ArrowLeft className="w-5 h-5" />
              Retour aux leçons
            </Link>
          </div>
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
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/lecons"
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  All lessons
                </Link>
                
                {hub && (
                  <>
                    <span className="text-primary-foreground/60">/</span>
                    <Link 
                      to={`/hubs/${hub.slug}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors"
                    >
                      {hub.name}
                    </Link>
                  </>
                )}
              </div>
              
              <div className="max-w-4xl">
                {lecon.hub && (
                  <p className="font-paragraph text-sm uppercase tracking-wider opacity-80 mb-4">
                    {lecon.hub}
                  </p>
                )}
                
                <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                  {lecon.lessonTitle}
                </h1>
                
                {lecon.shortDescription && (
                  <p className="font-paragraph text-xl lg:text-2xl opacity-90">
                    {lecon.shortDescription}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {lecon.lessonContent ? (
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="font-paragraph text-base lg:text-lg text-foreground leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: lecon.lessonContent.replace(/\n/g, '<br />') }}
                  />
                </div>
              ) : (
                <div className="bg-secondary p-12 text-center">
                  <p className="font-paragraph text-lg text-secondary-foreground">
                    The content of this lesson will be available soon.
                  </p>
                </div>
              )}
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
                  to="/lecons"
                  className="block bg-background p-8 border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3 text-primary font-paragraph font-semibold group-hover:gap-5 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                    View all lessons
                  </div>
                </Link>
              </motion.div>
              
              {hub && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link 
                    to={`/hubs/${hub.slug}`}
                    className="block bg-background p-8 border border-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="space-y-2">
                      <p className="font-paragraph text-sm text-foreground/70">
                        More lessons in
                      </p>
                      <div className="flex items-center gap-3 text-primary font-paragraph font-semibold">
                        {hub.name}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
