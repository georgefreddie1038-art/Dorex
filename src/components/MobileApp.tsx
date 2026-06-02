import React from "react";
import { Smartphone, BellRing, Route, ShieldAlert, KeyRound, QrCode } from "lucide-react";

export default function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FF6B00]/4 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text descriptions */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25 inline-block">
                Dorex Go App
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
                Manage All shipments <br />
                from your Pocket
              </h2>
            </div>

            <p className="text-site-body text-sm sm:text-base leading-relaxed">
              Never miss a package drop again! Download our iOS or Android app to gain complete command over your incoming deliveries, make digital signature authorizations, and redirect routes instantly.
            </p>

            {/* Feature lists layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-550/20">
                  <Route className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-title mb-1">Live Maps Tracking</h4>
                  <p className="text-xs text-site-body">Review precise coordinates of your courier van on active, interactive maps.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-550/20">
                  <BellRing className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-title mb-1">Instant Push Alerts</h4>
                  <p className="text-xs text-site-body">Receive system-wide alerts the moment a parcel leaves warehouse dock doors.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-505/10 flex items-center justify-center flex-shrink-0 border border-orange-550/20">
                  <KeyRound className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-title mb-1">Digital Signatures</h4>
                  <p className="text-xs text-site-body">Approve deliveries in advance with secure pin numbers or biometric finger signatures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-505/10 flex items-center justify-center flex-shrink-0 border border-orange-550/20">
                  <QrCode className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-title mb-1">Contactless QR Drop</h4>
                  <p className="text-xs text-site-body">Scan QR codes on-screen when couriers handoff, confirming receipt instantly.</p>
                </div>
              </div>

            </div>

            {/* App Store / Google Play Mock links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-site-card-border">
              <a
                href="#app-store"
                className="bg-site-card-bg hover:bg-site-sec-bg text-site-title rounded-xl px-5 py-3 border border-site-card-border flex items-center gap-2.5 transition duration-200"
              >
                <div className="text-left leading-none">
                  <span className="block text-[8px] uppercase tracking-widest text-[#FF6B00] font-mono">Download on the</span>
                  <span className="text-sm font-bold block mt-1">App Store</span>
                </div>
              </a>
              <a
                href="#google-play"
                className="bg-site-card-bg hover:bg-site-sec-bg text-site-title rounded-xl px-5 py-3 border border-site-card-border flex items-center gap-2.5 transition duration-200"
              >
                <div className="text-left leading-none">
                  <span className="block text-[8px] uppercase tracking-widest text-[#FF6B00] font-mono">Download on the</span>
                  <span className="text-sm font-bold block mt-1">Google Play</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Mobile Device Mockup Frame */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="relative w-72 sm:w-[310px] h-[550px] sm:h-[600px] bg-gray-950 rounded-[48px] p-3 border-4 border-slate-705 shadow-2xl flex flex-col justify-between overflow-hidden ring-4 ring-white/5">
              
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5.5 bg-gray-950 rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 rounded-full bg-white/20 mb-1" />
              </div>

              {/* Internal Screen Content */}
              <div className="relative flex-1 bg-[#090D1A] rounded-[40px] overflow-hidden p-4 pt-6 space-y-4 flex flex-col justify-between">
                
                {/* Simulated App Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mt-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-5 h-5 rounded bg-[#FF6B00] flex items-center justify-center">
                      <Route className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-black text-white font-sans">DorexGo</span>
                  </div>
                  <span className="text-[10px] bg-[#FF6B00]/15 text-[#FF6B00] px-2 py-0.5 rounded-full font-mono font-bold">GPS ACTIVE</span>
                </div>

                {/* Map overview simulation */}
                <div className="relative h-44 bg-[#121B35] rounded-2.5xl overflow-hidden border border-white/5 flex items-center justify-center">
                  {/* Visual path vector simulation */}
                  <svg className="absolute inset-0 w-full h-full opacity-60">
                    <line x1="10%" y1="90%" x2="45%" y2="50%" stroke="#FF6B00" strokeWidth="2" strokeDasharray="3" />
                    <line x1="45%" y1="50%" x2="85%" y2="20%" stroke="#FF6B00" strokeWidth="3" />
                    <circle cx="10%" cy="90%" r="5" fill="#4338ca" />
                    <circle cx="45%" cy="50%" r="6" fill="#fbbf24" className="animate-ping" />
                    <circle cx="45%" cy="50%" r="4" fill="#fbbf24" />
                    <circle cx="85%" cy="20%" r="6" fill="#10b981" />
                  </svg>
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-2.5 left-2.5 bg-gray-950/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10 text-left">
                    <span className="block text-[8px] uppercase tracking-wider text-[#FF6B00] font-mono">Live Courier Route</span>
                    <span className="block text-[10px] font-bold text-white">4.2 miles away (9 mins)</span>
                  </div>
                </div>

                {/* Active Tracking Step card element */}
                <div className="bg-white/[0.03] p-3 rounded-2.5xl border border-white/5 space-y-2.5 text-left">
                  <h5 className="text-[11px] font-bold text-white flex items-center justify-between">
                    <span>In-Transit Log</span>
                    <span className="font-mono text-[9px] text-[#FF6B00]">ETA 04:30 PM</span>
                  </h5>
                  
                  <div className="space-y-2 text-[10px]">
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Package registered & scanned in hub</span>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Dispatched via air freight block</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                      <span>Departed Metro distribution terminal</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Push Alert */}
                <div className="bg-gradient-to-r from-amber-500/10 to-[#FF6B00]/10 p-3.5 rounded-2xl border border-[#FF6B00]/25 flex items-start space-x-2.5 text-left">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] mt-1.5 flex-shrink-0 animate-ping" />
                  <div>
                    <span className="block text-[9px] uppercase font-mono font-bold text-[#FF6B00]">New update notification</span>
                    <span className="block text-[11px] font-bold text-white mt-0.5">"Delivery is 3 steps away"</span>
                    <span className="block text-[9px] text-gray-400 mt-1">Please prepare safe delivery signature pin codes.</span>
                  </div>
                </div>

              </div>
              
              {/* Bottom bar indicator */}
              <div className="h-5 flex items-center justify-center">
                <div className="w-28 h-1 rounded-full bg-white/20" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
