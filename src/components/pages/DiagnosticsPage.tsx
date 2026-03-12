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
        console.log('All lessons:', result.items);
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
      
      <div className="space-y-8">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="border border-primary/20 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4">{lesson.lessonTitle}</h2>
            <div className="space-y-2 text-sm font-mono bg-primary/5 p-4 rounded overflow-auto">
              <div><strong>ID:</strong> {lesson._id}</div>
              <div><strong>Hub:</strong> {lesson.hub}</div>
              <div><strong>Short Description:</strong> {lesson.shortDescription}</div>
              <div><strong>Related Lessons (RAW):</strong></div>
              <pre className="bg-white p-2 rounded border">{JSON.stringify(lesson.relatedLessons, null, 2)}</pre>
              
              {lesson.relatedLessons && (
                <>
                  <div><strong>Related Lessons (Parsed):</strong></div>
                  <pre className="bg-white p-2 rounded border">
                    {JSON.stringify(
                      lesson.relatedLessons
                        .split(',')
                        .map(id => id.trim())
                        .filter(id => id.length > 0),
                      null,
                      2
                    )}
                  </pre>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
