import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface ProjectContainerProps {
  projects: Project[];
}

export default function ProjectContainer({ projects }: ProjectContainerProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={`/${project.id}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4 text-center">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {project.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    Launch App →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}