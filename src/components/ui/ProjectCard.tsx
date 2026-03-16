"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="card-glow group relative bg-void border border-bone/10 rounded-lg p-6 flex flex-col gap-4 hover:border-brew/40 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-brew group-hover:w-full transition-all duration-500" />

      <h3 className="font-cinzel text-xl font-bold text-bone">
        {project.name}
      </h3>

      <p className="text-mist text-sm leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-1 rounded bg-brew/10 text-brew border border-brew/20"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2 border-t border-bone/10">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-mist hover:text-glow transition-colors flex items-center gap-1.5 group/link"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brew group-hover/link:bg-glow transition-colors" />
          Live Demo
        </a>
        {project.githubUrl ? <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-mist hover:text-glow transition-colors flex items-center gap-1.5 group/link"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brew group-hover/link:bg-glow transition-colors" />
          GitHub
        </a> : ""}
      </div>
    </motion.div>
  );
}
