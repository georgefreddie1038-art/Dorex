import React, { useState } from "react";
import { 
  TrendingUp, 
  UserPlus, 
  Headphones, 
  ShieldCheck, 
  Check, 
  Target, 
  Zap, 
  ArrowRight,
  Sparkles,
  Users,
  LineChart
} from "lucide-react";

interface GoalItem {
  text: string;
  badge?: string;
}

interface GoalCategory {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  progressColor: string;
  metricLabel: string;
  metricValue: string;
  icon: React.ReactNode;
  accentBg: string;
  accentText: string;
  intro: string;
  items: GoalItem[];
}

export default function StrategicGoals() {
  const [activeTab, setActiveTab] = useState<string>("acquisition");
  const [simulationVolume, setSimulationVolume] = useState<number>(3500);

  const goalCategories: GoalCategory[] = [
    {
      id: "acquisition",
      title: "Customer Growth",
      subtitle: "Customer Acquisition Goals",
      progress: 74,
      progressColor: "bg-[#FF6B00]",
      metricLabel: "Online Bookings YoY",
      metricValue: "+20% to 30%",
      accentBg: "bg-[#FF6B00]/10",
      accentText: "text-[#FF6B00]",
      icon: <UserPlus className="w-5 h-5 text-[#FF6B00]" />,
      intro: "Optimizing our marketing pipeline and local touchpoints to make onboarding seamless for both individual senders and enterprise warehouse accounts.",
      items: [
        { text: "Increase online delivery bookings by 20–30% within the next year.", badge: "Primary Target" },
        { text: "Generate more immediate quote requests from local businesses and individuals.", badge: "Real-time API" },
        { text: "Improve regional web traffic through targeted local Search Engine Optimization (SEO).", badge: "120+ Cities" },
        { text: "Capture high-intent leads using optimized contact forms, instant quote requests, and callback triggers.", badge: "Lead Capture" }
      ]
    },
    {
      id: "sales",
      title: "Solutions & Sales",
      subtitle: "Commercial & Sales Goals",
      progress: 68,
      progressColor: "bg-indigo-550 dark:bg-indigo-400",
      metricLabel: "Contract Conversion",
      metricValue: "88% Target Accuracy",
      accentBg: "bg-indigo-500/10",
      accentText: "text-indigo-550 dark:text-indigo-400",
      icon: <TrendingUp className="w-5 h-5 text-indigo-550 dark:text-indigo-400" />,
      intro: "Structuring dynamic, custom contracts with transparent margins and automated online quote invoicing for prompt cargo dispatches.",
      items: [
        { text: "Provide immediate, fully transparent transit delivery quotes online.", badge: "100% Automated" },
        { text: "Increase digital conversion rates from occasional website visitors to repeat cargo handlers.", badge: "Optimized UX" },
        { text: "Promote structured, recurring delivery contracts for local commercial partners.", badge: "SME Support" },
        { text: "Upsell premium fulfillment services including express, same-day, and delicate handling routes.", badge: "Add-ons" }
      ]
    },
    {
      id: "service",
      title: "Customer Service",
      subtitle: "Service & Support Goals",
      progress: 81,
      progressColor: "bg-emerald-555 dark:bg-emerald-400",
      metricLabel: "Fulfillment Autonomy",
      metricValue: "-40% Phone Queue",
      accentBg: "bg-emerald-500/10",
      accentText: "text-emerald-555 dark:text-emerald-400",
      icon: <Headphones className="w-5 h-5 text-emerald-555 dark:text-emerald-400" />,
      intro: "Fostering client peace of mind with 100% client transparency, clear rates upfront, and autonomous package tracking portals.",
      items: [
        { text: "Minimize telephone inquiry times by displaying extensive clear pricing logs & interactive live FAQ databases.", badge: "Direct Answers" },
        { text: "Deliver unified, real-time cargo checkpoints directly on the website for end-users.", badge: "Track Portal" },
        { text: "Promote digital online scheduling templates, callback triggers, and instant web payment models.", badge: "Self-service" },
        { text: "Maintain client satisfaction ratings with responsive, automated dispatching algorithms.", badge: "Quick Sprints" }
      ]
    },
    {
      id: "brand",
      title: "Brand & Trust",
      subtitle: "Safety & Brand Goals",
      progress: 92,
      progressColor: "bg-cyan-550 dark:bg-cyan-400",
      metricLabel: "Trust Index KPI",
      metricValue: "4.9 Trust Score",
      accentBg: "bg-cyan-500/10",
      accentText: "text-cyan-555 dark:text-cyan-400",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-555 dark:text-cyan-400" />,
      intro: "Cultivating a reliable reputation nationwide. We operate according to strict cargo security standards and TSA-certified transit parameters.",
      items: [
        { text: "Showcase authentic client reviews and commercial success stories directly to new users.", badge: "Verified Reviews" },
        { text: "Highlight complete cargo insurance coverage, active transport licensing, and strict driver safety standards.", badge: "TSA Secure" },
        { text: "Display transparent metropolitan service maps and instant delivery capabilities.", badge: "Clear Coverage" },
        { text: "Cement Dorex nationwide as the absolute preferred, environmentally-mindful premium carrier.", badge: "#1 Preferred" }
      ]
    }
  ];

  const activeCategory = goalCategories.find(c => c.id === activeTab) || goalCategories[0];

  // Helper calculation for the interactive sandbox:
  // Shows how increasing volume under Dorex automated routing cuts dispatch delays and builds traffic bookings
  const simulatedSEOIncrease = Math.round((simulationVolume * 0.12) + 20);
  const simulatedQuotesGenerated = Math.round(simulationVolume * 0.08);
  const simulatedSupportSaves = Math.round(simulationVolume * 0.15);

  return (
    <section 
      id="strategic-blueprint" 
      className="py-24 bg-site-bg border-b border-site-card-border relative overflow-hidden transition-colors duration-300"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF6B00]/3 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-505/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/25 inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Corporate Operations Charter
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-site-title leading-tight">
            Our Strategic Strategic Blueprint & Objectives
          </h2>
          <p className="text-site-body text-sm sm:text-base leading-relaxed">
            Dorex is committed to premium service. We believe transparent, measurable, 
            and audited goals are essential to scale client trust. Here is how we define 
            and fulfill our core operational commitments.
          </p>
        </div>

        {/* Tab Row for Category Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {goalCategories.map((category) => {
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer select-none text-xs sm:text-sm font-semibold capitalize ${
                  isActive 
                    ? "bg-site-card-bg border-[#FF6B00] text-[#FF6B00] ring-1 ring-[#FF6B00]/20 shadow-md font-bold" 
                    : "bg-site-card-bg border-site-card-border text-site-body hover:border-site-body/30 hover:bg-site-sec-bg"
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Primary Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Interactive Strategic Panel */}
          <div className="lg:col-span-8 bg-site-card-bg border border-site-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-300">
            {/* Top row */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-site-card-border">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#FF6B00] block mb-1">
                    Service Standards
                  </span>
                  <h3 className="text-xl font-bold text-site-title">
                    {activeCategory.subtitle}
                  </h3>
                </div>
                <div className={`px-3 py-1.5 rounded-lg ${activeCategory.accentBg} ${activeCategory.accentText} border border-[#FF6B00]/10 flex items-center gap-1.5`}>
                  <Target className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono font-bold uppercase">{activeCategory.metricValue}</span>
                </div>
              </div>

              {/* Goal Description Paragraph */}
              <p className="text-site-body text-sm sm:text-base leading-relaxed pt-2">
                {activeCategory.intro}
              </p>

              {/* Incremental Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {activeCategory.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-site-sec-bg border border-site-card-border rounded-xl space-y-2 hover:border-[#FF6B00]/20 transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-[#FF6B00] transition-colors duration-200">
                        <Check className="w-3.5 h-3.5 text-[#FF6B00] group-hover:text-white transition-colors duration-250" />
                      </div>
                      <span className="text-xs sm:text-sm text-site-title font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                    {item.badge && (
                      <div className="pt-2">
                        <span className="inline-block text-[9px] font-mono tracking-wider uppercase bg-[#FF6B00]/5 text-site-body/70 group-hover:text-[#FF6B00] px-2 py-0.5 rounded border border-site-card-border">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Target Timeline Progress */}
            <div className="mt-8 pt-6 border-t border-site-card-border space-y-3.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-site-body font-semibold">Strategic Deployment Milestone</span>
                <span className="font-mono font-black text-[#FF6B00]">{activeCategory.progress}% Achieved</span>
              </div>
              <div className="w-full h-2.5 bg-site-sec-bg rounded-full overflow-hidden border border-site-card-border">
                <div 
                  className={`h-full ${activeCategory.progressColor} rounded-full transition-all duration-1000 ease-out`} 
                  style={{ width: `${activeCategory.progress}%` }}
                />
              </div>
              <p className="text-[11px] text-site-body/70 italic">
                * Strategic targets are updated and audited quarterly by Dorex Independent Board of Operations.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Strategy Sandbox & KPI Simulator */}
          <div className="lg:col-span-4 bg-site-card-bg border border-site-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B00]/4 rounded-full filter blur-lg" />
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
                  <LineChart className="w-4.5 h-4.5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-title uppercase tracking-wide">
                    Live KPI Estimator
                  </h4>
                  <span className="block text-[10px] text-site-body/60 font-mono">
                    Model business growth curves
                  </span>
                </div>
              </div>

              <p className="text-xs text-site-body leading-relaxed">
                Logistics speed scales with consolidated shipments. Slide the estimated monthly cargo output below to simulate expected digital optimization returns:
              </p>

              {/* Slider Input Block */}
              <div className="space-y-3 bg-site-sec-bg p-4.5 rounded-2xl border border-site-card-border">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-site-body">Monthly Shipments:</span>
                  <span className="text-[#FF6B00]">{simulationVolume.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={simulationVolume}
                  onChange={(e) => setSimulationVolume(parseInt(e.target.value))}
                  className="w-full accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[9px] font-mono text-site-body/50">
                  <span>1,000 min</span>
                  <span>10,000 max</span>
                </div>
              </div>

              {/* Simulated Output Metrics Display */}
              <div className="space-y-3.5 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-site-body flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                    Bookings Growth
                  </span>
                  <span className="font-mono font-bold text-site-title text-right">
                    +{simulatedSEOIncrease}% YoY
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-site-body flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    New Quote Requests
                  </span>
                  <span className="font-mono font-bold text-site-title text-right">
                    ~{simulatedQuotesGenerated} / month
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-site-body flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Support Queue Saved
                  </span>
                  <span className="font-mono font-bold text-site-title text-right">
                    -{simulatedSupportSaves} hrs / month
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Action CTA Prompt */}
            <div className="mt-8 pt-5 border-t border-site-card-border">
              <a
                href="#calculator"
                className="w-full py-3 bg-gradient-to-r from-gray-950 to-slate-900 dark:from-white dark:to-gray-100 dark:text-black text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                <span>Get Instant Online Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
