import React from "react";
import { Check, ClipboardList, Target, Medal } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Delivery Process image */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-[#FF6B00]/10 filter blur-3xl rounded-3xl pointer-events-none scale-90" />
            
            {/* Handoff Asset Wrapper with customized borders */}
            <div className="relative rounded-[32px] overflow-hidden border border-site-card-border shadow-2xl z-10">
              <img
                src="/src/assets/images/courier_delivering_1780393935047.png"
                alt="Courier delivering package to doorstep smiling customer"
                className="w-full h-[360px] sm:h-[460px] object-cover scale-102 hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Glass overlay badge inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-site-card-bg/95 backdrop-blur-md border border-site-card-border rounded-2xl">
                <p className="text-xs font-mono text-[#FF6B00] uppercase tracking-widest font-bold">
                  Dorex Service Guarantee
                </p>
                <p className="text-sm font-bold text-site-title mt-1">
                  "Perfect condition delivery, or full postage refunded automatically."
                </p>
              </div>
            </div>

            {/* Absolute overlapping numbers label */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-[#FF6B00] to-[#FF8C39] text-white p-5 rounded-2xl shadow-xl z-20 flex flex-col justify-center items-center text-center min-w-32">
              <span className="block text-3xl font-black">10+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold">Years Quality</span>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25 inline-block">
                Our Fleet Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
                Dorex Delivery service <br />
                at your doorstep.
              </h2>
            </div>

            <p className="text-site-body text-sm sm:text-base leading-relaxed">
              At Dorex, we believe logistics is more than moving cargo from point A to point B. It’s about building reliable pipelines of trust. Since 2016, we have expanded our fleet to cover over 120 cities nationwide, utilizing advanced AI routing algorithms to cut environmental waste and delivery latency.
            </p>

            {/* Mission Statements columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-3 p-4 rounded-xl bg-site-card-bg border border-site-card-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-indigo-550 dark:text-indigo-400" />
                </div>
                <h4 className="text-site-title font-bold text-sm uppercase tracking-wide">
                  Our Mission
                </h4>
                <p className="text-xs text-site-body leading-normal">
                  To provide secure, efficient, and seamless shipping services that enable individuals and corporate clients to expand without limits.
                </p>
              </div>

              <div className="space-y-3 p-4 rounded-xl bg-site-card-bg border border-site-card-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
                  <Medal className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <h4 className="text-site-title font-bold text-sm uppercase tracking-wide">
                  Our Core values
                </h4>
                <p className="text-xs text-site-body leading-normal">
                  Honoring promised deadlines, enforcing strict damage-prevention controls, and building scalable green shipping paths.
                </p>
              </div>

            </div>

            {/* Key list items */}
            <ul className="space-y-3.5 border-t border-site-card-border pt-6">
              <li className="flex items-center space-x-3 text-sm text-site-body">
                <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-555 dark:text-emerald-400" />
                </div>
                <span>Fully certified global freight and customs clearance staff.</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-site-body">
                <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-555 dark:text-emerald-400" />
                </div>
                <span>State-of-the-art climate container and hazard insurance options.</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-site-body">
                <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-555 dark:text-emerald-400" />
                </div>
                <span>Real-time GPS transit streams with automatic ETA adjustments.</span>
              </li>
            </ul>

            {/* Learn More smooth trigger link */}
            <div className="pt-2">
              <a
                href="#process"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6B00] hover:bg-[#E55A00] text-white text-xs sm:text-sm font-bold rounded-xl transition duration-200 outline-none hover:shadow-lg hover:shadow-[#FF6B00]/20"
              >
                Learn More About Us
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
