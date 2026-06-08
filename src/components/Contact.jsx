import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-raised px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to full-stack development roles, AI/ML data annotation
            projects, and creative multimedia collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface-card px-6 py-4 text-sm transition-colors hover:border-accent/40"
          >
            <Mail size={18} className="text-accent" />
            <span className="text-text">{profile.email}</span>
          </a>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface-card px-6 py-4 text-sm">
            <MapPin size={18} className="text-accent" />
            <span className="text-muted">{profile.location}</span>
          </div>
        </motion.div>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-surface transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/25"
        >
          <Send size={16} />
          Send a Message
        </motion.a>
      </div>
    </section>
  );
}
