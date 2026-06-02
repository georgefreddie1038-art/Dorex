import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Initialize Gemini safety guard and client
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API endpoint for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
      }

      if (!ai) {
        // Fallback responses if API key is missing
        const fallbackText = `Welcome to Dorex Logistics! [Offline Assistant Mode] I can help you estimate prices and options. Our primary services are Same-Day Delivery ($15+), Express Shipping ($25+), and Secure Parcel Delivery ($7+). Please track any sample package with ID e.g. "DRX-7822-US". To enable fully fluent conversational AI, please attach your GEMINI_API_KEY in the Secrets panel.`;
        res.json({ text: fallbackText });
        return;
      }

      const systemInstruction = 
        "You are 'Dorex AI', the highly efficient logistics and shipping mascot for Dorex Courier & Logistics.\n" +
        "You help clients select logistics solutions, calculate shipping timelines, explain real-time tracking updates, advise on customs/international delivery, and select package sizes.\n" +
        "Dorex Courier & Logistics Services:\n" +
        "- Parcel Delivery: Secure cost-effective delivery (starts at $5.99)\n" +
        "- Express Shipping: Rapid door-to-door transit within 1-2 days (starts at $19.99)\n" +
        "- Same-Day Delivery: Premium localized rush courier (starts at $29.99)\n" +
        "- International Shipping: Customs-optimized global courier network delivery\n" +
        "- Warehouse Storage: Monitored storage and secure vaulting\n" +
        "- Business Logistics: Custom shipping, distribution, and freight optimization\n\n" +
        "Always sound helpful, polite, structured with clean Markdown spacing, premium courier branding, and concise. Advise them you can quote based on weight, origin, destination, and dimensions.";

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction,
        },
        history: history ? history.map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        })) : []
      });

      const response = await chat.sendMessage({ message });
      res.json({ text: response.text || "I apologize, but I could not formulate a reply. Please try again." });
    } catch (error: any) {
      console.error("[Dorex API Error]:", error);
      res.status(500).json({ error: error?.message || "An internal error occurred with Dorex AI systems." });
    }
  });

  // Vite Integration for Serving UI
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dorex Full-Stack server is live at http://localhost:${PORT}`);
  });
}

startServer();
