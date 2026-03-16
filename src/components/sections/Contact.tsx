"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-depths relative overflow-hidden">
      <div className="bg-contact-glow absolute inset-0 pointer-events-none" />
      <div className="scan-line bg-scan-gradient absolute left-0 right-0 h-px pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader eyebrow="05 — Let's Talk" title="Get in Touch" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8"
        >
          <p className="font-cinzel text-2xl md:text-3xl text-bone leading-relaxed max-w-2xl mx-auto tracking-wide">
            Let&apos;s build something.
          </p>
          {/* <p className="text-mist text-lg max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a startup idea, a performance problem, or a project
            that needs a steady hand — I&apos;m listening.
          </p> */}

          {/* Email with copy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className={`group relative flex items-center gap-3 bg-crypt border border-bone/20 hover:border-brew/50 rounded-lg px-6 py-4 transition-all overflow-hidden ${
                copied ? "shadow-email-copied" : ""
              }`}
            >
              {/* Drip underline */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brew group-hover:w-full transition-all duration-500" />
              <span className="font-mono text-sm text-mist group-hover:text-brew transition-colors">
                {personalInfo.email}
              </span>
              <span
                className={`font-mono text-xs border px-2 py-0.5 rounded transition-all ${
                  copied
                    ? "text-glow border-glow/40"
                    : "text-brew border-brew/40"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-mist hover:text-brew transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brew/50 group-hover:bg-brew transition-colors" />
              LinkedIn
            </a>
            <div className="w-px h-4 bg-bone/20" />
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-mist hover:text-brew transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brew/50 group-hover:bg-brew transition-colors" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
