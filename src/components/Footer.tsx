import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Prononciation Française</h3>
            <p className="font-paragraph text-sm opacity-90">
              Votre référence pour maîtriser la prononciation française et explorer la richesse de la langue.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Accueil
              </Link>
              <Link to="/hubs" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Hubs Thématiques
              </Link>
              <Link to="/lecons" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Toutes les Leçons
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Informations</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/a-propos" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                À Propos
              </Link>
              <Link to="/contact" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
              <Link to="/politique-confidentialite" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Politique de Confidentialité
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Thématiques</h4>
            <p className="font-paragraph text-sm opacity-90">
              Prononciation, Français Parlé Moderne, Argot, Grammaire, Culture, Podcast, Chansons
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="font-paragraph text-sm text-center opacity-80">
            © {new Date().getFullYear()} Prononciation Française. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
