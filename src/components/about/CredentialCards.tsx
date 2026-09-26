import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap, ClipboardList, Microscope } from "lucide-react";

export default function CredentialCards() {
  const credentials = [
    {
      icon: "GraduationCap",
      iconBg: "bg-green-50",
      iconColor: "text-brand-green",
      title: "B.H.M.S — Bachelor of Homoeopathic Medicine & Surgery",
      issuer: "West Bengal University of Health Sciences",
      detail: "4-year undergraduate medical degree with clinical training",
      year: "2019",
    },
    {
      icon: "ClipboardList",
      iconBg: "bg-red-50",
      iconColor: "text-brand-red",
      title: "Registered Homoeopathic Physician",
      issuer: "Council of Homoeopathic Medicine, Tripura",
      detail: "Registration No. 580/19 — legally authorised to practice Homoeopathy in India",
      year: "Reg. No. 580/19",
    },
    {
      icon: "Microscope",
      iconBg: "bg-blue-50",
      iconColor: "text-brand-navy",
      title: "Ex-Research Fellow",
      issuer: "Central Council of Research in Homoeopathy (CCRH)",
      detail: "Apex body for Homoeopathic research under the Ministry of AYUSH, Govt. of India",
      year: "Served till 2024",
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <SectionHeader
          eyebrow="QUALIFICATIONS"
          title="Credentials & Registrations"
          subtitle="Fully qualified, government-registered, and committed to evidence-based Homoeopathy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {credentials.map((cred, idx) => (
            <div key={idx} className="card p-7 text-center group hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${cred.iconBg}`}>
                {cred.icon === "GraduationCap" && <GraduationCap className={`w-8 h-8 ${cred.iconColor}`} />}
                {cred.icon === "ClipboardList" && <ClipboardList className={`w-8 h-8 ${cred.iconColor}`} />}
                {cred.icon === "Microscope" && <Microscope className={`w-8 h-8 ${cred.iconColor}`} />}
              </div>
              
              <h3 className="font-heading text-h4 text-brand-navy mt-5">
                {cred.title}
              </h3>
              
              <p className="font-body text-sm text-brand-red font-semibold mt-1">
                {cred.issuer}
              </p>
              
              <p className="font-body text-sm text-brand-gray mt-2 flex-grow">
                {cred.detail}
              </p>
              
              <div className="badge-navy mt-4 mx-auto w-fit">
                {cred.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
