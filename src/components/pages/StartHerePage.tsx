import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function StartHerePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[100rem] mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="font-heading text-6xl font-bold text-foreground mb-6">
            Start Here: Choose Your Track
          </h1>
          <p className="font-paragraph text-lg text-foreground mb-4 max-w-3xl">
            If you're here from TikTok, Instagram, or YouTube, this page tells you exactly where to begin. Pick the track that matches what you need right now — and you'll get a short, curated path through the site.
          </p>
        </section>

        {/* Track 1: Pronunciation Foundations */}
        <section className="mb-16 pb-12 border-b border-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                Track 1: Pronunciation Foundations
              </h2>
              <p className="font-paragraph text-base text-secondary-foreground mb-6">
                <span className="font-semibold">Best for:</span> You want French sounds to be clear and stable, and you're building from the ground up.
              </p>
              
              <p className="font-paragraph text-sm text-secondary-foreground mb-4 font-semibold">
                Start with the hub:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    French alphabet & core sounds
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    Nasal vowels (An/En/In/On/Un)
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    French R basics
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    Rhythm & stress
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="flex items-end">
              <Link to="/pronunciation" className="w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-heading text-base font-semibold">
                  Start Foundations
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Track 2: Fix My Accent */}
        <section className="mb-16 pb-12 border-b border-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                Track 2: Fix My Accent
              </h2>
              <p className="font-paragraph text-base text-secondary-foreground mb-6">
                <span className="font-semibold">Best for:</span> You can already speak French, but something still "sounds English" — and you want to correct it efficiently.
              </p>
              
              <p className="font-paragraph text-sm text-secondary-foreground mb-4 font-semibold">
                Start with the hub:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    U vs OU (stop confusing them)
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    Schwa (e muet) in real speech
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    Liaison vs enchaînement (when and why)
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    Sentence rhythm drills
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="flex items-end">
              <Link to="/pronunciation" className="w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-heading text-base font-semibold">
                  Fix My Accent
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Track 3: Real Spoken French */}
        <section className="mb-16 pb-12 border-b border-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                Track 3: Real Spoken French
              </h2>
              <p className="font-paragraph text-base text-secondary-foreground mb-6">
                <span className="font-semibold">Best for:</span> You understand "classroom French" but struggle to follow real speech. This track teaches what disappears, what links, and how French compresses in motion.
              </p>
              
              <p className="font-paragraph text-sm text-secondary-foreground mb-4 font-semibold">
                Start with the podcast:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/podcasts" className="text-primary hover:underline font-semibold">
                    Episodes on il / je / tu / nous / vous
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/slang" className="text-primary hover:underline font-semibold">
                    Everyday contractions & real-life phrasing
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/pronunciation" className="text-primary hover:underline font-semibold">
                    Forbidden elision & reductions
                  </Link>
                </li>
                <li className="font-paragraph text-base text-secondary-foreground">
                  <Link to="/slang" className="text-primary hover:underline font-semibold">
                    Listening strategy
                  </Link>
                </li>
              </ul>
              <p className="font-paragraph text-sm text-secondary-foreground mb-8">
                If you want a structured season (e.g., Passé composé): join the podcast release plan on <Link to="/podcasts" className="text-primary hover:underline font-semibold">/podcasts</Link>.
              </p>
            </div>
            
            <div className="flex items-end">
              <Link to="/podcasts" className="w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-heading text-base font-semibold">
                  Real Spoken French
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Classes CTA Section */}
        <section className="bg-secondary rounded-lg p-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Need structure and feedback?
          </h2>
          <p className="font-paragraph text-base text-secondary-foreground mb-8 max-w-2xl">
            If you want live correction, homework, and a clear plan, go straight to classes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/classes/group" className="flex-1">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-heading text-base font-semibold">
                Group Classes
              </Button>
            </Link>
            <Link to="/classes/private" className="flex-1">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-heading text-base font-semibold">
                Private Lessons
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
