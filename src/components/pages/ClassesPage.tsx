import { Head } from '@/components/Head';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ClassesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Do you teach beginners?',
      answer: 'Yes — start with Foundations.',
      link: '/start#foundations',
    },
    {
      question: 'Do you fix accents for advanced speakers?',
      answer: 'Yes — this is a core speciality.',
      link: '/start#accent',
    },
    {
      question: 'Do you teach "real spoken French"?',
      answer: 'Yes — through lessons + podcast listening training.',
      link: '/podcast',
    },
  ];

  return (
    <>
      <Head
        title="French Classes | Chase in French"
        description="Join weekly group classes or book private French lessons with Chase Emery Davis, pronunciation specialist and on‐set dialect coach."
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Classes
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
              If you want structure, feedback, and fast progress, start here. Choose between weekly live group classes or private 1:1 lessons focused on pronunciation and real spoken French.
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Group Classes Card */}
            <div className="border border-secondary bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Group classes
              </h2>
              <p className="text-sm text-medium-blue font-semibold mb-4">Weekly live</p>
              <p className="font-paragraph text-foreground/80 mb-8">
                Live 60‐minute sessions hosted on Instagram with chat Q&A and replays.
              </p>
              <Link to="/classes/group">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  See group classes
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Private Lessons Card */}
            <div className="border border-secondary bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Private lessons
              </h2>
              <p className="text-sm text-medium-blue font-semibold mb-4">1:1</p>
              <p className="font-paragraph text-foreground/80 mb-8">
                A personalised plan targeting the exact pronunciation and listening issues holding you back.
              </p>
              <Link to="/classes/private">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  See private lessons
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently asked questions
          </h2>
          <div className="max-w-2xl space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-secondary rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground text-left">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-secondary">
                    <p className="font-paragraph text-foreground/80 mb-3">
                      {item.answer}
                    </p>
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to improve your French?
            </h2>
            <p className="font-paragraph text-foreground/80 mb-8 max-w-2xl mx-auto">
              Follow Chase on Instagram for updates on group classes and special announcements.
            </p>
            <a
              href="https://www.instagram.com/chaseinfrench/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Follow on Instagram
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
