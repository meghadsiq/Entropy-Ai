import React from "react";
import Navbar from "./Navbar";

const EntropyAILanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className=" px-6 py-36 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto z-10 relative">
          {/* Animated Background Elements */}
          {/* <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow -z-10"></div> */}

          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 mb-8 leading-tight drop-shadow-2xl">
            Transform Your Business with AI
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            EntropyAI crafts intelligent chatbots and builds professional websites automatically.
          </p>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience seamless integration, complete customization, and cutting-edge AI for your business needs.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Try Me Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default EntropyAILanding;