import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Linkedin, Youtube, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Chase in French</h3>
            <p className="font-paragraph text-sm opacity-90 mb-6">
              Learn the French you actually hear. Pronunciation training, real spoken French patterns, and weekly podcast episodes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/chaseinfrench/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@chaseinfrench" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Music className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@chaseinfrench" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/language-expert-chase-emery-davis/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Learning Topics</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/topics" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity font-semibold">
                Topics Index
              </Link>
              <Link to="/pronunciation" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Pronunciation
              </Link>
              <Link to="/slang" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Slang & Expressions
              </Link>
              <Link to="/grammar" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Grammar & Sound
              </Link>
              <Link to="/culture" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                French Culture
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">More Content</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/podcasts" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Podcasts
              </Link>
              <Link to="/songs" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Songs & Videos
              </Link>
              <Link to="/classes" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Classes
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact & Info</h4>
            <nav className="flex flex-col gap-3">
              <a href="mailto:contact@chaseinfrench.com" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </a>
              <p className="font-paragraph text-sm opacity-90 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> London / Paris
              </p>
              <Link to="/about" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/contact" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
              <Link to="/privacy-policy" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-paragraph text-sm opacity-80">
              2026 © Chase in French. All rights reserved.
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
