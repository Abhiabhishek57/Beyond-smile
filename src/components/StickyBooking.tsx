import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

const StickyBooking = () => (
  <div className="fixed bottom-6 right-6 z-50 md:hidden">
    <Button variant="hero" size="lg" className="rounded-full shadow-2xl px-6" asChild>
      <Link to="/contact">
        <CalendarCheck className="w-5 h-5 mr-2" />
        Book Now
      </Link>
    </Button>
  </div>
);

export default StickyBooking;
