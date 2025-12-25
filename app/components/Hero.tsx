"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/images/profile.jpg", "/images/profile1.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Hero Background"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-blue-400">Mekash H.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            Full Stack Developer specializing in Angular, Next.js & .NET
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            {/* View Projects */}
            <a
              href="/projects"
              className="group relative inline-flex items-center gap-2 
               bg-blue-600 px-7 py-3 rounded-lg font-semibold text-white
               shadow-lg shadow-blue-600/30
               transition-all duration-300
               hover:bg-blue-700 hover:-translate-y-1 hover:shadow-blue-700/40
               focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* View CV */}
            <a
              href="/cv/Mekash_H_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2
               px-7 py-3 rounded-lg font-semibold
               border border-white/70 text-white
               backdrop-blur-sm
               transition-all duration-300
               hover:bg-white hover:text-black hover:-translate-y-1
               hover:shadow-lg
               focus:outline-none focus:ring-2 focus:ring-white"
            >
              My CV
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
