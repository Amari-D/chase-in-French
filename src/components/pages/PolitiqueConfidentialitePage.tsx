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
                Legal Information
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                    Welcome to French Pronunciation. We are committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, and protect your information when you use our website.
                  </p>
                  <p>
                    By using our site, you accept the practices described in this policy. If you do not accept these terms, please do not use our site.
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
                  Information We Collect
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    We collect only the information strictly necessary for the operation of our site and the improvement of our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information provided voluntarily through our contact form (name, email address)</li>
                    <li>Anonymous navigation data (pages visited, visit duration, browser type)</li>
                    <li>Technical cookies necessary for the proper functioning of the site</li>
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
                  Use of Your Information
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    The information we collect is used exclusively for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Responding to your questions and requests through the contact form</li>
                    <li>Improving the quality and relevance of our educational content</li>
                    <li>Analyzing site usage to optimize user experience</li>
                    <li>Ensuring the security and proper technical functioning of the site</li>
                  </ul>
                  <p className="font-semibold">
                    We do not sell, rent, or share your personal data with third parties for commercial purposes.
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
                  Cookies and Similar Technologies
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    Our site uses cookies to improve your browsing experience. Cookies are small text files stored on your device.
                  </p>
                  <p>
                    We use only essential technical cookies necessary for the site to function. You can configure your browser to refuse cookies, but this may affect certain site features.
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
                  Data Protection
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    We take the security of your data very seriously and implement appropriate technical and organizational measures to protect your personal information against any unauthorized access, modification, disclosure, or destruction.
                  </p>
                  <p>
                    These measures include encryption of sensitive data, strict security protocols, and rigorous access controls.
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
                  Your Rights
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    In accordance with the General Data Protection Regulation (GDPR), you have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccurate or incomplete data</li>
                    <li>Right to erasure of your data (right to be forgotten)</li>
                    <li>Right to restrict processing of your data</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing of your data</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us through our contact form.
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
                  Data Retention
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    We retain your personal data only for as long as necessary for the purposes for which it was collected, or as required by applicable law.
                  </p>
                  <p>
                    Messages sent through our contact form are retained for a maximum of 3 years, unless you request earlier deletion.
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
                  External Links
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-secondary-foreground">
                  <p>
                    Our site may contain links to external websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to read their respective privacy policies.
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
                  Changes to This Policy
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page with an updated date.
                  </p>
                  <p>
                    We encourage you to check this page regularly to stay informed of our data protection practices.
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
                  Contact Us
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg opacity-90">
                  <p>
                    If you have any questions about this privacy policy or wish to exercise your rights regarding your personal data, please contact us through our contact form.
                  </p>
                  <p>
                    We are committed to responding to all requests within a reasonable timeframe and treating your concerns with the utmost seriousness.
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
