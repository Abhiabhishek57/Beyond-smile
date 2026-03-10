import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold">S</span>
            </div>
            <span className="font-heading font-bold text-lg">Smile Avenue</span>
          </div>
          <p className="text-sm text-navy-foreground/60 leading-relaxed">
            Mysuru's trusted dental clinic providing comprehensive oral healthcare with advanced technology and compassionate care. 5.0 rated with 107+ reviews.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/60">
            <li><Link to="/services" className="hover:text-primary transition-colors">Root Canal Treatment</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Dental Implants</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Teeth Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Tooth Extraction</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/60">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/reviews" className="hover:text-primary transition-colors">Patient Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/60">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              #492/J, 12th Cross, Shivaji Rd, N R Mohalla, Mysuru
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href="tel:+918073388638" className="hover:text-primary transition-colors">080733 88638</a>
            </li>
          </ul>
          <Button variant="nav" size="sm" className="mt-4" asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 mt-10 pt-6 text-center text-xs text-navy-foreground/40">
        © {new Date().getFullYear()} Smile Avenue Dental Clinic, Mysuru. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
