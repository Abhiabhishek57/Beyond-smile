import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reviews = [
  { name: "Verified Patient", text: "Excellent dental care with thorough explanations. The doctor was very gentle and the whole team made me feel comfortable.", treatment: "General Dentistry", rating: 5 },
  { name: "Verified Patient", text: "Highly professional staff and well behaved and satisfactory dental care. Will definitely come back.", treatment: "Dental Consultation", rating: 5 },
  { name: "Verified Patient", text: "Best place and highly recommend for all. The clinic is clean, hygienic and the doctor is very skilled.", treatment: "Dental Care", rating: 5 },
  { name: "Happy Patient", text: "Very gentle and painless treatment. Everything was explained clearly before starting the procedure.", treatment: "Root Canal", rating: 5 },
  { name: "Satisfied Patient", text: "Got my teeth cleaned here. The experience was great — no pain at all and the staff was very friendly.", treatment: "Teeth Cleaning", rating: 5 },
  { name: "Regular Patient", text: "Been visiting Beyond Smiles for all my family's dental needs. Consistent quality and caring approach every time.", treatment: "Family Dentistry", rating: 5 },
  { name: "Happy Patient", text: "The extraction was completely painless. I was very nervous but the doctor made me feel comfortable throughout.", treatment: "Tooth Extraction", rating: 5 },
  { name: "Grateful Patient", text: "Affordable prices and excellent quality. This is the best dental clinic in Siddhartha Layout area without a doubt.", treatment: "Dental Fillings", rating: 5 },
  { name: "Satisfied Patient", text: "My child had a great experience. The doctor was very patient with kids and made the visit fun.", treatment: "Pediatric Dentistry", rating: 5 },
];

const Reviews = () => (
  <div>
    <section className="bg-navy py-16 md:py-24">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-gold text-gold" />
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">
          5.0 Rating from 107+ Reviews
        </h1>
        <p className="text-navy-foreground/70 max-w-xl mx-auto">
          Don't just take our word for it — hear from our happy patients at Beyond Smiles Dental Clinic.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-xl border bg-card flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-card-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-semibold text-sm text-card-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">Ready to experience the Beyond Smiles difference?</p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Reviews;
