import type { Metadata } from "next";
import PageHero            from "@/components/about/PageHero";
import DoctorProfile       from "@/components/about/DoctorProfile";
import ExperienceTimeline  from "@/components/about/ExperienceTimeline";
import CredentialCards     from "@/components/about/CredentialCards";
import PhilosophyQuote     from "@/components/about/PhilosophyQuote";
import AboutCTA            from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Dr. Joydeep Paul — BHMS Homoeopathic Physician, Agartala",
  description:
    "Learn about Dr. Joydeep Paul — BHMS Homoeopathic Physician & Consultant in Agartala, Tripura. CCRH Research Fellow with 6+ years of experience in classical Homoeopathy.",
  keywords: [
    "Dr Joydeep Paul Agartala",
    "BHMS homoeopathic doctor Agartala",
    "CCRH Research Fellow Tripura",
    "Empirical Wellness Clinic doctor",
    "homoeopathic consultant Agartala",
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="MEET THE DOCTOR"
        title="Dr. Joydeep Paul"
        subtitle="BHMS · Homoeopathic Physician & Consultant · Agartala, Tripura"
        breadcrumb={[{ label: "About", href: "/about" }]}
        align="center"
      />
      <DoctorProfile />
      <ExperienceTimeline />
      <CredentialCards />
      <PhilosophyQuote />
      <AboutCTA />
    </>
  );
}
