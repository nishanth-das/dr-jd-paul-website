import SectionHeader from "@/components/ui/SectionHeader";
import { Activity, ShieldPlus, HeartPulse, Baby, Dna, Leaf } from "lucide-react";

export default function ConditionCard() {
  const conditions = [
    {
      icon: "Activity",
      iconBg: "bg-green-50",
      iconColor: "text-brand-green",
      name: "PCOD / PCOS",
      whatItIs:
        "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder causing irregular menstrual cycles, ovarian cysts, weight gain, acne, and excess hair growth. It affects 1 in 5 women of reproductive age.",
      howItHelps:
        "Homoeopathic treatment regulates the endocrine system naturally — balancing hormones, restoring regular cycles, and addressing the constitutional root cause without synthetic hormones or steroids.",
    },
    {
      icon: "Activity",
      iconBg: "bg-red-50",
      iconColor: "text-brand-red",
      name: "Piles, Fissure, Fistula",
      whatItIs:
        "These are painful anorectal conditions involving swollen veins (piles), tears in the anal lining (fissure), or abnormal connections between the bowel and skin (fistula), often causing bleeding and severe pain.",
      howItHelps:
        "Homoeopathy offers an effective, non-surgical alternative by addressing chronic constipation, improving venous circulation, and promoting natural tissue healing without invasive procedures.",
    },
    {
      icon: "ShieldPlus",
      iconBg: "bg-red-50",
      iconColor: "text-brand-red",
      name: "Fatty Liver",
      whatItIs:
        "Fatty Liver (Hepatic Steatosis) is the accumulation of excess fat in liver cells, often caused by poor diet, sedentary lifestyle, alcohol, or metabolic disorders. Left untreated, it can progress to cirrhosis.",
      howItHelps:
        "Classical Homoeopathy supports liver detoxification, reduces fat accumulation, and restores normal hepatic function at a cellular level — complementing dietary and lifestyle changes.",
    },
    {
      icon: "HeartPulse",
      iconBg: "bg-blue-50",
      iconColor: "text-brand-navy",
      name: "Liver Cirrhosis",
      whatItIs:
        "Liver Cirrhosis is progressive scarring of the liver caused by long-term damage from conditions like fatty liver, hepatitis, or chronic alcohol use. It significantly impairs liver function.",
      howItHelps:
        "While Cirrhosis cannot be fully reversed, Homoeopathic treatment can significantly slow progression, manage symptoms such as fatigue, nausea and abdominal pain, and improve quality of life.",
    },
    {
      icon: "Baby",
      iconBg: "bg-green-50",
      iconColor: "text-brand-green",
      name: "Infertility (Male & Female)",
      whatItIs:
        "Infertility involves the inability to conceive after 12 months. In women, it is often due to PCOS or hormonal imbalance. In men, it relates to sperm count or motility issues.",
      howItHelps:
        "Homoeopathy addresses the systemic root causes — regulating ovulation in women, improving sperm quality in men, and supporting the body's natural reproductive capacity.",
    },
    {
      icon: "Leaf",
      iconBg: "bg-blue-50",
      iconColor: "text-brand-navy",
      name: "Chronic & Lifestyle Diseases",
      whatItIs:
        "Includes conditions like metabolic syndrome, digestive disorders, skin diseases (eczema, psoriasis), recurring infections, anxiety, and general low immunity — often linked to lifestyle and stress.",
      howItHelps:
        "Homoeopathy's individualised approach makes it uniquely effective for chronic conditions. Treatment is tailored to the patient's complete profile — physical, mental, and emotional.",
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="SPECIALISED CARE"
          title="Conditions We Treat"
          subtitle="Dr. Paul manages & handles acute as well as chronic & life threatening cases that respond exceptionally well to classical homoeopathic treatment."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {conditions.map((condition, idx) => (
            <div key={idx} className="card p-6 flex flex-col sm:flex-row gap-5 hover:-translate-y-1 hover:shadow-hover hover:border-brand-navy/20 transition-all duration-300">
              
              {/* Icon Container */}
              <div className={`w-16 h-16 flex-shrink-0 rounded-xl flex items-center justify-center ${condition.iconBg}`}>
                {condition.icon === "Activity" && <Activity className={`w-8 h-8 ${condition.iconColor}`} />}
                {condition.icon === "ShieldPlus" && <ShieldPlus className={`w-8 h-8 ${condition.iconColor}`} />}
                {condition.icon === "HeartPulse" && <HeartPulse className={`w-8 h-8 ${condition.iconColor}`} />}
                {condition.icon === "Baby" && <Baby className={`w-8 h-8 ${condition.iconColor}`} />}
                {condition.icon === "Dna" && <Dna className={`w-8 h-8 ${condition.iconColor}`} />}
                {condition.icon === "Leaf" && <Leaf className={`w-8 h-8 ${condition.iconColor}`} />}
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="font-heading text-h3 text-brand-navy">{condition.name}</h3>
                
                <div className="border-b border-brand-border my-3" />
                
                <div className="text-xs font-semibold text-brand-gray uppercase tracking-wide">What it is</div>
                <p className="font-body text-sm text-brand-charcoal mt-1 leading-relaxed">
                  {condition.whatItIs}
                </p>
                
                <div className="text-xs font-semibold text-brand-green uppercase tracking-wide mt-4">How Homoeopathy helps</div>
                <p className="font-body text-sm text-brand-charcoal mt-1 leading-relaxed">
                  {condition.howItHelps}
                </p>

                {/* Mini Badges Row */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="bg-green-50 text-brand-green text-xs px-2.5 py-1 rounded-full border border-green-200">
                    ✓ Natural Treatment
                  </span>
                  <span className="bg-green-50 text-brand-green text-xs px-2.5 py-1 rounded-full border border-green-200">
                    ✓ No Side Effects
                  </span>
                  <span className="bg-green-50 text-brand-green text-xs px-2.5 py-1 rounded-full border border-green-200">
                    ✓ Root Cause Focus
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
