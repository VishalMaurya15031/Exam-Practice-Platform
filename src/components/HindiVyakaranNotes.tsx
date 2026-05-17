"use client";
import React, { useState } from 'react';
import { Award, Shield, FileText, Check } from 'lucide-react';

export default function HindiVyakaranNotes() {
  const [activeTab, setActiveTab] = useState<'basics' | 'parts' | 'tense' | 'correction'>('basics');

  const tabs = [
    { id: 'basics', label: '⚙️ लिंग, वचन व कारक', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' },
    { id: 'parts', label: '🧠 विकारी व अविकारी शब्द', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'tense', label: '⏳ काल, वाच्य, उपसर्ग व प्रत्यय', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'correction', label: '✏️ वाक्य शुद्धि नियम', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0a0c16]/95 border border-sky-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-455 font-bold border border-sky-500/20">
          ⚙️
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">हिन्दी व्याकरण (Hindi Grammar Concepts)</h3>
          <p className="text-xs md:text-sm text-slate-400">लिंग, वचन, कारक, संज्ञा, सर्वनाम, विशेषण, क्रिया, अव्यय, काल, वाच्य व वाक्य शुद्धि</p>
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

        {/* TAB 1: GENDER, NUMBER, CASE */}
        {activeTab === 'basics' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              {/* Gender */}
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5">
                <strong className="text-amber-350 block">🚻 लिंग (Gender - 2 भेद):</strong>
                <p>• **पुल्लिंग:** पर्वत, मास, वार, धातुओं (अपवाद: चांदी), अनाजों व वृक्षों के नाम पुल्लिंग होते हैं।</p>
                <p>• **स्त्रीलिंग:** नदियों, तिथियों, लिपियों, भाषाओं व बेलों के नाम स्त्रीलिंग होते हैं।</p>
              </div>

              {/* Number */}
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5">
                <strong className="text-amber-350 block">🔢 वचन (Number - 2 भेद):</strong>
                <p>• ⚠️ **सदा बहुवचन रहने वाले शब्द (अति-महत्वपूर्ण):** प्राण, आँसू, दर्शन, हस्ताक्षर, लोग, अक्षत, ओठ।</p>
                <p>• ⚠️ **सदा एकवचन रहने वाले शब्द:** जनता, वर्षा, पानी, सोना, क्रोध, घी, हवा।</p>
              </div>

              {/* Karak Tip */}
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5">
                <strong className="text-amber-350 block">🔥 अपादान बनाम करण कारक:</strong>
                <p>• **करण** में 'से' का प्रयोग **साधन** के रूप में होता है (जैसे: 'वह पेन से लिखता है')।</p>
                <p>• **अपादान** में 'से' का प्रयोग **अलग होने, भय, तुलना, शर्माने** के अर्थ में होता है (जैसे: 'पेड़ से पत्ता गिरा', 'हिमालय से गंगा निकलती है')।</p>
              </div>
            </div>

            {/* Karak Table */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-sm font-semibold text-slate-100 mb-3">📋 कारक और उनकी विभक्तियाँ (8 Karaks & Vibhakti Table)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>1. कर्ता कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: ने</p>
                  <p className="text-[10px] text-slate-400">कार्य करने वाला (राम ने खाया)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>2. कर्म कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: को</p>
                  <p className="text-[10px] text-slate-400">जिस पर प्रभाव पड़े (राम ने श्याम को मारा)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>3. करण कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: से / के द्वारा</p>
                  <p className="text-[10px] text-slate-400">क्रिया का साधन (चाकू से काटो)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>4. सम्प्रदान कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: को / के लिए</p>
                  <p className="text-[10px] text-slate-400">जिसके लिए क्रिया हो या कुछ दिया जाए (भिखारी को दान दो)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>5. अपादान कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: से (अलग होना)</p>
                  <p className="text-[10px] text-slate-400">अलगाव/तुलना (गंगा हिमालय से निकलती है)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>6. सम्बन्ध कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: का, की, के, रा, री</p>
                  <p className="text-[10px] text-slate-400">आपसी सम्बन्ध (यह श्याम का घर है)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>7. अधिकरण कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: में, पर</p>
                  <p className="text-[10px] text-slate-400">क्रिया का आधार/स्थान (मेज पर पुस्तक है)।</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>8. सम्बोधन कारक:</strong>
                  <p className="text-amber-350 font-bold">विभक्ति: हे! अरे! ओ!</p>
                  <p className="text-[10px] text-slate-400">पुकारना/सचेत करना (अरे श्याम! इधर आओ)।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SHABDA (NOUN TO ADVERB) */}
        {activeTab === 'parts' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Vikari Shabda */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-sky-350 block mb-1">🧠 1. विकारी शब्द (जो लिंग, वचन से बदलते हैं - 4 प्रकार):</span>
                <ul className="space-y-2 text-slate-350 text-[11px]">
                  <li>• <strong>संज्ञा (Noun - 5 भेद):</strong> व्यक्तिवाचक, जातिवाचक, भाववाचक, द्रव्यवाचक, समूहवाचक।</li>
                  <li>• <strong>सर्वनाम (Pronoun - 6 भेद, कुल 11 सर्वनाम):</strong> पुरुषवाचक, निजवाचक (स्वयं/आप), निश्चयवाचक (यह/वह), अनिश्चयवाचक (कोई/कुछ), सम्बन्धवाचक (जो/सो), प्रश्नवाचक (कौन/क्या)।</li>
                  <li>• <strong>विशेषण (Adjective - 4 भेद):</strong> गुणवाचक (काला, दयालु), संख्यावाचक (चार), परिमाणवाचक (दो लीटर), सार्वनामिक (यह लड़का)। इसकी 3 अवस्थाएँ हैं: मूलावस्था, उत्तरावस्था, उत्तमावस्था।</li>
                  <li>• <strong>क्रिया (Verb):</strong> कर्म के आधार पर <strong>2 प्रकार</strong> - **सकर्मक** (कर्म सहित, जैसे: 'वह आम खाता है') और **अकर्मक** (कर्म रहित, जैसे: 'वह रोता है')। **प्रेरणार्थक क्रिया:** जगाना, जगवाना। **नामधातु क्रिया:** हाथ ➡️ हथियाना, लात ➡️ लतियाना।</li>
                </ul>
              </div>

              {/* Avikari Shabda */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-sky-350 block mb-1">🛡️ 2. अविकारी शब्द / अव्यय (अपरिवर्तनीय - 4 प्रकार):</span>
                <ul className="space-y-2 text-slate-350 text-[11px]">
                  <li>• <strong>क्रियाविशेषण (Adverb):</strong> क्रिया की विशेषता बताने वाले (जैसे: 'वह धीरे-धीरे चलता है')। 4 भेद: कालवाचक, स्थानवाचक, परिमाणवाचक, रीतिवाचक।</li>
                  <li>• <strong>सम्बन्धबोधक:</strong> जो संज्ञा के बाद आकर उसका संबंध दूसरे से जोड़े (जैसे: 'घर के सामने पेड़ है')।</li>
                  <li>• <strong>समुच्चयबोधक (Conjunction):</strong> दो वाक्यों को जोड़ने वाले (और, किन्तु, परन्तु, इसलिए)।</li>
                  <li>• <strong>विस्मयादिबोधक:</strong> हर्ष, शोक, घृणा व्यक्त करने वाले (हाय!, वाह!, छी!)।</li>
                  <li>• 🔥 <strong>निपात (Extra emphasis):</strong> जो शब्द वाक्य में अतिरिक्त बल प्रदान करते हैं (ही, भी, तक, मात्र, केवल - जैसे: 'राम ही जाएगा')।</li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: TENSE, VOICE, PREFIX, SUFFIX */}
        {activeTab === 'tense' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Tense and Voice */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-rose-350 block mb-1">⏳ काल (Tenses - 3 भेद):</span>
                <p>• <strong>भूतकाल (6 भेद):</strong> सामान्य, आसन्न (अभी-अभी खत्म), पूर्ण, अपूर्ण, संदिग्ध (गया होगा), हेतुहेतुमद्भूत (यदि वर्षा होती तो फसल अच्छी होती)।</p>
                <p>• <strong>वर्तमानकाल (5 भेद):</strong> सामान्य, तात्कालिक/अपूर्ण (जा रहा है), पूर्ण, संदिग्ध (जाता होगा), संभाव्य।</p>
                <p>• <strong>भविष्यत्काल (3 भेद):</strong> सामान्य, संभाव्य (शायद वह आए), हेतुहेतुमद्भविष्य।</p>
                
                <span className="font-bold text-rose-350 block mt-3 mb-1">🗣️ वाच्य (Voice - 3 भेद):</span>
                <p>• <strong>कर्तृवाच्य:</strong> क्रिया कर्ता के अनुसार (राम पुस्तक पढ़ता है)।</p>
                <p>• <strong>कर्मवाच्य:</strong> क्रिया कर्म के अनुसार (राम के द्वारा पुस्तक पढ़ी जाती है)।</p>
                <p>• <strong>भाववाच्य:</strong> भाव की प्रधानता, प्रायः निषेधात्मक (मुझसे चला नहीं जाता)।</p>
              </div>

              {/* Prefix and Suffix */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
                <span className="font-bold text-rose-350 block mb-1">📍 उपसर्ग व प्रत्यय (Prefix & Suffix):</span>
                <p>• <strong>उपसर्ग (Prefix):</strong> वे शब्दांश जो शब्द के <strong>शुरू (पूर्व)</strong> में जुड़कर उसका अर्थ बदल देते हैं।
                  <ul className="pl-3 space-y-0.5 text-[11px] text-slate-400">
                    <li>- संस्कृत के उपसर्ग: <strong>22</strong> (अति, अधि, अनु, अप...)</li>
                    <li>- हिन्दी के उपसर्ग: <strong>10</strong> (अ, अन, कु, सु...)</li>
                  </ul>
                </p>
                <p className="mt-2">• <strong>प्रत्यय (Suffix):</strong> वे शब्दांश जो शब्द के <strong>अंत</strong> में जुड़ते हैं। इसके 2 मुख्य प्रकार हैं:
                  <ul className="pl-3 space-y-1.5 text-[11px] text-slate-400">
                    <li>- **1. कृत् प्रत्यय:** जो **क्रिया या धातु** के अंत में लगते हैं (इनसे बने शब्द 'कृदंत' कहलाते हैं, जैसे: लिख् + आवट = लिखावट)।</li>
                    <li>- **2. तद्धित प्रत्यय:** जो **संज्ञा, सर्वनाम, या विशेषण** के अंत में लगते हैं (जैसे: मानव + ता = मानवता)।</li>
                  </ul>
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: SENTENCE CORRECTION */}
        {activeTab === 'correction' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-350 block text-sm">✏️ वाक्यों को शुद्ध करने के प्रमुख नियम (Sentence Correction Rules):</span>
              
              <div className="grid md:grid-cols-2 gap-4 text-[11px]">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <span className="text-emerald-400 font-bold">1. पुनरुक्ति दोष (Redundancy Errors):</span>
                  <p>• ❌ अशुद्ध: वह **सज्जन पुरुष** है।<br />•  शुद्ध: वह **सज्जन** है। (सज्जन = सत् + जन, अतः 'पुरुष' लिखना गलत है)।</p>
                  <p>• ❌ अशुद्ध: **कृपया** उत्तर देने की **कृपा** करें।<br />•  शुद्ध: **कृपया** उत्तर दें। या उत्तर देने की **कृपा** करें।</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <span className="text-emerald-400 font-bold">2. कारक व विभक्ति सम्बन्धी अशुद्धि:</span>
                  <p>• ❌ अशुद्ध: खरगोश को **काटकर गाजर** खिलाओ।<br />•  शुद्ध: गाजर काटकर खरगोश को खिलाओ।</p>
                  <p>• ❌ अशुद्ध: मैं **मेरी** पुस्तक पढ़ रहा हूँ।<br />•  शुद्ध: मैं **अपनी** पुस्तक पढ़ रहा हूँ।</p>
                </div>
              </div>

              <div className="p-3 bg-emerald-500/5 text-emerald-300 rounded border border-emerald-500/10 text-[11px] mt-2">
                ⚡ <strong>याद रखें:</strong> 'अनेकों' लिखना सदा व्याकरण विरुद्ध माना जाता है। हमेशा **'अनेक'** का प्रयोग करें (जैसे: 'वहां **अनेक** लोग थे', न कि 'अनेकों')।
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
