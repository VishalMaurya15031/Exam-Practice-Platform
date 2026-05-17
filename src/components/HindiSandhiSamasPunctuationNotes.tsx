"use client";
import React, { useState } from 'react';
import { GitPullRequest, Grid, AlertTriangle, BookOpen } from 'lucide-react';

export default function HindiSandhiSamasPunctuationNotes() {
  const [activeTab, setActiveTab] = useState<'sandhi' | 'samas' | 'punctuation' | 'passage'>('sandhi');

  const tabs = [
    { id: 'sandhi', label: '🔀 सन्धि (Sandhi)', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'samas', label: '🧩 समास (Samas)', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'punctuation', label: '🛑 विराम-चिह्न (Punctuation)', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'passage', label: '📖 अपठित बोध रणनीति', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#090a18]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-455 font-bold border border-indigo-500/20">
          🔀
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">सन्धि, समास, विराम-चिह्न व अपठित बोध</h3>
          <p className="text-xs md:text-sm text-slate-400">संधि विच्छेद नियम, समास वर्गीकरण, विराम चिह्नों के मानक नियम और अपठित गद्यांश रणनीति</p>
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

        {/* TAB 1: SANDHI */}
        {activeTab === 'sandhi' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            
            {/* Swar Sandhi Details */}
            <div className="bg-slate-900/40 p-4 md:p-5 rounded-xl border border-white/5 space-y-4">
              <span className="font-bold text-indigo-300 block text-sm">🍎 1. स्वर सन्धि (5 उप-प्रकार):</span>
              
              <div className="grid md:grid-cols-5 gap-3 text-[11px]">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-400">1. दीर्घ सन्धि:</strong>
                  <p>समान स्वर मिलकर दीर्घ हो जाते हैं ($a+a=aa$)।</p>
                  <p className="text-slate-400 font-mono mt-1">हिम + आलय = **हिमालय**<br />भानु + उदय = **भानूदय**</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-400">2. गुण सन्धि:</strong>
                  <p>$a/aa$ के बाद $i/u/ri$ आने पर $e/o/ar$ बनता है।</p>
                  <p className="text-slate-400 font-mono mt-1">नर + इन्द्र = **नरेन्द्र**<br />महा + उत्सव = **महोत्सव**</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-400">3. वृद्धि सन्धि:</strong>
                  <p>$a/aa$ के बाद $e/o$ आने पर $ai/au$ (डबल मात्रा) बनता है।</p>
                  <p className="text-slate-400 font-mono mt-1">एक + एक = **एकैक**<br />सदा + एव = **सदैव**</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-400">4. यण सन्धि:</strong>
                  <p>$i/u/ri \Rightarrow y/v/r$ बन जाता है (प्रायः आधा अक्षर)।</p>
                  <p className="text-slate-400 font-mono mt-1">इति + आदि = **इत्यादि**<br />सु + आगत = **स्वागत**</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-indigo-400">5. अयादि सन्धि:</strong>
                  <p>$e/ai/o/au \Rightarrow ay/aay/av/aav$ बनता है।</p>
                  <p className="text-slate-400 font-mono mt-1">ने + अन = **नयन**<br />पौ + अक = **पावक**</p>
                </div>
              </div>
            </div>

            {/* Vyanjan and Visarga */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1">⚙️ 2. व्यंजन सन्धि (Consonant Sandhi):</span>
                <p>व्यंजन के साथ स्वर या व्यंजन के मेल से उत्पन्न विकार:</p>
                <ul className="pl-3 space-y-1.5 text-slate-400 text-[11px]">
                  <li>• **वाग्जाल:** वाक् + जाल (वर्ग का पहला वर्ण तीसरे में बदला)</li>
                  <li>• **सज्जन:** सत् + जन ($t \Rightarrow j$ में परिवर्तन)</li>
                  <li>• **तल्लीन:** तत् + लीन</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1">🧘 3. विसर्ग सन्धि (Visarga Sandhi):</span>
                <p>विसर्ग (ः) के साथ स्वर या व्यंजन के मेल से उत्पन्न विकार:</p>
                <ul className="pl-3 space-y-1.5 text-slate-400 text-[11px]">
                  <li>• **मनोहर:** मनः + हर (विसर्ग का 'ओ' हो गया)</li>
                  <li>• **निश्चल:** निः + चल (विसर्ग का 'श्' हो गया)</li>
                  <li>• **निर्धन:** निः + धन (विसर्ग का 'र्' हो गया)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SAMAS */}
        {activeTab === 'samas' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <span className="font-bold text-sky-400 block text-sm mb-3">🧩 समास (Samas - 6 मुख्य प्रकार)</span>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px]">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-sky-350">1. अव्ययीभाव समास:</strong>
                  <p>प्रथम पद प्रधान व अव्यय होता है।</p>
                  <p className="text-slate-400 mt-1">• यथाशक्ति ➡️ शक्ति के अनुसार</p>
                  <p className="text-slate-400">• प्रतिदिन ➡️ दिन-दिन</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-sky-350">2. तत्पुरुष समास:</strong>
                  <p>उत्तर पद प्रधान, कारक चिह्नों का लोप होता है।</p>
                  <p className="text-slate-400 mt-1">• राजपुत्र ➡️ राजा का पुत्र (सम्बन्ध)</p>
                  <p className="text-slate-400">• रसोईघर ➡️ रसोई के लिए घर (सम्प्रदान)</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-sky-350">3. कर्मधारय समास:</strong>
                  <p>विशेषण-विशेष्य या उपमान-उपमेय का संबंध।</p>
                  <p className="text-slate-400 mt-1">• नीलकमल ➡️ नीला है जो कमल</p>
                  <p className="text-slate-400">• चंद्रमुख ➡️ चंद्रमा के समान मुख</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-sky-350">4. द्विगु समास:</strong>
                  <p>प्रथम पद अनिवार्य रूप से संख्यावाचक होता है।</p>
                  <p className="text-slate-400 mt-1">• चौराहा ➡️ चार राहों का समूह</p>
                  <p className="text-slate-400">• त्रिफला ➡️ तीन फलों का समूह</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-sky-350">5. द्वंद्व समास:</strong>
                  <p>दोनों पद समान प्रधान, बीच में योजक चिह्न (-)।</p>
                  <p className="text-slate-400 mt-1">• माता-पिता ➡️ माता और पिता</p>
                  <p className="text-slate-400">• रात-दिन ➡️ रात और दिन</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1">
                  <strong className="text-sky-350">6. बहुव्रीहि समास:</strong>
                  <p>कोई पद प्रधान नहीं, तीसरे नए अर्थ का बोध।</p>
                  <p className="text-slate-400 mt-1">• दशानन ➡️ रावण (दस सिर वाला)</p>
                  <p className="text-slate-400">• लंबोदर ➡️ गणेश (लंबा पेट वाला)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PUNCTUATION */}
        {activeTab === 'punctuation' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-rose-350 block mb-1">🛑 पंडित कामता प्रसाद गुरु के अनुसार विराम-चिह्न:</span>
              <p>• कामता प्रसाद गुरु ने विराम चिह्नों की कुल संख्या <strong>20</strong> बताई है।</p>
              <p>• उन्होंने **पूर्णविराम (।)** को छोड़कर शेष सभी विराम चिह्नों को **अंग्रेजी भाषा** से लिया हुआ माना है।</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] bg-slate-900/40 p-4 rounded-xl border border-white/5">
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">,</span>
                <p className="font-semibold">अल्पविराम (Comma)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">;</span>
                <p className="font-semibold">अर्धविराम (Semicolon)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">:</span>
                <p className="font-semibold">उपविराम (Colon)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">।</span>
                <p className="font-semibold">पूर्णविराम (Full Stop)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">?</span>
                <p className="font-semibold">प्रश्नवाचक (Question)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">!</span>
                <p className="font-semibold">विस्मयादिबोधक (Excl.)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">-</span>
                <p className="font-semibold">योजक चिह्न (Hyphen)</p>
              </div>
              <div className="p-2 bg-slate-950/60 rounded border border-white/5 text-center">
                <span className="text-rose-400 font-bold text-base">" "</span>
                <p className="font-semibold">उद्धरण चिह्न (Quotes)</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PASSAGE */}
        {activeTab === 'passage' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-350 block text-sm">📖 अपठित गद्यांश (Passage) हल करने की अचूक रणनीति (Score 5/5):</span>
              <ul className="space-y-2 text-slate-350 text-[11px] list-disc pl-4">
                <li>• 🚀 <strong>उल्टी रणनीति (Reverse Strategy):</strong> गद्यांश पढ़ने से पहले **प्रश्नों को एक बार ध्यान से पढ़ें**। इससे गद्यांश पढ़ते समय सही उत्तर तुरंत मिल जाएंगे।</li>
                <li>• 🔎 <strong>शीर्षक का चुनाव (Choosing Title):</strong> शीर्षक प्रायः गद्यांश की **शुरुआती 2 लाइनों या अंतिम 2 लाइनों** में छिपा होता है। जो शब्द बार-बार उपयोग हो, वही शीर्षक का मुख्य बिंदु होता है।</li>
                <li>• 🧠 <strong>व्यक्तिगत ज्ञान से बचें:</strong> हमेशा गद्यांश में दी गई जानकारी के अनुसार ही उत्तर दें, भले ही वह आपके सामान्य ज्ञान के विरुद्ध हो।</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
