import SectionHeader from "@/components/ui/SectionHeader";
import { Landmark, Microscope, BookOpen } from "lucide-react";

export default function GovtRecognition() {
  const recognitions = [
    {
      icon: "Landmark",
      iconBg: "bg-blue-50",
      iconColor: "text-brand-navy",
      title: "Ministry of AYUSH",
      subtitle: "Government of India",
      desc: "Homoeopathy is one of the five systems of medicine officially recognised and promoted by the Ministry of AYUSH (Ayurveda, Yoga, Unani, Siddha, Homoeopathy) — a dedicated Ministry of the Government of India.",
      badge: "Govt. of India",
      badgeVariant: "badge-navy",
    },
    {
      icon: "Microscope",
      iconBg: "bg-green-50",
      iconColor: "text-brand-green",
      title: "CCRH — Research Body",
      subtitle: "Central Council of Research in Homoeopathy",
      desc: "The CCRH, under the Ministry of AYUSH, is the apex body for conducting, coordinating, and promoting research in Homoeopathy. Dr. Joydeep Paul serves as a Research Fellow at CCRH.",
      badge: "Dr. Paul is a Fellow",
      badgeVariant: "badge-green",
    },
    {
      icon: "BookOpen",
      iconBg: "bg-red-50",
      iconColor: "text-brand-red",
      title: "National Health Policy",
      subtitle: "Included in India's Healthcare Framework",
      desc: "India's National Health Policy includes Homoeopathy as an integral part of the national healthcare system, with over 200,000 registered Homoeopathic physicians practising across the country.",
      badge: "National Policy",
      badgeVariant: "badge-red",
    },
  ];

  const stats = [
    { number: "200,000+", label: "Registered Homoeopaths in India" },
    { number: "100M+",    label: "Patients Treated Annually" },
    { number: "200+",     label: "Years of Clinical History" },
  ];

  return (
    <section className="bg-brand-offwhite section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="OFFICIAL RECOGNITION"
          title="Recognised by the Government of India"
          subtitle="Homoeopathy is not alternative medicine — it is mainstream healthcare in India, backed by the government."
          align="center"
        />

        {/* Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {recognitions.map((rec, idx) => (
            <div key={idx} className="card p-7 text-center flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${rec.iconBg}`}>
                {rec.icon === "Landmark" && <Landmark className={`w-8 h-8 ${rec.iconColor}`} />}
                {rec.icon === "Microscope" && <Microscope className={`w-8 h-8 ${rec.iconColor}`} />}
                {rec.icon === "BookOpen" && <BookOpen className={`w-8 h-8 ${rec.iconColor}`} />}
              </div>
              
              <h3 className="font-heading text-h4 text-brand-navy mt-5">
                {rec.title}
              </h3>
              
              <p className="font-body text-xs text-brand-red font-semibold mt-1 uppercase tracking-wide">
                {rec.subtitle}
              </p>
              
              <p className="font-body text-sm text-brand-gray mt-3 leading-relaxed flex-grow">
                {rec.desc}
              </p>
              
              <div className={`${rec.badgeVariant} mt-5 mx-auto w-fit`}>
                {rec.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="bg-brand-navy rounded-xl2 p-8 mt-12 shadow-lg relative overflow-hidden">
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20 relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center py-4 sm:py-0 first:pt-0 sm:first:pt-0 last:pb-0 sm:last:pb-0">
                <div className="font-heading text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="font-body text-sm lg:text-base text-white/70 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
