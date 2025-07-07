import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaFileUpload, FaRobot, FaArrowRight } from "react-icons/fa";

const chatbotTypes = [
  { id: "customer-service", title: "Customer Service", description: "Resolve queries and assist users in real-time." },
  { id: "sales-assistant", title: "Sales Assistant", description: "Engage leads and boost conversions automatically." },
  { id: "educational", title: "Educational", description: "Provide guidance, tutorials, or training material." },
  { id: "booking-system", title: "Booking System", description: "Schedule appointments or manage bookings efficiently." },
];

const EntropyAIApp = () => {
  const [currentView, setCurrentView] = useState("creator");
  const [selectedChatbotType, setSelectedChatbotType] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [remainingMessages, setRemainingMessages] = useState(5);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi there! I'm your AI Assistant powered by EntropyAI. Ask me anything!",
      isBot: true,
    },
  ]);

  const handleSendMessage = () => {
    if (inputMessage.trim() && remainingMessages > 0) {
      const userMessage = { id: messages.length + 1, text: inputMessage, isBot: false };
      setMessages([...messages, userMessage]);
      setInputMessage("");
      setRemainingMessages((prev) => prev - 1);

      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: "🤖 Thanks! I'm learning from your input to serve better.",
          isBot: true,
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleGenerateChatbot = () => {
    setCurrentView("preview");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      <Navbar />

      {currentView === "creator" ? (
        <main className="max-w-4xl mx-auto px-6 py-20 flex-grow">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
              🤖 Build Your AI Chatbot
            </h2>
            <p className="text-center text-white/60 mb-10 text-sm">
              Upload your data, choose a chatbot type, and preview in seconds.
            </p>

            {/* Upload Section */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Upload Business Files</h3>
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  dragOver ? "border-blue-500 bg-blue-900/50" : "border-white/20 bg-gray-800/40"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <FaFileUpload className="text-yellow-300 text-5xl mb-4 animate-bounce" />
                <p className="text-lg font-medium">Drag & Drop Files Here</p>
                <p className="text-sm text-gray-400">PDF, DOC, CSV, TXT – max 5MB</p>
              </div>
              <p className="text-xs text-gray-500 italic mt-3 text-center">Optional: Upload if you want chatbot to learn from your data</p>
            </section>

            {/* Chatbot Type */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Select Chatbot Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chatbotTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedChatbotType(type.id)}
                    className={`rounded-2xl p-5 text-left border-2 transition-all duration-300 ${
                      selectedChatbotType === type.id
                        ? "border-blue-500 bg-blue-800/50"
                        : "border-white/20 bg-gray-800/40 hover:border-white/30"
                    }`}
                  >
                    <h4 className="font-semibold text-white text-lg mb-1">{type.title}</h4>
                    <p className="text-sm text-gray-300">{type.description}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Generate Button */}
            <button
              onClick={handleGenerateChatbot}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaRobot className="inline mr-2" /> Generate AI Chatbot
            </button>
          </div>
        </main>
      ) : (
        // === Preview Section ===
        <main className="max-w-2xl mx-auto px-6 py-20 flex-grow">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-6 text-center text-2xl font-bold">
              Your AI Chatbot Preview ✨
            </div>

            <div className="h-96 overflow-y-auto p-6 bg-gray-800/70">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 ${msg.isBot ? "text-left" : "text-right"}`}
                >
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl max-w-sm ${
                      msg.isBot
                        ? "bg-white/20 text-white"
                        : "bg-blue-600/60 text-white"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border-t border-white/20 p-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  disabled={remainingMessages === 0}
                  className="flex-1 px-4 py-3 rounded-full bg-gray-900/80 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={remainingMessages === 0}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white flex items-center justify-center hover:scale-105 transition-all duration-300 disabled:opacity-40"
                >
                  <FaArrowRight />
                </button>
              </div>
              <p className="text-center mt-2 text-sm text-gray-400">
                Trial: {remainingMessages} messages left
              </p>
            </div>

            <div className="p-6 border-t border-white/10 text-center">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Upgrade to Premium 🚀
              </button>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default EntropyAIApp;
