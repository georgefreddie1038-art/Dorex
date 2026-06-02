import React, { useState, useEffect } from "react";
import { Award, CheckSquare, Smile, ShieldAlert } from "lucide-react";

export default function WhyChooseUs() {
  // Counters states
  const [deliveries, setDeliveries] = useState(48900);
  const [satisfaction, setSatisfaction] = useState(85);
  const [cities, setCities] = useState(100);

  useEffect(() => {
    // Custom ticker animations on mount
    const dInterval = setInterval(() => {
      setDeliveries((prev) => {
        if (prev >= 53120) {
          clearInterval(dInterval);
          return 53120;
        }
        return prev + 115;
      });
    }, 20);

    const sInterval = setInterval(() => {
      setSatisfaction((prev) => {
        if (prev >= 98) {
          clearInterval(sInterval);
          return 98;
        }
        return prev + 1;
      });
    }, 45);

    const cInterval = setInterval(() => {
      setCities((prev) => {
        if (prev >= 125) {
          clearInterval(cInterval);
          return 125;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(dInterval);
      clearInterval(sInterval);
      clearInterval(cInterval);
    };
  }, []);

  const stats = [
    {
      id: 1,
      title: "Deliveries Dispatched",
      value: `${deliveries.toLocaleString()}+`,
      icon: <Award className="w-5 h-5 text-[#FF6B00]" />,
      desc: "Packages successfully transported door-to-door with comprehensive telemetry scans.",
    },
    {
      id: 2,
      title: "Client Satisfaction",
      value: `${satisfaction}%`,
      icon: <Smile className="w-5 h-5 text-indigo-550 dark:text-indigo-400" />,
      desc: "Highly-rated commercial and sovereign checkout fulfillments verified by Trustpilot and Google Reviews.",
    },
    {
      id: 3,
      title: "Cities Covered Network",
      value: `${cities}+`,
      icon: <CheckSquare className="w-5 h-5 text-cyan-550 dark:text-cyan-400" />,
      desc: "Fully active local distribution depots and specialized metropolitan cargo lanes.",
    },
    {
      id: 4,
      title: "Outbound Support Run",
      value: "24/7/365",
      icon: <ShieldAlert className="w-5 h-5 text-emerald-555 dark:text-emerald-400" />,
      desc: "Our systems and logistics help desks are fully operational throughout holidays and weekends.",
    },
  ];

  return (
    <section
      id="statistics"
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25">
            Key Corporate Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Our Operational Numbers
          </h2>
          <p className="text-site-body text-sm">
            We operate with transparency at every scale. Here is a review of our global performance metrics.
          </p>
        </div>

        {/* Stats Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-site-card-bg border border-site-card-border rounded-2xl p-6.5 hover:border-site-title/20 transition duration-300 relative overflow-hidden group hover:-translate-y-1 shadow-sm"
            >
              {/* Corner Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B00]/25 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Icon frame */}
              <div className="w-10 h-10 rounded-lg bg-site-sec-bg border border-site-card-border flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                {stat.icon}
              </div>

              {/* Title & Values */}
              <span className="block text-3xl font-black text-site-title tracking-tight mb-2.5 font-mono">
                {stat.value}
              </span>
              <h4 className="text-sm font-bold text-site-title/90 mb-2 font-sans tracking-wide">
                {stat.title}
              </h4>
              <p className="text-site-body text-xs leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
