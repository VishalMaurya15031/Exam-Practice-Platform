"use client";
import React from 'react';
import { Menu } from 'lucide-react';

export default function MobileFAB() {
  const openMenu = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-mobile-menu'));
    }
  };

  return (
    <button
      onClick={openMenu}
      className="md:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full shadow-xl shadow-indigo-500/20 border border-indigo-400/30 active:scale-95 hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/35"
      style={{
        animation: 'bounce 3s infinite'
      }}
    >
      <Menu className="w-5 h-5" />
      <span className="text-xs tracking-wide">सभी परीक्षाएं (Exams)</span>
    </button>
  );
}
