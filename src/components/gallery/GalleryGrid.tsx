"use client";

import { useState, useEffect } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ShieldCheck, Lock, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const galleryImages = [
  // CLINIC EXTERIOR (3 images)
  {
    id: 1,
    src: "/images/clinic/exterior-1.jpg",
    alt: "Dr. J.D. Paul's Empirical Wellness Clinic — Exterior view, Akhaura Road, Agartala",
    title: "Clinic Entrance",
    category: "Clinic Exterior",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 2,
    src: "/images/clinic/exterior-2.jpg",
    alt: "Clinic signboard — Dr. J.D. Paul's Empirical Wellness Clinic, Agartala",
    title: "Clinic Signboard",
    category: "Clinic Exterior",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 3,
    src: "/images/clinic/exterior-3.jpg",
    alt: "Clinic building on Akhaura Road, Agartala, Tripura",
    title: "Akhaura Road Location",
    category: "Clinic Exterior",
    aspectClass: "aspect-[4/3]",
  },

  // CLINIC INTERIOR (6 images)
  {
    id: 4,
    src: "/images/clinic/interior-reception.jpg",
    alt: "Reception area — Dr. J.D. Paul's Empirical Wellness Clinic",
    title: "Reception Area",
    category: "Clinic Interior",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 5,
    src: "/images/clinic/interior-consultation.jpg",
    alt: "Consultation room — Dr. J.D. Paul's Homoeopathy Clinic, Agartala",
    title: "Consultation Room",
    category: "Clinic Interior",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 6,
    src: "/images/clinic/interior-waiting.jpg",
    alt: "Patient waiting area — clean and comfortable, Empirical Wellness Clinic",
    title: "Waiting Area",
    category: "Clinic Interior",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 7,
    src: "/images/clinic/interior-desk.jpg",
    alt: "Doctor's desk and workspace — Dr. J.D. Paul's Clinic",
    title: "Doctor's Workspace",
    category: "Clinic Interior",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 8,
    src: "/images/clinic/interior-medicines.jpg",
    alt: "Homoeopathic medicines cabinet — Empirical Wellness Clinic, Agartala",
    title: "Medicines Cabinet",
    category: "Clinic Interior",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 9,
    src: "/images/clinic/interior-overview.jpg",
    alt: "Clinic interior overview — clean, hygienic Homoeopathic clinic in Agartala",
    title: "Clinic Overview",
    category: "Clinic Interior",
    aspectClass: "aspect-[4/3]",
  },

  // DOCTOR (3 images)
  {
    id: 10,
    src: "/images/doctor/dr-paul-consulting.jpg",
    alt: "Dr. Joydeep Paul consulting a patient — Homoeopathic Physician, Agartala",
    title: "Dr. Paul in Consultation",
    category: "Doctor",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 11,
    src: "/images/doctor/dr-paul-profile.jpg",
    alt: "Dr. Joydeep Paul — Homoeopathic Physician & Consultant, Agartala, Tripura",
    title: "Dr. Joydeep Paul",
    category: "Doctor",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: 12,
    src: "/images/doctor/dr-paul-desk.jpg",
    alt: "Dr. Joydeep Paul at his desk — Empirical Wellness Clinic",
    title: "Dr. Paul at Work",
    category: "Doctor",
    aspectClass: "aspect-[4/3]",
  },
];

