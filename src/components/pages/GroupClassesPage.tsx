import { Head } from '@/components/Head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GroupClassesPage() {
  return (
    <>
      <Head
        title="Group French Classes | Chase in French"
        description="Weekly 60-minute live French group classes on Instagram with replays and Q&A."
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-primary to-medium-blue py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Group classes
              </h1>
              <p className="font-paragraph text-lg text-primary-foreground mb-8 leading-relaxed">
                Weekly 60‐minute live classes hosted on Instagram. Ask questions in the chat, practise in real time, and catch up with replays if you miss a session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/chaseinfrench/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-accent-red hover:bg-accent-red/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg">
                    Join via Instagram subscription
                  </Button>
                </a>
                <a href="mailto:chaseinfrench@gmail.com" className="inline-block">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold rounded-lg">
                    Email for questions
                  </Button>
                </a>
              </div>
              <p className="font-paragraph text-sm text-primary-foreground/80 mt-6">
                Instagram subscription £19.99/month (shown in Instagram; may change)
              </p>
            </motion.div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-12">
                What you get
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Weekly live session',
                    description: '60 minutes of interactive French learning'
                  },
                  {
                    title: 'Chat Q&A during class',
                    description: 'Ask questions and get direct feedback in real time'
                  },
                  {
                    title: 'Access to replays',
                    description: 'Recommended: 3 months of replay access to catch up on missed sessions'
                  },
                  {
                    title: 'Practical focus',
                    description: 'Pronunciation + real spoken French patterns you can use immediately'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary rounded-lg p-8 border border-secondary/50"
                  >
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-secondary-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-12">
                How to join
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Subscribe',
                    description: 'Go to @chaseinfrench on Instagram and subscribe (crown icon)'
                  },
                  {
                    step: '2',
                    title: 'Join live',
                    description: 'When class is live, tap the profile image with the LIVE ring'
                  },
                  {
                    step: '3',
                    title: 'Watch replays',
                    description: 'Open the subscription area to access past lessons'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 md:gap-8"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xl md:text-2xl">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-2">
                        Step {item.step} — {item.title}
                      </h3>
                      <p className="font-paragraph text-secondary-foreground text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-12">
                Who it's for
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  'Learners who want accountability and weekly structure',
                  'People who learn best by listening + copying (pronunciation first)',
                  'Anyone who wants direct feedback without booking private time'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-secondary to-secondary/50 rounded-lg p-8 border border-secondary/50"
                  >
                    <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-primary">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
                Ready to get started?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/chaseinfrench/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-accent-red hover:bg-accent-red/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg">
                    Join on Instagram
                  </Button>
                </a>
                <Link to="/start" className="inline-block">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold rounded-lg">
                    Start Here
                  </Button>
                </Link>
                <Link to="/classes/private" className="inline-block">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold rounded-lg">
                    Prefer 1:1? Private lessons
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
