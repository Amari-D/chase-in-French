import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function SitemapPage() {
  const sitemapStructure = [
    {
      category: 'Main Pages',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Start Here', path: '/start' },
        { label: 'About', path: '/about' },
        { label: 'À Propos', path: '/a-propos' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      category: 'Learning Topics',
      links: [
        { label: 'Topics Index', path: '/topics' },
        { label: 'Topics - Songs', path: '/topics/songs' },
        { label: 'Pronunciation', path: '/pronunciation' },
        { label: 'Slang & Expressions', path: '/slang' },
        { label: 'Grammar & Sound', path: '/grammar' },
        { label: 'French Culture', path: '/culture' },
      ],
    },
    {
      category: 'Content',
      links: [
        { label: 'Leçons', path: '/lecons' },
        { label: 'Podcasts', path: '/podcast' },
        { label: 'Songs & Videos', path: '/songs' },
        { label: 'French Songs Lab 11', path: '/songs/french-songs-lab-11' },
      ],
    },
    {
      category: 'Classes',
      links: [
        { label: 'Classes Overview', path: '/classes' },
        { label: 'Group Classes', path: '/classes/group' },
        { label: 'Private Lessons', path: '/classes/private' },
      ],
    },
    {
      category: 'Tools & Resources',
      links: [
        { label: 'Diagnostics', path: '/diagnostics' },
        { label: 'Links', path: '/links' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Politique de Confidentialité', path: '/politique-confidentialite' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="mb-12">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="font-paragraph text-lg text-foreground/70">
              Navigate through all pages and content on Chase in French
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapStructure.map((section) => (
              <div key={section.category} className="bg-secondary rounded-lg p-6">
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  {section.category}
                </h2>
                <nav className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="font-paragraph text-sm text-foreground/80 hover:text-primary hover:font-semibold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SitemapPage;
