import React from "react";
import { education } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative section-pad">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="07">Formation</SectionLabel>
          <h2 className="display text-[2rem] text-ivory md:text-5xl">
            The academic spine.
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-line border-y border-line">
          {education.map((edu, i) => (
            <Reveal
              key={edu.id}
              delay={i * 50}
              className="grid gap-3 py-6 md:grid-cols-[140px_1.2fr_0.8fr] md:items-baseline md:gap-4 md:py-8"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-ivory-dim">
                {edu.duration}
              </p>
              <div>
                <h3 className="display text-xl text-ivory md:text-2xl">{edu.degree}</h3>
                <p className="mt-1 text-ivory-dim">{edu.institution}</p>
                <p className="mt-3 max-w-xl text-sm text-ivory-faint">
                  {edu.description}
                </p>
              </div>
              <p className="font-mono text-xs tracking-[0.14em] uppercase text-gold md:text-right">
                {edu.grade}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
