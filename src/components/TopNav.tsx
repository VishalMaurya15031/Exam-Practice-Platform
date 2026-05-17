"use client";
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="h-16 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Mobile menu button could go here */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ExamPro.
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-xs border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          🟢 All Tests Unlocked
        </div>
      </div>
    </nav>
  );
}
