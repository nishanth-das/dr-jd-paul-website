"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Users, MapPin, Leaf } from "lucide-react";

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for a smooth slowdown at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end]);

  return (
    <div ref={ref} className="font-body text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight">
      {count}{suffix}
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { icon: "CalendarCheck", end: 50,   suffix: "+", label: "Conditions Treated"    },
    { icon: "Users",         end: 5000, suffix: "+", label: "Patients Treated"      },
    { icon: "Leaf",          end: 100,  suffix: "%", label: "Natural Treatment"     },
  ];

  return (
    <section className="bg-brand-navy py-10 md:py-16">
      <div className="container-site px-2 sm:px-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-1 sm:px-4">
              <div className="mb-2 sm:mb-4 bg-white/10 p-2 sm:p-3 rounded-full border border-white/20 shadow-lg">
                {stat.icon === "CalendarCheck" && <CalendarCheck className="w-5 h-5 sm:w-8 sm:h-8 text-brand-green" />}
                {stat.icon === "Users" && <Users className="w-5 h-5 sm:w-8 sm:h-8 text-brand-green" />}
                {stat.icon === "MapPin" && <MapPin className="w-5 h-5 sm:w-8 sm:h-8 text-brand-green" />}
                {stat.icon === "Leaf" && <Leaf className="w-5 h-5 sm:w-8 sm:h-8 text-brand-green" />}
              </div>
              <Counter end={stat.end} suffix={stat.suffix} />
              <div className="font-body text-[9px] sm:text-sm text-white/70 mt-1 sm:mt-2 uppercase tracking-wider font-semibold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
