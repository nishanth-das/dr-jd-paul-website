import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Microscope, ClipboardList, Globe, CreditCard, Clock, ExternalLink } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function DoctorProfile() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left — Doctor Image */}
          <div className="lg:col-span-2 relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="rounded-xl2 overflow-hidden shadow-hover relative aspect-[3/4] bg-brand-navy/5">
              <Image
                src="/images/doctor/hero-placeholder.png"
                alt="Dr. Joydeep Paul — Homoeopathic Physician"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Chip 1 (Top-Left) */}
            <div className="absolute top-4 left-4 lg:-left-6 bg-white/90 backdrop-blur-md rounded-lg shadow-hover px-3 py-2 flex items-center gap-2 transition-transform hover:-translate-y-1">
              <GraduationCap className="w-4 h-4 text-brand-green" />
              <div className="text-xs font-semibold text-brand-navy flex flex-col leading-tight">
                <span>✓ BHMS, 2019</span>
                <span className="text-brand-gray font-normal">W.B. Univ.</span>
              </div>
            </div>

            {/* Chip 2 (Bottom-Right) */}
            <div className="absolute bottom-4 right-4 lg:-right-6 bg-brand-navy/95 backdrop-blur-md rounded-lg shadow-hover px-3 py-2 flex items-center gap-2 transition-transform hover:-translate-y-1">
              <Microscope className="w-4 h-4 text-brand-green" />
              <div className="text-xs font-semibold text-white flex flex-col leading-tight">
                <span>🔬 Ex-CCRH Research Fellow</span>
                <span className="text-white/70 font-normal">Govt. of India</span>
              </div>
            </div>
          </div>

          {/* Right — Bio Text */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="badge-red">HOMOEOPATHIC PHYSICIAN &amp; CONSULTANT</span>
            
            <h2 className="font-heading text-h1 text-brand-navy mt-3">
              Dr. Joydeep Paul
            </h2>
            
            <p className="font-body text-body-lg text-brand-gray mt-1">
              B.H.M.S — West Bengal University of Health Sciences (2019)
            </p>

            <div className="text-left font-body text-body text-brand-charcoal mt-5 leading-relaxed space-y-4">
              <p>
                Dr. Joydeep Paul is a registered Homoeopathic Physician and Consultant 
                based in Agartala, Tripura. Holding a Bachelor of Homoeopathic Medicine 
                and Surgery (B.H.M.S) from West Bengal University of Health Sciences, 
                he is dedicated to the practice of Classical Homoeopathy 
                — a patient-centred approach that treats the whole person, not just 
                isolated symptoms.
              </p>
              <p>
                Formerly a Research Fellow at the Central Council of Research in Homoeopathy 
                (CCRH), Government of India, Dr. Paul combines rigorous scientific 
                understanding with the timeless principles of Homoeopathy. He is 
                particularly known for his work in hormonal disorders, liver conditions, 
                and fertility — areas where Homoeopathy delivers exceptional results.
              </p>
            </div>

            {/* Key Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 w-full text-left">
              <div className="bg-brand-offwhite rounded-xl p-4 border border-brand-border hover:bg-white hover:shadow-card hover:border-brand-green/30 hover:-translate-y-0.5 transition-all duration-300">
                <ClipboardList className="text-brand-green w-4 h-4 mb-1" />
                <div className="text-xs text-brand-gray font-semibold uppercase tracking-wide">Registration</div>
                <div className="text-sm font-semibold text-brand-navy mt-1">580/19 &middot; Tripura</div>
              </div>
              <div className="bg-brand-offwhite rounded-xl p-4 border border-brand-border hover:bg-white hover:shadow-card hover:border-brand-green/30 hover:-translate-y-0.5 transition-all duration-300">
                <Globe className="text-brand-green w-4 h-4 mb-1" />
                <div className="text-xs text-brand-gray font-semibold uppercase tracking-wide">Languages</div>
                <div className="text-sm font-semibold text-brand-navy mt-1">Bengali, English, Hindi</div>
              </div>
              <div className="bg-brand-offwhite rounded-xl p-4 border border-brand-border hover:bg-white hover:shadow-card hover:border-brand-green/30 hover:-translate-y-0.5 transition-all duration-300">
                <Clock className="text-brand-green w-4 h-4 mb-1" />
                <div className="text-xs text-brand-gray font-semibold uppercase tracking-wide">Consultation</div>
                <div className="text-sm font-semibold text-brand-navy mt-1">In-Clinic</div>
              </div>
            </div>

            {/* Social + Contact Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8 w-full">
              <a 
                href={CLINIC.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1565D8] transition-colors w-full sm:w-auto"
              >
                Connect on Facebook
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
