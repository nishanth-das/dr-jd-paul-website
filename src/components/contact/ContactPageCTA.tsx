import { CLINIC } from "@/lib/constants";
import { Phone, MapPin, Navigation, MessageCircle } from "lucide-react";

export default function ContactPageCTA() {
  return (
    <section className="bg-brand-offwhite section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 — Call Directly */}
          <div className="card p-7 text-center flex flex-col items-center h-full hover:-translate-y-1 transition-transform duration-300">
            <Phone className="text-brand-red w-10 h-10 mx-auto" strokeWidth={1.5} />
            <h3 className="font-heading text-h4 text-brand-navy mt-4">
              Call Us Directly
            </h3>
            <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed flex-grow">
              Speak with our team for immediate assistance or to confirm your appointment.
            </p>
            <div className="w-full mt-6 flex flex-col gap-2">
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {CLINIC.phone}
              </a>
              <a href={`tel:${CLINIC.phone2Raw}`} className="btn-primary w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {CLINIC.phone2}
              </a>
            </div>
          </div>

          {/* Card 2 — WhatsApp */}
          <div className="card p-7 text-center flex flex-col items-center h-full hover:-translate-y-1 transition-transform duration-300">
            {/* WhatsApp SVG Icon */}
            <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            <h3 className="font-heading text-h4 text-brand-navy mt-4">
              WhatsApp Us
            </h3>
            <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed flex-grow">
              Send a message anytime. We typically respond within a few hours during clinic hours.
            </p>
            <a 
              href={CLINIC.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1FAD54] text-white w-full mt-6 rounded-lg py-3.5 font-semibold transition-colors duration-200 font-body text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Message on WhatsApp
            </a>
          </div>

          {/* Card 3 — Visit Us */}
          <div className="card p-7 text-center flex flex-col items-center h-full hover:-translate-y-1 transition-transform duration-300">
            <MapPin className="text-brand-navy w-10 h-10 mx-auto" strokeWidth={1.5} />
            <h3 className="font-heading text-h4 text-brand-navy mt-4">
              Visit the Clinic
            </h3>
            <p className="font-body text-sm text-brand-gray mt-2 leading-relaxed flex-grow">
              Walk-ins welcome. Find us on Akhaura Road, opposite Niljyoti Travel Agency, Agartala.
            </p>
            <a 
              href={CLINIC.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary w-full mt-6 flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
