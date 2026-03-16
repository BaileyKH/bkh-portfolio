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
      <div className="fog-1 bg-hero-fog-green absolute inset-0 pointer-events-none" />
      <div className="fog-2 bg-hero-fog-purple absolute inset-0 pointer-events-none" />
      <div className="bg-hero-fog-bottom absolute inset-0 pointer-events-none" />

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
                <span className="text-transparent text-stroke-hero">
                  {word}
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="origin-left h-px bg-brew w-full mb-6"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-mono text-lg md:text-xl text-mist mb-8 h-8 flex items-center justify-center"
        >
          <span className="text-brew mr-2">▮</span>
          <span>{displayed}</span>
          <span className="cursor-blink ml-0.5 w-0.5 h-5 bg-brew inline-block" />
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
    </section>
  );
}
