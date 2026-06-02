import React, { useState } from "react";
import { Globe, MapPin, Activity, HelpCircle, ShieldCheck } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  coordinates: { x: string; y: string };
  region: string;
  status: "Normal" | "Peak" | "Maintenance";
  outboundFlights: number;
}

export default function WorldMap() {
  const [selectedHub, setSelectedHub] = useState<Hub | null>(null);

  // Global hub markers mapped to our coordinate space
  const hubs: Hub[] = [
    { id: "h1", name: "Houston Hub (HQ)", coordinates: { x: "25%", y: "45%" }, region: "North America", status: "Normal", outboundFlights: 142 },
    { id: "h2", name: "London Heathrow Depot", coordinates: { x: "48%", y: "30%" }, region: "Europe / UK", status: "Peak", outboundFlights: 98 },
    { id: "h3", name: "Munich Sort Airport", coordinates: { x: "53%", y: "34%" }, region: "West Europe", status: "Normal", outboundFlights: 76 },
    { id: "h4", name: "Tokyo Narita Hangar", coordinates: { x: "82%", y: "42%" }, region: "Asia Pacific", status: "Normal", outboundFlights: 120 },
    { id: "h5", name: "Sydney Kingsford Air Gate", coordinates: { x: "88%", y: "82%" }, region: "Oceania", status: "Normal", outboundFlights: 45 },
    { id: "h6", name: "São Paulo Cargo Terminal", coordinates: { x: "36%", y: "75%" }, region: "Latin America", status: "Maintenance", outboundFlights: 22 },
  ];

  return (
    <section id="world-map" className="py-24 bg-site-bg relative overflow-hidden transition-colors duration-300">
      {/* Decorative vector overlays */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FF6B00]/4 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25">
            Active Global Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Interactive Delivery Map
          </h2>
          <p className="text-site-body text-sm">
            Interactive tracking of major air corridors and metropolitan sorting offices. Click on any green hub point to check load ratings.
          </p>
        </div>

        {/* Outer Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Map display (9 cols wide) */}
          <div className="lg:col-span-8 bg-site-card-bg border border-site-card-border rounded-3xl p-6 shadow-2xl relative min-h-[380px] sm:min-h-[460px] overflow-hidden flex flex-col justify-between">
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 bg-site-bg/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-site-card-border text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-site-title font-mono font-bold">LIVE TELEMETRY BROADCAST</span>
            </div>

            {/* Map Frame Drawing */}
            <div className="relative w-full aspect-[16/9] bg-site-sec-bg rounded-2.5xl flex items-center justify-center overflow-hidden border border-site-card-border">
              
              {/* Minimal Vector Sketch of Continents backdrops */}
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 dark:opacity-10 text-slate-400 dark:text-slate-600" fill="currentColor">
                {/* Simplified North America */}
                <path d="M 120,120 Q 200,100 240,150 T 320,180 T 260,260 T 150,220 Z" />
                {/* South America */}
                <path d="M 260,260 Q 300,320 340,380 T 310,480 T 250,380 Z" />
                {/* Eurasia & Africa */}
                <path d="M 450,150 Q 550,80 680,120 T 800,180 T 900,150 T 880,240 T 780,260 T 680,300 M 440,240 Q 550,280 620,380 T 510,480 T 450,380 Z" />
                {/* Australia */}
                <path d="M 780,380 Q 840,400 880,440 T 750,460 Z" />
              </svg>

              {/* Connected Line paths */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Line: Houston (25%, 45% -> 250, 225) to London (48%, 30% -> 480, 150) */}
                <path d="M 250,225 Q 365,160 480,150" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4" className="opacity-45" />
                {/* Line: London (480, 150) to Tokyo (820, 210) */}
                <path d="M 480,150 Q 650,125 820,210" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4" className="opacity-45" />
                {/* Line: Tokyo (820, 210) to Sydney (880, 410) */}
                <path d="M 820,210 Q 850,310 880,410" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4" className="opacity-25" />
                {/* Line: Houston (250, 225) to Tokyo (820, 210) */}
                <path d="M 250,225 Q 535,100 820,210" fill="none" stroke="#818cf8" strokeWidth="1.2" strokeDasharray="3" className="opacity-35" />
              </svg>

              {/* Pulsating air routes animated trackers points */}
              <div className="absolute top-[32%] left-[34%] w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              <div className="absolute top-[28%] left-[62%] w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-[66%] left-[32%] w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '2s' }} />

              {/* Render Hub points markers */}
              {hubs.map((hub) => {
                const isSelected = selectedHub?.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: hub.coordinates.x, top: hub.coordinates.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                    aria-label={`Select hub ${hub.name}`}
                  >
                    <span className={`absolute inset-0 rounded-full bg-emerald-500/25 ${isSelected ? 'scale-250 animate-ping' : 'scale-180 group-hover:scale-220 animate-pulse'}`} />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-950 transition-all ${isSelected ? 'bg-[#FF6B00]' : 'bg-emerald-400 group-hover:bg-[#FF6B00]'}`} />
                  </button>
                );
              })}

            </div>

            {/* Quick status labels */}
            <div className="flex flex-wrap items-center justify-between text-xs text-site-body/80 border-t border-site-card-border pt-4 mt-2">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-450 rounded-full" /> Operational Hubs</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#FF6B00] rounded-full" /> Active Aircraft</span>
              </div>
              <span className="font-mono text-[10px]">Refresh interval: Every 15 seconds</span>
            </div>

          </div>

          {/* Right Column: Selected hub card statistics details (4 cols wide) */}
          <div className="lg:col-span-4 h-full flex flex-col justify-center">
            {selectedHub ? (
              <div className="bg-site-card-bg border border-[#FF6B00]/40 rounded-3xl p-6.5 shadow-2xl relative space-y-5 animate-fade-in text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-widest text-[#FF6B00] font-bold">Dorex Logistics Core</span>
                    <h3 className="text-lg font-bold text-site-title mt-1">{selectedHub.name}</h3>
                  </div>
                  <span className={`text-[9px] font-mono font-black uppercase px-2.5 py-1.5 rounded-full ${
                    selectedHub.status === 'Normal' ? 'bg-emerald-500/10 text-emerald-500' :
                    selectedHub.status === 'Peak' ? 'bg-[#FF6B00]/10 text-[#FF6B00]' : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    {selectedHub.status} Load
                  </span>
                </div>

                <div className="space-y-4 border-t border-b border-site-card-border py-4 my-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-site-body">Location Base:</span>
                    <span className="text-site-title font-semibold">{selectedHub.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-site-body">Outbound Cargo Flights:</span>
                    <span className="text-site-title font-mono font-bold">{selectedHub.outboundFlights} flights/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-site-body">Logistics Sorting Delay:</span>
                    <span className="text-emerald-500 font-mono font-bold">&lt; 12 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-site-body">Live GPS Integrity:</span>
                    <span className="text-site-title font-bold">100% Locked</span>
                  </div>
                </div>

                <div className="p-3 bg-site-sec-bg rounded-xl flex items-center space-x-2.5 border border-site-card-border text-xs text-site-body">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>TSA secured and hazardous transport approved facility safety.</span>
                </div>

                <button
                  onClick={() => setSelectedHub(null)}
                  className="w-full py-2.5 bg-site-sec-bg hover:bg-site-card-border text-site-title rounded-xl text-xs border border-site-card-border transition duration-150 cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>
            ) : (
              <div className="bg-site-card-bg border border-site-card-border rounded-3xl p-8 text-center text-site-body space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-site-sec-bg border border-site-card-border flex items-center justify-center mx-auto text-gray-350">
                  <Globe className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 className="font-bold text-site-title text-md">Hub Statistics</h4>
                  <p className="text-xs text-site-body mt-2 max-w-xs mx-auto leading-relaxed">
                    Select any green geographic dispatcher hub on the interactive map plane to inspect operations throughput records.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
