import ProjectContainer from "./components/projectcontainer";

// Sample projects - you can modify this array to add your actual projects
const projects = [
  {
    id: "pixelChanger",
    name: "Pixel Changer",
    description: "Modify any pixel art in a swift!",
    icon: "🧮"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Tomas Tools
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          A collection of useful tools and applications built with modern web technologies
        </p>
      </section>

      {/* Projects Section */}
      <ProjectContainer projects={projects} />
    </div>
  );
}