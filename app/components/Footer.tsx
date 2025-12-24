"use client";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 text-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <h3 className="text-2xl font-semibold text-white tracking-wide hover:text-blue-400 transition">
            Mekash H.
          </h3>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/mekashh"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mekash-h"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-sm border border-gray-600 px-5 py-2.5 rounded-full
                       hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mekash H. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
