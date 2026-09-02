import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: {
    label: string;
    href: string;
  }[];
  align?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  align = "center",
}: PageHeroProps) {
  const alignmentClasses = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <section className="relative bg-[#021013] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Premium Ambient Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-[#043325] blur-[140px] opacity-60 rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[120%] bg-brand-navy blur-[120px] opacity-70 rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className={`container-site relative z-10 flex flex-col ${alignmentClasses}`}>
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="hidden md:flex items-center text-white/60 text-[11px] font-body mb-6 flex-wrap tracking-[0.15em] uppercase font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, idx) => (
              <span key={idx} className="flex items-center">
                <ChevronRight className="w-3 h-3 mx-2 shrink-0 opacity-50" />
                {idx === breadcrumb.length - 1 ? (
                  <span className="text-white drop-shadow-md">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow / Trust Badge */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-5 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
            </span>
            <span className="text-xs font-body font-bold text-white tracking-widest uppercase drop-shadow-md">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mt-2 leading-[1.1] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-body text-base lg:text-lg text-white/90 mt-5 max-w-2xl font-medium drop-shadow-md leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
