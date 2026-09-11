import React from "react";
import { identityPanel, personalInfo, stats } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="01">Identity</SectionLabel>
          <h2 className="display max-w-5xl text-[2rem] leading-[1.08] text-ivory sm:text-5xl md:text-7xl">
            The human behind
            <br />
            the system.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal className="space-y-5 text-base leading-relaxed text-ivory-dim md:space-y-6 md:text-xl">
            <p className="text-ivory">
              I don't collect frameworks. I build products that have to survive
              payments, roles, latency, and people clicking the wrong thing.
            </p>
            <p>
              {personalInfo.longSummary}
            </p>
            <p>
              The work I enjoy most sits where backends have to hold — logistics
              sync, payments, production automation, and the product surfaces
              that sit on top of them.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel divide-y divide-line rounded-3xl">
              {identityPanel.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-6 sm:py-5"
                >
                  <span className="label-meta">{row.label}</span>
                  <span className="text-ivory sm:text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:mt-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="min-w-0 bg-void px-4 py-6 md:px-6 md:py-8"
            >
              <p className="display text-[clamp(1.35rem,5.5vw,2.25rem)] leading-[0.95] break-words text-ivory">
                {stat.value}
              </p>
              <p className="label-meta mt-3">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
