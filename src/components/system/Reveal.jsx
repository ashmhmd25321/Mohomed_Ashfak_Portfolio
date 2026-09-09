import React from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../lib/utils";

export function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {index ? (
        <span className="label-meta text-ember">{index}</span>
      ) : null}
      <span className="label-meta">{children}</span>
      <span className="h-px flex-1 max-w-16 bg-line" />
    </div>
  );
}
