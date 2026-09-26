export const CLINIC = {
  name: "Dr. J.D. Paul's Empirical Wellness Clinic",
  doctor: "Dr. Joydeep Paul",
  qualification: "B.H.M.S",
  specialization: "Homoeopathic Physician & Consultant",
  registration: "580/19 — Council of Homoeopathic Medicine, Tripura",
  experience: "6+ Years",
  phone: "+91 88374 18755",
  phoneRaw: "918837418755",
  whatsappLink: "https://wa.me/918837418755?text=Hello%20Dr.%20Paul%2C%20I%20would%20like%20to%20book%20a%20consultation.",
  address: "Akhaura Road, Opposite to Niljyoti Travel Agency, Agartala, Tripura — 799001",
  addressShort: "Akhaura Road, Agartala, Tripura",
  pincode: "799001",
  city: "Agartala",
  state: "Tripura",
  timings: [
    { days: "Monday – Sunday", hours: "10:00 AM – 2:00 PM  &  5:00 PM – 10:00 PM" },
  ],
  payment: ["Cash", "UPI"],
  languages: ["Bengali", "English", "Hindi"],
  facebook: "https://www.facebook.com/drjoydeep.paul",
  mapsEmbed: "https://www.google.com/maps?q=Dr.+J.D.+Paul%27s+Empirical+Wellness+Clinic+Akhaura+Road+Agartala&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Dr.+J.D.+Paul%27s+Empirical+Wellness+Clinic+Agartala",
  conditions: [
    { name: "PCOD / PCOS",           icon: "activity" },
    { name: "Piles, Fissure, Fistula", icon: "activity" },
    { name: "Fatty Liver",            icon: "shield-plus" },
    { name: "Liver Cirrhosis",        icon: "heart-pulse" },
    { name: "Infertility (Male & Female)", icon: "baby" },
    { name: "Chronic & Lifestyle",    icon: "leaf" },
  ],
};

export const NAV_LINKS = [
  { label: "Home",              href: "/" },
  { label: "About",             href: "/about" },
  { label: "Services",          href: "/services" },
  { label: "Why Homoeopathy",   href: "/why-homoeopathy" },
  { label: "Gallery",           href: "/gallery" },
  { label: "Blog",              href: "/blog" },
  { label: "Contact",           href: "/contact" },
];

// Brand color tokens (for reference in inline styles if needed)
export const COLORS = {
  red    : "#CC2229",   // Primary — CTAs, buttons, active states
  navy   : "#1B2A6B",   // Secondary — header, footer, headings
  green  : "#2E7D52",   // Accent — icons, badges, nature elements
  offWhite: "#F8F8F8",  // Page background
  white  : "#FFFFFF",   // Cards, surfaces
  charcoal: "#1C1C1C",  // Body text
  gray   : "#6B7280",   // Muted / captions
  border : "#E5E7EB",   // Borders, dividers
};
