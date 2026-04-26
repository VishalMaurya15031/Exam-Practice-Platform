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
        <Link href="/login" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
          Log in
        </Link>
        <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          Sign up
        </Link>
      </div>
    </nav>
  );
}
