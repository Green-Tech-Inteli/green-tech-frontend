import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './index.css'

import NewsSection from './pages/News/NewsSection.tsx';
import PartnershipsPage from './pages/Partnerships/PartnershipsPage.tsx';
import ProjectsPage from './pages/Projects/ProjectsPage.tsx';
import ProjectDetailsPage from './pages/Projects/ProjectDetailsPage.tsx';
import MembersPage from './pages/Members/MembersPage.tsx';
import AboutPage from './pages/About/AboutPage.tsx';
import Error from './pages/Error/Error.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <NewsSection />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "/project/:id",
        element: <ProjectDetailsPage />
      },
      {
        path: "/members",
        element: <MembersPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/partnerships",
        element: <PartnershipsPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)