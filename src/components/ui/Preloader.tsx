"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryLogo from "@/components/ui/LuxuryLogo";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#060608] px-8 py-12 text-[#F4F4F0]"
        >
          <div className="w-full max-w-7xl flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-[#C5A880]/60 font-mono">
            <span>Bespoke Digital Atelier</span>
            <span>Est. 2026</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-xl">
            {/* Enlarged Prominent Luxury Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <LuxuryLogo size="xl" showText={true} />
            </motion.div>
          </div>

          <div className="w-full max-w-xs space-y-3">
            <div className="flex justify-between text-[11px] tracking-widest text-[#C5A880] font-mono">
              <span>INITIALIZING SILK & COTTON MESH</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-[#1C1E26] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8C7350] via-[#C5A880] to-[#E5C99F]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
