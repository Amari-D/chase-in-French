import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, User } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                Contact Us
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                We're Here to Listen
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Have a question, suggestion, or just want to chat? Don't hesitate to reach out. We'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-8">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="bg-primary/10 border border-primary p-6 mb-8 rounded">
                    <p className="font-paragraph text-base text-primary font-semibold">
                      Thank you for your message! We'll get back to you very soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-paragraph font-semibold text-foreground flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-paragraph font-semibold text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-paragraph font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-paragraph font-semibold text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="font-paragraph resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 font-paragraph font-semibold py-6 text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">
                    Why Contact Us?
                  </h3>
                  <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                    <p>
                      We're always happy to connect with our community of learners. Here are some reasons you might want to reach out:
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Questions About Lessons',
                      description: 'Need clarification on a pronunciation or grammar point? We\'re here to help.'
                    },
                    {
                      title: 'Content Suggestions',
                      description: 'Would you like to see a specific topic covered? Share your ideas with us.'
                    },
                    {
                      title: 'Feedback and Comments',
                      description: 'Your opinion matters! Tell us what\'s working well and what could be improved.'
                    },
                    {
                      title: 'Collaborations',
                      description: 'Interested in a collaboration or partnership? Get in touch to discuss.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-secondary p-6">
                      <h4 className="font-heading text-lg font-bold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="font-paragraph text-base text-secondary-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary text-primary-foreground p-8">
                  <h4 className="font-heading text-xl font-bold mb-3">
                    Response Time
                  </h4>
                  <p className="font-paragraph text-base opacity-90">
                    We aim to respond to all messages within 48 hours. If your question is urgent, please mention it in your message.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: 'Are the resources free?',
                    answer: 'Yes, all our lessons and resources are free to access. Our mission is to make learning French pronunciation accessible to everyone.'
                  },
                  {
                    question: 'Can I suggest new topics?',
                    answer: 'Absolutely! We strongly encourage suggestions from our community. Use the contact form to share your ideas with us.'
                  },
                  {
                    question: 'How often do you add new content?',
                    answer: 'We regularly enrich our library with new lessons and resources. Check back often to discover the latest additions.'
                  },
                  {
                    question: 'Do you offer live classes?',
                    answer: 'For now, we focus on structured textual resources. Contact us if you\'re interested in other learning formats.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-background p-8">
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-paragraph text-base text-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
