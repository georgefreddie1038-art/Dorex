import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, HelpCircle, Package, ArrowRight, CornerDownLeft } from "lucide-react";
import { ChatMessage } from "../types";

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function AIChatbot({ isOpen, onClose, onOpen }: AIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      content: "Hello! I am **Dorex AI**, your premium logistics helper. Ask me anything about our shipping methods, rates, parcel safety customs clearances, or box regulations. \n\nHow can I help you transport your cargo today?",
      time: "Just Now",
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const threadEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll threads to bottom
  useEffect(() => {
    if (threadEndRef.current) {
      threadEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setLoading(true);

    try {
      // Map history for full multi-turn conversational capacity
      const apiHistory = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: apiHistory,
        }),
      });

      if (!res.ok) {
        throw new Error("Local endpoint offline. Please verify full-stack connection dev parameters.");
      }

      const data = await res.json();
      
      const modelMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: data.text || "I apologize, but I did not receive a proper feedback from the dispatcher cores.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err: any) {
      console.error("[Chat Communication Failure]:", err);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: `**[Offline Assistant Helper Mode]** I could not link with Dorex global database. \n\nWe provide **Same-Day Local ($29)**, **National Express ($19)**, and **Secure Parcel ($5.99)** delivery formats. To search and track live packages, enter the shipment code **"DRX-7822-US"** into our master tracking search bar.`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  const presetSuggestions = [
    "What is Same-Day delivery?",
    "Fragile package precautions?",
    "Insurance coverage limits?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Active Trigger Bubble */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF6B00] to-[#FF8C39] flex items-center justify-center text-white shadow-xl shadow-[#FF6B00]/40 transition hover:brightness-110 active:scale-90 hover:rotate-6 transform duration-300 pointer-events-auto cursor-pointer"
          aria-label="Open shipping chat assistant"
        >
          <MessageSquare className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-905 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-905" />
        </button>
      )}

      {/* Primary chat window container */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-[#0D1224] border border-white/10 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden relative backdrop-blur-md">
          {/* Accent glow corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 filter blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-[#121B35] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-left">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center border border-[#FF6B00]/30 mr-1">
                  <Package className="w-4.5 h-4.5 text-[#FF6B00]" />
                </div>
                <span className="absolute bottom-0 right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-gray-900" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Dorex AI Mascot</h4>
                <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider">Transit Assistant Active</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              aria-label="Collapse panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Section */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/15">
            {messages.map((m) => {
              const isModel = m.role === "model";
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${isModel ? "justify-start text-left" : "justify-end text-right"}`}
                >
                  {isModel && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-black text-[#FF6B00]">DRX</span>
                    </div>
                  )}
                  
                  <div className="max-w-[80%] space-y-1">
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-xs leading-relaxed ${
                        isModel
                          ? "bg-white/[0.035] text-gray-205 border border-white/5"
                          : "bg-gradient-to-r from-[#FF6B00] to-[#E55A00] text-white font-medium"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {/* Simple custom markdown renderer logic inside box */}
                      {m.content.includes("**") ? (
                        m.content.split("**").map((part, index) => 
                          index % 2 === 1 ? <strong key={index} className="font-extrabold text-[#FF6B00]">{part}</strong> : part
                        )
                      ) : (
                        m.content
                      )}
                    </div>
                    <span className="block text-[9px] text-gray-500 font-mono tracking-wider px-1">
                      {m.time}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* active Typing Indicator */}
            {loading && (
              <div className="flex items-start gap-2.5 justify-start text-left">
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="text-[10px] font-black text-gray-400">...</span>
                </div>
                <div className="bg-white/5 py-2.5 px-3.5 rounded-2xl border border-white/5">
                  <div className="flex space-x-1.5 items-center h-4 py-2 px-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={threadEndRef} />
          </div>

          {/* Quick Suggestions Pointers */}
          <div className="px-4 py-2 border-t border-white/5 bg-black/25 flex flex-wrap gap-1.5 justify-center">
            {presetSuggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(s)}
                className="text-[9px] sm:text-[10px] font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-[#FF6B00]/20 rounded-full px-2.5 py-1 transition border border-white/5 outline-none cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Chat Form Footer input fields */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-gray-950 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Dorex AI anything..."
              className="flex-1 bg-black/45 text-white text-xs sm:text-xs rounded-xl py-2.5 px-3 border border-white/5 focus:border-[#FF6B00]/40 outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || loading}
              className="w-9 h-9 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] disabled:bg-gray-800 disabled:text-gray-600 text-white flex items-center justify-center transition duration-150 cursor-pointer flex-shrink-0"
              aria-label="Send query message"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
