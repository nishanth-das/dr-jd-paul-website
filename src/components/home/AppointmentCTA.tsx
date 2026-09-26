import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { CalendarPlus, Phone, Clock } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="bg-gradient-to-r from-brand-red to-[#9B1B1F] section-padding relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
        }}
      />
      
      <div className="container-site text-center relative z-10">
        <div className="flex justify-center mb-6">
          <CalendarPlus className="w-14 h-14 text-white/80" />
        </div>
        
        <h2 className="font-heading text-h2 text-white leading-tight">
          Ready to Start Your Healing Journey?
        </h2>
        
        <p className="font-body text-lg text-white/85 mt-4 max-w-xl mx-auto">
          Consult Dr. Joydeep Paul at our clinic in Agartala.<br className="hidden sm:block" />
          Affordable, natural, and effective Homoeopathic care.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link 
            href="/contact" 
            className="bg-white text-brand-red font-semibold px-8 py-4 rounded-lg hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
          >
            Book an Appointment
          </Link>
          <a 
            href={`tel:${CLINIC.phoneRaw}`} 
            className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/60 font-semibold px-8 py-4 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call: {CLINIC.phone}
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 max-w-lg mx-auto flex items-center justify-center gap-2 text-white/70 text-xs font-body tracking-wide">
          <Clock className="w-4 h-4 shrink-0" />
          <span>
            Mon–Sun: 10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM
          </span>
        </div>
      </div>
    </section>
  );
}
