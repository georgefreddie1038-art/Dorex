import React, { useState, useEffect } from "react";
import { Package, Search, Phone, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenTracker: () => void;
  onOpenChat: () => void;
  theme: string;
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenTracker, onOpenChat, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-site-bg/90 backdrop-blur-md border-b border-site-card-border/60 py-3 shadow-lg shadow-black/5 dark:shadow-black/35"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#FF8C39] flex items-center justify-center shadow-lg shadow-[#FF6B00]/25 group-hover:rotate-6 transition-all">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-site-title">
                DOREX<span className="text-[#FF6B00] font-black italic">.</span>
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-[#FF6B00] uppercase">
                Premium Logistics
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-site-body hover:text-[#FF6B00] hover:scale-105 transition-all cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-site-body hover:text-[#FF6B00] hover:scale-105 transition-all cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-site-body hover:text-[#FF6B00] hover:scale-105 transition-all cursor-pointer"
            >
              Delivery Timeline
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-sm font-medium text-[#FF6B00] hover:text-[#E55A00] transition-all cursor-pointer flex items-center gap-1.5 bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/20"
            >
              <span>Fares Calc</span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-site-body hover:text-[#FF6B00] md:block hidden hover:scale-105 transition-all cursor-pointer"
            >
              Success Stories
            </button>
          </div>

          {/* Quick Buttons Group */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-site-card-bg hover:bg-site-card-border hover:brightness-105 text-site-title border border-site-card-border shadow-sm transition duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Toggle light or dark theme"
            >
              {isDark ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={onOpenTracker}
              className="bg-site-card-bg text-site-title hover:bg-site-card-border/80 text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-xl transition duration-200 border border-site-card-border flex items-center gap-1.5 focus:scale-95 cursor-pointer shadow-sm"
            >
              <Search className="w-4 h-4 text-[#FF6B00]" />
              <span className="hidden sm:inline">Track Shipment</span>
            </button>
            
            <button
              onClick={() => scrollToSection("calculator")}
              className="bg-gradient-to-r from-[#FF6B00] to-[#E55A00] text-white text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-xl shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
