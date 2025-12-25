import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Software Developer I",
    company: "Ethiopian Electric Power",
    duration: "2025 – Present",
    description:
      "Building enterprise applications using Angular, .NET, and SQL.",
  },
  {
    title: "Computer Programmer I",
    company: "Ethiopian Electric Power",
    duration: "2023 – 2024",
    description:
      "Developed responsive web apps using Angular and Tailwind CSS.",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Experience
          </h2>
          <div className="h-1 w-12 sm:w-16 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative w-full md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-auto md:pr-6" : "md:mr-auto md:pl-6"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 top-4 md:top-6 transform -translate-x-1/2 bg-blue-600 w-4 h-4 rounded-full border-2 border-white"></div>

                {/* Card */}
                <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
                  <div className="flex items-center mb-2">
                    <FaBriefcase className="text-blue-600 text-xl sm:text-2xl mr-2 sm:mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base mb-2">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
