import React, { useEffect, useRef } from "react";
import { useIsMobile, usePrefersReducedMotion } from "../../hooks/useMedia";

export default function UniverseCanvas() {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    let raf;
    let running = true;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width, height };
    };

    let size = resize();
    const count = reduced ? 12 : mobile ? 28 : 64;

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * size.width,
          y: Math.random() * size.height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.4 + 0.4,
          a: Math.random() * 0.45 + 0.12,
        });
      }
    };
    seed();

    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = e.clientY / window.innerHeight;
    };
    const onResize = () => {
      size = resize();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const draw = () => {
      if (!running && !reduced) {
        raf = requestAnimationFrame(draw);
        return;
      }
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      ctx.clearRect(0, 0, size.width, size.height);

      const mx = mouse.x * size.width;
      const my = mouse.y * size.height;
      const connectDist = mobile ? 0 : 118;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduced) {
          p.x += p.vx + (mx - size.width / 2) * 0.00004;
          p.y += p.vy + (my - size.height / 2) * 0.00004;
          if (p.x < -20) p.x = size.width + 20;
          if (p.x > size.width + 20) p.x = -20;
          if (p.y < -20) p.y = size.height + 20;
          if (p.y > size.height + 20) p.y = -20;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(243, 238, 230, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (connectDist) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const d = Math.hypot(dx, dy);
            if (d < connectDist) {
              ctx.strokeStyle = `rgba(203, 180, 138, ${0.12 * (1 - d / connectDist)})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.beginPath();
      ctx.strokeStyle = "rgba(226, 74, 59, 0.18)";
      ctx.lineWidth = 1;
      ctx.ellipse(
        size.width * 0.72 + (mouse.x - 0.5) * 24,
        size.height * 0.42 + (mouse.y - 0.5) * 18,
        Math.min(size.width, size.height) * 0.22,
        Math.min(size.width, size.height) * 0.32,
        0.4,
        0,
        Math.PI * 2
      );
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [mobile, reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
