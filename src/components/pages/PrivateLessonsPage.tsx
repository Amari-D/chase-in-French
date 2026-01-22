import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Linkedin } from 'lucide-react';

export default function PrivateLessonsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Private lessons
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 leading-relaxed mb-8">
              1:1 lessons designed around your exact pronunciation and listening profile. We identify the few habits that create the biggest "foreign sound" — then rebuild them with targeted drills and real speech practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:chaseinfrench@gmail.com">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Book a 30-minute intro session
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:chaseinfrench@gmail.com" className="inline-block">
                <Button variant="outline" className="w-full sm:w-auto">
                  Email enquiries
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* How the intro session works */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            How the intro session works (30 minutes)
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    First 20 minutes: quick diagnosis
                  </h3>
                  <p className="font-paragraph text-foreground/80">
                    Pronunciation, listening, sentence building, and your goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    Last 10 minutes: clear action plan
                  </h3>
                  <p className="font-paragraph text-foreground/80">
                    What to focus on next and your fastest route forward.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-6">
                You leave knowing:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-paragraph text-foreground/80">What you do well</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-paragraph text-foreground/80">What's holding you back</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-paragraph text-foreground/80">The fastest route forward</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What we work on */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            What we work on
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-secondary rounded-lg p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Pronunciation foundations (when needed)
              </h3>
              <p className="font-paragraph text-foreground/80">
                Vowels, consonants, liaison, rhythm.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Accent repair
              </h3>
              <p className="font-paragraph text-foreground/80">
                The specific 3–5 errors that "give you away".
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Real spoken French
              </h3>
              <p className="font-paragraph text-foreground/80">
                Reductions, contractions, and sentence flow.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Listening training
              </h3>
              <p className="font-paragraph text-foreground/80">
                Hearing what native speakers actually say (not what you expect).
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="bg-secondary rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              Ready to get started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a href="mailto:chaseinfrench@gmail.com">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book intro
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/start">
                <Button variant="outline">
                  Start Here
                </Button>
              </Link>
              <Link to="/classes/group">
                <Button variant="outline">
                  Prefer weekly group?
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Credibility Links */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-12">
          <div className="flex justify-center items-center gap-4">
            <span className="font-paragraph text-sm text-foreground/60">Connect with Chase:</span>
            <a 
              href="https://www.linkedin.com/in/language-expert-chase-emery-davis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-paragraph text-sm">LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
