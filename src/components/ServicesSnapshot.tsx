import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Sparkles, Smile, ShieldCheck, Crown, Baby } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Root Canal Treatment", desc: "Painless, advanced root canal therapy to save your natural teeth." },
  { icon: ShieldCheck, title: "Dental Implants", desc: "Permanent tooth replacements that look and feel natural." },
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional scaling and polishing for healthy gums." },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Smile makeovers with veneers, bonding and whitening." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Durable restorations to repair damaged or missing teeth." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, child-friendly dental care for little smiles." },
];

const ServicesSnapshot = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-semibold text-primary tracking-wide uppercase">Our Services</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
          Comprehensive Dental Care
        </h2>
        <p className="mt-3 text-muted-foreground">
          From preventive care to advanced treatments, we provide everything your smile needs under one roof.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSnapshot;
