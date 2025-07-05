import React, { useState } from "react";
import Navbar from "./Navbar";

const EntropyAIApp = () => {
  const [currentView, setCurrentView] = useState("creator"); // 'creator' or 'preview'
  const [selectedChatbotType, setSelectedChatbotType] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant powered by EntropyAI. I'm ready to help your customers with their queries. How can I assist you today?",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [remainingMessages, setRemainingMessages] = useState(5);

  const handleGenerateChatbot = () => {
    setCurrentView("preview");
  };

  const handleBackToCreator = () => {
    setCurrentView("creator");
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() && remainingMessages > 0) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isBot: false,
      };

      setMessages([...messages, newMessage]);
      setInputMessage("");
      setRemainingMessages(remainingMessages - 1);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your message! I'm here to help with any questions you have about our services.",
          isBot: true,
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const chatbotTypes = [
    { id: "customer-service", title: "Customer Service", description: "Support & inquiries" },
    { id: "sales-assistant", title: "Sales Assistant", description: "Lead generation" },
    { id: "educational", title: "Educational", description: "Training & guides" },
    { id: "booking-system", title: "Booking System", description: "Appointments" },
  ];

  if (currentView === "preview") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <Navbar />
        <div className="max-w-2xl mx-auto py-20 px-6 mt-20 ">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-center py-6 px-4 bg-gradient-to-r from-indigo-900 to-purple-900">
              <h2 className="text-2xl font-bold text-white drop-shadow-md">Your AI Chatbot Preview</h2>
              <span className="ml-2 text-2xl animate-pulse">🎉</span>
            </div>

            <div className="border-t border-white/20">
              <div className="bg-blue-500/10 px-4 py-3">
                <h3 className="font-semibold text-white">EntropyAI Chatbot</h3>
              </div>

              <div className="h-96 overflow-y-auto p-6 bg-gray-900/50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 ${
                      msg.isBot ? "text-left" : "text-right"
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-xl shadow-md max-w-xs ${
                        msg.isBot
                          ? "bg-white/20 text-white"
                          : "bg-blue-500/50 text-white"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/10 border-t border-white/20">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-white/20 rounded-full focus:outline-none focus:border-blue-400 bg-gray-800 text-white placeholder-gray-400"
                    disabled={remainingMessages === 0}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={remainingMessages === 0}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-white/10 text-center border-t border-white/20">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Trial Version:</span> {remainingMessages} messages remaining
              </p>
            </div>

            <div className="p-6">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto py-20 px-6 mt-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300 text-center mb-10 drop-shadow-lg">
            Free Trial - Create Your AI Chatbot
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-blue-300 mb-6">Upload Your Business Files</h3>
            <div
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragOver
                  ? "border-blue-400 bg-blue-900/50"
                  : "border-white/20 bg-gray-900/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-yellow-400 text-5xl mb-6 animate-bounce">📁</div>
              <p className="text-lg font-medium text-white mb-2">Drag & Drop Files Here</p>
              <p className="text-sm text-gray-400">
                Supported: PDF, DOC, TXT, CSV (Max 5MB for trial)
              </p>
            </div>
            <p className="text-sm text-gray-500 italic mt-3 text-center">
              * File upload is optional - you can proceed without files
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-blue-300 mb-6">Select Chatbot Type:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chatbotTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedChatbotType(type.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                    selectedChatbotType === type.id
                      ? "border-blue-500 bg-blue-900/50"
                      : "border-white/20 bg-gray-900/50 hover:border-white/40"
                  }`}
                >
                  <h4 className="font-semibold text-white mb-2">{type.title}</h4>
                  <p className="text-sm text-gray-300">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerateChatbot}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Generate AI Chatbot
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntropyAIApp;