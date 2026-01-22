import { Head } from '@/components/Head';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Users, Calendar } from 'lucide-react';

export default function GroupClassesPage() {
  const classes = [
    {
      title: 'Foundations',
      level: 'Beginner',
      schedule: 'Tuesdays 7pm EST',
      duration: '60 minutes',
      description: 'Start your French journey with the essentials. Learn pronunciation, basic grammar, and everyday phrases.',
      features: ['Live Q&A', 'Replay available', 'Chat support'],
    },
    {
      title: 'Intermediate Conversation',
      level: 'Intermediate',
      schedule: 'Thursdays 7pm EST',
      duration: '60 minutes',
      description: 'Build confidence speaking French. Practice real conversations and improve your listening skills.',
      features: ['Live Q&A', 'Replay available', 'Chat support'],
    },
    {
      title: 'Advanced Accent Training',
      level: 'Advanced',
      schedule: 'Saturdays 6pm EST',
      duration: '60 minutes',
      description: 'Perfect your French accent and master the nuances of native pronunciation.',
      features: ['Live Q&A', 'Replay available', 'Chat support'],
    },
  ];

  return (
    <>
      <Head
        title="Group Classes | Chase in French"
        description="Join weekly live group French classes on Instagram. Learn pronunciation, conversation, and real spoken French."
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <Link to="/classes" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
              Back to Classes
            </Link>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Group Classes
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
              Join live 60-minute sessions hosted on Instagram. Get feedback, ask questions in real-time, and access replays anytime.
            </p>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div key={index} className="border border-secondary bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <p className="text-sm text-medium-blue font-semibold mb-2">{classItem.level}</p>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    {classItem.title}
                  </h2>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-paragraph text-sm">{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-paragraph text-sm">{classItem.duration}</span>
                  </div>
                </div>

                <p className="font-paragraph text-foreground/80 mb-6">
                  {classItem.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-semibold text-foreground/60 mb-3">INCLUDES</p>
                  <ul className="space-y-2">
                    {classItem.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-paragraph text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://www.instagram.com/chaseinfrench/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Join on Instagram
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="bg-secondary rounded-lg p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                  1
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Join Live
                </h3>
                <p className="font-paragraph text-foreground/80">
                  Follow Chase on Instagram and join the live session at the scheduled time.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                  2
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Participate
                </h3>
                <p className="font-paragraph text-foreground/80">
                  Ask questions in the chat, get real-time feedback, and learn with other students.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold mb-4">
                  3
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Review Anytime
                </h3>
                <p className="font-paragraph text-foreground/80">
                  Access the replay to review the lesson and catch anything you missed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to join?
            </h2>
            <p className="font-paragraph text-foreground/80 mb-8 max-w-2xl mx-auto">
              Follow Chase on Instagram to get notified about upcoming classes and special announcements.
            </p>
            <a
              href="https://www.instagram.com/chaseinfrench/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Follow on Instagram
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