const highlights = [
  {
    icon: "ShieldCheck",
    iconBg: "bg-green-50",
    iconColor: "text-brand-green",
    title: "Clean & Hygienic",
    desc: "Our clinic maintains the highest standards of cleanliness and hygiene, ensuring a safe environment for every patient.",
  },
  {
    icon: "Lock",
    iconBg: "bg-blue-50",
    iconColor: "text-brand-navy",
    title: "Private Consultations",
    desc: "All consultations take place in a private room — your medical details and concerns are completely confidential.",
  },
  {
    icon: "Heart",
    iconBg: "bg-red-50",
    iconColor: "text-brand-red",
    title: "Welcoming Atmosphere",
    desc: "We believe healing begins the moment you walk in. Our clinic is designed to be calm, comfortable, and reassuring.",
  },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        
        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, idx) => (
            <div 
              key={image.id} 
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-hover transition-shadow"
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Placeholder image (temporary) */}
              <div className={`w-full ${image.aspectClass} bg-gradient-to-br from-brand-navy/10 to-brand-green/10 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                <div className="text-center p-4">
                  <ImageIcon className="w-10 h-10 text-brand-navy/30 mx-auto" />
                  <p className="text-xs text-brand-gray mt-2 font-body">{image.title}</p>
                  <p className="text-[10px] text-brand-border mt-1">{image.category}</p>
                </div>
              </div>

              {/* Real Image Tag (Commented Out) */}
              {/* 
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800} // Approximate height for masonry
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              */}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <div className="w-full">
                  <div className="badge-green mb-2 w-fit">{image.category}</div>
                  <h3 className="text-white font-semibold text-sm font-heading tracking-wide shadow-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part 3 — Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
            {/* Backdrop click to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setLightboxIndex(null)} />
            
            <div className="relative max-w-5xl max-h-[90vh] w-full mx-4 flex flex-col items-center">
              
              {/* Close Button */}
              <button 
                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 transition-colors z-10"
                onClick={() => setLightboxIndex(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Main Image Container */}
              <div className="relative w-full flex items-center justify-center">
                {/* Placeholder Image */}
                <div className={`w-full max-w-3xl ${galleryImages[lightboxIndex].aspectClass} max-h-[75vh] bg-gradient-to-br from-brand-navy/20 to-brand-green/20 rounded-xl flex items-center justify-center border border-white/10 shadow-2xl`}>
                   <div className="text-center p-4">
                    <ImageIcon className="w-16 h-16 text-white/30 mx-auto" />
                    <p className="text-sm text-white/50 mt-4 font-body">{galleryImages[lightboxIndex].title}</p>
                  </div>
                </div>

                {/* Real Image Tag (Commented Out) */}
                {/* 
                <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center">
                  <img
                    src={galleryImages[lightboxIndex].src}
                    alt={galleryImages[lightboxIndex].alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                  />
                </div>
                */}

                {/* Navigation Buttons */}
                <button 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-black/50 hover:bg-black text-white rounded-full p-3 transition-colors backdrop-blur-sm border border-white/10 z-10 focus:outline-none"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length); }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-black/50 hover:bg-black text-white rounded-full p-3 transition-colors backdrop-blur-sm border border-white/10 z-10 focus:outline-none"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % galleryImages.length); }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption & Counter */}
              <div className="mt-4 text-center z-10 pointer-events-none">
                <p className="text-white/90 text-base font-medium font-body">
                  {galleryImages[lightboxIndex].title}
                </p>
                <p className="text-white/50 text-xs font-body mt-1">
                  {galleryImages[lightboxIndex].category} &middot; {lightboxIndex + 1} / {galleryImages.length}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Part 4 — Clinic Highlights Strip */}
        <div className="mt-20 pt-16 border-t border-brand-border">
          <SectionHeader
            eyebrow="OUR ENVIRONMENT"
            title="Why Patients Love Our Clinic"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="card p-7 text-center h-full hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${item.iconBg}`}>
                  {item.icon === "ShieldCheck" && <ShieldCheck className={`w-7 h-7 ${item.iconColor}`} />}
                  {item.icon === "Lock" && <Lock className={`w-7 h-7 ${item.iconColor}`} />}
                  {item.icon === "Heart" && <Heart className={`w-7 h-7 ${item.iconColor}`} />}
                </div>
                
                <h3 className="font-heading text-h4 text-brand-navy mt-5">
                  {item.title}
                </h3>
                
                <p className="font-body text-sm text-brand-gray mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
