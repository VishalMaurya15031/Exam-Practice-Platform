"use client";
import React, { useState } from 'react';
import { Compass, HelpCircle, Shuffle, ShieldAlert, Star } from 'lucide-react';

export default function SscReasoningNotes() {
  const [activeTab, setActiveTab] = useState<'verbal' | 'nonverbal'>('verbal');

  const tabs = [
    { id: 'verbal', label: '🧩 Verbal Reasoning (भाषिक)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'nonverbal', label: '🖼️ Non-Verbal & Logical', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Shuffle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">General Intelligence & Reasoning Notes</h3>
          <p className="text-xs md:text-sm text-slate-400">SSC CGL सामान्य बुद्धिमत्ता और तर्कशक्ति शार्टकट ट्रिक्स व अभ्यास नियम</p>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-xl border transition-all duration-300 ${
              activeTab === tab.id 
                ? `${tab.color} border-current shadow-lg shadow-emerald-500/5` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: VERBAL REASONING */}
        {activeTab === 'verbal' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            {/* Coding-Decoding & Alphabet Positions */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                <Compass className="w-4 h-4" /> 🔢 1. Coding & Decoding Alphabet Shortcuts:
              </span>
              <p>अंग्रेजी वर्णमाला के अक्षरों के क्रमबद्ध स्थान (Positions) याद रखने के लिए **EJOTY (5, 10, 15, 20, 25)** का उपयोग करें:</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-xs mt-1">
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>⭐ Alphabet Value Memory Table:</strong>
                  <div className="grid grid-cols-5 gap-2 text-center text-slate-100 font-mono mt-1 text-[11px]">
                    <span className="bg-emerald-500/10 p-1 rounded">E = 5</span>
                    <span className="bg-emerald-500/10 p-1 rounded">J = 10</span>
                    <span className="bg-emerald-500/10 p-1 rounded">O = 15</span>
                    <span className="bg-emerald-500/10 p-1 rounded">T = 20</span>
                    <span className="bg-emerald-500/10 p-1 rounded">Y = 25</span>
                  </div>
                </div>
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>💡 Opposite Alphabet Pairs (विपरीत जोड़े):</strong>
                  <p className="font-mono text-emerald-300 text-[11px]">
                    A-Z (Azad) | B-Y (Boy) | C-X (Crux) | D-W (Dew) | E-V (Evening) | F-U (Flu) | G-T (GT Road) | H-S (High School) | I-R (Indian Rail) | J-Q (Jaq-Queen) | K-P (KanPur) | L-O (Love) | M-N (Man)
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">*शॉर्टकट: दो विपरीत अक्षरों के मानों का योग हमेशा **27** होता है (e.g. A(1) + Z(26) = 27)*</p>
                </div>
              </div>
            </div>

            {/* Syllogism & Blood Relation */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">💡 2. Syllogism (न्याय निगमन स्वर्ण नियम):</span>
                <ul className="space-y-2 text-[11px] text-slate-300">
                  <li>• **सकारात्मक कथन (Positive Statement):** यदि कथन सकारात्मक हैं, तो नकारात्मक निष्कर्ष कभी सही नहीं हो सकता।</li>
                  <li>• **सभी (All):** 'All A are B' का अर्थ है A पूरी तरह से B के अंदर है। इसके द्वारा केवल 'Some B are A' सही होगा।</li>
                  <li>• **कुछ नहीं (Some A are not B):** वेन आरेख बनाकर दोनों सर्कल के बीच संबंध को काटें।</li>
                  <li>• **Either-Or Case:** यदि: 
                    <p className="pl-3 text-emerald-300">1. दोनों निष्कर्ष गलत हों।<br />2. दोनों के तत्व (Subject-Object) समान हों।<br />3. एक सकारात्मक (Some) व एक नकारात्मक (No) हो।</p>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">👪 3. Blood Relations (रक्त संबंध आरेख):</span>
                <p>प्रश्नों को आसानी से हल करने के लिए **फ़ैमिली ट्री (Family Tree)** बनाएं:</p>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-1.5 text-[11px] text-slate-350">
                  <p>• <strong>संकेत:</strong> पुरुषों के लिए <strong>[ + ]</strong> या वर्ग, महिलाओं के लिए <strong>[ - ]</strong> या गोला का उपयोग करें।</p>
                  <p>• <strong>विवाहित जोड़ा:</strong> दोनों के बीच दोहरा तीर <strong>( ⇔ )</strong> लगाएं।</p>
                  <p>• <strong>भाई-बहन:</strong> एक सीधी रेखा <strong>( ─ )</strong> का उपयोग करें।</p>
                  <p>• <strong>पीढ़ी का अंतर (Generations):</strong> लंबवत रेखा <strong>( │ )</strong> से दर्शाएं (पिता ऊपर, पुत्र नीचे)।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NON-VERBAL & ANALYTICAL */}
        {activeTab === 'nonverbal' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Non-Verbal Tricks */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">🖼️ 1. Non-Verbal Logic (गैर-भाषिक तर्क):</span>
                <div className="space-y-2 text-[11px]">
                  <p>• <strong>Mirror Images (दर्पण छवि):</strong> दर्पण के सबसे नज़दीक वाला हिस्सा छवि में भी सबसे नज़दीक होगा। बाएँ और दाएँ हिस्से आपस में बदल जाते हैं, ऊपर-नीचे का भाग समान रहता है।</p>
                  <p>• <strong>Water Images (जल छवि):</strong> ऊपर और नीचे का हिस्सा आपस में बदल जाता है (Top becomes Bottom), बाएँ और दाएँ भाग बिल्कुल समान रहते हैं।</p>
                  <p>• <strong>Paper Folding & Cutting:</strong> जब कागज को खोला जाता है, तो प्रत्येक मोड़ रेखा (fold line) एक दर्पण (mirror) की तरह काम करती है। उसी अनुसार आकृति का विस्तार करें।</p>
                </div>
              </div>

              {/* Analytical reasoning */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">🧠 2. Critical Reasoning (विश्लेषणात्मक तर्क):</span>
                <div className="space-y-2 text-[11px] text-slate-350">
                  <p>• <strong>Statements & Assumptions (कथन और पूर्वधारणाएं):</strong> पूर्वधारणा हमेशा कथन के पीछे का छिपा हुआ विचार होती है। यह हमेशा **सकारात्मक, व्यावहारिक और अत्यधिक तार्किक** होनी चाहिए (कभी भी अतिवादी या नकारात्मक नहीं)।</p>
                  <p>• <strong>Statements & Course of Action (कथन और कार्यवाही):</strong> चुनी गई कार्यवाही व्यावहारिक होनी चाहिए और समस्या को बढ़ाने के बजाय उसे कम करने या हल करने वाली होनी चाहिए। कठोर दंड के बजाय सुधारात्मक उपायों को प्राथमिकता दें।</p>
                </div>
              </div>
            </div>

            {/* Figure Counting Shortcut */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-emerald-350 block text-sm">📐 3. Figure Counting Shortcuts (आकृति गणना शार्टकट):</span>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <strong>🔺 त्रिभुजों की संख्या ज्ञात करना (Triangles in Triangle):</strong>
                  <p className="mt-1">यदि एक बड़े त्रिभुज के अंदर लंबवत रेखाएं खींची गई हों, तो आधार पर बने छोटे खानों को गिनकर आपस में जोड़ दें:</p>
                  <p className="p-1.5 bg-emerald-500/10 text-slate-100 rounded text-center font-bold mt-1.5">
                    कुल त्रिभुज = 1 + 2 + 3 + ... + n
                  </p>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <strong>⬜ वर्गों की संख्या ज्ञात करना (Squares in Matrix):</strong>
                  <p className="mt-1">यदि m × n का ग्रिड हो (जहाँ m = rows, n = columns):</p>
                  <p className="p-1.5 bg-emerald-500/10 text-slate-100 rounded text-center font-mono mt-1.5">
                    Squares = (m * n) + ((m-1) * (n-1)) + ((m-2) * (n-2)) + ... (जब तक कोई 0 न हो)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
