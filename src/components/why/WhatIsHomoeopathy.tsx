import { BookOpen, Leaf } from "lucide-react";
import Image from "next/image";

export default function WhatIsHomoeopathy() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left — Text Content */}
          <div>
            <span className="badge-green">ABOUT HOMOEOPATHY</span>
            
            <h2 className="font-heading text-h2 text-brand-navy mt-3">
              What is Homoeopathy?
            </h2>
            
            <div className="font-body text-body text-brand-charcoal mt-4 leading-relaxed space-y-4">
              <p>
                Homoeopathy is a system of medicine founded in 1796 by German
                physician Dr. Samuel Hahnemann. Based on the principle of
                &quot;Similia Similibus Curentur&quot; — Let Likes be Cured by Likes —
                it uses highly diluted natural substances to trigger the body&apos;s
                own healing mechanisms.
              </p>
              
              <p>
                Unlike conventional medicine, which primarily focuses on
                suppressing symptoms, Homoeopathy treats the whole person —
                body, mind, and spirit. Every prescription is individualised
                to the patient&apos;s unique constitution, making it one of the
                most personalised forms of medicine in the world.
              </p>
              
              <p>
                Over 200 years of clinical practice and a growing body of
                modern research continue to validate Homoeopathy&apos;s effectiveness
                — particularly in chronic, hormonal, and lifestyle-related
                conditions that often resist conventional treatment.
              </p>
            </div>
            
            {/* Founding fact strip */}
            <div className="bg-brand-offwhite border border-brand-border rounded-xl p-4 mt-6 flex items-start gap-4">
              <BookOpen className="text-brand-navy w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-navy text-sm">
                  Founded in 1796 by Dr. Samuel Hahnemann
                </p>
                <p className="text-xs text-brand-gray mt-1">
                  The word &apos;Homoeopathy&apos; comes from the Greek: homoeos (similar) + pathos (suffering).
                </p>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="rounded-xl2 overflow-hidden shadow-hover aspect-square bg-brand-navy/5 relative">
              <Image
                src="/images/doctor/hero-placeholder.png"
                alt="Homoeopathy natural healing"
                fill
                className="object-cover"
                unoptimized
              />
              {/* PLACEHOLDER — replace with botanical/herbal image */}
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-4 left-4 lg:-left-6 bg-white rounded-xl shadow-card px-4 py-3 flex items-center gap-3">
              <div className="bg-green-50 w-10 h-10 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-brand-green" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-h4 text-brand-navy">200+ Years</span>
                <span className="text-xs text-brand-gray mt-0.5">of Clinical Practice</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
