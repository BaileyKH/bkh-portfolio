"use client";

import { motion } from "framer-motion";
import { Experience } from "@/lib/data";

interface TimelineEntryProps {
  experience: Experience;
  index: number;
}

export default function TimelineEntry({
  experience,
  index,
}: TimelineEntryProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 items-start mb-16"
    >
      <div className={`hidden md:block ${isEven ? "md:text-right" : ""}`}>
        {isEven && <EntryContent experience={experience} align="right" />}
      </div>
      <div className="hidden md:flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-brew border-2 border-glow mt-2 glow-pulse z-10" />
      </div>
      <div className="hidden md:block">
        {!isEven && <EntryContent experience={experience} align="left" />}
      </div>
      <div className="md:hidden col-span-full flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-brew border-2 border-glow mt-1.5 shrink-0" />
          <div className="timeline-dashed-mobile opacity-40 w-px flex-1 mt-1" />
        </div>
        <div className="flex-1 pb-6">
          <EntryContent experience={experience} align="left" />
        </div>
      </div>
    </motion.div>
  );
}

function EntryContent({
  experience,
  align,
}: {
  experience: Experience;
  align: "left" | "right";
}) {
  const year = experience.period.match(/\d{4}/)?.[0] ?? "";

  return (
    <div
      className={`relative overflow-hidden bg-crypt border border-bone/10 rounded-lg p-6 group hover:border-brew/30 transition-colors ${
        align === "right" ? "md:mr-4" : "md:ml-4"
      }`}
    >
      <span
        className={`text-watermark-sm absolute bottom-[-0.1em] pointer-events-none select-none font-cinzel font-black text-bone/4 leading-none whitespace-nowrap ${
          align === "right" ? "left-[-0.1em]" : "right-[-0.1em]"
        }`}
        aria-hidden
      >
        {experience.company}
      </span>
      <div className="absolute left-0 top-0 w-0.5 h-0 bg-brew group-hover:h-full transition-all duration-500 rounded-l-lg" />
      <div className={`flex items-center gap-2 mb-3 ${align === "right" ? "md:justify-end" : ""}`}>
        <span className="font-mono text-xs text-mist/50 border border-bone/10 px-2 py-0.5 rounded">
          {year}
        </span>
      </div>
      <div className={`flex flex-wrap items-baseline gap-2 mb-1 ${align === "right" ? "md:justify-end" : ""}`}>
        <h3 className="font-cinzel text-lg font-bold text-brew">
          {experience.company}
        </h3>
        <span className="font-mono text-xs text-mist">{experience.location}</span>
      </div>
      <div className={`flex flex-wrap gap-2 mb-4 ${align === "right" ? "md:justify-end" : ""}`}>
        <span className="font-mono text-sm text-bone">{experience.role}</span>
        <span className="font-mono text-xs text-mist self-center">
          · {experience.period}
        </span>
      </div>
      <ul className={`space-y-2 ${align === "right" ? "md:text-right" : ""}`}>
        {experience.bullets.map((bullet, i) => (
          <li
            key={i}
            className={`text-mist text-sm leading-relaxed flex gap-2 items-start ${
              align === "right" ? "flex-row-reverse text-right" : ""
            }`}
          >
            <span className="text-brew mt-1.5 shrink-0 text-xs">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
