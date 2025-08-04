import React from 'react';
import ProjectCard from './projectCard';

const projectsData = [
  {
    title: "Silsa's DPP",
    description: "Developed a Digital Product Passport platform for Silsa and its clients, enabling product traceability, environmental transparency, and supply chain monitoring in the textile industry.",
    technologies: ["Next.js", "TypeScript", "SQL"],
    visitLink: "https://dpp.silsa.pt/"
  }
];

export default function ProjectsGrid() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl md:text-5xl font-medium text-gray-900">My Projects</h2>
    
      <div className="grid gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            visitLink={project.visitLink}
          />
        ))}
      </div>
    </div>
  );
}