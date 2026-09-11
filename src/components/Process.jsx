import React from "react";
import { processSteps } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative section-pad">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="02">How I think</SectionLabel>
          <h2 className="display max-w-4xl text-[2rem] text-ivory md:text-5xl">
            I don't just write code.
            <br />
            <span className="text-ivory/40">I solve for the system.</span>
          </h2>
        </Reveal>

        <ol className="mt-8 divide-y divide-line border-y border-line md:mt-10">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 40}>
              <article className="group grid gap-3 py-6 md:grid-cols-[140px_1fr_1.2fr] md:items-baseline md:gap-10 md:py-8">
                <span className="font-mono text-sm tracking-[0.2em] text-ember">
                  {step.id}
                </span>
                <h3 className="display text-2xl text-ivory md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-xl text-ivory-dim">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
