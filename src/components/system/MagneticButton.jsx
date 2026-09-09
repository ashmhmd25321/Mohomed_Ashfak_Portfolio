import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { useFinePointer } from "../../hooks/useMedia";

export default function MagneticButton({
  children,
  className,
  as: Tag = "button",
  strength = 18,
  ...props
}) {
  const ref = useRef(null);
  const fine = useFinePointer();

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const move = (e) => {
    if (!fine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x / strength}px, ${y / strength}px, 0)`;
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={cn("transition-transform duration-200 will-change-transform", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
