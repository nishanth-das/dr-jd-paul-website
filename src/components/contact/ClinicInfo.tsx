import { Phone, MapPin, MessageCircle, Globe, CreditCard, ArrowRight, ExternalLink, Clock, CalendarX, Info } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function ClinicInfo() {
  const infoRows = [
    {
      icon: "MapPin",
      label: "Address",
      value: "Akhaura Road, Opposite to Niljyoti Travel Agency, Agartala, Tripura — 799001",
      link: CLINIC.mapsLink,
      linkLabel: "Get Directions",
      isExternal: true,
    },
    {
      icon: "Phone",
      label: "Phone",
      value: CLINIC.phone,
      link: `tel:${CLINIC.phoneRaw}`,
      linkLabel: null,
      isExternal: false,
    },
    {
      icon: "MessageCircle",
      label: "WhatsApp",
      value: "Chat with us directly",
      link: CLINIC.whatsappLink,
      linkLabel: "Open WhatsApp",
      isExternal: true,
    },
  ];

  return (
    <div className="bg-[#021812] rounded-2xl p-7 lg:p-9 text-white h-full flex flex-col relative overflow-hidden shadow-2xl">
      {/* Ambient Glows */}
      <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-[#043325] blur-[80px] opacity-80 rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 flex-grow flex flex-col gap-8">
        
        {/* Contact Details Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 p-2.5 rounded-full border border-white/20 shadow-lg">
              <Phone className="text-brand-green w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-white tracking-wide">Contact Details</h3>
              <p className="font-body text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-0.5">Reach out to us</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {infoRows.map((row, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="mt-0.5 text-brand-green">
                  {row.icon === "MapPin" && <MapPin className="w-5 h-5 flex-shrink-0" />}
                  {row.icon === "Phone" && <Phone className="w-5 h-5 flex-shrink-0" />}
                  {row.icon === "MessageCircle" && <MessageCircle className="w-5 h-5 flex-shrink-0" />}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">{row.label}</span>
                  <span className="text-sm text-white/90 font-body leading-snug">{row.value}</span>
                  {row.link && row.linkLabel && (
                    <a
                      href={row.link}
                      target={row.isExternal ? "_blank" : "_self"}
                      rel={row.isExternal ? "noopener noreferrer" : ""}
                      className="text-xs text-brand-green hover:text-white transition-colors underline-offset-2 hover:underline mt-1 inline-flex items-center gap-1 font-medium w-fit"
                    >
                      {row.linkLabel}
                      {row.isExternal ? <ExternalLink className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10" />

        {/* Timings Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 p-2.5 rounded-full border border-white/20 shadow-lg">
              <Clock className="text-brand-green w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-white tracking-wide">Clinic Timings</h3>
              <p className="font-body text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-0.5">Visit us</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {CLINIC.timings.map((timing, idx) => {
              const isClosed = timing.hours.toLowerCase().includes("closed");
              
              if (isClosed) {
                return (
                  <div key={idx} className="flex justify-between items-center py-3 px-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <span className="font-body text-sm font-medium text-white/90 flex items-center gap-2">
                      <CalendarX className="w-4 h-4 text-red-400" />
                      {timing.days}
                    </span>
                    <span className="font-body text-[11px] uppercase tracking-wider font-bold text-red-400 bg-red-500/20 px-3 py-1 rounded-full shadow-inner">
                      Closed
                    </span>
                  </div>
                );
              }

              return (
                <div key={idx} className="flex justify-between items-center py-3 px-4 border-b border-white/5 last:border-0 hover:bg-white/5 rounded-lg transition-colors">
                  <span className="font-body text-sm font-medium text-white/80">{timing.days}</span>
                  <span className="font-body text-xs text-brand-green text-right max-w-[180px] leading-relaxed font-semibold">
                    {timing.hours.split(" & ").map((slot, i) => (
                      <span key={i} className="block">{slot}</span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
        
        <a
          href={CLINIC.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FAD54] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] text-white font-semibold rounded-xl py-4 transition-all duration-300 font-body text-sm hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
