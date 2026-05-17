"use client";
import React, { useState } from 'react';
import { 
  Leaf, ShoppingBag, Landmark, Award, ShieldAlert, BookOpen, Star, HelpCircle 
} from 'lucide-react';

export default function AgricultureTradeNotes() {
  const [activePart, setActivePart] = useState<'agri' | 'trade' | 'banking' | 'schemes'>('agri');

  const tabs = [
    { id: 'agri', label: '🌾 भारतीय कृषि', color: 'text-emerald-450 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'trade', label: '🚢 वाणिज्य एवं व्यापार', color: 'text-sky-405 border-sky-500/30 bg-sky-500/5' },
    { id: 'banking', label: '🏦 बैंकिंग व WTO', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'schemes', label: '📝 चुनौतियाँ व योजनाएँ', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0b1b17]/95 border border-emerald-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20">
          🌾
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">भारतीय कृषि, वाणिज्य एवं व्यापार (Indian Agriculture, Commerce & Trade)</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable & SI परीक्षाओं के लिए सम्पूर्ण तथ्य और विश्लेषण</p>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePart(tab.id)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl border transition-all duration-300 ${
              activePart === tab.id 
                ? `${tab.color} border-current shadow-lg` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* PART 1: INDIAN AGRICULTURE */}
        {activePart === 'agri' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-slate-100 block text-xs md:text-sm">📊 कृषि क्षेत्र की बुनियादी स्थिति:</span>
              <p>भारत एक कृषि प्रधान देश है, जहाँ लगभग <strong>49% से अधिक आबादी</strong> प्रत्यक्ष या अप्रत्यक्ष रूप से कृषि और संबद्ध क्षेत्रों पर निर्भर है। देश के सकल घरेलू उत्पाद (GDP) में कृषि क्षेत्र का योगदान लगभग <strong>16-18%</strong> है।</p>
            </div>

            {/* Classification of Crops */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded" />
                फसलों का मौसमी वर्गीकरण (Classification of Crops)
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6 text-xs">
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-emerald-350 block">🌧️ A. खरीफ फसलें (Kharif Crops)</strong>
                  <p className="text-slate-400">• <strong>समय:</strong> जून-जुलाई (मानसून आगमन) में बोई जाती हैं और अक्टूबर-नवंबर में काटी जाती हैं।</p>
                  <p className="text-slate-400">• <strong>विशेषता:</strong> अधिक पानी और उच्च तापमान की आवश्यकता।</p>
                  <p><strong>मुख्य फसलें:</strong> धान (चावल), मक्का, कपास (गुजरात की काली मिट्टी में सर्वोत्तम), गन्ना, बाजरा, ज्वार, अरहर, मूंगफली, सोयाबीन।</p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-sky-350 block">❄️ B. रबी फसलें (Rabi Crops)</strong>
                  <p className="text-slate-400">• <strong>समय:</strong> अक्टूबर-नवंबर (सर्दियों) में बोई जाती हैं और मार्च-अप्रैल (गर्मी) में काटी जाती हैं।</p>
                  <p className="text-slate-400">• <strong>विशेषता:</strong> बोते समय कम तापमान, पकते समय शुष्क वातावरण।</p>
                  <p><strong>मुख्य फसलें:</strong> गेहूं, जौ, चना, सरसों (राजस्थान अग्रणी), मटर, आलू, अलसी।</p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-amber-350 block">☀️ C. जायद फसलें (Zaid Crops)</strong>
                  <p className="text-slate-400">• <strong>समय:</strong> रबी और खरीफ के बीच (मार्च-अप्रैल में बोई जाती हैं, जून में काटी जाती हैं)।</p>
                  <p className="text-slate-400">• <strong>विशेषता:</strong> तेज गर्मी में उगती हैं, पानी की मात्रा अधिक होती है।</p>
                  <p><strong>मुख्य फसलें:</strong> तरबूज, खरबूज, खीरा, ककड़ी, मूंग और विभिन्न प्रकार के हरे चारे।</p>
                </div>
              </div>
            </div>

            {/* Quick Revision Crop Table & Irrigation */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
                <h4 className="text-sm md:text-base font-semibold text-emerald-400 mb-3">📍 प्रमुख कृषि क्षेत्र और राज्य (Quick Revision Table)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-slate-950/40 text-emerald-350">
                        <th className="p-2">फसल</th>
                        <th className="p-2">सबसे बड़ा उत्पादक</th>
                        <th className="p-2">विशेष तथ्य</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-350">
                      <tr>
                        <td className="p-2 font-bold text-slate-200">चावल</td>
                        <td className="p-2">पश्चिम बंगाल</td>
                        <td className="p-2">भारत की मुख्य खाद्य फसल है।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">गेहूँ</td>
                        <td className="p-2">उत्तर प्रदेश</td>
                        <td className="p-2">हरित क्रांति का सर्वाधिक प्रभाव इसी पर पड़ा।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">मक्का</td>
                        <td className="p-2">कर्नाटक</td>
                        <td className="p-2">इसे 'अनाजों की रानी' भी कहा जाता है।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">दालें</td>
                        <td className="p-2">मध्य प्रदेश</td>
                        <td className="p-2">भारत दालों का सबसे बड़ा उत्पादक व उपभोक्ता है।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">मूंगफली</td>
                        <td className="p-2">गुजरात</td>
                        <td className="p-2">एक प्रमुख तिलहन फसल है।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">सिल्क (रेशम)</td>
                        <td className="p-2">कर्नाटक</td>
                        <td className="p-2">भारत में रेशम की चारों किस्में (मलबरी, टसर, इरी, मूँगा) मिलती हैं।</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-4">
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">💧 भारत में सिंचाई के साधन (Irrigation in India)</h4>
                  <p className="text-xs text-slate-400 mb-2">भारतीय कृषि को "मानसून का जुआ" कहा जाता है। व्यवस्थित खेती के लिए सिंचाई आवश्यक है:</p>
                  <ul className="space-y-2 text-xs text-slate-350">
                    <li>• <strong>कुआँ और ट्यूबवेल (Wells & Tubewells):</strong> भारत में सर्वाधिक सिंचाई (लगभग <strong>60% से अधिक</strong>) कुओं और नलकूपों (ट्यूबवेल) द्वारा होती है। <strong>उत्तर प्रदेश</strong> इस सूची में शीर्ष पर है।</li>
                    <li>• <strong>नहरें (Canals):</strong> दूसरा सबसे बड़ा साधन। 
                      <ul className="pl-3 space-y-0.5 mt-1 text-[11px] text-slate-400">
                        <li>- <strong>इन्दिरा गांधी नहर:</strong> भारत की सबसे लंबी नहर, जो सतलुज व ब्यास नदी के संगम (हरिके बैराज) से पानी लेती है और राजस्थान के मरुस्थली को हरा-भरा बनाती है।</li>
                        <li>- <strong>अपर गंगा नहर:</strong> उत्तर प्रदेश की प्रमुख और प्राचीन नहर प्रणाली।</li>
                      </ul>
                    </li>
                    <li>• <strong>तालाब (Tanks):</strong> दक्षिण भारत (जैसे तमिलनाडु, आंध्र प्रदेश) में पथरीली भूमि के कारण तालाबों द्वारा सिंचाई अधिक लोकप्रिय है।</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Soils & Revolutions Table */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">🌱 भारत की प्रमुख मिट्टियाँ (Soils of India)</h4>
                <p className="text-[11px] text-slate-400">ICAR ने भारत की मिट्टी को 8 भागों में विभाजित किया है, जिनमें से 4 सर्वाधिक महत्वपूर्ण हैं:</p>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-slate-950/45 rounded border border-white/5">
                    <strong>1. जलोढ़ मिट्टी (Alluvial Soil):</strong> भारत के सबसे बड़े क्षेत्र (<strong>लगभग 43%</strong>) पर मिलती है। नदियों द्वारा बहाकर लाई गई यह मिट्टी गेहूं, धान और आलू के लिए अत्यधिक उपजाऊ है।
                  </div>
                  <div className="p-2 bg-slate-950/45 rounded border border-white/5">
                    <strong>2. काली मिट्टी (Black Soil / Regur):</strong> बेसाल्ट चट्टानों के टूटने से निर्मित। जल धारण क्षमता सर्वाधिक होती है। <strong>कपास (Cotton)</strong> की खेती के लिए सर्वोत्तम। मुख्य क्षेत्र: महाराष्ट्र, गुजरात और मध्य प्रदेश।
                  </div>
                  <div className="p-2 bg-slate-950/45 rounded border border-white/5">
                    <strong>3. लाल मिट्टी (Red Soil):</strong> लोहे के ऑक्साइड ($Fe_2O_3$) की उपस्थिति के कारण इसका रंग लाल होता है। कम उपजाऊ होती है, परंतु खाद के उपयोग से मोटे अनाज उगाए जाते हैं।
                  </div>
                  <div className="p-2 bg-slate-950/45 rounded border border-white/5">
                    <strong>4. लेटराइट मिट्टी (Laterite Soil):</strong> अत्यधिक वर्षा और निक्षालन (Leaching) वाले क्षेत्रों में बनती है। <strong>चाय, कॉफी और काजू</strong> की खेती के लिए सबसे उपयुक्त। मुख्य क्षेत्र: केरल, कर्नाटक और असम की पहाड़ियाँ।
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">🚀 प्रमुख कृषि क्रांतियाँ (Quick Analysis)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-slate-950/40 text-emerald-300">
                        <th className="p-2">क्रांति</th>
                        <th className="p-2">संबंधित क्षेत्र</th>
                        <th className="p-2">जनक / विशेष तथ्य</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-350">
                      <tr>
                        <td className="p-2 font-bold text-slate-200">हरित क्रांति</td>
                        <td className="p-2">खाद्यान्न (गेहूं व चावल)</td>
                        <td className="p-2">डॉ. एम. एस. स्वामीनाथन (भारत), नॉर्मन बोरलॉग (विश्व)।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">श्वेत क्रांति</td>
                        <td className="p-2">दुग्ध (दूध) उत्पादन</td>
                        <td className="p-2">डॉ. वर्गीज कुरियन (ऑपरेशन फ्लड)।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">नीली क्रांति</td>
                        <td className="p-2">मत्स्य (मछली) उत्पादन</td>
                        <td className="p-2">डॉ. अरुण कृष्णन।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">पीली क्रांति</td>
                        <td className="p-2">तिलहन (खाद्य तेल, सरसों)</td>
                        <td className="p-2">सैम पित्रोदा।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">गुलाबी क्रांति</td>
                        <td className="p-2">झींगा मछली और प्याज</td>
                        <td className="p-2">दुर्गेश पटेल।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">लाल क्रांति</td>
                        <td className="p-2">टमाटर और मांस</td>
                        <td className="p-2">विशाल तिवारी।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">रजत (Silver)</td>
                        <td className="p-2">अंडा व पोल्ट्री उत्पादन</td>
                        <td className="p-2">इंदिरा गांधी के समय बढ़ावा मिला।</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-slate-200">गोल क्रांति</td>
                        <td className="p-2">आलू उत्पादन</td>
                        <td className="p-2">भारत का केंद्रीय आलू अनुसंधान संस्थान शिमला में स्थित है।</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Allied Sectors & Institutions */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 grid md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-2">
                <strong className="text-slate-100 block mb-1">🏦 कृषि से संबंधित महत्वपूर्ण संस्थान:</strong>
                <p>• <strong>ICAR (भारतीय कृषि अनुसंधान परिषद):</strong> मुख्यालय - <strong>नई दिल्ली</strong>। यह भारत में कृषि अनुसंधान और शिक्षा के लिए सर्वोच्च नियामक संस्था है।</p>
                <p className="mt-1.5">• <strong>NABARD (राष्ट्रीय कृषि और ग्रामीण विकास बैंक):</strong>
                  <ul className="pl-3 space-y-1 mt-1 text-[11px] text-slate-400">
                    <li>- स्थापना: <strong>12 जुलाई 1982</strong> को <strong>शिवरमन समिति</strong> की सिफारिश पर।</li>
                    <li>- मुख्यालय: <strong>मुंबई</strong>। यह सीधे किसानों को ऋण नहीं देता, बल्कि ग्रामीण बैंकों व सहकारी बैंकों को पुनर्वित्त (Refinance) प्रदान करता है।</li>
                  </ul>
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-slate-100 block mb-1">🐄 संबद्ध क्षेत्र (Allied Sectors):</strong>
                <p>• <strong>पशुपालन (Animal Husbandry):</strong> भारत विश्व में कुल पशुधन (Livestock) और दुग्ध उत्पादन में प्रथम स्थान पर है। उत्तर प्रदेश भारत में दुग्ध उत्पादन में अग्रणी है।</p>
                <p className="mt-1.5">• <strong>मत्स्य पालन (Blue Economy):</strong> लंबी तटरेखा के कारण अंतर्देशीय (Inland) और समुद्री (Marine) दोनों प्रकार के मछली उत्पादन में भारत का महत्वपूर्ण स्थान है।</p>
                <p className="mt-1.5">• <strong>बागवानी (Horticulture):</strong> फल, फूल, सब्जियां और मसाले उगाए जाते हैं। राष्ट्रीय बागवानी मिशन (NHM) की शुरुआत <strong>2005-06</strong> में हुई थी।</p>
              </div>
            </div>
          </div>
        )}

        {/* PART 2: COMMERCE AND TRADE */}
        {activePart === 'trade' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <p><strong>वाणिज्य (Commerce)</strong> का अर्थ है वस्तुओं और सेवाओं का उत्पादन केंद्र से अंतिम उपभोक्ता तक पहुंचना। इसमें व्यापार (Trade) और व्यापार की सहायक गतिविधियाँ (जैसे बैंकिंग, परिवहन, बीमा, भंडारण) शामिल हैं।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm md:text-base font-semibold text-sky-400 mb-2">🌐 व्यापार के प्रकार व विदेशी व्यापार</h4>
                <ul className="space-y-2 text-slate-350">
                  <li>• <strong>1. आंतरिक व्यापार (Internal Trade):</strong> देश की भौगोलिक सीमा के भीतर होने वाला राज्यों के बीच व्यापार (जैसे उत्तर प्रदेश और महाराष्ट्र के बीच)। इस पर मुख्य रूप से <strong>CGST व SGST</strong> लागू होता है।</li>
                  <li>• <strong>2. बाह्य / अंतर्राष्ट्रीय व्यापार (Foreign Trade):</strong> दो या अधिक देशों के बीच होने वाला आयात (Import - विदेशी सामान मंगाना) और निर्यात (Export - अपने देश का सामान भेजना)।</li>
                  <li className="p-2.5 bg-red-500/5 rounded border border-red-500/10 text-[11px] text-red-300">
                    ⚠️ <strong>व्यापार घाटा (Trade Deficit):</strong> जब किसी देश का कुल आयात (Import) उसके कुल निर्यात (Export) से अधिक हो जाता है, तो उसे व्यापार घाटा कहते हैं। भारत का व्यापार संतुलन आमतौर पर घाटे में रहता है क्योंकि हमें भारी मात्रा में कच्चा तेल (Crude Oil) आयात करना पड़ता है।
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm md:text-base font-semibold text-sky-400 mb-2">🚢 भारत के प्रमुख बंदरगाह (Major Ports)</h4>
                <p className="text-slate-400 text-xs mb-2">भारत के अंतर्राष्ट्रीय व्यापार का <strong>लगभग 95%</strong> (मात्रा के हिसाब से) समुद्री मार्ग से होता है। भारत में 13 बड़े और 200 से अधिक छोटे बंदरगाह हैं:</p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p>🔹 <strong>मुंबई बंदरगाह (महाराष्ट्र):</strong> भारत का सबसे बड़ा और सबसे व्यस्त प्राकृतिक बंदरगाह।</p>
                  <p>🔹 <strong>न्हावा शेवा / जवाहरलाल नेहरू बंदरगाह (महाराष्ट्र):</strong> भारत का सबसे बड़ा कृत्रिम और पूरी तरह से यंत्रीकृत (Automated) कंटेनर बंदरगाह।</p>
                  <p>🔹 <strong>कांडला बंदरगाह (गुजरात):</strong> इसका नया नाम <strong>'दीनदयाल बंदरगाह'</strong> है। यह एक ज्वारीय (Tidal) बंदरगाह है और <strong>मुक्त व्यापार क्षेत्र (Free Trade Zone)</strong> है।</p>
                  <p>🔹 <strong>चेन्नई बंदरगाह (तमिलनाडु):</strong> भारत का सबसे पुराना कृत्रिम बंदरगाह।</p>
                  <p>🔹 <strong>विशाखापट्टनम बंदरगाह (आंध्र प्रदेश):</strong> भारत का सबसे गहरा और भूमि से घिरा (Landlocked) सुरक्षित प्राकृतिक बंदरगाह।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PART 3: BANKING AND WTO */}
        {activePart === 'banking' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-indigo-400 mb-2">🏦 भारतीय रिज़र्व बैंक (RBI) - मुख्य परीक्षा बिंदु</h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1.5">
                  <span className="font-bold text-indigo-300">📅 संस्थागत इतिहास व कार्य:</span>
                  <p>• स्थापना: <strong>1 अप्रैल 1935</strong> (हिल्टन यंग कमीशन की सिफारिश पर, RBI अधिनियम 1934 के तहत)।</p>
                  <p>• राष्ट्रीयकरण: <strong>1 जनवरी 1949</strong> को।</p>
                  <p>• मुख्यालय: <strong>मुंबई</strong> (शुरुआत में कोलकाता था, 1937 में स्थानांतरित हुआ)।</p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded border border-white/5 space-y-1.5">
                  <span className="font-bold text-indigo-300">💡 परीक्षा-केंद्रित विशेष तथ्य:</span>
                  <p>• मौद्रिक नीति (Monetary Policy) द्वारा महंगाई व मंदी को नियंत्रित करने हेतु रेपो दर, रिवर्स रेपो दर, CRR, SLR का निर्धारण करता है।</p>
                  <p>• विदेशी मुद्रा भंडार (Foreign Exchange Reserves) का संरक्षण व प्रबंधन।</p>
                  <p className="font-semibold text-amber-400 bg-amber-500/5 p-1 rounded text-[11px]">
                    🔥 <strong>₹1 के नोट पर किसके हस्ताक्षर होते हैं?</strong> भारत के <strong>वित्त सचिव (Finance Secretary)</strong> के।
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">💻 ई-कॉमर्स व डिजिटल इंडिया (UPI)</h4>
                <p className="text-slate-400">इंटरनेट के माध्यम से वस्तुओं व सेवाओं का क्रय-विक्रय:</p>
                <div className="space-y-1 text-slate-350">
                  <p>• <strong>B2B:</strong> Business to Business (थोक व्यापार)।</p>
                  <p>• <strong>B2C:</strong> Business to Consumer (जैसे Amazon, Flipkart)।</p>
                  <p>• <strong>C2C:</strong> Consumer to Consumer (जैसे OLX)।</p>
                </div>
                <p className="text-[11px] text-emerald-400 bg-emerald-500/5 p-2 rounded">
                  📌 <strong>UPI (Unified Payments Interface):</strong> डिजिटल लेन-देन को बढ़ावा देने के लिए इसे <strong>NPCI (National Payments Corporation of India)</strong> ने लॉन्च किया, जिसने देश के व्यापार को अभूतपूर्व गति दी है।
                </p>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">🌐 विश्व व्यापार संगठन (World Trade Organization - WTO)</h4>
                <p className="text-slate-400">अंतर्राष्ट्रीय व्यापार के नियमों को तय करने वाला प्रमुख संगठन:</p>
                <div className="space-y-1.5 text-slate-350">
                  <p>• स्थापना: <strong>1 जनवरी 1995</strong> (इससे पहले यह <strong>GATT</strong> के नाम से जाना जाता था)।</p>
                  <p>• मुख्यालय: <strong>जेनेवा, स्विट्जरलैंड</strong>।</p>
                  <p>• मुख्य कार्य: देशों के बीच व्यापारिक विवादों को सुलझाना और टैरिफ (सीमा शुल्क) कम कर मुक्त व्यापार को बढ़ावा देना।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PART 4: CHALLENGES, REFORMS & GOVT SCHEMES */}
        {activePart === 'schemes' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Challenges */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-sm md:text-base font-semibold text-amber-400 mb-3">⚠️ भारतीय कृषि की प्रमुख चुनौतियाँ</h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-950/40 rounded border border-white/5">
                  <strong>1. मानसून पर निर्भरता व भूमि का विखंडन:</strong>
                  <p className="text-slate-400 mt-1">सिंचाई साधनों के अभाव में किसान बारिश पर निर्भर हैं। उत्तराधिकार कानूनों के कारण खेत छोटे व बिखरे हो रहे हैं, जिससे आधुनिक मशीनों (ट्रैक्टर, हार्वेस्टर) का उपयोग कठिन हो जाता है।</p>
                </div>
                <div className="p-3 bg-slate-950/40 rounded border border-white/5">
                  <strong>2. संस्थागत ऋण व कोल्ड स्टोरेज की कमी:</strong>
                  <p className="text-slate-400 mt-1">छोटा किसान आज भी स्थानीय साहूकारों के चंगुल में फंसकर कर्ज के जाल में डूब जाता है। कोल्ड स्टोरेज न होने के कारण सब्जियां और फल जल्दी खराब हो जाते हैं, जिससे किसानों को सही दाम नहीं मिल पाता।</p>
                </div>
              </div>
            </div>

            {/* Government Schemes */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-base font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                महत्वपूर्ण सरकारी योजनाएँ (Most Important for Exam)
              </h4>

              <div className="grid md:grid-cols-2 gap-6 text-xs">
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-amber-350 block">👨‍🌾 A. प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)</strong>
                  <p className="text-slate-400">उद्देश्य: छोटे और सीमांत किसानों को सीधे आर्थिक सहायता प्रदान करना।</p>
                  <p className="text-slate-300 bg-amber-500/5 p-2 rounded">
                    📌 <strong>लाभ:</strong> इसके तहत पात्र किसान परिवारों को प्रति वर्ष <strong>₹6,000 की वित्तीय सहायता</strong> ₹2,000 की तीन बराबर किश्तों में सीधे बैंक खातों (DBT) में भेजी जाती है।
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-amber-350 block">🛡️ B. प्रधानमंत्री फसल बीमा योजना (PMFBY)</strong>
                  <p className="text-slate-400">उद्देश्य: प्राकृतिक आपदाओं, कीटों और बीमारियों के कारण फसलों को होने वाले नुकसान के लिए न्यूनतम प्रीमियम पर बीमा कवर देना।</p>
                  <div className="text-slate-300 bg-slate-900/50 p-2 rounded">
                    <strong>प्रीमियम दरें (अति-महत्वपूर्ण):</strong>
                    <div className="grid grid-cols-3 gap-1 mt-1 text-[11px] text-center font-bold">
                      <span className="bg-emerald-500/10 p-1 rounded">खरीफ: 2%</span>
                      <span className="bg-sky-500/10 p-1 rounded">रबी: 1.5%</span>
                      <span className="bg-purple-500/10 p-1 rounded">व्यावसायिक: 5%</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-amber-350 block">🧪 C. मृदा स्वास्थ्य कार्ड योजना (Soil Health Card Scheme)</strong>
                  <p className="text-slate-400">शुरुआत: <strong>19 फरवरी 2015</strong> को राजस्थान के <strong>सूरतगढ़</strong> से।</p>
                  <p className="text-slate-100 bg-amber-500/10 py-1 px-2 rounded inline-block text-[11px] font-bold">नारा: "स्वस्थ धरा, खेत हरा"</p>
                  <p className="text-slate-400 mt-1">उद्देश्य: मिट्टी के पोषक तत्वों की जांच कर किसानों को सही मात्रा में खाद के उपयोग की सलाह देना।</p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2">
                  <strong className="text-amber-350 block">🏪 D. e-NAM (राष्ट्रीय कृषि बाजार)</strong>
                  <p className="text-slate-400">यह एक ऑनलाइन पारदर्शी व्यापार पोर्टल है, जो पूरे भारत की कृषि उपज मंडियों (APMC) को एक नेटवर्क में जोड़ता है ताकि किसानों को उनकी फसल का देशव्यापी और सही मूल्य मिल सके।</p>
                </div>
              </div>
            </div>

            {/* Quick One-Liners for UP Police */}
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-base font-semibold text-amber-400 mb-3">💡 UP Police Constable & SI परीक्षा "क्विक वन-लाइनर्स"</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                  <span className="font-bold text-slate-150 block mb-1.5">1. उत्तर प्रदेश का कृषि में स्थान:</span>
                  <p className="text-slate-400">उत्तर प्रदेश भारत में <strong>गेहूँ, गन्ना, आलू और दुग्ध (दूध)</strong> उत्पादन में देश में <strong>प्रथम स्थान</strong> पर है।</p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                  <span className="font-bold text-slate-150 block mb-1.5">2. महत्वपूर्ण अनुसंधान संस्थान:</span>
                  <ul className="space-y-1 text-slate-400">
                    <li>• केंद्रीय गन्ना अनुसंधान संस्थान: <strong>लखनऊ</strong></li>
                    <li>• राष्ट्रीय शर्करा (चीनी) संस्थान: <strong>कानपुर</strong></li>
                    <li>• भारतीय दलहन अनुसंधान संस्थान: <strong>कानपुर</strong></li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-950/50 rounded border border-white/5">
                  <span className="font-bold text-slate-150 block mb-1.5">3. बैंकिंग व योजना नियोजन तथ्य:</span>
                  <p className="text-slate-400">• ₹1 के नोट पर भारत के <strong>वित्त सचिव</strong> के हस्ताक्षर होते हैं।</p>
                  <p className="text-slate-400 mt-1">• नाबार्ड (NABARD) की स्थापना <strong>छठी पंचवर्षीय योजना</strong> (1980-1985) के दौरान हुई थी।</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
