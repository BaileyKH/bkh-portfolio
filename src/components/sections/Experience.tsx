"use client";

import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineEntry from "@/components/ui/TimelineEntry";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-void relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader eyebrow="03 — Where I've Been" title="Experience" />

        <div className="relative">
          {/* Center dashed vertical line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(75,139,90,0.25) 0, rgba(75,139,90,0.25) 8px, transparent 8px, transparent 16px)",
            }}
          />

          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
