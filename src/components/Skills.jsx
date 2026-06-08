import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-raised px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Technical Skills
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Tools & technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border p-6 ${
                group.highlight
                  ? "border-accent/40 bg-accent-glow"
                  : "border-border bg-surface-card"
              }`}
            >
              <h3
                className={`mb-4 text-sm font-semibold uppercase tracking-wider ${
                  group.highlight ? "text-accent" : "text-text"
                }`}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-xs ${
                      group.highlight
                        ? "bg-accent/20 text-accent"
                        : "bg-surface-raised text-muted"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
