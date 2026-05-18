"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, AlertCircle, ArrowRight, BookOpen, Award, Brain, Atom, Calculator } from 'lucide-react';

export default function RrbGroupDGeneralTestDashboard() {
  const activeSeries = [
    {
      title: "Mathematics Mock Test Series",
      titleHindi: "गणित मॉक टेस्ट सीरीज",
      description: "10 Full Mock Tests containing 300 high-quality bilingual numerical questions on all syllabus topics.",
      descriptionHindi: "सभी पाठ्यक्रम विषयों पर 300 उच्च गुणवत्ता वाले द्विभाषी संख्यात्मक प्रश्नों वाले 10 पूर्ण मॉक टेस्ट।",
      path: "/exams/rrb-group-d/test/mathematics",
      icon: <Calculator className="w-8 h-8 text-sky-400" />,
      colorClass: "from-sky-500/10 to-blue-500/10 border-sky-500/20 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.15)]",
      badge: "10 Tests Active"
    },
    {
      title: "Reasoning Mock Test Series",
      titleHindi: "तर्कशक्ति मॉक टेस्ट सीरीज",
      description: "10 Full Mock Tests containing 300 bilingual questions on Verbal, Analytical & Non-Verbal Reasoning.",
      descriptionHindi: "मौखिक, विश्लेषणात्मक और गैर-मौखिक तर्कशक्ति पर 300 द्विभाषी प्रश्नों वाले 10 पूर्ण मॉक टेस्ट।",
      path: "/exams/rrb-group-d/test/reasoning",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      colorClass: "from-purple-500/10 to-indigo-500/10 border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      badge: "10 Tests Active"
    },
    {
      title: "General Science Mock Test Series",
      titleHindi: "सामान्य विज्ञान मॉक टेस्ट सीरीज",
      description: "10 Full Mock Tests containing 300 bilingual questions on 10th standard Physics, Chemistry & Biology.",
      descriptionHindi: "10वीं स्तर के भौतिकी, रसायन विज्ञान और जीव विज्ञान पर 300 द्विभाषी प्रश्नों वाले 10 पूर्ण मॉक टेस्ट।",
      path: "/exams/rrb-group-d/test/general-science",
      icon: <Atom className="w-8 h-8 text-emerald-400" />,
      colorClass: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
      badge: "10 Tests Active"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-3 mb-10">
        <Link href="/exams/rrb-group-d" className="p-2 rounded-xl bg-slate-800 border border-white/5 hover:border-sky-500/30 text-sky-400 hover:text-sky-300 transition-all flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">RRB Group D Special</span>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mt-1">
            RRB Group D CBT Test Dashboard (मॉक टेस्ट डैशबोर्ड)
          </h1>
        </div>
      </div>

      {/* Subject Series Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {activeSeries.map((series, idx) => (
          <div key={idx} className="bg-[#070b12] border border-white/5 rounded-3xl p-6 hover:border-sky-500/35 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-[40px] pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-slate-900 border flex items-center justify-center`}>
                  {series.icon}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                  {series.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-sky-400 transition-colors">
                {series.title}
              </h3>
              <h4 className="text-xs text-sky-400/80 font-semibold mb-3">
                {series.titleHindi}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-1">
                {series.description}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                {series.descriptionHindi}
              </p>
            </div>
            <Link href={series.path} className="w-full">
              <button className="w-full py-2.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-[1.03] active:scale-[0.98] text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                Start Test Series <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Main Status Card (Full Length Tests) */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden text-center bg-[#080d1a]/85 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <Clock className="w-7 h-7 animate-pulse" />
        </div>
        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-widest">
          Coming Soon / जल्द ही आ रहा है
        </span>
        <h2 className="text-xl font-bold text-slate-100 mt-4 mb-2">
          Full-Length General Mock Tests (100 Questions)
        </h2>
        <p className="text-xs text-slate-450 max-w-xl mx-auto leading-relaxed">
          हम आपके लिए नवीनतम् RRB Group D परीक्षा पैटर्न के अनुसार पूर्ण-लंबाई वाले (100 प्रश्न) मॉक टेस्ट तैयार कर रहे हैं। जिसमें गणित, सामान्य विज्ञान, तर्कशक्ति और सामान्य ज्ञान का संयुक्त CBT परीक्षण उपलब्ध होगा!
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3 text-left">
            <Calendar className="w-5 h-5 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400">Tentative Release</div>
              <div className="text-xs font-semibold text-slate-200">Coming Weeks</div>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400">Total Questions</div>
              <div className="text-xs font-semibold text-slate-200">100 (Full Syllabus)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
