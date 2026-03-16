"use client";

import { motion } from "framer-motion";

interface SkillChipProps {
  label: string;
  variant?: "green" | "purple";
}

export default function SkillChip({
  label,
  variant = "green",
}: SkillChipProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-block font-mono text-xs px-3 py-1.5 rounded border transition-colors cursor-default select-none ${
        variant === "green"
          ? "border-brew/40 text-brew bg-brew/10 hover:bg-brew/20 hover:border-brew/70"
          : "border-hex/40 text-dusk/80 bg-hex/10 hover:bg-hex/20 hover:border-hex/70"
      }`}
      style={
        variant === "purple"
          ? { color: "#a78bfa", borderColor: "rgba(92,34,128,0.6)" }
          : undefined
      }
    >
      {label}
    </motion.span>
  );
}
