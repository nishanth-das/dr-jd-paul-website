import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap, Stethoscope, Building2, Users, Microscope } from "lucide-react";
import clsx from "clsx";

export default function ExperienceTimeline() {
  const timelineItems = [
    {
      year: "2019",
      icon: "GraduationCap",
      color: "green",
      title: "Completed B.H.M.S",
      org: "West Bengal University of Health Sciences",
      desc: "Graduated with a Bachelor of Homoeopathic Medicine and Surgery — the foundation of a career in natural healing.",
    },
    {
      year: "2020",
      icon: "Stethoscope",
      color: "red",
      title: "Medical Officer",
      org: "COVID Care Center, Lalsingmura",
      desc: "Served on the frontlines during the COVID-19 pandemic as a Medical Officer, providing critical healthcare support.",
    },
    {
      year: "2020 – Present",
      icon: "Building2",
      color: "navy",
      title: "Senior Consultant",
      org: "360 Health Care",
      desc: "Continues to serve as Senior Consultant, providing expert Homoeopathic consultations to a wide range of patients.",
    },
    {
      year: "2021",
      icon: "Users",
      color: "green",
      title: "Member — HMAI",
      org: "Homoeopathic Medical Association of India",
      desc: "Became a member of the Homoeopathic Medical Association of India, joining a network of dedicated professionals.",
    },
    {
      year: "2021 – Present",
      icon: "Microscope",
      color: "red",
      title: "Research Fellow",
      org: "Central Council of Research in Homoeopathy (CCRH), Govt. of India",
      desc: "Appointed as a Research Fellow at CCRH — the apex body for Homoeopathic research in India — contributing to evidence-based Homoeopathic practice.",
    },
  ];

  return (
    <section className="bg-brand-offwhite section-padding overflow-hidden">
      <div className="container-site">
        <SectionHeader
          eyebrow="CAREER JOURNEY"
          title="Experience & Milestones"
          subtitle="A career built on dedication, continuous learning, and genuine care for patients."
          align="center"
        />

        <div className="relative mt-14 max-w-5xl mx-auto">
          {/* Vertical Line Desktop (center) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-brand-border" />
          
          {/* Vertical Line Mobile (left) */}
          <div className="block lg:hidden absolute left-5 top-0 h-full w-0.5 bg-brand-border" />

          <div className="space-y-8 lg:space-y-12">
            {timelineItems.map((item, idx) => {
              const isEven = idx % 2 !== 0; // 0-indexed, so 1, 3 are 'even' rendered items in terms of alternating
              
              // Icon Colors
              let iconBg = "bg-green-50";
              let iconColor = "text-brand-green";
              let badgeClass = "badge-green";
              
              if (item.color === "red") {
                iconBg = "bg-red-50";
                iconColor = "text-brand-red";
                badgeClass = "badge-red";
              } else if (item.color === "navy") {
                iconBg = "bg-blue-50";
                iconColor = "text-brand-navy";
                badgeClass = "badge-navy";
              }

              return (
                <div key={idx} className={clsx("relative flex lg:justify-between items-center w-full", isEven ? "lg:flex-row-reverse" : "")}>
                  
                  {/* Center Dot (Desktop & Mobile) */}
                  <div className={clsx("absolute w-4 h-4 rounded-full bg-brand-navy border-2 border-white shadow-card z-10", "left-5 -translate-x-[7px] lg:left-1/2 lg:-translate-x-1/2")} />

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden lg:block w-5/12" />

                  {/* Card Content */}
                  <div className="w-full lg:w-5/12 pl-12 lg:pl-0 flex flex-col">
                    <div className={clsx("bg-white rounded-xl2 shadow-card border border-brand-border p-5 lg:p-7 relative transition-transform hover:-translate-y-1", isEven ? "lg:text-left" : "lg:text-right")}>
                      
                      {/* Flex header depending on text alignment */}
                      <div className={clsx("flex flex-col gap-3", isEven ? "lg:items-start" : "lg:items-end", "items-start lg:items-auto")}>
                        <span className={badgeClass}>{item.year}</span>
                        
                        <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center", iconBg)}>
                          {item.icon === "GraduationCap" && <GraduationCap className={clsx("w-5 h-5", iconColor)} />}
                          {item.icon === "Stethoscope" && <Stethoscope className={clsx("w-5 h-5", iconColor)} />}
                          {item.icon === "Building2" && <Building2 className={clsx("w-5 h-5", iconColor)} />}
                          {item.icon === "Users" && <Users className={clsx("w-5 h-5", iconColor)} />}
                          {item.icon === "Microscope" && <Microscope className={clsx("w-5 h-5", iconColor)} />}
                        </div>
                      </div>

                      <h3 className={clsx("font-heading text-h4 text-brand-navy mt-4 text-left", isEven ? "lg:text-left" : "lg:text-right")}>{item.title}</h3>
                      <p className={clsx("font-body text-sm text-brand-red font-semibold mt-0.5 text-left", isEven ? "lg:text-left" : "lg:text-right")}>{item.org}</p>
                      <p className={clsx("font-body text-sm text-brand-gray mt-2 leading-relaxed text-left", isEven ? "lg:text-left" : "lg:text-right")}>{item.desc}</p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
