import React from "react";

const PricingSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto py-24 px-6 mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300 mb-12 text-center drop-shadow-2xl">
          Choose Your Plan
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Select the perfect plan for your business needs and unlock the power of AI with EntropyAI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Starter</h3>
            <p className="text-3xl font-bold text-white mb-2">₹999</p>
            <p className="text-sm text-gray-400 mb-6">per month</p>
            <ul className="space-y-3 text-sm text-gray-200 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> 1 AI Chatbot
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> 500 Conversations/month
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Basic Website Integration
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Email Support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Standard Templates
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl relative z-10 transform -translate-y-6">
            <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-semibold px-4 py-1 rounded-br-xl rounded-tl-xl transform rotate-2">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Professional</h3>
            <p className="text-3xl font-bold text-white mb-2">₹2999</p>
            <p className="text-sm text-gray-400 mb-6">per month</p>
            <ul className="space-y-3 text-sm text-gray-200 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> 5 AI Chatbots
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Unlimited Conversations
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Advanced Website Builder
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Priority Support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Custom Branding
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Analytics Dashboard
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-white mb-2">₹9999</p>
            <p className="text-sm text-gray-400 mb-6">per month</p>
            <ul className="space-y-3 text-sm text-gray-200 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Unlimited Chatbots
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Unlimited Everything
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> White-label Solution
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> 24/7 Support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Custom AI Training
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Advanced Security
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;