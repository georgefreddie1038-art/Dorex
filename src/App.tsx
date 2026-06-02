import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutSection from "./components/AboutSection";
import StrategicGoals from "./components/StrategicGoals";
import ProcessTimeline from "./components/ProcessTimeline";
import ServicesGrid from "./components/ServicesGrid";
import Calculator from "./components/Calculator";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import MobileApp from "./components/MobileApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WorldMap from "./components/WorldMap";
import TrackingWidget from "./components/TrackingWidget";
import AIChatbot from "./components/AIChatbot";
import { Search, Ship, Box } from "lucide-react";

export default function App() {
  const [trackOpen, setTrackOpen] = useState(false);
  const [targetTrackId, setTargetTrackId] = useState("");
  const [aiChatOpen, setAiChatOpen] = useState(false);
  
  // Theme state defaulting to dark for rich premium style first, but supports light fully
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Quick launch helper for parcel tracking searches
  const handleOpenSearchWithId = (id: string) => {
    setTargetTrackId(id);
    setTrackOpen(true);
  };

  const handleOpenWithBlank = () => {
    setTargetTrackId("");
    setTrackOpen(true);
  };

  return (
    <div id="dorex-app" className="min-h-screen bg-site-bg text-site-body font-sans antialiased selection:bg-[#FF6B00] selection:text-white relative">
      
      {/* Dynamic top scroll progress helper line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-[#E55A00] z-50 pointer-events-none" />

      {/* Sticky Top Header Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenTracker={handleOpenWithBlank}
        onOpenChat={() => setAiChatOpen(true)}
      />

      {/* Main Sections */}
      <main className="space-y-0">
        
        {/* Hero Section */}
        <Hero
          onSearchTrack={handleOpenSearchWithId}
          onOpenAssistant={() => setAiChatOpen(true)}
        />

        {/* Feature Cards Section */}
        <Features />

        {/* Interactive World Cargo Corridors Hub Map */}
        <WorldMap />

        {/* Dynamic Premium Estimator (Calculator) */}
        <Calculator />

        {/* About Company Showcase Columns */}
        <AboutSection />

        {/* Corporate Strategic Charter & Objectives */}
        <StrategicGoals />

        {/* Horizontal Services Grid Catalog */}
        <ServicesGrid />

        {/* Delivery Progress Checklist timeline */}
        <ProcessTimeline />

        {/* Stat Numbers Operations Row */}
        <WhyChooseUs />

        {/* Testimonials Carousel Slider slider */}
        <Testimonials />

        {/* Mobile Go App Advert mockup showcase */}
        <MobileApp />

        {/* Graduated Newsletter Action Field */}
        <Newsletter />

      </main>

      {/* Multi-Column corporate footer */}
      <Footer />

      {/* Accessibiltiy floating "Track Package" badge on the left screen */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={handleOpenWithBlank}
          className="bg-gray-950/95 text-[#FF6B00] hover:text-white hover:bg-[#FF6B00] text-xs font-bold px-4 py-3 rounded-full border border-[#FF6B00]/30 shadow-2xl flex items-center gap-1.5 transition duration-150 transform active:scale-95 cursor-pointer"
        >
          <Box className="w-4 h-4" />
          <span>Active Tracking Portal</span>
        </button>
      </div>

      {/* Interactive Global Tracking overlay popups dialog modal */}
      <TrackingWidget
        isOpen={trackOpen}
        onClose={() => setTrackOpen(false)}
        initialTrackId={targetTrackId}
      />

      {/* Interactive Floating Mascot chatbot conversational tool */}
      <AIChatbot
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        onOpen={() => setAiChatOpen(true)}
      />

    </div>
  );
}
