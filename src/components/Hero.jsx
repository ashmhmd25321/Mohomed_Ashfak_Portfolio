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
      className="relative flex min-h-[100svh] items-start overflow-x-clip pt-[5.5rem] pb-10 lg:h-[100svh] lg:min-h-[640px] lg:items-center lg:overflow-hidden lg:pt-20 lg:pb-6"
    >
      <UniverseCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      <div className="pointer-events-none absolute left-[62%] top-[42%] h-[34vw] w-[34vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.08] blur-[110px]" />

      <div className="container-universe relative z-10 grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,520px)] lg:gap-8">
        <div className="min-w-0">
          <p className="label-meta mb-3 max-w-full text-balance text-gold md:mb-4">
            {personalInfo.eyebrow}
          </p>
          <h1 className="display text-[clamp(2.35rem,10.5vw,3.35rem)] leading-[0.92] text-ivory sm:text-6xl md:text-7xl lg:text-[clamp(3.4rem,5.4vw,5.35rem)]">
            Backend.
            <br />
            Full-stack.
            <br />
            <span className="text-ivory/45">Live products</span>
            <br />
            you can open.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory-dim md:mt-5 md:text-base">
            {personalInfo.heroPitch}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-7">
            <MagneticButton
              as="button"
              onClick={() => scrollToId("work")}
              data-cursor="WORK"
              className="btn-sweep inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-void sm:w-auto"
            >
              See live work
              <ArrowDownRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => scrollToId("contact")}
              data-cursor="HIRE"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-ivory hover:border-ivory/30 sm:w-auto"
            >
              Hire me
            </MagneticButton>
          </div>
        </div>

        <div className="standee relative mx-auto w-full max-w-[280px] sm:max-w-[380px] lg:mr-0 lg:max-w-none">
          <div className="orbit hidden md:block" aria-hidden="true" />
          <div className="orbit orbit-slow hidden md:block" aria-hidden="true" />
          <div className="billboard" aria-hidden="true" />
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name}, illustrated standee`}
            className="portrait-art standee-figure relative z-[2] mx-auto h-auto w-full max-h-[min(34vh,230px)] object-contain object-bottom drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)] sm:max-h-[min(48vh,380px)] lg:max-h-[min(62vh,560px)]"
          />
          <div className="standee-shadow" aria-hidden="true" />
          <div className="relative z-[2] mt-4 flex items-end justify-between gap-3 px-1 sm:mt-5 sm:gap-4">
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
