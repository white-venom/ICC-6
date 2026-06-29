"use client";

import React from "react";
import LuxuryLogo from "@/components/ui/LuxuryLogo";

export default function Footer() {
  return (
    <footer className="relative w-full py-16 px-6 z-20 border-t border-[#C5A880]/10 bg-[#060608]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand Logo */}
        <LuxuryLogo size="sm" showText={false} />

        {/* Minimal Links */}
        <div className="flex items-center gap-10 text-xs tracking-[0.25em] uppercase text-[#C5A880]/80 font-light">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="hover:text-[#F4F4F0] transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:concierge@inkandcottonclub.com"
            data-cursor-hover
            className="hover:text-[#F4F4F0] transition-colors"
          >
            Contact Concierge
          </a>
        </div>

        {/* Copyright */}
        <div suppressHydrationWarning className="text-[11px] tracking-widest text-[#E8E5DF]/40 font-mono">
          © {new Date().getFullYear()} INK & COTTON CLUB. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
