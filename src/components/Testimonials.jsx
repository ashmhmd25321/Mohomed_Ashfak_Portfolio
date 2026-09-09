import React from "react";
import { testimonials } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function Testimonials() {
  return (
    <section id="proof" className="relative py-24 md:py-32">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="04">From clients</SectionLabel>
          <h2 className="display max-w-4xl text-4xl text-ivory md:text-6xl">
            People who
            <br />
            shipped with me.
          </h2>
          <p className="mt-6 max-w-2xl text-ivory-dim">
            Public notes from DreamWare clients — the work, not a pitch deck.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <blockquote className="glass-panel flex h-full flex-col rounded-3xl p-7 md:p-8">
                <p className="flex-1 text-base leading-relaxed text-ivory-dim">
                  “{item.quote}”
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="block font-medium text-ivory">{item.name}</span>
                    <span className="mt-1 block font-mono text-[10px] tracking-[0.16em] uppercase text-ivory/45">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
