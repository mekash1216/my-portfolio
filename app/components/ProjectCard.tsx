import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{project.tech}</p>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link
          href={project.link}
          className="inline-flex items-center text-blue-600 font-medium hover:underline"
        >
          View Details <FaExternalLinkAlt className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
