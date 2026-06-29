"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable or luxury interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest("a, button, [data-cursor-hover]");
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute("data-cursor-text");
          setHoverText(customText || "");
        } else {
          setIsHovered(false);
          setHoverText("");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Outer Ring */}
      <motion.div
        className="absolute rounded-full border border-[#C5A880]/60 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 16),
          y: mousePosition.y - (isHovered ? 36 : 16),
          width: isHovered ? 72 : 32,
          height: isHovered ? 72 : 32,
          backgroundColor: isHovered ? "rgba(197, 168, 128, 0.15)" : "transparent",
          borderColor: isHovered ? "#E5C99F" : "rgba(197, 168, 128, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center text-[10px] font-medium uppercase tracking-widest text-[#C5A880]"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-[#C5A880]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
    </div>
  );
}
