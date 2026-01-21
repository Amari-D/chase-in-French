import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="font-paragraph text-base md:text-lg text-foreground/80 space-y-6">
              <p>
                Chase in French respects your privacy. This site may collect limited information you choose to provide
                (for example, via contact forms) and standard analytics data to understand site usage. For full details,
                please refer to the complete privacy policy text provided on this page.
              </p>
              
              <div className="bg-secondary p-6 rounded-lg mt-8">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Contact Information
                </h2>
                <p className="text-foreground/80">
                  Email: <a href="mailto:chaseinfrench@gmail.com" className="text-primary hover:text-medium-blue underline transition-colors">
                    chaseinfrench@gmail.com
                  </a>
                </p>
              </div>

              <div className="mt-12 space-y-8">
                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-foreground/80">
                    We may collect information that you voluntarily provide to us through contact forms, newsletter subscriptions, 
                    or other interactive features on our site. This may include your name, email address, and any other information 
                    you choose to share with us.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Analytics and Cookies
                  </h2>
                  <p className="text-foreground/80">
                    We use standard analytics tools to understand how visitors use our site. This helps us improve our content 
                    and user experience. These tools may use cookies and similar technologies to collect information about your 
                    browsing behavior.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Mailing List
                  </h2>
                  <p className="text-foreground/80">
                    If you subscribe to our mailing list, we will use your email address to send you updates, newsletters, 
                    and educational content related to French language learning. You can unsubscribe at any time using the 
                    link provided in our emails.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-foreground/80">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-foreground/80 ml-4">
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you educational content and updates (if you've subscribed)</li>
                    <li>Improve our website and services</li>
                    <li>Analyze site usage and trends</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Data Security
                  </h2>
                  <p className="text-foreground/80">
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
                    However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Your Rights
                  </h2>
                  <p className="text-foreground/80">
                    You have the right to access, correct, or delete your personal information. If you would like to exercise 
                    these rights or have any questions about our privacy practices, please contact us at the email address provided above.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-foreground/80">
                    We may update this privacy policy from time to time. Any changes will be posted on this page with an updated 
                    revision date.
                  </p>
                </section>

                <div className="mt-12 pt-8 border-t border-foreground/10">
                  <p className="text-sm text-foreground/60">
                    Last updated: January 20, 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
