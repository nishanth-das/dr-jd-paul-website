import type { Metadata } from "next";
import PageHero     from "@/components/about/PageHero";
import GalleryGrid  from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Clinic Gallery — Dr. J.D. Paul's Empirical Wellness Clinic, Agartala",
  description:
    "Take a look inside Dr. J.D. Paul's Empirical Wellness Clinic on Akhaura Road, Agartala. A clean, welcoming Homoeopathic clinic designed for your comfort and healing.",
  keywords: [
    "Dr JD Paul clinic Agartala photos",
    "Empirical Wellness Clinic gallery",
    "homoeopathy clinic Agartala",
    "clinic interior Agartala",
  ],
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR CLINIC"
        title="Clinic Gallery"
        subtitle="A clean, welcoming space on Akhaura Road, Agartala — designed for your comfort and healing."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
        align="center"
      />
      <GalleryGrid />
    </>
  );
}
