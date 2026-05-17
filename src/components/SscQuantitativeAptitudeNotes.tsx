"use client";
import React, { useState } from 'react';
import { Percent, Ruler, BarChart2, Star, AlertCircle } from 'lucide-react';

export default function SscQuantitativeAptitudeNotes() {
  const [activeTab, setActiveTab] = useState<'arithmetic' | 'advanced' | 'stats'>('arithmetic');

  const tabs = [
    { id: 'arithmetic', label: '🧮 Arithmetic Tricks (अंकगणित)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'advanced', label: '📐 Advanced Maths (उच्च गणित)', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' },
    { id: 'stats', label: '📊 Statistics & Probability (सांख्यिकी)', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Percent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">Quantitative Aptitude Study Notes</h3>
          <p className="text-xs md:text-sm text-slate-400">SSC CGL Tier 1 & 2 गणितीय अवधारणाएं, शार्टकट ट्रिक्स और सूत्र</p>
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

        {/* TAB 1: ARITHMETIC TRICKS */}
        {activeTab === 'arithmetic' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            {/* Percentage & Profit Loss */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">📈 1. Percentage & Successive Change:</span>
                <p>• <strong>क्रमागत प्रतिशत परिवर्तन (Successive % Change):</strong> यदि किसी मान में पहले x% और फिर y% की वृद्धि होती है, तो कुल शुद्ध परिवर्तन होता है:</p>
                <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center">
                  कुल परिवर्तन % = x + y + (x * y) / 100
                </p>
                <p className="text-[11px] text-slate-400">• *नोट: कमी होने पर x या y का मान ऋणात्मक (-) रखें।*</p>
                
                <p className="mt-2">• <strong>Dishonest Shopkeeper (बेईमान दुकानदार):</strong></p>
                <p className="p-2 bg-slate-950/60 rounded text-slate-300">
                  लाभ प्रतिशत % = [ (त्रुटि / (वास्तविक मान - त्रुटि)) * 100 ]<br />
                  *उदाहरण:* यदि 1 kg के स्थान पर 900 g तोलता है, तो लाभ% = [ (100 / 900) * 100 ] = 11.11%
                </p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">⏳ 2. Time, Work & Relative Speed:</span>
                <p>• <strong>Time and Work Efficiency Rule:</strong> कार्य = दक्षता × समय (Work = Efficiency * Time)</p>
                <p className="p-2 bg-slate-950/60 rounded text-slate-300">
                  यदि A किसी कार्य को 10 दिन में और B उसे 15 दिन में करता है, तो दोनों मिलकर:<br />
                  LCM (10, 15) = 30 (कुल कार्य)<br />
                  A की दक्षता = 3, B की दक्षता = 2. दोनों का कुल समय = 30 / (3+2) = 6 दिन।
                </p>

                <p className="mt-2">• <strong>सापेक्ष गति (Relative Speed):</strong></p>
                <ul className="space-y-1 text-[11px] text-slate-400">
                  <li>• **समान दिशा (Same direction):** सापेक्ष चाल = S₁ - S₂</li>
                  <li>• **विपरीत दिशा (Opposite direction):** सापेक्ष चाल = S₁ + S₂</li>
                  <li>• **औसत चाल (Average Speed - बराबर दूरी पर):** 2 * S₁ * S₂ / (S₁ + S₂)</li>
                </ul>
              </div>
            </div>

            {/* Simple Interest & Compound Interest */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3 text-xs">
              <span className="font-bold text-emerald-350 block text-sm">💰 3. Simple & Compound Interest Tricks (साधारण व चक्रवृद्धि ब्याज):</span>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>💥 2 वर्ष के लिए CI और SI का अंतर (Difference):</strong>
                  <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center mt-1">
                    D₂ = P * (R / 100)²
                  </p>
                  <p className="text-[11px] text-slate-400">जहाँ P = मूलधन (Principal), R = ब्याज दर (Rate), D = अंतर</p>
                </div>
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>💥 3 वर्ष के लिए CI और SI का अंतर (Difference):</strong>
                  <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center mt-1">
                    D₃ = P * (R / 100)² * [ 3 + R / 100 ]
                  </p>
                  <p className="text-[11px] text-slate-400">इस फॉर्मूले से SSC CGL परीक्षाओं में सीधे सवाल पूछे जाते हैं।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADVANCED MATHS */}
        {activeTab === 'advanced' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-teal-400 flex items-center gap-2 text-sm">
                <Ruler className="w-4 h-4" /> 📐 उच्च गणित बीजगणित, ज्यामिति और त्रिकोणमिति सूत्र
              </span>
              <p>SSC CGL Tier 1 & 2 में एडवांस्ड मैथ्स का भारांक (weightage) लगभग 40% से 50% होता है। यहाँ मुख्य सूत्र संग्रह हैं:</p>
            </div>

            {/* Algebra & Geometry */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">🔑 A. Algebra Identities (बीजगणित के महत्वपूर्ण सूत्र):</span>
                <div className="space-y-2 text-slate-300 font-mono">
                  <p>• (a + b)³ = a³ + b³ + 3ab(a + b)</p>
                  <p>• a³ + b³ = (a + b)(a² - ab + b²)</p>
                  <p className="p-2 bg-slate-950/60 rounded text-slate-200 text-xs">
                    🔥 <strong>अति महत्वपूर्ण सूत्र (SSC Special):</strong><br />
                    a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)<br />
                    = 1/2 * (a + b + c) * [ (a - b)² + (b - c)² + (c - a)² ]<br />
                    🚨 <strong>विशेष स्थिति:</strong> यदि a + b + c = 0 हो, तो <strong>a³ + b³ + c³ = 3abc</strong> होता है।
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">📐 B. Geometry Concepts (ज्यामिति के सुनहरे नियम):</span>
                <div className="space-y-2 text-slate-350">
                  <p>• <strong>Centroid (केंद्रक):</strong> त्रिभुज की माध्यिकाओं का प्रतिच्छेदन बिंदु होता है। यह माध्यिका को <strong>2 : 1</strong> के अनुपात में विभाजित करता है।</p>
                  <p>• <strong>Incentre Angle (अंतःकेंद्र कोण):</strong> ∠BIC = 90° + 1/2 * ∠A</p>
                  <p>• <strong>Orthocentre Angle (लंबकेंद्र कोण):</strong> ∠BOC = 180° - ∠A</p>
                  <p>• <strong>Circle Chord Theorem:</strong> यदि दो जीवाएं AB और CD वृत्त के अंदर P पर काटती हैं, तो: <strong>PA * PB = PC * PD</strong></p>
                  <p>• <strong>Tangent Secant Theorem:</strong> यदि P से वृत्त पर एक स्पर्श रेखा PT और एक छेदक रेखा PAB खींची जाए, तो: <strong>PT² = PA * PB</strong></p>
                </div>
              </div>
            </div>

            {/* Trigonometry & Mensuration */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">📐 C. Trigonometry Hacks (त्रिकोणमिति नियम):</span>
                <div className="space-y-2 text-slate-350 font-mono">
                  <p>• sin²θ + cos²θ = 1</p>
                  <p>• sec²θ - tan²θ = 1 ➜ (secθ - tanθ) = 1 / (secθ + tanθ)</p>
                  <p>• cosec²θ - cot²θ = 1</p>
                  <div className="p-2.5 bg-teal-500/10 rounded font-sans text-slate-200">
                    💡 <strong>Complementary Angles (पूरक कोण):</strong><br />
                    यदि A + B = 90° हो, तो:<br />
                    • sinA = cosB | tanA * tanB = 1 | sin²A + sin²B = 1
                  </div>
                  <p className="font-sans text-[11px]">⚡ <strong>Height and Distance Shortcut:</strong> 30°-60°-90° वाले त्रिभुज में भुजाओं का अनुपात हमेशा <strong>1 : √3 : 2</strong> होता है।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">📦 D. Mensuration Formulas (क्षेत्रमिति सूत्र):</span>
                <div className="space-y-1.5 text-slate-350">
                  <p>• <strong>शंकु (Cone):</strong> आयतन = 1/3 * πr²h, वक्र पृष्ठ क्षेत्रफल = πrl (l = √(r² + h²))</p>
                  <p>• <strong>बेलन (Cylinder):</strong> आयतन = πr²h, वक्र पृष्ठ = 2πrh, कुल पृष्ठ = 2πr(r+h)</p>
                  <p>• <strong>गोला (Sphere):</strong> आयतन = 4/3 * πr³, वक्र पृष्ठ = 4πr²</p>
                  <p>• <strong>अर्धगोला (Hemisphere):</strong> आयतन = 2/3 * πr³, कुल पृष्ठ क्षेत्रफल = 3πr²</p>
                  <p>• <strong>लंब प्रिज्म (Right Prism):</strong> आयतन = (आधार का क्षेत्रफल) * ऊँचाई</p>
                  <p>• <strong>सम पिरामिड (Regular Pyramid):</strong> आयतन = 1/3 * (आधार का क्षेत्रफल) * ऊँचाई</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STATISTICS & PROBABILITY */}
        {activeTab === 'stats' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-cyan-400 flex items-center gap-2 text-sm">
                <BarChart2 className="w-4 h-4" /> 📊 सांख्यिकी एवं प्रायिकता (Statistics & Probability)
              </span>
              <p>SSC CGL Tier 2 के पेपर 1 में सांख्यिकी और प्रायिकता (Probability) के प्रश्न अनिवार्य रूप से जोड़े गए हैं।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block mb-1 text-sm">📈 1. Measures of Central Tendency (केंद्रीय प्रवृत्ति):</span>
                <p>• <strong>Mean (माध्य):</strong> सभी पदों का योग / पदों की कुल संख्या।</p>
                <p>• <strong>Median (माध्यिका):</strong> पदों को आरोही क्रम में व्यवस्थित करने पर मध्य का पद।</p>
                <p className="pl-3 text-slate-450">• यदि सम (Even) संख्या हो: Median = 1/2 * [ (n/2)th + (n/2 + 1)th ] पद</p>
                <p>• <strong>Mode (बहुलक):</strong> वह मान जो श्रृंखला में सबसे अधिक बार आता है।</p>
                <p className="p-2.5 bg-cyan-500/10 text-slate-100 rounded font-semibold border border-cyan-500/20 text-center">
                  🚨 <strong>अनुभवजन्य संबंध (Empirical Relationship):</strong><br />
                  बहुलक (Mode) = 3 × माध्यिका (Median) - 2 × माध्य (Mean)
                </p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block mb-1 text-sm">🎲 2. Probability Concepts (प्रायिकता सिद्धांत):</span>
                <p>• **प्रायिकता (Probability) P(A):** अनुकूल परिणामों की संख्या / कुल संभावित परिणामों की संख्या</p>
                <p>• **रेंज:** P(A) का मान हमेशा <strong>0 से 1 के बीच</strong> (0 ≤ P(A) ≤ 1) होता है।</p>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1.5">
                  <strong>💡 महत्वपूर्ण शार्टकट ट्रिक्स:</strong>
                  <p>• <strong>ताश के पत्ते (Cards Pack):</strong> कुल 52 पत्ते होते हैं। 26 लाल (13 ईंट, 13 पान) और 26 काले (13 हुकुम, 13 चिड़ी)। फेस कार्ड्स (King, Queen, Jack) कुल 12 होते हैं।</p>
                  <p>• <strong>स्वतंत्र घटनाएं (Independent Events):</strong> P(A ∩ B) = P(A) × P(B)</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
