import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      className="py-16 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bright orange-pinkish gradient subscription frame */}
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#FF6B00] via-[#F4511E] to-[#E55A00] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-[#FF6B00]/15 text-center sm:text-left">
          
          {/* Decorative glowing circles inside */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-2xl pointer-events-none translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full filter blur-2xl pointer-events-none -translate-x-20 translate-y-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Column 1: Labels (7 cols wide) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-white text-xs font-mono font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full border border-white/10 inline-block">
                Weekly logistics Digest
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Subscribe to our newsletter
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl">
                Get weekly supply chain reports, courier rate discounts, international transport updates, and trade regulation tips delivered straight to your inbox.
              </p>
            </div>

            {/* Column 2: Inputs (5 cols wide) */}
            <div className="lg:col-span-5 w-full flex flex-col justify-center">
              {subscribed ? (
                <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/25 text-white flex flex-col items-center text-center space-y-3 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-md font-black text-white">Subscription Active!</h4>
                    <span className="block text-xs text-white/90 font-mono mt-1">Please confirm your validation link received inside inbox.</span>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="bg-black/15 backdrop-blur-md p-3 rounded-2xl border border-white/15 flex flex-col sm:flex-row gap-2"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-white/70" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      className="w-full bg-transparent text-white text-sm py-2.5 pl-10 pr-3 border-none outline-none placeholder-white/60 focus:ring-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-[#FF6B00] font-black uppercase text-xs tracking-wider px-6 py-3 sm:py-0.5 rounded-xl transition duration-150 shadow-md transform active:scale-97 text-center select-none cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
