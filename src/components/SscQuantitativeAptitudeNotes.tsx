"use client";
import React, { useState } from 'react';
import { Percent, Ruler, BarChart2, Hash, Percent as PercentIcon, RefreshCw, Layers, Calculator } from 'lucide-react';

export default function SscQuantitativeAptitudeNotes({ topic }: { topic?: string }) {
  const [activeTab, setActiveTab] = useState<'arithmetic' | 'advanced' | 'stats'>('arithmetic');

  const tabs = [
    { id: 'arithmetic', label: '🧮 Arithmetic Tricks (अंकगणित)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'advanced', label: '📐 Advanced Maths (उच्च गणित)', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' },
    { id: 'stats', label: '📊 Statistics & Probability (सांख्यिकी)', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' }
  ] as const;

  // Topic specific render logic
  if (topic) {
    const topicLower = topic.toLowerCase();

    // 1. Number System, Simplification, HCF/LCM, Decimal Fractions, Square/Cube Roots
    if (
      topicLower.includes("number system") || 
      topicLower.includes("simplification") || 
      topicLower.includes("hcf") || 
      topicLower.includes("lcm") || 
      topicLower.includes("fraction") || 
      topicLower.includes("root") ||
      topicLower.includes("संख्या पद्धति") ||
      topicLower.includes("सरलीकरण") ||
      topicLower.includes("भिन्न")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Hash className="w-5 h-5" /> Number System & Simplification Notes (संख्या पद्धति एवं सरलीकरण)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🔢 Divisibility & Shortcuts (विभाज्यता के नियम):</span>
              <p>• <strong>Divisibility by 3 & 9:</strong> अंकों का योग 3 या 9 से विभाजित होना चाहिए।</p>
              <p>• <strong>Divisibility by 11:</strong> विषम स्थानों के अंकों का योग - सम स्थानों के अंकों का योग = 0 या 11 का गुणज होना चाहिए (e.g. 1331).</p>
              <p>• <strong>Unit Digit Rule:</strong> 2, 3, 7, 8 की चक्रता (cyclicity) 4 होती है। घात (power) को 4 से भाग देकर शेषफल निकालें।</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">📐 Fractions & Roots (भिन्न व वर्गमूल):</span>
              <p>• <strong>BODMAS Rule:</strong> Bracket ➜ Of ➜ Division ➜ Multiplication ➜ Addition ➜ Subtraction.</p>
              <p>• <strong>Recurring Decimals:</strong> 0.p̅ = p/9, 0.pq̅ = (pq - p)/90. *उदाहरण:* 0.35̅ = (35-3)/90 = 32/90.</p>
              <p>• <strong>HCF & LCM Rule:</strong> दो संख्याओं का गुणनफल = HCF × LCM.</p>
              <p>• <strong>Fractions HCF/LCM:</strong> भिन्नों का LCM = अंशों का LCM / हरों का HCF.</p>
            </div>
          </div>
        </div>
      );
    }

    // 2. Percentage, Ratio, Partnership, Unitary Method
    if (
      topicLower.includes("percent") || 
      topicLower.includes("ratio") || 
      topicLower.includes("proportion") || 
      topicLower.includes("partnership") || 
      topicLower.includes("unitary") ||
      topicLower.includes("प्रतिशत") ||
      topicLower.includes("अनुपात") ||
      topicLower.includes("साझेदारी")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <PercentIcon className="w-5 h-5" /> Percentage, Ratio & Ratios (प्रतिशत व अनुपात नियम)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
              <span className="font-semibold text-emerald-350 text-[13px] block">📈 Percentage & Changes:</span>
              <p>• <strong>Successive % Change:</strong> यदि पहले x% और फिर y% की वृद्धि होती है, तो कुल शुद्ध परिवर्तन:</p>
              <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center">
                कुल परिवर्तन % = x + y + (x * y) / 100
              </p>
              <p className="text-[11px] text-slate-400">• *नोट:* कमी होने पर x या y को ऋणात्मक (-) रखें।</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🤝 Ratio & Partnership (साझेदारी):</span>
              <p>• <strong>Partnership Rule:</strong> लाभ का अनुपात = (निवेशित पूंजी × निवेश का समय) का अनुपात।</p>
              <p className="p-2 bg-slate-950/60 rounded text-slate-300">
                Profit Ratio = (P1 × T1) : (P2 × T2)
              </p>
              <p>• <strong>Mean Proportion (मध्यानुपाती):</strong> a और b का मध्यानुपाती = √(a × b)</p>
              <p>• <strong>Third Proportion (तृतीयानुपाती):</strong> a और b का तृतीयानुपाती = b² / a</p>
            </div>
          </div>
        </div>
      );
    }

    // 3. Time and Work, Time and Distance, Speed
    if (
      topicLower.includes("work") || 
      topicLower.includes("distance") || 
      topicLower.includes("speed") || 
      topicLower.includes("time") ||
      topicLower.includes("कार्य") ||
      topicLower.includes("दूरी")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <RefreshCw className="w-5 h-5 animate-spin-slow" /> Time, Work & Relative Speed Notes (कार्य व चाल समय)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">⏳ Time and Work (कार्य और समय):</span>
              <p>• <strong>Efficiency Rule:</strong> कार्य = दक्षता × समय (Work = Efficiency × Time)</p>
              <p>• <strong>LCM Method:</strong> कुल कार्य = समयों का LCM.</p>
              <p className="p-2 bg-slate-950/60 rounded text-slate-300 text-[11px]">
                A, 10 दिन में और B, 15 दिन में करता है, तो कुल कार्य = LCM(10,15) = 30.<br />
                A की दक्षता = 3, B की दक्षता = 2. मिलकर समय = 30 / (3+2) = 6 दिन।
              </p>
              <p>• <strong>MDH Formula:</strong> $(M_1 \times D_1 \times H_1) / W_1 = (M_2 \times D_2 \times H_2) / W_2$</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🏃 Speed, Time & Distance (दूरी व चाल):</span>
              <p>• <strong>Relative Speed (सापेक्ष चाल):</strong></p>
              <p className="pl-3">• **समान दिशा (Same direction):** सापेक्ष चाल = S1 - S2</p>
              <p className="pl-3">• **विपरीत दिशा (Opposite direction):** सापेक्ष चाल = S1 + S2</p>
              <p>• <strong>Average Speed:</strong> बराबर दूरी होने पर, औसत चाल = $2 \times S_1 \times S_2 / (S_1 + S_2)$</p>
              <p>• <strong>Units Conversion:</strong> km/h को m/s में बदलने के लिए 5/18 से गुणा करें।</p>
            </div>
          </div>
        </div>
      );
    }

    // 4. Profit and Loss
    if (topicLower.includes("profit") || topicLower.includes("loss") || topicLower.includes("लाभ")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <PercentIcon className="w-5 h-5" /> Profit, Loss & Discount Notes (लाभ, हानि व बट्टा)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">💰 Profit & Loss Formulas:</span>
              <p>• <strong>Profit %:</strong> [ (SP - CP) / CP ] × 100</p>
              <p>• <strong>Loss %:</strong> [ (CP - SP) / CP ] × 100</p>
              <p>• <strong>Dishonest Shopkeeper Trick:</strong></p>
              <p className="p-2.5 bg-slate-950/60 rounded text-slate-300 text-[11px]">
                लाभ% = [ (त्रुटि / (वास्तविक मान - त्रुटि)) × 100 ]<br />
                *उदाहरण:* यदि 1 kg के स्थान पर 800 g तोलता है, तो लाभ% = [ (200 / 800) × 100 ] = 25%
              </p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🏷️ Marked Price & Discount (अंकित मूल्य व छूट):</span>
              <p>• <strong>Discount %:</strong> [ (MP - SP) / MP ] × 100</p>
              <p>• <strong>Relationship between CP and MP:</strong></p>
              <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center">
                CP / MP = (100 - Discount%) / (100 + Profit%)
              </p>
              <p>• <strong>Successive Discount:</strong> d1% और d2% की दो क्रमिक छूटों के बराबर एकल समतुल्य छूट = d1 + d2 - (d1 × d2) / 100</p>
            </div>
          </div>
        </div>
      );
    }

    // 5. Interest (Simple and Compound)
    if (topicLower.includes("interest") || topicLower.includes("ब्याज")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Layers className="w-5 h-5" /> Simple & Compound Interest Tricks (साधारण व चक्रवृद्धि ब्याज)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">💰 Simple Interest (SI):</span>
              <p>• <strong>Formula:</strong> SI = (P × R × T) / 100</p>
              <p>• यदि कोई राशि T वर्षों में n गुनी हो जाती है, तो दर R = (n - 1) × 100 / T</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">📈 CI & SI Difference Shortcuts (अति महत्वपूर्ण):</span>
              <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1.5 text-[11px]">
                <strong>💥 2 वर्ष के लिए CI और SI का अंतर:</strong>
                <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center font-mono">
                  D2 = P × (R / 100)²
                </p>
                <strong>💥 3 वर्ष के लिए CI और SI का अंतर:</strong>
                <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center font-mono">
                  D3 = P × (R / 100)² × [ 3 + R/100 ]
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 6. Mensuration, Geometry, Algebra
    if (
      topicLower.includes("mensuration") || 
      topicLower.includes("geometry") || 
      topicLower.includes("algebra") ||
      topicLower.includes("क्षेत्रमिति") ||
      topicLower.includes("बीजगणित")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Ruler className="w-5 h-5" /> Algebra, Geometry & Mensuration Formulas (बीजगणित व क्षेत्रमिति)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🔑 Algebra Identities (बीजगणित):</span>
              <div className="space-y-1 text-slate-350 font-mono text-[11px]">
                <p>• (a + b)³ = a³ + b³ + 3ab(a + b)</p>
                <p>• a³ + b³ = (a + b)(a² - ab + b²)</p>
                <p>• a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)</p>
                <p>🚨 यदि a + b + c = 0 हो, तो <strong>a³ + b³ + c³ = 3abc</strong>.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">📦 Mensuration Formulas (क्षेत्रमिति):</span>
              <div className="space-y-1 text-slate-350 text-[11px]">
                <p>• <strong>Cone (शंकु):</strong> Volume = 1/3 * πr²h, Lateral Area = πrl</p>
                <p>• <strong>Cylinder (बेलन):</strong> Volume = πr²h, Total Area = 2πr(r+h)</p>
                <p>• <strong>Sphere (गोला):</strong> Volume = 4/3 * πr³, Area = 4πr²</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
        <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
          <Calculator className="w-5 h-5" /> Quantitative Aptitude Study Notes ({topic})
        </h4>
        <p className="text-slate-400 mb-2">शॉर्टकट ट्रिक्स, महत्वपूर्ण सूत्र एवं अभ्यास अवधारणाएं:</p>
        <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
          <p className="font-semibold text-emerald-300 mb-1">• {topic} Key Shortcut:</p>
          <p>सभी प्रतियोगी परीक्षाओं (SSC, Railway, Police) के लिए सर्वश्रेष्ठ संकलन। अभ्यास के साथ हल करें!</p>
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
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">⏳ 2. Time, Work & Relative Speed:</span>
                <p>• <strong>Time and Work Efficiency Rule:</strong> कार्य = दक्षता × समय (Work = Efficiency * Time)</p>
                <p className="p-2 bg-slate-950/60 rounded text-slate-300">
                  यदि A किसी कार्य को 10 दिन में और B उसे 15 दिन में करता है, तो दोनों मिलकर:<br />
                  LCM (10, 15) = 30 (कुल कार्य)<br />
                  A की दक्षता = 3, B की दक्षता = 2. दोनों का कुल समय = 30 / (3+2) = 6 दिन।
                </p>
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
                </div>
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>💥 3 वर्ष के लिए CI और SI का अंतर (Difference):</strong>
                  <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center mt-1">
                    D₃ = P * (R / 100)² * [ 3 + R / 100 ]
                  </p>
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
              <p>SSC CGL Tier 1 & 2 में एडवांस्ड मैथ्स का भारांक लगभग 40% से 50% होता है।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">🔑 A. Algebra Identities (बीजगणित के सूत्र):</span>
                <div className="space-y-2 text-slate-300 font-mono">
                  <p>• (a + b)³ = a³ + b³ + 3ab(a + b)</p>
                  <p>• a³ + b³ = (a + b)(a² - ab + b²)</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">📐 B. Geometry Concepts (ज्यामिति नियम):</span>
                <div className="space-y-2 text-slate-350">
                  <p>• <strong>Centroid (केंद्रक):</strong> माध्यिका को <strong>2 : 1</strong> के अनुपात में विभाजित करता है।</p>
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
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
