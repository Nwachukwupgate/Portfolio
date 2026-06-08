import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-raised px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Career
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Professional experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface-card md:flex">
                  <Briefcase size={16} className="text-accent" />
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-surface-card p-6 transition-colors hover:border-accent/30">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-text">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {job.company}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{job.location}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border bg-surface-raised px-3 py-1 text-xs text-muted">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
