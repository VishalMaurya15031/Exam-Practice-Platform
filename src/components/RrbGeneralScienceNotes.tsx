"use client";
import React, { useState } from 'react';
import { Atom, Activity, Zap, Beaker, ShieldAlert } from 'lucide-react';

export default function RrbGeneralScienceNotes({ topic }: { topic?: string }) {
  const getDefaultTab = () => {
    if (topic) {
      const topicLower = topic.toLowerCase();
      if (topicLower.includes("chemistry") || topicLower.includes("atoms") || topicLower.includes("molecules") || topicLower.includes("chemical") || topicLower.includes("periodic") || topicLower.includes("metal") || topicLower.includes("oxidation") || topicLower.includes("combustion") || topicLower.includes("bond")) {
        return 'chemistry';
      }
      if (topicLower.includes("life science") || topicLower.includes("biology") || topicLower.includes("organism") || topicLower.includes("plant") || topicLower.includes("cell") || topicLower.includes("cytology") || topicLower.includes("genetics") || topicLower.includes("human") || topicLower.includes("blood") || topicLower.includes("eye") || topicLower.includes("nutrient") || topicLower.includes("anatomy") || topicLower.includes("heredity") || topicLower.includes("evolution") || topicLower.includes("tissue") || topicLower.includes("disease") || topicLower.includes("ecology") || topicLower.includes("pollution")) {
        return 'biology';
      }
    }
    return 'physics';
  };

  const [activeTab, setActiveTab] = useState<'physics' | 'chemistry' | 'biology'>(getDefaultTab());

  const tabs = [
    { id: 'physics', label: '⚡ Physics (भौतिक विज्ञान)', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'chemistry', label: '🧪 Chemistry (रसायन विज्ञान)', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'biology', label: '🧬 Life Science (जीव विज्ञान)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-sky-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold border border-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          <Atom className="w-5 h-5 animate-spin-slow" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">General Science Study Notes</h3>
          <p className="text-xs md:text-sm text-slate-400">RRB Group D & NTPC सामान्य विज्ञान (भौतिक, रसायन व जीव विज्ञान) नोट्स</p>
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
                ? `${tab.color} border-current shadow-lg shadow-sky-500/5` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: PHYSICS */}
        {activeTab === 'physics' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Force & Motion */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-sky-350 block border-b border-white/5 pb-1 text-sm">🏎️ 1. Force & Laws of Motion (बल व गति के नियम):</span>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <p>• <strong>Newton's First Law (जड़त्व का नियम):</strong> वस्तु अपनी विराम या गति की अवस्था बनाए रखती है जब तक बाहरी बल न लगे (e.g. बस रुकने पर आगे झुकना)।</p>
                  <p>• <strong>Newton's Second Law (संवेग का नियम):</strong> Force = Mass * Acceleration (F = m * a).</p>
                  <p>• <strong>Newton's Third Law (क्रिया-प्रतिक्रिया):</strong> प्रत्येक क्रिया के बराबर और विपरीत प्रतिक्रिया होती है (e.g. रॉकेट का उड़ना, बंदूक से पीछे धक्का लगना)।</p>
                  <p>• <strong>Equilibrium & Gravity:</strong> Acceleration due to gravity (g) = 9.8 m/s² (ध्रुवों पर अधिकतम, भूमध्य रेखा पर न्यूनतम, केंद्र में शून्य)।</p>
                </div>
              </div>

              {/* Light & Electricity */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-sky-350 block border-b border-white/5 pb-1 text-sm">💡 2. Light & Electricity (प्रकाश व विद्युत):</span>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2 text-[11px]">
                  <strong>🔍 प्रकाश का परावर्तन व अपवर्तन (Reflection & Refraction):</strong>
                  <p>• <strong>Mirror Formula (दर्पण सूत्र):</strong> 1/f = 1/v + 1/u (f = focus, v = image distance, u = object distance).</p>
                  <p>• <strong>Lens Formula (लेंस सूत्र):</strong> 1/f = 1/v - 1/u.</p>
                  <p>• <strong>Refractive Index (अपवर्तनांक):</strong> हीरा का अपवर्तनांक सर्वाधिक (2.42) होता है। पूर्ण आंतरिक परावर्तन (TIR) के कारण हीरा चमकता है और मरीचिका बनती है।</p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2 text-[11px]">
                  <strong>⚡ धारा और प्रतिरोध (Current & Resistance):</strong>
                  <p>• <strong>Ohm's Law:</strong> V = I * R. Series resistance: R_eq = R1 + R2. Parallel: 1/R_eq = 1/R1 + 1/R2.</p>
                  <p>• <strong>Fuse Wire (फ्यूज तार):</strong> यह सीसा (Lead) और टिन (Tin) का बना होता है। इसका **गलनांक निम्न (Low melting point)** और **प्रतिरोध उच्च** होता है।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CHEMISTRY */}
        {activeTab === 'chemistry' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Matter & Atoms */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-indigo-350 block border-b border-white/5 pb-1 text-sm">⚛️ 1. Matter & Atomic Structure (पदार्थ व परमाणु):</span>
                <div className="space-y-2 text-[11px]">
                  <p>• <strong>Atom's Sub-particles:</strong></p>
                  <p className="pl-3 text-slate-350">• **Proton:** खोजकर्ता रदरफोर्ड / गोल्डस्टीन (धनावेश)।</p>
                  <p className="pl-3 text-slate-350">• **Electron:** जे.जे. थॉमसन (ऋणावेश)।</p>
                  <p className="pl-3 text-slate-350">• **Neutron:** जेम्स चैडविक (उदासीन)।</p>
                  <p>• <strong>Bohr's Model:</strong> कक्षा में इलेक्ट्रॉन की अधिकतम संख्या 2 * n² होती है (K=2, L=8, M=18, N=32)।</p>
                  <p>• <strong>Valency (संयोजकता):</strong> परमाणु के सबसे बाहरी कोश में मौजूद इलेक्ट्रॉनों की संख्या।</p>
                </div>
              </div>

              {/* Chemical Formulas & Periodic Table */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-indigo-350 block border-b border-white/5 pb-1 text-sm">🧪 2. Periodic Table & Formulas (आवर्त सारणी व रसायन सूत्र):</span>
                <div className="space-y-2 text-[11px] text-slate-350">
                  <p>• <strong>Modern Periodic Table:</strong> मोजले (Henry Moseley) ने 1913 में परमाणु क्रमांक (Atomic number) के आधार पर बनाया। कुल 18 वर्ग (Groups) और 7 आवर्त (Periods) हैं।</p>
                  <p>• **Group 17 (Halogens):** F, Cl, Br, I (Cl का इलेक्ट्रॉन बंधुता सर्वाधिक)।</p>
                  <p>• **Group 18 (Noble Gases):** He, Ne, Ar, Kr, Xe, Rn (उदासीन गैसें)।</p>
                  
                  <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1.5">
                    <strong>🧼 महत्वपूर्ण रासायनिक सूत्र (RRB Favourite!):</strong><br />
                    • **खाने का सोडा (Baking Soda):** NaHCO₃ (सोडियम बाईकार्बोनेट)<br />
                    • **धोने का सोडा (Washing Soda):** Na₂CO₃.10H₂O (सोडियम कार्बोनेट)<br />
                    • **ब्लीचिंग पाउडर:** Ca(OCl)Cl / CaOCl₂ (कैल्शियम ऑक्सीक्लोराइड)<br />
                    • **प्लास्टर ऑफ पेरिस (POP):** CaSO₄.1/2 H₂O (कैल्शियम सल्फेट हेमीहाइड्रेट)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LIFE SCIENCE (BIOLOGY) */}
        {activeTab === 'biology' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                <Activity className="w-4 h-4" /> 🧬 जीव विज्ञान एवं मानव शरीर (Life Science & Biology)
              </span>
              <p>रेलवे परीक्षाओं में जीव विज्ञान से सर्वाधिक प्रश्न पूछे जाते हैं, विशेषकर कोशिका (Cytology) और मानव शरीर क्रिया विज्ञान (Human Anatomy) से।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-300 block mb-1 text-sm">🔬 1. Cytology & Plant Kingdom (कोशिका व पादप):</span>
                <p>• <strong>Cell (कोशिका):</strong> खोज रॉबर्ट हुक (1665) ने की। जीवित कोशिका की खोज ल्यूवेनहॉक ने की।</p>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-1.5 text-[11px]">
                  <strong>🦠 कोशिका के मुख्य अंग (Cell Organelles):</strong>
                  <p>• <strong>Mitochondria:</strong> इसे "कोशिका का पावर हाउस" (Powerhouse of Cell) कहते हैं क्योंकि यहाँ ATP के रूप में ऊर्जा बनती है।</p>
                  <p>• <strong>Lysosome:</strong> इसे "आत्महत्या की थैली" (Suicidal Bag) कहा जाता है।</p>
                  <p>• <strong>Ribosome:</strong> इसे "प्रोटीन की फैक्ट्री" (Protein Factory) कहते हैं।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-300 block mb-1 text-sm">🩸 2. Human Body & Blood System:</span>
                <div className="space-y-2 text-[11px]">
                  <p>• <strong>Blood Groups:</strong> खोज कार्ल लैंडस्टीनर (Karl Landsteiner) ने की।</p>
                  <p className="pl-3 text-slate-400">• **AB+:** सार्वभौमिक प्राप्तकर्ता (Universal Acceptor).</p>
                  <p className="pl-3 text-slate-400">• **O-:** सार्वभौमिक दाता (Universal Donor).</p>
                  <p>• <strong>Human Eye (मानव नेत्र):</strong> प्रतिबिंब रेटिना पर वास्तविक और उल्टा बनता है।</p>
                  <p className="pl-3 text-slate-400">• **Myopia (निकट दृष्टिदोष):** अवतल लेंस (Concave lens) द्वारा ठीक किया जाता है।</p>
                  <p className="pl-3 text-slate-400">• **Hyperopia (दूर दृष्टिदोष):** उत्तल लेंस (Convex lens) द्वारा ठीक किया जाता है।</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
