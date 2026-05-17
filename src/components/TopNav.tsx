"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { examsData } from '@/lib/examsData';

export default function TopNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({
    0: true, // SSC Exams open by default
  });

  useEffect(() => {
    const handleOpen = () => setIsMobileMenuOpen(true);
    window.addEventListener('open-mobile-menu', handleOpen);
    return () => window.removeEventListener('open-mobile-menu', handleOpen);
  }, []);

  const toggleGroup = (idx: number) => {
    setOpenGroups(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <>
      <nav className="h-16 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5 px-4 md:px-6 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 -ml-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors md:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
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

      {/* Mobile Drawer Overlay */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Drawer Panel */}
      <aside 
        className={`fixed top-0 left-0 w-72 max-w-[80vw] h-full bg-[#0f172a] border-r border-white/5 p-5 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ExamPro.
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto mt-4 pr-1 space-y-4 hide-scrollbar">
          {examsData.map((group, idx) => {
            const isOpen = !!openGroups[idx];
            return (
              <div key={idx} className="border-b border-white/5 pb-3 last:border-0">
                <button 
                  onClick={() => toggleGroup(idx)}
                  className="flex items-center justify-between w-full text-left py-2 px-1 text-xs font-bold text-slate-400 hover:text-slate-200 transition-all uppercase tracking-wider cursor-pointer group select-none"
                >
                  <span>{group.category}</span>
                  <ChevronRight 
                    className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-90 text-indigo-400' : ''
                    }`}
                  />
                </button>
                
                {/* Collapsible List using CSS Grid transition */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1 pl-1">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-300 hover:text-indigo-400 hover:bg-indigo-500/5 rounded-lg transition-all duration-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
