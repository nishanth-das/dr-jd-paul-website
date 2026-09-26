import Link from "next/link";
import { CLINIC } from "@/lib/constants";
import { MapPin, Phone, Clock, X, CreditCard } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="bg-brand-navy py-20 relative overflow-hidden">
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left — Text */}
          <div>
            <span className="badge-green">BOOK YOUR CONSULTATION</span>
            
            <h2 className="font-heading text-h2 text-white mt-4 leading-tight">
              Ready to Experience Natural Healing?
            </h2>
            
            <p className="font-body text-white/75 mt-4 text-lg">
              Talk to Dr. Joydeep Paul today. Affordable, personalised Homoeopathic care in Agartala.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Book Appointment
              </Link>
              <a 
                href={CLINIC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/60 font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — Clinic Info Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl2 border border-white/20 p-7 lg:p-10 shadow-xl w-full max-w-md mx-auto lg:max-w-none">
            <h3 className="font-heading text-h4 text-white mb-6">
              Clinic Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-white/80 text-sm font-body py-3 border-b border-white/10">
                <MapPin className="text-brand-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Akhaura Road, Opposite to Niljyoti Travel Agency, Agartala, Tripura 799001</span>
              </div>
              
              <div className="flex items-start gap-4 text-white/80 text-sm font-body py-3 border-b border-white/10">
                <Phone className="text-brand-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CLINIC.phone}<br/>{CLINIC.phone2}</span>
              </div>
              
              <div className="flex items-start gap-4 text-white/80 text-sm font-body py-3 border-b border-white/10">
                <Clock className="text-brand-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Mon–Sun: 10:00 AM – 2:00 PM, 5:00 PM – 10:00 PM</span>
              </div>
              
              <div className="flex items-start gap-4 text-white/80 text-sm font-body pt-3">
                <CreditCard className="text-brand-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Cash &middot; UPI Accepted</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
