import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialitePage() {
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
                Informations Légales
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Politique de Confidentialité
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6">
                  Introduction
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    Bienvenue sur Prononciation Française. Nous nous engageons à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, et protégeons vos informations lorsque vous utilisez notre site web.
                  </p>
                  <p>
                    En utilisant notre site, vous acceptez les pratiques décrites dans cette politique. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser notre site.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary p-10"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Informations que Nous Collectons
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    Nous collectons uniquement les informations strictement nécessaires au fonctionnement de notre site et à l'amélioration de nos services :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informations de contact fournies volontairement via notre formulaire de contact (nom, adresse email)</li>
                    <li>Données de navigation anonymes (pages visitées, durée de visite, type de navigateur)</li>
                    <li>Cookies techniques nécessaires au bon fonctionnement du site</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Utilisation de Vos Informations
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    Les informations que nous collectons sont utilisées exclusivement pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Répondre à vos questions et demandes via le formulaire de contact</li>
                    <li>Améliorer la qualité et la pertinence de nos contenus éducatifs</li>
                    <li>Analyser l'utilisation du site pour optimiser l'expérience utilisateur</li>
                    <li>Assurer la sécurité et le bon fonctionnement technique du site</li>
                  </ul>
                  <p className="font-semibold">
                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers à des fins commerciales.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary p-10"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Cookies et Technologies Similaires
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                  </p>
                  <p>
                    Nous utilisons uniquement des cookies techniques essentiels au fonctionnement du site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Protection de Vos Données
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    Nous prenons la sécurité de vos données très au sérieux et mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                  </p>
                  <p>
                    Ces mesures incluent le chiffrement des données sensibles, des protocoles de sécurité stricts, et des contrôles d'accès rigoureux.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary p-10"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Vos Droits
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification de vos données inexactes ou incomplètes</li>
                    <li>Droit à l'effacement de vos données (droit à l'oubli)</li>
                    <li>Droit à la limitation du traitement de vos données</li>
                    <li>Droit à la portabilité de vos données</li>
                    <li>Droit d'opposition au traitement de vos données</li>
                  </ul>
                  <p>
                    Pour exercer ces droits, veuillez nous contacter via notre formulaire de contact.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Conservation des Données
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables.
                  </p>
                  <p>
                    Les messages envoyés via notre formulaire de contact sont conservés pendant une durée maximale de 3 ans, sauf si vous demandez leur suppression anticipée.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary p-10"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Liens Externes
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    Notre site peut contenir des liens vers des sites web externes. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites tiers. Nous vous encourageons à lire leurs politiques de confidentialité respectives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Modifications de Cette Politique
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour actualisée.
                  </p>
                  <p>
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary text-primary-foreground p-10"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                  Nous Contacter
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg opacity-90">
                  <p>
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits relatifs à vos données personnelles, veuillez nous contacter via notre formulaire de contact.
                  </p>
                  <p>
                    Nous nous engageons à répondre à toutes les demandes dans un délai raisonnable et à traiter vos préoccupations avec le plus grand sérieux.
                  </p>
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
