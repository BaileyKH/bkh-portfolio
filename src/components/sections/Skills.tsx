"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillChip from "@/components/ui/SkillChip";

// All skills flat for the marquee ticker
const allSkills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Lua",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Figma",
  "PostgreSQL",
  "MariaDB",
  "REST APIs",
  "Git",
  "Jest",
  "Vitest",
  "CI/CD",
  "HTML/CSS",
  "Bootstrap",
];

const categoryVariants = ["green", "purple", "green", "purple"] as const;

export default function Skills() {
  // Duplicate for seamless loop
  const ticker = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="pt-36 pb-28 px-6 bg-crypt relative overflow-hidden">
      {/* Subtle purple atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(92,34,128,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader eyebrow="02 — The Arsenal" title="Skills" />

        {/* Scrolling marquee ticker */}
        <div className="mb-16 overflow-hidden relative">
          {/* Fade edges */}
          <div
            className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #140d1f, transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #140d1f, transparent)" }}
          />
          <div className="marquee-track py-1">
            {ticker.map((skill, i) => (
              <span key={i} className="flex items-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60 whitespace-nowrap px-4">
                  {skill}
                </span>
                <span className="text-brew/40 text-xs">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Skills — vertical category list */}
        <div className="space-y-0">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start py-8 border-b border-bone/10 last:border-0"
            >
              {/* Category label */}
              <div className="md:pt-1">
                <h3 className="font-cinzel text-lg font-bold text-bone/80 leading-tight">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-brew/40 mt-1 block">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.05 + skillIndex * 0.04,
                    }}
                  >
                    <SkillChip
                      label={skill}
                      variant={categoryVariants[groupIndex]}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
