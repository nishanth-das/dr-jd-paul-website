import type { Metadata } from "next";
import PageHero         from "@/components/about/PageHero";
import ConditionCard    from "@/components/services/ConditionCard";
import TreatmentProcess from "@/components/services/TreatmentProcess";
import FAQAccordion     from "@/components/services/FAQAccordion";
import ServicesCTA      from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Conditions Treated — PCOD, Fatty Liver, Fertility | Dr. J.D. Paul's Clinic",
  description:
    "Dr. Joydeep Paul treats PCOD/PCOS, Fatty Liver, Liver Cirrhosis, Male & Female Sterility and chronic diseases with classical Homoeopathy in Agartala, Tripura.",
  keywords: [
    "PCOD PCOS homoeopathy Agartala",
    "fatty liver treatment Tripura",
    "liver cirrhosis homoeopathy",
    "female infertility homoeopathy Agartala",
    "male infertility treatment homoeopathy",
    "chronic disease homoeopathy Agartala",
    "homoeopathy services Agartala",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE TREAT"
        title="Conditions & Services"
        subtitle="Classical Homoeopathic treatment for chronic, hormonal, and lifestyle conditions — natural, safe, and effective."
        breadcrumb={[{ label: "Services", href: "/services" }]}
        align="center"
      />
      <ConditionCard />
      <TreatmentProcess />
      <FAQAccordion />
      <ServicesCTA />
    </>
  );
}
