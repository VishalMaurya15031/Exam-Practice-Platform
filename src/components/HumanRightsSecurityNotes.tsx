"use client";
import React, { useState } from 'react';
import { Scale, ShieldAlert, HeartHandshake, Star } from 'lucide-react';

export default function HumanRightsSecurityNotes() {
  const [activeTab, setActiveTab] = useState<'rights' | 'security' | 'neighbors'>('rights');

  const tabs = [
    { id: 'rights', label: '⚖️ मानवाधिकार (Human Rights)', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'security', label: '🛡️ आंतरिक सुरक्षा व आतंकवाद', color: 'text-red-400 border-red-500/30 bg-red-500/5' },
    { id: 'neighbors', label: '🤝 भारत व पड़ोसी देश सम्बन्ध', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0b101b]/95 border border-sky-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-455 font-bold border border-sky-500/20">
          ⚖️
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">मानवाधिकार, सुरक्षा व पड़ोसी देश सम्बन्ध</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable & SI परीक्षा हेतु अति-संवेदनशील कानूनी व सुरक्षा विश्लेषण</p>
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

        {/* TAB 1: HUMAN RIGHTS */}
        {activeTab === 'rights' && (
          <div className="space-y-6 animate-fadeIn">
            {/* UDHR Details */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-305 block mb-1">🌍 सार्वभौमिक मानवाधिकार घोषणा (UDHR):</span>
                <p>• संयुक्त राष्ट्र महासभा (UNGA) द्वारा <strong>10 दिसंबर 1948</strong> को पेरिस में घोषणा पत्र स्वीकृत किया गया।</p>
                <p>• ⚠️ **मानवाधिकार दिवस:** हर वर्ष <strong>10 दिसंबर</strong> को मनाया जाता है।</p>
                <p>• इसमें कुल <strong>30 अनुच्छेद (Articles)</strong> शामिल हैं जो मूल मानवाधिकारों को परिभाषित करते हैं।</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-305 block mb-1">🇮🇳 राष्ट्रीय मानवाधिकार आयोग (NHRC):</span>
                <p>• **अधिनियम:** मानवाधिकार संरक्षण अधिनियम, <strong>1993</strong> (Protection of Human Rights Act 1993)। यह <strong>28 सितंबर 1993</strong> को लागू हुआ।</p>
                <p>• **स्थापना:** <strong>12 अक्टूबर 1993</strong> को NHRC का गठन हुआ।</p>
                <p>• **मुख्यालय:** नई दिल्ली।</p>
              </div>
            </div>

            {/* NHRC Structure and Appointments */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-4 text-xs">
              <h4 className="text-sm font-semibold text-sky-400">📋 NHRC की संरचना एवं नियुक्ति प्रक्रिया (Very Important for Exam)</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 text-slate-350">
                  <p>• <strong>अध्यक्ष योग्यता:</strong> सर्वोच्च न्यायालय का सेवानिवृत्त मुख्य न्यायाधीश (CJI) या सेवानिवृत्त न्यायाधीश।</p>
                  <p>• <strong>नियुक्ति:</strong> राष्ट्रपति द्वारा एक <strong>6-सदस्यीय उच्च स्तरीय समिति</strong> की सिफारिश पर की जाती है।
                    <ul className="pl-3 space-y-1 mt-1 text-[11px] text-slate-400">
                      <li>- 👤 **समिति के अध्यक्ष:** प्रधानमंत्री (PM)</li>
                      <li>- 👤 **सदस्य:** गृह मंत्री, लोकसभा अध्यक्ष, राज्यसभा के उपसभापति, दोनों सदनों (LS & RS) में विपक्ष के नेता।</li>
                    </ul>
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="p-3 bg-slate-950/60 rounded border border-white/5">
                    🔥 <strong>कार्यकाल (Tenure - 2019 संशोधन के बाद):</strong><br />
                    अध्यक्ष और सदस्यों का कार्यकाल <strong>3 वर्ष या 70 वर्ष की आयु</strong> (जो भी पहले हो) होता है। (नोट: 2019 से पहले यह 5 वर्ष था)।
                  </p>
                  <p className="p-2.5 bg-sky-500/5 text-sky-350 rounded text-[11px]">
                    📌 **राज्य मानवाधिकार आयोग (SHRC):** इसकी नियुक्ति राज्यपाल द्वारा की जाती है। इसकी सिफ़ारिशी समिति का अध्यक्ष राज्य का मुख्यमंत्री (CM) होता है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERNAL SECURITY & TERRORISM */}
        {activeTab === 'security' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Threats Vectors */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-red-305 block mb-1">⚠️ आंतरिक सुरक्षा खतरे (Internal Security Challenges):</span>
                <p>• <strong>1. नक्सलवाद / उग्र-वामपंथ (LWE):</strong> 1967 में पश्चिम बंगाल के **नक्सलबाड़ी** गाँव से शुरू हुआ। भारत के मध्य और पूर्वी राज्यों के जंगलों में सक्रिय है (रेड कॉरिडोर)।</p>
                <p>• <strong>2. पूर्वोत्तर का उग्रवाद:</strong> विभिन्न जनजातीय संघर्ष और अलगाववादी माँगें (जैसे नगालैंड, मणिपुर)।</p>
                <p>• <strong>3. आतंकवाद:</strong> सीमा पार से प्रायोजित आतंकवाद (जैसे जम्मू-कश्मीर) और स्लीपर सेल द्वारा शहरों में हमले।</p>
                <p className="p-2 bg-red-500/5 text-red-300 rounded text-[11px]">
                  📌 **UAPA (गैरकानूनी गतिविधियां रोकथाम अधिनियम):** मूलतः **1967** में पारित किया गया, जो वर्तमान में आतंकवाद से निपटने का प्रमुख कानून है।
                </p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-red-305 block mb-1">🔍 प्रमुख सुरक्षा व खुफिया एजेंसियाँ:</span>
                <ul className="space-y-2 text-slate-350">
                  <li>• **IB (इंटेलिजेंस ब्यूरो):** स्थापना 1887 में। देश के भीतर खुफिया जानकारी एकत्र करने वाली सबसे पुरानी घरेलू खुफिया एजेंसी।</li>
                  <li>• **RAW (अनुसंधान और विश्लेषण विंग):** स्थापना **1968** में। भारत की बाहरी खुफिया (External Intelligence) एजेंसी। इसके पहले प्रमुख **आर.एन. काव** थे।</li>
                  <li>• **NIA (राष्ट्रीय जांच एजेंसी):** स्थापना **2008** में (26/11 मुंबई हमलों के बाद) NIA अधिनियम 2008 के तहत। यह भारत की केंद्रीय आतंकवाद विरोधी जांच एजेंसी है।</li>
                  <li>• **NSG (राष्ट्रीय सुरक्षा गार्ड):** स्थापना **1984** में। इसे **'ब्लैक कैट कमांडो'** भी कहा जाता है। आतंकवाद विरोधी और विमान अपहरण रोधी अभियान।</li>
                </ul>
              </div>
            </div>

            {/* Paramilitary Forces (CAPF) Table */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-sm font-semibold text-red-400 mb-3">🛡️ केंद्रीय सशस्त्र पुलिस बल (CAPFs) और उनके सीमा सुरक्षा दायित्व</h4>
              <p className="text-slate-400 mb-2">ये बल गृह मंत्रालय (MHA) के अधीन कार्य करते हैं:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-red-300">
                      <th className="p-2">बल (Force)</th>
                      <th className="p-2">सुरक्षा दायित्व (Border / Task)</th>
                      <th className="p-2">विशेष तथ्य</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-350">
                    <tr>
                      <td className="p-2 font-bold">BSF (सीमा सुरक्षा बल)</td>
                      <td className="p-2">पाकिस्तान और बांग्लादेश सीमा</td>
                      <td className="p-2">स्थापना: 1 दिसंबर 1965।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">ITBP (भारत-तिब्बत सीमा पुलिस)</td>
                      <td className="p-2">भारत-चीन सीमा (हिमालयी दर्रे)</td>
                      <td className="p-2">स्थापना: 1962 (लद्दाख से अरुणाचल तक सुरक्षा)।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">SSB (सशस्त्र सीमा बल)</td>
                      <td className="p-2">भारत-नेपाल और भारत-भूटान सीमा</td>
                      <td className="p-2">स्थापना: 1963।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Assam Rifles (असम राइफल्स)</td>
                      <td className="p-2">भारत-म्यांमार सीमा</td>
                      <td className="p-2">स्थापना: **1835** (भारत का सबसे पुराना अर्धसैनिक बल, इसे **"पूर्वोत्तर का प्रहरी"** कहा जाता है)।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">CISF (केंद्रीय औद्योगिक सुरक्षा बल)</td>
                      <td className="p-2">हवाईअड्डे, मेट्रो स्टेशन, परमाणु संस्थान और सरकारी PSU</td>
                      <td className="p-2">स्थापना: 1969।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">CRPF (केंद्रीय रिजर्व पुलिस बल)</td>
                      <td className="p-2">नक्सल विरोधी अभियान, दंगा नियंत्रण (RAF विंग) व आंतरिक कानून व्यवस्था</td>
                      <td className="p-2">स्थापना: 1939। भारत का सबसे बड़ा सशस्त्र पुलिस बल।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INDIA AND NEIGHBORS */}
        {activeTab === 'neighbors' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Boundary details */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1">🗺️ भारत की स्थलीय सीमा व लंबाई:</span>
                <p>भारत कुल <strong>7 देशों</strong> के साथ स्थलीय सीमा साझा करता है (कुल लंबाई: 15,106.7 किमी):</p>
                <div className="space-y-1.5 pl-1 text-slate-400">
                  <p>🥇 <strong>बांग्लादेश:</strong> **4096.7 किमी** (सबसे लंबी सीमा - 5 राज्य: WB, असम, मेघालय, त्रिपुरा, मिजोरम)।</p>
                  <p>🥈 <strong>चीन:</strong> **3488 किमी** (मैकमोहन रेखा - 1914)।</p>
                  <p>🥉 <strong>पाकिस्तान:</strong> **3323 किमी** (रेडक्लिफ रेखा - 17 अगस्त 1947)।</p>
                  <p>🔹 <strong>नेपाल:</strong> **1751 किमी** | 🔹 <strong>म्यांमार:</strong> **1643 किमी** | 🔹 <strong>भूटान:</strong> **699 किमी**</p>
                  <p>🏅 <strong>अफगानिस्तान:</strong> **106 किमी** (सबसे छोटी सीमा - डूरंड रेखा 1893, POK क्षेत्र)।</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1">🤝 महत्वपूर्ण क्षेत्रीय संगठन व संबंध:</span>
                <p>• <strong>सार्क (SAARC):</strong> स्थापना **8 दिसंबर 1985** को। मुख्यालय: <strong>काठमांडू (नेपाल)</strong>। कुल 8 सदस्य देश हैं (भारत, पाकिस्तान, बांग्लादेश, नेपाल, श्रीलंका, भूटान, मालदीव, अफगानिस्तान)।</p>
                <p>• <strong>बिम्सटेक (BIMSTEC):</strong> बंगाल की खाड़ी के देशों का समूह। स्थापना: **1997** में। मुख्यालय: <strong>ढाका (बांग्लादेश)</strong>। सदस्य देश: 7 (भारत, नेपाल, भूटान, बांग्लादेश, श्रीलंका, म्यांमार, थाईलैंड)। यह सार्क के विकल्प के रूप में उभरा है।</p>
                <p className="p-2.5 bg-emerald-500/5 text-slate-300 rounded text-[11px]">
                  ⚡ **विशेष सीमा रेखा:** 3 बीघा कॉरिडोर (भारत-बांग्लादेश सीमा समझौता), सर क्रीक विवाद (कच्छ का रन, भारत-पाकिस्तान)।
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
