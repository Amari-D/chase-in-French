import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { HubsThmatiques, Leons } from '@/entities';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function HubDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [hub, setHub] = useState<HubsThmatiques | null>(null);
  const [lecons, setLecons] = useState<Leons[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items: allHubs } = await BaseCrudService.getAll<HubsThmatiques>('hubs');
        const foundHub = allHubs.find(h => h.slug === slug);
        
        if (foundHub) {
          setHub(foundHub);
          
          const { items: allLecons } = await BaseCrudService.getAll<Leons>('lecons');
          const hubLecons = allLecons.filter(l => l.hubName === foundHub.name);
          setLecons(hubLecons);
        }
      } catch (error) {
        console.error('Error fetching hub details:', error);
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

  if (!hub) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-4">
            <p className="font-paragraph text-lg text-foreground">Hub non trouvé</p>
            <Link to="/hubs" className="inline-flex items-center gap-2 text-primary font-paragraph font-semibold hover:opacity-80">
              <ArrowLeft className="w-5 h-5" />
              Retour aux hubs
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
              <Link 
                to="/hubs"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-paragraph transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour aux hubs
              </Link>
              
              <div className="max-w-4xl">
                <p className="font-paragraph text-sm uppercase tracking-wider opacity-80 mb-4">
                  Hub Thématique
                </p>
                <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                  {hub.name}
                </h1>
                
                {hub.summary && (
                  <p className="font-paragraph text-xl lg:text-2xl font-semibold opacity-95 mb-4">
                    {hub.summary}
                  </p>
                )}
                
                {hub.description && (
                  <p className="font-paragraph text-lg opacity-90">
                    {hub.description}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lecons List */}
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
                Leçons Disponibles
              </h2>
              <p className="font-paragraph text-lg text-foreground">
                {lecons.length} {lecons.length === 1 ? 'leçon disponible' : 'leçons disponibles'} dans ce hub
              </p>
            </motion.div>

            {lecons.length === 0 ? (
              <div className="text-center py-12 bg-secondary p-12">
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Aucune leçon disponible pour le moment dans ce hub.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {lecons.map((lecon, index) => (
                  <motion.div
                    key={lecon._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link 
                      to={`/lecons/${lecon.slug}`}
                      className="block group"
                    >
                      <div className="bg-secondary p-8 lg:p-10 border border-primary/10 hover:border-primary/30 transition-all">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-3 group-hover:opacity-80 transition-opacity">
                              {lecon.title}
                            </h3>
                            
                            {lecon.description && (
                              <p className="font-paragraph text-base text-foreground">
                                {lecon.description}
                              </p>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-primary font-paragraph font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
                            Lire la leçon
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Link>
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
                  Explorez d'autres thématiques
                </h2>
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Découvrez nos autres hubs pour enrichir votre apprentissage du français.
                </p>
                <Link 
                  to="/hubs"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                >
                  Voir Tous les Hubs
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
