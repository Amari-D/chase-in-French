import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { HubsThmatiques } from '@/entities';
import { ArrowRight } from 'lucide-react';

export default function HubsPage() {
  const [hubs, setHubs] = useState<HubsThmatiques[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const { items } = await BaseCrudService.getAll<HubsThmatiques>('hubs');
        const sortedHubs = items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setHubs(sortedHubs);
      } catch (error) {
        console.error('Error fetching hubs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHubs();
  }, []);

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
              <p className="font-paragraph text-sm uppercase tracking-wider opacity-80 mb-4">
                Bibliothèque Thématique
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Explorez Nos Hubs Thématiques
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Chaque hub regroupe des leçons spécialisées pour approfondir un aspect spécifique de la langue française. Choisissez votre domaine d'intérêt et commencez votre apprentissage structuré.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hubs Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            {loading ? (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground">Chargement des hubs...</p>
              </div>
            ) : hubs.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground">Aucun hub disponible pour le moment.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {hubs.map((hub, index) => (
                  <motion.div
                    key={hub._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link 
                      to={`/hubs/${hub.slug}`}
                      className="block group"
                    >
                      <div className="bg-secondary p-10 lg:p-12 border border-primary/10 hover:border-primary/30 transition-all h-full">
                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:opacity-80 transition-opacity">
                              {hub.name}
                            </h2>
                            
                            {hub.summary && (
                              <p className="font-paragraph text-lg text-secondary-foreground mb-4 font-semibold">
                                {hub.summary}
                              </p>
                            )}
                            
                            {hub.description && (
                              <p className="font-paragraph text-base text-foreground">
                                {hub.description}
                              </p>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-primary font-paragraph font-semibold mt-6 group-hover:gap-4 transition-all">
                            Explorer ce hub
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
                  Vous cherchez une leçon spécifique ?
                </h2>
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Parcourez toutes nos leçons disponibles et filtrez par thématique pour trouver exactement ce dont vous avez besoin.
                </p>
                <Link 
                  to="/lecons"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                >
                  Voir Toutes les Leçons
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
