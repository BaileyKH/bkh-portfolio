"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      <div className="fog-1 bg-hero-fog-green absolute inset-0 pointer-events-none" />
      <div className="fog-2 bg-hero-fog-purple absolute inset-0 pointer-events-none" />

      {/* 404 watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="font-cinzel font-black text-watermark-hero text-transparent text-stroke-hero opacity-10 missing-pulse leading-none">
          404
        </span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-sm uppercase tracking-widest text-brew mb-6"
        >
          error_404
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-black text-bone leading-tight tracking-wide mb-6"
        >
          Lost in the Void
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-mist text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          Whatever you were looking for has been swallowed by the depths.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-brew text-void font-mono text-sm uppercase tracking-widest hover:bg-glow transition-colors rounded glow-pulse"
          >
            ← Return Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
