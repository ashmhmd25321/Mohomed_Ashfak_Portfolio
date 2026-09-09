import React, { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf;
    let timeout;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 900);
      setCount(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timeout = setTimeout(() => {
          setHide(true);
          onDone?.();
        }, 180);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-void"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <p className="label-meta mb-6">Entering the universe</p>
      <p className="display text-7xl tabular-nums text-ivory md:text-8xl">
        {String(count).padStart(3, "0")}
      </p>
    </div>
  );
}
