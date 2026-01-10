import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function AProposPage() {
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
                Notre Histoire
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                À Propos
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Découvrez notre mission et notre engagement envers l'excellence dans l'enseignement de la prononciation française.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-6">
                  Notre Mission
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    Nous sommes dédiés à l'enseignement rigoureux et accessible de la prononciation française authentique. Notre approche repose sur une compréhension profonde des mécanismes phonétiques et des réalités du français contemporain.
                  </p>
                  <p>
                    Chaque ressource que nous créons est conçue pour vous offrir une perspective claire, structurée et pratique sur les subtilités de la langue française.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary p-12 lg:p-16"
              >
                <blockquote className="space-y-4">
                  <p className="font-paragraph text-xl lg:text-2xl text-secondary-foreground italic">
                    "La prononciation n'est pas un détail, c'est le fondement même de la communication authentique en français."
                  </p>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-6">
                Nos Valeurs
              </h2>
              <p className="font-paragraph text-lg lg:text-xl text-secondary-foreground max-w-3xl mx-auto">
                Les principes qui guident notre travail et notre engagement envers votre apprentissage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Rigueur Linguistique',
                  description: 'Nous nous appuyons sur des bases phonétiques solides et des recherches linguistiques actuelles pour garantir la précision de nos contenus.'
                },
                {
                  title: 'Accessibilité',
                  description: 'Nos ressources sont conçues pour être compréhensibles et utilisables par tous, quel que soit votre niveau de départ.'
                },
                {
                  title: 'Authenticité',
                  description: 'Nous privilégions le français tel qu\'il est réellement parlé, en tenant compte des variations contemporaines et régionales.'
                },
                {
                  title: 'Structure Pédagogique',
                  description: 'Chaque leçon s\'inscrit dans une progression logique et cohérente, facilitant votre apprentissage étape par étape.'
                },
                {
                  title: 'Clarté',
                  description: 'Nous expliquons les concepts complexes de manière simple et directe, sans jargon inutile.'
                },
                {
                  title: 'Engagement',
                  description: 'Nous nous engageons à enrichir continuellement nos ressources pour répondre à vos besoins évolutifs.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-8"
                >
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-6">
                    Notre Approche
                  </h2>
                  <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                    <p>
                      Nous avons structuré notre plateforme comme une bibliothèque thématique, où chaque hub représente un domaine spécifique de la langue française. Cette organisation vous permet de naviguer intuitivement selon vos intérêts et vos besoins.
                    </p>
                    <p>
                      La prononciation constitue le pilier central de notre enseignement, car elle est la clé d'une communication fluide et naturelle. Nous l'abordons sous tous ses aspects : phonétique pure, variations régionales, français parlé moderne, et même son interaction avec la grammaire.
                    </p>
                    <p>
                      Nos leçons sont conçues pour être à la fois complètes et concises, vous offrant l'essentiel sans superflu. Chaque contenu est rédigé avec soin pour maximiser votre compréhension et votre progression.
                    </p>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-10 lg:p-12">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                    Pourquoi la Prononciation ?
                  </h3>
                  <p className="font-paragraph text-base lg:text-lg opacity-90">
                    La prononciation n'est pas simplement une question d'accent. C'est le véhicule de votre pensée, l'outil qui vous permet d'être compris et de comprendre. Une prononciation maîtrisée ouvre les portes de la communication authentique, de la confiance en soi, et d'une immersion culturelle profonde. C'est pourquoi nous y consacrons toute notre expertise.
                  </p>
                </div>
              </motion.div>
            </div>
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
                  Prêt à commencer votre parcours ?
                </h2>
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Explorez nos hubs thématiques et découvrez les ressources qui transformeront votre maîtrise du français.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link 
                    to="/hubs"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                  >
                    Découvrir les Hubs
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded font-paragraph font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Nous Contacter
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
