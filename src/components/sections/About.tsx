"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-void overflow-hidden clip-angled-bottom"
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader eyebrow="01 — Who I Am" title="About Me" />

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
            <div className="absolute -left-0.75 top-0 w-1.5 h-full bg-brew opacity-30 blur-sm" />
          </motion.blockquote>

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
      </div>
    </section>
  );
}
