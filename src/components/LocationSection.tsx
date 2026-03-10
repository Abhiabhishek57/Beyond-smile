import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";

const LocationSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-semibold text-primary tracking-wide uppercase">Visit Us</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
          Find Us in Mysuru
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden shadow-lg border h-[350px]">
          <iframe
            title="Smile Avenue Dental Clinic location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3!2d76.64!3d12.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sN+R+Mohalla%2C+Mysuru!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">#492/J, Ground Floor, 12th Cross, Shivaji Rd, near Sky Fitness Gym, N R Mohalla, Mysuru, Karnataka 570007</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
              <p className="text-sm text-muted-foreground">Mon – Sat: 5:30 PM – 9:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <PhoneIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Contact</h3>
              <a href="tel:+918073388638" className="text-sm text-primary font-medium">080733 88638</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
