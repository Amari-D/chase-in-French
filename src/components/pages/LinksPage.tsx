import { useState, useEffect } from 'react';
import { BaseCrudService } from '@/integrations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';
import { ExternalLink } from 'lucide-react';

interface Link {
  _id: string;
  linkTitle?: string;
  linkUrl?: string;
  description?: string;
  displayOrder?: number;
  linkIcon?: string;
  backgroundColor?: string;
}

export default function LinksPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<Link>('links');
    const sortedLinks = (result.items || []).sort((a, b) => 
      (a.displayOrder || 0) - (b.displayOrder || 0)
    );
    setLinks(sortedLinks);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-[100rem] mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
              Chase in French
            </h1>
            <p className="font-paragraph text-lg text-medium-blue mb-2">
              Master French with confidence
            </p>
            <p className="font-paragraph text-base text-foreground/70">
              Connect with me through these links
            </p>
          </div>

          {/* Links Grid */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner />
              </div>
            ) : links.length > 0 ? (
              links.map((link) => (
                <a
                  key={link._id}
                  href={link.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className="relative p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2 border-transparent"
                    style={{
                      backgroundColor: link.backgroundColor || '#E8EFF7',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        {link.linkIcon && (
                          <div className="flex-shrink-0">
                            <Image
                              src={link.linkIcon}
                              alt={link.linkTitle || 'Link icon'}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.linkTitle}
                          </h3>
                          {link.description && (
                            <p className="font-paragraph text-sm text-foreground/70 mt-1">
                              {link.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors flex-shrink-0 ml-4" />
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="font-paragraph text-foreground/70">
                  No links available yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
