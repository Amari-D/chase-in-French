import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Leons } from '@/entities';

export default function DiagnosticsPage() {
  const [lessons, setLessons] = useState<Leons[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await BaseCrudService.getAll<Leons>('lecons', {}, { limit: 100 });
        setLessons(result.items);
        
        console.log('=== FULL DIAGNOSTICS ===');
        console.log('Total lessons:', result.items.length);
        
        result.items.forEach((lesson, idx) => {
          console.log(`\n--- Lesson ${idx + 1}: ${lesson.lessonTitle} ---`);
          console.log('ID:', lesson._id);
          console.log('relatedLessons field:', lesson.relatedLessons);
          console.log('relatedLessons type:', typeof lesson.relatedLessons);
          console.log('relatedLessons length:', lesson.relatedLessons?.length);
          
          if (lesson.relatedLessons) {
            const parsed = lesson.relatedLessons
              .split(',')
              .map(id => id.trim())
              .filter(id => id.length > 0);
            console.log('Parsed IDs:', parsed);
          }
        });
        
        console.log('=== END DIAGNOSTICS ===');
      } catch (error) {
        console.error('Error fetching lessons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Diagnostics - All Lessons Data</h1>
      <p className="mb-8 text-primary/70">Check browser console (F12) for detailed debug output</p>
      
      <div className="space-y-8">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="border border-primary/20 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4">{lesson.lessonTitle}</h2>
            <div className="space-y-4 text-sm font-mono bg-primary/5 p-4 rounded overflow-auto">
              <div><strong>ID:</strong> <code className="bg-white px-2 py-1 rounded">{lesson._id}</code></div>
              <div><strong>Hub:</strong> {lesson.hub}</div>
              <div><strong>Short Description:</strong> {lesson.shortDescription}</div>
              
              <div>
                <strong>Related Lessons (RAW):</strong>
                <pre className="bg-white p-3 rounded border mt-2 overflow-auto max-h-32">
                  {lesson.relatedLessons ? `"${lesson.relatedLessons}"` : 'null or empty'}
                </pre>
              </div>
              
              {lesson.relatedLessons && lesson.relatedLessons.trim() && (
                <div>
                  <strong>Related Lessons (Parsed as CSV):</strong>
                  <pre className="bg-white p-3 rounded border mt-2 overflow-auto max-h-32">
                    {JSON.stringify(
                      lesson.relatedLessons
                        .split(',')
                        .map(id => id.trim())
                        .filter(id => id.length > 0),
                      null,
                      2
                    )}
                  </pre>
                </div>
              )}
              
              {!lesson.relatedLessons || !lesson.relatedLessons.trim() && (
                <div className="bg-yellow-100 p-2 rounded text-yellow-800">
                  ⚠️ No related lessons data
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
