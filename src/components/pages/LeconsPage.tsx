import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Leons } from '@/entities';

export default function LeconsPage() {
  const [lessons, setLessons] = useState<Leons[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const result = await BaseCrudService.getAll<Leons>('lecons', {}, { limit: 10, skip });
        setLessons(prev => skip === 0 ? result.items : [...prev, ...result.items]);
        setHasNext(result.hasNext);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessons();
  }, [skip]);

  const handleLoadMore = () => {
    setSkip(prev => prev + 10);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-paragraph text-foreground">
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[120rem] mx-auto bg-primary text-secondary py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold mb-6">All Lessons</h1>
            <p className="font-paragraph text-lg text-secondary/80">
              Browse our complete library of lessons covering pronunciation, grammar, culture, and more. Each lesson is designed to help you master authentic French pronunciation and spoken language.
            </p>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="w-full max-w-[120rem] mx-auto py-24 lg:py-32 px-6 lg:px-12">
          <div className="min-h-[400px]">
            {isLoading && skip === 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="animate-pulse border-t border-primary/10 pt-6">
                    <div className="h-4 bg-primary/10 rounded w-20 mb-4"></div>
                    <div className="h-8 bg-primary/10 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-primary/10 rounded w-full mb-2"></div>
                    <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                  </div>
                ))}
              </div>
            ) : lessons.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {lessons.slice(0, 10).map((lesson, index) => (
                    <Link
                      key={lesson._id}
                      to={`/lecons/${lesson._id}`}
                      className="group cursor-pointer border-t border-primary/10 pt-6 hover:border-primary transition-colors duration-300 h-full flex flex-col"
                    >
                      <span className="font-paragraph text-xs font-bold tracking-widest text-primary/50 mb-3 block">
                        LESSON {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-heading text-2xl font-medium mb-4 group-hover:underline decoration-1 underline-offset-4 text-primary">
                        {lesson.lessonTitle || "Untitled Lesson"}
                      </h3>
                      <p className="font-paragraph text-primary/60 text-sm leading-relaxed mb-6 flex-grow">
                        {lesson.shortDescription || "An in-depth analysis of essential phonetic mechanisms for natural speech."}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary/40 group-hover:text-primary transition-colors">
                        <Play className="w-3 h-3 fill-current" />
                        <span>Start</span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More Button */}
                {hasNext && (
                  <div className="flex justify-center mt-16">
                    <button
                      onClick={handleLoadMore}
                      className="px-8 py-4 bg-primary text-secondary font-heading font-bold rounded-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                    >
                      Load More Lessons
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">No lessons found</h3>
                <p className="font-paragraph text-primary/60">Check back soon for new content.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
