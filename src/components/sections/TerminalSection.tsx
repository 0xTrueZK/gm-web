"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Option = {
  id: string;
  label: string;
  detail: string;
  command: string;
  logs: string[];
};

const OPTIONS: Option[] = [
  { 
    id: "initialize", 
    label: "Initialize AI Treasury Engine", 
    detail: "(Self-custodial)",
    command: "gm-core init --treasury --ai-mode",
    logs: [
      "Authenticating with multisig wallet...",
      "Loading neural weights for treasury balancing v4.2...",
      "Connecting to real-time liquidity aggregators...",
      "Initializing predictive risk models...",
      "AI Treasury Engine [ACTIVE]"
    ]
  },
  { 
    id: "zk-proof", 
    label: "Verify ZK-STARK Proof-of-Reserves", 
    detail: "(Real-time)",
    command: "gm-cli verify-reserves --zk-proof",
    logs: [
      "Fetching latest cryptographic attestations...",
      "Downloading Cairo execution trace...",
      "Running ZK-STARK polynomial constraints verifier...",
      "Mathematical proof verified in 42ms.",
      "Result: 100% Reserve Backing Confirmed."
    ]
  },
  { 
    id: "settle", 
    label: "Execute Multi-Fiat Cross-Border Settlement", 
    detail: "(Atomic)",
    command: "gm-settle route --pair USD/JPY --amount 1000000",
    logs: [
      "Locating optimal liquidity path...",
      "Locking GM-USD in collateral vault...",
      "Minting equivalent GM-JPY on target chain...",
      "Finalizing atomic swap contract...",
      "Settlement complete in 1.2 seconds. Cost: $0.001."
    ]
  },
  { 
    id: "agent", 
    label: "Authorize Autonomous Agent Payment", 
    detail: "(Programmable)",
    command: "gm-agent auth --model inference-v2 --budget 10GM",
    logs: [
      "Validating agent identity and reputation...",
      "Establishing sovereign payment channel...",
      "Streaming micro-payments for continuous inference...",
      "Compute cluster access granted.",
      "Agent working..."
    ]
  },
  { 
    id: "compliance", 
    label: "Run Privacy-Preserving ZK-KYC Check", 
    detail: "(Sovereign)",
    command: "gm-ident verify --zk-kyc",
    logs: [
      "Requesting zero-knowledge identity proof...",
      "Checking non-inclusion in sanctions list...",
      "Verifying jurisdictional citizenship requirement...",
      "No PII exposed during computation.",
      "Compliance verification complete: PASSED."
    ]
  },
];

export default function TerminalSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);
  const [activeCommand, setActiveCommand] = useState<string>("");
  const isMountedRun = useRef<boolean>(true);

  useEffect(() => {
    return () => {
      isMountedRun.current = false;
    };
  }, []);

  const startExecution = useCallback((option: Option) => {
    setIsExecuting(true);
    setCurrentLogs([]);
    setActiveCommand(option.command);

    let delay = 600;
    
    option.logs.forEach((log, index) => {
      const isLast = index === option.logs.length - 1;
      
      // If it's the last log (success message), add an extra 2.5s "processing" delay
      if (isLast) {
        delay += 2500;
      } else {
        delay += Math.random() * 400 + 400; 
      }

      setTimeout(() => {
        if (!isMountedRun.current) return;
        setCurrentLogs(prev => [...prev, log]);
        
        if (isLast) {
          // Keep the success message visible for 3s before resetting
          setTimeout(() => {
            if (!isMountedRun.current) return;
            setIsExecuting(false);
            setCurrentLogs([]);
            setActiveCommand("");
          }, 3000);
        }
      }, delay);
    });
  }, []);

  const handleSelect = useCallback(() => {
    if (isExecuting) return;
    const option = OPTIONS[selectedIndex];
    startExecution(option);
  }, [selectedIndex, isExecuting, startExecution]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isExecuting) return;
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : OPTIONS.length - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < OPTIONS.length - 1 ? prev + 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (!isExecuting) {
        startExecution(OPTIONS[selectedIndex]);
      }
    }
  }, [isExecuting, selectedIndex, startExecution]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <section id="terminal" className="relative w-full py-32 bg-surface flex flex-col items-center">
      <div className="container mx-auto max-w-4xl px-6">
        
        {/* Terminal Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest font-bold uppercase mb-4">Command Center</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Interact with GM.</h2>
          <p className="text-on-surface-variant mt-4 max-w-lg">
            Experience the programmable layer directly. Use your keyboard or hover to explore the protocol primitives.
          </p>
        </div>

        {/* The Browser/Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#121212] rounded-2xl border border-surface-container-high shadow-2xl overflow-hidden font-mono"
        >
          {/* Top Bar */}
          <div className="bg-[#1a1919] px-6 py-4 border-b border-surface-container-high flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase opacity-50">
              gm.protocol@v1.0.2 (beta)
            </div>
            <div className="w-12 h-0" /> {/* Spacer */}
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 min-h-[460px] flex flex-col text-sm md:text-base relative">
            <div className="text-on-surface-variant mb-4">gm.ai@f0x7b (released 2m ago)</div>
            
            <AnimatePresence mode="wait">
              {!isExecuting ? (
                <motion.div 
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col"
                >
                  <div className="flex gap-2 text-primary mb-8">
                    <span>$</span>
                    <span className="animate-pulse">./gm-shell.sh</span>
                  </div>

                  <div className="text-on-surface mb-6">What would you like to do?</div>

                  <div className="flex flex-col gap-3">
                    {OPTIONS.map((option, idx) => (
                      <div 
                        key={option.id}
                        onMouseEnter={() => !isExecuting && setSelectedIndex(idx)}
                        onClick={handleSelect}
                        className={`flex items-center gap-4 cursor-pointer transition-colors duration-200 ${
                          selectedIndex === idx ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        <span className={`w-4 flex justify-center ${selectedIndex === idx ? "opacity-100" : "opacity-0"}`}>
                          ▶
                        </span>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                          <span className="font-bold">{option.label}</span>
                          <span className="opacity-50 text-xs md:text-sm">{option.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-surface-container-high text-xs text-on-surface-variant flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4">
                      <span>Use <span className="text-primary">↑↓</span> to select</span>
                      <span><span className="text-primary">↵</span> to confirm</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest opacity-40">
                      PROMOTED BY GM DECCENTRALIZED AI
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="executing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col text-sm md:text-base text-on-surface-variant"
                >
                  <div className="flex gap-2 text-primary mb-6">
                    <span>$</span>
                    <span className="typewriter-text text-on-surface">{activeCommand}</span>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {currentLogs.map((log, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-start gap-4 ${idx === OPTIONS[selectedIndex].logs.length - 1 ? 'text-primary font-bold mt-4' : ''}`}
                      >
                        <span className="opacity-50 mt-1 text-xs">{'>'}</span>
                        <span>{log}</span>
                      </motion.div>
                    ))}
                    
                    {currentLogs.length < OPTIONS[selectedIndex].logs.length && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex mt-2"
                      >
                        <span className="w-2 h-4 bg-primary animate-pulse" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Floating background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      </div>
    </section>
  );
}
