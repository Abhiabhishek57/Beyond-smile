import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/917829901966?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Beyond%20Smiles%20Dental%20Clinic"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-white" />
    <span className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat on WhatsApp
    </span>
  </a>
);

export default WhatsAppButton;
