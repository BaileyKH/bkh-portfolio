"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 px-6 bg-crypt relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader eyebrow="04 — What I've Built" title="Projects" />

        {/* Featured project — full width */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="card-glow-featured group relative bg-void border border-bone/10 rounded-lg p-8 mb-6 hover:border-brew/40 transition-colors overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-brew group-hover:w-full transition-all duration-500" />

            {/* Ghost project name watermark */}
            <span
              className="text-watermark-md absolute bottom-[-0.15em] right-[-0.05em] pointer-events-none select-none font-cinzel font-black text-bone/[0.03] leading-none whitespace-nowrap"
              aria-hidden
            >
              {featured.name}
            </span>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-brew/60 border border-brew/20 px-2 py-0.5 rounded">
                    Featured
                  </span>
                </div>
                <h3 className="font-cinzel text-3xl md:text-4xl font-black text-bone">
                  {featured.name}
                </h3>
                <p className="text-mist leading-relaxed max-w-xl">
                  {featured.description}
                </p>
              </div>

              {/* Meta column */}
              <div className="md:min-w-[200px] space-y-4">
                <div>
                  <p className="font-mono text-xs text-mist/50 uppercase tracking-widest mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-1 rounded bg-brew/10 text-brew border border-brew/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-bone/10 pt-4">
                  <a
                    href={featured.liveUrl}
                    className="font-mono text-xs text-mist hover:text-glow transition-colors flex items-center gap-2 group/link"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brew group-hover/link:bg-glow transition-colors" />
                    Live Demo
                  </a>
                  <a
                    href={featured.githubUrl}
                    className="font-mono text-xs text-mist hover:text-glow transition-colors flex items-center gap-2 group/link"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brew group-hover/link:bg-glow transition-colors" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary projects — 2-col grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
