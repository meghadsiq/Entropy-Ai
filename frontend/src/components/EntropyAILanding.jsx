import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EntropyAILanding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-purple-600 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto z-10 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 mb-8 leading-tight drop-shadow-2xl">
            Transform Your Business with AI
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            EntropyAI crafts intelligent chatbots and builds professional websites automatically.
          </p>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Seamless integration, full customization, and AI that understands your goals — all in one platform.
          </p>
          <a
            href="/free-trial"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Try Me Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 px-6 bg-gray-950 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-14">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "AI Chatbot Development",
              description: "Custom chatbots with natural language understanding and business intelligence.",
              icon: "🤖",
            },
            {
              title: "Automatic Website Creation",
              description: "AI-powered website building tailored to your needs without any coding.",
              icon: "🛠️",
            },
            {
              title: "Seamless Integration",
              description: "Connect with CRMs, WhatsApp, and internal systems effortlessly.",
              icon: "🔗",
            },
            {
              title: "Full Customization",
              description: "Design and features personalized to your business and audience.",
              icon: "🎨",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-purple-400/30 backdrop-blur-md rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-700 to-blue-700 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow">
            Ready to Experience EntropyAI?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Start your free trial today and explore how intelligent automation can scale your business 24/7.
          </p>
          <a
            href="/free-trial"
            className="bg-white text-blue-700 font-bold py-3 px-10 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Start Free Trial
          </a>
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-30 pointer-events-none backdrop-blur-sm"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EntropyAILanding;
