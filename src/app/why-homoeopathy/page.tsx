import type { Metadata } from "next";
import PageHero           from "@/components/about/PageHero";
import WhatIsHomoeopathy  from "@/components/why/WhatIsHomoeopathy";
import CorePrinciples     from "@/components/why/CorePrinciples";
import GovtRecognition    from "@/components/why/GovtRecognition";
import WhyCTA             from "@/components/why/WhyCTA";

export const metadata: Metadata = {
  title: "Why Homoeopathy? Science, Principles & Benefits | Dr. J.D. Paul's Clinic",
  description:
    "Learn why Homoeopathy works — its founding principles, government recognition by AYUSH, and how it compares to conventional medicine. Classical Homoeopathy in Agartala, Tripura.",
  keywords: [
    "why homoeopathy works",
    "homoeopathy AYUSH government India",
    "homoeopathy principles Hahnemann",
    "homoeopathy benefits no side effects",
    "classical homoeopathy Agartala",
    "CCRH homoeopathy research",
  ],
};

export default function WhyHomoeopathyPage() {
  return (
    <>
      <PageHero
        eyebrow="THE SCIENCE OF NATURAL HEALING"
        title="Why Homoeopathy?"
        subtitle="An ancient science validated by modern research — safe, effective, and government-recognised."
        breadcrumb={[{ label: "Why Homoeopathy", href: "/why-homoeopathy" }]}
        align="center"
      />
      <WhatIsHomoeopathy />
      <CorePrinciples />
      <GovtRecognition />
      <WhyCTA />
    </>
  );
}
