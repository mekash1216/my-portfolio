"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/mekashh" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mekash-h" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-gray-50 overflow-hidden">
      {/* Optional floating shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 p-3 outline-none focus:border-blue-500 transition"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 p-3 outline-none focus:border-blue-500 transition"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 p-3 h-32 resize-none outline-none focus:border-blue-500 transition"
              />
              <label
                htmlFor="message"
                className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3 hover:text-blue-600 transition transform hover:scale-105">
                <FaPhone className="text-blue-600" />
                <span>+251 968 982 313</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-600 transition transform hover:scale-105">
                <FaEnvelope className="text-blue-600" />
                <span>mekash1216@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-600 transition transform hover:scale-105">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition duration-300 text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
