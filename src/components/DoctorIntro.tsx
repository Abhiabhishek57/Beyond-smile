import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";

const highlights = [
  "Expert dental care with a gentle approach",
  "Advanced training in implants & cosmetic dentistry",
  "Modern equipment & sterilization protocols",
  "Commitment to painless procedures",
];

const DoctorIntro = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={doctorImg}
              alt="Lead dentist at Beyond Smiles Dental Clinic"
              className="w-full h-auto object-cover aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
            <span className="font-heading font-bold text-2xl">107+</span>
            <span className="text-sm ml-1 opacity-90">Reviews</span>
          </div>
        </div>
        <div className="space-y-6">
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">About the Clinic</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Where Advanced Technology Meets Compassionate Care
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Beyond Smiles Dental Clinic, we believe every patient deserves world-class dental treatment in a comfortable, caring environment. Located in Siddhartha Layout, Mysuru on Bannur Road, our clinic combines cutting-edge technology with a gentle, patient-first approach.
          </p>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{h}</span>
              </li>
            ))}
          </ul>
          <Button variant="default" size="lg" asChild>
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default DoctorIntro;
