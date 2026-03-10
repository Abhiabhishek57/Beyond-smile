import { Users, Award, Clock, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "107+", label: "5-Star Reviews" },
  { icon: Award, value: "5.0", label: "Google Rating" },
  { icon: Clock, value: "Evening", label: "Appointments" },
  { icon: ShieldCheck, value: "100%", label: "Safe & Sterile" },
];

const TrustIndicators = () => (
  <section className="bg-accent border-y">
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">{stat.value}</span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
