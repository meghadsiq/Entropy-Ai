import React from "react";
import { FaRocket, FaCrown, FaBuilding } from "react-icons/fa";
import Footer from "./Footer"; // 👈 Import Footer component

const PricingSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-between">
      <div className="max-w-7xl w-full px-6 py-24 mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 text-center drop-shadow-2xl">
          Choose Your Plan
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-3xl mx-auto leading-relaxed">
          Simple pricing. No hidden fees. Powerful AI chatbot support for all businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {/* Starter */}
          <div className="bg-white/10 rounded-3xl p-8 shadow-xl border border-white/10 hover:border-blue-400/30 transition duration-300 hover:shadow-blue-500/20 hover:scale-105 backdrop-blur-md">
            <div className="text-blue-300 text-3xl mb-4">
              <FaRocket />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <p className="text-4xl font-bold text-white mb-1">₹999</p>
            <p className="text-sm text-gray-400 mb-6">Per month</p>
            <ul className="text-sm text-gray-300 space-y-3 mb-8">
              <li>✅ 1 AI Chatbot</li>
              <li>✅ 500 Conversations/month</li>
              <li>✅ Basic Website Integration</li>
              <li>✅ Email Support</li>
              <li>✅ Standard Templates</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-md hover:shadow-2xl">
              Get Started
            </button>
          </div>

          {/* Professional */}
          <div className="relative bg-white/10 rounded-3xl p-10 shadow-2xl border border-yellow-400/30 hover:border-yellow-400 transition duration-300 hover:shadow-yellow-300/20 hover:scale-105 backdrop-blur-md z-10 -mt-6 md:-mt-0">
            <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl shadow rotate-2">
              ⭐ Most Popular
            </span>
            <div className="text-yellow-400 text-3xl mb-4">
              <FaCrown />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
            <p className="text-4xl font-bold text-white mb-1">₹2999</p>
            <p className="text-sm text-gray-400 mb-6">Per month</p>
            <ul className="text-sm text-gray-300 space-y-3 mb-8">
              <li>✅ 5 AI Chatbots</li>
              <li>✅ Unlimited Conversations</li>
              <li>✅ Advanced Website Builder</li>
              <li>✅ Priority Support</li>
              <li>✅ Custom Branding</li>
              <li>✅ Analytics Dashboard</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition shadow-md hover:shadow-2xl">
              Choose Plan
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white/10 rounded-3xl p-8 shadow-xl border border-white/10 hover:border-purple-400/30 transition duration-300 hover:shadow-purple-500/20 hover:scale-105 backdrop-blur-md">
            <div className="text-purple-300 text-3xl mb-4">
              <FaBuilding />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
            <p className="text-4xl font-bold text-white mb-1">₹9999</p>
            <p className="text-sm text-gray-400 mb-6">Per month</p>
            <ul className="text-sm text-gray-300 space-y-3 mb-8">
              <li>✅ Unlimited Chatbots</li>
              <li>✅ Unlimited Everything</li>
              <li>✅ White-label Solution</li>
              <li>✅ 24/7 Support</li>
              <li>✅ Custom AI Training</li>
              <li>✅ Advanced Security</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-md hover:shadow-2xl">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* 👇 Footer added here */}
      <Footer />
    </div>
  );
};

export default PricingSection;
