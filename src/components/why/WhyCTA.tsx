import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";

export default function WhyCTA() {
  const facts = [
    "Homoeopathy is practiced in over 80 countries worldwide.",
    "The World Health Organisation (WHO) recognises Homoeopathy as the second largest system of medicine globally.",
    "Homoeopathic medicines are prepared from natural sources — plants, minerals, and animals.",
    "Over 3,000 Homoeopathic medicines are documented in the Materia Medica.",
    "India has the world's largest Homoeopathic infrastructure — over 180 medical colleges.",
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left — Experience CTA Text */}
          <div>
            <span className="badge-red">READY TO EXPERIENCE IT?</span>
            
            <h2 className="font-heading text-h2 text-brand-navy mt-3 leading-tight">
              See What Homoeopathy Can Do For You
            </h2>
            
            <p className="font-body text-body text-brand-gray mt-4 leading-relaxed">
              The best way to understand Homoeopathy is to experience it. Book a consultation with Dr. Joydeep Paul and discover a new approach to your health.
            </p>
            
            {/* Checklist */}
            <div className="flex flex-col gap-3 mt-6">
              {[
                "Personalised treatment for your unique condition",
                "No side effects — safe for the whole family",
                "Affordable medicines and consultation fees",
                "Government-registered, experienced physician"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 font-body text-sm text-brand-charcoal">
                  <CheckCircle className="text-brand-green w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto text-center">
                View Our Services
              </Link>
            </div>
          </div>

          {/* Right — Quick Facts Card */}
          <div className="bg-brand-offwhite border border-brand-border rounded-xl2 p-7 lg:p-8 shadow-sm h-full flex flex-col justify-center">
            <h3 className="font-heading text-h4 text-brand-navy mb-5">
              Quick Facts About Homoeopathy
            </h3>
            
            <div className="space-y-0">
              {facts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-3 py-3.5 border-b border-brand-border/80 last:border-0 first:pt-0 last:pb-0">
                  <ChevronRight className="text-brand-red w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-brand-charcoal leading-relaxed">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
