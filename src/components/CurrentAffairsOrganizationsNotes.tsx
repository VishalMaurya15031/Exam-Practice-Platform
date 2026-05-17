"use client";
import React, { useState } from 'react';
import { Globe, Trophy, Building, Star } from 'lucide-react';

export default function CurrentAffairsOrganizationsNotes() {
  const [activeTab, setActiveTab] = useState<'organizations' | 'current'>('organizations');

  const tabs = [
    { id: 'organizations', label: '🌐 अंतर्राष्ट्रीय संगठन (Organizations)', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'current', label: '📰 समसामयिकी / हॉट टॉपिक्स (Current Trends)', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#080d19]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-455 font-bold border border-indigo-500/20">
          🌐
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">अन्तर्राष्ट्रीय संगठन एवं समसामयिक विषय</h3>
          <p className="text-xs md:text-sm text-slate-400">संयुक्त राष्ट्र, वैश्विक मंच, तथा परीक्षाओं में सीधे पूछे जाने वाले हॉट करेंट अफेयर्स</p>
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

        {/* TAB 1: WORLD ORGANIZATIONS */}
        {activeTab === 'organizations' && (
          <div className="space-y-6 animate-fadeIn">
            {/* UN Details */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2 text-xs">
              <strong className="text-indigo-300 block text-sm">🇺🇳 संयुक्त राष्ट्र संघ (United Nations Organization - UNO)</strong>
              <p>• <strong>स्थापना:</strong> <strong>24 अक्टूबर 1945</strong> (इसीलिए 24 अक्टूबर को **यूएन दिवस** मनाया जाता है)। भारत भी इसके संस्थापक देशों में से एक था।</p>
              <p>• <strong>मुख्यालय:</strong> न्यूयॉर्क (मैनहट्टन द्वीप), अमेरिका। सदस्य देश: 193 (193वाँ देश: **दक्षिणी सूडान**)।</p>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                  <strong>👮 सुरक्षा परिषद (UNSC - दुनिया का पुलिसमैन):</strong>
                  <p className="text-slate-400 mt-1">इसमें कुल 15 सदस्य होते हैं: <strong>5 स्थाई सदस्य</strong> (अमेरिका, ब्रिटेन, चीन, फ्रांस, रूस) जिनके पास **वीटो (Veto)** शक्ति है; तथा <strong>10 अस्थाई सदस्य</strong> जो 2 वर्ष के कार्यकाल हेतु चुने जाते हैं।</p>
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5">
                  <strong>⚖️ अंतर्राष्ट्रीय न्यायालय (ICJ):</strong>
                  <p className="text-slate-400 mt-1">मुख्यालय: <strong>द हेग (नीदरलैंड)</strong>। कुल न्यायाधीश: <strong>15</strong>, जिनका कार्यकाल <strong>9 वर्ष</strong> होता है (यह संयुक्त राष्ट्र का एकमात्र अंग है जिसका मुख्यालय न्यूयॉर्क से बाहर है)।</p>
                </div>
              </div>
            </div>

            {/* Organizations Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-1">🏦 वाशिंगटन डी.सी. (अमेरिका) मुख्यालय वाले संगठन:</span>
                <p>• **IMF (अंतर्राष्ट्रीय मुद्रा कोष) और विश्व बैंक (World Bank):** स्थापना **1944** में ब्रेटन वुड्स सम्मेलन के दौरान हुई (इन्हें **'ब्रेटन वुड्स ट्विन्स'** भी कहते हैं)। ये दुनिया के वित्तीय ढांचे और ऋण आवंटन की रीढ़ हैं।</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-1">🇨🇭 जेनेवा (स्विट्जरलैंड) मुख्यालय वाले संगठन:</span>
                <p>• **WHO (विश्व स्वास्थ्य संगठन):** स्थापना **7 अप्रैल 1948** (7 अप्रैल को स्वास्थ्य दिवस मनाते हैं)।</p>
                <p>• **WTO (विश्व व्यापार संगठन):** स्थापना **1 जनवरी 1995** (GATT के स्थान पर)।</p>
                <p>• **ILO (अंतर्राष्ट्रीय श्रम संगठन):** स्थापना **1919** में वर्साय की संधि द्वारा।</p>
              </div>
            </div>

            {/* Other Groups */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3 text-xs">
              <span className="font-bold text-indigo-300 block">🌐 प्रमुख बहुपक्षीय मंच (Other Major Groups):</span>
              <div className="grid md:grid-cols-3 gap-4">
                <p>• <strong>BRICS (ब्रिक्स):</strong> सदस्य देश - ब्राजील, रूस, भारत, चीन, दक्षिण अफ्रीका। 2024 में नए सदस्य शामिल हुए (मिस्र, इथियोपिया, ईरान, UAE)।</p>
                <p>• <strong>G20:</strong> स्थापना 1999। 19 देशों + यूरोपीय संघ (EU) + <strong>अफ्रीकी संघ (AU - 2023 दिल्ली शिखर सम्मेलन में शामिल)</strong> का समूह है।</p>
                <p>• <strong>SCO (शंघाई सहयोग संगठन):</strong> मुख्यालय - बीजिंग (चीन)। स्थापना - 2001 में। भारत और पाकिस्तान **2017** में इसके पूर्ण सदस्य बने।</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CURRENT AFFAIRS & TRENDS */}
        {activeTab === 'current' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Scientific and Summit Highlights */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-355 block mb-1.5">🚀 भारत के ऐतिहासिक वैज्ञानिक मिशन:</span>
                <p>• <strong>चंद्रयान-3 (Chandrayaan-3):</strong> 14 जुलाई 2023 को लॉन्च हुआ। <strong>23 अगस्त 2023</strong> को चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक सॉफ्ट लैंडिंग करके भारत इतिहास रचने वाला विश्व का पहला देश बना।
                  <ul className="pl-3 space-y-1 mt-1 text-[11px] text-slate-400">
                    <li>- 📍 **लैंडिंग स्थल का नाम:** **'शिव शक्ति पॉइंट' (Shiv Shakti Point)**</li>
                    <li>- 📅 **राष्ट्रीय अंतरिक्ष दिवस:** **23 अगस्त** (घोषित)</li>
                  </ul>
                </p>
                <p className="mt-2">• <strong>आदित्य-L1 (Aditya-L1):</strong> 2 सितंबर 2023 को श्रीहरिकोटा से लॉन्च। भारत का पहला सौर वेधशाला मिशन, जो सूर्य का अध्ययन करने हेतु लाग्रेंज बिंदु 1 (L1) पर स्थापित किया गया है।</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-355 block mb-1.5">🤝 प्रमुख वैश्विक शिखर सम्मेलन (Latest Summits):</span>
                <p>• <strong>18वाँ G20 शिखर सम्मेलन 2023 (भारत):</strong> आयोजन नई दिल्ली के **'भारत मंडपम'** में हुआ।
                  <ul className="pl-3 space-y-0.5 mt-1 text-[11px] text-slate-400">
                    <li>- 👑 **अध्यक्षता:** भारत (प्रधानमंत्री नरेंद्र मोदी)</li>
                    <li>- 💡 **थीम:** "वसुधैव कुटुम्बकम्" (One Earth, One Family, One Future)</li>
                    <li>- 🔥 **विशेष घोषणा:** अफ्रीकी संघ (African Union) G20 का नया स्थायी सदस्य बना।</li>
                  </ul>
                </p>
                <p className="mt-2">• <strong>COP28 जलवायु शिखर सम्मेलन (2023):</strong> आयोजन **दुबई (UAE)** में हुआ, जिसमें फॉसिल फ्यूल (जीवाश्म ईंधन) के उपयोग से दूर जाने (Transitioning Away) का ऐतिहासिक संकल्प लिया गया।</p>
              </div>
            </div>

            {/* Quick Sports & Awards One-liner */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 text-xs text-slate-350 space-y-1">
              <strong className="text-amber-300 block mb-1">🏆 महत्वपूर्ण राष्ट्रीय खेल पुरस्कार:</strong>
              <p>• <strong>मेजर ध्यानचंद खेल रत्न पुरस्कार:</strong> भारत का सर्वोच्च खेल सम्मान है (पूर्व नाम: राजीव गांधी खेल रत्न, पुरस्कार राशि ₹25 लाख)।</p>
              <p>• <strong>अर्जुन पुरस्कार:</strong> उत्कृष्ट खेल प्रदर्शन के लिए प्रदान किया जाता है (पुरस्कार राशि ₹15 लाख)।</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
