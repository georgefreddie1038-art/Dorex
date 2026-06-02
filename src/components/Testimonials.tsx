import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const setSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#FF6B00]/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Client's Say About Us
          </h2>
          <p className="text-site-body text-sm">
            Read stories from manufacturers, retailers, and individual shippers who rely on Dorex for daily transportations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          {/* Active Testimonial Card */}
          <div className="bg-site-card-bg border border-site-card-border rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 min-h-[300px] flex flex-col justify-between">
            <Quote className="absolute top-8 right-8 w-20 h-20 text-[#FF6B00]/5 pointer-events-none" />

            <div className="space-y-6">
              {/* Star Rating Layout */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-[#FF6B00] text-[#FF6B00]`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-site-title text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic">
                "{current.text}"
              </p>
            </div>

            {/* Reviewer Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-site-card-border">
              <div className="flex items-center space-x-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B00]/40 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-site-title">{current.name}</h4>
                  <span className="text-xs text-site-body font-mono">
                    {current.role}, <span className="text-site-title/90 font-bold">{current.company}</span>
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="hidden sm:flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs text-emerald-555 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Dorex Corporate Shipper</span>
              </div>
            </div>

          </div>

          {/* Carousel Buttons Control */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-site-sec-bg hover:bg-[#FF6B00] hover:text-white border border-site-card-border flex items-center justify-center text-site-title transition duration-200 shadow-md transform active:scale-90 cursor-pointer hover:border-[#FF6B00]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots indicators */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "w-6 bg-[#FF6B00]" : "w-2 bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-site-sec-bg hover:bg-[#FF6B00] hover:text-white border border-site-card-border flex items-center justify-center text-site-title transition duration-200 shadow-md transform active:scale-90 cursor-pointer hover:border-[#FF6B00]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
