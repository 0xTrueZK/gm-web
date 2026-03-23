"use client";

import { motion, type Variants } from "framer-motion";
import { Users, Building2, Cpu } from "lucide-react";

export default function AddressableEconomy() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="ecosystem" className="relative w-full py-32 bg-surface flex justify-center items-center">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center">
          <span className="text-secondary font-mono text-sm tracking-widest font-bold uppercase mb-4">Operational Scope</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface">
            Full Addressable <br/> Economy.
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="bg-surface-container-low border border-surface-container-high rounded-[2rem] p-10 flex flex-col gap-6 hover:bg-surface-container transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex justify-center items-center">
              <Users className="text-primary w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">Human Commerce</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Next-gen retail payments and borderless remittances with zero FX friction.
              </p>
            </div>
            <div className="mt-auto h-1 w-1/3 bg-primary/30 rounded-full group-hover:bg-primary transition-colors" />
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="bg-surface-container-low border border-surface-container-high rounded-[2rem] p-10 flex flex-col gap-6 hover:bg-surface-container transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex justify-center items-center">
              <Building2 className="text-secondary w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">Institutional Finance</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Instant cross-border settlement for global capital markets and corporate treasuries.
              </p>
            </div>
            <div className="mt-auto flex gap-3">
              <span className="text-[10px] font-mono tracking-widest text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-sm uppercase">T+0 Settlement</span>
              <span className="text-[10px] font-mono tracking-widest text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-sm uppercase">Liquidity Pools</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="bg-surface-container-low border border-surface-container-high rounded-[2rem] p-10 flex flex-col gap-6 hover:bg-surface-container transition-colors group lg:col-span-1 md:col-span-2">
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex justify-center items-center">
              <Cpu className="text-tertiary w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">Autonomous Economy</h3>
              <p className="text-on-surface-variant leading-relaxed">
                The native currency for AI agents. Automated micro-payments for compute, data, and API throughput without human intervention.
              </p>
            </div>
            <div className="mt-auto relative w-12 h-12 flex justify-center items-center">
              <div className="absolute inset-0 border-2 border-tertiary/30 rounded-full border-t-tertiary animate-spin" style={{ animationDuration: '3s' }} />
              <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_#b1ffce]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
