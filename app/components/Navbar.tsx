"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/mekash1216" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mekash-habtam-578687252",
    },
    {
      icon: <FaPhone />,
      link: "tel:+251968982313",
      tooltip: "+251 968 982 313",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl md:text-2xl font-extrabold
             bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600
             bg-clip-text text-transparent
             cursor-pointer select-none
             transition-all duration-300
             hover:scale-105
             hover:from-indigo-600 hover:via-purple-500 hover:to-blue-600"
        >
          Mekash H.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <ul className="flex gap-6">
            <li className="hover:text-blue-600 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <a href="/#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Social Icons */}

          <div className="flex gap-4 ml-6">
            {socialLinks.map((social, i) => (
              <div key={i} className="relative group text-xl">
                {social.tooltip ? (
                  <>
                    <a
                      href={social.link}
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      {social.icon}
                    </a>
                    {/* Tooltip below the icon */}
                    <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.tooltip}
                    </span>
                  </>
                ) : (
                  <Link
                    href={social.link}
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {social.icon}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 animate-slide-down">
          <Link href="/" className="block py-2 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block py-2 hover:text-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block py-2 hover:text-blue-600 transition"
          >
            Contact
          </Link>

          <div className="flex gap-4 mt-4">
            {socialLinks.map((social, i) => (
              <div key={i} className="relative group text-xl">
                {social.tooltip ? (
                  <>
                    <a
                      href={social.link}
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      {social.icon}
                    </a>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.tooltip}
                    </span>
                  </>
                ) : (
                  <Link
                    href={social.link}
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {social.icon}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
