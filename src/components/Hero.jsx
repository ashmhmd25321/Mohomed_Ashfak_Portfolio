import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/mock";
import UniverseCanvas from "./system/UniverseCanvas";
import MagneticButton from "./system/MagneticButton";
import { scrollToId } from "../hooks/useActiveSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] overflow-x-clip overflow-y-visible lg:overflow-hidden"
    >
      <UniverseCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      <div className="pointer-events-none absolute right-[10%] bottom-[6%] h-[34rem] w-[34rem] rounded-full bg-ember/[0.11] blur-[120px]" />

      <div className="container-universe relative z-10 grid min-h-[100svh] gap-8 pt-24 pb-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(380px,1.12fr)] lg:items-end lg:gap-10 lg:pb-7">
        <div className="min-w-0 max-w-[34rem] lg:self-start lg:pt-8">
          <p className="label-meta mb-4 text-gold">{personalInfo.eyebrow}</p>
          <h1 className="display text-[clamp(2.75rem,6.4vw,4.5rem)] leading-[0.9] text-ivory">
            Backend.
            <br />
            Full-stack.
          </h1>
          <p className="mt-4 text-[1.35rem] leading-snug tracking-[-0.03em] text-ivory/50 md:text-[1.65rem]">
            Live products you can open.
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-dim md:text-[15px]">
            {personalInfo.heroPitch}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton
              as="button"
              onClick={() => scrollToId("work")}
              data-cursor="WORK"
              className="btn-sweep inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-void max-sm:w-full"
            >
              See live work
              <ArrowDownRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => scrollToId("contact")}
              data-cursor="HIRE"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/55 bg-ivory/[0.03] px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-ivory hover:border-ivory max-sm:w-full"
            >
              Hire me
            </MagneticButton>
          </div>
        </div>

        <aside className="standee relative mx-auto w-full max-w-[360px] lg:mx-0 lg:max-w-none">
          <div className="relative">
            <div className="orbit hidden lg:block" aria-hidden="true" />
            <div className="orbit orbit-slow hidden lg:block" aria-hidden="true" />
            <div className="billboard" aria-hidden="true" />
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name}, illustrated standee`}
              className="portrait-art standee-figure relative z-[2] mx-auto h-auto w-full max-h-[min(38vh,280px)] object-contain object-bottom drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)] lg:max-h-[min(72vh,640px)]"
            />
            <div className="standee-shadow" aria-hidden="true" />
          </div>
          <div className="relative z-[2] mt-3 max-w-sm px-2">
            <p className="label-meta text-gold">Now</p>
            <p className="mt-1 text-sm leading-snug text-ivory">
              {personalInfo.currentRole}
            </p>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 text-xs leading-snug text-ivory-dim">
              <span>Replies within a day · Remote AU / NZ / KW</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VISIT"
                className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.16em] text-ivory"
              >
                GITHUB <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
