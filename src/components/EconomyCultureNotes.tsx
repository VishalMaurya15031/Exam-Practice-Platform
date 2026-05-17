"use client";
import React, { useState } from 'react';
import { 
  Briefcase, Landmark, BookOpen, Music, Award, Compass, Star, TrendingUp 
} from 'lucide-react';

export default function EconomyCultureNotes() {
  const [activeSection, setActiveSection] = useState<'economy' | 'culture'>('economy');
  const [economyTab, setEconomyTab] = useState<'sectors' | 'agriculture' | 'rbi' | 'planning' | 'challenges'>('sectors');
  const [cultureTab, setCultureTab] = useState<'dances' | 'music' | 'architecture' | 'literature' | 'symbols'>('dances');

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0b1329]/95 border border-purple-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Dynamic Purple/Indigo Glow Effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">
            📊
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-50">भारतीय अर्थव्यवस्था एवं संस्कृति (Economy & Culture)</h3>
            <p className="text-xs md:text-sm text-slate-400">UP Police कांस्टेबल एवं SI परीक्षाओं के लिए विशेष टू-इन-वन विस्तृत नोट्स</p>
          </div>
        </div>

        {/* Section Selector */}
        <div className="flex bg-slate-950/60 p-1.5 rounded-xl border border-white/5 self-start md:self-center">
          <button
            onClick={() => setActiveSection('economy')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all duration-300 flex items-center gap-2 ${
              activeSection === 'economy'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📉 अर्थव्यवस्था (Economy)
          </button>
          <button
            onClick={() => setActiveSection('culture')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all duration-300 flex items-center gap-2 ${
              activeSection === 'culture'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🎭 संस्कृति (Culture)
          </button>
        </div>
      </div>

      {/* ECONOMY SECTION CONTENT */}
      {activeSection === 'economy' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Economy Sub-tabs */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
            <button
              onClick={() => setEconomyTab('sectors')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                economyTab === 'sectors' 
                  ? 'text-purple-400 border-purple-500/30 bg-purple-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🏢 प्रमुख क्षेत्र व उद्योग
            </button>
            <button
              onClick={() => setEconomyTab('agriculture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                economyTab === 'agriculture' 
                  ? 'text-purple-400 border-purple-500/30 bg-purple-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🌱 कृषि और क्रांतियां
            </button>
            <button
              onClick={() => setEconomyTab('rbi')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                economyTab === 'rbi' 
                  ? 'text-purple-400 border-purple-500/30 bg-purple-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🏦 बैंकिंग व्यवस्था व RBI
            </button>
            <button
              onClick={() => setEconomyTab('planning')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                economyTab === 'planning' 
                  ? 'text-purple-400 border-purple-500/30 bg-purple-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              📅 आर्थिक नियोजन व GST
            </button>
            <button
              onClick={() => setEconomyTab('challenges')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                economyTab === 'challenges' 
                  ? 'text-purple-400 border-purple-500/30 bg-purple-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              ⚠️ आर्थिक चुनौतियाँ
            </button>
          </div>

          <div className="text-slate-300 leading-relaxed text-xs md:text-sm space-y-4">
            
            {/* Economy Tab 1: Sectors & Industries */}
            {economyTab === 'sectors' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5">
                  <p className="text-slate-350 mb-4">
                    भारतीय अर्थव्यवस्था एक <strong>मिश्रित अर्थव्यवस्था (Mixed Economy)</strong> है, जहाँ सार्वजनिक (सरकारी) और निजी (प्राइवेट) दोनों क्षेत्र साथ मिलकर कार्य करते हैं।
                  </p>

                  <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-3">🛠️ अर्थव्यवस्था के प्रमुख क्षेत्र (Sectors of Economy)</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-slate-950/60 rounded-lg border border-white/5 space-y-2">
                      <span className="text-emerald-400 font-bold text-xs md:text-sm block">1. प्राथमिक क्षेत्र (Primary Sector)</span>
                      <p className="text-slate-400 text-xs">प्राकृतिक संसाधनों से सीधे जुड़े कार्य।</p>
                      <p className="text-xs"><strong>उदाहरण:</strong> कृषि, पशुपालन, वानिकी (Forestry), मत्स्य पालन, खनन व उत्खनन।</p>
                      <p className="text-[11px] text-amber-400 bg-amber-500/5 px-2 py-1 rounded">📌 भारत की सबसे बड़ी रोजगार आबादी आज भी इसी क्षेत्र पर निर्भर है।</p>
                    </div>

                    <div className="p-3 bg-slate-950/60 rounded-lg border border-white/5 space-y-2">
                      <span className="text-blue-400 font-bold text-xs md:text-sm block">2. द्वितीयक क्षेत्र (Secondary Sector)</span>
                      <p className="text-slate-400 text-xs">औद्योगिक क्षेत्र। प्राथमिक क्षेत्र के उत्पादों को प्रसंस्कृत कर नया रूप दिया जाता है।</p>
                      <p className="text-xs"><strong>उदाहरण:</strong> विनिर्माण (Manufacturing), कपड़ा उद्योग, भारी कारखाने, बिजली व गैस आपूर्ति, निर्माण कार्य।</p>
                    </div>

                    <div className="p-3 bg-slate-950/60 rounded-lg border border-white/5 space-y-2">
                      <span className="text-purple-400 font-bold text-xs md:text-sm block">3. तृतीयक क्षेत्र (Tertiary Sector)</span>
                      <p className="text-slate-400 text-xs">सेवा क्षेत्र (Service Sector)। यह वस्तुओं का उत्पादन नहीं करता बल्कि सेवाएं प्रदान करता है।</p>
                      <p className="text-xs"><strong>उदाहरण:</strong> बैंकिंग, शिक्षा, स्वास्थ्य, परिवहन, पर्यटन, संचार, आईटी (IT)।</p>
                      <p className="text-[11px] text-emerald-400 bg-emerald-500/5 px-2 py-1 rounded">📌 भारत की जीडीपी (GDP) में सर्वाधिक योगदान इसी क्षेत्र का है।</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5">
                  <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-3">🏭 भारत के प्रमुख औद्योगिक नगर व उद्योग</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-slate-100 block mb-1">🏢 जमशेदपुर (झारखंड)</strong>
                      <span className="text-slate-400">लौह एवं इस्पात उद्योग (TISCO की स्थापना यहाँ 1907 में की गई थी)। इसे 'टाटानगर' भी कहते हैं।</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-slate-100 block mb-1">🧥 कानपुर (उत्तर प्रदेश)</strong>
                      <span className="text-slate-400">चमड़ा उद्योग व सूती वस्त्र उद्योग। इसे <strong>'उत्तर भारत का मैनचेस्टर'</strong> कहा जाता है।</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-slate-100 block mb-1">💎 सूरत (गुजरात)</strong>
                      <span className="text-slate-400">वस्त्र उद्योग (Textile) और हीरा तराशने/कटिंग (Diamond Polishing) का विश्व प्रसिद्ध केंद्र।</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-slate-100 block mb-1">💻 बेंगलुरु (कर्नाटक)</strong>
                      <span className="text-slate-400">सूचना प्रौद्योगिकी (IT) का मुख्य केंद्र। इसे भारत की <strong>'सिलिकॉन वैली'</strong> कहा जाता है।</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Economy Tab 2: Agriculture & Revolutions */}
            {economyTab === 'agriculture' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-2">🌾 प्रमुख फसलें और उत्पादक राज्य</h4>
                    <ul className="space-y-1.5 text-xs md:text-sm pl-2">
                      <li>🔸 <strong>गेहूँ (Wheat):</strong> उत्तर प्रदेश (सबसे बड़ा उत्पादक), पंजाब, हरियाणा।</li>
                      <li>🔸 <strong>धान (चावल):</strong> पश्चिम बंगाल (सबसे बड़ा उत्पादक), उत्तर प्रदेश, आंध्र प्रदेश।</li>
                      <li>🔸 <strong>कपास (Cotton):</strong> गुजरात (सबसे बड़ा उत्पादक), महाराष्ट्र। (कपास के लिए <strong>काली मिट्टी/रेगुर</strong> सर्वोत्तम होती है)।</li>
                      <li>🔸 <strong>गन्ना (Sugarcane):</strong> उत्तर प्रदेश (सबसे बड़ा उत्पादक), महाराष्ट्र।</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-3">🚀 महत्वपूर्ण कृषि क्रांतियाँ (Agricultural Revolutions)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1">
                        <strong className="text-emerald-400 block">🟢 हरित क्रांति (Green Revolution) - 1966-67</strong>
                        <p className="text-slate-350">उद्देश्य: खाद्यान्न (विशेष रूप से गेहूँ व चावल) उत्पादन बढ़ाना। उच्च उपज देने वाले बीजों (HYV Seeds) का प्रयोग हुआ।</p>
                        <p className="text-slate-400">👨‍🔬 भारत में जनक: <strong>डॉ. एम. एस. स्वामीनाथन</strong> | विश्व में जनक: डॉ. नॉर्मन बोरलॉग।</p>
                      </div>

                      <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1">
                        <strong className="text-slate-100 block">⚪ श्वेत क्रांति (White Revolution) - 'ऑपरेशन फ्लड'</strong>
                        <p className="text-slate-350">उद्देश्य: दुग्ध (दूध) उत्पादन को तीव्र गति से बढ़ाना।</p>
                        <p className="text-slate-400">👨‍🔬 जनक: <strong>डॉ. वर्गीज कुरियन</strong> (इन्हें भारत का 'मिल्कमैन' कहा जाता है)।</p>
                      </div>

                      <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1">
                        <strong className="text-blue-400 block">🔵 नीली क्रांति (Blue Revolution)</strong>
                        <p className="text-slate-350">मत्स्य (मछली) पालन और समुद्री खाद्य उत्पादों के विकास से संबंधित।</p>
                      </div>

                      <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1">
                        <strong className="text-yellow-400 block">🟡 पीली क्रांति (Yellow Revolution)</strong>
                        <p className="text-slate-350">तिलहन (Oilseeds) जैसे सरसों, तिल, सूरजमुखी आदि के उत्पादन को आत्मनिर्भर बनाने हेतु।</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Economy Tab 3: RBI & Banking */}
            {economyTab === 'rbi' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
                  <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    🦁 भारतीय रिज़र्व बैंक (Reserve Bank of India - RBI)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300">
                    भारत में बैंकिंग और मौद्रिक प्रणाली को नियंत्रित करने वाला केंद्रीय बैंक है।
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                      <strong className="text-purple-300 block mb-1">📅 स्थापना व राष्ट्रीयकरण</strong>
                      <p>• स्थापना: <strong>1 अप्रैल 1935</strong> को (हिल्टन यंग हॉपकिंस आयोग की सिफारिश पर)।</p>
                      <p className="mt-1">• राष्ट्रीयकरण: <strong>1 जनवरी 1949</strong> को किया गया।</p>
                      <p className="mt-1">• मुख्यालय: <strong>मुंबई</strong> (1937 में कोलकाता से बदला गया)।</p>
                    </div>

                    <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                      <strong className="text-purple-300 block mb-1">🏦 बैंकों का बैंक व नियामक</strong>
                      <p>• यह भारत का एकमात्र नोट जारी करने वाला प्राधिकरण है।</p>
                      <p className="mt-1 font-semibold text-amber-400 bg-amber-500/5 p-1 rounded text-[11px]">
                        ⚠️ ₹1 के नोट व सिक्कों को छोड़कर (जिन्हें वित्त मंत्रालय जारी करता है और वित्त सचिव के हस्ताक्षर होते हैं) सभी नोटों पर RBI गवर्नर के हस्ताक्षर होते हैं।
                      </p>
                    </div>

                    <div className="p-3 bg-slate-950/60 rounded border border-white/5">
                      <strong className="text-purple-300 block mb-1">📈 मौद्रिक नीति (Monetary Policy)</strong>
                      <p>देश में तरलता, महंगाई और मंदी को नियंत्रित करने के लिए दरें तय करता है:</p>
                      <p className="mt-1 text-slate-400">• <strong>रेपो रेट (Repo Rate):</strong> वह दर जिस पर व्यापारिक बैंक RBI से कर्ज लेते हैं।</p>
                      <p>• <strong>रिवर्स रेपो रेट:</strong> वह दर जिस पर बैंक अपनी अतिरिक्त जमा राशि RBI के पास रखते हैं।</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Economy Tab 4: Economic Planning, Five-Year Plans & GST */}
            {economyTab === 'planning' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
                  <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-2">📅 योजना आयोग, पंचवर्षीय योजनाएँ और नीति आयोग</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-2">
                      <strong className="text-slate-100 block">📊 महत्वपूर्ण पंचवर्षीय योजनाएँ:</strong>
                      <ul className="space-y-1 text-slate-350">
                        <li>• <strong>प्रथम पंचवर्षीय योजना (1951-56):</strong> 'हेरोड-डोमर मॉडल' पर आधारित। मुख्य ध्यान: <strong>कृषि विकास</strong>।</li>
                        <li>• <strong>द्वितीय पंचवर्षीय योजना (1956-61):</strong> 'पी.सी. महालनोबिस मॉडल' पर आधारित। मुख्य ध्यान: <strong>भारी उद्योगों का तीव्र विकास</strong> (जैसे भिलाई, राउरकेला इस्पात संयंत्र)।</li>
                        <li>• <strong>पाँचवीं पंचवर्षीय योजना (1974-78):</strong> इसमें ऐतिहासिक <strong>"गरीबी हटाओ"</strong> का नारा दिया गया था।</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-2">
                      <strong className="text-purple-300 block">💡 नीति आयोग (NITI Aayog):</strong>
                      <p>स्थापना: <strong>1 जनवरी 2015</strong> को योजना आयोग को समाप्त करके की गई।</p>
                      <p>• पूरा नाम: National Institution for Transforming India.</p>
                      <p>• प्रकृति: यह भारत सरकार के <strong>'थिंक टैंक'</strong> (Think Tank) के रूप में कार्य करता है जो सहकारी संघवाद को बढ़ावा देता है।</p>
                      <p>• अध्यक्ष: भारत के <strong>प्रधानमंत्री</strong> इसके पदेन (Ex-officio) अध्यक्ष होते हैं।</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                  <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-2">💸 प्रत्यक्ष कर, अप्रत्यक्ष कर व वस्तु एवं सेवा कर (GST)</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-slate-200 block mb-1">👤 प्रत्यक्ष कर (Direct Tax)</strong>
                      <p className="text-slate-400">यह सीधे उसी व्यक्ति पर लगाया जाता है जिसकी आय/संपत्ति होती है। इसे स्थानांतरित नहीं किया जा सकता।</p>
                      <p className="mt-1 font-semibold text-purple-300">उदाहरण: आयकर (Income Tax), कॉर्पोरेट कर, संपत्ति कर।</p>
                    </div>
                    <div className="p-3 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-slate-200 block mb-1">🛍️ अप्रत्यक्ष कर (Indirect Tax)</strong>
                      <p className="text-slate-400">यह वस्तुओं और सेवाओं पर लगाया जाता है। अंतिम उपभोक्ता इसे अप्रत्यक्ष रूप से चुकाता है।</p>
                      <p className="mt-1 font-semibold text-purple-300">उदाहरण: GST, सीमा शुल्क (Customs Duty), उत्पाद शुल्क।</p>
                    </div>
                    <div className="p-3 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-purple-300 block mb-1">🏷️ GST (Goods & Services Tax)</strong>
                      <p>• भारत का सबसे बड़ा अप्रत्यक्ष कर सुधार। लागू होने की तिथि: <strong>1 जुलाई 2017</strong> (इसीलिए 1 जुलाई को GST दिवस मनाते हैं)।</p>
                      <p className="mt-1">• <strong>101वें संविधान संशोधन अधिनियम</strong> द्वारा लागू किया गया।</p>
                      <p className="mt-1 font-semibold text-slate-100 bg-purple-500/10 px-1 py-0.5 rounded text-center">नारा: "एक राष्ट्र, एक कर" (One Nation, One Tax)</p>
                      <p className="mt-1">• मुख्य दरें (Slabs): <strong>0%, 5%, 12%, 18%, 28%</strong>।</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Economy Tab 5: Economic Challenges */}
            {economyTab === 'challenges' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
                  <h4 className="text-sm md:text-base font-semibold text-red-400 mb-2">⚠️ भारत की प्रमुख आर्थिक समस्याएँ</h4>
                  
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="p-3 bg-slate-950/50 rounded border border-red-500/10 space-y-2">
                      <strong className="text-slate-100 block">👥 बेरोजगारी (Unemployment) के प्रकार:</strong>
                      <ul className="space-y-2 pl-2">
                        <li>• <strong>मौसमी बेरोजगारी:</strong> कृषि क्षेत्र में पाई जाती है, जहाँ साल के कुछ महीनों (फसल बोने व काटने के समय) में काम मिलता है और बाकी समय खाली बैठना पड़ता है।</li>
                        <li>• <strong>छिपी / प्रच्छन्न बेरोजगारी (Disguised Unemployment):</strong> यह कृषि में सबसे अधिक दिखती है। जब किसी काम में आवश्यकता से अधिक लोग लगे हों। (यदि कुछ लोगों को हटा भी दिया जाए, तो कुल उत्पादन पर कोई नकारात्मक फर्क नहीं पड़ता)।</li>
                        <li>• <strong>शिक्षित बेरोजगारी:</strong> योग्यता और डिग्री होने के बावजूद बाजार में पर्याप्त रोजगार न मिलना।</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                        <strong className="text-slate-100 block mb-1">📉 गरीबी (Poverty):</strong>
                        <p className="text-xs text-slate-400">जब कोई व्यक्ति जीवन की बुनियादी जरूरतें (भोजन, कपड़ा, मकान, शिक्षा, स्वास्थ्य) पूरी करने में असमर्थ होता है। भारत में गरीबी का आकलन नीति आयोग के कार्यबल द्वारा <strong>उपभोग व्यय</strong> के आधार पर किया जाता है।</p>
                      </div>
                      <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                        <strong className="text-slate-100 block mb-1">💸 महंगाई / मुद्रास्फीति (Inflation):</strong>
                        <p className="text-xs text-slate-400">जब बाजार में वस्तुओं और सेवाओं की कीमतें लगातार बढ़ती हैं और मुद्रा (पैसों) की क्रय शक्ति (Purchasing Power) कम हो जाती है।</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* CULTURE SECTION CONTENT */}
      {activeSection === 'culture' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Culture Sub-tabs */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
            <button
              onClick={() => setCultureTab('dances')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                cultureTab === 'dances' 
                  ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🕺 शास्त्रीय नृत्य (8 Dances)
            </button>
            <button
              onClick={() => setCultureTab('music')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                cultureTab === 'music' 
                  ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🎵 संगीत और वाद्य यंत्र
            </button>
            <button
              onClick={() => setCultureTab('architecture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                cultureTab === 'architecture' 
                  ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🏛️ स्थापत्य कला व UNESCO
            </button>
            <button
              onClick={() => setCultureTab('literature')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                cultureTab === 'literature' 
                  ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              📚 भाषाएँ और प्रसिद्ध साहित्य
            </button>
            <button
              onClick={() => setCultureTab('symbols')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                cultureTab === 'symbols' 
                  ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' 
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🦁 राष्ट्रीय प्रतीक
            </button>
          </div>

          <div className="text-slate-300 leading-relaxed text-xs md:text-sm space-y-4">
            
            {/* Culture Tab 1: Classical Dances */}
            {cultureTab === 'dances' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5">
                  <h4 className="text-sm md:text-base font-semibold text-indigo-400 mb-3">🕺 भारतीय शास्त्रीय नृत्य (8 Classical Dances)</h4>
                  <p className="text-xs text-slate-400 mb-3">संगीत नाटक अकादमी के अनुसार भारत में <strong>8 मुख्य शास्त्रीय नृत्य</strong> स्वीकृत हैं। परीक्षाओं में सीधे राज्य से सुमेलित करने को पूछा जाता है:</p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-white/10 bg-slate-950/40 text-indigo-300">
                          <th className="p-2.5 font-semibold">नृत्य का नाम</th>
                          <th className="p-2.5 font-semibold">संबंधित राज्य</th>
                          <th className="p-2.5 font-semibold">मुख्य विशेषता / कलाकार</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-350">
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">कथक (Kathak)</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">उत्तर प्रदेश (उत्तर भारत)</td>
                          <td className="p-2.5">इसमें 'कथा' को नृत्य के माध्यम से कहा जाता है। <strong>पंडित बिरजू महाराज</strong>, लच्छू महाराज इसके प्रसिद्ध कलाकार थे।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">भरतनाट्यम</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">तमिलनाडु</td>
                          <td className="p-2.5">इसे भारत का सबसे पुराना शास्त्रीय नृत्य माना जाता है। रुक्मिणी देवी अरुंडेल प्रमुख कलाकार हैं।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">कथकली (Kathakali)</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">केरल</td>
                          <td className="p-2.5">इसमें चेहरे के हाव-भाव (Expressions) और भारी मेकअप/विशिष्ट मुखौटे का प्रयोग होता है।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">कुचिपुड़ी (Kuchipudi)</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">आंध्र प्रदेश</td>
                          <td className="p-2.5">यह पीतल की थाली के किनारों पर पैर रखकर किया जाने वाला आकर्षक नृत्य है।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">ओडिसी</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">ओडिशा</td>
                          <td className="p-2.5">मुख्य रूप से भगवान जगन्नाथ की आराधना में किया जाता है। त्रिभंग मुद्रा इसकी पहचान है।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">मणिपुरी</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">मणिपुर</td>
                          <td className="p-2.5">इसमें राधा-कृष्ण की मनमोहक रासलीला को दर्शाया जाता है।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">मोहिनीअट्टम</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">केरल</td>
                          <td className="p-2.5">यह केवल महिलाओं द्वारा किया जाने वाला सौम्य एकल नृत्य है।</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-200">सत्रिया (Sattriya)</td>
                          <td className="p-2.5 text-indigo-300 font-semibold">असम</td>
                          <td className="p-2.5">यह सबसे नवीन शास्त्रीय नृत्य है, जिसे वैष्णव संत <strong>श्रीमंत शंकरदेव</strong> द्वारा प्रतिपादित किया गया था।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Culture Tab 2: Music & Instruments */}
            {cultureTab === 'music' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-indigo-400 mb-2">🎵 भारतीय शास्त्रीय संगीत की शैलियाँ</h4>
                    <p className="text-xs">भारतीय शास्त्रीय संगीत को दो प्रमुख प्रणालियों में वर्गीकृत किया गया है:</p>
                    <ul className="space-y-1.5 text-xs pl-2 mt-2">
                      <li>• <strong>1. हिंदुस्तानी संगीत:</strong> यह उत्तर भारत में प्रचलित है। इसमें सूफी, फारसी और पारंपरिक भारतीय तत्वों का मिला-जुला प्रभाव झलकता है।</li>
                      <li>• <strong>2. कर्नाटक संगीत:</strong> यह पूरी तरह दक्षिण भारत की पारंपरिक शैली पर आधारित है और इसमें बाहरी प्रभाव न्यूनतम है।</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-sm md:text-base font-semibold text-indigo-400 mb-2">🎺 प्रमुख वाद्य यंत्र और उनके प्रसिद्ध वादक (बार-बार पूछे जाने वाले)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5">
                        <strong className="text-indigo-300 block mb-1">🎸 सितार (Sitar)</strong>
                        <span>पंडित रवि शंकर, उस्ताद विलायत खान।</span>
                      </div>
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5">
                        <strong className="text-indigo-300 block mb-1">🥁 तबला (Tabla)</strong>
                        <span>उस्ताद जाकिर हुसैन, पंडित किशन महाराज, लतीफ खान।</span>
                      </div>
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5">
                        <strong className="text-indigo-300 block mb-1">🎋 बाँसुरी (Flute)</strong>
                        <span>हरिप्रसाद चौरसिया, पन्नालाल घोष।</span>
                      </div>
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5">
                        <strong className="text-indigo-300 block mb-1">🎺 शहनाई (Shehnai)</strong>
                        <span><strong>उस्ताद बिस्मिल्लाह खान</strong> (इन्हें भारत के सर्वोच्च नागरिक सम्मान 'भारत रत्न' से नवाजा जा चुका है)।</span>
                      </div>
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5 col-span-2">
                        <strong className="text-indigo-300 block mb-1">🎻 सरोद (Sarod)</strong>
                        <span>अमजद अली खान, अली अकबर खान।</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Culture Tab 3: Architecture & UNESCO sites */}
            {cultureTab === 'architecture' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
                  <h4 className="text-sm md:text-base font-semibold text-indigo-400 mb-2">🏛️ भारतीय स्थापत्य कला और प्रमुख धरोहर</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🕌 ताजमहल (आगरा, उत्तर प्रदेश)</strong>
                      <p className="text-slate-400">मुगल सम्राट शाहजहाँ द्वारा अपनी बेगम मुमताज़ महल की याद में सफेद संगमरमर से निर्मित कराया गया। यह दुनिया के 7 अजूबों में शामिल है।</p>
                    </div>
                    <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🗼 कुतुब मीनार (दिल्ली)</strong>
                      <p className="text-slate-400">इसकी नींव कुतुबुद्दीन ऐबक ने सूफी संत कुतुबुद्दीन बख्तियार काकी की याद में रखी थी और इसे इल्तुतमिश ने पूरा करवाया था।</p>
                    </div>
                    <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🏰 लाल किला (दिल्ली)</strong>
                      <p className="text-slate-400">शाहजहाँ द्वारा निर्मित बलुआ पत्थर का किला, जो मुगल वास्तुकला की शान का बेहतरीन उदाहरण है।</p>
                    </div>
                    <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🕳️ अजंता और एलोरा की गुफाएँ (महाराष्ट्र)</strong>
                      <p className="text-slate-400">अजंता में मुख्यतः बौद्ध धर्म से संबंधित भित्तिचित्र (जातक कथाएँ) हैं, जबकि एलोरा में हिंदू, जैन और बौद्ध तीनों धर्मों की 34 गुफाएँ हैं। एलोरा का कैलाश मंदिर एकल चट्टान काटकर बना है।</p>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-500/5 border border-indigo-500/20 rounded-lg text-xs text-indigo-300">
                    📌 <strong>अति-महत्वपूर्ण (UNESCO Special):</strong> ताजमहल, आगरा का किला, और अजंता व एलोरा की गुफाओं को <strong>1983 में</strong> भारत की पहली यूनेस्को (UNESCO) विश्व धरोहर सूची में एक साथ शामिल किया गया था।
                  </div>
                </div>
              </div>
            )}

            {/* Culture Tab 4: Languages & Literature */}
            {cultureTab === 'literature' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-400 mb-2">📜 संविधान की 8वीं अनुसूची और भाषाएँ</h4>
                      <p className="text-slate-350">
                        भारत के संविधान की 8वीं अनुसूची में वर्तमान में <strong>22 आधिकारिक भाषाओं</strong> को मान्यता दी गई है। (मूल संविधान में केवल 14 भाषाएँ थीं)।
                      </p>
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5 mt-2 space-y-1">
                        <span className="font-bold text-indigo-300 block text-[11px]">🏛️ शास्त्रीय भाषाएँ (6 Classical Languages):</span>
                        <p className="text-[11px] text-slate-400">भारत सरकार द्वारा 6 भाषाओं को शास्त्रीय भाषा का दर्जा प्राप्त है - <strong>तमिल, संस्कृत, तेलुगु, कन्नड़, मलयालम और ओड़िया</strong>।</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-indigo-400 mb-2">📚 प्रमुख साहित्यिक रचनाएँ व लेखक</h4>
                      <div className="p-2.5 bg-slate-950/50 rounded border border-white/5 space-y-2">
                        <p>📖 <strong>रामचरितमानस:</strong> इसके रचयिता गोस्वामी तुलसीदास हैं। इसकी मूल भाषा <strong>अवधी</strong> है।</p>
                        <p>📖 <strong>गोदान, गबन, कर्मभूमि:</strong> ये महान उपन्यास सम्राट <strong>मुंशी प्रेमचंद</strong> की कालजयी कृतियाँ हैं।</p>
                        <p>📖 <strong>गीतांजलि:</strong> कविगुरु <strong>रवींद्रनाथ टैगोर</strong> की रचना, जिसके लिए उन्हें <strong>1913 में साहित्य का नोबेल पुरस्कार</strong> मिला (वे नोबेल पाने वाले प्रथम एशियाई थे)।</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Culture Tab 5: National Symbols */}
            {cultureTab === 'symbols' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5">
                  <h4 className="text-sm md:text-base font-semibold text-indigo-400 mb-3">🦁 भारत के राष्ट्रीय प्रतीक (National Symbols)</h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🐯 राष्ट्रीय पशु</strong>
                      <span className="font-semibold text-slate-200">बाघ (Tiger)</span>
                      <p className="text-[11px] text-slate-450 italic mt-0.5">वैज्ञानिक नाम: Panthera tigris</p>
                      <p className="text-[10px] text-amber-400 mt-1">💡 1973 में 'प्रोजेक्ट टाइगर' के बाद सिंह (शेर) के स्थान पर बाघ को राष्ट्रीय पशु बनाया गया था।</p>
                    </div>

                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🦚 राष्ट्रीय पक्षी</strong>
                      <span className="font-semibold text-slate-200">मोर (Peacock)</span>
                      <p className="text-[11px] text-slate-450 italic mt-0.5">वैज्ञानिक नाम: Pavo cristatus</p>
                    </div>

                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🪷 राष्ट्रीय पुष्प</strong>
                      <span className="font-semibold text-slate-200">कमल (Lotus)</span>
                      <p className="text-[11px] text-slate-450 italic mt-0.5">वैज्ञानिक नाम: Nelumbo nucifera</p>
                    </div>

                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5">
                      <strong className="text-indigo-300 block mb-1">🦁 राष्ट्रीय चिह्न</strong>
                      <span className="font-semibold text-slate-200">अशोक स्तंभ (सारनाथ, UP)</span>
                      <p className="text-[11px] text-slate-400 mt-1">इसके निचले फलक पर देवनागरी लिपि में <strong>"सत्यमेव जयते"</strong> अंकित है, जो <strong>मुण्डकोपनिषद्</strong> से लिया गया है।</p>
                    </div>

                    <div className="p-2.5 bg-slate-950/40 rounded border border-white/5 col-span-2">
                      <strong className="text-indigo-300 block mb-1">🏑 राष्ट्रीय खेल</strong>
                      <span className="font-semibold text-slate-200">हॉकी (Hockey)</span>
                      <p className="text-[11px] text-slate-400 mt-1">भारत का कोई भी आधिकारिक या कानूनी रूप से 'घोषित' राष्ट्रीय खेल नहीं है, परंतु देश की ऐतिहासिक सफलताओं के कारण हॉकी को परंपरागत रूप से राष्ट्रीय खेल माना जाता है।</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
