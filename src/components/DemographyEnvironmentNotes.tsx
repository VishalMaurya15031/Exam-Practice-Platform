"use client";
import React, { useState } from 'react';
import { 
  Users, Trees, Building, ShieldAlert, Award, Compass, Star, FileText 
} from 'lucide-react';

export default function DemographyEnvironmentNotes() {
  const [activeTab, setActiveTab] = useState<'demography' | 'environment' | 'urbanization'>('demography');
  const [demographySubTab, setDemographySubTab] = useState<'india' | 'up'>('india');

  const mainTabs = [
    { id: 'demography', label: '👥 जनसंख्या (Census 2011)', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'environment', label: '🌲 पर्यावरण व जैव विविधता', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'urbanization', label: '🏢 नगरीकरण व स्मार्ट सिटी', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0f111a]/95 border border-rose-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Dynamic Glow Effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold border border-rose-500/20">
          🌍
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">जनसंख्या, पर्यावरण एवं नगरीकरण (Demography, Environment & Urbanization)</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable & SI परीक्षा के दृष्टिकोण से सबसे महत्वपूर्ण स्टडी नोट्स</p>
        </div>
      </div>

      {/* Main Tabs Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {mainTabs.map((tab) => (
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

      {/* TAB CONTENT PANEL */}
      <div className="space-y-6 text-slate-300 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: DEMOGRAPHY & CENSUS 2011 */}
        {activeTab === 'demography' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Demography Sub-selector */}
            <div className="flex bg-slate-950/60 p-1 rounded-xl border border-white/5 self-start w-fit">
              <button
                onClick={() => setDemographySubTab('india')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${
                  demographySubTab === 'india'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🇮🇳 भारत की जनगणना 2011
              </button>
              <button
                onClick={() => setDemographySubTab('up')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${
                  demographySubTab === 'up'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ⭐ उत्तर प्रदेश की जनगणना 2011
              </button>
            </div>

            {/* India Census 2011 */}
            {demographySubTab === 'india' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                  <p className="text-slate-350">
                    भारत में पहली गैर-तथ्यात्मक जनगणना <strong>1872 में लॉर्ड मेयो</strong> के समय हुई, जबकि नियमित दशकीय जनगणना की शुरुआत <strong>1881 में लॉर्ड रिपन</strong> के कार्यकाल में हुई। 2011 की जनगणना देश की <strong>15वीं जनगणना</strong> तथा स्वतंत्र भारत की <strong>7वीं जनगणना</strong> थी।
                  </p>
                  <p className="text-xs text-rose-300 font-semibold bg-rose-500/5 px-2 py-1 rounded w-fit">🎯 नारा: "हमारी जनगणना, हमारा भविष्य" (Our Census, Our Future)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Table Comparison */}
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
                    <span className="font-bold text-slate-100 block mb-3">📋 भारत के प्रमुख जनगणना सूचकांक (Census Highlights):</span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/10 bg-slate-950/40 text-rose-300">
                            <th className="p-2 font-semibold">सूचकांक / पैमाना</th>
                            <th className="p-2 font-semibold">राष्ट्रीय मूल्य</th>
                            <th className="p-2 font-semibold">शीर्ष / न्यूनतम राज्य</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-slate-350">
                          <tr>
                            <td className="p-2 font-medium text-slate-200">कुल जनसंख्या</td>
                            <td className="p-2">~121.08 करोड़ (विश्व का 17.5%)</td>
                            <td className="p-2">शीर्ष: उत्तर प्रदेश (~19.98 करोड़)<br />न्यूनतम: सिक्किम (~6 लाख)</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium text-slate-200">साक्षरता दर (Literacy)</td>
                            <td className="p-2"><strong>73.0%</strong> (M: 80.9%, F: 64.6%)</td>
                            <td className="p-2">शीर्ष: केरल (94.0%)<br />न्यूनतम: बिहार (61.8%)</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium text-slate-200">लिंगानुपात (Sex Ratio)</td>
                            <td className="p-2"><strong>943</strong> (प्रति 1000 पुरुषों पर)</td>
                            <td className="p-2">शीर्ष: केरल (1084)<br />न्यूनतम: हरियाणा (879)</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium text-slate-200">जनसंख्या घनत्व</td>
                            <td className="p-2"><strong>382</strong> व्यक्ति प्रति वर्ग किमी</td>
                            <td className="p-2">शीर्ष: बिहार (1106)<br />न्यूनतम: अरुणाचल प्रदेश (17)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Quick Facts Cards */}
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                    <span className="font-bold text-slate-100 block">💡 भारत जनगणना महत्वपूर्ण वन-लाइनर्स:</span>
                    <ul className="space-y-2 text-xs text-slate-350">
                      <li>• <strong>नकारात्मक वृद्धि दर (Negative Growth Rate):</strong> 1911-1921 के दशक को भारत का <strong>'महान विभाजक वर्ष' (Great Divide Year)</strong> कहा जाता है, क्योंकि इस दौरान भारत की जनसंख्या वृद्धि दर नकारात्मक (-0.31%) रही थी।</li>
                      <li>• <strong>सर्वाधिक दशकीय वृद्धि दर वाला राज्य:</strong> मेघालय (27.9%)।</li>
                      <li>• <strong>न्यूनतम दशकीय वृद्धि दर वाला राज्य:</strong> नागालैंड (यहाँ वृद्धि दर ऋणात्मक <strong>-0.6%</strong> रही थी - परीक्षा हेतु अति-महत्वपूर्ण)।</li>
                      <li>• <strong>शिशु लिंगानुपात (0-6 वर्ष):</strong> राष्ट्रीय स्तर पर <strong>919</strong> है, जिसमें सर्वाधिक अरुणाचल प्रदेश (972) और न्यूनतम हरियाणा (834) है।</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* UP Census 2011 */}
            {demographySubTab === 'up' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2 text-center md:text-left flex flex-col md:flex-row justify-around gap-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">उत्तर प्रदेश की कुल जनसंख्या</span>
                    <p className="text-lg font-bold text-rose-450 mt-1">19,98,12,341 (~19.98 करोड़)</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">यह भारत की कुल आबादी का <strong>16.51%</strong> है। यदि UP एक देश होता, तो चीन, भारत, अमेरिका और इंडोनेशिया के बाद विश्व का <strong>5वाँ सबसे बड़ा देश</strong> होता!</p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-white/10" />
                  <div>
                    <span className="text-xs text-slate-450 uppercase font-bold tracking-wider">साक्षरता व घनत्व</span>
                    <p className="text-lg font-bold text-slate-200 mt-1">साक्षरता: 67.68% | जनघनत्व: 829</p>
                    <p className="text-[11px] text-slate-450 mt-0.5">साक्षरता में पुरुष: <strong>77.28%</strong>, महिला: <strong>57.18%</strong> हैं। जनघनत्व (829) राष्ट्रीय औसत (382) से बहुत अधिक है।</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                  <h4 className="text-sm md:text-base font-semibold text-rose-455 mb-3">📍 उत्तर प्रदेश के ज़िलों का प्रदर्शन (शीर्ष व न्यूनतम)</h4>
                  <div className="grid md:grid-cols-2 gap-6 text-xs">
                    
                    {/* Left Column UP */}
                    <div className="space-y-2">
                      <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                        <strong className="text-rose-350 block">👥 जनसंख्या (Population)</strong>
                        <p className="mt-1">• <strong>सर्वाधिक:</strong> प्रयागराज (इलाहाबाद) - [लगभग 59.5 लाख]</p>
                        <p>• <strong>न्यूनतम:</strong> महोबा - [लगभग 8.7 लाख]</p>
                      </div>

                      <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                        <strong className="text-rose-350 block">📖 साक्षरता दर (Literacy Rate)</strong>
                        <p className="mt-1">• <strong>सर्वाधिक साक्षर:</strong> गौतम बुद्ध नगर (नोएडा) - [80.12%]</p>
                        <p>• <strong>न्यूनतम साक्षर:</strong> श्रावस्ती - [46.74%] (महिला साक्षरता भी यहाँ न्यूनतम है)</p>
                      </div>
                    </div>

                    {/* Right Column UP */}
                    <div className="space-y-2">
                      <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                        <strong className="text-rose-350 block">🏘️ जनघनत्व (Population Density)</strong>
                        <p className="mt-1">• <strong>सर्वाधिक घनत्व:</strong> गाजियाबाद - [3971 व्यक्ति/वर्ग किमी]</p>
                        <p>• <strong>न्यूनतम घनत्व:</strong> ललितपुर - [242 व्यक्ति/वर्ग किमी]</p>
                      </div>

                      <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                        <strong className="text-rose-350 block">👩‍❤️‍👨 लिंगानुपात (Sex Ratio) - राज्य का कुल लिंगानुपात 912 है</strong>
                        <p className="mt-1">• <strong>सर्वाधिक लिंगानुपात:</strong> जौनपुर - [1024] (यहाँ प्रति 1000 पुरुषों पर 1024 महिलाएं हैं)</p>
                        <p>• <strong>न्यूनतम लिंगानुपात:</strong> गौतम बुद्ध नगर (नोएडा) - [851]</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ENVIRONMENT & BIODIVERSITY */}
        {activeTab === 'environment' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Terminology card */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 flex flex-wrap gap-4 justify-around text-xs text-center">
              <div>
                <strong className="text-emerald-400 block mb-0.5">🌱 पारिस्थितिकी (Ecology)</strong>
                <span>प्रथम प्रयोक्ता: <strong>अर्नेस्ट हेकल</strong> (1866)</span>
              </div>
              <div className="border-l border-white/10 hidden md:block" />
              <div>
                <strong className="text-emerald-400 block mb-0.5">🌲 पारिस्थितिकी तंत्र (Ecosystem)</strong>
                <span>प्रथम प्रयोक्ता: <strong>ए.जी. टांसले</strong> (1935)</span>
              </div>
              <div className="border-l border-white/10 hidden md:block" />
              <div>
                <strong className="text-emerald-400 block mb-0.5">🦋 जैव विविधता (Biodiversity)</strong>
                <span>प्रथम प्रयोक्ता: <strong>वाल्टर जी. रोजन</strong> (1985)</span>
              </div>
            </div>

            {/* Indian Environment Acts */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-sm md:text-base font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                📂 भारत के प्रमुख पर्यावरण अधिनियम (Acts in India)
              </h4>
              <p className="text-xs text-slate-400 mb-3">यहाँ से सीधे अधिनियम और उनके वर्ष सुमेलित करने वाले प्रश्न परीक्षाओं में बार-बार पूछे जाते हैं:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-center">
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-slate-400 block mb-1">वन्यजीव संरक्षण अधिनियम</span>
                  <strong className="text-lg text-emerald-400">1972</strong>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-slate-400 block mb-1">जल प्रदूषण निवारण अधिनियम</span>
                  <strong className="text-lg text-emerald-400">1974</strong>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-slate-400 block mb-1">वन संरक्षण अधिनियम</span>
                  <strong className="text-lg text-emerald-400">1980</strong>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-slate-400 block mb-1">वायु प्रदूषण निवारण अधिनियम</span>
                  <strong className="text-lg text-emerald-400">1981</strong>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 col-span-2">
                  <span className="text-slate-400 block mb-1">पर्यावरण संरक्षण अधिनियम (अति-महत्वपूर्ण)</span>
                  <strong className="text-lg text-emerald-350">1986</strong>
                  <p className="text-[10px] text-amber-400 mt-1">📌 इसे <strong>"छाता विधान" (Umbrella Legislation)</strong> के नाम से भी जाना जाता है।</p>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-slate-400 block mb-1">जैव विविधता अधिनियम</span>
                  <strong className="text-lg text-emerald-400">2002</strong>
                </div>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-slate-400 block mb-1">राष्ट्रीय हरित अधिकरण (NGT)</span>
                  <strong className="text-lg text-emerald-400">2010</strong>
                </div>
              </div>
            </div>

            {/* Global Protocols & Movements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">🌍 प्रमुख वैश्विक समझौते / प्रोटोकॉल</h4>
                <div className="space-y-2.5 text-xs">
                  <p>🔹 <strong>मॉन्ट्रियल प्रोटोकॉल (1987):</strong> कनाडा में हस्ताक्षरित। इसका उद्देश्य <strong>ओजोन परत</strong> के क्षरण को रोकने के लिए क्लोरोफ्लोरोकार्बन (CFC) के उपयोग पर प्रतिबंध लगाना था। (16 सितंबर को ओजोन दिवस मनाते हैं)।</p>
                  <p>🔹 <strong>क्योटो प्रोटोकॉल (1997):</strong> जापान में स्वीकृत, 2005 से लागू। यह <strong>ग्रीनहाउस गैसों (GHG)</strong> के उत्सर्जन में कमी करके ग्लोबल वार्मिंग (जलवायु परिवर्तन) को नियंत्रित करने से संबंधित है।</p>
                  <p>🔹 <strong>पेरिस जलवायु समझौता (2015):</strong> वैश्विक तापमान वृद्धि को पूर्व-औद्योगिक स्तर से <strong>2°C</strong> (अधिमानतः 1.5°C) से कम रखने का संकल्प।</p>
                  <p>🔹 <strong>रामसर समझौता (1971):</strong> ईरान के रामसर शहर में हस्ताक्षरित। यह <strong>आर्द्रभूमि (Wetlands)</strong> के संरक्षण व समझदारीपूर्ण उपयोग से संबंधित है। भारत में वर्तमान में 85 रामसर स्थल हैं।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">🌿 प्रमुख पर्यावरण आंदोलन</h4>
                <div className="space-y-2.5 text-xs text-slate-350">
                  <div className="p-2.5 bg-slate-950/45 rounded border border-white/5">
                    <strong>🌲 चिपको आंदोलन (1973):</strong> उत्तराखंड के चमोली में वृक्षों की कटाई को रोकने के लिए ग्रामीण महिलाओं द्वारा पेड़ों से चिपक कर विरोध किया गया।
                    <p className="text-[11px] text-slate-400 mt-1">नेतृत्वकर्ता: <strong>सुंदरलाल बहुगुणा, चंडी प्रसाद भट्ट और गौरा देवी</strong>।</p>
                  </div>
                  <div className="p-2.5 bg-slate-950/45 rounded border border-white/5">
                    <strong>🌱 अप्पिको आंदोलन (1983):</strong> चिपको आंदोलन से प्रेरित होकर <strong>कर्नाटक</strong> के कन्नड़ क्षेत्र में चलाया गया वन संरक्षण आंदोलन।
                    <p className="text-[11px] text-slate-400 mt-1">नेतृत्वकर्ता: <strong>पांडुरंग हेगड़े</strong>।</p>
                  </div>
                  <p>🔹 <strong>नर्मदा बचाओ आंदोलन:</strong> नर्मदा नदी पर बनाए जा रहे सरदार सरोवर बांध की ऊंचाई बढ़ाए जाने के विरोध में विस्थापितों के हक के लिए। नेतृत्वकर्ता: <strong>मेधा पाटकर व बाबा आम्टे</strong>।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: URBANIZATION */}
        {activeTab === 'urbanization' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-4">
              <h4 className="text-sm md:text-base font-semibold text-amber-400 mb-2">🏢 नगरीकरण (Urbanization) - अवधारणा व भारत की स्थिति</h4>
              <p className="text-xs md:text-sm text-slate-350">
                नगरीकरण का अर्थ ग्रामीण जनसंख्या का शहरी क्षेत्रों की ओर पलायन और नए शहरों का विकास होना है।
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-xs">
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <span className="font-bold text-amber-300">🇮🇳 भारत में नगरीकरण (Census 2011):</span>
                  <p>• भारत की कुल जनसंख्या का <strong>31.16% भाग शहरों</strong> (Urban) में रहता है, जबकि <strong>68.84% भाग गांवों</strong> (Rural) में रहता है।</p>
                  <p>• <strong>सर्वाधिक नगरीकृत राज्य (प्रतिशत में):</strong> गोवा (62.2%), मिजोरम (52.1%), तमिलनाडु (48.4%)।</p>
                  <p>• <strong>सर्वाधिक नगरीकृत जनसंख्या वाला राज्य:</strong> महाराष्ट्र (यहाँ संख्या बल सर्वाधिक शहरों में है)।</p>
                  <p>• <strong>न्यूनतम नगरीकृत राज्य:</strong> हिमाचल प्रदेश (यहाँ मात्र 10% आबादी शहरों में है)।</p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <span className="font-bold text-amber-300">⭐ उत्तर प्रदेश में नगरीकरण:</span>
                  <p>• उत्तर प्रदेश की कुल जनसंख्या का <strong>22.3% भाग शहरों</strong> में तथा <strong>77.7% भाग ग्रामीण क्षेत्रों</strong> में निवास करता है।</p>
                  <p>• <strong>सर्वाधिक नगरीकृत जिला (प्रतिशत में):</strong> गाजियाबाद।</p>
                  <p>• <strong>न्यूनतम नगरीकृत जिला (प्रतिशत में):</strong> श्रावस्ती।</p>
                  <p className="p-2 bg-amber-500/5 text-slate-300 rounded text-[11px]">
                    📌 <strong>10 लाखी नगर (Million Plus Cities):</strong> उत्तर प्रदेश में कुल <strong>7 नगर</strong> ऐसे हैं जिनकी आबादी 10 लाख से अधिक है - <strong>कानपुर, लखनऊ, गाजियाबाद, आगरा, मेरठ, वाराणसी, और प्रयागराज</strong>।
                  </p>
                </div>
              </div>
            </div>

            {/* Smart City Mission */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-amber-400 mb-2">🏙️ स्मार्ट सिटी मिशन (Smart City Mission)</h4>
              <p className="text-xs">शुरुआत: <strong>25 जून 2015</strong> को प्रधानमंत्री नरेंद्र मोदी द्वारा की गई।</p>
              <div className="grid md:grid-cols-2 gap-4 text-xs pl-1">
                <div className="p-3 bg-slate-950/45 rounded border border-white/5 space-y-1">
                  <span className="font-bold text-slate-200">🔍 उद्देश्य:</span>
                  <p className="text-slate-400">देश के 100 चुनिंदा शहरों को बुनियादी अवसंरचना, स्वच्छ व टिकाऊ पर्यावरण, तथा डिजिटल समाधानों के माध्यम से स्मार्ट व आधुनिक बनाना।</p>
                </div>
                <div className="p-3 bg-slate-950/45 rounded border border-white/5 space-y-1">
                  <span className="font-bold text-slate-200">⭐ उत्तर प्रदेश की भागीदारी:</span>
                  <p className="text-slate-400">इस मिशन के अंतर्गत उत्तर प्रदेश के कुल <strong>10 शहरों</strong> को स्मार्ट सिटी के रूप में विकसित करने के लिए चुना गया था (जिसमें लखनऊ, कानपुर, प्रयागराज, वाराणसी, आगरा, सहारनपुर, बरेली, झांसी, मुरादाबाद और अलीगढ़ शामिल हैं)।</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
