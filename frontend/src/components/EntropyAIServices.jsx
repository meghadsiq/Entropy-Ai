import React from "react";

const EntropyAIServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}

      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-24 px-6 mt-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300 mb-16 text-center drop-shadow-2xl">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {/* AI Chatbot Development */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">AI Chatbot Development</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              Custom AI chatbots that understand your business and engage customers naturally with intelligent responses.
            </p>
          </div>

          {/* Automatic Website Creation */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Automatic Website Creation</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              Our AI builds professional websites automatically, tailored to your specific business requirements.
            </p>
          </div>

          {/* Seamless Integration */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Seamless Integration</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              Connect chatbots to your existing systems effortlessly with our automated integration technology.
            </p>
          </div>

          {/* Full Customization - Bottom Row */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-2xl w-full">
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">Full Customization</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Complete control over design, functionality, and behavior to perfectly match your brand identity.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntropyAIServices;