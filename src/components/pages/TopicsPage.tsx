import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TopicCard {
  title: string;
  description: string;
  link: string;
}

const topics: TopicCard[] = [
  {
    title: 'Pronunciation',
    description: 'The sound system: vowels, consonants, rhythm, liaison, and drills.',
    link: '/pronunciation',
  },
  {
    title: 'Slang & expressions',
    description: 'Living French: idioms, informal phrasing, and everyday shortcuts.',
    link: '/slang',
  },
  {
    title: 'Grammar & sound',
    description: 'Grammar that changes how French is spoken (not just written).',
    link: '/grammar',
  },
  {
    title: 'French culture',
    description: 'Cultural context that shapes what people say and how they say it.',
    link: '/culture',
  },
  {
    title: 'Podcast',
    description: 'Learning French by Accident: listening training and real speech breakdowns.',
    link: '/podcasts',
  },
  {
    title: 'Songs & videos',
    description: 'Train pronunciation through carefully chosen French tracks.',
    link: '/songs',
  },
];

export default function TopicsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="w-full max-w-[100rem] mx-auto px-4 py-16 md:py-24">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Topics
            </h1>
            <p className="text-lg font-paragraph text-foreground max-w-2xl">
              Pick a topic to browse lessons. New here? Start with the guided paths on the Start Here page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/start">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 h-auto">
                  Start Here
                </Button>
              </Link>
              <Link to="/pronunciation">
                <Button variant="outline" className="border-primary text-primary hover:bg-secondary px-6 py-3 h-auto">
                  Explore Pronunciation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="w-full max-w-[100rem] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link key={topic.link} to={topic.link}>
                <Card className="h-full p-6 hover:shadow-lg transition-shadow cursor-pointer border border-secondary bg-white">
                  <div className="space-y-3">
                    <h2 className="text-xl font-heading font-semibold text-foreground">
                      {topic.title}
                    </h2>
                    <p className="text-base font-paragraph text-foreground/80">
                      {topic.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
