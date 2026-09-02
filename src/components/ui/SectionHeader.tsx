import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <span className="block text-brand-red font-body text-xs tracking-widest font-semibold uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={cn("section-subtitle", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
