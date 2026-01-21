import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Instagram, Linkedin, Music } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Chase in French';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Chase in French for private lessons, group classes, or collaboration enquiries.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact Chase in French for private lessons, group classes, or collaboration enquiries.';
      document.head.appendChild(meta);
    }
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
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Contact
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90 mb-8">
                For private lesson enquiries, group class questions, press, or collaborations, use the form below or email directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-secondary p-8 lg:p-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="font-heading text-xl font-bold text-primary mb-2">
                        Email
                      </h2>
                      <a 
                        href="mailto:chaseinfrench@gmail.com"
                        className="font-paragraph text-lg text-foreground hover:text-primary transition-colors"
                      >
                        chaseinfrench@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="font-heading text-xl font-bold text-primary mb-2">
                        Location
                      </h2>
                      <p className="font-paragraph text-lg text-foreground">
                        London / Paris
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Quick Links
                </h2>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    asChild
                    className="bg-primary text-primary-foreground hover:opacity-90 font-paragraph font-semibold"
                  >
                    <Link to="/start-here">Start Here</Link>
                  </Button>
                  <Button 
                    asChild
                    className="bg-primary text-primary-foreground hover:opacity-90 font-paragraph font-semibold"
                  >
                    <Link to="/classees">Classes</Link>
                  </Button>
                  <Button 
                    asChild
                    className="bg-primary text-primary-foreground hover:opacity-90 font-paragraph font-semibold"
                  >
                    <Link to="/podcasts">Podcast</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Connect With Us
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <a
                    href="https://www.instagram.com/chaseinfrench/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-secondary p-6 hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Instagram className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">
                        Instagram
                      </h3>
                      <p className="font-paragraph text-sm opacity-80">
                        @chaseinfrench
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@chaseinfrench"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-secondary p-6 hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Music className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">
                        TikTok
                      </h3>
                      <p className="font-paragraph text-sm opacity-80">
                        @chaseinfrench
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/language-expert-chase-emery-davis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-secondary p-6 hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">
                        LinkedIn
                      </h3>
                      <p className="font-paragraph text-sm opacity-80">
                        Chase Emery Davis
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://podcasts.apple.com/us/podcast/learning-french-by-accident/id1684581201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-secondary p-6 hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Music className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">
                        Apple Podcasts
                      </h3>
                      <p className="font-paragraph text-sm opacity-80">
                        Learning French by Accident
                      </p>
                    </div>
                  </a>
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
