import React, { useState } from "react";
import { Search, ChevronRight, Users, ShieldCheck, Headphones, Map, ArrowRight } from "lucide-react";

interface HeroProps {
  onSearchTrack: (id: string) => void;
  onOpenAssistant: () => void;
}

export default function Hero({ onSearchTrack, onOpenAssistant }: HeroProps) {
  const [trackId, setTrackId] = useState("");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackId.trim()) {
      onSearchTrack(trackId.trim());
    }
  };

  const handleTriggerDemo = () => {
    onSearchTrack("DRX-7822-US");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-site-bg flex items-center pt-24 pb-16 overflow-hidden text-site-body transition-colors duration-300"
    >
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Decorative World Grid Dots background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.035] pointer-events-none bg-[radial-gradient(#111_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6B00]/15 to-transparent p-1 pr-3 rounded-full border border-[#FF6B00]/25 mx-auto lg:mx-0 select-none">
              <span className="bg-[#FF6B00] text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                LIVE
              </span>
              <span className="text-[12px] font-medium text-site-title">
                Nationwide Delivery Network & Real-Time GPS Tracking
              </span>
            </div>

            {/* Title / Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-extrabold tracking-tight text-site-title">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFA25B]">Reliable, Fast</span> <br className="hidden sm:inline" />
              & Quality Courier Service
            </h1>

            {/* Sub-supporting Text */}
            <p className="text-site-body text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Expedited same-day delivery, secure customs cleared international logistics, and comprehensive cloud-monitored warehouse storage. We prioritize your cargo safety and on-time distribution.
            </p>

            {/* Quick Package Tracking Box */}
            <div className="bg-site-card-bg backdrop-blur-md p-4 rounded-2xl border border-site-card-border max-w-lg mx-auto lg:mx-0 shadow-2xl">
              <span className="block text-[11px] font-mono text-[#FF6B00] uppercase tracking-widest mb-2 text-left px-1 font-bold">
                Enter shipment ID to track package
              </span>
              <form onSubmit={handleTrackSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-site-body/60 pointer-events-none" />
                  <input
                    type="text"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    placeholder="e.g. DRX-7822-US or DRX-0041-GB"
                    className="w-full bg-site-input-bg text-site-title rounded-xl py-3 pl-10 pr-4 text-sm border border-site-input-border focus:border-[#FF6B00]/50 placeholder-site-body/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF6B00] hover:bg-[#E55A00] text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-1.5 transition duration-150 shadow-md shadow-[#FF6B00]/20 cursor-pointer"
                >
                  <span>Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-2.5 flex justify-between items-center px-1 text-xs text-site-body/70">
                <span>Looking for a demo?</span>
                <button
                  onClick={handleTriggerDemo}
                  className="text-[#FF6B00] hover:underline font-semibold cursor-pointer"
                >
                  Try tracking ID: <span className="font-mono underline">DRX-7822-US</span>
                </button>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#calculator"
                className="bg-white hover:bg-gray-100 text-black font-bold px-7 py-3.5 rounded-xl transition shadow-lg shadow-black/5 dark:shadow-black/20 flex items-center gap-2 text-sm"
              >
                <span>Calculate Shipping Cost</span>
              </a>
              <button
                onClick={onOpenAssistant}
                className="bg-site-card-bg hover:bg-site-card-border text-site-title font-bold px-6 py-3.5 rounded-xl transition border border-site-card-border text-sm flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Consult Dorex AI</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-site-card-border max-w-xl mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-site-title">2,500+</span>
                <span className="text-[11px] font-mono text-[#FF6B00] uppercase tracking-widest mt-1 block font-bold">Happy Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-site-title">99.8%</span>
                <span className="text-[11px] font-mono text-[#FF6B00] uppercase tracking-widest mt-1 block font-bold">On-Time Success</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-site-title">24/7</span>
                <span className="text-[11px] font-mono text-[#FF6B00] uppercase tracking-widest mt-1 block font-bold">Support Hours</span>
              </div>
            </div>

          </div>

          {/* Right Image/Mockup Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual background circular disk glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-gradient-to-tr from-[#FF6B00]/10 to-[#FF6B00]/2 rounded-full border border-[#FF6B00]/10 pointer-events-none" />
            
            {/* Floating Info card (Package Status Mock) */}
            <div className="absolute top-8 left-4 sm:-left-6 z-20 bg-site-card-bg p-4 rounded-xl border border-site-card-border shadow-2xl flex items-center space-x-3 backdrop-blur-md animate-bounce" style={{ animationDuration: '6s' }}>
              <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#FF6B00] font-mono font-bold">Status: Locked</span>
                <span className="block text-xs font-bold text-site-title">Secure Package Cargo</span>
                <span className="block text-[9px] text-site-body/80">Insurance Included</span>
              </div>
            </div>

            {/* Absolute bottom right badge: Delivery Live Location */}
            <div className="absolute bottom-12 right-2 sm:-right-4 z-20 bg-site-card-bg px-4 py-3 rounded-xl border border-site-card-border shadow-2xl flex items-center space-x-3.5 backdrop-blur-md">
              <div className="relative">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping absolute top-0.5 left-0.5" />
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-site-card-border" />
              </div>
              <div>
                <span className="block text-xs font-bold text-site-title">NYC Metropolitan Outbound</span>
                <span className="block text-[10px] text-site-body/80 font-mono">Live Route ID: 4122-NY</span>
              </div>
            </div>

            {/* Courier Image Frame */}
            <div className="relative w-72 sm:w-[380px] h-[400px] sm:h-[480px] rounded-[32px] overflow-hidden border-2 border-site-card-border shadow-2xl shadow-black/5 dark:shadow-black/60 bg-site-sec-bg">
              <img
                src="/src/assets/images/courier_hero_1780393916885.png"
                alt="Dorex Professional Smiling Courier Logistics"
                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
