import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">French Pronunciation</h3>
            <p className="font-paragraph text-sm opacity-90">
              Your reference for mastering French pronunciation and exploring the richness of the language.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/hubs" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Thematic Hubs
              </Link>
              <Link to="/lecons" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                All Lessons
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Information</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/a-propos" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/contact" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
              <Link to="/politique-confidentialite" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Topics</h4>
            <p className="font-paragraph text-sm opacity-90">
              Pronunciation, Modern Spoken French, Slang, Grammar, Culture, Podcasts, Songs
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="font-paragraph text-sm text-center opacity-80">
            © {new Date().getFullYear()} French Pronunciation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
