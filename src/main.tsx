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
import NewTemplate from './pages/News/NewTemplate.tsx';
import NewsPageTrash from './pages/News/TrashEletronic.tsx';
import AtrobotsPartneshp from './pages/News/AtrobotsPartneshp.tsx';
import BTGproject from './pages/Projects/BTGproject.tsx';
import ContactPage from './pages/Contact/Contact.tsx';

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
      {
        path: "/news/template",
        element: <NewTemplate />
      },
      {
        path: "/news/eletronic-trash",
        element: <NewsPageTrash />
      },
      {
        path: "/news/atrobots-partnership",
        element: <AtrobotsPartneshp />
      },
      {
        path: "/project/esg-btg-chatbot",
        element: <BTGproject />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)