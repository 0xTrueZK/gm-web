"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ThreeVisual = dynamic(() => import("@/components/ui/ThreeVisual"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Visual Background */}
      <ThreeVisual />

      <div className="container mx-auto max-w-7xl px-6 relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center"
        >
          {/* AI Status Chip */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full surface-container-high ghost-border backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-ring relative">
              <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75"></span>
            </div>
            <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              AI Managed Stability Engine Active
            </span>
          </div>

          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-none text-on-surface mb-4">
            GLOBAL MONEY <br />
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-on-surface-variant leading-relaxed">
            The first programmable, AI-managed, multi-fiat stablecoin. <br className="hidden md:block" />
            A universal monetary unit designed for both humans and autonomous systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-12"
        >
          <button className="button-primary">
            Get Started
          </button>
          <button className="button-secondary">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Decorative gradient floor */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-surface-container-lowest to-transparent pointer-events-none" />
    </section>
  );
}
