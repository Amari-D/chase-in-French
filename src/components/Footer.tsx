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
            <h4 className="font-heading text-lg font-semibold mb-4">Topics</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/pronunciation" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Pronunciation
              </Link>
              <Link to="/modern-french" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Modern French
              </Link>
              <Link to="/slang" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Slang
              </Link>
              <Link to="/grammar" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Grammar
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">More Topics</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/culture" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Culture
              </Link>
              <Link to="/podcasts" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Podcasts
              </Link>
              <Link to="/songs" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Songs
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
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-paragraph text-sm opacity-80">
                2026 © Chase in French. all right reserved.
              </p>
            <p className="font-paragraph text-sm opacity-80">
            Built by{' '}
            <a 
              href="https://amaridstudios.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-100 hover:opacity-70 transition-opacity underline"
            >
              Amari D Studios
            </a>
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
