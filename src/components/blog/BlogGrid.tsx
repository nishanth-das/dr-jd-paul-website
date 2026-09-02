"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

// Initial blog data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding PCOD & PCOS: A Homoeopathic Approach",
    excerpt: "Learn how classical homoeopathy addresses the root cause of hormonal imbalances in women rather than just suppressing symptoms.",
    image: "/images/doctor/hero-placeholder.png", 
    date: "Sep 2, 2026",
    author: "Dr. Joydeep Paul",
    category: "Women's Health",
    slug: "#",
  },
  {
    id: 2,
    title: "Reversing Fatty Liver Naturally",
    excerpt: "Dietary changes and homoeopathic remedies can significantly improve liver function and reverse fatty liver disease.",
    image: "/images/clinic/interior-overview.jpg", 
    date: "Aug 28, 2026",
    author: "Dr. Joydeep Paul",
    category: "Liver Health",
    slug: "#",
  },
  {
    id: 3,
    title: "Why Choose Classical Homoeopathy?",
    excerpt: "Discover the difference between classical homoeopathy and conventional medicine, and why treating the whole person matters.",
    image: "/images/doctor/dr-paul-consulting.jpg", 
    date: "Aug 15, 2026",
    author: "Dr. Joydeep Paul",
    category: "Homoeopathy",
    slug: "#",
  }
];

export default function BlogGrid() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="card group flex flex-col h-full overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="badge-green shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-brand-gray mb-3 uppercase tracking-wider font-body">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                </div>

                <h3 className="font-heading text-xl text-brand-navy mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                  <Link href={post.slug} className="focus:outline-none">
                    {/* Expand click area to entire card */}
                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>

                <p className="font-body text-sm text-brand-charcoal leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-brand-border flex items-center justify-between">
                  <span className="text-brand-red font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
