import { CheckCircle2, Zap, Heart, Shield } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";
import clinicImg from "@/assets/hero-clinic.jpg";

const values = [
  { icon: Heart, title: "Patient First", desc: "Every decision we make starts with what's best for our patients." },
  { icon: Zap, title: "Advanced Technology", desc: "Modern dental equipment and sterilization protocols for safe, precise care." },
  { icon: Shield, title: "Safety & Hygiene", desc: "Strict sterilization processes exceeding international standards." },
];

const About = () => (
  <div>
    <section className="bg-navy py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">About Beyond Smiles</h1>
        <p className="text-navy-foreground/70 max-w-xl mx-auto">
          Siddhartha Layout, Mysuru's trusted dental clinic — 5.0 rated with 107+ Google reviews.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">Our Story</span>
          <h2 className="text-3xl font-heading font-bold text-foreground">A Mission to Make Dental Care Accessible</h2>
          <p className="text-muted-foreground leading-relaxed">
            Beyond Smiles Dental Clinic was founded with a simple mission: to provide world-class dental treatments in Mysuru at affordable prices. Located on Bannur Road in Siddhartha Layout, we've built a reputation for gentle, effective dental care that keeps patients coming back.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our clinic is equipped with modern dental instruments, advanced sterilization systems, and a comfortable environment — ensuring every treatment is precise, painless, and safe.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={clinicImg} alt="Beyond Smiles Dental Clinic treatment room" className="w-full h-auto object-cover aspect-video" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
          <img src={doctorImg} alt="Lead dentist at Beyond Smiles Dental Clinic" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
        </div>
        <div className="space-y-5 order-1 md:order-2">
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">Meet the Doctor</span>
          <h2 className="text-3xl font-heading font-bold text-foreground">Expert Dental Team</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our team at Beyond Smiles Dental Clinic is committed to gentle, patient-centered care. Known for a calm demeanor and thorough approach, we ensure every patient receives personalized attention and the best possible treatment outcomes.
          </p>
          <ul className="space-y-2">
            {["Expert in general & cosmetic dentistry", "Specializes in painless procedures", "107+ five-star patient reviews", "Trusted by families across Mysuru"].map((q) => (
              <li key={q} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">Our Care Philosophy</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
