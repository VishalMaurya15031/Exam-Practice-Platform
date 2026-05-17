"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Award, CheckCircle2, ChevronRight, Play, ArrowRight, Shield } from 'lucide-react';
import { examsData } from '@/lib/examsData';

export default function Home() {
  // Set default active category to 0 ("SSC Exams") so CGL, CHSL, MTS, etc. are open out-of-the-box!
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      title: "SSC Exams",
      desc: "Prepare for CGL, CHSL, MTS, GD, and JE with premium study notes & mock tests.",
      color: "from-blue-500 to-indigo-500",
      shadow: "shadow-blue-500/10",
      border: "border-blue-500/20",
      icon: "🎯"
    },
    {
      title: "Railway (RRB)",
      desc: "Comprehensive study materials and mock tests for NTPC, Group D, and ALP.",
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/10",
      border: "border-emerald-500/20",
      icon: "🚄"
    },
    {
      title: "State Police",
      desc: "Specialized mock tests and detailed syllabus notes for UP Police SI & Constable.",
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/10",
      border: "border-orange-500/20",
      icon: "👮"
    },
    {
      title: "Defence & Para",
      desc: "Ace CRPF Constable, SSB Head Constable, and SSB SI / ASI exams with ease.",
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/10",
      border: "border-purple-500/20",
      icon: "🎖️"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-12 animate-fadeIn">
      {/* Hero Header Section */}
      <div className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0b1329] to-slate-900 border border-white/5 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            परीक्षा तैयारी मंच (Exam Prep Hub)
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-slate-50">
            Master Your <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Exams</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            नवीनतम सिलेबस, विस्तृत स्टडी नोट्स और प्रीमियम मॉक टेस्ट के साथ अपनी परीक्षा की तैयारी को नई ऊंचाई दें।
          </p>
        </div>
      </div>

      {/* Grid Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "कुल परीक्षाएं (Exams)", value: "15+", color: "text-indigo-400" },
          { label: "चैप्टर नोट्स (Notes)", value: "100%", color: "text-amber-400" },
          { label: "मॉक टेस्ट (Mock Tests)", value: "अनलिमिटेड", color: "text-emerald-400" },
          { label: "तैयारी स्थिति (Status)", value: "सक्रिय (Active)", color: "text-rose-400" }
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-slate-900/40 border border-white/5 rounded-2xl flex flex-col justify-center">
            <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
            <span className={`text-base md:text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Category Tabs Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-50">परीक्षा श्रेणियाँ (Exam Categories)</h2>
          <p className="text-xs md:text-sm text-slate-400">अपनी पसंदीदा परीक्षा श्रेणी का चयन करें और उसके अंतर्गत सभी परीक्षाओं को देखें।</p>
        </div>

        {/* Categories Flex Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isActive 
                    ? `bg-slate-900/80 border-indigo-500/50 shadow-lg ${cat.shadow}` 
                    : 'bg-slate-900/30 border-white/5 hover:border-white/10 hover:bg-slate-900/50'
                }`}
              >
                {/* Visual indicator bar */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${cat.color} transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                }`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center text-lg shadow-inner">
                    {cat.icon}
                  </div>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category Sub-Exams Grid */}
      <div className="p-6 md:p-8 bg-[#070b19]/90 border border-indigo-500/10 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-[70px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
          <div>
            <h3 className="text-xl font-bold text-slate-50">
              {examsData[activeCategory]?.category} के अंतर्गत परीक्षाएं
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              अध्ययन शुरू करने या मॉक टेस्ट देने के लिए नीचे दी गई किसी भी परीक्षा का चयन करें।
            </p>
          </div>
          <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold w-fit">
            {examsData[activeCategory]?.items.length} परीक्षाएं उपलब्ध
          </div>
        </div>

        {/* Sub-Exams Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {examsData[activeCategory]?.items.map((exam, i) => (
            <Link 
              key={i} 
              href={exam.href}
              className="p-4 bg-slate-900/50 hover:bg-slate-900 border border-white/5 hover:border-indigo-500/35 rounded-2xl flex items-center justify-between group transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-sm">
                  {exam.name.slice(-3).toUpperCase() === 'CGL' ? '🏆' : exam.name.slice(-2).toUpperCase() === 'SI' ? '🛡️' : '📚'}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 group-hover:text-slate-50 transition-colors text-sm md:text-base">
                    {exam.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">
                    विस्तृत सिलेबस + मॉक टेस्ट
                  </p>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
