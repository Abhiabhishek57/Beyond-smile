import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Happy Patient",
    text: "Azar doctor gave best service and guided me well and he's very cool.",
    treatment: "General Dentistry",
  },
  {
    name: "Satisfied Client",
    text: "Highly professional staff and well behaved and satisfactory dental care.",
    treatment: "Dental Consultation",
  },
  {
    name: "Loyal Patient",
    text: "Best place and highly recommend for all. The clinic is clean and the staff is very friendly.",
    treatment: "Dental Care",
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-semibold text-primary tracking-wide uppercase">Patient Reviews</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
          Trusted by 107+ Happy Patients
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="p-6 rounded-xl border bg-card flex flex-col">
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-card-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-semibold text-sm text-card-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.treatment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
