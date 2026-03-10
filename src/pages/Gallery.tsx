import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import clinicImg from "@/assets/hero-clinic.jpg";
import doctorImg from "@/assets/doctor.jpg";

const galleryImages = [
  { src: clinicImg, alt: "Modern treatment room at Beyond Smiles", caption: "State-of-the-Art Treatment Room" },
  { src: doctorImg, alt: "Expert dental team at Beyond Smiles", caption: "Our Expert Dental Team" },
  { src: clinicImg, alt: "Advanced dental equipment", caption: "Advanced Dental Equipment" },
  { src: doctorImg, alt: "Patient consultation at Beyond Smiles", caption: "Personalized Patient Consultation" },
  { src: clinicImg, alt: "Sterilized instruments at Beyond Smiles", caption: "100% Sterilized Environment" },
  { src: doctorImg, alt: "Comfortable dental care at Beyond Smiles", caption: "Comfortable & Caring Experience" },
];

const Gallery = () => (
  <div>
    <section className="bg-navy py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">Our Gallery</h1>
        <p className="text-navy-foreground/70 max-w-xl mx-auto">
          Take a virtual tour of Beyond Smiles Dental Clinic — modern facilities, advanced equipment, and a welcoming environment.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="group rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <p className="font-heading font-semibold text-card-foreground text-sm">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">Want to see our clinic in person?</p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Book a Visit</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
