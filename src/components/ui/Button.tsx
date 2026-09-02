import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline-red";
  size?: "sm" | "md" | "lg";
  href?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  let variantClass = "btn-primary";
  if (variant === "secondary") variantClass = "btn-secondary";
  if (variant === "outline-red") variantClass = "btn-outline-red";

  // size mapping if needed, though classes are primarily defined in css. 
  // Let's add size classes if necessary, or just rely on the CSS defaults.
  let sizeClass = "";
  if (size === "sm") sizeClass = "px-5 py-2.5 text-sm";
  if (size === "lg") sizeClass = "px-8 py-4 text-body-lg";

  const finalClassName = cn(variantClass, sizeClass, className);

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
