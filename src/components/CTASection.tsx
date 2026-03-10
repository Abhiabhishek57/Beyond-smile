import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";

const CTASection = () => (
  <section className="py-16 md:py-24 bg-navy">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-4">
        Ready for a Healthier Smile?
      </h2>
      <p className="text-navy-foreground/70 max-w-lg mx-auto mb-8">
        Book your appointment today at Smile Avenue Dental Clinic. Walk-ins welcome during clinic hours.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Appointment
          </Link>
        </Button>
        <Button variant="hero-outline" size="lg" asChild>
          <a href="tel:+918073388638">
            <Phone className="w-5 h-5 mr-2" />
            080733 88638
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
