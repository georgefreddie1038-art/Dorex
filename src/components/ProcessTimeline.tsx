import React from "react";
import { ClipboardList, ShieldCheck, Truck, MapPin, CheckCircle } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      id: 1,
      title: "Booking & Estimation",
      desc: "Instantly declare dimensions, select speed priorities, and book pick-ups through our smart reservation system.",
      icon: <ClipboardList className="w-5 h-5 text-white" />,
      tag: "STEP 01",
      glowColor: "shadow-[#FF6B00]/40 bg-[#FF6B00]",
    },
    {
      id: 2,
      title: "Consignment & Secure Pickup",
      desc: "Our automated local courier fetches the material from your dock, prints barcodes, and weights it on-site.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      tag: "STEP 02",
      glowColor: "shadow-indigo-500/40 bg-indigo-500",
    },
    {
      id: 3,
      title: "Optimized Transportation",
      desc: "Items pass through secure sorting hubs to fly across countries or drive via climate-monitored smart trailer units.",
      icon: <Truck className="w-5 h-5 text-white" />,
      tag: "STEP 03",
      glowColor: "shadow-cyan-500/40 bg-cyan-500",
    },
    {
      id: 4,
      title: "Continuous Real-Time Tracking",
      desc: "Every step is scanned. Customers can review transit progress on customizable live maps at any second.",
      icon: <MapPin className="w-5 h-5 text-white" />,
      tag: "STEP 04",
      glowColor: "shadow-amber-500/40 bg-amber-500",
    },
    {
      id: 5,
      title: "Safe Handover & Digital Release",
      desc: "Receiver signs digitally upon safe arrival, automatically triggering status closure and photographic proof alerts.",
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      tag: "STEP 05",
      glowColor: "shadow-emerald-500/40 bg-emerald-500",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF6B00]/3 filter blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Our Delivery Process
          </h2>
          <p className="text-site-body text-sm">
            We operate in five seamless checkpoints synchronized via Dorex GPS Cloud. Here is what happens from start to safe delivery.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Glowing central vertical connector lines */}
          <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#FF6B00] via-indigo-500 to-emerald-500 opacity-25" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="flex flex-col md:flex-row items-start md:items-center relative"
                >
                  
                  {/* Step visual indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-4 md:-translate-x-6 z-25">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg ${step.glowColor} border-2 border-site-bg transition duration-300 transform hover:scale-110`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Left Column (Left card on Desktop, Spacer on Mobile) */}
                  <div className="w-full md:w-1/2 md:pr-16 pl-16 md:pl-0 text-left md:text-right order-2 md:order-1">
                    {isEven ? (
                      <div className="p-6 md:p-8 bg-site-card-bg border border-site-card-border rounded-2xl hover:bg-site-sec-bg transition duration-205 shadow-sm">
                        <span className="inline-block text-[10px] font-mono text-[#FF6B00] font-black uppercase tracking-widest mb-2">
                          {step.tag}
                        </span>
                        <h4 className="text-site-title text-lg font-bold mb-2">
                          {step.title}
                        </h4>
                        <p className="text-site-body text-xs sm:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Right Column (Right card on Desktop, Primary item on Mobile) */}
                  <div className="w-full md:w-1/2 md:pl-16 pl-16 order-3">
                    {!isEven ? (
                      <div className="p-6 md:p-8 bg-site-card-bg border border-site-card-border rounded-2xl hover:bg-site-sec-bg transition duration-205 shadow-sm">
                        <span className="inline-block text-[10px] font-mono text-[#FF6B00] font-black uppercase tracking-widest mb-2">
                          {step.tag}
                        </span>
                        <h4 className="text-site-title text-lg font-bold mb-2">
                          {step.title}
                        </h4>
                        <p className="text-site-body text-xs sm:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
