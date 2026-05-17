"use client";
import React, { useState } from 'react';
import { 
  Scale, ShieldAlert, HeartHandshake, Eye, Award, 
  BookOpen, Landmark, AlertCircle, Compass, Star 
} from 'lucide-react';

export default function BasicLawNotes() {
  const [activeTab, setActiveTab] = useState<'codification' | 'protection' | 'ecological' | 'rights' | 'security'>('codification');

  const tabs = [
    { id: 'codification', label: '⚖️ दंड संहिताएं (BNS & BNSS)', color: 'text-orange-450 border-orange-500/30 bg-orange-500/5' },
    { id: 'protection', label: '🛡️ महिला/बाल व SC/ST', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'ecological', label: '🌳 पर्यावरण व यातायात', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'rights', label: '🔍 मानवाधिकार व RTI', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' },
    { id: 'security', label: '📜 रासुका, PIL व भूमि राजस्व', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0b0c16]/95 border border-orange-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">मूलविधि विस्तृत अध्ययन नोट्स (Basic Law Study Notes)</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Sub Inspector (SI) परीक्षा हेतु विशेष कानूनी व विधिक संकलन</p>
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
                ? `${tab.color} border-current shadow-lg shadow-orange-500/5` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: BNS & BNSS */}
        {activeTab === 'codification' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-orange-400 flex items-center gap-2 text-sm">
                <Scale className="w-4 h-4" /> ⚖️ भारतीय नवीन आपराधिक कानून (New Criminal Laws)
              </span>
              <p>भारत में ब्रिटिश कालीन कानूनों (IPC, CrPC, IEA) को बदलकर <strong>1 जुलाई 2024</strong> से तीन नई आपराधिक संहिताएं पूरे देश में पूर्णतः प्रभावी हो गई हैं।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-orange-300 block border-b border-white/5 pb-1.5">📖 भारतीय न्याय संहिता, 2023 (BNS):</span>
                <p className="text-xs">• <strong>रिप्लेसमेंट:</strong> इसने 1860 के <strong>IPC (भारतीय दंड संहिता)</strong> को प्रतिस्थापित किया है।</p>
                <p className="text-xs">• <strong>अध्याय व धाराएं:</strong> BNS में 20 अध्याय और <strong>358 धाराएं</strong> हैं (IPC में 511 धाराएं थीं)।</p>
                <div className="p-3 bg-orange-500/10 rounded-lg space-y-1.5 border border-orange-500/20 text-xs">
                  <strong>🔥 प्रमुख नवीन धाराएं (BNS vs IPC):</strong>
                  <p>• <strong>हत्या (Murder):</strong> अब धारा <strong>103</strong> के तहत दंडनीय है (पहले IPC 302 थी)।</p>
                  <p>• <strong>बलात्कार (Rape):</strong> अब धारा <strong>64</strong> के तहत और सामूहिक बलात्कार धारा <strong>70</strong> के तहत दंडनीय है (पहले IPC 376 थी)।</p>
                  <p>• <strong>देशद्रोह (Sedition):</strong> IPC की धारा 124A (राजद्रोह) को पूर्णतः समाप्त कर, BNS की धारा <strong>152</strong> के तहत "भारत की संप्रभुता, एकता और अखंडता को खतरे में डालने वाले कृत्य" (देशद्रोह) को शामिल किया गया है।</p>
                  <p>• <strong>संगठित अपराध व आतंकवाद:</strong> धारा <strong>111 (आतंकवाद)</strong> और धारा <strong>112 (पेटी आर्गनाइज्ड क्राइम)</strong> को पहली बार सामान्य आपराधिक कानून में परिभाषित किया गया है।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-orange-300 block border-b border-white/5 pb-1.5">⚖️ भारतीय नागरिक सुरक्षा संहिता, 2023 (BNSS) & BSA:</span>
                <p className="text-xs">• <strong>BNSS:</strong> इसने 1973 के <strong>CrPC (दंड प्रक्रिया संहिता)</strong> को प्रतिस्थापित किया। इसमें 531 धाराएं हैं।</p>
                <p className="text-xs">• <strong>BSA (भारतीय साक्ष्य अधिनियम, 2023):</strong> इसने 1872 के <strong>IEA (भारतीय साक्ष्य अधिनियम)</strong> को प्रतिस्थापित किया। इसमें 170 धाराएं हैं।</p>
                <div className="p-3 bg-slate-950/60 rounded-lg space-y-1.5 border border-white/5 text-xs">
                  <strong>🆕 प्रक्रियात्मक नवीन सुधार (Procedural Changes):</strong>
                  <p>• <strong>Zero FIR:</strong> अब पीड़ित देश के किसी भी पुलिस स्टेशन में एफआईआर दर्ज करा सकता है, चाहे घटना कहीं भी हुई हो (धारा 173 BNSS)।</p>
                  <p>• <strong>डिजिटल साक्ष्य:</strong> इलेक्ट्रॉनिक उपकरणों (स्मार्टफोन, लैपटॉप, सर्वर लॉग्स) को प्राथमिक साक्ष्य के रूप में पूर्ण कानूनी मान्यता दी गई है (BSA)।</p>
                  <p>• <strong>वीडियो रिकॉर्डिंग:</strong> तलाशी और जब्ती (Search & Seizure) के दौरान पुलिस के लिए पूरी प्रक्रिया की वीडियो रिकॉर्डिंग अनिवार्य कर दी गई है।</p>
                  <p>• <strong>समय सीमा (Time Limit):</strong> एफआईआर दर्ज होने के 90 दिनों के भीतर चार्जशीट दाखिल करना और अदालत द्वारा सुनवाई पूरी होने के 30-45 दिनों में फैसला सुनाना अनिवार्य किया गया है।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VULNERABLE PROTECTION */}
        {activeTab === 'protection' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-rose-400 flex items-center gap-2 text-sm">
                <HeartHandshake className="w-4 h-4" /> 🛡️ महिलाओं, बच्चों व कमज़ोर वर्गों को संरक्षण देने सम्बन्धी कानून
              </span>
              <p>भारतीय संविधान और संसद ने विशेष अधिनियमों के माध्यम से महिलाओं, बच्चों तथा अनुसूचित जाति/जनजाति के सदस्यों को सुरक्षा प्रदान की है।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-rose-350 block mb-1 text-sm">👧 बाल संरक्षण - POCSO Act, 2012:</span>
                <p>• <strong>पूरा नाम:</strong> लैंगिक अपराधों से बालकों का संरक्षण अधिनियम (Protection of Children from Sexual Offences Act, 2012)।</p>
                <p>• <strong>बालक की परिभाषा (धारा 2(d)):</strong> 18 वर्ष से कम आयु का कोई भी व्यक्ति बालक है।</p>
                <p>• **प्रकृति:** यह लिंग-तटस्थ (Gender-neutral) कानून है, जो लड़कों और लड़कियों दोनों को समान सुरक्षा देता है।</p>
                <p className="p-2 bg-rose-500/10 text-slate-100 rounded border border-rose-500/20">
                  ⚠️ <strong>कठोर दंड:</strong> गंभीर मर्मभेदी लैंगिक हमला (धारा 5/6) के तहत कम से कम 20 वर्ष का कठोर कारावास या आजीवन कारावास, या मृत्युदंड तक का प्रावधान है। बच्चों की अश्लील तस्वीरें (Child Pornography) बनाना या रखना दंडनीय अपराध है।
                </p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-rose-350 block mb-1 text-sm">👩 महिला संरक्षण सम्बन्धी प्रमुख अधिनियम:</span>
                <p>• <strong>घरेलू हिंसा से महिला संरक्षण अधिनियम, 2005:</strong> घरेलू संबंधों में शारीरिक, मानसिक, आर्थिक या यौन शोषण के विरुद्ध महिलाओं को त्वरित सुरक्षा आदेश (Protection Orders) तथा निवास का अधिकार दिलाता है।</p>
                <p>• <strong>दहेज प्रतिषेध अधिनियम, 1961:</strong> दहेज लेना, देना या इसकी मांग करना दंडनीय है। धारा 3 के तहत न्यूनतम 5 वर्ष की सज़ा है।</p>
                <p>• <strong>कार्यस्थल पर महिलाओं का यौन उत्पीड़न अधिनियम, 2013 (POSH):</strong> प्रत्येक संगठन में 10 से अधिक कर्मचारी होने पर <strong>आंतरिक शिकायत समिति (ICC)</strong> का गठन अनिवार्य है।</p>
                <p>• <strong>मतृत्व लाभ अधिनियम, 1961:</strong> महिलाओं के लिए सवैतनिक <strong>26 सप्ताह (182 दिन)</strong> के मातृत्व अवकाश का प्रावधान करता है।</p>
              </div>
            </div>

            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3 text-xs">
              <span className="font-bold text-rose-350 block mb-1 text-sm">✊ SC/ST (अत्याचार निवारण) अधिनियम, 1989:</span>
              <p>• **प्रभावी तिथि:** 30 जनवरी 1990 को पूरे भारत में लागू हुआ। इसका मुख्य उद्देश्य समाज के सबसे कमज़ोर वर्गों के खिलाफ भेदभाव और अत्याचार रोकना है।</p>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="p-3 bg-[#0f172a]/80 rounded border border-white/5 space-y-1">
                  <strong>🚨 महत्वपूर्ण धाराएं:</strong>
                  <p>• <strong>धारा 3:</strong> अत्याचार के विभिन्न कृत्यों (जैसे मैला ढोने पर मजबूर करना, सार्वजनिक जलाशयों से वंचित करना, सामाजिक बहिष्कार) के लिए गंभीर दंड का निर्धारण करती है।</p>
                  <p>• <strong>धारा 4:</strong> लोकसेवक द्वारा कर्तव्य की उपेक्षा करने पर सज़ा का प्रावधान।</p>
                </div>
                <div className="p-3 bg-[#0f172a]/80 rounded border border-white/5 space-y-1">
                  <strong>⚖️ अग्रिम जमानत पर रोक (Section 18 & 18A):</strong>
                  <p>• अधिनियम की **धारा 18** के तहत अभियुक्त को दंड प्रक्रिया संहिता के तहत अग्रिम ज़मानत (Anticipatory Bail) प्राप्त करने का अधिकार नहीं है।</p>
                  <p>• वर्ष 2018 में सुप्रीम कोर्ट के निर्णय के बाद संसद ने **धारा 18A** जोड़कर पुनः स्पष्ट किया कि इस कानून के तहत अग्रिम जमानत पर पूर्ण प्रतिबंध लागू रहेगा।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ECOLOGICAL & TRAFFIC */}
        {activeTab === 'ecological' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                <Compass className="w-4 h-4" /> 🌳 यातायात नियम, पर्यावरण व वन्यजीव संरक्षण कानून
              </span>
              <p>सड़क सुरक्षा और पृथ्वी के प्राकृतिक संतुलन को बनाए रखने के लिए बनाए गए कानून जिनका उल्लंघन गंभीर आपराधिक श्रेणी में आता है।</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1 text-sm">🚗 मोटर वाहन अधिनियम, 2019:</span>
                <p>1988 के मूल अधिनियम में बड़ा संशोधन कर सड़क सुरक्षा हेतु भारी जुर्माने लागू किए गए हैं:</p>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1 text-[11px]">
                  <p>• <strong>शराब पीकर गाड़ी चलाना:</strong> ₹10,000 जुर्माना / 6 महीने तक जेल।</p>
                  <p>• <strong>बिना हेलमेट:</strong> ₹1,000 जुर्माना और 3 महीने के लिए लाइसेंस सस्पेंड।</p>
                  <p>• <strong>नाबालिग द्वारा ड्राइविंग:</strong> गाड़ी के मालिक/अभिभावक को ₹25,000 जुर्माना व 3 साल की जेल, वाहन पंजीकरण रद्द।</p>
                  <p>• <strong>आपातकालीन वाहन (एम्बुलेंस) को रास्ता न देना:</strong> ₹10,000 का अर्थदंड।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1 text-sm">🌿 पर्यावरण संरक्षण अधिनियम, 1986:</span>
                <p>• <strong>पृष्ठभूमि:</strong> भोपाल गैस त्रासदी (1984) के बाद पारित हुआ। इसे **छाता कानून (Umbrella Legislation)** भी कहा जाता है।</p>
                <p>• **उद्देश्य:** स्टॉकहोम सम्मेलन (1972) के निर्णयों को अमली जामा पहनाना तथा पर्यावरण की गुणवत्ता में सुधार करना।</p>
                <p>• **शक्तियां:** केंद्र सरकार को उद्योगों को बंद करने, उनका विनियमन करने या बिजली/पानी की आपूर्ति रोकने का पूर्ण अधिकार है।</p>
                <p>• **दंड:** पहली बार उल्लंघन पर 5 साल तक की जेल या ₹1 लाख तक का जुर्माना, या दोनों।</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1 text-sm">🐾 वन्यजीव व वन संरक्षण अधिनियम:</span>
                <p>• <strong>वन्यजीव संरक्षण अधिनियम, 1972:</strong> जंगली जानवरों, पक्षियों और पौधों को सुरक्षा प्रदान करता है। इसमें 6 अनुसूचियां हैं। अनुसूची-I (जैसे शेर, बाघ, ब्लैकबक) के शिकार पर कठोरतम सज़ा है।</p>
                <p>• <strong>वन (संरक्षण) अधिनियम, 1980:</strong> वनों की कटाई को रोकने और गैर-वानिकी कार्यों के लिए वन भूमि के उपयोग पर केंद्र की पूर्व अनुमति को अनिवार्य बनाता है।</p>
                <p>• <strong>भारतीय वन अधिनियम, 1927:</strong> जंगलों को आरक्षित, संरक्षित व ग्राम वनों में बांटता है।</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RIGHTS, RTI, CORRUPTION & IT */}
        {activeTab === 'rights' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-cyan-400 flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4" /> 🔍 मानवाधिकार, सूचना का अधिकार, आईटी एक्ट व भ्रष्टाचार विरोधी कानून
              </span>
              <p>पारदर्शिता, सत्यनिष्ठा और प्रत्येक नागरिक की निजी गरिमा एवं स्वतंत्रता को सुनिश्चित करने वाले बेहद महत्वपूर्ण विधिक ढाँचे।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block border-b border-white/5 pb-1 text-sm">🌍 मानवाधिकार संरक्षण अधिनियम, 1993:</span>
                <p>• <strong>राष्ट्रीय मानवाधिकार आयोग (NHRC):</strong> एक बहु-सदस्यीय संस्था है।</p>
                <div className="p-3 bg-slate-950/60 rounded-lg space-y-1.5 text-[11px] border border-white/5">
                  <p>• **संरचना:** 1 अध्यक्ष (जो सुप्रीम कोर्ट का सेवानिवृत्त मुख्य न्यायाधीश या न्यायाधीश हो) और 5 अन्य सदस्य होते हैं।</p>
                  <p>• **नियुक्ति:** राष्ट्रपति द्वारा 6 सदस्यीय उच्च-स्तरीय समिति (जिसमें पीएम, लोकसभा अध्यक्ष, गृह मंत्री, दोनों सदनों के विपक्ष के नेता, राज्यसभा उपसभापति होते हैं) की सिफारिश पर की जाती है।</p>
                  <p>• **कार्यकाल:** 3 वर्ष या 70 वर्ष की आयु (जो भी पहले हो)।</p>
                  <p>• **शक्तियां:** आयोग को दीवानी न्यायालय (Civil Court) की शक्तियां प्राप्त हैं और यह स्वतः संज्ञान (Suo Motu) से जांच शुरू कर सकता है।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block border-b border-white/5 pb-1 text-sm">ℹ️ सूचना का अधिकार (RTI) अधिनियम, 2005:</span>
                <p>• <strong>लागू होने की तिथि:</strong> 12 अक्टूबर 2005। यह भ्रष्टाचार को रोकने और लोकतंत्र को पारदर्शी बनाने का सबसे बड़ा हथियार है।</p>
                <div className="p-3 bg-[#0f172a]/90 rounded-lg space-y-1.5 text-[11px] border border-cyan-500/10">
                  <p>• <strong>सूचना देने की समय सीमा:</strong> सामान्य परिस्थितियों में आवेदन मिलने के <strong>30 दिनों</strong> के भीतर लोक सूचना अधिकारी (PIO) को सूचना देनी होती है।</p>
                  <p>• 🚨 <strong>अपवाद (अनुच्छेद 7(1)):</strong> यदि सूचना किसी व्यक्ति के <strong>जीवन या व्यक्तिगत स्वतंत्रता (Life and Liberty)</strong> से संबंधित है, तो उसे <strong>48 घंटों</strong> के भीतर देना अनिवार्य है।</p>
                  <p>• **अपील:** प्रथम अपील 30 दिन में वरिष्ठ अधिकारी को, द्वितीय अपील 90 दिन में राज्य/केंद्रीय सूचना आयोग को की जा सकती है।</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-cyan-350 block mb-1 text-sm">💻 सूचना प्रौद्योगिकी अधिनियम, 2000 (IT Act):</span>
                <p>• भारत में साइबर अपराधों को विनियमित करने वाला प्राथमिक कानून (9 जून 2000 को अधिनियमित, 17 अक्टूबर 2000 को लागू)।</p>
                <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1 text-[11px]">
                  <p>• <strong>धारा 66:</strong> कंप्यूटर सिस्टम के साथ हैकिंग या छेड़छाड़ (3 वर्ष की सज़ा या ₹5 लाख तक का जुर्माना)।</p>
                  <p>• <strong>धारा 66E:</strong> किसी की निजता का उल्लंघन करना (बिना सहमति के निजी अंगों की तस्वीरें खींचना/प्रसारित करना)।</p>
                  <p>• <strong>धारा 67A:</strong> इंटरनेट पर स्पष्ट यौन कृत्य वाली सामग्री का प्रकाशन या प्रेषण (प्रथम दोषसिद्धि पर 5 वर्ष तक जेल)।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-cyan-350 block mb-1 text-sm">💰 भ्रष्टाचार निवारण अधिनियम, 1988 (PCA):</span>
                <p>• लोकसेवकों (Public Servants) द्वारा किए जाने वाले भ्रष्टाचार और रिश्वतखोरी पर अंकुश लगाने हेतु अधिनियमित।</p>
                <p>• **लोकसेवक की परिभाषा:** इसके दायरे में मंत्री, सांसद, विधायक, न्यायाधीश, सरकारी कर्मचारी और सहकारी समितियों के पदाधिकारी शामिल हैं।</p>
                <p>• **दंड (संशोधन 2018):** रिश्वत लेना ही नहीं, बल्कि रिश्वत देना (Giver) भी अब एक गंभीर अपराध है जिसके लिए 7 वर्ष तक की जेल हो सकती है (बशर्ते जबरन वसूली के मामले में 7 दिन के भीतर रिपोर्ट न की गई हो)।</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: NSA, PIL, LAND REFORMS */}
        {activeTab === 'security' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-indigo-400 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" /> 📜 राष्ट्रीय सुरक्षा अधिनियम (NSA), जनहित याचिका (PIL) व भूमि राजस्व
              </span>
              <p>देश की अखंडता व सुरक्षा को बनाए रखने वाले असाधारण निवारक निरोध कानून, न्याय को जन-सुलभ बनाने वाली PIL व्यवस्था और कृषि प्रधान देश के भूमि कानून।</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1 text-sm">🚨 राष्ट्रीय सुरक्षा अधिनियम, 1980 (NSA / रासुका):</span>
                <p>• यह एक **निवारक निरोध (Preventive Detention)** कानून है। इसके तहत किसी व्यक्ति को बिना किसी औपचारिक आरोप या मुकदमे के पुलिस/प्रशासन द्वारा हिरासत में लिया जा सकता है यदि वह देश की सुरक्षा या कानून-व्यवस्था के लिए खतरा हो।</p>
                <p>• 🚨 **हिरासत की अवधि:** बिना सलाहकार बोर्ड की मंजूरी के शुरुआत में 3 महीने के लिए हिरासत में लिया जा सकता है, जिसे क्रमशः बढ़ा कर <strong>अधिकतम 12 महीने</strong> तक किया जा सकता है।</p>
                <p>• **प्राधिकृत अधिकारी:** जिलाधिकारी (DM) या पुलिस कमिश्नर इसे लागू कर सकते हैं।</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1 text-sm">⚖️ जनहित याचिका (Public Interest Litigation - PIL):</span>
                <p>• **अवधारणा:** जब समाज के किसी वंचित या पीड़ित वर्ग के अधिकारों का हनन होता है, तो कोई भी जागरूक नागरिक या संस्था उनके पक्ष में सीधे हाई कोर्ट या सुप्रीम कोर्ट में रिट याचिका दायर कर सकती है।</p>
                <p>• 🧠 **भारतीय जनक:** भारत में PIL का जनक पूर्व मुख्य न्यायाधीश <strong>जस्टिस पी. एन. भगवती</strong> और <strong>जस्टिस वी. आर. कृष्ण अय्यर</strong> को माना जाता है (1980 के दशक में)।</p>
                <p>• **महत्वपूर्ण वाद (Landmark Case):** *हुसैनआरा खातून बनाम बिहार राज्य* (1979) - जिसमें जेलों में बंद लाखों विचाराधीन कैदियों के मानवाधिकारों पर फैसला आया।</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1 text-sm">🌾 भूमि सुधार, अधिग्रहण व राजस्व कानून:</span>
                <p>• <strong>संविधान की 9वीं अनुसूची:</strong> पहले संविधान संशोधन (1951) द्वारा भूमि सुधार कानूनों को अदालती समीक्षा से बचाने के लिए बनाई गई थी।</p>
                <p>• <strong>भूमि अधिग्रहण अधिनियम, 2013 (LARR):</strong> सरकारी या सार्वजनिक कार्यों के लिए निजी भूमि के अधिग्रहण पर ग्रामीण क्षेत्रों में बाजार मूल्य का 4 गुना और शहरी क्षेत्रों में 2 गुना मुआवजा देना अनिवार्य करता है। अधिग्रहित करने हेतु 70-80% प्रभावित परिवारों की सहमति आवश्यक है।</p>
                <p>• <strong>उ0प्र0 राजस्व संहिता, 2006 (UP Revenue Code):</strong> उत्तर प्रदेश में भू-राजस्व, पट्टेदारी, खतौनी और नामांतरण (Mutation) से संबंधित नियमों को संहिताबद्ध करता है।</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
