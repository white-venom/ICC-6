"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceRaw: string;
  colorHex: string;
  imageSrc: string;
  weave: string;
  threadCount: string;
  description: string;
  details: string[];
}

const products: Product[] = [
  {
    id: "obsidian-sovereign",
    name: "The Obsidian Sovereign",
    subtitle: "Formal Evening Tuxedo Shirt",
    price: "₹14,500",
    priceRaw: "14500",
    colorHex: "#0B0C10",
    imageSrc: "/assets/products/obsidian.png",
    weave: "Marcella Pleated Bib",
    threadCount: "220s 2-Ply Giza Cotton",
    description: "Command the room in midnight black. Engineered for state dinners and gala premieres, featuring hand-pleated Marcella cotton bib and removable mother-of-pearl stud closures.",
    details: [
      "100% Giza 87 Long-Staple Egyptian Cotton",
      "Concealed button placket with dual stud conversion",
      "Traditional French Cuffs for bespoke cufflink pairing",
      "Split back yoke for anatomical shoulder drape",
    ],
  },
  {
    id: "alabaster-monarch",
    name: "The Alabaster Monarch",
    subtitle: "The Flagship Executive White",
    price: "₹12,800",
    priceRaw: "12800",
    colorHex: "#F4F4F0",
    imageSrc: "/assets/products/alabaster.png",
    weave: "Royal Micro Twill",
    threadCount: "200s Compact Spun",
    description: "The gold standard of formalwear. Immaculate crisp white finish with proprietary stain-resistant silk coating and structured Baltic spread collar.",
    details: [
      "200s 2-ply luxury compact yarn",
      "Austrian 4mm thick Mother-of-Pearl buttons",
      "18-degree German stiffened spread collar",
      "Hand-finished single-needle side seams",
    ],
  },
  {
    id: "midnight-diplomat",
    name: "The Midnight Diplomat",
    subtitle: "Bespoke Navy Micro-Chevron",
    price: "₹13,500",
    priceRaw: "13500",
    colorHex: "#161A23",
    imageSrc: "/assets/products/diplomat.png",
    weave: "Micro Chevron Herringbone",
    threadCount: "200s Egyptian Cotton",
    description: "Subtle texture for high-stakes negotiations. Deep indigo-charcoal chevron weave reflecting soft luster under studio illumination.",
    details: [
      "Exclusive Swiss-loomed chevron structure",
      "Integrated removable 18K gold-plated collar stays",
      "Curved hemline designed to remain tucked all day",
      "Reinforced pentagonal side gussets",
    ],
  },
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="collection" className="relative w-full py-32 px-6 z-20 bg-gradient-to-b from-transparent via-[#0B0C10]/80 to-transparent">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Title Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-mono">
            Curated Atelier Releases
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F4F4F0]">
            The Sovereign Trilogy
          </h2>
          <p className="text-sm text-[#E8E5DF]/60 font-light tracking-widest uppercase">
            Limited to 50 handcrafted pieces per edition globally.
          </p>
        </div>

        {/* 3 Floating Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
              onClick={() => setSelectedProduct(product)}
              data-cursor-hover
              data-cursor-text="View"
              className="relative rounded-2xl glass-card p-8 flex flex-col justify-between cursor-pointer group border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-all duration-500 min-h-[520px]"
            >
              {/* Background ambient lighting */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C5A880]/5 via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Details */}
              <div className="flex justify-between items-start z-10">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#C5A880] px-3 py-1 rounded-full glass-panel border border-[#C5A880]/20">
                  {product.weave}
                </span>
                <span className="font-serif text-xl font-medium text-[#C5A880]">
                  {product.price}
                </span>
              </div>

              {/* Center AI Luxury Photography Graphic */}
              <div className="my-6 z-10 flex flex-col items-center justify-center relative">
                <div className="w-48 h-56 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="z-10 space-y-2 pt-6 border-t border-[#C5A880]/10">
                <h3 className="font-serif text-2xl font-light text-[#F4F4F0] group-hover:text-[#C5A880] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#E8E5DF]/60 font-light tracking-wider">
                  {product.subtitle}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C5A880]">
                  <span>Fullscreen Inspection</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Product Preview Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl glass-card rounded-3xl p-8 sm:p-12 border border-[#C5A880]/40 my-auto shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                data-cursor-hover
                className="absolute top-6 right-6 p-3 rounded-full glass-panel text-[#C5A880] hover:text-white hover:border-[#C5A880] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Visual Preview */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl glass-panel border border-[#C5A880]/20 min-h-[380px] relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] font-mono text-[#C5A880] uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Studio Inspection</span>
                  </div>

                  <div className="w-full h-80 rounded-xl relative overflow-hidden shadow-2xl">
                    <Image
                      src={selectedProduct.imageSrc}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details Content */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-mono">
                      {selectedProduct.threadCount}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#F4F4F0] mt-1">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-2xl font-serif text-[#C5A880] mt-2">
                      {selectedProduct.price}
                    </p>
                  </div>

                  <p className="text-sm text-[#E8E5DF]/80 font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                      Bespoke Specifications:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-[#E8E5DF]/70 font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => alert(`Bespoke consultation requested for ${selectedProduct.name}. A Master Tailor will contact you.`)}
                      data-cursor-hover
                      className="flex-1 px-8 py-4 rounded-full bg-[#C5A880] text-black font-medium text-xs tracking-widest uppercase hover:bg-[#E5C99F] transition-all shadow-[0_0_30px_rgba(197,168,128,0.3)]"
                    >
                      Reserve Bespoke Fitting
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

