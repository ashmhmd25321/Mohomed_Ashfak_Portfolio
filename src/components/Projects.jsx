import React, { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { flagshipIds, projects } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

function ProjectLinks({ project, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ivory px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-void sm:px-5"
        >
          Live demo <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ivory/20 px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-ivory sm:px-5"
        >
          GitHub <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

function Gallery({ shots, name }) {
  const [index, setIndex] = useState(0);
  const safe = shots?.length ? shots : [];
  const total = safe.length;
  if (!total) return null;
  const go = (dir) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-void-2">
      <img
        src={safe[index]}
        alt={`${name} screen ${index + 1}`}
        className="aspect-[16/10] w-full object-cover object-top"
      />
      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-void/70 text-ivory"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-void/70 text-ivory"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <p className="absolute bottom-3 right-4 font-mono text-[10px] tracking-[0.18em] text-ivory/80">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </>
      )}
    </div>
  );
}

function CaseStudy({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/80"
        aria-label="Close case study"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative my-4 w-[min(960px,100%)] rounded-3xl border border-line bg-void text-ivory"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-void/80 text-ivory"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="p-5 pt-16 md:p-10 md:pt-16">
          <p className="label-meta text-gold">
            {project.number} · {project.category}
          </p>
          <h2 id="case-study-title" className="display mt-3 text-3xl md:text-5xl">
            {project.name}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ivory-dim">
            {project.overview}
          </p>
          {project.owned && (
            <p className="mt-4 max-w-2xl text-sm text-ivory">{project.owned}</p>
          )}
          <div className="mt-8">
            <Gallery shots={project.screenshots} name={project.name} />
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="label-meta mb-3">Problem</p>
              <p className="text-ivory-dim">{project.problem}</p>
            </div>
            <div>
              <p className="label-meta mb-3">Solution</p>
              <p className="text-ivory-dim">{project.solution}</p>
            </div>
            <div>
              <p className="label-meta mb-3">Architecture</p>
              <p className="text-ivory-dim">{project.architecture}</p>
            </div>
            <div>
              <p className="label-meta mb-3">Focus</p>
              <ul className="space-y-1 text-ivory-dim">
                {project.focus.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-ivory-dim"
              >
                {tech}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} className="mt-10" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const active = projects.find((p) => p.id === openId);
  const featured = flagshipIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);
  const more = projects.filter((p) => !flagshipIds.includes(p.id));

  return (
    <section id="work" className="relative section-pad">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="03">Selected work</SectionLabel>
          <h2 className="display max-w-4xl text-[2rem] text-ivory md:text-5xl">
            Three products
            <br />
            you can open.
          </h2>
          <p className="mt-5 max-w-2xl text-ivory-dim md:mt-6">
            Flagships first — logistics, a skills marketplace, and a live farm
            store. Everything else sits under more work.
          </p>
        </Reveal>
      </div>

      <div className="mt-8 space-y-14 md:mt-10 md:space-y-20">
        {featured.map((project, i) => (
          <article key={project.id} className="relative">
            <div className="container-universe grid items-center gap-6 lg:grid-cols-12 lg:gap-14">
              <Reveal
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(project.id)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-line text-left md:rounded-[1.6rem]"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-void/10 to-transparent opacity-80 transition group-hover:opacity-90" />
                  <span className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.22em] text-ivory">
                    OPEN CASE
                  </span>
                </button>
              </Reveal>

              <Reveal
                delay={80}
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="label-meta text-gold">
                  Project {project.number} · {project.category}
                </p>
                <h3 className="display mt-3 text-3xl text-ivory md:mt-4 md:text-5xl">
                  {project.name}
                </h3>
                {project.subtitle && (
                  <p className="mt-2 text-ivory-dim">{project.subtitle}</p>
                )}
                <p className="mt-4 text-base leading-relaxed text-ivory-dim md:mt-6 md:text-lg">
                  {project.owned || project.description}
                </p>
                <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-ivory/50">
                  {project.role}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-ivory-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenId(project.id)}
                    className="rounded-full border border-ivory/20 px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] text-ivory"
                  >
                    Case study
                  </button>
                  <ProjectLinks project={project} />
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </div>

      {more.length > 0 && (
        <div className="container-universe mt-14 md:mt-16">
          <Reveal>
            <p className="label-meta text-gold">More work</p>
            <h3 className="display mt-4 max-w-3xl text-2xl text-ivory md:text-4xl">
              Sakura, LearnHub, PCMart, and the rest of what shipped.
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
            {more.map((project) => (
              <Reveal key={project.id}>
                <article className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl">
                  <button
                    type="button"
                    onClick={() => setOpenId(project.id)}
                    className="block overflow-hidden text-left"
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="aspect-[16/9] w-full object-cover object-top"
                    />
                  </button>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="label-meta text-gold">
                      {project.number} · {project.category}
                    </p>
                    <h4 className="display mt-3 text-2xl text-ivory">
                      {project.name}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-dim">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenId(project.id)}
                        className="rounded-full border border-ivory/20 px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-ivory"
                      >
                        Case study
                      </button>
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <CaseStudy project={active} onClose={() => setOpenId(null)} />
    </section>
  );
}
