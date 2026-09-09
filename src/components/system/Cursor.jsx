import React, { useEffect, useRef } from "react";
import { useFinePointer, usePrefersReducedMotion } from "../../hooks/useMedia";

export default function Cursor() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const enabled = fine && !reduced;
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return undefined;
    }

    document.documentElement.classList.add("has-custom-cursor");
    let frame;

    const loop = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.18;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y + 28}px, 0) translate(-50%, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const move = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const over = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        ringRef.current?.classList.add("is-hover");
        const label = target.getAttribute("data-cursor");
        if (label && label !== "hover") {
          labelRef.current.textContent = label;
          labelRef.current.classList.add("is-on");
        } else {
          labelRef.current.classList.remove("is-on");
        }
      }
    };

    const out = (e) => {
      const next = e.relatedTarget?.closest?.("[data-cursor]");
      if (!next) {
        ringRef.current?.classList.remove("is-hover");
        labelRef.current?.classList.remove("is-on");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={labelRef} className="cursor-label">
        VIEW
      </div>
    </>
  );
}
