import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const treatments = [
  "Root Canal Treatment",
  "Dental Implants",
  "Teeth Cleaning",
  "Cosmetic Dentistry",
  "Crowns & Bridges",
  "Tooth Extraction",
  "Dental Fillings",
  "Pediatric Dentistry",
  "Teeth Whitening",
  "Dental Checkup",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const email = (formData.get("email") as string).trim();
    const date = formData.get("date") as string;

    if (!name || !phone || !selectedTreatment || !date) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      setSubmitting(false);
      return;
    }

    try {
      const { error: dbError } = await supabase.from("appointments").insert({
        name,
        phone,
        email: email || null,
        treatment: selectedTreatment,
        preferred_date: new Date(date).toISOString(),
      });

      if (dbError) throw dbError;

      await supabase.functions.invoke("send-booking-confirmation", {
        body: { name, phone, email, treatment: selectedTreatment, preferred_date: date },
      });

      toast({
        title: "Appointment Request Sent!",
        description: "We'll confirm your appointment shortly.",
      });

      (e.target as HTMLFormElement).reset();
      setSelectedTreatment("");
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-navy py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">Book an Appointment</h1>
          <p className="text-navy-foreground/70 max-w-xl mx-auto">
            Schedule your visit at Beyond Smile Dental Clinic or call us directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-heading font-bold text-card-foreground">Request Appointment</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your name" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required maxLength={15} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatment">Treatment Needed</Label>
                <Select value={selectedTreatment} onValueChange={setSelectedTreatment} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    {treatments.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date & Time</Label>
                <Input id="date" name="date" type="datetime-local" required />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Sending..." : "Book Appointment"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-5">
                <a href="tel:+918073388638" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Call Us</p>
                    <p className="text-sm text-primary">080733 88638</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/918073388638?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Smile%20Avenue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Quick chat & booking</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground"> Buddha marga, Bannur Rd, Siddhartha Layout, Mysuru, Karnataka 570011</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Sat: 5:30 PM – 9:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border h-[250px]">
              <iframe
                title="Beyond Smile Dental Clinic location"
                src="https://share.google/erhdHQUbzjHFFKl4J"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Need urgent care?</strong> Call us at{" "}
              <a href="tel:+918073388638" className="text-primary font-semibold">078299 01966
</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
