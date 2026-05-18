"use client";
import React, { useState } from 'react';
import { Compass, HelpCircle, Shuffle, ShieldAlert, Image, Star, Eye } from 'lucide-react';

export default function SscReasoningNotes({ topic }: { topic?: string }) {
  const [activeTab, setActiveTab] = useState<'verbal' | 'nonverbal'>('verbal');

  const tabs = [
    { id: 'verbal', label: '🧩 Verbal Reasoning (भाषिक)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'nonverbal', label: '🖼️ Non-Verbal & Logical', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' }
  ] as const;

  // Topic specific render logic
  if (topic) {
    const topicLower = topic.toLowerCase();

    // 1. Alphabet Series, Coding-Decoding
    if (
      topicLower.includes("coding") || 
      topicLower.includes("alphabet") || 
      topicLower.includes("letter") ||
      topicLower.includes("वर्णमाला") ||
      topicLower.includes("कोडिंग")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Compass className="w-5 h-5 animate-pulse" /> Coding-Decoding & Alphabets (कोडिंग-डिकोडिंग शार्टकट)
          </h4>
          <div className="space-y-4">
            <p>अंग्रेजी वर्णमाला के अक्षरों के क्रमबद्ध स्थान (Positions) याद रखने के लिए **EJOTY (5, 10, 15, 20, 25)** का उपयोग करें:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-[#0c1220] rounded border border-white/5">
                <strong>⭐ Alphabet Value Memory Table:</strong>
                <div className="grid grid-cols-5 gap-2 text-center text-slate-100 font-mono mt-2 text-[11px]">
                  <span className="bg-emerald-500/10 p-1.5 rounded">E = 5</span>
                  <span className="bg-emerald-500/10 p-1.5 rounded">J = 10</span>
                  <span className="bg-emerald-500/10 p-1.5 rounded">O = 15</span>
                  <span className="bg-emerald-500/10 p-1.5 rounded">T = 20</span>
                  <span className="bg-emerald-500/10 p-1.5 rounded">Y = 25</span>
                </div>
              </div>
              <div className="p-3 bg-[#0c1220] rounded border border-white/5">
                <strong>💡 Opposite Alphabet Pairs (विपरीत जोड़े):</strong>
                <p className="font-mono text-emerald-350 text-[10px] leading-relaxed mt-1">
                  A-Z (Azad) | B-Y (Boy) | C-X (Crux) | D-W (Dew) | E-V (Evening) | F-U (Flu) | G-T (GT Road) | H-S (High School) | I-R (Indian Rail) | J-Q (Jack-Queen) | K-P (KanPur) | L-O (Love) | M-N (Man)
                </p>
                <p className="text-[9px] text-slate-400 mt-1">*नोट: दो विपरीत अक्षरों के मानों का योग हमेशा **27** होता है (e.g. A(1) + Z(26) = 27)*</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 2. Blood Relations
    if (topicLower.includes("blood") || topicLower.includes("relation") || topicLower.includes("रक्त संबंध")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Shuffle className="w-5 h-5" /> Blood Relations Family Tree Chart (रक्त संबंध पारिवारिक आरेख)
          </h4>
          <div className="space-y-3">
            <p>रक्त संबंध के सवालों को हल करने के लिए **फ़ैमिली ट्री (Family Tree)** बनाना सबसे सटीक तरीका है:</p>
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2 text-[11px]">
              <p>• <strong>लिंग संकेतक (Gender Symbols):</strong> पुरुषों के लिए <strong>[ + ]</strong> (या Square), महिलाओं के लिए <strong>[ - ]</strong> (या Circle) लगाएं।</p>
              <p>• <strong>वैवाहिक संबंध (Married Couples):</strong> दोनों के बीच दोहरा तीर <strong>( A ⇔ B )</strong> दर्शाएं।</p>
              <p>• <strong>भाई-बहन (Siblings):</strong> एकल क्षैतिज रेखा <strong>( A ─ B )</strong> से जोड़ें।</p>
              <p>• <strong>पीढ़ी का अंतर (Generation Gap):</strong> लंबवत रेखा <strong>( │ )</strong> से दर्शाएं (e.g. पिता ऊपर, पुत्र नीचे)।</p>
            </div>
          </div>
        </div>
      );
    }

    // 3. Syllogism
    if (topicLower.includes("syllogism") || topicLower.includes("न्याय")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <HelpCircle className="w-5 h-5" /> Syllogism Venn Diagram Gold Rules (न्याय निगमन स्वर्ण नियम)
          </h4>
          <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2.5">
            <p>• <strong>सकारात्मक बनाम नकारात्मक:</strong> यदि कथन सकारात्मक हैं, तो नकारात्मक निष्कर्ष कभी भी सत्य नहीं हो सकता।</p>
            <p>• <strong>'All' Case (सभी):</strong> 'All A are B' का अर्थ है A का सर्कल पूरी तरह से B के अंदर बनेगा।</p>
            <p>• <strong>Either-Or Case:</strong> यदि (1) दोनों स्वतंत्र निष्कर्ष गलत हों, (2) दोनों में समान तत्व (Subject/Object) हों, (3) एक सकारात्मक (Some/All) व दूसरा नकारात्मक (No/Some not) हो।</p>
          </div>
        </div>
      );
    }

    // 4. Direction Sense
    if (topicLower.includes("direction") || topicLower.includes("दिशा")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Compass className="w-5 h-5 animate-spin-slow" /> Direction Sense & Pythagoras Theorems (दिशा ज्ञान एवं शार्टकट)
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/40 p-3.5 rounded-xl border border-white/5 space-y-1.5">
              <strong>🧭 4 Main & 4 Card Directions:</strong>
              <p>• उत्तर (North), दक्षिण (South), पूर्व (East), पश्चिम (West).</p>
              <p>• उत्तर-पूर्व (NE), उत्तर-पश्चिम (NW), दक्षिण-पूर्व (SE), दक्षिण-पश्चिम (SW).</p>
              <p>• **दाएँ मुड़ना (Right Turn):** हमेशा घड़ी की सुई की दिशा (Clockwise) में 90°।</p>
              <p>• **बाएँ मुड़ना (Left Turn):** एंटी-क्लॉकवाइज 90°।</p>
            </div>
            <div className="bg-slate-900/40 p-3.5 rounded-xl border border-white/5 space-y-1.5">
              <strong>📐 Pythagoras Theorem (न्यूनतम दूरी):</strong>
              <p>• न्यूनतम तिरछी दूरी ज्ञात करने के लिए समकोण त्रिभुज सूत्र का उपयोग करें: $H^2 = B^2 + P^2$</p>
              <p>• **Shadow Rules (परछाई के नियम):**</p>
              <p className="pl-3">• सूर्योदय के समय परछाई हमेशा **पश्चिम** की ओर पड़ती है।</p>
              <p className="pl-3">• सूर्यास्त के समय परछाई हमेशा **पूर्व** की ओर पड़ती है।</p>
            </div>
          </div>
        </div>
      );
    }

    // 5. Mirror / Water Images, Cubes & Dice, Paper folding
    if (
      topicLower.includes("image") || 
      topicLower.includes("mirror") || 
      topicLower.includes("water") || 
      topicLower.includes("paper") || 
      topicLower.includes("cube") || 
      topicLower.includes("dice") ||
      topicLower.includes("छवि") ||
      topicLower.includes("दर्पण") ||
      topicLower.includes("पासा")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Eye className="w-5 h-5" /> Non-Verbal Mirror, Water Images & Dice (गैर-भाषिक रीजनिंग ट्रिक्स)
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-300 block">🖼️ Mirror & Water Images:</span>
              <p>• <strong>Mirror Image (दर्पण):</strong> बायाँ हिस्सा दायाँ बनता है और दायाँ हिस्सा बायाँ। ऊपर और नीचे का भाग समान रहता है।</p>
              <p>• <strong>Water Image (जल छवि):</strong> ऊपर का हिस्सा नीचे और नीचे का हिस्सा ऊपर हो जाता है (Upside-down)। बायाँ-दायाँ हिस्सा समान रहता है।</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-300 block">🎲 Cubes & Dice (पासा नियम):</span>
              <p>• <strong>Standard Dice (मानक पासा):</strong> विपरीत फलकों के अंकों का योग हमेशा <strong>7</strong> होता है (e.g. 1 के विपरीत 6, 2 के विपरीत 5)।</p>
              <p>• <strong>General Dice (सामान्य पासा):</strong> यदि दो पासों में एक अंक समान हो, तो उसे पकड़कर घड़ी की सुई की दिशा (Clockwise) में घुमाकर विपरीत अंक ज्ञात करें।</p>
            </div>
          </div>
        </div>
      );
    }

    // 6. Number Series, Alphabet Series, Ranking, Analogies
    if (
      topicLower.includes("series") || 
      topicLower.includes("ranking") || 
      topicLower.includes("analogy") ||
      topicLower.includes("श्रृंखला") ||
      topicLower.includes("रैंकिंग")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Shuffle className="w-5 h-5" /> Series Completion & Ordering Shortcuts (श्रृंखला व रैंकिंग शार्टकट)
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 block">🔺 Ranking & Ordering Formula:</span>
              <p>यदि किसी व्यक्ति का स्थान दोनों सिरों (बाएँ और दाएँ) से ज्ञात हो, तो पंक्ति में कुल व्यक्तियों की संख्या:</p>
              <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center font-mono">
                Total = Left + Right - 1
              </p>
              <p>• **स्थान बदलना (Interchange):** नई स्थिति और पुरानी स्थितियों के बीच अंतर समान रहता है।</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 block">🔢 Series & Logic Patterns:</span>
              <p>• **Difference Series:** लगातार पदों के बीच का अंतर निकालें (Double difference भी देखें)।</p>
              <p>• **Alternate Series:** एकांतर (अल्टरनेट) स्थानों के बीच संबंध देखें (e.g. 1st, 3rd, 5th पद)।</p>
              <p>• **Multiplication Series:** गुणात्मक और जोड़ (+/-) दोनों नियमों का एक साथ पालन।</p>
            </div>
          </div>
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
        <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
          <Shuffle className="w-5 h-5" /> Reasoning Concept Guide ({topic})
        </h4>
        <p className="text-slate-400 mb-2">शॉर्टकट तार्किक अवधारणाएं एवं अभ्यास नियम:</p>
        <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
          <p>यह विषय सभी प्रतियोगी परीक्षाओं की तर्कशक्ति योग्यता के लिए अत्यंत महत्वपूर्ण है। तार्किक सोच और आरेख का उपयोग करें!</p>
        </div>
      </div>
    );
  }

  // Unified full component rendering (original tabbed view for general pages)
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
              <p>अंग्रेजी वर्णमाला के अक्षरों के क्रमबद्ध स्थान याद रखने के लिए **EJOTY (5, 10, 15, 20, 25)** का उपयोग करें:</p>
            </div>

            {/* Syllogism & Blood Relation */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">💡 2. Syllogism (न्याय निगमन):</span>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">👪 3. Blood Relations (रक्त संबंध):</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NON-VERBAL & ANALYTICAL */}
        {activeTab === 'nonverbal' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">🖼️ 1. Non-Verbal Logic:</span>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">🧠 2. Critical Reasoning:</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
