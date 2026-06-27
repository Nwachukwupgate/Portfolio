import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages } from "lucide-react";
import { profile, education } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-accent"
          >
            About Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl font-bold text-text sm:text-4xl"
          >
            Building products that scale
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-base leading-relaxed text-muted"
            >
              {profile.summary}
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-base leading-relaxed text-muted"
            >
              Adept at translating complex technical requirements into robust,
              user-centric products within agile, cross-functional teams, with
              5+ years of{" "}
              <span className="text-accent">Figma</span> experience for UI
              design and prototyping, hands-on audio and video production using{" "}
              <span className="text-accent">Ardour</span> and{" "}
              <span className="text-accent">Shotcut</span>, and daily{" "}
              <span className="text-accent">Cursor</span> use for AI-assisted
              development workflows.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="rounded-2xl border border-border bg-surface-card p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-accent">
                <MapPin size={18} />
                <span className="text-sm font-medium">Location</span>
              </div>
              <p className="text-sm text-muted">{profile.location}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-2xl border border-border bg-surface-card p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-accent">
                <GraduationCap size={18} />
                <span className="text-sm font-medium">Education</span>
              </div>
              <p className="text-sm font-medium text-text">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {education.honours}, GPA {education.gpa}
              </p>
              <p className="mt-1 text-sm text-muted">
                {education.institution}, {education.location}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="rounded-2xl border border-border bg-surface-card p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-accent">
                <Languages size={18} />
                <span className="text-sm font-medium">Languages</span>
              </div>
              <ul className="space-y-2">
                {profile.languages.map((lang) => (
                  <li key={lang.name} className="text-sm">
                    <span className="font-medium text-text">{lang.name}</span>
                    <span className="text-muted">, {lang.level}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
