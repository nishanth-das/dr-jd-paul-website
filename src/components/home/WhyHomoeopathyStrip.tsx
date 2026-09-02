import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { ShieldCheck, Target, BadgeCheck } from "lucide-react";

export default function WhyHomoeopathyStrip() {
  const pillars = [
    {
      icon: "ShieldCheck",
      title: "Zero Side Effects",
      desc: "Natural plant-based medicines that are completely safe for all ages — from infants to the elderly.",
    },
    {
      icon: "Target",
      title: "Root Cause Healing",
      desc: "We treat the whole person — body, mind, and spirit — addressing the root cause, not just the symptoms.",
    },
    {
      icon: "BadgeCheck",
      title: "Govt. Recognised",
      desc: "Homoeopathy is officially recognised by the Government of India under the AYUSH Ministry.",
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="THE HOMOEOPATHIC ADVANTAGE"
          title="Why Choose Homoeopathy?"
          subtitle="Natural medicine that heals from within — safe, effective, and time-tested."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] border-t-2 border-dashed border-brand-border z-0" />
          
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto shadow-md">
                {pillar.icon === "ShieldCheck" && <ShieldCheck className="w-7 h-7 text-white" />}
                {pillar.icon === "Target" && <Target className="w-7 h-7 text-white" />}
                {pillar.icon === "BadgeCheck" && <BadgeCheck className="w-7 h-7 text-white" />}
              </div>
              <h3 className="font-heading text-h4 text-brand-navy mt-5 text-center">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-brand-gray mt-2 text-center leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/why-homoeopathy" className="text-brand-red font-semibold hover:underline text-sm transition-all">
            Discover the science behind Homoeopathy &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
