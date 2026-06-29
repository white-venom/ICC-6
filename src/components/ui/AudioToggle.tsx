"use client";

import React, { useState, useRef, useEffect } from "react";
import { VolumeX } from "lucide-react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      // Start ambient luxury synth soundscape
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Create warm lush chord oscillators (Warm A minor luxury chord)
        const freqs = [110, 164.81, 220, 261.63, 329.63]; // A2, E3, A3, C4, E4
        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle LFO modulation for warm organic feel
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.2 + Math.random() * 0.1, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          oscGain.gain.setValueAtTime(0.04, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();
        });

        setIsPlaying(true);
      } catch (e) {
        console.error("Audio context error:", e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
        setTimeout(() => {
          ctx.close();
          audioCtxRef.current = null;
          setIsPlaying(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      data-cursor-hover
      data-cursor-text={isPlaying ? "Mute" : "Sound"}
      className="fixed top-8 right-8 z-50 flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-[#C5A880]/20 text-xs tracking-widest uppercase text-[#E8E5DF] hover:border-[#C5A880]/50 transition-all duration-300 group"
    >
      <span className="font-light text-[#C5A880] group-hover:text-[#F4F4F0] transition-colors">
        {isPlaying ? "Ambient On" : "Soundscape"}
      </span>
      
      {isPlaying ? (
        <div className="flex items-center gap-1 h-3">
          <span className="w-0.5 h-full bg-[#C5A880] animate-pulse"></span>
          <span className="w-0.5 h-2/3 bg-[#C5A880] animate-pulse delay-100"></span>
          <span className="w-0.5 h-4/5 bg-[#C5A880] animate-pulse delay-200"></span>
        </div>
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-[#C5A880]" />
      )}
    </button>
  );
}
