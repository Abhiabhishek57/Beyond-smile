import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, AlertTriangle, Clock, ShieldCheck } from "lucide-react";

const emergencies = [
  { title: "Severe Toothache", desc: "Rinse with warm water. Use dental floss to remove trapped food. Apply cold compress. Call us immediately." },
  { title: "Knocked-Out Tooth", desc: "Pick up the tooth by the crown (not root). Rinse gently. Try to place it back in the socket or keep in milk. Visit us within 30 minutes." },
  { title: "Broken or Chipped Tooth", desc: "Rinse your mouth with warm water. Apply cold compress to reduce swelling. Save any broken pieces. Call us for an urgent appointment." },
  { title: "Lost Filling or Crown", desc: "Apply clove oil to sensitive areas. Use temporary dental cement from a pharmacy. Visit us as soon as possible for permanent restoration." },
  { title: "Dental Abscess", desc: "Rinse with warm salt water multiple times. Do not apply aspirin to the gum. Seek immediate dental care — an abscess can be serious." },
  { title: "Bleeding Gums", desc: "Rinse with salt water. Apply gentle pressure with clean gauze. If bleeding doesn't stop within 20 minutes, call us immediately." },
];

const Emergency = () => (
  <div>
    <section className="bg-navy py-16 md:py-24">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-gold">
          <AlertTriangle className="w-6 h-6" />
          <span className="text-sm font-semibold tracking-wide uppercase">Emergency Dental Care</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">
          Dental Emergency? We're Here to Help
        </h1>
        <p className="text-navy-foreground/70 max-w-xl mx-auto mb-8">
          Don't panic. Call us immediately for urgent dental care at Beyond Smiles Dental Clinic, Mysuru.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+917829901966">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 078299 01966
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://wa.me/917829901966?text=URGENT%3A%20I%20need%20emergency%20dental%20care" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Emergency
            </a>
          </Button>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Common Dental Emergencies
          </h2>
          <p className="text-muted-foreground">
            Here's what to do while you're on your way to see us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencies.map((e) => (
            <div key={e.title} className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-6 rounded-xl bg-card border">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Clinic Hours</h3>
              <p className="text-sm text-muted-foreground">Mon – Sat: 5:30 PM – 9:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              <p className="text-xs text-primary font-medium mt-2">Call for emergency availability outside these hours</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 rounded-xl bg-card border">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Why Choose Us for Emergencies?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Quick response and priority scheduling</li>
                <li>• Advanced pain management</li>
                <li>• Modern sterilization protocols</li>
                <li>• Experienced emergency dental team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Emergency;
