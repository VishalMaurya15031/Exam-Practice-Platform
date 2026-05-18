"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, AlertCircle, ArrowRight, BookOpen, BrainCircuit } from 'lucide-react';

export default function RrbGroupDReasoningTestDashboard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link href="/exams/rrb-group-d" className="p-2 rounded-xl bg-slate-800 border border-white/5 hover:border-sky-500/30 text-sky-400 hover:text-sky-300 transition-all flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">RRB Group D</span>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-350 bg-clip-text text-transparent mt-1">
            Reasoning Mock Test Series (तर्कशक्ति मॉक टेस्ट)
          </h1>
        </div>
      </div>

      {/* Main Status Card */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-8 text-center bg-[#080d1a]/80">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <BrainCircuit className="w-8 h-8 animate-pulse" />
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-widest">
          Coming Soon / जल्द ही आ रहा है
        </span>
        <h2 className="text-2xl font-bold text-slate-100 mt-4 mb-3">
          Reasoning Mock Tests are being designed!
        </h2>
        <p className="text-sm text-slate-450 max-w-xl mx-auto leading-relaxed">
          हम आपके लिए वर्णमाला श्रृंखला, दिशा ज्ञान, कोडिंग-डिकोडिंग और गैर-मौखिक तर्कशक्ति जैसे विषयों को कवर करने वाले उत्कृष्ट अभ्यास टेस्ट तैयार कर रहे हैं। ये जल्द ही आपके अभ्यास के लिए उपलब्ध होंगे!
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3 text-left">
            <Calendar className="w-5 h-5 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Total Planned Tests</div>
              <div className="text-sm font-semibold text-slate-200">10 Full Tests</div>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Questions Per Test</div>
              <div className="text-sm font-semibold text-slate-200">30 Bilingual Questions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Redirect Card to Mathematics Mock Tests */}
      <div className="bg-gradient-to-r from-sky-950/40 to-blue-950/40 border border-sky-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.05)] hover:border-sky-500/45 transition-colors duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-lg text-left">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider mb-3 inline-block">
            Fully Active Practice / पूरी तरह सक्रिय
          </span>
          <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-400" /> Mathematics Mock Test Series (गणित मॉक टेस्ट)
          </h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            इस बीच, आप 300+ शानदार द्विभाषी प्रश्नों से भरपूर गणित के पूरे 10 मॉक टेस्ट का अभ्यास करके अपनी तैयारी को नई ऊँचाइयों पर ले जा सकते हैं!
          </p>
        </div>
        <Link href="/exams/rrb-group-d/test/mathematics">
          <button className="px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-105 active:scale-95 text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] white-nowrap flex-shrink-0">
            Start Math Mock Test <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
