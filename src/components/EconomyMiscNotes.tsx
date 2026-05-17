"use client";
import React, { useState } from 'react';
import { DollarSign, ShieldAlert, FileText, Star } from 'lucide-react';

export default function EconomyMiscNotes() {
  const [activeTab, setActiveTab] = useState<'demonet' | 'cyber' | 'gst'>('demonet');

  const tabs = [
    { id: 'demonet', label: '💸 विमुद्रीकरण (Demonetisation)', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' },
    { id: 'cyber', label: '🛡️ साइबर क्राइम (Cyber Crime)', color: 'text-red-400 border-red-500/30 bg-red-500/5' },
    { id: 'gst', label: '🧾 वस्तु एवं सेवा कर (GST)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0b0c16]/95 border border-amber-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-455 font-bold border border-amber-500/20">
          💸
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">विमुद्रीकरण, साइबर क्राइम एवं वस्तु व सेवा कर (GST)</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable & SI परीक्षा हेतु विशेष आर्थिक व तकनीकी अध्ययन</p>
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
      <div className="space-y-6 text-slate-300 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: DEMONETISATION */}
        {activeTab === 'demonet' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2 text-xs">
              <p><strong>विमुद्रीकरण (Demonetisation)</strong> का अर्थ है किसी प्रचलित मुद्रा इकाई को कानूनी रूप से बंद कर देना या उसे अवैध घोषित कर देना ताकि वह लेन-देन के लायक न रहे।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-350 block mb-1">⏳ भारत में विमुद्रीकरण का इतिहास:</span>
                <p>• <strong>प्रथम विमुद्रीकरण (1946):</strong> आजादी से ठीक पहले ब्रिटिश काल में ₹1,000, ₹5,000 और ₹10,000 के नोटों को बंद कर दिया गया था।</p>
                <p>• <strong>द्वितीय विमुद्रीकरण (1978):</strong> मोरारजी देसाई की जनता पार्टी सरकार के समय ₹1,000, ₹5,000 और ₹10,000 के नोटों को पुनः बंद कर दिया गया था।</p>
                <p className="p-2.5 bg-amber-500/10 text-slate-100 rounded font-semibold">
                  🔥 <strong>तृतीय विमुद्रीकरण (8 नवंबर 2016):</strong><br />
                  प्रधानमंत्री नरेंद्र मोदी सरकार द्वारा आधी रात से <strong>₹500 और ₹1,000</strong> के तत्कालीन नोटों को अवैध घोषित कर दिया गया।
                </p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-350 block mb-1">📈 विमुद्रीकरण के मुख्य प्रभाव व उद्देश्य:</span>
                <ul className="space-y-2 text-slate-350">
                  <li>• **काले धन पर नियंत्रण:** देश में अवैध रूप से जमा ब्लैक मनी को उजागर करना।</li>
                  <li>• **नकली नोट (Counterfeit) पर प्रहार:** आतंकवादी गतिविधियों व हवाला कारोबार को वित्तपोषित करने वाली नकली करेंसी को नष्ट करना।</li>
                  <li>• **डिजिटल लेनदेन का प्रसार:** नकदी (Cash) पर निर्भरता कम करके **UPI, नेटबैंकिंग, क्रेडिट/डेबिट कार्ड** और डिजिटल भुगतान को बढ़ावा देना।</li>
                  <li>• **कर जाल (Tax Net) का विस्तार:** अधिक लोगों को आयकर रिटर्न (ITR) फाइलिंग के दायरे में लाना।</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CYBER CRIME */}
        {activeTab === 'cyber' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Cyber crime details */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-red-305 block mb-1.5">💻 प्रमुख साइबर अपराध के प्रकार:</span>
                <ul className="space-y-2 text-slate-350">
                  <li>• <strong>फ़िशिंग (Phishing):</strong> जाली ईमेल, संदेश या लिंक भेजकर यूज़र की संवेदनशील जानकारी (बैंक पासवर्ड, क्रेडिट कार्ड पिन) चुराना।</li>
                  <li>• <strong>स्पूफिंग (Spoofing):</strong> अपनी पहचान छिपाकर किसी दूसरे (जैसे आपके बैंक या मित्र) के नाम से बात करना।</li>
                  <li>• <strong>रैनसमवेयर (Ransomware):</strong> यह एक मैलवेयर है जो यूज़र के कंप्यूटर डेटा को एन्क्रिप्ट (लॉक) कर देता है और खोलने के बदले पैसों (फिरौती) की मांग करता है (जैसे Wannacry, Petya)।</li>
                  <li>• <strong>साइबर स्टॉकिंग व बुलिंग:</strong> इंटरनेट पर किसी को परेशान करना या ब्लैकमेल करना।</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-red-305 block mb-1.5">⚖️ कानूनी ढांचा - सूचना प्रौद्योगिकी अधिनियम, 2000 (IT Act, 2000):</span>
                <p>• यह अधिनियम **9 जून 2000** को पारित हुआ तथा **17 अक्टूबर 2000** को पूरे देश में लागू हुआ।</p>
                <div className="space-y-1.5 mt-2 pl-1">
                  <p>• ⚠️ <strong>धारा 66A:</strong> अपमानजनक संदेश भेजने पर रोक (Shreya Singhal Case 2015 में सुप्रीम कोर्ट द्वारा इसे असंवैधानिक घोषित कर निरस्त कर दिया गया था)।</p>
                  <p>• 🔹 <strong>धारा 66C:</strong> पहचान चोरी (Identity Theft) के लिए सज़ा।</p>
                  <p>• 🔹 <strong>धारा 66D:</strong> कंप्यूटर का उपयोग कर धोखाधड़ी या कपटपूर्ण रूप धारण करने के लिए सज़ा।</p>
                  <p>• 🔹 <strong>धारा 67:</strong> अश्लील सामग्री को इलेक्ट्रॉनिक रूप में प्रकाशित करने के लिए सज़ा।</p>
                </div>
              </div>
            </div>

            {/* Quick Safety tip */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 text-xs flex justify-around text-center flex-wrap gap-4">
              <div>
                <span className="text-slate-400 block text-[11px]">🇮🇳 साइबर क्राइम रिपोर्टिंग पोर्टल</span>
                <strong className="text-red-400 text-sm">cybercrime.gov.in</strong>
              </div>
              <div className="border-l border-white/10 hidden md:block" />
              <div>
                <span className="text-slate-400 block text-[11px]">📞 राष्ट्रीय हेल्पलाइन नंबर</span>
                <strong className="text-red-400 text-sm">1930</strong>
              </div>
              <div className="border-l border-white/10 hidden md:block" />
              <div>
                <span className="text-slate-400 block text-[11px]">👮 नोडल सुरक्षा एजेंसी</span>
                <strong className="text-slate-200 text-xs">CERT-In (कंप्यूटर इमरजेंसी रिस्पांस टीम - इंडिया)</strong>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GOODS AND SERVICES TAX (GST) */}
        {activeTab === 'gst' && (
          <div className="space-y-6 animate-fadeIn">
            {/* GST details */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1">🧾 GST की सामान्य जानकारी (General Facts):</span>
                <p>• GST एक व्यापक, बहु-स्तरीय, गंतव्य-आधारित **अप्रत्यक्ष कर (Indirect Tax)** है, जिसने पुराने सभी वैट (VAT), सेवा कर, उत्पाद शुल्क को समाप्त कर दिया।</p>
                <p>• ⚠️ **लागू होने की तिथि:** <strong>1 जुलाई 2017</strong> (101वें संविधान संशोधन अधिनियम, 2016 द्वारा)।</p>
                <p>• **नारा:** "एक राष्ट्र, एक कर, एक बाजार" (One Nation, One Tax, One Market)।</p>
                <p>• **प्रकार:** 1. **CGST** (केंद्र सरकार), 2. **SGST** (राज्य सरकार), 3. **IGST** (एकीकृत - अंतर्राज्यीय व्यापार हेतु, अनुच्छेद 269A के तहत)।</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1">🏦 GST काउंसिल और कर दरें (GST Council & Brackets):</span>
                <p>• **GST काउंसिल:** संविधान के **अनुच्छेद 279A** के तहत गठित एक संवैधानिक निकाय है। इसके अध्यक्ष **केंद्रीय वित्त मंत्री** होते हैं।</p>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                  <strong>कर की दरें (Tax Slabs - 4 मुख्य दरें):</strong>
                  <div className="grid grid-cols-4 gap-2 text-center font-bold text-slate-100 mt-1.5 text-[11px]">
                    <span className="bg-emerald-500/10 p-1.5 rounded">5%</span>
                    <span className="bg-emerald-500/10 p-1.5 rounded">12%</span>
                    <span className="bg-emerald-500/10 p-1.5 rounded">18%</span>
                    <span className="bg-emerald-500/10 p-1.5 rounded">28%</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">• **GST के दायरे से बाहर:** कच्चा तेल, डीजल, पेट्रोल, प्राकृतिक गैस, विमानन टरबाइन ईंधन (ATF), बिजली, तथा मानव उपभोग के लिए अल्कोहल (शराब)।</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
