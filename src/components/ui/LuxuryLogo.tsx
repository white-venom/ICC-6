"use client";

import React from "react";
import Image from "next/image";

interface LuxuryLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export default function LuxuryLogo({ size = "md", showText = true, className = "" }: LuxuryLogoProps) {
  const dimensions = {
    sm: { box: "w-12 h-12", img: 38, text: "text-sm" },
    md: { box: "w-16 h-16", img: 52, text: "text-base" },
    lg: { box: "w-24 h-24", img: 80, text: "text-xl" },
    xl: { box: "w-36 h-36", img: 120, text: "text-3xl" },
  }[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Opulent Gold Frame & Emblem */}
      <div className={`relative ${dimensions.box} flex items-center justify-center group cursor-pointer shrink-0`}>
        {/* Ambient Gold Radial Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C5A880]/30 via-[#E5C99F]/20 to-transparent blur-xl group-hover:blur-2xl group-hover:scale-125 transition-all duration-700" />
        
        {/* Geometric Rotating Luxury Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-[#C5A880]/40 group-hover:rotate-180 transition-transform duration-1000 ease-out" />
        <div className="absolute -inset-1 rounded-full border border-dashed border-[#C5A880]/30 group-hover:-rotate-90 transition-transform duration-1000 ease-out" />

        {/* Inner Glass Emblem Container */}
        <div className="relative w-full h-full rounded-full glass-panel border border-[#C5A880]/60 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(197,168,128,0.25)] group-hover:border-[#E5C99F] group-hover:shadow-[0_0_50px_rgba(197,168,128,0.45)] transition-all duration-500">
          {/* Metallic Gold Specular Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5C99F]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          <Image
            src="/assets/logo/logo.png"
            alt="Ink & Cotton Club"
            width={dimensions.img}
            height={dimensions.img}
            className="object-contain filter brightness-125 group-hover:scale-110 transition-transform duration-500 relative z-10"
          />
        </div>
      </div>

      {showText && (
        <span className={`font-serif tracking-[0.3em] uppercase text-[#F4F4F0] font-medium whitespace-nowrap ${dimensions.text}`}>
          Ink & Cotton Club
        </span>
      )}
    </div>
  );
}
