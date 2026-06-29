"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full py-16 px-6 z-20 border-t border-[#C5A880]/10 bg-[#060608]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <Image
              src="/assets/logo/logo.png"
              alt="Ink & Cotton Club"
              width={32}
              height={32}
              className="object-contain filter brightness-125"
            />
          </div>
          <span className="font-serif text-base tracking-[0.3em] uppercase text-[#E8E5DF]">
            Ink & Cotton Club
          </span>
        </div>

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
