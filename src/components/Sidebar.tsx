"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { examsData } from '@/lib/examsData';

export default function Sidebar() {
  // Track open/collapsed state of each category, SSC Exams open by default
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({
    0: true, // SSC Exams open by default
  });

  const toggleGroup = (idx: number) => {
    setOpenGroups(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <aside className="w-64 h-[calc(100vh-64px)] overflow-y-auto sticky top-16 bg-[#0f172a] border-r border-white/5 flex-shrink-0 hidden md:block hide-scrollbar">
      <div className="p-4 space-y-4">
        {examsData.map((group, idx) => {
          const isOpen = !!openGroups[idx];
          return (
            <div key={idx} className="border-b border-white/5 pb-3 last:border-0">
              <button 
                onClick={() => toggleGroup(idx)}
                className="flex items-center justify-between w-full text-left py-2 px-2 text-xs font-bold text-slate-400 hover:text-slate-200 transition-all uppercase tracking-wider cursor-pointer group select-none"
              >
                <span>{group.category}</span>
                <ChevronRight 
                  className={`w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-90 text-indigo-400' : ''
                  }`}
                />
              </button>
              
              {/* Collapsible List using CSS Grid for butter-smooth transition */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-1.5 pl-1">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link 
                          href={item.href}
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
  );
}
