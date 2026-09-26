import Link from "next/link";
import { CLINIC, NAV_LINKS } from "@/lib/constants";
import { Clock, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-site pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex flex-col items-start">
              <div className="h-16 w-auto inline-flex relative">
                <img 
                  src="/images/logo.png" 
                  alt="Dr. J.D. Paul's Empirical Wellness Clinic Logo" 
                  className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,1)] brightness-110 contrast-125"
                />
              </div>
            </div>
            <p className="text-gray-300 font-body text-sm italic">
              &quot;Classical Homoeopathy. Modern Healing.&quot;
            </p>
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 w-fit">
              Reg. No. 580/19 &middot; Tripura
            </div>
            <a 
              href={CLINIC.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red transition-colors"
              aria-label="Facebook Page"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-bold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#4ADE80] transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Clinic Timings */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Clinic Hours
            </h3>
            <ul className="flex flex-col gap-4">
              {CLINIC.timings.map((time, idx) => (
                <li key={idx} className="flex flex-col gap-1 text-sm font-body">
                  <span className="text-gray-300 font-semibold">{time.days}</span>
                  <span className={time.hours === "Closed" ? "text-[#4ADE80] font-medium" : "text-gray-400"}>
                    {time.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-bold text-white">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm font-body text-gray-300">
              <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-start gap-3 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-[#4ADE80] group-hover:scale-110 transition-transform shrink-0" />
                <span>{CLINIC.phone}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4ADE80] shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>{CLINIC.addressShort}</span>
                  <a 
                    href={CLINIC.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#4ADE80] hover:underline font-medium text-xs mt-1"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-body text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {CLINIC.name} &middot; {CLINIC.city}, {CLINIC.state}</p>
          <p>
            Website by{" "}
            <a 
              href="https://www.instagram.com/itsnixanth?igsh=MWM3Y3V6dnk4c245dg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#4ADE80] transition-colors underline"
            >
              Nishanth Das
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
