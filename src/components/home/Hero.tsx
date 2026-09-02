import Image from "next/image";
import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { Award, ClipboardCheck, Leaf, ChevronDown, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-10 lg:pt-32 lg:pb-12 overflow-hidden bg-brand-navy">
      
      {/* 
        Background Image 
        Using a true homoeopathy image (amber vials, natural herbs, wooden table).
      */}
      <div 
        className="absolute inset-0 z-0 animate-[pulse_soft_20s_ease-in-out_infinite]"
      >
        <Image 
          src="/images/hero-bg.png"
          alt="Natural Homoeopathy Treatment"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 
        Deep Green Gradient Overlay
        - Highly transparent at the top to make the beautiful homoeopathy image extremely visible.
        - Darker at the bottom to ensure the "Scroll Down" and button contrast.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#021812]/95 via-[#043325]/40 to-transparent z-0" />
      <div className="absolute inset-0 bg-[#043325]/10 z-0" />

      {/* Content Container */}
      <div className="container-site relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 border border-white/40 backdrop-blur-md mb-6 animate-fade-up shadow-[0_4px_12px_rgba(0,0,0,0.3)]" style={{ animationDelay: "0ms" }}>
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#4ADE80]"></span>
          </span>
          <span className="text-[10px] sm:text-sm font-body font-bold text-white tracking-widest uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Govt. Registered Homoeopath
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-hero text-white leading-[1.05] tracking-tight animate-fade-up drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" style={{ animationDelay: "150ms" }}>
          Heal Naturally.<br />
          <span className="text-[#4ADE80] italic font-semibold drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">Live Fully.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-sm sm:text-base lg:text-lg text-white mt-4 sm:mt-5 max-w-2xl leading-relaxed animate-fade-up font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ animationDelay: "300ms" }}>
          Experience the power of Classical Homoeopathy combined with modern diagnosis. Safe, effective, and 100% natural treatment in Agartala.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto animate-fade-up px-4 sm:px-0" style={{ animationDelay: "450ms" }}>
          <Link href="/contact" className="btn-primary w-full sm:w-auto text-sm sm:text-base lg:text-lg py-3.5 sm:py-4 px-6 sm:px-10 shadow-2xl font-bold border border-brand-red/50">
            Book an Appointment
          </Link>
          <a
            href={CLINIC.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-body font-bold border-2 border-white/60 px-6 sm:px-10 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-green hover:border-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] active:scale-[0.98] w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-brand-green transition-colors" />
            WhatsApp Us
          </a>
        </div>

        {/* Credentials Row */}
        <div className="flex justify-center gap-4 sm:gap-8 mt-10 animate-fade-up w-full px-2" style={{ animationDelay: "600ms" }}>
          {[
            { icon: ClipboardCheck, text: "BHMS Qualified" },
            { icon: Star, text: "5000+ Patients" },
            { icon: Leaf, text: "100% Natural" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-white font-body text-[10px] sm:text-sm font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-center">
              <div className="bg-white/20 p-1.5 sm:p-2 rounded-full backdrop-blur-sm border border-white/30 shadow-md">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span className="max-w-[80px] sm:max-w-none leading-tight">{item.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer z-10 animate-fade-up hidden sm:flex" style={{ animationDelay: "800ms" }}>
        <span className="text-[10px] font-body text-white uppercase tracking-[0.2em] font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-white animate-bounce drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]" />
      </div>
      
    </section>
  );
}
