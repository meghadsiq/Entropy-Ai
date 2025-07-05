import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <Navbar />

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 mb-12 text-center drop-shadow-2xl">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          At EntropyAI, we are passionate about revolutionizing the way businesses interact with technology. Founded with a vision to harness the power of artificial intelligence, our mission is to empower companies with intelligent chatbots, automated websites, and seamless integrations tailored to their unique needs.
        </p>

        {/* Our Story */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">Our Story</h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            EntropyAI was born from a simple idea: to make AI accessible and impactful for every business. Starting as a small team of innovators, we’ve grown into a trusted partner for companies worldwide, delivering cutting-edge solutions that save time and enhance customer experiences.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">Our Mission</h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            Our mission is to simplify complex technologies and provide customizable AI tools that drive growth. We believe in creating solutions that are not just innovative but also user-friendly, ensuring every business can thrive in the digital age.
          </p>
        </div>

        {/* Our Team */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">Our Team</h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            Our team consists of AI experts, developers, and designers who are dedicated to pushing the boundaries of what’s possible. With diverse skills and a shared passion for technology, we work tirelessly to bring your vision to life.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;