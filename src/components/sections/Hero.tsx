"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const TYPED_WORDS = [
  "Software Engineer",
  "Frontend Architect",
  "Systems Builder",
  "Full-Stack Dev",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");
  const [ruleSweep, setRuleSweep] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRuleSweep(true), 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(
          () => setDisplayed(word.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 400);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
    >
      {/* Atmospheric fog layers */}
      <div
        className="fog-1 absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(75,139,90,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="fog-2 absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 70% 40%, rgba(92,34,128,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(20,13,31,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(75,139,90,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(75,139,90,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large decorative // glyph — background */}
      <div
        className="absolute pointer-events-none select-none font-cinzel font-black text-brew/[0.04] leading-none"
        style={{ fontSize: "clamp(12rem, 35vw, 28rem)", top: "5%", left: "-5%" }}
        aria-hidden
      >
        //
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-brew mb-6"
        >
          Phoenix, AZ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-bone leading-none tracking-wide mb-4"
        >
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                word
              ) : (
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(232,232,232,0.45)" }}
                >
                  {word}
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Animated rule sweep under name */}
        <div className="h-px mb-6 overflow-hidden">
          {ruleSweep && (
            <div
              className="rule-sweep h-full bg-brew"
              style={{ opacity: 0 }}
            />
          )}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="h-px bg-brew w-full"
          />
        </div>

        {/* Typing animation with ▮ block cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-mono text-lg md:text-xl text-mist mb-8 h-8 flex items-center justify-center gap-0"
        >
          <span className="text-brew mr-2">▮</span>
          <span>{displayed}</span>
          <span className="cursor-blink ml-0.5 w-[2px] h-5 bg-brew inline-block" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="font-cinzel italic text-base md:text-lg text-mist mb-12 max-w-lg mx-auto tracking-wide"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-brew text-void font-mono text-sm uppercase tracking-widest hover:bg-glow transition-colors rounded"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-bone/30 text-bone font-mono text-sm uppercase tracking-widest hover:border-brew hover:text-brew transition-colors rounded"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
      >
        <span className="font-mono text-xs text-mist uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-brew to-transparent" />
      </motion.div>
    </section>
  );
}
