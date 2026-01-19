import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Chase in French</h3>
            <p className="font-paragraph text-sm opacity-90">
              Real pronunciation, modern spoken French, and clear bilingual explanations — built for the way French is spoken in real life.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Topics</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/pronunciation" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Pronunciation
              </Link>
              <Link to="/slang" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Slang & Real Speech
              </Link>
              <Link to="/grammar" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Grammar
              </Link>
              <Link to="/culture" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Culture
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Learn</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/podcast" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Podcast
              </Link>
              <Link to="/songs" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Songs & Videos
              </Link>
              <Link to="/classes/group" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Group Classes
              </Link>
              <Link to="/classes/private" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Private Lessons
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Follow</h4>
            <nav className="flex flex-col gap-3">
              <a href="https://www.instagram.com/chaseinfrench" target="_blank" rel="noopener noreferrer" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@chaseinfrench" target="_blank" rel="noopener noreferrer" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                TikTok
              </a>
              <a href="https://www.youtube.com/@chaseinfrench" target="_blank" rel="noopener noreferrer" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                YouTube
              </a>
              <a href="https://www.linkedin.com/in/chase-emery-davis" target="_blank" rel="noopener noreferrer" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-paragraph text-sm opacity-80">
              © 2026 Chase in French. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="font-paragraph text-sm opacity-80 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/contact" className="font-paragraph text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </Link>
              <Link to="/politique-confidentialite" className="font-paragraph text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
