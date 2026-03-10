import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Sparkles, Smile, ShieldCheck, Crown, Baby, Scan, Scissors, Sun, Layers, HeartPulse, Users } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    desc: "Save your natural tooth with our painless, modern root canal therapy. Using advanced instruments and techniques, we ensure precise treatment with minimal discomfort.",
    keywords: "Root canal treatment in Mysuru",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    desc: "Replace missing teeth permanently with implants that look, feel, and function like natural teeth. Long-lasting results with expert placement.",
    keywords: "Dental implants Mysuru",
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning & Scaling",
    desc: "Professional deep cleaning to remove plaque, tartar, and stains. Regular scaling helps prevent gum disease and keeps your smile bright.",
    keywords: "Teeth cleaning Mysuru",
  },
  {
    icon: Scissors,
    title: "Wisdom Tooth Extraction",
    desc: "Safe and painless wisdom tooth removal with modern anesthesia. Our experienced team handles even complex impacted tooth extractions with care.",
    keywords: "Wisdom tooth removal Mysore",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    desc: "Restore damaged teeth or replace missing ones with durable, natural-looking crowns and bridges crafted with precision.",
    keywords: "Dental crowns Mysuru",
  },
  {
    icon: Layers,
    title: "Dental Fillings",
    desc: "High-quality tooth-colored fillings to restore cavities and damaged teeth. Durable, aesthetic, and long-lasting results.",
    keywords: "Dental fillings Mysuru",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with bonding, reshaping, and complete smile makeovers. Treatments tailored to your unique facial aesthetics.",
    keywords: "Cosmetic dentistry Mysuru",
  },
  {
    icon: Scan,
    title: "Dental Checkup",
    desc: "Comprehensive general dental checkups to assess your oral health, detect issues early, and create a personalized care plan.",
    keywords: "Dental checkup Mysuru",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Child-friendly dental care in a fun, non-threatening environment. From first visits to cavity prevention, we make dental visits enjoyable for kids.",
    keywords: "Pediatric dentist Mysuru",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    desc: "Professional whitening treatments that deliver dramatic results. Safe, effective, and long-lasting brightness for a confident smile.",
    keywords: "Teeth whitening Mysuru",
  },
  {
    icon: Users,
    title: "Family Dental Care",
    desc: "Complete dental care for the whole family under one roof. From toddlers to grandparents, we provide personalized treatments for every age group.",
    keywords: "Family dentist Mysuru",
  },
  {
    icon: HeartPulse,
    title: "Emergency Dental Care",
    desc: "Immediate attention for dental emergencies including severe toothache, broken teeth, and dental trauma. Call us for urgent appointments.",
    keywords: "Emergency dentist Mysuru",
  },
];

const Services = () => (
  <div>
    <section className="bg-navy py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">Our Services</h1>
        <p className="text-navy-foreground/70 max-w-xl mx-auto">
          Comprehensive dental treatments for the whole family, delivered with advanced technology and gentle care at Beyond Smiles.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container space-y-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-[auto_1fr] gap-6 p-6 md:p-8 rounded-xl border bg-card hover:shadow-md transition-shadow ${
              i % 2 === 0 ? "" : "md:grid-cols-[1fr_auto] md:text-right"
            }`}
          >
            <div className={`w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <div className={i % 2 !== 0 ? "md:order-1" : ""}>
              <h2 className="text-xl font-heading font-bold text-card-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <Button variant="default" size="sm" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
