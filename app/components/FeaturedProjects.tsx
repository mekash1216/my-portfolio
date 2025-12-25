import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14">
          Projects We Have Done
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base md:text-lg transition duration-300 hover:bg-blue-700"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
