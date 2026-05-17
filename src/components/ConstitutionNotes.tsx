"use client";
import React, { useState } from 'react';
import { 
  Building, ShieldAlert, Award, Star, Globe, Clock, Landmark 
} from 'lucide-react';

export default function ConstitutionNotes() {
  const [activeTab, setActiveTab] = useState<'making' | 'rights' | 'union' | 'local'>('making');

  const tabs = [
    { id: 'making', label: '🏗️ निर्माण व नागरिकता', color: 'text-indigo-400 border-indigo-400 bg-indigo-500/5' },
    { id: 'rights', label: '🛡️ मौलिक अधिकार व DPSP', color: 'text-emerald-400 border-emerald-400 bg-emerald-500/5' },
    { id: 'union', label: '🏛️ संसद व कार्यपालिका', color: 'text-rose-400 border-rose-400 bg-rose-500/5' },
    { id: 'local', label: '💊 पंचायती राज व आपातकाल', color: 'text-amber-400 border-amber-400 bg-amber-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0f172a]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20">
          ⚖️
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">भारतीय संविधान (Indian Constitution) - विस्तृत नोट्स</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police परीक्षाओं के दृष्टिकोण से गहन संकल्पनाएँ और महत्वपूर्ण तथ्य</p>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Tab Content */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* MAKING & CITIZENSHIP */}
        {activeTab === 'making' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Assembly & Committees */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base md:text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-500 rounded" />
                संविधान सभा व प्रमुख समितियाँ (Making & Committees)
              </h4>
              <p className="text-slate-300 mb-3">संविधान सभा (Constituent Assembly) का गठन <strong>कैबिनेट मिशन योजना (1946)</strong> के तहत किया गया था।</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="font-bold text-slate-100 block mb-2">📋 महत्वपूर्ण समितियाँ और उनके अध्यक्ष:</span>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-slate-900/60 rounded border border-white/5">
                      <strong>⚖️ प्रारूप समिति (Drafting Committee):</strong> डॉ. बी.आर. अम्बेडकर (इसमें कुल <strong>7 सदस्य</strong> थे)।
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded border border-white/5">
                      <strong>⛓️ संघ शक्ति / संघ संविधान समिति:</strong> जवाहरलाल नेहरू।
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded border border-white/5">
                      <strong>🚩 प्रांतीय संविधान समिति:</strong> सरदार वल्लभभाई पटेल।
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded border border-white/5">
                      <strong>🧭 संचालन / नियम समिति:</strong> डॉ. राजेंद्र प्रसाद।
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-bold text-slate-100 block">📅 महत्वपूर्ण तिथियाँ व ऐतिहासिक तथ्य:</span>
                  <ul className="space-y-2 text-xs">
                    <li>🔸 <strong>9 दिसंबर 1946:</strong> प्रथम बैठक। अस्थाई अध्यक्ष <strong>डॉ. सच्चिदानंद सिन्हा</strong> चुने गए।</li>
                    <li>🔸 <strong>11 दिसंबर 1946:</strong> <strong>डॉ. राजेंद्र प्रसाद</strong> स्थाई अध्यक्ष चुने गए।</li>
                    <li>🔸 <strong>13 दिसंबर 1946:</strong> जवाहरलाल नेहरू द्वारा <strong>'उद्देश्य प्रस्ताव' (Objective Resolution)</strong> पेश किया गया, जो आगे चलकर प्रस्तावना बना।</li>
                    <li>🔸 <strong>समय अवधि:</strong> संविधान को बनने में कुल <strong>2 वर्ष, 11 महीने और 18 दिन</strong> का समय लगा।</li>
                    <li>🔸 <strong>26 नवंबर 1949:</strong> संविधान सभा द्वारा इसे पारित/अंगीकृत किया गया (इसी दिन <strong>'संविधान दिवस'</strong> मनाया जाता है)।</li>
                    <li>🔸 <strong>26 जनवरी 1950:</strong> संविधान पूर्ण रूप से लागू (गणतंत्र दिवस)।</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preamble & Citizenship */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-indigo-400 mb-3">📜 संविधान की प्रस्तावना (Preamble)</h4>
                <p className="text-xs text-slate-400 mb-2">इसे "संविधान की कुंजी" या "संविधान की आत्मा" कहा जाता है।</p>
                <div className="p-3 bg-indigo-500/5 rounded border border-indigo-500/10 text-xs mb-3">
                  <strong>🚨 42वाँ संविधान संशोधन (1976):</strong> इसके द्वारा प्रस्तावना में तीन नए शब्द जोड़े गए: <strong>समाजवादी (Socialist), पंथनिरपेक्ष (Secular), और अखंडता (Integrity)</strong>।
                </div>
                <p className="text-xs text-slate-350">प्रस्तावना भारत को एक <strong>"संपूर्ण प्रभुत्व-संपन्न, समाजवादी, पंथनिरपेक्ष, लोकतंत्रात्मक गणराज्य"</strong> घोषित करती है। इसमें 3 प्रकार के न्याय (सामाजिक, आर्थिक और राजनीतिक न्याय) की बात की गई है।</p>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-indigo-400 mb-3">👤 नागरिकता (Citizenship) — भाग 2</h4>
                <p className="text-xs text-slate-400 mb-3"><strong>अनुच्छेद 5 से 11</strong> के अंतर्गत भारत में <strong>एकल नागरिकता (Single Citizenship)</strong> का प्रावधान है, जो ब्रिटेन के संविधान से लिया गया है।</p>
                <div className="space-y-2">
                  <div className="p-2.5 bg-slate-900/50 rounded border border-white/5 text-xs">
                    <strong>👨‍👩‍👦 नागरिकता अधिनियम, 1955:</strong> भारत की नागरिकता 5 तरीकों से प्राप्त की जा सकती है:
                    <div className="grid grid-cols-2 gap-1 mt-1.5 font-semibold text-slate-300">
                      <span>1. जन्म से</span>
                      <span>2. वंशानुगत</span>
                      <span>3. पंजीकरण</span>
                      <span>4. देसीकरण</span>
                      <span className="col-span-2">5. भूमि के अर्जन द्वारा</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400"><strong>नागरिकता का अंत:</strong> 3 तरीकों से हो सकता है (स्वेच्छा से त्यागने पर, दूसरे देश की नागरिकता लेने पर, या सरकार द्वारा वंचित करने पर)।</p>
                </div>
              </div>
            </div>

            {/* Original vs Present */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 text-center flex flex-col md:flex-row justify-around gap-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">मूल संविधान (1950)</span>
                <p className="text-lg font-bold text-slate-200 mt-1">395 अनुच्छेद | 22 भाग | 8 अनुसूचियाँ</p>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-white/10" />
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">वर्तमान संविधान</span>
                <p className="text-lg font-bold text-indigo-400 mt-1">470+ अनुच्छेद | 25 भाग | 12 अनुसूचियाँ</p>
              </div>
            </div>
          </div>
        )}

        {/* RIGHTS & DUTIES */}
        {activeTab === 'rights' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Fundamental Rights */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base md:text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded" />
                मौलिक अधिकार (Fundamental Rights) — भाग 3 (अनुच्छेद 12 से 35)
              </h4>
              <p className="text-slate-300 mb-3">ये अमेरिका के संविधान से लिए गए हैं। इसे <strong>"भारत का मैग्नाकार्टा"</strong> कहा जाता है।</p>
              <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-xs mb-4">
                ⚠️ <strong>44वें संविधान संशोधन (1978):</strong> इसके द्वारा <strong>"संपत्ति के अधिकार"</strong> (अनुच्छेद 31) को मौलिक अधिकारों से हटाकर अनुच्छेद 300A के तहत एक कानूनी/संवैधानिक अधिकार बना दिया गया।
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-emerald-300">
                      <th className="p-2.5 font-semibold">क्रमांक</th>
                      <th className="p-2.5 font-semibold">मौलिक अधिकार</th>
                      <th className="p-2.5 font-semibold">अनुच्छेद</th>
                      <th className="p-2.5 font-semibold">परीक्षा उपयोगी तथ्य</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-2.5">1</td>
                      <td className="p-2.5 font-semibold text-slate-200">समानता का अधिकार</td>
                      <td className="p-2.5">14 से 18</td>
                      <td className="p-2.5 text-slate-400"><strong>अनुच्छेद 17:</strong> अस्पृश्यता (छुआछूत) का अंत। <br /><strong>अनुच्छेद 18:</strong> उपाधियों का अंत।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">2</td>
                      <td className="p-2.5 font-semibold text-slate-200">स्वतंत्रता का अधिकार</td>
                      <td className="p-2.5">19 से 22</td>
                      <td className="p-2.5 text-slate-400"><strong>अनुच्छेद 19:</strong> 6 प्रकार की स्वतंत्रता (बोलने, सभा करने, घूमने आदि)। <br /><strong>अनुच्छेद 21:</strong> जीवन और व्यक्तिगत स्वतंत्रता का अधिकार (प्राण एवं दैहिक स्वतंत्रता)।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">3</td>
                      <td className="p-2.5 font-semibold text-slate-200">शोषण के विरुद्ध अधिकार</td>
                      <td className="p-2.5">23 और 24</td>
                      <td className="p-2.5 text-slate-400"><strong>अनुच्छेद 23:</strong> मानव तस्करी और जबरन श्रम (बेगारी) पर रोक। <br /><strong>अनुच्छेद 24:</strong> 14 वर्ष से कम उम्र के बच्चों को कारखानों में काम कराने पर रोक।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">4</td>
                      <td className="p-2.5 font-semibold text-slate-200">धार्मिक स्वतंत्रता</td>
                      <td className="p-2.5">25 से 28</td>
                      <td className="p-2.5 text-slate-400">किसी भी धर्म को मानने, आचरण करने और प्रचार करने की स्वतंत्रता।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">5</td>
                      <td className="p-2.5 font-semibold text-slate-200">संस्कृति एवं शिक्षा</td>
                      <td className="p-2.5">29 और 30</td>
                      <td className="p-2.5 text-slate-400">अल्पसंख्यकों के हितों का संरक्षण और अपनी शिक्षण संस्थाएं खोलने का अधिकार।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">6</td>
                      <td className="p-2.5 font-semibold text-slate-200">संवैधानिक उपचार</td>
                      <td className="p-2.5">32</td>
                      <td className="p-2.5 text-slate-400">इसके तहत सुप्रीम कोर्ट <strong>5 प्रकार की रिट (Writs)</strong> जारी करता है (बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा)।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-xs text-emerald-300">
                📌 <strong>विशेष (UP Police Special):</strong> डॉ. बी.आर. अम्बेडकर ने अनुच्छेद 32 को <strong>"संविधान का हृदय और आत्मा"</strong> कहा है। आपातकाल के दौरान <strong>अनुच्छेद 20 और 21</strong> को निलंबित नहीं किया जा सकता।
              </div>
            </div>

            {/* DPSP & Fundamental Duties */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-emerald-400 mb-3">🍀 राज्य के नीति निर्देशक तत्व (DPSP) — भाग 4</h4>
                <p className="text-xs text-slate-400 mb-3"><strong>अनुच्छेद 36 से 51</strong> के तहत यह <strong>आयरलैंड</strong> के संविधान से लिया गया है। ये गैर-न्यायोचित (अदालत द्वारा लागू नहीं कराए जा सकते) हैं। इनका उद्देश्य <strong>कल्याणकारी राज्य (Welfare State)</strong> की स्थापना है।</p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p>🔹 <strong>अनुच्छेद 40:</strong> ग्राम पंचायतों का संगठन (अति-महत्वपूर्ण)।</p>
                  <p>🔹 <strong>अनुच्छेद 44:</strong> समान नागरिक संहिता (Uniform Civil Code - UCC)।</p>
                  <p>🔹 <strong>अनुच्छेद 45:</strong> बच्चों के लिए अनिवार्य एवं मुफ्त शिक्षा।</p>
                  <p>🔹 <strong>अनुच्छेद 48A:</strong> पर्यावरण, वन तथा वन्यजीवों का संरक्षण।</p>
                  <p>🔹 <strong>अनुच्छेद 50:</strong> कार्यपालिका से न्यायपालिका का पृथक्करण।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-emerald-400 mb-3">🛡️ मौलिक कर्तव्य (Fundamental Duties) — भाग 4A</h4>
                <p className="text-xs text-slate-400 mb-3"><strong>अनुच्छेद 51A</strong> के अंतर्गत इन्हें <strong>रूस (USSR)</strong> से लिया गया है और इन्हें <strong>सरदार स्वर्ण सिंह समिति</strong> की सिफारिश पर 42वें संशोधन (1976) द्वारा जोड़ा गया था।</p>
                <div className="space-y-2 text-xs">
                  <p className="text-slate-350">🔸 मूल संविधान में नहीं थे। 1976 में <strong>10 मौलिक कर्तव्य</strong> जोड़े गए।</p>
                  <p className="text-slate-350">🔸 वर्तमान में कुल <strong>11 मौलिक कर्तव्य</strong> हैं।</p>
                  <div className="p-2.5 bg-slate-900/50 rounded border border-white/5 text-xs">
                    💡 <strong>11वाँ मौलिक कर्तव्य:</strong> इसे 86वें संविधान संशोधन (2002) द्वारा जोड़ा गया। यह <strong>"6 से 14 वर्ष के बच्चों के माता-पिता द्वारा उन्हें शिक्षा का अवसर प्रदान करना"</strong> सुनिश्चित करता है।
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UNION EXECUTIVE & PARLIAMENT */}
        {activeTab === 'union' && (
          <div className="space-y-8 animate-fadeIn">
            {/* President & VP */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base md:text-lg font-semibold text-rose-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-rose-500 rounded" />
                केंद्रीय कार्यपालिका (The Union Executive)
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-2.5">
                  <span className="font-bold text-rose-300 block text-xs">👤 राष्ट्रपति (President) — अनुच्छेद 52 से 62</span>
                  <p className="text-xs text-slate-400">भारत का प्रथम नागरिक और संवैधानिक प्रमुख होता है।</p>
                  <ul className="space-y-1.5 text-xs pl-2">
                    <li>🔹 <strong>योग्यता:</strong> भारत का नागरिक हो, न्यूनतम आयु <strong>35 वर्ष</strong> हो, लोकसभा सदस्य बनने योग्य हो।</li>
                    <li>🔹 <strong>निर्वाचन (अनुच्छेद 54):</strong> संसद के दोनों सदनों (लोकसभा + राज्यसभा) के निर्वाचित सदस्य तथा राज्यों की विधानसभाओं के निर्वाचित सदस्य भाग लेते हैं (मनोनीत सदस्य नहीं)।</li>
                    <li>🔹 <strong>महाभियोग (अनुच्छेद 61):</strong> केवल संविधान के उल्लंघन पर हटाया जा सकता है।</li>
                    <li>🔹 <strong>शक्तियाँ:</strong> अनुच्छेद 72 के तहत <strong>क्षमादान की शक्ति</strong> (मृत्युदंड को भी क्षमा कर सकता है) व अनुच्छेद 123 के तहत <strong>अध्यादेश (Ordinance)</strong> जारी करने की शक्ति।</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-rose-300 text-xs block mb-1">👥 उपराष्ट्रपति (Vice-President)</strong>
                    <p className="text-xs text-slate-400">न्यूनतम आयु <strong>35 वर्ष</strong>। उपराष्ट्रपति राज्यसभा का <strong>पदेन सभापति (Ex-officio Chairman)</strong> होता है, परंतु वह राज्यसभा का सदस्य नहीं होता।</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-rose-300 text-xs block mb-1">🏎️ प्रधानमंत्री व मंत्रिपरिषद</strong>
                    <p className="text-xs text-slate-400">प्रधानमंत्री वास्तविक कार्यपालिका प्रमुख (Real Executive Head) होता है। राष्ट्रपति लोकसभा में बहुमत दल के नेता को प्रधानमंत्री नियुक्त करता है। मंत्रिपरिषद सामूहिक रूप से <strong>लोकसभा के प्रति उत्तरदायी</strong> होती है।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parliament comparative */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base font-semibold text-rose-400 mb-3">🏛️ भारतीय संसद (Indian Parliament) — अनुच्छेद 79</h4>
              <p className="text-xs text-slate-400 mb-3">संसद तीन अंगों से मिलकर बनती है: <strong>राष्ट्रपति + लोकसभा (Art 81) + राज्यसभा (Art 80)</strong></p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-rose-350">
                      <th className="p-2 font-semibold">विशेषता</th>
                      <th className="p-2 font-semibold">लोकसभा (Lower House / निम्न सदन)</th>
                      <th className="p-2 font-semibold">राज्यसभा (Upper House / उच्च सदन)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-350">
                    <tr>
                      <td className="p-2 font-medium text-slate-200">अन्य नाम</td>
                      <td className="p-2">जनता का सदन (House of the People)</td>
                      <td className="p-2">राज्यों की परिषद (Council of States)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">प्रकृति</td>
                      <td className="p-2 text-rose-400">अस्थायी सदन (5 साल में या पहले भंग हो सकता है)</td>
                      <td className="p-2 text-emerald-400">स्थायी सदन (यह कभी भंग नहीं होता)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">अधिकतम सदस्य</td>
                      <td className="p-2"><strong>550</strong> (104वें संशोधन द्वारा 2 एंग्लो-इंडियन सीट समाप्त)</td>
                      <td className="p-2"><strong>250</strong> (जिसमें 12 सदस्य राष्ट्रपति मनोनीत करता है)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">न्यूनतम आयु</td>
                      <td className="p-2 font-semibold">25 वर्ष</td>
                      <td className="p-2 font-semibold">30 वर्ष</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">सदस्यों का कार्यकाल</td>
                      <td className="p-2">5 वर्ष</td>
                      <td className="p-2">6 वर्ष (प्रत्येक 2 वर्ष में 1/3 सदस्य सेवानिवृत्त होते हैं)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">विशेष शक्तियाँ</td>
                      <td className="p-2 text-slate-400"><strong>धन विधेयक (Art 110)</strong> केवल लोकसभा में ही पहले पेश होता है।</td>
                      <td className="p-2 text-slate-400"><strong>अखिल भारतीय सेवाओं (Art 312)</strong> के सृजन का विशेष अधिकार।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Judiciary */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base font-semibold text-rose-400 mb-3">⚖️ न्यायपालिका (Judiciary)</h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs">
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <strong className="text-rose-350 text-xs block mb-1">🏢 सर्वोच्च न्यायालय (Supreme Court) — Art 124 to 147</strong>
                  <p className="text-slate-400 mt-1">यह भारत का शीर्ष न्यायालय है जो नई दिल्ली में है। जज <strong>65 वर्ष</strong> की आयु तक पद पर रहते हैं। अनुच्छेद 129 के अनुसार सुप्रीम कोर्ट एक <strong>अभिलेख न्यायालय (Court of Record)</strong> है। इसे न्यायिक पुनरावलोकन (Judicial Review) की शक्ति प्राप्त है।</p>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <strong className="text-rose-350 text-xs block mb-1">🏛️ उच्च न्यायालय (High Court) — Art 214 to 237</strong>
                  <p className="text-slate-400 mt-1">वर्तमान में कुल 25 उच्च न्यायालय हैं। उत्तर प्रदेश का उच्च न्यायालय <strong>इलाहाबाद (प्रयागराज)</strong> में है और इसकी एक खंडपीठ <strong>लखनऊ</strong> में है। जजों की सेवानिवृत्ति आयु <strong>62 वर्ष</strong> है। उच्च न्यायालय <strong>अनुच्छेद 226</strong> के तहत रिट जारी कर सकता है।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LOCAL GOVERNMENT & EMERGENCY */}
        {activeTab === 'local' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Panchayati Raj */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base md:text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                स्थानीय स्वशासन: पंचायती राज व्यवस्था
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-2">
                  <p className="text-slate-350">🔹 <strong>बलवंत राय मेहता समिति (1957):</strong> इन्होंने <strong>त्रि-स्तरीय (3-Tier)</strong> पंचायती राज व्यवस्था की सिफारिश की थी।</p>
                  <p className="text-slate-350">🔹 <strong>शुरुआत:</strong> <strong>2 अक्टूबर 1959</strong> को राजस्थान के <strong>नागौर</strong> जिले से तत्कालीन PM जवाहरलाल नेहरू द्वारा की गई।</p>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-900/50 rounded border border-white/5">
                    <strong>🏡 73वाँ संविधान संशोधन (1992):</strong> इसके द्वारा पंचायती राज को संवैधानिक दर्जा मिला और <strong>11वीं अनुसूची</strong> जोड़ी गई (इसमें कुल <strong>29 विषय</strong> हैं)।
                  </div>
                  <div className="p-2.5 bg-slate-900/50 rounded border border-white/5">
                    <strong>🏙️ 74वाँ संविधान संशोधन (1992):</strong> इसके द्वारा शहरी स्थानीय निकायों (नगरपालिकाओं) को संवैधानिक दर्जा मिला और <strong>12वीं अनुसूची</strong> जोड़ी गई (इसमें कुल <strong>18 विषय</strong> हैं)।
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency & Schedules */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-amber-400 mb-3">🚨 आपातकालीन प्रावधान (Emergency) — भाग 18</h4>
                <p className="text-xs text-slate-400 mb-3">ये प्रावधान <strong>जर्मनी</strong> के वाइमर संविधान से लिए गए हैं। भारत में 3 प्रकार के आपातकाल होते हैं:</p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-2 bg-slate-900/50 rounded border border-white/5">
                    <strong>1. राष्ट्रीय आपातकाल (अनुच्छेद 352):</strong> युद्ध, बाहरी आक्रमण या सशस्त्र विद्रोह के कारण। अब तक 3 बार लगा है (1962, 1971, 1975)।
                  </div>
                  <div className="p-2 bg-slate-900/50 rounded border border-white/5">
                    <strong>2. राष्ट्रपति शासन (अनुच्छेद 356):</strong> राज्यों में संवैधानिक तंत्र विफल होने पर।
                  </div>
                  <div className="p-2 bg-slate-900/50 rounded border border-white/5">
                    <strong>3. वित्तीय आपातकाल (अनुच्छेद 360):</strong> देश की आर्थिक स्थिरता को खतरा होने पर। <br /><strong className="text-amber-300">⚠️ नोट: भारत में आज तक एक बार भी वित्तीय आपातकाल नहीं लगा है।</strong>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-amber-400 mb-3">📋 महत्वपूर्ण अनुसूचियाँ (Schedules) व संशोधन</h4>
                <p className="text-xs text-slate-400 mb-2">वर्तमान में कुल 12 अनुसूचियाँ हैं, जिनमें मुख्य हैं:</p>
                <div className="space-y-1.5 text-xs pl-1">
                  <p>🔸 <strong>पहली अनुसूची:</strong> 28 राज्यों और 8 केंद्र शासित प्रदेशों के नाम और सीमाएं।</p>
                  <p>🔸 <strong>तीसरी अनुसूची:</strong> मंत्रियों, राष्ट्रपति, जजों आदि की शपथ।</p>
                  <p>🔸 <strong>चौथी अनुसूची:</strong> राज्यसभा में सीटों का आवंटन।</p>
                  <p>🔸 <strong>आठवीं अनुसूची:</strong> भारत की <strong>22 आधिकारिक भाषाएँ</strong> (मूल में 14 भाषाएँ थीं)।</p>
                  <p>🔸 <strong>नौवीं अनुसूची:</strong> भूमि सुधार कानून (प्रथम संविधान संशोधन 1951 द्वारा)।</p>
                  <p>🔸 <strong>दसवीं अनुसूची:</strong> दल-बदल विरोधी कानून (52वें संशोधन 1985 द्वारा)।</p>
                  <div className="p-2 bg-indigo-500/5 border border-indigo-500/10 rounded mt-2 text-[11px]">
                    <strong>⚙️ संशोधन प्रक्रिया (भाग 20 - अनुच्छेद 368):</strong> यह <strong>दक्षिण अफ्रीका</strong> के संविधान से ली गई है। इसके लिए संसद में विशेष बहुमत अनिवार्य होता है (संयुक्त बैठक का प्रावधान नहीं)।
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Revision Capsule */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-base font-semibold text-amber-400 mb-3">💡 UP Police SI & Constable क्विक रिवीज़न कैप्सूल</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-100 block mb-2">1. संविधान के विदेशी स्रोत:</span>
                  <ul className="space-y-1 text-slate-400 text-xs">
                    <li>• मौलिक अधिकार, न्यायिक समीक्षा → <strong>USA</strong></li>
                    <li>• संसदीय प्रणाली, एकल नागरिकता → <strong>ब्रिटेन</strong></li>
                    <li>• नीति निर्देशक तत्व (DPSP) → <strong>आयरलैंड</strong></li>
                    <li>• मौलिक कर्तव्य, पंचवर्षीय योजना → <strong>रूस (USSR)</strong></li>
                    <li>• आपातकाल → <strong>जर्मनी</strong> | संशोधन → <strong>दक्षिण अफ्रीका</strong></li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-100 block mb-2">2. न्यूनतम आयु सीमा व मतदान:</span>
                  <ul className="space-y-1 text-slate-400 text-xs">
                    <li>• लोकसभा सदस्य / मुख्यमंत्री / प्रधानमंत्री बनने हेतु: <strong>25 वर्ष</strong></li>
                    <li>• राज्यसभा सदस्य / विधान परिषद सदस्य बनने हेतु: <strong>30 वर्ष</strong></li>
                    <li>• राष्ट्रपति / उपराष्ट्रपति / राज्यपाल बनने हेतु: <strong>35 वर्ष</strong></li>
                    <li>• मतदान (Vote) करने की आयु: <strong>18 वर्ष</strong> (61वें संशोधन 1989 द्वारा आयु 21 से घटाकर 18 की गई)।</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
