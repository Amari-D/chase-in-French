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
                Our Story
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                About Us
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Discover our mission and our commitment to excellence in teaching French pronunciation.
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
                  Our Mission
                </h2>
                <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                  <p>
                    We are dedicated to rigorous and accessible teaching of authentic French pronunciation. Our approach is based on a deep understanding of phonetic mechanisms and the realities of contemporary French.
                  </p>
                  <p>
                    Every resource we create is designed to give you a clear, structured, and practical perspective on the subtleties of the French language.
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
                    "Pronunciation is not a detail, it's the foundation of authentic communication in French."
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
                Our Values
              </h2>
              <p className="font-paragraph text-lg lg:text-xl text-secondary-foreground max-w-3xl mx-auto">
                The principles that guide our work and our commitment to your learning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Linguistic Rigor',
                  description: 'We rely on solid phonetic foundations and current linguistic research to ensure the accuracy of our content.'
                },
                {
                  title: 'Accessibility',
                  description: 'Our resources are designed to be understandable and usable by everyone, regardless of your starting level.'
                },
                {
                  title: 'Authenticity',
                  description: 'We prioritize French as it is actually spoken, taking into account contemporary and regional variations.'
                },
                {
                  title: 'Pedagogical Structure',
                  description: 'Each lesson is part of a logical and coherent progression, facilitating your learning step by step.'
                },
                {
                  title: 'Clarity',
                  description: 'We explain complex concepts in a simple and direct way, without unnecessary jargon.'
                },
                {
                  title: 'Commitment',
                  description: 'We are committed to continuously enriching our resources to meet your evolving needs.'
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
                    Our Approach
                  </h2>
                  <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                    <p>
                      We have structured our platform as a thematic library, where each hub represents a specific area of the French language. This organization allows you to navigate intuitively according to your interests and needs.
                    </p>
                    <p>
                      Pronunciation is the central pillar of our teaching, as it is the key to fluid and natural communication. We approach it in all its aspects: pure phonetics, regional variations, modern spoken French, and even its interaction with grammar.
                    </p>
                    <p>
                      Our lessons are designed to be both comprehensive and concise, giving you the essentials without excess. Each piece of content is carefully written to maximize your understanding and progress.
                    </p>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-10 lg:p-12">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                    Why Pronunciation?
                  </h3>
                  <p className="font-paragraph text-base lg:text-lg opacity-90">
                    Pronunciation is not simply a matter of accent. It is the vehicle of your thoughts, the tool that allows you to be understood and to understand. Mastered pronunciation opens the doors to authentic communication, self-confidence, and deep cultural immersion. This is why we dedicate all our expertise to it.
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
                  Ready to start your journey?
                </h2>
                <p className="font-paragraph text-lg text-secondary-foreground">
                  Explore our thematic hubs and discover the resources that will transform your mastery of French.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link 
                    to="/hubs"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold hover:opacity-90 transition-opacity"
                  >
                    Discover the Hubs
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded font-paragraph font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Contact Us
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
