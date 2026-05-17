"use client";
import React, { useState } from 'react';

export default function NumericalAbilityNotes() {
  const [activeTab, setActiveTab] = useState<'arithmetic' | 'commercial' | 'speed' | 'mental'>('arithmetic');

  const tabs = [
    { id: 'arithmetic', label: '🔢 मूल अंकगणित (Basic Math)', color: 'text-amber-455 border-amber-500/30 bg-amber-500/5' },
    { id: 'commercial', label: '📈 व्यावसायिक गणित (Commercial)', color: 'text-sky-455 border-sky-500/30 bg-sky-500/5' },
    { id: 'speed', label: '⏱️ समय, दूरी व क्षेत्रमिति', color: 'text-rose-455 border-rose-500/30 bg-rose-500/5' },
    { id: 'mental', label: '🧠 मानसिक योग्यता (Analytical)', color: 'text-emerald-455 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b13]/95 border border-sky-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-455 font-bold border border-sky-500/20">
          🔢
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">संख्यात्मक एवं मानसिक योग्यता (Numerical & Mental Ability)</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police परीक्षाओं हेतु शॉर्टकट ट्रिक्स, फॉर्मूले व सॉल्विंग एप्रोच</p>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl border transition-all duration-300 ${
              activeTab === tab.id 
                ? `${tab.color} border-current shadow-lg` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6 text-xs md:text-sm leading-relaxed">

        {/* TAB 1: BASIC ARITHMETIC */}
        {activeTab === 'arithmetic' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Number System */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-350 block mb-1">🔢 संख्या पद्धति (Number System):</span>
                <p>• **अभाज्य संख्याएँ (Prime Numbers):** केवल 1 और स्वयं से विभाज्य (जैसे: 2, 3, 5, 7)। **सम अभाज्य:** 2 एकमात्र सम अभाज्य संख्या है। 1 से 100 तक कुल **25** अभाज्य संख्याएँ होती हैं।</p>
                <p>• **भाज्यता के नियम (Divisibility Rules):**
                  <ul className="pl-3.5 space-y-0.5 text-slate-400 text-[11px]">
                    <li>- **3 व 9 का नियम:** अंकों का योग 3 या 9 से विभाजित होना चाहिए।</li>
                    <li>- **11 का नियम:** सम स्थान के अंकों का योग और विषम स्थान के अंकों के योग का अंतर **0 या 11 से विभाज्य** हो।</li>
                  </ul>
                </p>
                <p>• **इकाई का अंक (Unit Digit):** घात (Power) को **4 से भाग** देकर शेषफल प्राप्त करें, फिर इकाई अंक पर घात लगाएं। (यदि शेष 0 बचे, तो घात 4 लगाएं)।</p>
              </div>

              {/* Simplification, Decimals, Fractions, LCM & HCF */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-amber-350 block mb-1">⚙️ सरलीकरण, भिन्न व ल.स.-म.स. (Simplification & LCM/HCF):</span>
                <p>• ⚠️ <strong>BODMAS का नियम:</strong> कोष्ठक हल करने का क्रम: रेखा कोष्ठक (Bar) ➡️ छोटा ( ) ➡️ मझाला ➡️ बड़ा [ ]। फिर **Of (का)** ➡️ **Division (भाग)** ➡️ **Multiplication (गुणा)** ➡️ **Addition (जोड़)** ➡️ **Subtraction (घटाव)**।</p>
                <p>• <strong>लघुत्तम समापवर्त्य (LCM) व महत्तम समापवर्तक (HCF):</strong>
                  <ul className="pl-3.5 space-y-1 text-slate-400 text-[11px]">
                    <li>- **महत्वपूर्ण सूत्र:** पहली संख्या × दूसरी संख्या = HCF × LCM</li>
                    <li>- **भिन्नों का LCM:** (अंशों का LCM) / (हरों का HCF)</li>
                    <li>- **भिन्नों का HCF:** (अंशों का HCF) / (हरों का LCM)</li>
                  </ul>
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: COMMERCIAL MATH */}
        {activeTab === 'commercial' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Percentage, Profit & Loss */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-sky-350 block mb-1">📈 प्रतिशतता, लाभ-हानि व छूट (Profit, Loss & Discount):</span>
                <p>• <strong>लाभ व हानि प्रतिशत:</strong> हमेशा **क्रय मूल्य (CP)** पर निकाला जाता है।
                  <ul className="pl-3.5 space-y-0.5 text-slate-400 text-[11px]">
                    <li>- लाभ % = (लाभ / क्रय मूल्य) × 100</li>
                  </ul>
                </p>
                <p>• <strong>छूट (Discount):</strong> हमेशा **अंकित मूल्य (MP)** पर दिया जाता है।</p>
                <p>• ⚠️ <strong>क्रमिक छूट (Successive Discount) सूत्र:</strong> यदि दो क्रमिक छूट x% और y% दी जाएं, तो एकल समतुल्य छूट = [x + y - (xy/100)]% होगी।</p>
              </div>

              {/* SI & CI, Average & Partnership */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-sky-350 block mb-1">💰 साधारण व चक्रवृद्धि ब्याज (SI & CI), औसत व साझेदारी:</span>
                <p>• **साधारण ब्याज:** SI = (P × R × T) / 100 (प्रति वर्ष ब्याज समान रहता है)।</p>
                <p>• **चक्रवृद्धि ब्याज:** मिश्रधन A = P × (1 + R/100)^T</p>
                <p className="p-2 bg-sky-500/5 text-sky-300 rounded text-[11px]">
                  💡 <strong>2 वर्ष हेतु CI और SI का अंतर सूत्र:</strong> D = P × (R/100)² (परीक्षाओं में सर्वाधिक पूछा जाने वाला)।
                </p>
                <p>• **साझेदारी (Partnership):** लाभांश का बंटवारा हमेशा **(पूंजी × समय)** के अनुपात में होता है।</p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: SPEED, TIME, WORK & MENSURATION */}
        {activeTab === 'speed' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Time, Work & Speed */}
              <div className="p-4 bg-[#0a0f1d] rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-rose-350 block mb-1">⏱️ समय, कार्य, चाल व दूरी (Time, Work & Distance):</span>
                <ul className="space-y-2 text-slate-350 text-[11px]">
                  <li>• <strong>कार्य क्षमता सूत्र (M-D-H Rule):</strong> (M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2 (जहाँ M = व्यक्ति, D = दिन, H = घंटे, W = कार्य)।</li>
                  <li>• <strong>किमी/घंटा से मी/सेकंड में बदलाव:</strong> 5/18 से गुणा करें। (मी/सेकंड से किमी/घंटा हेतु 18/5 से गुणा करें)।</li>
                  <li>• <strong>सापेक्ष चाल (Relative Speed):</strong>
                    <ul className="pl-3.5 space-y-0.5 text-slate-400">
                      <li>- विपरीत दिशा में: दोनों चालें जुड़ जाती हैं (S1 + S2)।</li>
                      <li>- समान दिशा में: दोनों चालें घट जाती हैं (S1 - S2)।</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Mensuration Formulas */}
              <div className="p-4 bg-[#0a0f1d] rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-rose-350 block mb-1">📐 क्षेत्रमिति सूत्र संग्रह (Mensuration Formulae):</span>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-450">
                  <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                    <strong>2D आकृतियाँ (क्षेत्रफल):</strong>
                    <p>• वृत्त = πr² (परिधि = 2πr)</p>
                    <p>• आयत = L × B (परिमाप = 2 × (L + B))</p>
                    <p>• वर्ग = भुजा² (विकर्ण = a × √2)</p>
                  </div>
                  <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                    <strong>3D आकृतियाँ (आयतन):</strong>
                    <p>• बेलन (Cylinder) = πr²h</p>
                    <p>• शंकु (Cone) = (1/3)πr²h</p>
                    <p>• गोला (Sphere) = (4/3)πr³</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: MENTAL ABILITY & LOGICAL DIAGRAMS */}
        {activeTab === 'mental' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-350 block text-sm">🧠 तार्किक आरेख व मानसिक विश्लेषण (Mental Ability & Data):</span>
              
              <div className="grid md:grid-cols-3 gap-4 text-[11px] text-slate-400">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-400">1. वेन आरेख (Logical Diagrams):</strong>
                  <p>सम्बन्धों का आरेखी निरूपण। जैसे: भारत, उत्तर प्रदेश, लखनऊ का वेन आरेख तीन संकेंद्रीय वृत्त (Concentric Circles) होंगे।</p>
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-400">2. आंकड़ों का विश्लेषण (DI):</strong>
                  <p>बार-चार्ट, पाई-चार्ट, और टेबल चार्ट का प्रयोग करके प्रतिशत वृद्धि, औसत और अनुपात निकालना।</p>
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-400">3. तर्क की प्रबलता (Arguments):</strong>
                  <p>कथन के समर्थन में प्रबल एवं कमजोर तर्कों की पहचान करना (हमेशा सार्वभौमिक सत्यों और वैज्ञानिक तथ्यों वाले तर्क प्रबल होते हैं)।</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
