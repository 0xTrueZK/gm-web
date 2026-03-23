"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, LockKeyhole, Coins, Globe, Network } from "lucide-react";

export default function FeaturesGrid() {
  const capabilities = [
    {
      icon: <BrainCircuit className="text-primary w-5 h-5" />,
      colorClass: "bg-primary/10 hover:border-primary/50 text-primary",
      title: "AI Driven Treasury Rebalancing",
      desc: "Neural networks monitor liquidity pools and macro indicators to rebalance reserves autonomously."
    },
    {
      icon: <Coins className="text-secondary w-5 h-5" />,
      colorClass: "bg-secondary/10 hover:border-secondary/50 text-secondary",
      title: "Multi-Fiat Pairing Capability",
      desc: "Instantly route and settle across USD, EUR, GBP, JPY, and INR pairs without intermediary friction."
    },
    {
      icon: <Globe className="text-tertiary w-5 h-5" />,
      colorClass: "bg-tertiary/10 hover:border-tertiary/50 text-tertiary",
      title: "Multi-Currency Reserve Backing",
      desc: "Pegged to a diversified basket of real-world assets protecting global purchasing power."
    },
    {
      icon: <ShieldCheck className="text-primary w-5 h-5" />,
      colorClass: "bg-primary/10 hover:border-primary/50 text-primary",
      title: "zk-STARK Proof-of-Reserves",
      desc: "Unmatched mathematical transparency through zero-knowledge proofs updated in real-time."
    },
    {
      icon: <LockKeyhole className="text-secondary w-5 h-5" />,
      colorClass: "bg-secondary/10 hover:border-secondary/50 text-secondary",
      title: "Privacy-Preserving Compliance",
      desc: "zk-KYC ensures regulatory compliance globally without sacrificing user privacy or sovereign identity."
    },
    {
      icon: <Network className="text-tertiary w-5 h-5" />,
      colorClass: "bg-tertiary/10 hover:border-tertiary/50 text-tertiary",
      title: "Multi-Chain Settlement",
      desc: "Seamless compatibility and unified liquidity across major L1 and L2 networks."
    }
  ];

  return (
    <section id="vaults" className="relative w-full py-32 bg-surface-container-lowest flex flex-col items-center">
      <div id="security" className="absolute top-0 w-full h-0" /> { /* Anchor for security */ }
      <div className="container mx-auto max-w-7xl px-6 flex flex-col gap-16">
        
        {/* Engineered for Dominance Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-surface-container-low pb-12">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest font-bold uppercase mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
              Engineered for <br/> Dominance
            </h2>
          </div>
          <p className="max-w-md text-on-surface-variant text-lg">
            We don&apos;t just manage capital; we program it using the world&apos;s most advanced cryptographic primitives.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-surface p-8 rounded-[2rem] border border-surface-container-high transition-colors hover:border-current group ${cap.colorClass.split(' ')[1]}`}
            >
              <div className={`w-10 h-10 mb-6 rounded-full flex justify-center items-center ${cap.colorClass.split(' ')[0]}`}>
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{cap.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
