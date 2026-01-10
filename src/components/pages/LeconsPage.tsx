import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Leons, HubsThmatiques } from '@/entities';
import { ArrowRight, Filter } from 'lucide-react';

export default function LeconsPage() {
  const [lecons, setLecons] = useState<Leons[]>([]);
  const [hubs, setHubs] = useState<HubsThmatiques[]>([]);
  const [filteredLecons, setFilteredLecons] = useState<Leons[]>([]);
  const [selectedHub, setSelectedHub] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leconsResult, hubsResult] = await Promise.all([
          BaseCrudService.getAll<Leons>('lecons'),
          BaseCrudService.getAll<HubsThmatiques>('hubs')
        ]);
        
        setLecons(leconsResult.items);
        setFilteredLecons(leconsResult.items);
        
        const sortedHubs = hubsResult.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setHubs(sortedHubs);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedHub === 'all') {
      setFilteredLecons(lecons);
    } else {
      setFilteredLecons(lecons.filter(l => l.hubName === selectedHub));
    }
  }, [selectedHub, lecons]);

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
                Bibliothèque Complète
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Toutes les Leçons
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Parcourez l'intégralité de nos leçons et filtrez par hub thématique pour trouver le contenu qui correspond à vos besoins d'apprentissage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-secondary py-8 sticky top-0 z-10 border-b border-primary/10">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-primary" />
                <span className="font-paragraph font-semibold text-secondary-foreground">
                  Filtrer par hub :
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedHub('all')}
                  className={`px-4 py-2 rounded font-paragraph font-medium transition-all ${
                    selectedHub === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-foreground hover:bg-primary/10'
                  }`}
                >
                  Tous ({lecons.length})
                </button>
                
                {hubs.map(hub => {
                  const count = lecons.filter(l => l.hubName === hub.name).length;
                  return (
                    <button
                      key={hub._id}
                      onClick={() => setSelectedHub(hub.name || '')}
                      className={`px-4 py-2 rounded font-paragraph font-medium transition-all ${
                        selectedHub === hub.name
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background text-foreground hover:bg-primary/10'
                      }`}
                    >
                      {hub.name} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Lecons List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            {loading ? (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground">Chargement des leçons...</p>
              </div>
            ) : filteredLecons.length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-secondary p-12 max-w-2xl mx-auto">
                  <p className="font-paragraph text-lg text-secondary-foreground mb-4">
                    Aucune leçon disponible {selectedHub !== 'all' ? 'dans ce hub' : ''}.
                  </p>
                  {selectedHub !== 'all' && (
                    <button
                      onClick={() => setSelectedHub('all')}
                      className="text-primary font-paragraph font-semibold hover:opacity-80"
                    >
                      Voir toutes les leçons
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                    {selectedHub === 'all' ? 'Toutes les Leçons' : selectedHub}
                  </h2>
                  <p className="font-paragraph text-lg text-foreground">
                    {filteredLecons.length} {filteredLecons.length === 1 ? 'leçon disponible' : 'leçons disponibles'}
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {filteredLecons.map((lecon, index) => (
                    <motion.div
                      key={lecon._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Link 
                        to={`/lecons/${lecon.slug}`}
                        className="block group"
                      >
                        <div className="bg-secondary p-8 lg:p-10 border border-primary/10 hover:border-primary/30 transition-all">
                          <div className="flex flex-col gap-4">
                            {lecon.hubName && (
                              <span className="inline-block text-sm font-paragraph font-semibold text-primary uppercase tracking-wider">
                                {lecon.hubName}
                              </span>
                            )}
                            
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
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </>
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
                  Explorez par thématique
                </h2>
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Découvrez nos hubs organisés pour une approche structurée de votre apprentissage.
                </p>
                <Link 
                  to="/hubs"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                >
                  Voir les Hubs Thématiques
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
