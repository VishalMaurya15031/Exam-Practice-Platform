"use client";
import React, { useState } from 'react';
import { BookOpen, Star } from 'lucide-react';

export default function HindiLanguageGrammarAlphabetNotes() {
  const [activeTab, setActiveTab] = useState<'languages' | 'alphabet'>('languages');

  const tabs = [
    { id: 'languages', label: '🗣️ हिन्दी और अन्य भारतीय भाषायें', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'alphabet', label: '🔤 हिन्दी वर्णमाला व व्याकरण ज्ञान', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#090b16]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-455 font-bold border border-indigo-500/20">
          🗣️
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">हिन्दी भाषा का इतिहास एवं वर्णमाला</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable & SI परीक्षा हेतु पूर्णतः प्रमाणिक एवं वर्गीकृत अध्ययन नोट्स</p>
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

        {/* TAB 1: HINDI AND OTHER INDIAN LANGUAGES */}
        {activeTab === 'languages' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Language evolution */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-305 block mb-1">📈 हिन्दी भाषा का क्रमिक विकास (Evolution Tree):</span>
                <div className="flex flex-wrap gap-1 items-center justify-center font-bold text-[10px] md:text-xs">
                  <span className="bg-slate-950 px-2 py-1.5 rounded border border-white/5">1. संस्कृत (आदि जननी)</span>
                  <span className="text-indigo-400">➡️</span>
                  <span className="bg-slate-950 px-2 py-1.5 rounded border border-white/5">2. पालि (बुद्ध उपदेश)</span>
                  <span className="text-indigo-400">➡️</span>
                  <span className="bg-slate-950 px-2 py-1.5 rounded border border-white/5">3. प्राकृत (जैन उपदेश)</span>
                  <span className="text-indigo-400">➡️</span>
                  <span className="bg-slate-950 px-2 py-1.5 rounded border border-white/5">4. अपभ्रंश</span>
                  <span className="text-indigo-400">➡️</span>
                  <span className="bg-slate-950 px-2 py-1.5 rounded border border-white/5">5. अवहट्ट</span>
                  <span className="text-indigo-400">➡️</span>
                  <span className="bg-slate-950 px-2 py-1.5 rounded border border-white/5">6. प्रारम्भिक हिन्दी</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">• **लिपि:** हिन्दी भाषा **देवनागरी लिपि** में लिखी जाती है (यह बाएं से दाएं लिखी जाती है, और ब्राह्मी लिपि से विकसित हुई है)।</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-305 block mb-1">⚖️ संवैधानिक प्रावधान (Constitutional Provisions):</span>
                <p>• <strong>अनुच्छेद 343(1):</strong> संघ की राजभाषा **हिन्दी** और लिपि **देवनागरी** होगी।</p>
                <p>• ⚠️ <strong>राजभाषा दिवस:</strong> <strong>14 सितम्बर</strong> को मनाया जाता है (क्योंकि 14 सितम्बर 1949 को संविधान सभा ने इसे राजभाषा के रूप में स्वीकार किया था)।</p>
                <p>• 🌍 <strong>विश्व हिन्दी दिवस:</strong> <strong>10 जनवरी</strong> को मनाया जाता है।</p>
                <p>• **आठवीं अनुसूची:** इसमें भारत की कुल <strong>22 मान्यता प्राप्त भाषाएँ</strong> शामिल हैं। (मूलतः 14 भाषाएँ थीं)।</p>
              </div>
            </div>

            {/* Language families and Dialects */}
            <div className="bg-slate-900/40 p-4 md:p-5 rounded-xl border border-white/5 space-y-3 text-xs">
              <span className="font-bold text-slate-100 block">🗣️ हिन्दी की उपभाषाएँ और बोलियाँ (Sub-languages & Dialects):</span>
              <p>हिन्दी की कुल <strong>5 उपभाषाएँ</strong> और <strong>17 बोलियाँ</strong> हैं:</p>
              <div className="grid md:grid-cols-3 gap-4 text-[11px] text-slate-400">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-350">1. पश्चिमी हिन्दी (शौरसेनी अपभ्रंश):</strong>
                  <p>• खड़ीबोली (कौरवी), ब्रजभाषा, कन्नौजी, बुन्देली, बांगरू (हरियाणवी)।</p>
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-350">2. पूर्वी हिन्दी (अर्धमागधी अपभ्रंश):</strong>
                  <p>• अवधी, बघेली, छत्तीसगढ़ी (शॉर्टकट ट्रिक: **A-B-C**)।</p>
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-350">3. बिहारी हिन्दी (मागधी अपभ्रंश):</strong>
                  <p>• भोजपुरी, मैथिली, मगही।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ALPHABET AND BASIC GRAMMAR */}
        {activeTab === 'alphabet' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Swara and Vyanjana intro */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-350 block mb-1">🍎 1. स्वर (Vowels - कुल 11):</span>
                <p>• **ह्रस्व स्वर (मूल स्वर):** अ, इ, उ, ऋ (जिनके उच्चारण में बहुत कम समय लगता है)।</p>
                <p>• **दीर्घ स्वर:** आ, ई, ऊ, ए, ऐ, ओ, औ (उच्चारण में ह्रस्व से दोगुना समय)।</p>
                <p>• **अयोगवाह:** अं (अनुस्वार) और अः (विसर्ग) - इन्हें न तो पूर्णतः स्वर माना जाता है और न व्यंजन।</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-350 block mb-1">⚙️ 2. व्यंजन (Consonants - कुल 33):</span>
                <p>• **स्पर्श व्यंजन (25):** क-वर्ग से प-वर्ग तक (कुल 5 वर्ग)।</p>
                <p>• **अन्तस्थ व्यंजन (4):** य, र, ल, व (य, व को अर्धस्वर भी कहते हैं; **र** ल्युंठित है, **ल** पार्श्विक है)।</p>
                <p>• **ऊष्म व्यंजन (4):** श, ष, स, ह।</p>
                <p>• **संयुक्त व्यंजन (4):** क्ष (क+ष्), त्र (त+र्), ज्ञ (ज+ञ्), श्र (श+र्)।</p>
                <p>• **द्विगुण / उत्क्षिप्त व्यंजन (2):** ड़, ढ़।</p>
              </div>
            </div>

            {/* Pronunciation Matrix */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-sm font-semibold text-sky-400 mb-3">🗣️ उच्चारण स्थान और व्यंजनों का वर्गीकरण (Pronunciation Matrix)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-sky-305">
                      <th className="p-2">वर्ग</th>
                      <th className="p-2">उच्चारण स्थान</th>
                      <th className="p-2">अल्पप्राण (1, 3, 5)</th>
                      <th className="p-2">महाप्राण (2, 4)</th>
                      <th className="p-2">घोष / सघोष (3, 4, 5)</th>
                      <th className="p-2">अघोष (1, 2)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-350">
                    <tr>
                      <td className="p-2 font-bold">क-वर्ग</td>
                      <td className="p-2">कण्ठ (Throat)</td>
                      <td className="p-2">क, ग, ङ</td>
                      <td className="p-2">ख, घ</td>
                      <td className="p-2">ग, घ, ङ</td>
                      <td className="p-2">क, ख</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">च-वर्ग</td>
                      <td className="p-2">तालव्य (Palate)</td>
                      <td className="p-2">च, ज, ञ</td>
                      <td className="p-2">छ, झ</td>
                      <td className="p-2">ज, झ, ञ</td>
                      <td className="p-2">च, छ</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">ट-वर्ग</td>
                      <td className="p-2">मूर्धन्य (Cerebral)</td>
                      <td className="p-2">ट, ड, ण</td>
                      <td className="p-2">ठ, ढ</td>
                      <td className="p-2">ड, ढ, ण</td>
                      <td className="p-2">ट, ठ</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">त-वर्ग</td>
                      <td className="p-2">दन्त्य (Teeth)</td>
                      <td className="p-2">त, द, न</td>
                      <td className="p-2">थ, ध</td>
                      <td className="p-2">द, ध, न</td>
                      <td className="p-2">त, थ</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">प-वर्ग</td>
                      <td className="p-2">ओष्ठ्य (Lips)</td>
                      <td className="p-2">प, ब, म</td>
                      <td className="p-2">फ, भ</td>
                      <td className="p-2">ब, भ, म</td>
                      <td className="p-2">प, फ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 bg-sky-500/5 text-slate-300 rounded border border-sky-500/10 mt-3 text-[11px] space-y-1">
                <p>• <strong>अल्पप्राण:</strong> जिन वर्णों के उच्चारण में फेफड़ों से कम हवा बाहर निकलती है (प्रत्येक वर्ग का 1, 3, 5वाँ वर्ण + अन्तस्थ व्यंजन)।</p>
                <p>• <strong>महाप्राण:</strong> जिन वर्णों के उच्चारण में अधिक हवा बाहर निकलती है (प्रत्येक वर्ग का 2, 4था वर्ण + ऊष्म व्यंजन)।</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
