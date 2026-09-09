import React from "react";
import { identityPanel, personalInfo, stats } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="01">Identity</SectionLabel>
          <h2 className="display max-w-5xl text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-7xl">
            The human behind
            <br />
            the system.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal className="space-y-6 text-lg leading-relaxed text-ivory-dim md:text-xl">
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
                  className="flex items-baseline justify-between gap-6 px-6 py-5"
                >
                  <span className="label-meta">{row.label}</span>
                  <span className="text-right text-ivory">{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="bg-void px-6 py-8"
            >
              <p className="display text-3xl text-ivory md:text-4xl">{stat.value}</p>
              <p className="label-meta mt-3">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
