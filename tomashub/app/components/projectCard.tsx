import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  visitLink?: string;
  codeLink?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  visitLink, 
  codeLink 
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-green-100 text-gray-700 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {visitLink && (
          <a 
            href={visitLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-600 font-medium"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}