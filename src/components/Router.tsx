import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import StartPage from '@/components/pages/StartPage';
import LeconDetailPage from '@/components/pages/LeconDetailPage';
import PronunciationPage from '@/components/pages/PronunciationPage';
import ModernFrenchPage from '@/components/pages/ModernFrenchPage';
import SlangPage from '@/components/pages/SlangPage';
import GrammarPage from '@/components/pages/GrammarPage';
import CulturePage from '@/components/pages/CulturePage';
import PodcastsPage from '@/components/pages/PodcastsPage';
import SongsPage from '@/components/pages/SongsPage';
import ClassesPage from '@/components/pages/ClassesPage';
import GroupClassesPage from '@/components/pages/GroupClassesPage';
import PrivateLessonsPage from '@/components/pages/PrivateLessonsPage';
import AProposPage from '@/components/pages/AProposPage';
import ContactPage from '@/components/pages/ContactPage';
import PolitiqueConfidentialitePage from '@/components/pages/PolitiqueConfidentialitePage';

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
        element: <StartPage />,
        routeMetadata: {
          pageIdentifier: 'start',
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
        path: "modern-french",
        element: <ModernFrenchPage />,
        routeMetadata: {
          pageIdentifier: 'modern-french',
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
        path: "podcasts",
        element: <Navigate to="/podcast" replace />,
      },
      {
        path: "songs",
        element: <SongsPage />,
        routeMetadata: {
          pageIdentifier: 'songs',
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
        path: "lecons/:slug",
        element: <LeconDetailPage />,
        routeMetadata: {
          pageIdentifier: 'lecon-detail',
        },
      },
      {
        path: "about",
        element: <AProposPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "a-propos",
        element: <Navigate to="/about" replace />,
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
