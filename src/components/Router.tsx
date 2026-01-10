import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import HubsPage from '@/components/pages/HubsPage';
import HubDetailPage from '@/components/pages/HubDetailPage';
import LeconsPage from '@/components/pages/LeconsPage';
import LeconDetailPage from '@/components/pages/LeconDetailPage';
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
        path: "hubs",
        element: <HubsPage />,
        routeMetadata: {
          pageIdentifier: 'hubs',
        },
      },
      {
        path: "hubs/:slug",
        element: <HubDetailPage />,
        routeMetadata: {
          pageIdentifier: 'hub-detail',
        },
      },
      {
        path: "lecons",
        element: <LeconsPage />,
        routeMetadata: {
          pageIdentifier: 'lecons',
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
