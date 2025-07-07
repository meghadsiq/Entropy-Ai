import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />

      <main className="flex-grow px-6 py-24 max-w-6xl mx-auto animate-fadeIn">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4 drop-shadow-xl">
            About EntropyAI
          </h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
            We are revolutionizing how businesses embrace AI. From intelligent chatbots to fully automated websites, we deliver innovation at your fingertips.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {/* Our Story */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
            <FaRocket className="text-blue-400 text-4xl mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">Our Story</h3>
            <p className="text-white/70 leading-relaxed">
              Started as a passion project, EntropyAI grew into a global force in AI innovation. We build tools that make technology intuitive and impactful.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
            <FaLightbulb className="text-yellow-300 text-4xl mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Our Mission</h3>
            <p className="text-white/70 leading-relaxed">
              To simplify advanced AI tools and deliver automation that scales with your business — beautifully designed and easy to use.
            </p>
          </div>

          {/* Our Team */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
            <FaUsers className="text-pink-400 text-4xl mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold text-pink-300 mb-3">Our Team</h3>
            <p className="text-white/70 leading-relaxed">
              We’re a vibrant mix of AI engineers, designers, and thinkers who love to challenge limits and turn ideas into beautiful products.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
          <p className="text-white/60 text-lg mb-8">
            Let us help you build something incredible with AI.
          </p>
          <a
            href="/login"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            Get Started Now 🚀
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
