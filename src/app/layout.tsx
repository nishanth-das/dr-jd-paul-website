import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Dr. J.D. Paul's Empirical Wellness Clinic — Homoeopathic Physician, Agartala",
    template: "%s | Dr. J.D. Paul's Empirical Wellness Clinic",
  },
  description:
    "Dr. Joydeep Paul — BHMS Homoeopathic Physician & Consultant in Agartala, Tripura. Specialist in PCOD/PCOS, Fatty Liver, Liver Cirrhosis, and Fertility treatment. Classical Homoeopathy with modern techniques.",
  keywords: [
    "homoeopathic doctor Agartala",
    "homeopathy clinic Tripura",
    "PCOD PCOS treatment Agartala",
    "Dr Joydeep Paul",
    "Empirical Wellness Clinic",
    "fatty liver treatment homoeopathy",
    "fertility treatment Agartala",
    "BHMS doctor Agartala",
  ],
  authors: [{ name: "Dr. Joydeep Paul" }],
  creator: "Local Rank India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dr. J.D. Paul's Empirical Wellness Clinic",
    title: "Dr. J.D. Paul's Empirical Wellness Clinic — Agartala",
    description:
      "Classical Homoeopathic treatment for PCOD/PCOS, Fatty Liver, Liver Cirrhosis, and Fertility — Agartala, Tripura.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body text-brand-charcoal bg-brand-offwhite antialiased pb-[60px] md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
