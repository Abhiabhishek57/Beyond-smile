import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-navy">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Modern dental treatment room at Beyond Smiles Dental Clinic" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
    </div>
    <div className="container relative z-10 py-20 md:py-32 lg:py-40">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-2 text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="text-sm font-medium text-navy-foreground/80 ml-1">5.0 from 107+ reviews</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground leading-tight">
          Exceptional Dental Care in <span className="text-primary">Mysuru</span>
        </h1>
        <p className="text-lg text-navy-foreground/75 max-w-xl">
          Advanced dental treatments with compassionate care. From routine cleanings to cosmetic transformations — your smile is in safe hands at Beyond Smiles.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="tel:+917829901966">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
