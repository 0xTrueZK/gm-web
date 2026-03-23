"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none"
    >
      {/* We use pointer-events-none on parent and auto on children to allow clicking through the empty space */}
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2 pointer-events-auto cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(109,221,255,0.5)]">
            <div className="w-3 h-3 bg-surface rounded-full" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-on-surface">
            Global Money
            <span className="text-primary ml-1">GM</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          <a href="#ecosystem" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Ecosystem</a>
          <a href="#vaults" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Vaults</a>
          <a href="#security" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Security</a>
        </div>

        <div className="pointer-events-auto flex items-center gap-4">
          <button className="button-primary text-sm px-4 py-2 hidden md:flex">
            Join the Network
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
