import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/mock";
import { scrollToId, useActiveSection } from "../hooks/useActiveSection";
import MagneticButton from "./system/MagneticButton";

const SECTION_IDS = ["home", "about", "work", "experience", "skills", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href) => {
    scrollToId(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-line bg-void"
          : scrolled
            ? "border-b border-line bg-void/80 backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <div className="container-universe flex h-16 items-center justify-between md:h-[4.25rem]">
        <button
          onClick={() => go("#home")}
          className="flex items-center"
          data-cursor="HOME"
          aria-label="Back to top"
        >
          <span className="wordmark text-[1.55rem] text-ivory md:text-[1.75rem]">
            {personalInfo.firstName}
          </span>
        </button>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.href)}
              data-cursor="hover"
              className={`rounded-full px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors ${
                active === link.id
                  ? "text-ivory"
                  : "text-ivory-dim hover:text-ivory"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton
            as="button"
            onClick={() => go("#contact")}
            data-cursor="TALK"
            className="btn-sweep hidden rounded-full bg-ivory px-4 py-2 font-mono text-[11px] tracking-[0.16em] text-void md:inline-flex"
          >
            Hire me
          </MagneticButton>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ivory lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-void pb-[calc(6rem+env(safe-area-inset-bottom))] lg:hidden">
          <nav className="container-universe flex flex-col gap-1 pt-4" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => go(link.href)}
                className={`display border-b border-line py-3.5 text-left text-3xl ${
                  active === link.id ? "text-ivory" : "text-ivory/40"
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="mr-4 font-mono text-xs text-ember">
                  0{i + 1}
                </span>
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              className="mt-8 min-h-12 rounded-full bg-ivory py-4 font-mono text-xs tracking-[0.2em] text-void"
            >
              HIRE ME
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
