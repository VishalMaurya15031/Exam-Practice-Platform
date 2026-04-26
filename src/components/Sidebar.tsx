"use client";
import Link from 'next/link';
import { useState } from 'react';

const exams = [
  {
    category: "SSC Exams",
    items: [
      { name: "SSC CGL", href: "/exams/ssc-cgl" },
      { name: "SSC CHSL", href: "/exams/ssc-chsl" },
      { name: "SSC GD", href: "/exams/ssc-gd" },
      { name: "SSC MTS", href: "/exams/ssc-mts" },
      { name: "SSC JE", href: "/exams/ssc-je" },
    ]
  },
  {
    category: "Railway Exams",
    items: [
      { name: "RRB NTPC", href: "/exams/rrb-ntpc" },
      { name: "RRB Group D", href: "/exams/rrb-group-d" },
      { name: "RRB ALP", href: "/exams/rrb-alp" },
    ]
  },
  {
    category: "State Police",
    items: [
      { name: "UP Police SI", href: "/exams/up-police-si" },
      { name: "UP Police Constable", href: "/exams/up-police-constable" },
    ]
  },
  {
    category: "Defence & Para",
    items: [
      { name: "CRPF Constable", href: "/exams/crpf-constable" },
      { name: "SSB Head Constable", href: "/exams/ssb-head-constable" },
      { name: "SSB SI / ASI", href: "/exams/ssb-si-asi" },
    ]
  }
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] overflow-y-auto sticky top-16 bg-[#0f172a] border-r border-white/5 flex-shrink-0 hidden md:block hide-scrollbar">
      <div className="p-4">
        {exams.map((group, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">
              {group.category}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link 
                    href={item.href}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
