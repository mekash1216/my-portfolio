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

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded font-medium"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
