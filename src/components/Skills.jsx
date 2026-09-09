import React, { useMemo, useState } from "react";
import { projects, skillDetails, skills } from "../data/mock";
import { Reveal, SectionLabel } from "./system/Reveal";

export default function Skills() {
  const [active, setActive] = useState("Python");
  const detail = skillDetails[active];
  const related = useMemo(
    () => projects.filter((p) => detail?.related?.includes(p.id)),
    [detail]
  );

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container-universe">
        <Reveal>
          <SectionLabel index="05">Technology</SectionLabel>
          <h2 className="display max-w-4xl text-4xl text-ivory md:text-6xl">
            An ecosystem,
            <br />
            not a logo wall.
          </h2>
          <p className="mt-6 max-w-2xl text-ivory-dim">
            Select a node. Related products light up — only where this portfolio
            actually used them.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            {skills.map((group) => (
              <Reveal key={group.category}>
                <p className="label-meta mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech) => {
                    const on = active === tech;
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => setActive(tech)}
                        data-cursor="hover"
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          on
                            ? "border-ember/50 bg-ember/10 text-ivory"
                            : "border-line text-ivory-dim hover:border-ivory/25 hover:text-ivory"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>

          <aside className="glass-panel h-fit rounded-3xl p-6 lg:sticky lg:top-28">
            <p className="label-meta">Selected</p>
            <h3 className="display mt-3 text-3xl text-ivory">{active}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
              {detail?.blurb || "Used across engineering work in this portfolio."}
            </p>
            <div className="mt-6">
              <p className="label-meta mb-3">Related work</p>
              {related.length ? (
                <ul className="space-y-2">
                  {related.map((p) => (
                    <li key={p.id} className="text-ivory">
                      {p.number} — {p.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-ivory-dim">
                  Used in professional work beyond the featured products.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
