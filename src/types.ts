export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  price: string;
  popular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStep {
  id: number;
  label: string;
  title: string;
  description: string;
  status: "completed" | "active" | "pending";
  timestamp?: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface TrackingDetail {
  id: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  weight: string;
  speed: string;
  status: string;
  progress: number; // 0 to 100
  history: {
    time: string;
    location: string;
    status: string;
    details: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  time: string;
}
