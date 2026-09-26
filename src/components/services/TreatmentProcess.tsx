import SectionHeader from "@/components/ui/SectionHeader";
import { ClipboardList, FlaskConical, RefreshCw, Sparkles, Info } from "lucide-react";

export default function TreatmentProcess() {
  const steps = [
    {
      step: "01",
      icon: "ClipboardList",
      title: "Detailed Consultation",
      desc: "A thorough 30–45 minute consultation covering your complete medical history, lifestyle, diet, emotional health, and current symptoms.",
    },
    {
      step: "02",
      icon: "FlaskConical",
      title: "Personalised Prescription",
      desc: "A unique Homoeopathic remedy selected specifically for your constitutional type — not a generic formula.",
    },
    {
      step: "03",
      icon: "RefreshCw",
      title: "Regular Follow-Up",
      desc: "Periodic follow-up consultations to monitor your progress, adjust the remedy, and track improvement.",
    },
    {
      step: "04",
      icon: "Sparkles",
      title: "Long-Term Wellness",
      desc: "The goal is lasting, sustainable health — not just temporary relief. We aim to help your body heal itself.",
    },
  ];

  return (
    <section className="bg-brand-offwhite section-padding overflow-hidden">
      <div className="container-site">
        <SectionHeader
          eyebrow="HOW IT WORKS"
          title="Our Treatment Approach"
          subtitle="A thorough, patient-centred process that ensures every treatment is as unique as the individual."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`card p-6 text-center relative overflow-visible group hover:shadow-hover hover:border-brand-red/30 transition-all duration-300 ${
                idx !== steps.length - 1 ? "lg:after:content-[''] lg:after:absolute lg:after:top-10 lg:after:left-[calc(50%+20px)] lg:after:w-[calc(100%-40px)] lg:after:border-t-2 lg:after:border-dashed lg:after:border-brand-border lg:after:z-0" : ""
              }`}
            >
              <div className="relative z-10 w-10 h-10 rounded-full bg-brand-red text-white font-heading font-bold text-lg flex items-center justify-center mx-auto ring-4 ring-brand-offwhite shadow-sm group-hover:bg-brand-navy group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                {step.step}
              </div>
              
              <div className="mt-6 mb-3">
                {step.icon === "ClipboardList" && <ClipboardList className="w-10 h-10 text-brand-navy mx-auto" />}
                {step.icon === "FlaskConical" && <FlaskConical className="w-10 h-10 text-brand-navy mx-auto" />}
                {step.icon === "RefreshCw" && <RefreshCw className="w-10 h-10 text-brand-navy mx-auto" />}
                {step.icon === "Sparkles" && <Sparkles className="w-10 h-10 text-brand-navy mx-auto" />}
              </div>
              
              <h3 className="font-heading text-h4 text-brand-navy mt-3">
                {step.title}
              </h3>
              
              <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
