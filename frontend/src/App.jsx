import React from "react";
import EntropyAILanding from "./components/EntropyAILanding";
import EntropyAIServices from "./components/EntropyAIServices";
import EntropyAIApp from "./components/EntropyAIApp";
import { Route, Routes } from "react-router-dom";
import PricingSection from "./components/PricingSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import LoginSignup from "./components/LoginSignup";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<EntropyAILanding />} />
        <Route path="/services" element={<EntropyAIServices />} />
        <Route path="/chatbot" element={<EntropyAIApp />} />
        <Route path="/pricing" element={<PricingSection/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
    </div>
  );
};

export default App;
