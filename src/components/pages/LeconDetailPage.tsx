import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Leons, Hubs } from '@/entities';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LeconDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lecon, setLecon] = useState<Leons | null>(null);
  const [hub, setHub] = useState<Hubs | null>(null);
  const [relatedLessons, setRelatedLessons] = useState<Leons[]>([]);
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

          // Find lessons that THIS lesson links TO (i.e., lessons in this lesson's relatedLessons field)
          const related: Leons[] = [];
          console.log('Current lesson relatedLessons field:', foundLecon.relatedLessons);
          
          if (foundLecon.relatedLessons && foundLecon.relatedLessons.trim()) {
            try {
              let relatedIds: string[] = [];
              const rawValue = foundLecon.relatedLessons.trim();
              console.log('Raw relatedLessons value:', rawValue);
              
              // Try parsing as JSON first
              try {
                const parsed = JSON.parse(rawValue);
                console.log('Parsed JSON:', parsed);
                if (Array.isArray(parsed)) {
                  relatedIds = parsed.map(id => String(id).trim()).filter(id => id);
                } else if (typeof parsed === 'string') {
                  relatedIds = [parsed];
                }
              } catch (e) {
                console.log('JSON parse failed, trying comma-separated:', e);
                // Fall back to comma-separated parsing
                relatedIds = rawValue
                  .split(',')
                  .map(id => id.trim())
                  .filter(id => id && id.length > 0);
              }
              
              console.log('Extracted related IDs:', relatedIds);
              
              // Find the actual lesson objects for each related ID
              relatedIds.forEach(relatedId => {
                const relatedLesson = allLecons.find(l => l._id === relatedId);
                console.log(`Looking for lesson ${relatedId}:`, relatedLesson ? 'Found' : 'Not found');
                if (relatedLesson) {
                  related.push(relatedLesson);
                }
              });
            } catch (e) {
              console.error('Error parsing related lessons:', e);
            }
          }
          
          console.log('Final related lessons array:', related);
          setRelatedLessons(related);
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

        {/* Related Lessons Section - Always show if there are any */}
        {relatedLessons && relatedLessons.length > 0 && (
          <section className="py-20 lg:py-28 bg-background">
            <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12 text-primary">
                  Related Lessons
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedLessons.map((relatedLesson) => (
                    <Link
                      key={relatedLesson._id}
                      to={`/lecons/${encodeURIComponent(relatedLesson._id)}`}
                      className="group cursor-pointer"
                    >
                      <div className="border-t border-primary/10 pt-6 hover:border-primary transition-colors duration-300 h-full flex flex-col">
                        <h3 className="font-heading text-xl font-medium mb-4 group-hover:underline decoration-1 underline-offset-4 text-primary">
                          {relatedLesson.lessonTitle || "Untitled Lesson"}
                        </h3>
                        <p className="font-paragraph text-primary/60 text-sm leading-relaxed mb-6 flex-grow">
                          {relatedLesson.shortDescription || "An in-depth analysis of essential phonetic mechanisms for natural speech."}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary/40 group-hover:text-primary transition-colors">
                          <ArrowRight className="w-3 h-3" />
                          <span>View</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

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
