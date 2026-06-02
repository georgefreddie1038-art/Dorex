import React, { useState, useEffect } from "react";
import { MOCK_TRACKING_DB } from "../data";
import { TrackingDetail } from "../types";
import { X, Search, ShieldCheck, MapPin, Truck, Box, Check, Calendar, HelpCircle } from "lucide-react";

interface TrackingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackId?: string;
}

export default function TrackingWidget({ isOpen, onClose, initialTrackId = "" }: TrackingWidgetProps) {
  const [trackIdInput, setTrackIdInput] = useState("");
  const [currentShipment, setCurrentShipment] = useState<TrackingDetail | null>(null);
  const [searchError, setSearchError] = useState("");

  // Sync initial track id props if preset
  useEffect(() => {
    if (initialTrackId) {
      setTrackIdInput(initialTrackId);
      handleSearchTrack(initialTrackId);
    }
  }, [initialTrackId]);

  const handleSearchTrack = (id: string) => {
    setSearchError("");
    const trimmed = id.trim().toUpperCase();
    
    if (MOCK_TRACKING_DB[trimmed]) {
      setCurrentShipment(MOCK_TRACKING_DB[trimmed]);
    } else if (trimmed) {
      if (trimmed.length < 5) {
        setSearchError("consignment code too short. Please use e.g. DRX-7822-US");
        return;
      }
      // On-The-Fly Simulation of any arbitrary custom shipment ID requested by client
      const simulatedShipment: TrackingDetail = {
        id: trimmed,
        sender: "Global Electronics Supplies",
        recipient: "Local Fulfillment Warehouse",
        origin: "San Jose, CA",
        destination: "Destination Hub Center",
        weight: "5.8 kg",
        speed: "Priority Express Ground",
        status: "In Transit - Custom Dispatch",
        progress: 70,
        history: [
          {
            time: "Recently scanned, 08:12 AM",
            location: "En Route Metropolitan Hub",
            status: "Simulated Departure Log",
            details: "Shipment scanned through regional sort belts; loaded into outbound courier vehicle.",
          },
          {
            time: "Today, midnight",
            location: "San Jose Sorting Hub, CA",
            status: "Sorting complete",
            details: "Passed strict volumetric checking procedures.",
          },
          {
            time: "Yesterday, 04:00 PM",
            location: "Supplier Hangar Office",
            status: "Sovereign Dispatch Check",
            details: "Package initialized. Manifest details successfully published to database networks.",
          },
        ],
      };
      setCurrentShipment(simulatedShipment);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackIdInput.trim()) {
      handleSearchTrack(trackIdInput.trim());
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative bg-[#0D1224] border border-white/10 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/5 filter blur-3xl rounded-full" />
        
        {/* Close trigger button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition duration-150 cursor-pointer"
          aria-label="Close panel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Section Title */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <Box className="w-5 h-5 text-[#FF6B00]" />
            <span>Dorex Package Tracker</span>
          </h3>
          <p className="text-gray-400 text-xs">
            Review live GPS transit schedules, checkpoints history, and custom recipient signatures.
          </p>
        </div>

        {/* Action input tracker form */}
        <form onSubmit={handleSubmit} className="flex gap-2.5 mb-6 pb-6 border-b border-white/5">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-gray-500" />
            <input
              type="text"
              value={trackIdInput}
              onChange={(e) => setTrackIdInput(e.target.value)}
              placeholder="Input Shipment ID e.g. DRX-7822-US"
              className="w-full bg-black/45 text-white text-sm rounded-xl py-2.5 pl-10 pr-4 border border-white/10 focus:border-[#FF6B00]/40 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FF6B00] hover:bg-[#E55A00] text-white font-bold px-5 rounded-xl text-xs transition duration-150 cursor-pointer"
          >
            Track Cargo
          </button>
        </form>

        {searchError && (
          <div className="p-3 bg-red-500/10 text-red-400 text-xs rounded-xl border border-red-500/15 mb-4">
            {searchError}
          </div>
        )}

        {/* Result Layout */}
        {currentShipment ? (
          <div className="space-y-6">
            
            {/* Package Spec Metadata Row card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/[0.015] border border-white/5 p-4 rounded-2xl text-left text-xs text-gray-400">
              <div>
                <span className="block text-[10px] font-mono uppercase text-gray-500">CONSIGNMENT ID</span>
                <span className="block font-bold text-white mt-0.5">{currentShipment.id}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-gray-500">SPEED CLASS</span>
                <span className="block font-bold mt-0.5 text-[#FF6B00]">{currentShipment.speed}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-gray-500">PARCEL WEIGHT</span>
                <span className="block font-bold text-white mt-0.5">{currentShipment.weight}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-gray-500">STATUS LOG</span>
                <span className="block font-bold text-teal-400 mt-0.5">{currentShipment.status}</span>
              </div>
            </div>

            {/* Progress line indicator */}
            <div className="space-y-2 text-left">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-gray-400">Dispatch Progress</span>
                <span className="text-[#FF6B00]">{currentShipment.progress}% Complete</span>
              </div>
              
              <div className="relative w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FF6B00] to-orange-505 rounded-full transition-all duration-500"
                  style={{ width: `${currentShipment.progress}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>{currentShipment.origin}</span>
                <span>{currentShipment.destination}</span>
              </div>
            </div>

            {/* Checkpoint Timeline Checklist */}
            <div className="text-left space-y-4">
              <h4 className="text-xs font-mono font-black uppercase text-[#FF6B00] tracking-wider">
                Transit Milestones Checkpoints
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
                {currentShipment.history.map((hist, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Node */}
                    <span className={`absolute -left-[23px] top-1.5 w-3 h-3 rounded-full border-2 ${
                      idx === 0 ? 'bg-[#FF6B00] border-[#FF6B00]' : 'bg-gray-800 border-gray-600'
                    }`} />
                    
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xs font-bold text-white">{hist.status}</span>
                        <span className="text-[10px] font-mono text-[#FF6B00]">{hist.time}</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 block mt-0.5">{hist.location}</span>
                      <p className="text-xs text-gray-400 mt-1 leading-normal">{hist.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="py-12 border-t border-white/5 text-center text-gray-400 space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-450">
              <Truck className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Please Input Shipment ID</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                Test tracking with preloaded code: <span className="font-mono text-[#FF6B00] underline font-bold cursor-pointer" onClick={() => { setTrackIdInput("DRX-7822-US"); handleSearchTrack("DRX-7822-US"); }}>DRX-7822-US</span> or try any custom code!
              </p>
            </div>
          </div>
        )}

        {/* Footer info inside Tracking box */}
        <div className="mt-8 border-t border-white/5 pt-4 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-medium cursor-pointer"
          >
            Close Tracker
          </button>
        </div>

      </div>
    </div>
  );
}
