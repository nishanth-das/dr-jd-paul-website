import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BadgeProps = {
  variant?: "green" | "red" | "navy";
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ variant = "green", children, className }: BadgeProps) {
  let cssClass = "badge-green";
  if (variant === "red") cssClass = "badge-red";
  if (variant === "navy") cssClass = "badge-navy";

  return (
    <span className={cn(cssClass, className)}>
      {children}
    </span>
  );
}
