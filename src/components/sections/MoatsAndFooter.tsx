"use client";

export default function MoatsAndFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest py-16 border-t border-surface-container mt-12">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg tracking-tight">Global Money.</span>
          <span className="text-xs text-on-surface-variant font-mono uppercase tracking-widest">
            © 2026 GLOBAL MONEY. THE SOVEREIGN VAULT.
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 text-sm font-medium text-on-surface-variant">
          <a href="#hero" className="hover:text-white transition-colors">Network</a>
          <a href="#protocol" className="hover:text-white transition-colors">Protocol</a>
          <a href="#hero" className="hover:text-white transition-colors">Governance</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#hero" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
