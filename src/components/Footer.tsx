import React from "react";
import { Package, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Parcel Delivery", href: "#services" },
    { name: "Express Shipping", href: "#services" },
    { name: "Same-Day Delivery", href: "#services" },
    { name: "International Cargo", href: "#services" },
    { name: "Warehouse Storage", href: "#services" },
    { name: "Business Logistics", href: "#services" },
  ];

  const quickLinks = [
    { name: "Company Profile", href: "#about" },
    { name: "Core Features", href: "#features" },
    { name: "Delivery Timeline", href: "#process" },
    { name: "Fares Calculator", href: "#calculator" },
    { name: "Client Testimonials", href: "#testimonials" },
    { name: "Mobile Application", href: "#mobile-app" },
  ];

  return (
    <footer className="bg-site-bg border-t border-site-card-border pt-10 pb-10 relative overflow-hidden text-left transition-colors duration-300">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF6B00]/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top block mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols wide) */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className="flex items-center space-x-2 cursor-pointer group inline-block"
              onClick={scrollToTop}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FF6B00] to-[#FF8C39] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20 group-hover:rotate-6 transition-all">
                <Package className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-site-title block">
                  DOREX<span className="text-[#FF6B00] font-black italic">.</span>
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-[#FF6B00] uppercase">
                  Premium Logistics
                </span>
              </div>
            </div>

            <p className="text-site-body text-xs sm:text-sm leading-relaxed max-w-sm">
              We operate nationwide, delivering premium, secure cargo transport with real-time GPS tracking logs, climate containment modules, custom pricing estimations, and 24/7 dedicated support desk help.
            </p>

            {/* Social Handles */}
            <div className="flex items-center space-x-3">
              <a
                href="#insta"
                className="w-10 h-10 bg-site-card-bg hover:bg-[#FF6B00] hover:text-white rounded-xl border border-site-card-border flex items-center justify-center text-site-body transition duration-200"
                aria-label="Instagram handle"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="#fb"
                className="w-10 h-10 bg-site-card-bg hover:bg-[#FF6B00] hover:text-white rounded-xl border border-site-card-border flex items-center justify-center text-site-body transition duration-200"
                aria-label="Facebook handle"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-site-card-bg hover:bg-[#FF6B00] hover:text-white rounded-xl border border-site-card-border flex items-center justify-center text-site-body transition duration-200"
                aria-label="Twitter handle"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols wide on desktop) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-site-title font-black">
              Company Info
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-site-body hover:text-[#FF6B00] transition duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services categories (2.5 cols wide on desktop) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-site-title font-black">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {services.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-site-body hover:text-[#FF6B00] transition duration-150"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts (3 cols wide) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-site-title font-black">
              Get in Touch
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm text-site-body">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <span>
                  4820 Executive Boulevard, <br />
                  Suite 912, Houston, TX 77001
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4.5 h-4.5 text-[#FF6B00] flex-shrink-0" />
                <span className="font-mono">+1 (800) 555-DRX-LOGS</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4.5 h-4.5 text-[#FF6B00] flex-shrink-0" />
                <span className="font-mono">ops@dorex-courier.com</span>
              </div>

            </div>

            {/* Regulatory badge display */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-transparent p-1 px-3 border border-emerald-500/15 rounded-lg select-none">
                <ShieldCheck className="w-4 h-4 text-emerald-555 dark:text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-555 dark:text-emerald-400 font-bold uppercase tracking-wider">TSA Certified Carrier</span>
              </div>
            </div>

          </div>

        </div>

        {/* Separator and Credits */}
        <div className="border-t border-site-card-border pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-site-body/60">
          <div>
            © {currentYear} <span className="text-site-title font-bold">Dorex Courier & Logistics Co.</span> All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-site-title transition duration-150">Privacy Standard</a>
            <a href="#terms" className="hover:text-site-title transition duration-150">Taxes & Tarifs Info</a>
            <a href="#cookies" className="hover:text-site-title transition duration-150">Internal Cookie Policies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
