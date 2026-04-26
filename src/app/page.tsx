"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const categories = [
    {
      title: "SSC Exams",
      desc: "Prepare for CGL, CHSL, MTS, GD, and JE with our premium mock tests.",
      link: "/exams/ssc-cgl",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Railway (RRB)",
      desc: "Comprehensive tests for NTPC, Group D, and Assistant Loco Pilot (ALP).",
      link: "/exams/rrb-ntpc",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "State Police",
      desc: "Specialized mock tests for UP Police SI and UP Police Constable.",
      link: "/exams/up-police-si",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Defence & Para",
      desc: "Ace CRPF Constable, SSB Head Constable, and SSB SI / ASI exams.",
      link: "/exams/crpf-constable",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Master Your Exams
        </h1>
        <p className="text-xl text-slate-400">
          Select an exam from the sidebar or click below to start practicing with our premium mock tests.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <Link href={cat.link} key={idx} className="block group">
            <div className="glass-panel h-full hover:scale-[1.02] transition-transform duration-300">
              <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${cat.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-slate-50">{cat.title}</h2>
              <p className="text-slate-400 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
