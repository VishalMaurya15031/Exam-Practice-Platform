"use client";
import React, { useState } from 'react';
import { Sparkles, Library, FileText, CheckCircle } from 'lucide-react';

export default function HindiVocabularyNotes() {
  const [activeTab, setActiveTab] = useState<'tatsam' | 'synonyms' | 'anekarthak' | 'one-word'>('tatsam');

  const tabs = [
    { id: 'tatsam', label: '✨ तत्सम-तद्भव', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' },
    { id: 'synonyms', label: '📚 पर्यायवाची व विलोम', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'anekarthak', label: '🧬 अनेकार्थक व समरूपी', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'one-word', label: '✍️ वाक्यांश के लिए एक शब्द', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0c0a15]/95 border border-amber-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-455 font-bold border border-amber-500/20">
          📚
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">हिन्दी शब्द भण्डार (Hindi Vocabulary)</h3>
          <p className="text-xs md:text-sm text-slate-400">तत्सम-तद्भव, पर्यायवाची, विलोम, अनेकार्थक, वाक्यांश तथा समरूपी शब्दों का पूर्ण संग्रह</p>
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

        {/* TAB 1: TATSAMA AND TADBHAVA */}
        {activeTab === 'tatsam' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Rules to identify */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-amber-350 block mb-1">💡 तत्सम-तद्भव पहचानने के स्वर्ण नियम (Tricks to Identify):</span>
              <ul className="space-y-1 text-slate-400 text-[11px] list-disc pl-4">
                <li>• **नियम 1:** तत्सम शब्दों में प्रायः **'क्ष', 'श्र', 'ष', 'ऋ', 'त्र'** वर्णों का प्रयोग होता है (जैसे: अक्षि, क्षेत्र)। तद्भव में 'क्ष' का **'ख' या 'छ'** हो जाता है (जैसे: आँख, खेत)।</li>
                <li>• **नियम 2:** तत्सम में **'व'** का प्रयोग होता है, जबकि तद्भव में वह **'ब'** में बदल जाता है (जैसे: वणिक ➡️ बनिया, वर्षा ➡️ बरसात)।</li>
                <li>• **नियम 3:** तत्सम में तालव्य **'श'** का प्रयोग होता है, तद्भव में वह दन्त्य **'स'** हो जाता है (जैसे: श्यामल ➡️ सांवला, शुक ➡️ सुआ)।</li>
                <li>• **नियम 4:** चंद्रबिंदु (**ँ**) वाले सभी शब्द अनिवार्य रूप से **तद्भव** होते हैं (जैसे: चाँद, आँख, गूँज)।</li>
              </ul>
            </div>

            {/* Tatsam-Tadbhava List Table */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 text-xs">
              <span className="font-bold text-slate-100 block mb-2">⭐ परीक्षाओं में सर्वाधिक पूछे जाने वाले तत्सम-तद्भव शब्द</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px]">
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-amber-350 font-semibold">तत्सम ➡️ तद्भव</span>
                  <p>• अग्नि ➡️ **आग**</p>
                  <p>• अक्षि ➡️ **आँख**</p>
                  <p>• घृत ➡️ **घी**</p>
                  <p>• कर्पूर ➡️ **कपूर**</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <span className="text-amber-350 font-semibold">तत्सम ➡️ तद्भव</span>
                  <p>• दुग्ध ➡️ **दूध**</p>
                  <p>• मयूर ➡️ **मोर**</p>
                  <p>• कोकिल ➡️ **कोयल**</p>
                  <p>• हरिद्रा ➡️ **हल्दी**</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5 col-span-2 md:col-span-1">
                  <span className="text-amber-350 font-semibold">तत्सम ➡️ तद्भव</span>
                  <p>• ओष्ठ ➡️ **ओठ**</p>
                  <p>• श्मश्रु ➡️ **मूँछ**</p>
                  <p>• हस्त ➡️ **हाथ**</p>
                  <p>• कूप ➡️ **कुआँ**</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SYNONYMS AND ANTONYMS */}
        {activeTab === 'synonyms' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              
              {/* Synonyms */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-rose-350 block mb-1">🎨 महत्वपूर्ण पर्यायवाची शब्द (Crucial Synonyms):</span>
                <ul className="space-y-2 text-slate-350 text-[11px]">
                  <li>• <strong>कमल:</strong> जलज, पंकज, नीरज, वारिज, राजीव, अरविन्द, सरोज, अम्बुज, शतदल।</li>
                  <li>• <strong>सूर्य:</strong> दिनकर, दिवाकर, रवि, भानु, भास्कर, प्रभाकर, मार्तंड, सविता।</li>
                  <li>• <strong>गंगा:</strong> भागीरथी, मंदाकिनी, सुरसरि, देवनदी, त्रिपथगा, जहन्नुतनया।</li>
                  <li>• <strong>अग्नि:</strong> आग, अनल, पावक, दहन, हुताशन, कृशानु, वैश्वानर।</li>
                  <li>• <strong>बादल:</strong> जलद, वारिद, नीरद, पयोधर, मेघ, घन (ट्रिक: अंत में **'द'**)।</li>
                  <li>• <strong>समुद्र:</strong> जलधि, वारिधि, नीरधि, पयोधि, रत्नाकर (ट्रिक: अंत में **'धि'**)।</li>
                </ul>
              </div>

              {/* Antonyms */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-rose-350 block mb-1">⚖️ महत्वपूर्ण विलोम शब्द (Crucial Antonyms):</span>
                <div className="grid grid-cols-2 gap-2 text-slate-400 text-[11px]">
                  <p>• अनुराग ➡️ **विराग**</p>
                  <p>• आलोक ➡️ **अंधकार**</p>
                  <p>• जंगम ➡️ **स्थावर** (अति-प्रसिद्ध)</p>
                  <p>• तिमिर ➡️ **प्रकाश**</p>
                  <p>• मूक ➡️ **वाचाल**</p>
                  <p>• सृष्टि ➡️ **प्रलय**</p>
                  <p>• आकर्षण ➡️ **विकर्षण**</p>
                  <p>• इति ➡️ **अथ**</p>
                  <p>• उत्कृष्ट ➡️ **निकृष्ट**</p>
                  <p>• अज्ञ ➡️ **विज्ञ**</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: HOMONYMS AND HOMOPHONES */}
        {activeTab === 'anekarthak' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              
              {/* Homonyms */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-350 block mb-1">🧬 प्रमुख अनेकार्थक शब्द (Words with Multiple Meanings):</span>
                <ul className="space-y-2 text-slate-350 text-[11px]">
                  <li>• <strong>कनक:</strong> सोना, धतूरा, गेंहू, पलाश।</li>
                  <li>• <strong>हरि:</strong> विष्णु, बंदर, मेंढक, सूर्य, शेर, यमराज।</li>
                  <li>• <strong>सारंग:</strong> शेर, छाता, हिरन, कमल, मोर, साँप, धनुष।</li>
                  <li>• <strong>कर:</strong> हाथ, टैक्स (Tax), किरण, सूँड।</li>
                  <li>• <strong>अंबर:</strong> आकाश, वस्त्र, एक इत्र।</li>
                </ul>
              </div>

              {/* Homophones */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-350 block mb-1">🗣️ समरूपी भिन्नार्थक शब्द (Homophones):</span>
                <ul className="space-y-1.5 text-slate-350 text-[11px]">
                  <li>• <strong>अली / आली:</strong> अली = भौंरा | आली = सखी</li>
                  <li>• <strong>कुल / कूल:</strong> कुल = वंश, सब (Total) | कूल = किनारा</li>
                  <li>• <strong>अनिल / अनल:</strong> अनिल = हवा | अनल = आग</li>
                  <li>• <strong>गृह / ग्रह:</strong> गृह = घर | ग्रह = नक्षत्र</li>
                  <li>• <strong>अंश / अंश:</strong> अंश = भाग | अंस = कंधा</li>
                  <li>• <strong>अम्बु / अम्ब:</strong> अम्बु = जल | अम्ब = माता</li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: ONE WORD SUBSTITUTIONS */}
        {activeTab === 'one-word' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 md:p-5 rounded-xl border border-white/5 space-y-3">
              <span className="font-bold text-emerald-350 block">✍️ वाक्यांश के लिए एक शब्द (One-Word Substitutions):</span>
              
              <div className="grid md:grid-cols-2 gap-4 text-[11px] text-slate-400">
                <div className="space-y-1.5">
                  <p>• जो सब कुछ जानता हो ➡️ <strong>सर्वज्ञ</strong></p>
                  <p>• जो बहुत कम जानता हो ➡️ <strong>अल्पज्ञ</strong></p>
                  <p>• जानने की तीव्र इच्छा ➡️ <strong>जिज्ञासा</strong></p>
                  <p>• मोक्ष की इच्छा रखने वाला ➡️ <strong>मुमुक्षु</strong></p>
                  <p>• जिसका कोई शत्रु न जन्मा हो ➡️ <strong>अजातशत्रु</strong></p>
                  <p>• जो जीता न जा सके ➡️ <strong>अजेय</strong></p>
                </div>
                <div className="space-y-1.5">
                  <p>• जंगल में लगने वाली आग ➡️ <strong>दावाग्नि / दावानल</strong></p>
                  <p>• पेट (जठर) में लगने वाली आग ➡️ <strong>जठराग्नि / जठरानल</strong></p>
                  <p>• समुद्र में लगने वाली आग ➡️ <strong>बड़वाग्नि / बड़वानल</strong></p>
                  <p>• जो पहले कभी न हुआ हो ➡️ <strong>अभूतपूर्व</strong></p>
                  <p>• फेंककर चलाया जाने वाला हथियार ➡️ <strong>अस्त्र</strong> (जैसे: भाला)</p>
                  <p>• हाथ में पकड़कर चलाया जाने वाला ➡️ <strong>शस्त्र</strong> (जैसे: तलवार)</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
