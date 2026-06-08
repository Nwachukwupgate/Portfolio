import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Selected projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col rounded-2xl border border-border bg-surface-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-raised px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
