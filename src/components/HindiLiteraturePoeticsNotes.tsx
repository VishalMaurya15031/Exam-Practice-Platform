"use client";
import React, { useState } from 'react';
import { Award, Heart, Book, Layers, Star } from 'lucide-react';

export default function HindiLiteraturePoeticsNotes() {
  const [activeTab, setActiveTab] = useState<'poetics' | 'literature' | 'proverbs'>('poetics');

  const tabs = [
    { id: 'poetics', label: '🎭 रस, छन्द व अलंकार', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'literature', label: '🏆 प्रसिद्ध कवि, रचनाएँ व पुरस्कार', color: 'text-yellow-450 border-yellow-500/30 bg-yellow-500/5' },
    { id: 'proverbs', label: '💬 मुहावरे एवं लोकोक्तियां', color: 'text-emerald-405 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#090a18]/95 border border-rose-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-350">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-455 font-bold border border-rose-500/20">
          🎭
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">काव्यशास्त्र, हिन्दी साहित्य व पुरस्कार</h3>
          <p className="text-xs md:text-sm text-slate-400">रस के स्थायी भाव, छन्द मात्राएं, अलंकार लक्षण, कालजयी साहित्यकार, रचनाएं व साहित्यिक सम्मान</p>
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

        {/* TAB 1: RASA, CHHANDA, ALANKAR */}
        {activeTab === 'poetics' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-3 gap-4">
              
              {/* Rasa */}
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1">
                <strong className="text-rose-350 block">🎭 रस (Rasa - 9 मुख्य रस):</strong>
                <p>• भरतमुनि ने अपने ग्रन्थ **नाट्यशास्त्र** में केवल <strong>8 रसों</strong> का वर्णन किया है (शांत रस को नहीं माना)।</p>
                <div className="text-[10px] text-slate-450 mt-1 bg-slate-950/60 p-2 rounded">
                  <strong>स्थायी भाव (Exam Special):</strong>
                  <p>1. शृंगार ➡️ **रति (प्रेम)** (रसराज)</p>
                  <p>2. करुण ➡️ **शोक**</p>
                  <p>3. वीर ➡️ **उत्साह**</p>
                  <p>4. रौद्र ➡️ **क्रोध**</p>
                  <p>5. शांत ➡️ **निर्वेद** (9वाँ रस)</p>
                </div>
              </div>

              {/* Chhanda */}
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1">
                <strong className="text-rose-350 block">🎼 छन्द (Chhanda):</strong>
                <p>• <strong>चौपाई:</strong> मात्रिक सम छन्द। 4 चरण, प्रत्येक में <strong>16-16 मात्राएँ</strong> होती हैं।</p>
                <p>• <strong>दोहा:</strong> अर्धसम मात्रिक। इसके विषम चरणों (1, 3) में <strong>13 मात्राएँ</strong> तथा सम चरणों (2, 4) में <strong>11 मात्राएँ</strong> होती हैं।</p>
                <p className="p-2 bg-rose-500/5 text-rose-300 rounded text-[10px]">
                  💡 <strong>सोरठा:</strong> दोहे का बिल्कुल उल्टा होता है (विषम में 11, सम में 13 मात्राएँ)।
                </p>
              </div>

              {/* Alankar */}
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1">
                <strong className="text-rose-350 block">✨ अलंकार (Figures of Speech):</strong>
                <p>• **यमक:** एक शब्द बार-बार आए, अर्थ अलग हों (कनक कनक ते सौ गुनी...)।</p>
                <p>• **श्लेष:** एक शब्द के कई अर्थ चिपके हों (रहिमन पानी राखिए...)।</p>
                <p>• **उपमा:** समानता/तुलना (सी, सा, से, सरिस - पीपर पात सरिस मन डोला)।</p>
                <p>• **रूपक:** अभेद आरोप (चरन कमल बंदौ हरिराई)।</p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: LITERATURE AND AWARDS */}
        {activeTab === 'literature' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Authors & Books */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-yellow-305 block mb-1">✍️ कालजयी कवि व उनकी प्रसिद्ध रचनाएँ:</span>
                <ul className="space-y-1.5 text-slate-350 text-[11px]">
                  <li>• <strong>कबीरदास:</strong> बीजक (साखी, सबद, रमैनी - सधुक्कड़ी/पंचमेल खिचड़ी भाषा)।</li>
                  <li>• <strong>तुलसीदास:</strong> रामचरितमानस (अवधी भाषा, **7 काण्ड**), विनयपत्रिका (ब्रजभाषा)।</li>
                  <li>• <strong>सूरदास:</strong> सूरसागर, सूरसारावली, साहित्य लहरी (ब्रजभाषा)।</li>
                  <li>• <strong>जयशंकर प्रसाद:</strong> कामायनी (छायावादी महाकाव्य), कंकाल, तितली, आंसू, लहर।</li>
                  <li>• <strong>मुंशी प्रेमचंद:</strong> गोदान, गबन, सेवा सदन, कर्मभूमि, मानसरोवर।</li>
                  <li>• <strong>महादेवी वर्मा:</strong> यामा, नीरजा, दीपशिखा, अतीत के चलचित्र।</li>
                </ul>
              </div>

              {/* Hindi Awards */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-yellow-305 block mb-1">🏆 हिन्दी भाषा के सर्वोच्च साहित्यिक पुरस्कार:</span>
                
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1.5 text-[11px]">
                  <strong>👑 ज्ञानपीठ पुरस्कार (Hindi Winners):</strong>
                  <p>• **1968:** सुमित्रानंदन पंत (चिदंबरा हेतु) - *हिन्दी भाषा का पहला पुरस्कार*।</p>
                  <p>• **1972:** रामधारी सिंह दिनकर (उर्वशी)।</p>
                  <p>• **1982:** महादेवी वर्मा (यामा) - *प्रथम महिला विजेती*।</p>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1 text-[11px] mt-2">
                  <p>• <strong>साहित्य अकादमी पुरस्कार:</strong> प्रथम विजेता **माखनलाल चतुर्वेदी** (1955 में, **हिमतरंगिणी** काव्य हेतु)।</p>
                  <p>• <strong>व्यास सम्मान:</strong> प्रथम विजेता **डॉ. रामविलास शर्मा** (1991 में, भारत के प्राचीन भाषा परिवार और हिन्दी हेतु)।</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: PROVERBS AND IDIOMS */}
        {activeTab === 'proverbs' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2.5">
              <span className="font-bold text-emerald-350 block mb-1">💬 मुहावरे और लोकोक्तियों में अंतर व परीक्षा उदाहरण:</span>
              <p>• <strong>मुहावरा:</strong> यह एक **वाक्यांश (Phrase)** होता है, जिसका स्वतंत्र प्रयोग नहीं हो सकता (इसके अंत में प्रायः **'ना'** आता है - जैसे: नौ दो ग्यारह होना)।</p>
              <p>• <strong>लोकोक्ति:</strong> यह एक **पूर्ण वाक्य (Sentence)** होती है, जो लोक अनुभव पर आधारित होती है तथा स्वतंत्र रूप से प्रयुक्त की जा सकती है (जैसे: अधजल गगरी छलकत जाए)।</p>
              
              <div className="grid grid-cols-2 gap-3 text-[11px] bg-slate-950/40 p-3 rounded border border-white/5 text-slate-400 mt-2">
                <div>
                  <strong className="text-emerald-450">🎯 प्रसिद्ध मुहावरे:</strong>
                  <p className="mt-1">• **अंगूठा दिखाना** ➡️ ऐन वक्त पर मना करना।</p>
                  <p>• **गागर में सागर भरना** ➡️ थोड़े शब्दों में बहुत अधिक कह देना।</p>
                  <p>• **नौ दो ग्यारह होना** ➡️ तुरंत भाग जाना।</p>
                </div>
                <div>
                  <strong className="text-emerald-450">🎯 प्रसिद्ध लोकोक्तियाँ:</strong>
                  <p className="mt-1">• **अधजल गगरी छलकत जाए** ➡️ कम ज्ञान वाले का अधिक दिखावा करना।</p>
                  <p>• **काठ की हांडी बार-बार नहीं चढ़ती** ➡️ छल-कपट का व्यवहार हमेशा नहीं चलता।</p>
                  <p>• **अकेला चना भाड़ नहीं फोड़ सकता** ➡️ एक अकेला व्यक्ति बड़ा काम नहीं कर सकता।</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
