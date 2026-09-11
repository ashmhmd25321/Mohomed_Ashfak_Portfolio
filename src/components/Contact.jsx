import React from "react";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/mock";
import MagneticButton from "./system/MagneticButton";
import { Reveal, SectionLabel } from "./system/Reveal";

const channels = [
  {
    label: "Email me",
    href: `mailto:${personalInfo.email}`,
    meta: personalInfo.email,
    cursor: "WRITE",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    meta: "Professional thread",
    cursor: "VISIT",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    meta: "ashmhmd25321",
    cursor: "VISIT",
  },
  {
    label: "WhatsApp",
    href: personalInfo.whatsapp,
    meta: personalInfo.phone,
    cursor: "TALK",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.08] blur-[140px]" />

      <div className="container-universe relative">
        <Reveal>
          <SectionLabel index="08">Transmission</SectionLabel>
          <h2 className="display max-w-5xl text-[2.35rem] leading-[0.95] text-ivory sm:text-6xl md:text-8xl">
            Have something
            <br />
            worth building?
          </h2>
          <p className="mt-6 max-w-xl text-base text-ivory-dim md:mt-8 md:text-lg">
            {personalInfo.availability}. Email, WhatsApp, or LinkedIn — pick a
            thread. I read everything.
          </p>
          <MagneticButton
            as="a"
            href={personalInfo.cvUrl}
            download
            data-cursor="CV"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-ivory hover:border-ivory/30 sm:w-auto md:mt-8"
          >
            Download CV
            <ArrowDownToLine className="h-4 w-4" />
          </MagneticButton>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 md:mt-10">
          {channels.map((ch, i) => (
            <Reveal key={ch.label} delay={i * 60}>
              <MagneticButton
                as="a"
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-cursor={ch.cursor}
                className="group flex h-full min-h-24 items-end justify-between bg-void px-5 py-6 hover:bg-ivory/[0.03] sm:px-6 sm:py-8"
              >
                <span>
                  <span className="display block text-2xl text-ivory md:text-4xl">
                    {ch.label}
                  </span>
                  <span className="mt-2 block font-mono text-[11px] tracking-[0.14em] text-ivory-dim">
                    {ch.meta}
                  </span>
                </span>
                <ArrowUpRight className="h-6 w-6 text-ember transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </MagneticButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
