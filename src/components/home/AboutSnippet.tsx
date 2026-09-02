import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Microscope, Medal } from "lucide-react";

export default function AboutSnippet() {
  return (
    <section className="bg-brand-offwhite section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column — Text */}
          <div className="order-2 lg:order-1">
            <span className="badge-red mb-4 uppercase tracking-wider text-xs inline-block">
              Meet the Doctor
            </span>
            
            <h2 className="font-heading text-h2 text-brand-navy leading-tight mt-2">
              Dr. Joydeep Paul
            </h2>
            <h3 className="font-heading text-h4 text-brand-gray mt-1">
              BHMS — Homoeopathic Physician
            </h3>

            <p className="font-body text-body text-brand-charcoal mt-6 leading-relaxed">
              With a dedicated practice in Classical Homoeopathy,
              Dr. Joydeep Paul brings together deep medical knowledge and
              genuine care for every patient. A Research Fellow at the Central
              Council of Research in Homoeopathy (CCRH), Government of India,
              he treats the whole person — not just the symptoms.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="bg-white border border-brand-border rounded-lg px-4 py-2.5 flex items-center gap-2 shadow-card">
                <ClipboardList className="w-4 h-4 text-brand-green" />
                <span className="text-xs font-semibold text-brand-navy">Reg. No. 580/19</span>
              </div>
              <div className="bg-white border border-brand-border rounded-lg px-4 py-2.5 flex items-center gap-2 shadow-card">
                <Microscope className="w-4 h-4 text-brand-green" />
                <span className="text-xs font-semibold text-brand-navy">CCRH Research Fellow</span>
              </div>
              <div className="bg-white border border-brand-border rounded-lg px-4 py-2.5 flex items-center gap-2 shadow-card">
                <Medal className="w-4 h-4 text-brand-green" />
                <span className="text-xs font-semibold text-brand-navy">HMAI Member</span>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/about" className="btn-primary">
                Read Full Profile
              </Link>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-xl2 overflow-hidden shadow-hover bg-brand-navy/10 w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/doctor/hero-placeholder.png"
                alt="Dr. Joydeep Paul — Homoeopathic Physician and Consultant, Agartala, Tripura"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Credential Card */}
            <div className="absolute -bottom-6 left-0 lg:bottom-8 lg:-left-12 bg-brand-navy text-white text-xs rounded-lg p-4 shadow-hover flex gap-3 max-w-[220px] z-10 mx-auto right-0 lg:right-auto lg:mx-0 w-fit">
              <div className="shrink-0 mt-0.5">
                <Microscope className="w-5 h-5 text-brand-green" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-sm">CCRH Research Fellow</span>
                <span className="text-white/70">Govt. of India &middot; Since 2021</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
