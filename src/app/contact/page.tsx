import type { Metadata }    from "next";
import PageHero             from "@/components/about/PageHero";
import ContactForm          from "@/components/contact/ContactForm";
import ClinicInfo           from "@/components/contact/ClinicInfo";
import MapEmbed             from "@/components/contact/MapEmbed";
import ContactPageCTA       from "@/components/contact/ContactPageCTA";

export const metadata: Metadata = {
  title: "Book an Appointment — Dr. J.D. Paul's Empirical Wellness Clinic, Agartala",
  description:
    "Book a Homoeopathic consultation with Dr. Joydeep Paul at our clinic on Akhaura Road, Agartala. Call, WhatsApp, or fill in the form. Open Mon–Wed & Fri–Sun.",
  keywords: [
    "book homoeopathy appointment Agartala",
    "Dr Joydeep Paul contact",
    "Empirical Wellness Clinic Agartala address",
    "homoeopathy clinic contact Tripura",
    "homoeopathy appointment Agartala",
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Book an Appointment"
        subtitle="Walk in, call us, or send a WhatsApp message. We will get back to you promptly."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
        align="center"
      />
      
      {/* Main split layout — Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* LEFT — Contact Form (wider) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* RIGHT — Unified Clinic Info (narrower) */}
            <div className="lg:col-span-2">
              <ClinicInfo />
            </div>

          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <MapEmbed />

      {/* Bottom CTA */}
      <ContactPageCTA />
    </>
  );
}
