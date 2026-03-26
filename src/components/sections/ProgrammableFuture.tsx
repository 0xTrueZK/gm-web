"use client";

import { motion } from "framer-motion";

export default function ProgrammableFuture() {
  return (
    <section id="programmable" className="relative w-full py-24 bg-surface flex flex-col items-center text-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-on-surface mb-12">
            The Future is <br/>
            <span className="premium-gradient-text text-glow-primary">Programmable.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="button-primary">Secure Access Now</button>
            <button className="button-secondary">View Whitepaper</button>
          </div>
        </motion.div>
      </div>

      {/* Decorative subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
