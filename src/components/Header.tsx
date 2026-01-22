import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const topics = [
    { name: 'Pronunciation', path: '/pronunciation' },
    { name: 'Slang & Expressions', path: '/slang' },
    { name: 'Grammar & Sound', path: '/grammar' },
    { name: 'French Culture', path: '/culture' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Songs & Videos', path: '/songs' },
  ];

  const isTopicActive = topics.some(topic => isActive(topic.path));

  return (
    <header className="bg-background border-b border-secondary">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <Link to="/" className="font-heading text-2xl lg:text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
            Chase in French
          </Link>
          
          <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-primary hover:opacity-70'
              }`}
            >
              Home
            </Link>

            {/* Topics Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsTopicsOpen(!isTopicsOpen)}
                className={`font-paragraph text-base lg:text-lg transition-colors flex items-center gap-2 ${
                  isTopicActive ? 'text-primary font-semibold' : 'text-primary hover:opacity-70'
                }`}
              >
                Topics
                <ChevronDown className={`w-4 h-4 transition-transform ${isTopicsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 bg-background border border-secondary shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {topics.map((topic) => (
                  <Link
                    key={topic.path}
                    to={topic.path}
                    className={`block px-4 py-3 font-paragraph text-base transition-colors border-b border-secondary/50 last:border-b-0 ${
                      isActive(topic.path)
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'text-primary hover:bg-secondary'
                    }`}
                  >
                    {topic.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/classes" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/classes') ? 'text-primary font-semibold' : 'text-primary hover:opacity-70'
              }`}
            >
              Classes
            </Link>
            <Link 
              to="/podcasts" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/podcasts') ? 'text-primary font-semibold' : 'text-primary hover:opacity-70'
              }`}
            >
              Podcast
            </Link>
            <Link 
              to="/about" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/about') ? 'text-primary font-semibold' : 'text-primary hover:opacity-70'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-primary hover:opacity-70'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
