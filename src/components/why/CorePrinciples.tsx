import SectionHeader from "@/components/ui/SectionHeader";
import { Zap, Minimize2, Circle, User } from "lucide-react";

export default function CorePrinciples() {
  const principles = [
    {
      num: "01",
      icon: "Zap",
      iconBg: "bg-brand-navy",
      name: "Law of Similars",
      latin: "Similia Similibus Curentur",
      explanation:
        "A substance that causes symptoms in a healthy person can cure similar symptoms in a sick person. This is the foundational law of Homoeopathy, first described by Dr. Hahnemann.",
    },
    {
      num: "02",
      icon: "Minimize2",
      iconBg: "bg-brand-red",
      name: "Minimum Dose",
      latin: "Minimum Potency Principle",
      explanation:
        "The smallest possible dose is used to stimulate the body's healing response. Homoeopathic medicines are highly diluted, making them free of toxic side effects.",
    },
    {
      num: "03",
      icon: "Circle",
      iconBg: "bg-brand-green",
      name: "Single Remedy",
      latin: "Simplex, Simillimum, Minimum",
      explanation:
        "At any given time, a single, carefully chosen remedy is prescribed — the one that most closely matches the patient's complete symptom picture and constitution.",
    },
    {
      num: "04",
      icon: "User",
      iconBg: "bg-brand-navy",
      name: "Treat the Whole Person",
      latin: "Totality of Symptoms",
      explanation:
        "The patient is treated as a whole — considering physical symptoms, emotional state, lifestyle, and individual characteristics — never just isolated symptoms.",
    },
  ];

  return (
    <section className="bg-brand-offwhite pt-20 lg:pt-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="THE FOUNDATIONS"
          title="The Four Core Principles"
          subtitle="Homoeopathy is built on timeless principles that guide every prescription Dr. Paul makes."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pb-12">
          {principles.map((principle, idx) => (
            <div key={idx} className="card p-7 text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col items-center">
              {/* Background Number */}
              <div className="absolute -top-4 -right-4 font-heading text-9xl font-bold text-brand-border/30 group-hover:text-brand-red/10 transition-colors duration-300 pointer-events-none select-none">
                {principle.num}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-full mx-auto -mt-2 flex items-center justify-center relative z-10 ${principle.iconBg}`}>
                {principle.icon === "Zap" && <Zap className="w-6 h-6 text-white" />}
                {principle.icon === "Minimize2" && <Minimize2 className="w-6 h-6 text-white" />}
                {principle.icon === "Circle" && <Circle className="w-6 h-6 text-white" />}
                {principle.icon === "User" && <User className="w-6 h-6 text-white" />}
              </div>

              {/* Content */}
              <h3 className="font-heading text-h4 text-brand-navy mt-4 relative z-10">
                {principle.name}
              </h3>
              
              <p className="font-body text-xs text-brand-red font-semibold italic mt-1 relative z-10">
                {principle.latin}
              </p>
              
              <p className="font-body text-sm text-brand-gray mt-3 leading-relaxed relative z-10">
                {principle.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Strip */}
      <div className="bg-brand-navy py-10 mt-6 lg:mt-12">
        <div className="container-site text-center">
          <div className="text-brand-red font-heading text-5xl leading-none opacity-80 select-none">
            &quot;
          </div>
          <p className="font-heading text-xl lg:text-2xl text-white italic max-w-4xl mx-auto -mt-2">
            The highest ideal of cure is the rapid, gentle and permanent restoration of health.
          </p>
          <p className="font-body text-sm text-brand-green mt-4 font-semibold">
            — Dr. Samuel Hahnemann, Organon of Medicine
          </p>
        </div>
      </div>
    </section>
  );
}
