import { Clock, CalendarX, Info } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function TimingsCard() {
  return (
    <div className="bg-white border border-brand-border rounded-xl2 p-7 h-full flex flex-col justify-center">
      <div className="flex items-center gap-3">
        <Clock className="w-6 h-6 text-brand-navy" />
        <h3 className="font-heading text-h4 text-brand-navy">Clinic Timings</h3>
      </div>
      
      <hr className="border-brand-border mt-4 mb-4" />

      <div className="flex flex-col">
        {CLINIC.timings.map((timing, idx) => {
          const isClosed = timing.hours.toLowerCase().includes("closed");
          
          if (isClosed) {
            return (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-brand-border bg-red-50 -mx-2 px-2 rounded-lg">
                <span className="font-body text-sm font-semibold text-brand-navy flex items-center gap-2">
                  <CalendarX className="w-4 h-4 text-brand-red" />
                  {timing.days}
                </span>
                <span className="font-body text-xs font-bold text-brand-red bg-red-100 px-3 py-1 rounded-full">
                  Closed
                </span>
              </div>
            );
          }

          return (
            <div key={idx} className="flex justify-between items-center py-3 border-b border-brand-border last:border-0">
              <span className="font-body text-sm font-semibold text-brand-navy">{timing.days}</span>
              <span className="font-body text-xs text-brand-gray text-right max-w-[180px] leading-relaxed">
                {timing.hours.split(" & ").map((slot, i) => (
                  <span key={i} className="block">{slot}</span>
                ))}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mt-5 flex items-start gap-2 shadow-sm">
        <Info className="text-yellow-600 w-4 h-4 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-yellow-800 font-body leading-relaxed">
          Walk-ins are welcome. For a confirmed slot, please call or WhatsApp in advance.
        </p>
      </div>
    </div>
  );
}
