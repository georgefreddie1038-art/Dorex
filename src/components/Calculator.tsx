import React, { useState } from "react";
import { Calculator as CalcIcon, Scale, LayoutGrid, Zap, HelpCircle, Check, Info } from "lucide-react";

export default function Calculator() {
  // States for interactive variables
  const [origin, setOrigin] = useState("Houston, TX");
  const [destination, setDestination] = useState("New York, NY");
  const [weight, setWeight] = useState(2.5);
  const [length, setLength] = useState(30);
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(15);
  const [speed, setSpeed] = useState("express"); // "parcel" | "express" | "sameday" | "international"
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    basePrice: 0,
    fuelSurcharge: 0,
    handlingFee: 0,
    total: 0,
    estDays: "",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();

    // Complex realistic pricing algorithm mock
    let base = 5.0; // minimum base price

    // Weight factor ($1.8 per kg)
    base += weight * 1.8;

    // Dimensional Volume weight factor (Length * Width * Height / 5000)
    const volWeight = (length * width * height) / 5000;
    base += volWeight * 1.2;

    // Origin/Dest distance mock modifier (length of string as quick seeding)
    const distanceFactor = Math.abs(origin.length - destination.length) * 0.45 + 3.0;
    base += distanceFactor;

    // Speed multiplier
    let speedMult = 1.0;
    let estDays = "3-5 Business Days";

    if (speed === "express") {
      speedMult = 1.8;
      estDays = "1-2 Business Days";
    } else if (speed === "sameday") {
      speedMult = 2.9;
      estDays = "Same-Day (Within 12 Hours)";
    } else if (speed === "international") {
      speedMult = 3.5;
      estDays = "3-4 Business Days (Customs cleared)";
    }

    const unroundedBase = base * speedMult;
    const fuel = unroundedBase * 0.12; // 12% mock surcharge
    const hand = speed === "sameday" ? 8.0 : 3.50; // secure handling
    const total = unroundedBase + fuel + hand;

    setResult({
      basePrice: Math.round(unroundedBase * 100) / 100,
      fuelSurcharge: Math.round(fuel * 100) / 100,
      handlingFee: hand,
      total: Math.round(total * 100) / 100,
      estDays: estDays,
    });
    setCalculated(true);
    setBookingSuccess(false);
  };

  const handleBookConsignment = () => {
    setBookingSuccess(true);
  };

  return (
    <section
      id="calculator"
      className="py-24 bg-site-bg border-t border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative colored glow fields */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-[#FF6B00]/4 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25">
            Interative Cost Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Shipping Calculator & Rates
          </h2>
          <p className="text-site-body text-sm">
            Configure custom parcel parameters and delivery deadlines. Get an instant, transparent quote with zero hidden surcharges.
          </p>
        </div>

        {/* Content Box with glass backdrop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* Glass Form column (8 cols wide on visual desktop) */}
          <div className="lg:col-span-7 bg-site-card-bg rounded-3xl p-6 sm:p-8 border border-site-card-border shadow-2xl flex flex-col justify-between">
            <div className="flex items-center space-x-3 pb-6 border-b border-site-card-border mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center">
                <CalcIcon className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-site-title">Consignment Details</h3>
                <span className="block text-xs text-site-body font-mono">Fill in dimensions and weight</span>
              </div>
            </div>

            <form onSubmit={calculateEstimate} className="space-y-6">
              {/* Origin and Destination Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">Origin City</label>
                  <input
                    type="text"
                    required
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. Houston, TX"
                    className="w-full bg-site-input-bg text-sm text-site-title rounded-xl py-3 px-4 border border-site-input-border focus:border-[#FF6B00]/50 placeholder-site-body/60 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">Destination City</label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. New York, NY"
                    className="w-full bg-site-input-bg text-sm text-site-title rounded-xl py-3 px-4 border border-site-input-border focus:border-[#FF6B00]/50 placeholder-site-body/60 focus:outline-none"
                  />
                </div>
              </div>

              {/* Weight & Dimension Row */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">Weight (kg)</label>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      min="0.1"
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(parseFloat(e.target.value) || 0.1)}
                      className="w-full bg-site-input-bg text-sm text-site-title rounded-xl py-3 px-4 border border-site-input-border focus:border-[#FF6B00]/50 focus:outline-none"
                    />
                    <span className="absolute right-3.5 top-3.5 text-xs text-site-body/60 font-mono font-bold">KG</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">L (cm)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value) || 1)}
                    className="w-full bg-site-input-bg text-sm text-site-title rounded-xl py-3 px-4 border border-site-input-border focus:border-[#FF6B00]/50 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">W (cm)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={width}
                    onChange={(e) => setWidth(parseInt(e.target.value) || 1)}
                    className="w-full bg-site-input-bg text-sm text-site-title rounded-xl py-3 px-4 border border-site-input-border focus:border-[#FF6B00]/50 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">H (cm)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value) || 1)}
                    className="w-full bg-site-input-bg text-sm text-site-title rounded-xl py-3 px-4 border border-site-input-border focus:border-[#FF6B00]/50 focus:outline-none"
                  />
                </div>
              </div>

              {/* speed Select Radio Pills */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase text-site-body tracking-wider font-bold">Delivery Priority Speed</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  <div
                    onClick={() => setSpeed("parcel")}
                    className={`p-3.5 rounded-xl border cursor-pointer text-center select-none transition-all ${
                      speed === "parcel"
                        ? "bg-[#FF6B00]/10 border-[#FF6B00] text-site-title font-bold ring-1 ring-[#FF6B00]/30"
                        : "bg-site-sec-bg border-site-card-border text-site-body hover:border-site-body/40"
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-semibold">Standard</span>
                    <span className="block text-[9px] font-mono opacity-80 mt-1">Budget Saving</span>
                  </div>

                  <div
                    onClick={() => setSpeed("express")}
                    className={`p-3.5 rounded-xl border cursor-pointer text-center select-none transition-all ${
                      speed === "express"
                        ? "bg-[#FF6B00]/10 border-[#FF6B00] text-site-title font-bold ring-1 ring-[#FF6B00]/30"
                        : "bg-site-sec-bg border-site-card-border text-site-body hover:border-site-body/40"
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-semibold">Express</span>
                    <span className="block text-[9px] font-mono opacity-80 mt-1 text-[#FF6B00] font-bold">Save 1-2 Days</span>
                  </div>

                  <div
                    onClick={() => setSpeed("sameday")}
                    className={`p-3.5 rounded-xl border cursor-pointer text-center select-none transition-all ${
                      speed === "sameday"
                        ? "bg-[#FF6B00]/10 border-[#FF6B00] text-site-title font-bold ring-1 ring-[#FF6B00]/30"
                        : "bg-site-sec-bg border-site-card-border text-site-body hover:border-site-body/40"
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-semibold">Same-Day</span>
                    <span className="block text-[9px] font-mono opacity-80 mt-1">Rush Courier</span>
                  </div>

                  <div
                    onClick={() => setSpeed("international")}
                    className={`p-3.5 rounded-xl border cursor-pointer text-center select-none transition-all ${
                      speed === "international"
                        ? "bg-[#FF6B00]/10 border-[#FF6B00] text-site-title font-bold ring-1 ring-[#FF6B00]/30"
                        : "bg-site-sec-bg border-site-card-border text-site-body hover:border-site-body/40"
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-semibold">Global Air</span>
                    <span className="block text-[9px] font-mono opacity-80 mt-1">Int'l Freight</span>
                  </div>

                </div>
              </div>

              {/* Submit trigger */}
              <button
                type="submit"
                className="w-full py-4.5 bg-gradient-to-r from-[#FF6B00] to-[#E55A00] text-white font-bold rounded-xl shadow-lg shadow-[#FF6B00]/15 hover:shadow-[#FF6B00]/25 transition duration-150 transform active:scale-99 text-center text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Search Quote Breakdown</span>
                <Zap className="w-4.5 h-4.5 text-white" />
              </button>
            </form>
          </div>

          {/* Result visual card (5 cols wide on desktop) */}
          <div className="lg:col-span-5 bg-site-card-bg rounded-3xl p-6 sm:p-8 border border-site-card-border shadow-2xl flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 filter blur-xl rounded-full" />
            
            {calculated ? (
              <div className="space-y-6 h-full flex flex-col justify-between">
                
                {/* Title */}
                <div>
                  <h4 className="text-lg font-bold text-site-title mb-2">Quotation invoice</h4>
                  <div className="flex justify-between items-center bg-site-sec-bg px-3 py-1.5 rounded-lg border border-site-card-border text-xs text-site-body">
                    <span className="font-mono">Route: {origin} → {destination}</span>
                  </div>
                </div>

                {/* Pricing Fields Breakdown */}
                <div className="space-y-3.5 border-t border-b border-site-card-border py-4.5 my-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-site-body">Base Postage Charge:</span>
                    <span className="font-mono text-site-title text-right">${result.basePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-site-body">Environmental Fuel Overlay (12%):</span>
                    <span className="font-mono text-site-title text-right">${result.fuelSurcharge}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-site-body">Secure Handling Check:</span>
                    <span className="font-mono text-site-title text-right">${result.handlingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-teal-550 dark:text-teal-400">
                    <span>* Transit Insurance Coverage</span>
                    <span>Included (Free)</span>
                  </div>
                  <div className="pt-3 border-t border-site-card-border flex justify-between items-baseline">
                    <span className="font-black text-site-title text-base">Total Quote:</span>
                    <span className="text-2xl font-black text-[#FF6B00] font-mono">${result.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Estimate Schedule date block */}
                <div className="p-4 bg-site-sec-bg border border-site-card-border rounded-xl flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4.5 h-4.5 text-emerald-555 dark:text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-emerald-555 dark:text-emerald-400 font-bold">Guaranteed Arrival</span>
                    <span className="block font-bold text-site-title text-sm mt-0.5">{result.estDays}</span>
                  </div>
                </div>

                {/* Interactive Proceed Button */}
                {bookingSuccess ? (
                  <div className="p-4.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center rounded-xl space-y-1">
                    <span className="block text-sm font-black">Shipment Registered!</span>
                    <span className="block text-xs font-mono opacity-90">ID: DRX-NEW-9922</span>
                  </div>
                ) : (
                  <button
                    onClick={handleBookConsignment}
                    className="w-full py-4 bg-gradient-to-r from-gray-950 to-slate-900 dark:from-white dark:to-gray-100 hover:brightness-110 active:scale-95 text-white dark:text-black font-extrabold text-sm rounded-xl transition duration-150 cursor-pointer shadow-sm"
                  >
                    Proceed to Booking Order
                  </button>
                )}

              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-site-sec-bg border border-site-card-border flex items-center justify-center animate-pulse">
                  <CalcIcon className="w-8 h-8 text-site-body/60" />
                </div>
                <div>
                  <h4 className="font-bold text-site-title text-md">Awaiting Parameters</h4>
                  <p className="text-site-body text-xs mt-1.5 max-w-xs mx-auto leading-relaxed">
                    Insert your parcel's origin, destination, weight, and speed parameters then press Search Quote to view your dynamic invoice.
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#FF6B00] font-mono">
                  ★ Standard Liability Insurance is fully covered up to $500
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
