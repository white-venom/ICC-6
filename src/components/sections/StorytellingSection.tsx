"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Disc, ShieldCheck, Crown } from "lucide-react";
import Image from "next/image";

const scenes = [
  {
    id: "craftsmanship",
    number: "01",
    title: "Craftsmanship",
    subtitle: "Purity of Raw Fiber",
    description: "Hand-harvested Giza 87 long-staple Egyptian cotton. Spun into ultra-fine 200s 2-ply threads that yield an unparalleled silk-touch handle.",
    icon: Sparkles,
    badge: "Origin: Nile Delta",
    stats: "200s Thread Count",
    imgSrc: "/assets/story/fiber.png",
  },
  {
    id: "fabric",
    number: "02",
    title: "Fabric Architecture",
    subtitle: "Woven Perfection",
    description: "Woven on precision Swiss looms at 400 threads per inch. Engineered with natural 2-way stretch and liquid-repellent breathable weave.",
    icon: Layers,
    badge: "Weave: Royal Twill",
    stats: "400 Threads / Inch",
    imgSrc: "/assets/story/fabric.png",
  },
  {
    id: "buttons",
    number: "03",
    title: "Mother-of-Pearl Detail",
    subtitle: "Australian White Lip Shells",
    description: "4mm thick Australian mother-of-pearl buttons. Individually carved, polished, and cross-stitched with reinforced heat-sealed shank threading.",
    icon: Disc,
    badge: "Material: Australian MOP",
    stats: "4mm Thickness",
    imgSrc: "/assets/story/buttons.png",
  },
  {
    id: "collar",
    number: "04",
    title: "Structured Collar",
    subtitle: "Engineered Silhouette",
    description: "A proprietary multi-layered German interlining. Designed to maintain pristine spread posture from boardroom negotiations to midnight galas.",
    icon: ShieldCheck,
    badge: "Interlining: Wendler Baltic",
    stats: "18-Degree Spread",
    imgSrc: "/assets/story/collar.png",
  },
  {
    id: "finished",
    number: "05",
    title: "The Finished Masterpiece",
    subtitle: "An Armor of Authority",
    description: "22 stitches per inch single-needle tailoring. Split back yoke and hand-rolled French seams for the discerning connoisseur.",
    icon: Crown,
    badge: "Tailoring: Bespoke Grade",
    stats: "22 Stitches / Inch",
    imgSrc: "/assets/story/masterpiece.png",
  },
];

export default function StorytellingSection() {
  return (
    <section id="story" className="relative w-full py-32 px-6 z-20">
      <div className="max-w-7xl mx-auto space-y-40">
        {scenes.map((scene, index) => {
          const Icon = scene.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-between gap-12 lg:gap-24`}
            >
              {/* Text Description Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-2xl text-[#C5A880] tracking-widest font-light">
                    {scene.number}
                  </span>
                  <div className="h-[1px] w-16 bg-[#C5A880]/30" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-mono">
                    {scene.badge}
                  </span>
                </div>

                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4F4F0] leading-tight">
                  {scene.title}
                </h2>

                <h3 className="text-sm uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                  {scene.subtitle}
                </h3>

                <p className="text-base text-[#E8E5DF]/70 font-light leading-relaxed max-w-xl">
                  {scene.description}
                </p>

                <div className="pt-4 flex items-center gap-6">
                  <div className="px-5 py-2.5 rounded-full glass-panel border border-[#C5A880]/20 text-xs font-mono text-[#E8E5DF]">
                    {scene.stats}
                  </div>
                </div>
              </div>

              {/* Visual Showcase Card with Specular Micro-interactions */}
              <div className="flex-1 w-full max-w-lg">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: isEven ? 4 : -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  data-cursor-hover
                  data-cursor-text="Inspect"
                  className="relative aspect-square rounded-2xl glass-card p-8 flex flex-col justify-between overflow-hidden group border border-[#C5A880]/20"
                >
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C5A880]/10 rounded-full blur-3xl group-hover:bg-[#C5A880]/20 transition-all duration-700" />
                  
                  <div className="flex justify-between items-start z-10">
                    <div className="p-4 rounded-xl glass-panel text-[#C5A880] border border-[#C5A880]/30">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs text-[#C5A880]/60 tracking-widest uppercase">
                      Scene {scene.number} / 05
                    </span>
                  </div>

                  {/* Micro interaction preview diagram */}
                  <div className="my-auto py-6 z-10 flex flex-col items-center justify-center text-center space-y-4 relative w-full overflow-hidden">
                    {/* Interactive Specular Grid and Radar Rings */}
                    <div className="relative w-44 h-44 flex items-center justify-center">
                      {/* Outer Spinning Laser Scanner Ring */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#C5A880]/40 animate-[spin_12s_linear_infinite] group-hover:border-[#E5C99F] group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-2 rounded-full border border-[#C5A880]/20 group-hover:scale-105 transition-transform duration-500" />
                      
                      {/* Dynamic Specular Scan Line */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C5A880]/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000 ease-in-out" />

                      {/* Center Emblem / Image Focal */}
                      <div className="relative w-32 h-32 rounded-full glass-panel border border-[#C5A880]/60 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(197,168,128,0.25)] group-hover:shadow-[0_0_50px_rgba(197,168,128,0.5)] transition-all duration-500">
                        <div className="relative w-full h-full">
                          <Image
                            src={scene.imgSrc}
                            alt={scene.title}
                            fill
                            className="object-cover group-hover:scale-125 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium group-hover:text-[#F4F4F0] transition-colors">
                        {scene.title} Spec Macro
                      </p>
                      <span className="text-[10px] font-mono tracking-widest text-[#E8E5DF]/50 uppercase block">
                        Hover to initialize 3D laser weave scan
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center z-10 pt-4 border-t border-[#C5A880]/10">
                    <span className="text-[10px] tracking-widest uppercase text-[#C5A880]">
                      Ink & Cotton Club Labs
                    </span>
                    <span className="text-[10px] font-mono text-[#E8E5DF]/50">
                      SPEC-2026-V5
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
