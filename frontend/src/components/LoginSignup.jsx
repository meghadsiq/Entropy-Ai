import React, { useState } from "react";
import Navbar from "./Navbar";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/signup logic here (e.g., API call)
    console.log({
      email,
      password,
      name: isLogin ? undefined : name,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="max-w-md mx-auto py-24 px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl animate-fadeIn">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 mb-6 text-center drop-shadow-lg">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-center text-gray-400 mb-8">
            {isLogin
              ? "Sign in to continue your EntropyAI journey"
              : "Join EntropyAI and unlock the future"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="animate-slideUp">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            <div className="animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-purple-800 text-white py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-slow"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;