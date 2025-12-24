import { FaUserAlt } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-14 px-6">
        <FaUserAlt className="text-blue-600 text-4xl mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="bg-white shadow-lg rounded-2xl hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] transition duration-300">
          <div className="py-16 text-center max-w-5xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I’m a <span className="font-semibold">Full Stack Developer</span>{" "}
              with experience in <span className="text-blue-600">Angular</span>,
              <span className="text-blue-600"> Next.js</span>, and
              <span className="text-blue-600"> .NET</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
