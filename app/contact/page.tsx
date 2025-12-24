"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(""); // <-- New state for messages
  const [statusType, setStatusType] = useState<"success" | "error" | "">(""); // success/error

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/mekashh" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mekash-h" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");
    setStatusType("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatusMsg("Message sent successfully!");
        setStatusType("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMsg("Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch (err) {
      setStatusMsg("Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-gray-50 overflow-hidden">
      {/* Background shapes */}
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

          {/* Status Message */}
          {statusMsg && (
            <div
              className={`mb-4 p-3 rounded ${
                statusType === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {statusMsg}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="peer w-full border-b-2 border-gray-300 p-3 pt-5 pb-1 outline-none focus:border-blue-500 transition"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="peer w-full border-b-2 border-gray-300 p-3 pt-5 pb-1 outline-none focus:border-blue-500 transition"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="peer w-full border-b-2 border-gray-300 p-3 pt-5 pb-1 h-32 resize-none outline-none focus:border-blue-500 transition"
              />
              <label
                htmlFor="message"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
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
