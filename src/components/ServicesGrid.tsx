import React from "react";
import { SERVICES_DATA } from "../data";
import { Package, Zap, Clock, Globe, Database, Briefcase, ChevronRight } from "lucide-react";

export default function ServicesGrid() {
  const getIcon = (iconName: string) => {
    const classes = "w-5 h-5 text-white";
    switch (iconName) {
      case "Package":
        return <Package className={classes} />;
      case "Zap":
        return <Zap className={classes} />;
      case "Clock":
        return <Clock className={classes} />;
      case "Globe":
        return <Globe className={classes} />;
      case "Database":
        return <Database className={classes} />;
      case "Briefcase":
        return <Briefcase className={classes} />;
      default:
        return <Package className={classes} />;
    }
  };

  const getServiceImage = (id: string) => {
    // Highly relevant, beautiful premium Unsplash logistics photography
    switch (id) {
      case "parcel":
        return "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=600&auto=format&fit=crop";
      case "express":
        return "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=600&auto=format&fit=crop";
      case "sameday":
        return "https://images.unsplash.com/photo-1620914256885-ca3b6e82a0be?q=80&w=600&auto=format&fit=crop";
      case "international":
        return "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop";
      case "warehouse":
        return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop";
      case "business":
        return "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=600&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop";
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FF6B00]/4 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25 inline-block">
              Our Core Grid
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
              Premium Logistics & <br />
              Courier Solutions
            </h2>
          </div>
          <p className="text-site-body text-sm sm:text-base max-w-sm">
            Fully flexible delivery plans designed for individual parcel transfers, immediate rush items, or enterprise freight schedules.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between rounded-2xl bg-site-card-bg border ${
                service.popular ? "border-[#FF6B00]/40 ring-1 ring-[#FF6B00]/20" : "border-site-card-border"
              } hover:border-[#FF6B00]/45 transition duration-300 shadow-xl overflow-hidden`}
            >
              
              {/* Card Top: Image frame */}
              <div className="relative h-48 overflow-hidden bg-slate-900/40">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 hover:rotate-1"
                  referrerPolicy="no-referrer"
                />
                
                {/* Popular badging */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-[#FF6B00]/30 select-none">
                    Most Popular
                  </div>
                )}

                {/* Floating Service Icon logo */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#FF8C39] flex items-center justify-center shadow-lg shadow-[#FF6B00]/25 border-2 border-site-bg group-hover:scale-110 transition duration-300">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Card Body: Info details */}
              <div className="p-6 pt-10 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-site-title group-hover:text-[#FF6B00] transition duration-200">
                    {service.title}
                  </h3>
                  <p className="text-site-body text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom: Pricing & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-site-card-border">
                  <div>
                    <span className="block text-[9px] font-mono uppercase text-site-body/70 tracking-wider">Estimated fare</span>
                    <span className="text-sm font-extrabold text-site-title">{service.price}</span>
                  </div>
                  <a
                    href="#calculator"
                    className="text-xs font-bold text-site-body group-hover:text-[#FF6B00] flex items-center gap-1.5 transition duration-200"
                  >
                    <span>Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
