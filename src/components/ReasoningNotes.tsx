"use client";
import React, { useState } from 'react';

export default function ReasoningNotes() {
  const [activeTab, setActiveTab] = useState<'aptitude' | 'iq' | 'reasoning' | 'decision'>('aptitude');

  const tabs = [
    { id: 'aptitude', label: '🚨 मानसिक अभिरुचि (Aptitude)', color: 'text-rose-455 border-rose-500/30 bg-rose-500/5' },
    { id: 'iq', label: '🧩 बुद्धिलब्धि (IQ Tricks)', color: 'text-indigo-455 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'reasoning', label: '🔮 तार्किक क्षमता (Reasoning)', color: 'text-sky-455 border-sky-500/30 bg-sky-500/5' },
    { id: 'decision', label: '🧠 निर्णय लेना (Decision Making)', color: 'text-emerald-455 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#090715]/95 border border-rose-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-455 font-bold border border-rose-500/20">
          🚨
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">मानसिक अभिरुचि, बुद्धिलब्धि एवं तार्किक क्षमता</h3>
          <p className="text-xs md:text-sm text-slate-400">पुलिस कार्यप्रणाली, कोडिंग-डिकोडिंग वर्णमाला ट्रिक्स, दिशा परीक्षण, रक्त सम्बन्ध व निर्णय क्षमता</p>
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

        {/* TAB 1: MENTAL APTITUDE */}
        {activeTab === 'aptitude' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Police System & Law and Order */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-rose-350 block mb-1">👮 पुलिस प्रणाली व जनहित (Police System & Law):</span>
                <p>• <strong>पुलिस बल प्रमुख:</strong> राज्य पुलिस का सर्वोच्च प्रमुख <strong>पुलिस महानिदेशक (DGP)</strong> होता है। जिला स्तर पर पुलिस का सर्वोच्च अधिकारी <strong>पुलिस अधीक्षक (SP)</strong> होता है।</p>
                <p>• <strong>थाना प्रभारी:</strong> पुलिस स्टेशन (थाने) का प्रभारी अधिकारी **SHO (Station House Officer)** या **SO (Station Officer)** होता है।</p>
                <p>• ⚠️ <strong>विधि का शासन (Rule of Law):</strong> कानून के समक्ष सब बराबर हैं (संविधान का **अनुच्छेद 14**)। पुलिस को किसी के साथ जाति, धर्म या अमीर-गरीब के आधार पर भेदभाव करने का अधिकार नहीं है।</p>
              </div>

              {/* Crime Control & Adaptation */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-rose-350 block mb-1">🛡️ अपराध नियंत्रण व अनुकूलन क्षमता (Crime Control & Sensitivity):</span>
                <p>• <strong>अपराध नियंत्रण:</strong> पुलिस का प्राथमिक कार्य **अपराध रोकना (Prevention)** और **अपराध की जांच (Investigation)** करना है।</p>
                <p>• **संवेदनशीलता (Sensitivity):** पुलिसकर्मियों को महिलाओं, बच्चों, अल्पसंख्यकों और समाज के कमजोर वर्गों के प्रति अत्यंत संवेदनशील और विनम्र होना चाहिए।</p>
                <p>• **अनुकूलन क्षमता (Adaptability):** विपरीत परिस्थितियों (जैसे: दंगे, प्राकृतिक आपदा) में स्वयं को ढालकर शांत रहकर त्वरित व निष्पक्ष निर्णय लेना।</p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: IQ TRICKS */}
        {activeTab === 'iq' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Alphabet & Coding Decoding */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-indigo-350 block mb-1">🔤 वर्णमाला कोडिंग-डिकोडिंग (Alphabet position tricks):</span>
                <p>• ⚡ <strong>EJOTY शॉर्टकट:</strong> अक्षरों के क्रमांक याद करने की ट्रिक:<br />
                  <span className="font-mono text-indigo-300 font-bold bg-slate-950 px-2.5 py-1 rounded border border-white/5">E = 5 | J = 10 | O = 15 | T = 20 | Y = 25</span>
                </p>
                <p>• ⚠️ <strong>विपरीत अक्षर ट्रिक (Opposite Letters - योगफल हमेशा 27):</strong>
                  <ul className="pl-3 space-y-1 text-slate-400 text-[10.5px]">
                    <li>- **A-Z** (Azad) | **B-Y** (Boy) | **C-X** (Crux) | **D-W** (Dew)</li>
                    <li>- **E-V** (lEVel / LOVE) | **F-U** (FUn) | **G-T** (G.T. Road)</li>
                    <li>- **H-S** (High School) | **I-R** (Indian Railway) | **J-Q** (Jack-Queen)</li>
                    <li>- **K-P** (Kanpur) | **L-O** (LOve) | **M-N** (MaN)</li>
                  </ul>
                </p>
              </div>

              {/* Direction & Blood Relation */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-indigo-350 block mb-1">📍 दिशा परीक्षण व रक्त सम्बन्ध (Direction & Blood Relation):</span>
                <p>• **दिशा सूचक:** मुख्य 4 दिशाएँ (उत्तर, दक्षिण, पूर्व, पश्चिम) और 4 उप-दिशाएँ होती हैं।</p>
                <p>• **पाइथागोरस प्रमेय:** न्यूनतम दूरी निकालने हेतु सूत्र: कर्ण² = आधार² + लम्ब²</p>
                <p>• 👥 **रक्त सम्बन्ध फैमिली ट्री नियम:**
                  <ul className="pl-3.5 space-y-0.5 text-slate-400 text-[11px]">
                    <li>- पुरुष को **वर्ग** से तथा महिला को **वृत्त** से प्रदर्शित करें।</li>
                    <li>- वैवाहिक सम्बन्ध को **डबल लाइन (=)** और भाई-बहन को **सिंगल लाइन (-)** से दर्शाएं।</li>
                  </ul>
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: REASONING */}
        {activeTab === 'reasoning' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Series, Analogies & Similarities */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-sky-350 block mb-1">🔮 श्रृंखला व सादृश्यता (Series & Analogies):</span>
                <p>• <strong>श्रृंखला पूरा करना (Series):</strong> सबसे पहले अंतर (Difference) निकालें। यदि अंतर तेज़ी से बढ़ रहा हो, तो गुणा/वर्ग/घन नियम लागू करें।</p>
                <p>• <strong>असमान को छांटना (Classification):</strong> 4 में से 3 किसी एक तार्किक नियम से समान होंगे, 1 भिन्न होगा। (स्वर/व्यंजन संख्या, वर्ग/अभाज्य संख्या नियम जांचें)।</p>
              </div>

              {/* Ordering and Ranking */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-sky-350 block mb-1">📊 क्रम और रैंकिंग (Ordering & Ranking):</span>
                <p>• ⚠️ <strong>रैंकिंग का स्वर्ण सूत्र (Golden Formula):</strong><br />
                  यदि एक व्यक्ति का स्थान बाएं से L और दाएं से R हो, तो:<br />
                  <span className="font-mono text-sky-300 font-bold bg-slate-950 px-2.5 py-1 rounded border border-white/5 block text-center mt-1">कुल व्यक्ति (Total) = Left + Right - 1</span>
                </p>
                <p>• यदि पंक्ति में कुल व्यक्ति T दिए हों, और एक तरफ से स्थान X हो, तो दूसरी तरफ से स्थान = T - X + 1</p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: DECISION MAKING & SYLLOGISM */}
        {activeTab === 'decision' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-350 block text-sm">🧠 निर्णय क्षमता व न्याय संगत (Decision Making & Syllogism):</span>
              
              <div className="grid md:grid-cols-2 gap-4 text-[11px] text-slate-400">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-450">1. निर्णय क्षमता (Decision-Making):</strong>
                  <p>उम्मीदवार के चयन हेतु दी गई शर्तों (आयु, शिक्षा, अनुभव, परीक्षा अंक) की तुलना करें।</p>
                  <p className="text-[10px] text-slate-500">• यदि कोई शर्त पूरी न हो, पर उप-शर्त (Sub-condition) दी हो, तो मामला संबंधित अधिकारी (जैसे: अध्यक्ष, महाप्रबंधक) को संदर्भित करें।</p>
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-455">2. न्याय निगमन (Syllogism):</strong>
                  <p>कथनों को सत्य मानते हुए वेन आरेख बनाएं।</p>
                  <p className="text-[10px] text-slate-500">• 'सभी (All)' के मामले में एक वृत्त के अंदर दूसरा। 'कुछ (Some)' के मामले में आंशिक कटान। 'कोई नहीं (No)' में दोनों अलग-अलग होंगे।</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
