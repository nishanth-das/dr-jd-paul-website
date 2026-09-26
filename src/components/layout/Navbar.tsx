"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/constants";
import { cn } from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "bg-white shadow-nav" : "bg-transparent"
        )}
      >
        {/* Desktop Top Bar */}
        <div className={cn(
          "hidden md:block w-full border-b transition-all duration-300",
          scrolled ? "bg-brand-navy border-brand-navy" : "bg-black/20 border-white/10 backdrop-blur-sm"
        )}>
          <div className="container-site flex justify-between items-center py-1.5 text-xs font-body font-medium text-white/90">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#4ADE80]" /> Mon–Sun: 10AM–2PM, 5PM–10PM
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href={`mailto:info@drjdpaulclinic.com`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@drjdpaulclinic.com
              </a>
              <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" /> {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>

        <div className={cn(
          "container-site flex items-center justify-between transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}>
          
          {/* Logo */}
          <Link href="/" className="inline-flex items-center">
            <div className={cn(
              "relative transition-all duration-300 flex items-center",
              scrolled ? "h-8 sm:h-10 w-auto" : "h-10 sm:h-12 w-auto"
            )}>
              <img 
                src="/images/logo.png" 
                alt="Dr. J.D. Paul's Empirical Wellness Clinic Logo" 
                className={cn(
                  "h-full w-auto object-contain transition-all duration-300",
                  !scrolled && "drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                )}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "font-body text-sm font-medium transition-all duration-200 relative",
                        scrolled
                          ? isActive 
                            ? "text-brand-red font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-brand-red after:rounded-full" 
                            : "text-brand-navy hover:text-brand-red"
                          : isActive
                            ? "text-white font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
                            : "text-white/80 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 focus:outline-none transition-colors",
              scrolled ? "text-brand-navy" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div 
          className={cn(
            "absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-brand-border">
            <span className="font-heading font-bold text-brand-navy text-lg">Menu</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-brand-gray hover:text-brand-red transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block font-body text-lg font-medium transition-colors",
                        isActive ? "text-brand-red font-semibold" : "text-brand-navy hover:text-brand-red"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="p-6 border-t border-brand-border bg-brand-offwhite">
            <Link 
              href="/contact" 
              className="btn-primary w-full py-4 text-base shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex">
        <a 
          href={`tel:${CLINIC.phoneRaw}`} 
          className="flex-1 flex flex-col items-center justify-center py-2.5 text-brand-navy hover:bg-brand-offwhite transition-colors font-body text-[11px] font-semibold"
        >
          <Phone className="w-5 h-5 mb-0.5 text-brand-red" />
          Call Us
        </a>
        <div className="w-[1px] bg-brand-border my-2"></div>
        <a 
          href={CLINIC.whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2.5 text-brand-navy hover:bg-brand-offwhite transition-colors font-body text-[11px] font-semibold"
        >
          {/* Custom WhatsApp Icon using SVG to ensure correct brand color (#25D366) */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 mb-0.5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </>
  );
}
