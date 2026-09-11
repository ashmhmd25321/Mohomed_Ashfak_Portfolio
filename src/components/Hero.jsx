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
      className="relative overflow-x-clip pt-[5.75rem] pb-10 lg:pt-24 lg:pb-14"
    >
      <UniverseCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.07] blur-[120px]" />

      <div className="container-universe relative z-10 mx-auto grid max-w-[980px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8">
        <div className="min-w-0">
          <p className="label-meta mb-3 text-gold md:mb-4">{personalInfo.eyebrow}</p>
          <h1 className="display text-[clamp(2.5rem,10vw,3.35rem)] leading-[0.9] text-ivory sm:text-5xl md:text-6xl lg:text-[clamp(3.1rem,4.2vw,4.35rem)]">
            Backend.
            <br />
            Full-stack.
            <br />
            <span className="text-ivory/45">Live products</span>
            <br />
            you can open.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory-dim md:mt-5 md:text-base">
            {personalInfo.heroPitch}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-7">
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/35 px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-ivory hover:border-ivory max-sm:w-full"
            >
              Hire me
            </MagneticButton>
          </div>
        </div>

        <div className="standee relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:mx-0 lg:max-w-[380px]">
          <div className="orbit hidden lg:block" aria-hidden="true" />
          <div className="orbit orbit-slow hidden lg:block" aria-hidden="true" />
          <div className="billboard" aria-hidden="true" />
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name}, illustrated standee`}
            className="portrait-art standee-figure relative z-[2] mx-auto h-auto w-full max-h-[min(42vh,260px)] object-contain object-bottom drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)] sm:max-h-[min(48vh,340px)] lg:max-h-[min(52vh,420px)]"
          />
          <div className="standee-shadow" aria-hidden="true" />
          <div className="relative z-[2] mt-4 flex items-end justify-between gap-3 px-1">
            <div className="min-w-0">
              <p className="label-meta text-gold">Now</p>
              <p className="mt-1 text-sm text-ivory">{personalInfo.currentRole}</p>
              <p className="mt-1 text-xs leading-relaxed text-ivory-dim">
                {personalInfo.availability}
              </p>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VISIT"
              className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] tracking-[0.16em] text-ivory"
            >
              GITHUB <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
