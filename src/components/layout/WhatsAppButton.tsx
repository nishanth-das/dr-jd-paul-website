"use client";

import { CLINIC } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50 group">
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-white text-brand-charcoal text-xs shadow-card rounded px-2 py-1 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>
      <a
        href={CLINIC.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Paul on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-soft"
      >
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.99 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L0 24l6.335-1.502A11.954 11.954 0 0011.99 24C18.607 24 24 18.627 24 12S18.607 0 11.99 0z"/>
        </svg>
      </a>
    </div>
  );
}
