import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            EntropyAI
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Powering the future with AI-driven chatbots, automation, and digital experiences.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/60">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> support@entropyai.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-blue-400" /> +91 98765 43210
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white/90">Quick Links</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="/pricing" className="hover:text-yellow-300 transition">Pricing</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white/90">Products</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">AI Chatbot</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">WhatsApp Bot</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Website Builder</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Real-time Analytics</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white/90">Follow Us</h4>
          <div className="flex gap-4 text-white/80">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} EntropyAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
