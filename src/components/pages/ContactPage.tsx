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
                Contactez-nous
              </p>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Nous Sommes à Votre Écoute
              </h1>
              <p className="font-paragraph text-lg lg:text-xl opacity-90">
                Une question, une suggestion, ou simplement envie d'échanger ? N'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
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
                  Envoyez-nous un Message
                </h2>

                {submitted && (
                  <div className="bg-primary/10 border border-primary p-6 mb-8 rounded">
                    <p className="font-paragraph text-base text-primary font-semibold">
                      Merci pour votre message ! Nous vous répondrons très prochainement.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-paragraph font-semibold text-foreground flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-paragraph font-semibold text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Adresse email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-paragraph font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Sujet
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                      placeholder="Objet de votre message"
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
                      placeholder="Écrivez votre message ici..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 font-paragraph font-semibold py-6 text-base"
                  >
                    Envoyer le Message
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
                    Pourquoi Nous Contacter ?
                  </h3>
                  <div className="space-y-4 font-paragraph text-base lg:text-lg text-foreground">
                    <p>
                      Nous sommes toujours ravis d'échanger avec notre communauté d'apprenants. Voici quelques raisons pour lesquelles vous pourriez vouloir nous contacter :
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Questions sur les Leçons',
                      description: 'Besoin de clarifications sur un point de prononciation ou de grammaire ? Nous sommes là pour vous aider.'
                    },
                    {
                      title: 'Suggestions de Contenu',
                      description: 'Vous aimeriez voir un sujet spécifique abordé ? Partagez vos idées avec nous.'
                    },
                    {
                      title: 'Retours et Commentaires',
                      description: 'Votre avis compte ! Dites-nous ce qui fonctionne bien et ce qui pourrait être amélioré.'
                    },
                    {
                      title: 'Collaborations',
                      description: 'Intéressé par une collaboration ou un partenariat ? Contactez-nous pour en discuter.'
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
                    Temps de Réponse
                  </h4>
                  <p className="font-paragraph text-base opacity-90">
                    Nous nous efforçons de répondre à tous les messages dans un délai de 48 heures. Pour les questions urgentes, n'hésitez pas à le mentionner dans votre message.
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
                Questions Fréquentes
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: 'Les ressources sont-elles gratuites ?',
                    answer: 'Oui, toutes nos leçons et ressources sont accessibles gratuitement. Notre mission est de rendre l\'apprentissage de la prononciation française accessible à tous.'
                  },
                  {
                    question: 'Puis-je suggérer de nouveaux sujets ?',
                    answer: 'Absolument ! Nous encourageons vivement les suggestions de notre communauté. Utilisez le formulaire de contact pour nous faire part de vos idées.'
                  },
                  {
                    question: 'À quelle fréquence ajoutez-vous du nouveau contenu ?',
                    answer: 'Nous enrichissons régulièrement notre bibliothèque avec de nouvelles leçons et ressources. Revenez souvent pour découvrir les dernières additions.'
                  },
                  {
                    question: 'Proposez-vous des cours en direct ?',
                    answer: 'Pour le moment, nous nous concentrons sur des ressources textuelles structurées. Contactez-nous si vous êtes intéressé par d\'autres formats d\'apprentissage.'
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
