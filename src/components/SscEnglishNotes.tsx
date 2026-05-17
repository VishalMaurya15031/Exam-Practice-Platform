"use client";
import React, { useState } from 'react';
import { Book, CheckCircle, AlertTriangle, HelpCircle, Star, Shuffle } from 'lucide-react';

export default function SscEnglishNotes() {
  const [activeTab, setActiveTab] = useState<'grammar' | 'vocab' | 'tricks'>('grammar');

  const tabs = [
    { id: 'grammar', label: '📝 Grammar Rules (व्याकरण नियम)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'vocab', label: '🗣️ Vocabulary (शब्दावली)', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' },
    { id: 'tricks', label: '⚡ Spotting Errors & Cloze Test', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Book className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">English Language & Comprehension Notes</h3>
          <p className="text-xs md:text-sm text-slate-400">SSC CGL Tier 1 & 2 परीक्षाओं हेतु उच्च-स्तरीय व्याकरण एवं शब्दावली मार्गदर्शिका</p>
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
      <div className="space-y-6 text-slate-300 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: GRAMMAR RULES */}
        {activeTab === 'grammar' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Subject-Verb Agreement */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" /> 🎯 1. Subject-Verb Agreement (कर्ता-क्रिया सहमति)
              </span>
              <p className="text-xs md:text-sm">SSC CGL में इस टॉपिक से सबसे ज़्यादा त्रुटियां पूछी जाती हैं। इसके तीन प्रमुख सुनहरे नियम:</p>
              
              <div className="grid md:grid-cols-3 gap-4 text-xs mt-2">
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-350 block mb-1">🔗 नियम A (Either/Neither):</strong>
                  <p>जब दो कर्ता (subjects) <strong>Either... or, Neither... nor, Not only... but also, or, nor</strong> से जुड़ते हैं, तो क्रिया हमेशा <strong>नज़दीकी कर्ता (nearest subject)</strong> के अनुसार होती है।</p>
                  <p className="text-[11px] text-slate-400 mt-1">✓ *Neither the teacher nor the **students were** present.*</p>
                </div>
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-350 block mb-1">🔗 नियम B (Along with/As well as):</strong>
                  <p>जब दो कर्ता <strong>as well as, along with, together with, with, accompanied by, in addition to</strong> से जुड़ते हैं, तो क्रिया हमेशा <strong>प्रथम कर्ता (first subject)</strong> के अनुसार होती है।</p>
                  <p className="text-[11px] text-slate-400 mt-1">✓ *The **King**, along with all his ministers, **was** killed.*</p>
                </div>
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong className="text-emerald-350 block mb-1">🔗 नियम C (Each/Every/One of):</strong>
                  <p><strong>Each of, One of, Either of, Neither of, Everyone of</strong> के बाद संज्ञा/सर्वनाम हमेशा बहुवचन (Plural) होता है, लेकिन क्रिया हमेशा <strong>एकवचन (Singular)</strong> होती है।</p>
                  <p className="text-[11px] text-slate-400 mt-1">✓ *One of my **friends is** a scientist.*</p>
                </div>
              </div>
            </div>

            {/* Voice & Narration Shortcuts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-400 block border-b border-white/5 pb-1.5 text-sm">🔄 Active & Passive Voice (वाच्य परिवर्तन शॉर्टकट):</span>
                <p className="text-xs">SSC CGL में मुख्य नियम यह है कि **Voice बदलते समय Tense कभी नहीं बदलता** (केवल Form बदलता है):</p>
                <div className="p-3 bg-slate-950/60 rounded-lg space-y-1.5 text-xs text-slate-300">
                  <p>• <strong>Simple Present:</strong> V1/V1+s/es ➜ **is/am/are + V3**</p>
                  <p>• <strong>Present Continuous:</strong> is/am/are + V4 ➜ **is/am/are + being + V3**</p>
                  <p>• <strong>Simple Past:</strong> V2 ➜ **was/were + V3**</p>
                  <p>• <strong>Present/Past Perfect:</strong> Has/Have/Had + V3 ➜ **Has/Have/Had + been + V3**</p>
                  <p className="text-[11px] text-teal-300">• ⚡ <strong>Shortcut Rule:</strong> यदि वाक्य में *Continuous* है, तो Passive में <strong>being</strong> अवश्य आएगा। यदि *Perfect* है, तो <strong>been</strong> अवश्य आएगा।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-400 block border-b border-white/5 pb-1.5 text-sm">💬 Direct & Indirect Narration (कथन परिवर्तन शॉर्टकट):</span>
                <p className="text-xs">Narration बदलते समय **Tense और Time-expressions दोनों पीछे (backshift) बदल जाते हैं**:</p>
                <div className="p-3 bg-slate-950/60 rounded-lg space-y-1.5 text-xs text-slate-300">
                  <p>• <strong>Tense Shifts:</strong> Present ➜ Past | Simple Past ➜ Past Perfect | Past Continuous ➜ Past Perfect Continuous</p>
                  <p>• <strong>Modal Shifts:</strong> will ➜ would | can ➜ could | may ➜ might</p>
                  <p>• <strong>Time Shifts:</strong> today ➜ that day | yesterday ➜ the previous day | now ➜ then</p>
                  <p className="text-[11px] text-teal-300">• ⚡ <strong>Universal Truth Exception:</strong> यदि Reporting Speech कोई सार्वभौमिक सत्य (Universal Truth / Habit) है, तो Tense **नहीं बदलता** (e.g. *The teacher said, "Water boils at 100°C" ➜ that water boils at 100°C.*)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VOCABULARY */}
        {activeTab === 'vocab' && (
          <div className="space-y-6 animate-fadeIn">
            {/* One Word Substitutions & Idioms */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1.5 text-sm">📚 High-Yield One Word Substitutions (बार-बार पूछे जाने वाले शब्द):</span>
                <div className="space-y-2.5">
                  <p>• <strong>Altruist (परोपकारी):</strong> One who works unselfishly for the welfare of others.</p>
                  <p>• <strong>Incorrigible (असंशोधनीय):</strong> One who is beyond correction or reform.</p>
                  <p>• <strong>Omnipotent (सर्वशक्तिमान):</strong> One who is all-powerful.</p>
                  <p>• <strong>Polyglot (बहुभाषी):</strong> One who speaks or knows many languages.</p>
                  <p>• <strong>Ephemeral (क्षणिक):</strong> Lasting for a very short time.</p>
                  <p>• <strong>Atheist (नास्तिक):</strong> One who does not believe in the existence of God.</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1.5 text-sm">💡 Important Idioms & Phrases (महत्वपूर्ण मुहावरे):</span>
                <div className="space-y-2.5">
                  <p>• <strong>To spill the beans:</strong> To reveal a secret prematurely (भेद खोलना).</p>
                  <p>• <strong>Once in a blue moon:</strong> An event that happens very rarely (ईद का चाँद होना).</p>
                  <p>• <strong>Burn the midnight oil:</strong> To work or study late into the night (कठिन परिश्रम करना).</p>
                  <p>• <strong>A blessing in disguise:</strong> A good thing that seemed bad at first (आपत्ति के रूप में वरदान).</p>
                  <p>• <strong>Bite the bullet:</strong> To face a difficult situation with courage (मुश्किल का सामना साहस से करना).</p>
                  <p>• <strong>At the eleventh hour:</strong> At the very last moment (अंतिम समय पर).</p>
                </div>
              </div>
            </div>

            {/* Synonyms & Antonyms Table */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-teal-350 block text-xs md:text-sm">📊 Repeat Synonyms & Antonyms in SSC CGL:</span>
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-2">Word (शब्द)</th>
                    <th className="py-2">Meaning (अर्थ)</th>
                    <th className="py-2 text-emerald-450">Synonyms (समानार्थी)</th>
                    <th className="py-2 text-rose-400">Antonyms (विलोम)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="py-2 font-semibold">Abundant</td>
                    <td className="py-2">प्रचुर/बहुत अधिक</td>
                    <td className="py-2 text-emerald-400/90">Copious, Plentiful</td>
                    <td className="py-2 text-rose-400/90">Scarce, Meagre</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Candid</td>
                    <td className="py-2">स्पष्टवादी/ईमानदार</td>
                    <td className="py-2 text-emerald-400/90">Frank, Honest, Ingenuous</td>
                    <td className="py-2 text-rose-400/90">Deceitful, Evasive</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Diligent</td>
                    <td className="py-2">परिश्रमी/मेहनती</td>
                    <td className="py-2 text-emerald-400/90">Industrious, Assiduous</td>
                    <td className="py-2 text-rose-400/90">Lazy, Indolent</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Mitigate</td>
                    <td className="py-2">कम करना/शांत करना</td>
                    <td className="py-2 text-emerald-400/90">Alleviate, Assuage, Lessen</td>
                    <td className="py-2 text-rose-400/90">Aggravate, Intensify</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: TRICKS */}
        {activeTab === 'tricks' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              {/* Preposition & Conjunction Errors */}
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block border-b border-white/5 pb-1.5 text-sm">⚡ Golden Conjunction Pairs (संयोजक त्रुटि नियम):</span>
                <div className="space-y-2">
                  <p>• <strong>Hardly / Scarcely</strong> is followed by <strong>when</strong> (Not *than* / *then*).</p>
                  <p className="text-slate-400 pl-3">✗ *Hardly had I reached the station **than** the train left.*<br />✓ *Hardly had I reached the station **when** the train left.*</p>
                  
                  <p className="mt-2">• <strong>No Sooner</strong> is followed by <strong>than</strong> (Not *when* / *then*).</p>
                  <p className="text-slate-400 pl-3">✗ *No sooner did the bell ring **when** the students ran out.*<br />✓ *No sooner did the bell ring **than** the students ran out.*</p>

                  <p className="mt-2">• <strong>Lest</strong> must be followed by the modal verb <strong>should</strong> (and it cannot take *not* because it is already negative).</p>
                  <p className="text-slate-400 pl-3">✓ *Run fast lest you **should** miss the bus.*</p>
                </div>
              </div>

              {/* Cloze test tips */}
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block border-b border-white/5 pb-1.5 text-sm">💡 Cloze Test & Reading Passages Strategy:</span>
                <ul className="space-y-2 text-slate-350">
                  <li>• <strong>1. Tone & Flow (टोन पहचानें):</strong> रिक्त स्थान भरने से पहले पूरे गद्यांश (passage) को एक बार पूरा पढ़ें ताकि उसका भाव (Positive, Negative, Neutral) समझ में आ सके।</li>
                  <li>• <strong>2. Collocations (सह-संबद्ध शब्द):</strong> कुछ शब्द हमेशा जोड़े में चलते हैं जैसे *interested in*, *depend on*, *accused of*, *deal with*। इनपर विशेष ध्यान दें।</li>
                  <li>• <strong>3. Elimination Method (विकल्प हटाना):</strong> व्याकरण (Grammar) का उपयोग करके उन विकल्पों को हटा दें जो विषय (singular/plural) या काल (tense) में मेल नहीं खाते।</li>
                  <li>• <strong>4. Vocabulary Shift (संदर्भ अनुसार शब्द):</strong> सुनिश्चित करें कि चुना गया शब्द सटीक अर्थ प्रकट करता हो (जैसे *invent* नई चीज़ के लिए, *discover* पहले से मौजूद चीज़ को ढूंढने के लिए)।</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
