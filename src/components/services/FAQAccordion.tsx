"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Homoeopathy safe for children and the elderly?",
      a: "Yes, absolutely. Homoeopathic medicines are prepared through a process of extreme dilution and are completely free of toxic side effects. They are safe for newborns, children, pregnant women, and the elderly. This is one of the most significant advantages of Homoeopathy over conventional medicine.",
    },
    {
      q: "How long does Homoeopathic treatment take to show results?",
      a: "This varies significantly depending on the condition, its severity, and how long you have had it. Acute conditions (colds, infections) often respond within hours to days. Chronic conditions like PCOD or fatty liver typically require 3–6 months of consistent treatment to show significant improvement. Dr. Paul will give you a realistic timeline during your consultation.",
    },
    {
      q: "Can Homoeopathy be taken alongside allopathic medicines?",
      a: "In most cases, yes. Homoeopathic medicines generally do not interfere with allopathic medications. However, it is important to inform Dr. Paul about all medicines you are currently taking. He will advise you appropriately and help you gradually reduce allopathic dependency as your condition improves.",
    },
    {
      q: "Does Homoeopathy have side effects?",
      a: "Genuine classical Homoeopathic medicines, when prescribed correctly, have no toxic side effects. In some cases, patients may experience a temporary 'initial aggravation' — a brief worsening of symptoms — which is actually a positive sign that the remedy is working. This passes quickly and is followed by improvement.",
    },
    {
      q: "What should I bring to my first consultation?",
      a: "Please bring any relevant medical reports, test results (blood work, ultrasound, MRI, etc.), a list of current medications, and any previous prescriptions. The more information Dr. Paul has, the more precise your treatment will be. There is no need to stop any current medications before your first visit.",
    },
    {
      q: "Do you offer online or home consultations?",
      a: "Currently, Dr. Paul sees patients in-person at the clinic on Akhaura Road, Agartala. For follow-up consultations or patients who are unable to visit in person, please contact us via WhatsApp or phone to discuss availability.",
    },
  ];

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your first consultation."
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className="border border-brand-border rounded-xl overflow-hidden transition-colors duration-200 shadow-sm hover:border-brand-gray/30"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={`w-full flex justify-between items-center p-5 cursor-pointer transition-colors ${isOpen ? "bg-brand-offwhite" : "bg-white"}`}
                >
                  <span className="font-body font-semibold text-brand-navy text-left pr-6">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="text-brand-red flex-shrink-0 w-5 h-5" />
                  ) : (
                    <Plus className="text-brand-red flex-shrink-0 w-5 h-5" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100 bg-brand-offwhite" : "max-h-0 opacity-0 bg-white"}`}
                >
                  <div className="px-5 pb-5 font-body text-sm text-brand-gray leading-relaxed border-t border-transparent">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
