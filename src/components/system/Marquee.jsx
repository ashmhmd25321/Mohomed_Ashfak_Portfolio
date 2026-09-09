import React from "react";
import { marqueeItems } from "../../data/mock";

export default function Marquee({ items = marqueeItems }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display mx-8 whitespace-nowrap text-2xl text-ivory/25 md:text-4xl"
          >
            {item}
            <span className="ml-8 text-ember/70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
