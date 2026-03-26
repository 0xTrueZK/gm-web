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
        <div className="flex items-center gap-2 pointer-events-auto cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#8A6D3B] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300">
            <div className="w-3.5 h-3.5 bg-surface rounded-full shadow-inner" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-on-surface">
            Global Money
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFD700] to-[#B8860B] ml-1">GM</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          <a href="#terminal" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Protocol</a>
          <a href="#programmable" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Whitepaper</a>
          <a href="#vaults" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Features</a>
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
