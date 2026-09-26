import Link from "next/link";
import { Activity, ShieldPlus, HeartPulse, Baby, Dna, Leaf } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLINIC } from "@/lib/constants";

export default function ConditionsGrid() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="SPECIALISED CARE"
          title="Conditions We Treat"
          subtitle="Dr. Paul manages & handles acute as well as chronic & life threatening cases that respond exceptionally well to classical homoeopathic treatment."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {CLINIC.conditions.map((condition, idx) => {
            // Default condition description
            const defaultDesc = "Natural remedies to address the root cause and provide lasting relief.";
            let desc = defaultDesc;
            if (condition.name === "PCOD / PCOS") desc = "Hormonal balance restored naturally — without synthetic hormones.";
            if (condition.name === "Piles, Fissure, Fistula") desc = "Non-surgical, painless homoeopathic management for complete and lasting relief.";
            if (condition.name === "Fatty Liver") desc = "Liver detoxification and cellular restoration through natural remedies.";
            if (condition.name === "Liver Cirrhosis") desc = "Symptom management and progression support with classical Homoeopathy.";
            if (condition.name === "Infertility (Male & Female)") desc = "Addressing root hormonal and systemic causes to support reproductive health naturally.";
            if (condition.name === "Chronic & Lifestyle") desc = "Diabetes support, digestive issues, skin conditions and more.";

            // Capitalize icon name
            const iconName = condition.icon.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

            return (
              <div key={idx} className="card p-6 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-green/10">
                  {iconName === "Activity" && <Activity className="w-7 h-7 text-brand-green" />}
                  {iconName === "ShieldPlus" && <ShieldPlus className="w-7 h-7 text-brand-green" />}
                  {iconName === "HeartPulse" && <HeartPulse className="w-7 h-7 text-brand-green" />}
                  {iconName === "Baby" && <Baby className="w-7 h-7 text-brand-green" />}
                  {iconName === "Dna" && <Dna className="w-7 h-7 text-brand-green" />}
                  {iconName === "Leaf" && <Leaf className="w-7 h-7 text-brand-green" />}
                  {!["Activity", "ShieldPlus", "HeartPulse", "Baby", "Dna", "Leaf"].includes(iconName) && <Activity className="w-7 h-7 text-brand-green" />}
                </div>
                <h3 className="font-heading text-h4 text-brand-navy">{condition.name}</h3>
                <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed">
                  {desc}
                </p>
                <Link href="/services" className="text-brand-red text-xs font-semibold mt-4 inline-block group-hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-brand-charcoal mb-5">Not sure if Homoeopathy can help your condition?</p>
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
