"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-16 ${className}`}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brew mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-bone leading-tight">
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-px w-12 bg-brew" />
        <div className="h-px flex-1 bg-bone/10" />
      </div>
    </motion.div>
  );
}
