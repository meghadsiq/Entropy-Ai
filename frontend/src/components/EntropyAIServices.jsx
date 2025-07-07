import React from "react";
import { FaRobot, FaGlobe, FaPlug, FaCogs } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const services = [
  {
    icon: <FaRobot className="text-3xl text-blue-400 mb-4" />,
    title: "AI Chatbot Development",
    desc: "Custom-built AI chatbots tailored to your industry to enhance engagement and automate customer support.",
  },
  {
    icon: <FaGlobe className="text-3xl text-purple-400 mb-4" />,
    title: "Automatic Website Creation",
    desc: "Effortlessly generate responsive websites aligned with your brand and goals – no coding needed.",
  },
  {
    icon: <FaPlug className="text-3xl text-pink-400 mb-4" />,
    title: "Seamless Integrations",
    desc: "Connect to CRMs, social platforms, and APIs effortlessly for synchronized operations.",
  },
  {
    icon: <FaCogs className="text-3xl text-yellow-400 mb-4" />,
    title: "Full Customization",
    desc: "Control layouts, colors, flows, chatbot tones – all from a simple interface built for marketers & devs alike.",
  },
];

const EntropyAIServices = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 drop-shadow-2xl">
            Our AI-Powered Services
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Intelligent, automated, and beautifully integrated solutions crafted to elevate your business in minutes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-start">
                {service.icon}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Started with EntropyAI
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EntropyAIServices;
