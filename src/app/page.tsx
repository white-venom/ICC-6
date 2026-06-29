"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/ui/CustomCursor";
import AudioToggle from "@/components/ui/AudioToggle";
import Preloader from "@/components/ui/Preloader";
import HeroSection from "@/components/sections/HeroSection";
import StorytellingSection from "@/components/sections/StorytellingSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Footer from "@/components/sections/Footer";

// Dynamically import Three.js WebGL Canvas to prevent SSR hydration mismatches
const LuxuryShirtCanvas = dynamic(
  () => import("@/components/canvas/LuxuryShirtCanvas"),
  { ssr: false }
);

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExploreClick = () => {
    const storyEl = document.getElementById("story");
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#060608] text-[#F4F4F0] selection:bg-[#C5A880] selection:text-black">
      {/* Luxury Entry Preloader */}
      <Preloader />

      {/* Micro-interactions: Custom Follower Cursor & Web Audio Toggle */}
      <CustomCursor />
      <AudioToggle />

      {/* Fixed 3D WebGL Canvas Layer */}
      <div className="fixed inset-0 z-0 w-full h-screen overflow-hidden">
        <LuxuryShirtCanvas scrollProgress={scrollProgress} />
      </div>

      {/* Foreground Interactive Landing Experience */}
      <div className="relative z-10">
        <HeroSection onExploreClick={handleExploreClick} />
        <StorytellingSection />
        <ProductShowcase />
        <Footer />
      </div>
    </main>
  );
}
