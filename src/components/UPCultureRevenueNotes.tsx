"use client";
import React, { useState } from 'react';
import { Award, Shield, Landmark, LandmarkIcon, Star } from 'lucide-react';

export default function UPCultureRevenueNotes() {
  const [activeTab, setActiveTab] = useState<'culture' | 'revenue'>('culture');

  const tabs = [
    { id: 'culture', label: '🎭 शिक्षा, संस्कृति व परिवेश', color: 'text-amber-450 border-amber-500/30 bg-amber-500/5' },
    { id: 'revenue', label: '👮 पुलिस व राजस्व प्रशासनिक व्यवस्था', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0c0f1d]/95 border border-rose-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-455 font-bold border border-rose-500/20">
          ⭐
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">उत्तर प्रदेश विशेष (UP Special GK)</h3>
          <p className="text-xs md:text-sm text-slate-400">उ0प्र0 की शिक्षा संस्कृति, सामाजिक परिवेश, राजस्व तथा पुलिस प्रशासनिक व्यवस्था</p>
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

        {/* TAB 1: CULTURE, EDUCATION, ENVIRONMENT */}
        {activeTab === 'culture' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Folk Dances and Fairs */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-350 block mb-1">💃 उत्तर प्रदेश के लोकनृत्य व संगीत (Arts & Dances):</span>
                <ul className="space-y-1.5 text-slate-350">
                  <li>• **कथक:** उत्तर प्रदेश का एकमात्र **शास्त्रीय नृत्य** (Classical Dance)। नवाब वाजिद अली शाह के समय इसे अत्यधिक बढ़ावा मिला। प्रमुख घराने: लखनऊ और वाराणसी।</li>
                  <li>• **चरकुला नृत्य:** **ब्रजभूमि (मथुरा)** का प्रसिद्ध लोकनृत्य। इसमें महिला पिंजरेनुमा चरकुला (108 जलते दीपक) सिर पर रखकर संतुलन बनाते हुए नृत्य करती है।</li>
                  <li>• **कजरी:** **मिर्जापुर** का प्रसिद्ध सावन लोकगीत/नृत्य (वर्षा ऋतु)।</li>
                  <li>• **नौटंकी:** उत्तर प्रदेश का सबसे लोकप्रिय लोक नाट्य रूप।</li>
                  <li>• **आल्हा:** **बुंदेलखंड** क्षेत्र का वीर रस से भरा प्रसिद्ध लोकगीत।</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-350 block mb-1">🎡 प्रसिद्ध मेले व उत्सव (Fairs & Festivals):</span>
                <ul className="space-y-1.5 text-slate-350">
                  <li>• **महाकुंभ / कुंभ मेला:** प्रयागराज में गंगा, यमुना और अदृश्य सरस्वती के संगम पर हर **12 वर्ष** में महाकुंभ लगता है (यूनेस्को की अमूर्त धरोहर)।</li>
                  <li>• **बटेश्वर मेला:** **आगरा** में यमुना किनारे लगने वाला प्रसिद्ध **पशु मेला (ऊंट मेला)**।</li>
                  <li>• **नौचंदी मेला:** **मेरठ** में लगने वाला सांप्रदायिक सौहार्द का प्रतीक मेला।</li>
                  <li>• **देवा शरीफ मेला:** **बाराबंकी** में सूफी संत वारिस अली शाह की मजार पर।</li>
                  <li>• **खिचड़ी मेला:** गोरखपुर में मकर संक्रांति के अवसर पर।</li>
                </ul>
              </div>
            </div>

            {/* Education and Tribes */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-slate-100 block mb-1">🏫 उत्तर प्रदेश के ऐतिहासिक शैक्षणिक संस्थान:</span>
                <ul className="space-y-2 text-slate-350">
                  <li>• **इलाहाबाद विश्वविद्यालय (प्रयागराज):** स्थापना **1887** में। इसे **'पूर्व का ऑक्सफोर्ड' (Oxford of the East)** कहा जाता है। यह UP का सबसे पुराना केंद्रीय विश्वविद्यालय है।</li>
                  <li>• **बनारस हिंदू विश्वविद्यालय (BHU):** स्थापना **1916** में **पंडित मदन मोहन मालवीय** द्वारा।</li>
                  <li>• **अलीगढ़ मुस्लिम विश्वविद्यालय (AMU):** स्थापना **1920** में **सर सैयद अहमद खान** द्वारा (इससे पहले यह 1875 में एंग्लो-ओरिएंटल कॉलेज था)।</li>
                  <li>• **पहला संस्कृत कॉलेज:** वाराणसी में **1791 में जोनाथन डंकन** द्वारा स्थापित।</li>
                </ul>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-slate-100 block mb-1">🏹 सामाजिक परिवेश व जनजातियाँ (Tribes of UP):</span>
                <p>• उत्तर प्रदेश में अनुसूचित जनजाति (ST) का प्रतिशत कुल आबादी का लगभग <strong>0.6%</strong> है। सर्वाधिक ST आबादी वाला जिला <strong>सोनभद्र</strong> है।</p>
                <p className="mt-1">• <strong>थारू जनजाति:</strong> उत्तर प्रदेश (तराई क्षेत्र) की सबसे बड़ी जनजाति है।
                  <ul className="pl-3 space-y-1 mt-1 text-[11px] text-slate-400">
                    <li>- ⚠️ **दीपावली को शोक पर्व** के रूप में मनाते हैं।</li>
                    <li>- इनमें संयुक्त परिवार प्रथा पाई जाती है तथा ये **बजहर नामक त्योहार** मनाते हैं।</li>
                    <li>- उत्तर प्रदेश सरकार ने थारू जनजाति के विकास हेतु **लखीमपुर खीरी** में एक महाविद्यालय खोला है।</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REVENUE AND POLICE ADMINISTRATION */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* UP Police Details */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-4 text-xs">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pb-3 border-b border-white/5">
                <h4 className="text-sm md:text-base font-semibold text-rose-400 flex items-center gap-2">
                  🛡️ उत्तर प्रदेश पुलिस विभाग (UP Police Department)
                </h4>
                <div className="flex gap-2">
                  <span className="bg-rose-500/10 text-rose-350 py-1 px-2.5 rounded font-bold border border-rose-500/20 text-[10px]">
                    नारा: "सुरक्षा आपकी, संकल्प हमारा"
                  </span>
                  <span className="bg-slate-900 text-slate-300 py-1 px-2.5 rounded font-bold border border-white/5 text-[10px]">
                    मुख्यालय: सिग्नेचर बिल्डिंग, लखनऊ
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="font-bold text-slate-100 block mb-2">👮 पुलिस पदानुक्रम (Hierarchy - DGP to Constable):</span>
                  <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1 text-slate-350">
                    <p>🥇 <strong>DGP (पुलिस महानिदेशक):</strong> राज्य का सर्वोच्च पुलिस अधिकारी।</p>
                    <p>🥈 <strong>ADGP (अपर पुलिस महानिदेशक):</strong> पुलिस मुख्यालय/विशेष विंग प्रमुख।</p>
                    <p>🥉 <strong>IGP (पुलिस महानिरीक्षक):</strong> पुलिस ज़ोन (Zone) का प्रमुख।</p>
                    <p>🏅 <strong>DIG (पुलिस उप-महानिरीक्षक):</strong> पुलिस रेंज (Range) का प्रमुख।</p>
                    <p>👤 <strong>SSP / SP (वरिष्ठ पुलिस अधीक्षक / पुलिस अधीक्षक):</strong> जिले का पुलिस कप्तान।</p>
                    <p>👤 <strong>ASP / CO (अपर पुलिस अधीक्षक / सर्कल ऑफिसर):</strong> अनुमंडल प्रमुख।</p>
                    <p>👤 <strong>Inspector & Sub-Inspector (SI):</strong> थाना प्रभारी (SHO) / चौकी इंचार्ज।</p>
                    <p>👤 <strong>Head Constable & Constable:</strong> सुरक्षा बल की बुनियादी कड़ी।</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-rose-500/5 rounded border border-rose-500/10 space-y-2">
                    <strong className="text-rose-350 block">🔥 पुलिस कमिश्नरेट प्रणाली (Police Commissionerate):</strong>
                    <p>उत्तर प्रदेश के <strong>7 बड़े महानगरों</strong> (लखनऊ, कानपुर, गौतम बुद्ध नगर, वाराणसी, गाजियाबाद, आगरा, प्रयागराज) में कमिश्नरेट व्यवस्था लागू है। यहाँ पुलिस प्रमुख **कमीशनर (CP)** होता है, जिसके पास मजिस्ट्रेट शक्तियां (धारा 144 लगाना, लाठीचार्ज आदेश आदि) भी होती हैं।</p>
                  </div>

                  <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1 text-[11px] text-slate-400">
                    <strong>📌 UP सामान्य प्रशासनिक व्यवस्था:</strong>
                    <p>• कुल ज़िले: <strong>75</strong> | कुल मंडल (Divisions): <strong>18</strong> (सबसे नया अलीगढ़ है)।</p>
                    <p>• विधानसभा सीटें: <strong>403</strong> (देश में सर्वाधिक) | लोकसभा सीटें: <strong>80</strong></p>
                    <p>• विधान परिषद सीटें: <strong>100</strong> | राज्यसभा सीटें: <strong>31</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Board Details */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3 text-xs">
              <h4 className="text-sm md:text-base font-semibold text-rose-400">📈 राजस्व परिषद (Board of Revenue)</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p>• <strong>स्थापना:</strong> **1831** में प्रयागराज (इलाहाबाद) में की गई थी। यह उत्तर प्रदेश में भू-राजस्व (Land Revenue) का सर्वोच्च अपीलीय न्यायालय है।</p>
                  <p>• <strong>मुख्यालय का विभाजन (1947-48):</strong>
                    <ul className="pl-3 space-y-1 mt-1 text-[11px] text-slate-400">
                      <li>- **प्रशासनिक मुख्यालय:** **लखनऊ** (नीति निर्माण, भूलेख, लेखपाल स्थानांतरण आदि)।</li>
                      <li>- **न्यायिक मुख्यालय:** **प्रयागराज** (अपील, निगरानी, वाद-विवाद सुनवाई)।</li>
                    </ul>
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1.5">⚖️ राजस्व पदानुक्रम (Revenue Hierarchy):</span>
                  <div className="flex flex-wrap gap-1 text-[11px] justify-center text-center font-bold">
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">1. जिलाधिकारी (DM)</span>
                    <span className="text-rose-400 p-1.5">➡️</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">2. अपर जिलाधिकारी (ADM)</span>
                    <span className="text-rose-400 p-1.5">➡️</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">3. उप-जिलाधिकारी (SDM)</span>
                    <span className="text-rose-450 p-1.5">➡️</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">4. तहसीलदार</span>
                    <span className="text-rose-450 p-1.5">➡️</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">5. नायब तहसीलदार</span>
                    <span className="text-rose-450 p-1.5">➡️</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">6. कानूनगो (राजस्व निरीक्षक)</span>
                    <span className="text-rose-455 p-1.5">➡️</span>
                    <span className="bg-slate-900 p-1.5 rounded border border-white/5">7. लेखपाल (पटवारी)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
