import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import StartHerePage from '@/components/pages/StartHerePage';
import LeconDetailPage from '@/components/pages/LeconDetailPage';
import PronunciationPage from '@/components/pages/PronunciationPage';
import SlangPage from '@/components/pages/SlangPage';
import GrammarPage from '@/components/pages/GrammarPage';
import CulturePage from '@/components/pages/CulturePage';
import PodcastsPage from '@/components/pages/PodcastsPage';
import PodcastEpisodePage from '@/components/pages/PodcastEpisodePage';
import SongsPage from '@/components/pages/SongsPage';
import FrenchSongsLab11Page from '@/components/pages/FrenchSongsLab11Page';
import AProposPage from '@/components/pages/AProposPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import PolitiqueConfidentialitePage from '@/components/pages/PolitiqueConfidentialitePage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import TopicsPage from '@/components/pages/TopicsPage';
import TopicsSongsPage from '@/components/pages/TopicsSongsPage';
import ClassesPage from '@/components/pages/ClassesPage';
import GroupClassesPage from '@/components/pages/GroupClassesPage';
import PrivateLessonsPage from '@/components/pages/PrivateLessonsPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "start",
        element: <StartHerePage />,
        routeMetadata: {
          pageIdentifier: 'start',
        },
      },
      {
        path: "topics",
        element: <TopicsPage />,
        routeMetadata: {
          pageIdentifier: 'topics',
        },
      },
      {
        path: "topics/songs",
        element: <TopicsSongsPage />,
        routeMetadata: {
          pageIdentifier: 'topics-songs',
        },
      },
      {
        path: "classes/group",
        element: <GroupClassesPage />,
        routeMetadata: {
          pageIdentifier: 'classes-group',
        },
      },
      {
        path: "classes/private",
        element: <PrivateLessonsPage />,
        routeMetadata: {
          pageIdentifier: 'classes-private',
        },
      },
      {
        path: "classes",
        element: <ClassesPage />,
        routeMetadata: {
          pageIdentifier: 'classes',
        },
      },
      {
        path: "pronunciation",
        element: <PronunciationPage />,
        routeMetadata: {
          pageIdentifier: 'pronunciation',
        },
      },
      {
        path: "slang",
        element: <SlangPage />,
        routeMetadata: {
          pageIdentifier: 'slang',
        },
      },
      {
        path: "grammar",
        element: <GrammarPage />,
        routeMetadata: {
          pageIdentifier: 'grammar',
        },
      },
      {
        path: "culture",
        element: <CulturePage />,
        routeMetadata: {
          pageIdentifier: 'culture',
        },
      },
      {
        path: "podcast",
        element: <PodcastsPage />,
        routeMetadata: {
          pageIdentifier: 'podcast',
        },
      },
      {
        path: "podcast/:slug",
        element: <PodcastEpisodePage />,
        routeMetadata: {
          pageIdentifier: 'podcast-episode',
        },
      },
      {
        path: "songs",
        element: <SongsPage />,
        routeMetadata: {
          pageIdentifier: 'songs',
        },
      },
      {
        path: "songs/french-songs-lab-11",
        element: <FrenchSongsLab11Page />,
        routeMetadata: {
          pageIdentifier: 'french-songs-lab-11',
        },
      },
      {
        path: "lecons/:slug",
        element: <LeconDetailPage />,
        routeMetadata: {
          pageIdentifier: 'lecon-detail',
        },
      },
      {
        path: "a-propos",
        element: <AProposPage />,
        routeMetadata: {
          pageIdentifier: 'a-propos',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "politique-confidentialite",
        element: <PolitiqueConfidentialitePage />,
        routeMetadata: {
          pageIdentifier: 'politique-confidentialite',
        },
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
        routeMetadata: {
          pageIdentifier: 'privacy-policy',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
