import { Leaf } from "lucide-react";

export default function PhilosophyQuote() {
  return (
    <section className="bg-brand-navy py-20 relative overflow-hidden">
      {/* Decorative background icon */}
      <Leaf className="absolute -top-4 -right-4 w-48 h-48 text-brand-green/10 -rotate-12 pointer-events-none" />
      
      <div className="container-site max-w-3xl mx-auto text-center relative z-10">
        <div className="font-heading text-[120px] leading-none text-brand-red opacity-40 -mb-8 pointer-events-none">
          &quot;
        </div>
        
        <p className="font-heading text-2xl lg:text-3xl text-white leading-relaxed italic relative z-10">
          &quot;In Homoeopathy, we don&apos;t just suppress symptoms — we look at
          the whole person: body, mind, and spirit. Every patient receives
          a unique, personalised treatment that goes to the root of their illness.&quot;
        </p>
        
        <div className="border-t border-white/20 pt-6 mt-8">
          <p className="font-body text-brand-green text-sm font-semibold not-italic">
            — Dr. Joydeep Paul, B.H.M.S<br />
            <span className="text-white/70 font-normal">Homoeopathic Physician &amp; Consultant, Agartala</span>
          </p>
        </div>
      </div>
    </section>
  );
}
