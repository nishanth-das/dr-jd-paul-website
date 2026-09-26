import type { Metadata } from "next";
import Hero                  from "@/components/home/Hero";
import ConditionsGrid        from "@/components/home/ConditionsGrid";
import AboutSnippet          from "@/components/home/AboutSnippet";
import WhyHomoeopathyStrip   from "@/components/home/WhyHomoeopathyStrip";
import StatsBar              from "@/components/home/StatsBar";
import Testimonials          from "@/components/home/Testimonials";
import AppointmentCTA        from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: "Homoeopathic Doctor in Agartala | Dr. J.D. Paul's Empirical Wellness Clinic",
  description:
    "Dr. Joydeep Paul — Homoeopathic Physician & Consultant in Agartala, Tripura. Specialist in PCOD/PCOS, Fatty Liver, Liver Cirrhosis & Fertility. Book your consultation today.",
  keywords: [
    "homoeopathic doctor Agartala",
    "homeopathy clinic Agartala Tripura",
    "PCOD PCOS treatment Agartala",
    "Dr Joydeep Paul homoeopathy",
    "Empirical Wellness Clinic Agartala",
    "best homeopath Agartala",
  ],
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Physician"],
    "name": "Dr. J.D. Paul's Empirical Wellness Clinic",
    "description": "Classical Homoeopathic treatment for PCOD/PCOS, Fatty Liver, Liver Cirrhosis and Fertility — Agartala, Tripura.",
    "url": "https://www.drjdpaul.com",   // Update with real domain later
    "telephone": "+918837418755",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Akhaura Road, Opposite to Niljyoti Travel Agency",
      "addressLocality": "Agartala",
      "addressRegion": "Tripura",
      "postalCode": "799001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "17:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI",
    "medicalSpecialty": "Homoeopathy",
    "sameAs": ["https://www.facebook.com/drjoydeep.paul"]
  };

  return (
    <>
      <Hero />
      <ConditionsGrid />
      <AboutSnippet />
      <WhyHomoeopathyStrip />
      <StatsBar />
      <Testimonials />
      <AppointmentCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
