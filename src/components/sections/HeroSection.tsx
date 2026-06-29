"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LuxuryLogo from "@/components/ui/LuxuryLogo";

export default function HeroSection({ onExploreClick }: { onExploreClick: () => void }) {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-between px-6 py-12 z-10 select-none pointer-events-none">
      {/* Top Header Layer */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-7xl flex justify-between items-center pointer-events-auto"
      >
        <LuxuryLogo size="sm" showText={true} />

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#C5A880]/80 font-light">
          <a href="#story" data-cursor-hover className="hover:text-[#F4F4F0] transition-colors">Craftsmanship</a>
          <a href="#collection" data-cursor-hover className="hover:text-[#F4F4F0] transition-colors">Collection</a>
          <a href="#story" data-cursor-hover className="hover:text-[#F4F4F0] transition-colors">Atelier Specs</a>
        </nav>
      </motion.header>

      {/* Hero Center Branding & Headline */}
      <div className="flex flex-col items-center text-center max-w-4xl my-auto pointer-events-auto space-y-6">


        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span className="inline-block px-5 py-2 rounded-full glass-panel border border-[#C5A880]/40 text-[10px] tracking-[0.4em] uppercase text-[#C5A880]">
            Haute Couture Collection 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#F4F4F0] leading-[1.05]"
        >
          Tailored For <br className="hidden sm:block" />
          <span className="gold-gradient-text italic font-normal">Those Who Lead.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-sm md:text-base text-[#E8E5DF]/70 font-light tracking-widest max-w-md uppercase pt-2"
        >
          Handcrafted 200s Egyptian Giza Cotton. Architecture for the modern sovereign.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="pt-4"
        >
          <button
            onClick={onExploreClick}
            data-cursor-hover
            data-cursor-text="Explore"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full glass-panel border border-[#C5A880]/50 text-xs tracking-[0.3em] uppercase text-[#F4F4F0] transition-all duration-500 hover:border-[#C5A880] hover:shadow-[0_0_40px_rgba(197,168,128,0.3)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C5A880]/0 via-[#C5A880]/25 to-[#C5A880]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              Explore Collection
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] group-hover:scale-150 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex flex-col items-center gap-2 pointer-events-auto"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A880]/70 font-mono">
          Scroll To Reveal
        </span>
        <ChevronDown className="w-4 h-4 text-[#C5A880] animate-bounce" />
      </motion.div>
    </section>
  );
}

