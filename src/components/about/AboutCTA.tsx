import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { CalendarPlus, MessageCircle, Stethoscope } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-brand-offwhite section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 — Book Appointment */}
          <div className="card p-6 flex flex-col items-center text-center">
            <CalendarPlus className="text-brand-red w-10 h-10" />
            <h3 className="font-heading text-h4 text-brand-navy mt-4">
              Book a Consultation
            </h3>
            <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed flex-grow">
              Visit our clinic on Akhaura Road, Agartala. Walk-ins welcome.
            </p>
            <Link href="/contact" className="btn-primary w-full mt-6 text-center">
              Book Now
            </Link>
          </div>

          {/* Card 2 — WhatsApp */}
          <div className="card p-6 flex flex-col items-center text-center">
            <MessageCircle className="text-[#25D366] w-10 h-10" />
            <h3 className="font-heading text-h4 text-brand-navy mt-4">
              WhatsApp Us
            </h3>
            <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed flex-grow">
              Prefer to chat first? Send us a message on WhatsApp anytime.
            </p>
            <a 
              href={CLINIC.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] text-white w-full mt-6 rounded-lg py-3 font-semibold hover:bg-[#1FAD54] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 3 — View Services */}
          <div className="card p-6 flex flex-col items-center text-center">
            <Stethoscope className="text-brand-navy w-10 h-10" />
            <h3 className="font-heading text-h4 text-brand-navy mt-4">
              Our Specialisations
            </h3>
            <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed flex-grow">
              Learn about the conditions we treat and how Homoeopathy can help you.
            </p>
            <Link href="/services" className="btn-secondary w-full mt-6">
              View Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
