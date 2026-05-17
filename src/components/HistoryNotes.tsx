"use client";
import React, { useState } from 'react';
import { 
  Compass, Shield, Landmark, BookOpen, Flame, MapPin, Swords 
} from 'lucide-react';

export default function HistoryNotes() {
  const [activeTab, setActiveTab] = useState<'ancient' | 'medieval' | 'modern' | 'charts'>('ancient');

  const tabs = [
    { id: 'ancient', label: '🏺 प्राचीन भारत (Ancient)', color: 'text-amber-400 border-amber-400 bg-amber-500/5' },
    { id: 'medieval', label: '⚔️ मध्यकालीन भारत (Medieval)', color: 'text-red-400 border-red-400 bg-red-500/5' },
    { id: 'modern', label: '📜 आधुनिक भारत (Modern)', color: 'text-sky-400 border-sky-400 bg-sky-500/5' },
    { id: 'charts', label: '📊 युद्ध व पुस्तकें (Charts)', color: 'text-purple-400 border-purple-400 bg-purple-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#1e293b]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold border border-amber-500/20">
          🏺
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">भारत का इतिहास (History of India) - विस्तृत नोट्स</h3>
          <p className="text-xs md:text-sm text-slate-400">प्राचीन, मध्यकालीन एवं आधुनिक भारत का संपूर्ण विश्लेषण</p>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Tab Content */}
      <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">

        {/* ANCIENT INDIA */}
        {activeTab === 'ancient' && (
          <div className="space-y-8 animate-fadeIn text-xs md:text-sm">
            {/* Indus Valley */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                सिंधु घाटी सभ्यता (Indus Valley Civilization)
              </h4>
              <p className="text-slate-300 mb-3">यह विश्व की प्रथम चार महान कांस्ययुगीन सभ्यताओं में से एक थी। यह एक नगरीय एवं ग्रिड पद्धति (Grid System) पर आधारित सभ्यता थी।</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-slate-200 block">🌾 हड़प्पा (1921):</strong>
                    दयाराम साहनी द्वारा खोजा गया। रावी नदी के तट पर (पाकिस्तान)। साक्ष्य: <strong>अन्नागार (Granary)</strong> और कांस्य की इक्का गाड़ी।
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-slate-200 block">⛲ मोहनजोदड़ो (1922):</strong>
                    राखालदास बनर्जी द्वारा खोजा गया। सिंधु नदी के तट पर (पाकिस्तान)। इसका अर्थ <strong>"मृतकों का टीला"</strong> है। साक्ष्य: महान स्नानागार (Great Bath), कांस्य की नर्तकी की मूर्ति, पशुपति शिव की मुहर।
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-slate-200 block">⚓ लोथल (गुजरात):</strong>
                    भोगवा नदी के किनारे। यह इस सभ्यता का प्रमुख <strong>बंदरगाह (Dockyard)</strong> था। साक्ष्य: चावल के साक्ष्य, युगल शवाधान (Double Burial)।
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-slate-200 block">🖤 कालीबंगन (राजस्थान):</strong>
                    घग्घर नदी के किनारे। इसका अर्थ <strong>"काले रंग की चूड़ियाँ"</strong> है। साक्ष्य: जुते हुए खेत के साक्ष्य, अग्निकुंड।
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                    <strong className="text-slate-200 block">💧 धौलावीरा (गुजरात):</strong>
                    यह नगर तीन भागों में विभाजित था। यहाँ से <strong>उन्नत जल प्रबंधन प्रणाली (Water Management)</strong> के साक्ष्य मिले हैं।
                  </div>
                  <div className="p-3 bg-amber-500/5 rounded border border-amber-500/10 text-xs">
                    <strong className="text-amber-300 block mb-1">💡 मुख्य विशेषताएँ:</strong>
                    सड़कें समकोण (90°) पर काटती थीं। मकान पक्की ईंटों के थे। लिपि <strong>भाव-चित्रात्मक (Boustrophedon)</strong> थी, जिसे आज तक पढ़ा नहीं जा सका है। जल निकासी के लिए नालियाँ पूरी तरह ढकी थीं।
                  </div>
                </div>
              </div>
            </div>

            {/* Vedic Period */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                वैदिक काल (Vedic Period: 1500–600 ई.पू.)
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-900/40 rounded border border-white/5">
                  <h5 className="font-bold text-amber-300 text-sm mb-2">1. ऋग्वैदिक काल (1500–1000 ई.पू.)</h5>
                  <p className="text-xs text-slate-400 mb-2">समाज पितृसत्तात्मक था, परंतु महिलाओं की स्थिति सुदृढ़ थी (अपाला, घोषा विदुषी महिलाएँ)। बाल विवाह और पर्दा प्रथा नहीं थी।</p>
                  <ul className="space-y-1.5 text-xs text-slate-350 pl-2">
                    <li>🔸 <strong>ऋग्वेद:</strong> सबसे प्राचीन वेद। 10 मंडल और 1028 सूक्त हैं।</li>
                    <li>🔸 तीसरे मंडल में <strong>'गायत्री मंत्र'</strong> (सविता देव को समर्पित) है।</li>
                    <li>🔸 दसवें मंडल के <strong>'पुरुषसूक्त'</strong> में सर्वप्रथम चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) का उल्लेख है।</li>
                    <li>🔸 पवित्र नदी: <strong>सरस्वती</strong> | महत्वपूर्ण नदी: <strong>सिंधु</strong>। गाय को <strong>'अघन्या'</strong> (न मारने योग्य) कहा जाता था।</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-900/40 rounded border border-white/5">
                  <h5 className="font-bold text-amber-300 text-sm mb-2">2. उत्तर वैदिक काल (1000–600 ई.पू.)</h5>
                  <p className="text-xs text-slate-400 mb-2"><strong>लोहे की खोज (श्याम अयस)</strong> हुई जिससे कृषि और हथियारों का तेजी से विकास हुआ। वर्ण व्यवस्था जन्म के आधार पर कठोर हुई, महिलाओं की स्थिति में गिरावट आई।</p>
                  <h6 className="font-bold text-slate-200 text-xs mb-1">अन्य तीन वेद:</h6>
                  <ul className="space-y-1 text-xs text-slate-350 pl-2">
                    <li>🔸 <strong>यजुर्वेद:</strong> यज्ञ के नियमों व विधियों का गद्य और पद्य दोनों में संकलन।</li>
                    <li>🔸 <strong>सामवेद:</strong> भारतीय संगीत का जनक (ऋचाओं का गायन)।</li>
                    <li>🔸 <strong>अथर्ववेद:</strong> जादू-टोना, वशीकरण, अंधविश्वास और चिकित्सा का विवरण।</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mahajanapadas & Religions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-amber-400 mb-3">👑 महाजनपद काल एवं मगध</h4>
                <p className="text-xs text-slate-400 mb-3">बौद्ध ग्रंथ 'अंगुत्तर निकाय' और जैन ग्रंथ 'भगवती सूत्र' से 16 महाजनपदों की जानकारी मिलती है। सबसे शक्तिशाली महाजनपद <strong>मगध</strong> (राजधानी: राजगृह/पाटलिपुत्र) था।</p>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-slate-900/50 rounded border border-white/5">
                    <strong>हर्यक वंश:</strong> संस्थापक बिंबिसार। अजातशत्रु के पुत्र उदयन ने <strong>'पाटलिपुत्र'</strong> नगर की स्थापना की।
                  </div>
                  <div className="p-2 bg-slate-900/50 rounded border border-white/5">
                    <strong>शिशुनाग वंश:</strong> संस्थापक शिशुनाग। कालाशोक के समय द्वितीय बौद्ध संगीति हुई।
                  </div>
                  <div className="p-2 bg-slate-900/50 rounded border border-white/5">
                    <strong>नंद वंश:</strong> संस्थापक महापद्मनंद। अंतिम शासक धनानंद को चंद्रगुप्त मौर्य ने हराया।
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-amber-400 mb-3">☸️ बौद्ध एवं जैन धर्म</h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <strong className="text-slate-200">1. बौद्ध धर्म (गौतम बुद्ध):</strong>
                    <p className="text-slate-400 text-xs mt-1">जन्म 563 ई.पू. लुंबिनी में शाक्य कुल में। सिद्धार्थ नाम था। निरंजना नदी के तट पर पीपल के नीचे ज्ञान (निर्वाण) मिला। प्रथम उपदेश सारनाथ में (धर्मचक्रप्रवर्तन) दिया। मृत्यु कुशीनगर में (महापरिनिर्वाण)।</p>
                    <div className="mt-2 grid grid-cols-2 gap-1.5 text-[10px]">
                      <span className="p-1 bg-indigo-500/10 text-indigo-300 rounded">1. अजातशत्रु - राजगृह (483 BC)</span>
                      <span className="p-1 bg-indigo-500/10 text-indigo-300 rounded">2. कालाशोक - वैशाली (383 BC)</span>
                      <span className="p-1 bg-indigo-500/10 text-indigo-300 rounded">3. अशोक - पाटलिपुत्र (250 BC)</span>
                      <span className="p-1 bg-indigo-500/10 text-indigo-300 rounded">4. कनिष्क - कुंडलवन (98 AD)</span>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-2">
                    <strong className="text-slate-200">2. जैन धर्म (महावीर स्वामी):</strong>
                    <p className="text-slate-400 text-xs mt-1">कुल 24 तीर्थंकर। पहले ऋषभदेव। 23वें पार्श्वनाथ। 24वें महावीर स्वामी (जन्म वैशाली के कुंडलपुर में)। ऋजुपालिका नदी के किनारे सर्वोच्च ज्ञान (कैवल्य) प्राप्त हुआ। पंच महाव्रत में 5वां व्रत <strong>'ब्रह्मचर्य'</strong> महावीर जी ने जोड़ा।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Empires */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                मौर्य एवं गुप्त साम्राज्य (Maurya & Gupta Empires)
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div>
                  <h5 className="font-bold text-amber-300 mb-2">🦁 मौर्य साम्राज्य (322–185 ई.पू.)</h5>
                  <ul className="space-y-2">
                    <li>🔹 <strong>चंद्रगुप्त मौर्य:</strong> गुरु चाणक्य (कौटिल्य) की सहायता से मौर्य वंश की स्थापना की। सेल्युकस निकेटर को हराया। निकेटर के राजदूत <strong>मेगास्थनीज</strong> ने <strong>'इंडिका'</strong> पुस्तक लिखी। अंतिम समय में श्रवणबेलगोला में सल्लेखना (उपवास) द्वारा प्राण त्यागे।</li>
                    <li>🔹 <strong>अशोक महान (269–232 ई.पू.):</strong> 261 ई.पू. में <strong>कलिंग युद्ध</strong> के भीषण नरसंहार के बाद हृदय परिवर्तन हुआ, 'धम्मघोष' अपनाया। बौद्ध भिक्षु उपगुप्त से दीक्षा ली। इसके अभिलेखों को 1837 में <strong>जेम्स प्रिंसेप</strong> ने सर्वप्रथम पढ़ा।</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-amber-300 mb-2">👑 गुप्त साम्राज्य (319–550 ईस्वी) - "स्वर्ण युग"</h5>
                  <ul className="space-y-2 text-xs">
                    <li>🔹 <strong>समुद्रगुप्त:</strong> सैन्य विजयों के कारण <strong>"भारत का नेपोलियन"</strong> (वी.ए. स्मिथ द्वारा) कहा गया। सिक्कों पर वीणा बजाते दिखाया गया है। दरबारी कवि हरिषेण ने 'प्रयाग प्रशस्ति' लिखी।</li>
                    <li>🔹 <strong>चंद्रगुप्त द्वितीय (विक्रमादित्य):</strong> शकों को हराकर 'विक्रमादित्य' की उपाधि ली, चाँदी के सिक्के चलाए। इनके दरबार के नवरत्नों में कालिदास, वराहमिहिर और धन्वंतरि प्रमुख थे। चीनी यात्री फाहियान इनके काल में आया।</li>
                    <li>🔹 <strong>कुमारगुप्त:</strong> इन्होंने बिहार में विश्व प्रसिद्ध <strong>नालंदा विश्वविद्यालय</strong> की स्थापना की।</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MEDIEVAL INDIA */}
        {activeTab === 'medieval' && (
          <div className="space-y-8 animate-fadeIn text-xs md:text-sm">
            {/* Delhi Sultanate */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-red-500 rounded" />
                दिल्ली सल्तनत (Delhi Sultanate: 1206–1526 ई.)
              </h4>
              <p className="text-slate-300 mb-4">दिल्ली सल्तनत पर कुल 5 वंशों ने शासन किया: <strong>गुलाम → खिलजी → तुगलक → सैय्यद → लोदी</strong></p>
              
              <div className="space-y-4">
                <div className="p-3.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="text-red-400 font-bold block mb-1">1. गुलाम वंश (1206–1290)</span>
                  <ul className="space-y-1.5 pl-2 text-xs text-slate-350">
                    <li>🔸 <strong>कुतुबुद्दीन ऐबक:</strong> 1206 में स्थापना। अपनी उदारता हेतु 'लाख बख्श' कहा गया। कुतुब मीनार की नींव रखी, अजमेर में 'अढ़ाई दिन का झोंपड़ा' बनवाया। 1210 में चौगान (पोलो) खेलते समय घोड़े से गिरकर मृत्यु।</li>
                    <li>🔸 <strong>इल्तुतमिश:</strong> गुलामों का गुलाम। सल्तनत का वास्तविक संस्थापक। इक्ता प्रणाली व 40 सरदारों का दल <strong>'तुर्कान-ए-चहलगामी' (चालीसा)</strong> बनाया।</li>
                    <li>🔸 <strong>रजिया सुल्तान:</strong> भारत की प्रथम महिला मुस्लिम शासिका।</li>
                    <li>🔸 <strong>बलबन:</strong> चालीसा समाप्त किया। सजदा एवं पाबोस प्रथा, लौह एवं रक्त की नीति (Blood & Iron Policy) अपनाई। नवरोज त्योहार शुरू किया।</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="text-red-400 font-bold block mb-1">2. खिलजी वंश (1290–1320)</span>
                  <ul className="space-y-1.5 pl-2 text-xs text-slate-350">
                    <li>🔸 <strong>अलाउद्दीन खिलजी:</strong> बचपन का नाम अली गुरशास्प था। स्थायी सेना, नकद वेतन, <strong>'घोड़ा दागने' व 'हुलिया लिखने'</strong> की प्रथा शुरू की।</li>
                    <li>🔸 बाज़ार पर कठोर नियंत्रण रखने हेतु <strong>'बाज़ार नियंत्रण या मूल्य नियंत्रण नीति'</strong> लागू की। दिल्ली में 'अलाई दरवाजा' व 'सीरी का किला' बनवाया।</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="text-red-400 font-bold block mb-1">3. तुगलक वंश (1320–1414)</span>
                  <ul className="space-y-1.5 pl-2 text-xs text-slate-350">
                    <li>🔸 <strong>गयासुद्दीन तुगलक:</strong> नहरों का निर्माण कराने वाला पहला शासक।</li>
                    <li>🔸 <strong>मोहम्मद बिन तुगलक (MBT):</strong> सबसे शिक्षित परंतु असफल योजनाओं (राजधानी दिल्ली से दौलताबाद, सांकेतिक मुद्रा, कराचिल अभियान) के कारण 'पागल राजा' कहा गया। इसी के काल में मोरक्को का यात्री <strong>इब्न बतूता</strong> आया, जिसने <strong>'रेहला'</strong> पुस्तक लिखी।</li>
                    <li>🔸 <strong>फिरोज शाह तुगलक:</strong> दासों के लिए 'दीवान-ए-बंदनगां' विभाग बनाया और ब्राह्मणों पर भी जजिया कर लगाया।</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="text-red-400 font-bold block mb-1">4. लोदी वंश (1451–1526)</span>
                  <ul className="space-y-1.5 pl-2 text-xs text-slate-350">
                    <li>🔸 <strong>सिकंदर लोदी:</strong> 1504 ई. में आगरा शहर की स्थापना की और इसे राजधानी बनाया। 'गुलरुखी' उपनाम से फारसी में कविताएं लिखता था। भूमि मापने का पैमाना 'गज़-ए-सिकंदरी' चलाया।</li>
                    <li>🔸 <strong>इब्राहिम लोदी:</strong> दिल्ली सल्तनत का अंतिम शासक, जिसे बाबर ने पानीपत के प्रथम युद्ध में हराया।</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mughal Empire */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-red-500 rounded" />
                मुगल साम्राज्य (Mughal Empire: 1526–1707 ई.)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <strong className="text-slate-200">1. बाबर (1526–1530):</strong>
                    <p className="text-xs text-slate-400 mt-1">1526 में पानीपत के प्रथम युद्ध में इब्राहिम लोदी को हराकर स्थापना की। तोपखाने व तुगलमा नीति का प्रयोग किया। खानवा (1527), चंदेरी (1528), घाघरा (1529) युद्ध जीते। आत्मकथा: <strong>'तुजुक-ए-बाबरी' (बाबरनामा)</strong> तुर्की में लिखी।</p>
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <strong className="text-slate-200">2. हुमायूं (1530–1556):</strong>
                    <p className="text-xs text-slate-400 mt-1">शेरशाह सूरी ने हुमायूं को चौसा (1539) व कन्नौज (1540) युद्धों में हराकर निर्वासित किया। (शेरशाह ने GT Road का निर्माण कराया व 'रुपया' सिक्का चलाया)। 1556 में 'दीनपनाह' पुस्तकालय की सीढ़ियों से गिरकर मृत्यु।</p>
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <strong className="text-slate-200">3. अकबर (1556–1605):</strong>
                    <p className="text-xs text-slate-400 mt-1">1556 में पानीपत के द्वितीय युद्ध में हेमु को हराया। 1582 में <strong>'दीन-ए-इलाही'</strong> धर्म शुरू किया (स्वीकारने वाला एकमात्र हिंदू बीरबल था)। मनसबदारी व्यवस्था लागू की। दरबार में नवरत्न थे। 1576 में महाराणा प्रताप के साथ प्रसिद्ध <strong>हल्दीघाटी का युद्ध</strong> हुआ।</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <strong className="text-slate-200">4. जहाँगीर (1605–1627):</strong>
                    <p className="text-xs text-slate-400 mt-1">बचपन का नाम सलीम। 'न्याय की ज़ंजीर' के लिए प्रसिद्ध। इसके काल को <strong>चित्रकला का स्वर्ण काल</strong> कहा जाता है। कैप्टन हॉकिन्स व थॉमस रो दरबार में आए। सिख गुरु अर्जुन देव को मृत्युदंड दिया।</p>
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <strong className="text-slate-200">5. शाहजहाँ (1627–1658):</strong>
                    <p className="text-xs text-slate-400 mt-1">इसके काल को <strong>स्थापत्य कला (Architecture) का स्वर्ण काल</strong> कहते हैं। ताजमहल (वास्तुकार: उस्ताद अहमद लाहौरी), दिल्ली का लाल किला, जामा मस्जिद और मयूर सिंहासन (तख्त-ए-ताऊस) का निर्माण कराया।</p>
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <strong className="text-slate-200">6. औरंगजेब (1658–1707):</strong>
                    <p className="text-xs text-slate-400 mt-1"><strong>'जिंदा पीर'</strong> कहा जाता था। कट्टर रूढ़िवादी। संगीत पर प्रतिबंध लगाया, जजिया कर पुनः लागू किया। सिखों के 9वें गुरु तेग बहादुर की हत्या करवाई। इसके समय सर्वाधिक हिंदू मनसबदार थे।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODERN INDIA */}
        {activeTab === 'modern' && (
          <div className="space-y-8 animate-fadeIn text-xs md:text-sm">
            {/* Arrival & Key Battles */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-sky-500 rounded" />
                यूरोपीय कंपनियों का आगमन व निर्णायक युद्ध
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="font-bold text-slate-100 block mb-2">🚗 कंपनियों के आगमन का क्रम:</span>
                  <p className="text-xs bg-slate-950/40 p-2.5 rounded border border-white/5 text-sky-300 font-mono text-center">
                    पुर्तगाली (1498) → डच (1602) → अंग्रेज (1600) → डेनिश (1616) → फ्रांसीसी (1664)
                  </p>
                  <p className="text-xs text-slate-400 mt-2"><strong>वास्कोडिगामा:</strong> 1498 में केप ऑफ गुड होप के रास्ते भारत के कालीकट तट पर पहुंचा, राजा जमोरिन ने स्वागत किया।</p>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 bg-slate-900/50 rounded border border-white/5 text-xs">
                    <strong>⚔️ प्लासी का युद्ध (23 जून 1757):</strong> रॉबर्ट क्लाइव और बंगाल के नवाब सिराजुद्दौला के बीच। मीर जाफर की गद्दारी से नवाब हारा। भारत में ब्रिटिश सत्ता की नींव पड़ी।
                  </div>
                  <div className="p-2.5 bg-slate-900/50 rounded border border-white/5 text-xs">
                    <strong>⚔️ बक्सर का युद्ध (22 अक्टूबर 1764):</strong> हेक्टर मुनरो और संयुक्त भारतीय सेना (मीर कासिम, शुजाउद्दौला, शाहआलम द्वितीय) के बीच। अंग्रेजों की विजय हुई। 1765 की इलाहाबाद की संधि द्वारा बंगाल, बिहार, उड़ीसा के दीवानी अधिकार अंग्रेजों को मिले।
                  </div>
                </div>
              </div>
            </div>

            {/* Revolt of 1857 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-sky-500 rounded" />
                1857 की क्रांति (The Revolt of 1857)
              </h4>
              <p className="text-slate-350 mb-3"><strong>तात्कालिक कारण:</strong> मंगल पांडे (34वीं इंफेंट्री, बैरकपुर) द्वारा चर्बी वाले कारतूसों के विरोध में अंग्रेज अधिकारियों पर गोली चलाना। <strong>शुरुआत:</strong> 10 मई 1857 को मेरठ से। वायसराय: लॉर्ड कैनिंग। ब्रिटिश PM: पामस्टर्न।</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-sky-300">
                      <th className="p-2 font-semibold">विद्रोह केंद्र</th>
                      <th className="p-2 font-semibold">भारतीय नेता</th>
                      <th className="p-2 font-semibold">दमन करने वाला अंग्रेज अधिकारी</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-2 font-medium text-slate-200">झांसी</td>
                      <td className="p-2">रानी लक्ष्मीबाई</td>
                      <td className="p-2 text-slate-400">ह्यूरोज (रानी को 'क्रांतिकारियों में एकमात्र मर्द' कहा)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">कानपुर</td>
                      <td className="p-2">नाना साहब (धोंडू पंत) व तात्या टोपे</td>
                      <td className="p-2 text-slate-400">कैंपबेल</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">लखनऊ</td>
                      <td className="p-2">बेगम हजरत महल</td>
                      <td className="p-2 text-slate-400">कैंपबेल</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">बिहार (जगदीशपुर)</td>
                      <td className="p-2">कुंवर सिंह</td>
                      <td className="p-2 text-slate-400">विलियम टेलर</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">दिल्ली</td>
                      <td className="p-2">बहादुर शाह जफर व बख्त खान</td>
                      <td className="p-2 text-slate-400">निकलसन और हटसन</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-slate-200">इलाहाबाद</td>
                      <td className="p-2">लियाकत अली</td>
                      <td className="p-2 text-slate-400">कर्नल नील</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Congress & Gandhian Era */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-sky-400 mb-3">🤝 भारतीय राष्ट्रीय कांग्रेस (INC: 1885)</h4>
                <ul className="space-y-2 text-xs">
                  <li>🔸 <strong>स्थापना:</strong> 28 दिसंबर 1885 को बंबई के गोकुलदास तेजपाल संस्कृत कॉलेज में। वायसराय: लॉर्ड डफरिन।</li>
                  <li>🔸 <strong>संस्थापक:</strong> ए. ओ. ह्यूम | <strong>प्रथम अध्यक्ष:</strong> व्योमेश चंद्र बनर्जी (W.C. Banerjee) - 72 प्रतिनिधि।</li>
                  <li>🔸 <strong>सूरत अधिवेशन (1907):</strong> कांग्रेस का विभाजन नरम दल (गोखले, फिरोजशाह) व गरम दल (लाल-बाल-पाल) में हुआ।</li>
                  <li>🔸 <strong>लखनऊ अधिवेशन (1916):</strong> ए.सी. मजूमदार की अध्यक्षता में दोनों दल पुनः एक हुए, कांग्रेस-लीग समझौता।</li>
                </ul>
              </div>

              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-sky-400 mb-3">🚶‍♂️ गांधीवादी युग (Gandhian Era)</h4>
                <p className="text-xs text-slate-400 mb-2">गांधीजी 9 जनवरी 1915 को दक्षिण अफ्रीका से लौटे (प्रवासी भारतीय दिवस)। राजनीतिक गुरु: गोपाल कृष्ण गोखले।</p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p>🔹 <strong>चंपारण (1917):</strong> तीनकठिया खेती के खिलाफ भारत में प्रथम सफल सत्याग्रह। रवींद्रनाथ ने 'महात्मा' उपाधि दी।</p>
                  <p>🔹 <strong>असहयोग (1920-22):</strong> जलियांवाला कांड के विरोध में शुरू। 5 Feb 1922 को U.P. के <strong>चौरी-चौरा कांड</strong> के कारण स्थगित।</p>
                  <p>🔹 <strong>सविनय अवज्ञा (1930):</strong> 12 मार्च को साबरमती से 78 साथियों संग दांडी मार्च शुरू, 6 अप्रैल को नमक कानून तोड़ा।</p>
                  <p>🔹 <strong>भारत छोड़ो (8 Aug 1942):</strong> मुंबई के ग्वालिया टैंक से शुरुआत। गांधीजी ने <strong>"करो या मरो"</strong> का नारा दिया।</p>
                </div>
              </div>
            </div>

            {/* Revolutionaries & Independence */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-base font-semibold text-sky-400 mb-3">⚡ क्रांतिकारी आंदोलन व स्वतंत्रता</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1">भगत सिंह</span>
                  सुखदेव व राजगुरु संग 1928 में सांडर्स की हत्या की। 8 April 1929 को बटुकेश्वर दत्त संग ब्रिटिश असेंबली में बम फेंका। <strong>23 मार्च 1931</strong> को फाँसी दी गई।
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1">चन्द्रशेखर आज़ाद</span>
                  HSRA की स्थापना। काकोरी ट्रेन एक्शन (1925) में शामिल। 27 Feb 1931 को इलाहाबाद के अल्फ्रेड पार्क में पुलिस से घिरने पर खुद को अंतिम गोली मारी।
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1">सुभाष चंद्र बोस</span>
                  1939 में फॉरवर्ड ब्लॉक बनाया। 1943 सिंगापुर में आजाद हिंद फौज (INA) की कमान संभाली। नारा: "तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा"। एडॉल्फ हिटलर ने इन्हें 'नेताजी' कहा।
                </div>
              </div>
              <div className="mt-4 p-3 bg-indigo-500/5 rounded border border-indigo-500/10">
                <strong>🇮🇳 स्वतंत्रता और संविधान:</strong> 1946 में <strong>कैबिनेट मिशन</strong> के तहत संविधान सभा गठित। 3 जून 1947 को <strong>माउंटबेटन योजना</strong> से विभाजन का खाका बना। 15 अगस्त 1947 को स्वतंत्रता मिली और <strong>26 जनवरी 1950</strong> को पूर्णतः संविधान लागू हुआ व देश गणतंत्र बना। प्रथम राष्ट्रपति डॉ. राजेंद्र प्रसाद बने।
              </div>
            </div>
          </div>
        )}

        {/* COMPARATIVE CHARTS */}
        {activeTab === 'charts' && (
          <div className="space-y-8 animate-fadeIn text-xs md:text-sm">
            {/* Battles Chart */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-purple-500 rounded" />
                महत्वपूर्ण ऐतिहासिक युद्ध (Important Battles)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-purple-300">
                      <th className="p-2.5 font-semibold">युद्ध</th>
                      <th className="p-2.5 font-semibold">वर्ष</th>
                      <th className="p-2.5 font-semibold">किसके बीच</th>
                      <th className="p-2.5 font-semibold">परिणाम</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">तराइन का प्रथम युद्ध</td>
                      <td className="p-2.5">1191</td>
                      <td className="p-2.5">पृथ्वीराज चौहान और मोहम्मद गोरी</td>
                      <td className="p-2.5 text-emerald-400 font-semibold">पृथ्वीराज चौहान विजयी</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">तराइन का द्वितीय युद्ध</td>
                      <td className="p-2.5">1192</td>
                      <td className="p-2.5">पृथ्वीराज चौहान और मोहम्मद गोरी</td>
                      <td className="p-2.5 text-purple-400">मोहम्मद गोरी विजयी (भारत में मुस्लिम सत्ता की नींव)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">पानीपत का प्रथम युद्ध</td>
                      <td className="p-2.5">1526</td>
                      <td className="p-2.5">बाबर और इब्राहिम लोदी</td>
                      <td className="p-2.5 text-emerald-400 font-semibold">बाबर विजयी (मुगल वंश की स्थापना)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">पानीपत का द्वितीय युद्ध</td>
                      <td className="p-2.5">1556</td>
                      <td className="p-2.5">अकबर और हेमु</td>
                      <td className="p-2.5 text-emerald-400 font-semibold">अकबर विजयी</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">हल्दीघाटी का युद्ध</td>
                      <td className="p-2.5">1576</td>
                      <td className="p-2.5">अकबर (मानसिंह) और महाराणा प्रताप</td>
                      <td className="p-2.5 text-slate-400">अनिर्णीत / अकबर का पलड़ा भारी</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">पानीपत का तृतीय युद्ध</td>
                      <td className="p-2.5">1761</td>
                      <td className="p-2.5">अहमद शाह अब्दाली और मराठा</td>
                      <td className="p-2.5 text-purple-400">अहमद शाह अब्दाली विजयी</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">प्लासी का युद्ध</td>
                      <td className="p-2.5">1757</td>
                      <td className="p-2.5">रॉबर्ट क्लाइव और सिराजुद्दौला</td>
                      <td className="p-2.5 text-emerald-400 font-semibold">अंग्रेज विजयी</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">बक्सर का युद्ध</td>
                      <td className="p-2.5">1764</td>
                      <td className="p-2.5">हेक्टर मुनरो और संयुक्त भारतीय सेना</td>
                      <td className="p-2.5 text-emerald-400 font-semibold">अंग्रेज विजयी (बंगाल पर पूर्ण नियंत्रण)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Books Chart */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-purple-500 rounded" />
                महत्वपूर्ण ऐतिहासिक पुस्तकें एवं लेखक
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-purple-300">
                      <th className="p-2.5 font-semibold">पुस्तक</th>
                      <th className="p-2.5 font-semibold">लेखक</th>
                      <th className="p-2.5 font-semibold">विषय / संदर्भ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs">
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">अर्थशास्त्र</td>
                      <td className="p-2.5">चाणक्य (कौटिल्य)</td>
                      <td className="p-2.5 text-slate-450">राजनीति और मौर्यकालीन शासन व्यवस्था।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">इंडिका</td>
                      <td className="p-2.5">मेगास्थनीज</td>
                      <td className="p-2.5 text-slate-450">मौर्यकालीन समाज और नगर प्रशासन।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">महाभाष्य</td>
                      <td className="p-2.5">पतंजलि</td>
                      <td className="p-2.5 text-slate-450">पुष्यमित्र शुंग के काल का प्रसिद्ध व्याकरण ग्रंथ।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">मुद्राराक्षस</td>
                      <td className="p-2.5">विशाखदत्त</td>
                      <td className="p-2.5 text-slate-450">मौर्य वंश के उत्कर्ष की कथा (गुप्त काल में रचित)।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">राजतरंगिणी</td>
                      <td className="p-2.5 font-semibold text-slate-300">कल्हण</td>
                      <td className="p-2.5 text-slate-450">कश्मीर का इतिहास (अति-महत्वपूर्ण)।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">कादंबरी / हर्षचरित</td>
                      <td className="p-2.5">बाणभट्ट</td>
                      <td className="p-2.5 text-slate-450">राजा हर्षवर्धन का जीवन चरित्र व रचना।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">किताब-उल-हिंद</td>
                      <td className="p-2.5">अलबरूनी</td>
                      <td className="p-2.5 text-slate-450">महमूद गजनवी के समय का भारत का सामाजिक चित्रण।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">शाहनामा</td>
                      <td className="p-2.5">फिरदौसी</td>
                      <td className="p-2.5 text-slate-450">फारसी भाषा का कालजयी महाकाव्य।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">आईन-ए-अकबरी / अकबरनामा</td>
                      <td className="p-2.5">अबुल फजल</td>
                      <td className="p-2.5 text-slate-450">अकबर का काल, इतिहास और शासन प्रशासन।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">तुजुक-ए-बाबरी (बाबरनामा)</td>
                      <td className="p-2.5">बाबर</td>
                      <td className="p-2.5 text-slate-450">बाबर की आत्मकथा (तुर्की भाषा)।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">आनंदमठ</td>
                      <td className="p-2.5 text-slate-300 font-medium">बंकिम चंद्र चटर्जी</td>
                      <td className="p-2.5 text-slate-450">संन्यासी विद्रोह पर आधारित, इसी से 'वंदेमातरम' लिया गया।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">माय एक्सपेरिमेंट्स विद ट्रुथ</td>
                      <td className="p-2.5">महात्मा गांधी</td>
                      <td className="p-2.5 text-slate-450">महात्मा गांधी जी की आत्मकथा (सत्य के प्रयोग)।</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-slate-200">डिस्कवरी ऑफ इंडिया</td>
                      <td className="p-2.5">जवाहरलाल नेहरू</td>
                      <td className="p-2.5 text-slate-450">अहमदनगर जेल में लिखी गई भारत के इतिहास की सुंदर व्याख्या।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
