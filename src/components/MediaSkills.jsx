import { motion } from "framer-motion";
import { PenTool, Headphones, Film, Sparkles } from "lucide-react";
import { mediaSkills } from "../data/portfolio";

const icons = {
  Figma: PenTool,
  Ardour: Headphones,
  Shotcut: Film,
  "Cursor AI": Sparkles,
};

export default function MediaSkills() {
  return (
    <section id="media" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Creative Production
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Design, audio, video & AI tools
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Beyond code, skilled in Figma for UI design, professional audio and
            video production with Ardour and Shotcut, and AI-assisted development
            with Cursor for faster delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {mediaSkills.map((tool, i) => {
            const Icon = icons[tool.name];
            return (
              <motion.article
                key={tool.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface-card p-8 transition-colors hover:border-accent/40"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-colors group-hover:bg-accent/10" />

                <div className="relative">
                  <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                    <Icon size={28} />
                  </div>

                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">
                    {tool.type}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-text">
                    {tool.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {tool.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {tool.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
