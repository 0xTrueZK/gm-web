"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function CategorySection() {
  return (
    <section id="protocol" className="relative w-full py-32 bg-surface-container-lowest flex justify-center items-center">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-secondary font-mono text-sm tracking-widest font-bold uppercase">The Challenge</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface leading-tight">
            Fragmented <br /> Liquidity.
          </h2>
          <ul className="text-on-surface-variant text-sm flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-secondary/50" /> Capital trapped across siloed balances</li>
            <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-secondary/50" /> Operational complexity for global platforms</li>
            <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-secondary/50" /> Lack of verifiable transparency at scale</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-4 relative z-10"
        >
          {/* Comparison Cards */}
          <div className="bg-surface-container-low border border-surface-container-high rounded-3xl p-6 flex flex-col gap-2 transition-all hover:bg-surface-container">
            <span className="text-on-surface-variant font-medium text-lg flex items-center justify-between">Today (Fragmented)</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {['USDC', 'EURC', 'GBP', 'INR', 'JPY'].map(fiat => (
                <span key={fiat} className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant font-mono">{fiat}</span>
              ))}
            </div>
            <span className="text-on-surface-variant/70 text-sm mt-4 font-mono uppercase tracking-widest text-[10px]">Result: Manual FX + Liquidity Fragmentation</span>
          </div>

          <div className="relative glass-panel rounded-3xl p-8 flex flex-col justify-between mt-4 border border-primary/30 shadow-[0_0_40px_rgba(109,221,255,0.15)] group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="z-10 flex flex-col gap-1 mb-6">
              <span className="text-on-surface font-bold text-2xl tracking-tight flex items-center gap-2">
                With GM
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#6dddff]" />
              </span>
              <span className="text-primary text-sm font-medium tracking-wide">Local Fiat Purchasing Power Everywhere</span>
            </div>

            <p className="text-sm text-on-surface-variant relative z-10 leading-relaxed border-t border-primary/20 pt-4">
              Provides a single balance and automatically maintains local fiat purchasing power while remaining fully backed by regulated assets.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
