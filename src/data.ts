import { ServiceItem, FeatureItem, Testimonial, TrackingDetail } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "parcel",
    title: "Parcel Delivery",
    description: "Secure, cost-effective regular packet and parcel delivery. Ideal for daily ecommerce and personal packages.",
    icon: "Package",
    price: "From $5.99",
  },
  {
    id: "express",
    title: "Express Shipping",
    description: "Rapid door-to-door domestic shipment within 1-2 business days with strict arrival deadlines.",
    icon: "Zap",
    price: "From $19.99",
    popular: true,
  },
  {
    id: "sameday",
    title: "Same-Day Delivery",
    description: "Exclusive localized rush courier service ensuring same-day pick and drop within municipal limits.",
    icon: "Clock",
    price: "From $29.99",
  },
  {
    id: "international",
    title: "International Shipping",
    description: "Hassle-free global customs handling, transport, and air freight across 120+ countries.",
    icon: "Globe",
    price: "From $49.99",
  },
  {
    id: "warehouse",
    title: "Warehouse Storage",
    description: "Climate-controlled, monitored secure warehouse logistics and temporary inventory holds.",
    icon: "Database",
    price: "Quote Requested",
  },
  {
    id: "business",
    title: "Business Logistics",
    description: "Optimized enterprise client supply chain, bulk LTL cargo, and custom courier schedules.",
    icon: "Briefcase",
    price: "Custom Pricing",
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "pricing",
    title: "Transparent Pricing",
    description: "No hidden fuel surcharges or surprise volumetric costs. Calculate exactly what you pay in real-time.",
    icon: "DollarSign",
  },
  {
    id: "handling",
    title: "Secure Package Handling",
    description: "Every item is logged, sorted with dual-camera checks, and placed in weather-proof shock absorbers.",
    icon: "ShieldCheck",
  },
  {
    id: "support",
    title: "24/7 Customer Support",
    description: "Live human assistance and constant oversight for urgent shipments, whenever you need them.",
    icon: "Headphones",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Alexander Mercer",
    role: "E-Commerce Director",
    company: "Velo Threads",
    text: "Dorex transformed our fulfillment rate. We shifted to their Same-Day delivery options and our checkout volume spiked by 34%. Their real-time dashboard is flawless.",
    rating: 5,
    avatar: "https://picsum.photos/seed/alex/120/120",
  },
  {
    id: "t2",
    name: "Emilia Tadeshi",
    role: "Supply Chain Manager",
    company: "Nikko Tech",
    text: "Our high-value microchips require delicate handling and strict environment controls. Dorex logistics secure vaults and professional courier service deliver perfection.",
    rating: 5,
    avatar: "https://picsum.photos/seed/emilia/120/120",
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "Operations Head",
    company: "Core Supply Co.",
    text: "Dorex International Shipping handles customs clearances faster than any premium brand we’ve worked with. The tracking is so reliable our buyers never feel left in dark.",
    rating: 5,
    avatar: "https://picsum.photos/seed/marcus/120/120",
  },
];

export const MOCK_TRACKING_DB: Record<string, TrackingDetail> = {
  "DRX-7822-US": {
    id: "DRX-7822-US",
    sender: "Aura Cosmetic Labs (Texas)",
    recipient: "Jane Gallagher (New York)",
    origin: "Houston, TX",
    destination: "New York, NY",
    weight: "2.4 kg",
    speed: "Express Priority",
    status: "In Transit - Out for Delivery Soon",
    progress: 85,
    history: [
      {
        time: "Today, 08:30 AM",
        location: "JFK Distribution Center, NY",
        status: "Sorting Complete",
        details: "Package processed through airport facility; loaded on NY metropolitan local delivery route.",
      },
      {
        time: "Yesterday, 07:15 PM",
        location: "Houston Sort Hub, TX",
        status: "Dispatched",
        details: "Departed Texas air transit hangar bound for New York Metro airport hub.",
      },
      {
        time: "Yesterday, 02:00 PM",
        location: "Houston Central Store, TX",
        status: "Package Collected",
        details: "Courier successfully picked up parcel from merchant supplier's warehouse dock.",
      },
      {
        time: "Yesterday, 10:15 AM",
        location: "Digital Booking",
        status: "Shipment Registered",
        details: "Digital consignment form generated; pickup schedule finalized for evening courier run.",
      },
    ],
  },
  "DRX-0041-GB": {
    id: "DRX-0041-GB",
    sender: "Helix Automotive (Munich)",
    recipient: "Stratford Logistics (London)",
    origin: "Munich, Germany",
    destination: "London, United Kingdom",
    weight: "45.0 kg",
    speed: "Business Freight",
    status: "Customs Cleared",
    progress: 60,
    history: [
      {
        time: "2026-06-02, 06:12 AM",
        location: "Dover Customs Port, UK",
        status: "Regulatory Release",
        details: "Consignment successfully cleared customs checks; transit tariffs cleared in full.",
      },
      {
        time: "2026-06-01, 11:45 PM",
        location: "Calais Freight Terminal, FR",
        status: "En Route to Ferry",
        details: "Truck loaded into channel ferry transport lanes; GPS status active and healthy.",
      },
      {
        time: "2026-05-31, 09:00 AM",
        location: "Munich hub, DE",
        status: "Shipment Loaded",
        details: "Cargo packed onto consolidated freight pallet; outbound custom declaration papers attached.",
      },
    ],
  },
  "DRX-1010-JP": {
    id: "DRX-1010-JP",
    sender: "Kyoto Tea Masters",
    recipient: "Sakura Lounge (San Francisco)",
    origin: "Kyoto, Japan",
    destination: "San Francisco, CA",
    weight: "1.2 kg",
    speed: "Same-Day Air Prime",
    status: "Delivered & Signed",
    progress: 100,
    history: [
      {
        time: "2026-06-01, 04:45 PM",
        location: "San Francisco Marina, CA",
        status: "Successfully Delivered",
        details: "Delivered to reception desk. Handed to Clerk S. Lee. Proof of signature image uploaded.",
      },
      {
        time: "2026-06-01, 01:20 PM",
        location: "SFO Airport Hub, CA",
        status: "Out for Delivery",
        details: "Out of airport custom storage; loaded onto electrical delivery van route.",
      },
      {
        time: "2026-06-01, 05:00 AM",
        location: "Tokyo Haneda Airport, JP",
        status: "Air Cargo Flight Departure",
        details: "Loaded on express freight carriage flights across North Pacific.",
      },
    ],
  },
};
