import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Projects We Have Done
        </h2>

        {/* Show only first 3 projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
