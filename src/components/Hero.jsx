import { motion } from "framer-motion";
import { ArrowDown, Code2, Globe, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-extrabold leading-tight tracking-tight text-text sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 text-xl font-medium text-text sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-2"
        >
          {profile.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border bg-surface-card px-4 py-1 text-sm text-muted"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted"
        >
          {profile.summary.slice(0, 200)}…
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-surface transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text transition-all hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Code2 size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Globe size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
