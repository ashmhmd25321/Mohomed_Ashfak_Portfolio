import React from "react";
import { personalInfo } from "../data/mock";
import { scrollToId } from "../hooks/useActiveSection";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-10 md:py-12">
      <div className="container-universe flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-2xl text-ivory">{personalInfo.name}</p>
          <p className="mt-2 text-sm text-ivory-dim">{personalInfo.workBase}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-ivory-dim">
          <a className="link-draw" href={`mailto:${personalInfo.email}`}>
            Email
          </a>
          <a
            className="link-draw"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="link-draw"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <button
            type="button"
            className="link-draw"
            onClick={() => scrollToId("home")}
          >
            Back to top
          </button>
        </div>
      </div>
      <div className="container-universe mt-10 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-ivory-faint">
        <span>© {year} {personalInfo.firstName}</span>
        <span>Software Engineer</span>
      </div>
    </footer>
  );
}
