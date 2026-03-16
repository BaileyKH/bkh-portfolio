"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { label: "Years Active", value: "3+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Client Satisfaction", value: "95%" },
  { label: "Load Time Reduction", value: "40%" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-void overflow-hidden clip-angled-bottom"
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader eyebrow="01 — Who I Am" title="About Me" />

        {/* Bio + pull quote */}
        <div className="max-w-3xl space-y-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-bone/80 leading-relaxed text-lg"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Pull quote — magazine callout */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative border-l-2 border-brew pl-8 py-3"
          >
            <p className="font-cinzel text-xl md:text-2xl text-bone leading-relaxed tracking-wide">
              "{personalInfo.pullQuote} <s>sh*t</s> projects."
            </p>
            <div className="absolute -left-[3px] top-0 w-1.5 h-full bg-brew opacity-30 blur-sm" />
          </motion.blockquote>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-brew border border-brew/40 px-4 py-2 hover:bg-brew/10 transition-colors rounded"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-mist border border-bone/20 px-4 py-2 hover:border-brew/40 hover:text-brew transition-colors rounded"
            >
              GitHub
            </a>
            <span className="font-mono text-xs text-mist self-center">
              <span className="text-brew mr-1">›</span>
              {personalInfo.location}
            </span>
          </motion.div>
        </div>

        {/* Stats — horizontal row */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 rounded-lg overflow-hidden border border-bone/10">
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-crypt px-6 py-8 text-center group hover:bg-depths/60 transition-colors"
            >
              <p className="font-cinzel text-4xl md:text-5xl font-black text-brew mb-2 group-hover:text-glow transition-colors">
                {value}
              </p>
              <p className="font-mono text-xs text-mist uppercase tracking-wider">
                {label}
              </p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
