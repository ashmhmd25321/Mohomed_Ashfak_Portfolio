import { useEffect, useState } from "react";

export function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(ids[0] || "home");

  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY + offset;
      for (let i = ids.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= position) {
          setActive(ids[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
}

export function scrollToId(id) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
