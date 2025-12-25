export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-blue-600 text-white text-center px-4 sm:px-6 lg:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        Let’s Build Something Together
      </h2>

      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
        Looking for a full-stack developer? Let’s talk.
      </p>

      <a
        href="/contact"
        className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-gray-100 hover:text-blue-700"
      >
        Contact Me
      </a>
    </section>
  );
}
