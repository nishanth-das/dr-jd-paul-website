import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle, Minus, AlertCircle, Leaf, Pill } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    {
      aspect: "Treatment Approach",
      homoeopathy: "Treats the whole person — body, mind & spirit",
      conventional: "Primarily targets specific symptoms or organs",
    },
    {
      aspect: "Side Effects",
      homoeopathy: "None / negligible — highly diluted natural medicines",
      conventional: "Can have significant side effects with long-term use",
    },
    {
      aspect: "Dependency Risk",
      homoeopathy: "Non-addictive — no risk of dependency",
      conventional: "Some medications carry dependency or tolerance risk",
    },
    {
      aspect: "Type of Cure",
      homoeopathy: "Long-lasting — addresses root cause for permanent relief",
      conventional: "Often symptomatic relief — condition may recur",
    },
    {
      aspect: "Prescription",
      homoeopathy: "Individualised for each patient's unique constitution",
      conventional: "Standardised protocols for diagnosed conditions",
    },
    {
      aspect: "Age Safety",
      homoeopathy: "Safe for all ages — infants, elderly, pregnant women",
      conventional: "Dosage and safety varies significantly by age",
    },
    {
      aspect: "Cost",
      homoeopathy: "Highly affordable — medicines are inexpensive",
      conventional: "Can be expensive, especially for long-term treatment",
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="SIDE BY SIDE"
          title="Homoeopathy vs Conventional Medicine"
          subtitle="Understanding the key differences helps patients make informed decisions about their healthcare."
          align="center"
        />

        <div className="mt-10 overflow-x-auto pb-4">
          <table className="w-full min-w-[640px] border border-brand-border border-collapse text-left rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="py-4 px-5 font-heading text-sm w-1/3">Aspect</th>
                <th className="py-4 px-5 font-heading text-sm w-1/3 text-center border-l border-white/10">
                  <div className="flex items-center justify-center gap-2">
                    <Leaf className="w-4 h-4 text-brand-green" />
                    Homoeopathy
                  </div>
                </th>
                <th className="py-4 px-5 font-heading text-sm w-1/3 text-center border-l border-white/10">
                  <div className="flex items-center justify-center gap-2">
                    <Pill className="w-4 h-4 text-white/60" />
                    Conventional Medicine
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`
                    hover:bg-blue-50/30 transition-colors
                    ${idx % 2 === 0 ? "bg-white" : "bg-brand-offwhite"}
                    ${idx !== rows.length - 1 ? "border-b border-brand-border" : ""}
                  `}
                >
                  {/* Aspect */}
                  <td className="py-4 px-5 font-semibold text-brand-navy text-sm font-body border-r border-brand-border/50">
                    {row.aspect}
                  </td>
                  
                  {/* Homoeopathy */}
                  <td className="py-4 px-5 text-brand-green font-semibold text-sm font-body border-r border-brand-border/50">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{row.homoeopathy}</span>
                    </div>
                  </td>
                  
                  {/* Conventional */}
                  <td className="py-4 px-5 text-brand-gray text-sm font-body">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{row.conventional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6 flex items-start gap-3 max-w-3xl mx-auto shadow-sm">
          <AlertCircle className="text-yellow-600 w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-800 font-body leading-relaxed">
            This comparison is for general information only. Homoeopathy complements — and does not replace — emergency medical care. Always consult a qualified physician for serious conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
