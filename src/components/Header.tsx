import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-background border-b border-secondary">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <Link to="/" className="font-heading text-2xl lg:text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
            Prononciation Française
          </Link>
          
          <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/hubs" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/hubs') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Hubs Thématiques
            </Link>
            <Link 
              to="/lecons" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/lecons') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Toutes les Leçons
            </Link>
            <Link 
              to="/a-propos" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/a-propos') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className={`font-paragraph text-base lg:text-lg transition-colors ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
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
