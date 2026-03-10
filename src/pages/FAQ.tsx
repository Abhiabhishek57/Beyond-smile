import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your clinic timings?",
    answer: "Beyond Smiles Dental Clinic is open Monday to Saturday, 5:30 PM to 9:00 PM. We are closed on Sundays. For emergencies, please call us at 078299 01966.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While walk-ins are welcome, we recommend booking an appointment to avoid waiting. You can book online through our website or call us directly.",
  },
  {
    question: "Is the root canal treatment painful?",
    answer: "No. With modern anesthesia and advanced techniques, root canal treatment is virtually painless. Most patients report feeling no more discomfort than getting a filling.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting every 6 months for a routine checkup and professional cleaning. This helps detect issues early and keeps your teeth and gums healthy.",
  },
  {
    question: "Do you treat children?",
    answer: "Yes! We offer pediatric dentistry for children of all ages. Our clinic is designed to be child-friendly, and our team is trained to make dental visits enjoyable for kids.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, credit/debit cards, and digital wallets. We strive to make dental care affordable for everyone.",
  },
  {
    question: "How much does teeth cleaning cost?",
    answer: "The cost of teeth cleaning depends on the extent of scaling needed. Please visit us or call for a personalized quote. Our prices are competitive and affordable.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer: "Yes, we offer professional teeth whitening treatments that are safe and deliver long-lasting results. Book a consultation to learn which option suits you best.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Call us immediately at 078299 01966. For severe pain, a knocked-out tooth, or dental trauma, try to see us as soon as possible. Rinse with warm water and apply cold compress in the meantime.",
  },
  {
    question: "Where is Beyond Smiles Dental Clinic located?",
    answer: "We are located at Buddha Marga, Bannur Rd, Siddhartha Layout, Mysuru, Karnataka 570011. We're easily accessible from Bannur Road and surrounding areas.",
  },
];

const FAQ = () => (
  <div>
    <section className="bg-navy py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-navy-foreground/70 max-w-xl mx-auto">
          Find answers to common questions about our dental services, treatments, and clinic policies.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-heading font-semibold text-card-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">Still have questions? We're happy to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/917829901966?text=Hi%2C%20I%20have%20a%20question%20about%20Beyond%20Smiles%20Dental%20Clinic" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
