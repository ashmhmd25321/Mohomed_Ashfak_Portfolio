import React from "react";
import { experience } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-32">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="06">Journey</SectionLabel>
          <h2 className="display max-w-4xl text-[2rem] text-ivory md:text-6xl">
            Six chapters.
            <br />
            One through-line.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="timeline-line absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-0">
            {experience.map((exp, i) => (
              <li key={exp.id} className="relative md:grid md:grid-cols-2 md:gap-16">
                <div
                  className={`absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-ember md:left-1/2 md:-translate-x-1/2 ${
                    i === 0 ? "animate-pulseDot" : ""
                  }`}
                />
                <Reveal
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <p className="label-meta text-gold">{exp.duration}</p>
                  <h3 className="display mt-3 text-2xl text-ivory md:text-3xl">{exp.position}</h3>
                  <p className="mt-1 text-ivory">{exp.company}</p>
                  <p className="mt-1 text-sm text-ivory-dim">{exp.location}</p>
                  <p className="mt-4 text-ivory-dim">{exp.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 md:justify-end">
                    {exp.technologies.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-ivory-dim"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ivory-dim">
                    {exp.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
                {i % 2 === 0 && <div className="hidden md:block" />}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
