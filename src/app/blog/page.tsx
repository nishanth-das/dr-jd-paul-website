import type { Metadata } from "next";
import PageHero from "@/components/about/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Health Tips | Dr. J.D. Paul's Clinic",
  description:
    "Read the latest articles, health tips, and insights on Homoeopathy by Dr. Joydeep Paul.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="HEALTH & INSIGHTS"
        title="Our Blog"
        subtitle="Expert advice, health tips, and stories about the healing power of Homoeopathy."
        breadcrumb={[{ label: "Blog", href: "/blog" }]}
        align="center"
      />
      <BlogGrid />
    </>
  );
}
