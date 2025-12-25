"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // About link: scroll on homepage, otherwise navigate to homepage
  const aboutHref = pathname === "/" ? "#about" : "/#about";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold
          bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600
          bg-clip-text text-transparent
          transition-transform duration-300 hover:scale-105"
        >
          Mekash H.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <ul className="flex gap-6">
            <li className="hover:text-blue-600 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href={aboutHref}>About</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 ml-6 text-xl">
            {socialLinks.map((social, i) => (
              <div key={i} className="relative group">
                {social.tooltip ? (
                  <>
                    <a
                      href={social.link}
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      {social.icon}
                    </a>
                    <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.tooltip}
                    </span>
                  </>
                ) : (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {social.icon}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 sm:px-6 pb-6 space-y-2 border-t border-gray-200">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block py-2 text-base sm:text-lg hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href={aboutHref}
            onClick={() => setOpen(false)}
            className="block py-2 text-base sm:text-lg hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="block py-2 text-base sm:text-lg hover:text-blue-600 transition"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block py-2 text-base sm:text-lg hover:text-blue-600 transition"
          >
            Contact
          </Link>

          {/* Mobile Social Icons */}
          <div className="flex gap-4 mt-4 text-xl justify-center">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
