import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Leons } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DebugLessonsPage() {
  const [lessons, setLessons] = useState<Leons[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<Leons | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await BaseCrudService.getAll<Leons>('lecons', {}, { limit: 100 });
        setLessons(result.items);
        
        // Log all data to console
        console.log('=== ALL LESSONS DATA ===');
        result.items.forEach((lesson, idx) => {
          console.log(`\n[${idx}] ${lesson.lessonTitle}`);
          console.log('  ID:', lesson._id);
          console.log('  relatedLessons:', lesson.relatedLessons);
          console.log('  relatedLessons type:', typeof lesson.relatedLessons);
        });
        console.log('=== END ===');
      } catch (error) {
        console.error('Error fetching lessons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[120rem] mx-auto w-full px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Debug: All Lessons</h1>
        <p className="mb-8 text-primary/70">Check browser console (F12) for detailed output. Click on any lesson to see details.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lessons List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Lessons ({lessons.length})</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto border border-primary/20 p-4 rounded">
              {lessons.map((lesson) => (
                <button
                  key={lesson._id}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`w-full text-left p-3 rounded border transition-all ${
                    selectedLesson?._id === lesson._id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white border-primary/20 hover:border-primary'
                  }`}
                >
                  <div className="font-semibold">{lesson.lessonTitle}</div>
                  <div className="text-xs opacity-70">{lesson._id}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Selected Lesson Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            {selectedLesson ? (
              <div className="bg-primary/5 border border-primary/20 p-6 rounded space-y-4">
                <div>
                  <strong className="block text-sm text-primary/70 mb-1">Title:</strong>
                  <div className="font-mono text-sm bg-white p-2 rounded border">{selectedLesson.lessonTitle}</div>
                </div>
                
                <div>
                  <strong className="block text-sm text-primary/70 mb-1">ID:</strong>
                  <div className="font-mono text-sm bg-white p-2 rounded border break-all">{selectedLesson._id}</div>
                </div>
                
                <div>
                  <strong className="block text-sm text-primary/70 mb-1">relatedLessons (RAW):</strong>
                  <div className="font-mono text-sm bg-white p-2 rounded border break-all min-h-12">
                    {selectedLesson.relatedLessons ? `"${selectedLesson.relatedLessons}"` : 'null/empty'}
                  </div>
                </div>
                
                {selectedLesson.relatedLessons && selectedLesson.relatedLessons.trim() && (
                  <div>
                    <strong className="block text-sm text-primary/70 mb-1">Parsed IDs:</strong>
                    <div className="font-mono text-sm bg-white p-2 rounded border">
                      <pre>{JSON.stringify(
                        selectedLesson.relatedLessons
                          .split(',')
                          .map(id => id.trim())
                          .filter(id => id.length > 0),
                        null,
                        2
                      )}</pre>
                    </div>
                  </div>
                )}
                
                <div>
                  <strong className="block text-sm text-primary/70 mb-1">Hub:</strong>
                  <div className="font-mono text-sm bg-white p-2 rounded border">{selectedLesson.hub || 'N/A'}</div>
                </div>
                
                <div>
                  <strong className="block text-sm text-primary/70 mb-1">Short Description:</strong>
                  <div className="font-mono text-sm bg-white p-2 rounded border">{selectedLesson.shortDescription || 'N/A'}</div>
                </div>
              </div>
            ) : (
              <div className="bg-secondary p-6 rounded text-center text-primary/60">
                Select a lesson to view details
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
