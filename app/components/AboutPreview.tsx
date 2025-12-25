import { FaUserAlt } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14 px-4 sm:px-6 lg:px-0">
        <FaUserAlt className="text-blue-600 text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
          About Me
        </h2>
        <div className="h-1 w-12 sm:w-16 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="bg-white shadow-lg rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition duration-300">
          <div className="py-12 md:py-16 text-center max-w-3xl md:max-w-5xl mx-auto">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              I’m a <span className="font-semibold">Full Stack Developer</span>{" "}
              with experience in <span className="text-blue-600">Angular</span>,{" "}
              <span className="text-blue-600">Next.js</span>, and{" "}
              <span className="text-blue-600">.NET</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
