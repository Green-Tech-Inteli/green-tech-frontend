// ProjectDetailsPage.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ProjectDetails {
  id: string;
  title: string;
  longDescription: string;
  imageUrl: string;
}

const ProjectDetailsPage: React.FC = () => {
  const location = useLocation();
  const project = location.state as ProjectDetails;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-64 object-cover object-center" src={project.imageUrl} alt={project.title} />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{project.longDescription}</p>
          <div className="flex justify-center">
            <Link to='/projects' className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
              Voltar aos Projetos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;