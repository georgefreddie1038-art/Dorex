import React from "react";
import { FEATURES_DATA } from "../data";
import { DollarSign, ShieldCheck, Headphones, ArrowRight } from "lucide-react";

export default function Features() {
  const getIcon = (iconName: string) => {
    const classProp = "w-6 h-6 text-[#FF6B00]";
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className={classProp} />;
      case "ShieldCheck":
        return <ShieldCheck className={classProp} />;
      case "Headphones":
        return <Headphones className={classProp} />;
      default:
        return <ShieldCheck className={classProp} />;
    }
  };

  return (
    <section
      id="features"
      className="py-24 bg-site-sec-bg border-t border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25">
            Why Choose Our Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Why should you use <br />
            our premium services?
          </h2>
          <p className="text-site-body text-sm sm:text-base">
            Whether for local delivery run, bulk pallet transit, or high-security business logistics, we provide custom configurations matching your needs perfectly.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat) => (
            <div
              key={feat.id}
              className="group relative p-8 rounded-2xl bg-site-card-bg border border-site-card-border hover:border-[#FF6B00]/30 hover:bg-site-card-border/10 transition-all duration-300 shadow-xl overflow-hidden hover:-translate-y-1"
            >
              {/* Background gradient flare */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#FF6B00]/5 group-hover:bg-[#FF6B00]/10 rounded-full filter blur-2xl transition duration-300" />

              {/* Icon layout */}
              <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 border border-[#FF6B00]/20">
                {getIcon(feat.icon)}
              </div>

              {/* Text content */}
              <h3 className="text-xl font-bold text-site-title mb-3 group-hover:text-[#FF6B00] transition duration-300">
                {feat.title}
              </h3>
              <p className="text-site-body text-sm leading-relaxed mb-6">
                {feat.description}
              </p>

              {/* Link trigger with linear highlight */}
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider group-hover:translate-x-1.5 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
