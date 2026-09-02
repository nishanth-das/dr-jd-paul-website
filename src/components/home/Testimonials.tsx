import SectionHeader from "@/components/ui/SectionHeader";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initials: "P.D.",
      name: "Priya Das",
      condition: "PCOD / PCOS",
      quote:
        "After years of irregular cycles and failed allopathic treatments, Dr. Paul's Homoeopathic treatment gave me real, lasting relief within 4 months. I cannot recommend him enough.",
    },
    {
      initials: "R.B.",
      name: "Rajesh Bhattacharya",
      condition: "Fatty Liver",
      quote:
        "My fatty liver reports have significantly improved after 6 months of treatment. The medicines had no side effects and I felt better overall. Very professional doctor.",
    },
    {
      initials: "S.C.",
      name: "Sunita Chakraborty",
      condition: "Female Sterility",
      quote:
        "We had been trying for 3 years. After consulting Dr. Paul and following his treatment plan, we finally have good news. He is truly dedicated to his patients.",
    },
  ];

  return (
    <section className="bg-brand-offwhite section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="PATIENT STORIES"
          title="What Our Patients Say"
          subtitle="Real stories from real patients who found lasting relief through Homoeopathy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="card p-6 flex flex-col h-full bg-white relative group hover:-translate-y-1 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Quote text */}
              <div className="relative mt-2 flex-grow">
                <span className="text-brand-red font-heading text-6xl leading-none absolute -top-2 -left-2 opacity-20 group-hover:opacity-40 transition-opacity">
                  &quot;
                </span>
                <p className="font-body text-body text-brand-charcoal italic leading-relaxed pt-6 relative z-10">
                  {/* PLACEHOLDER — replace with real testimonials */}
                  &quot;{testi.quote}&quot;
                </p>
              </div>

              {/* Patient info */}
              <div className="border-t border-brand-border mt-6 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {testi.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-brand-navy text-sm">
                    {/* PLACEHOLDER — replace with real testimonials */}
                    {testi.name}
                  </span>
                  <span className="text-xs text-brand-gray font-body mt-0.5">
                    {testi.condition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-brand-gray italic">
            * Testimonials are from real patients. Names used with permission.
          </p>
        </div>
      </div>
    </section>
  );
}
