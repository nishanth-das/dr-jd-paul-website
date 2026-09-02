"use client";

import { useEffect, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLINIC } from "@/lib/constants";
import { MapPin } from "lucide-react";

export default function MapEmbed() {
  const [isOpenToday, setIsOpenToday] = useState(true);

  useEffect(() => {
    // 0 = Sunday, 1 = Monday, ... 4 = Thursday ... 6 = Saturday
    const today = new Date().getDay();
    setIsOpenToday(today !== 4); // Thursday = 4 = Closed
  }, []);

  return (
    <section className="bg-brand-offwhite">
      {/* Top Band */}
      <div className="container-site py-16">
        <SectionHeader
          eyebrow="FIND US"
          title="Visit Our Clinic"
          subtitle="Akhaura Road, Opposite to Niljyoti Travel Agency, Agartala, Tripura — 799001"
          align="center"
        />
        
        <a
          href={CLINIC.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-6 mx-auto w-fit flex items-center justify-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Get Directions
        </a>
      </div>

      {/* Map Iframe */}
      <div className="w-full h-[420px] lg:h-[500px] relative">
        {/* 
          Real Google Maps embed URL for Dr. J.D. Paul's Clinic
        */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5485010959896!2d91.2656033!3d23.834649099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f518b6cb0047%3A0xe890bb78bfe95d97!2sDr.JD%20PAUL&#39;S%20EMPIRICAL%20WELLNESS%20CLINIC!5e0!3m2!1sen!2sin!4v1779096919754!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. J.D. Paul's Empirical Wellness Clinic — Google Maps"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
