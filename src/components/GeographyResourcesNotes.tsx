"use client";
import React, { useState } from 'react';
import { Map, Globe, Compass, Landmark, Star } from 'lucide-react';

export default function GeographyResourcesNotes() {
  const [activeTab, setActiveTab] = useState<'india' | 'world' | 'resources'>('india');

  const tabs = [
    { id: 'india', label: '🇮🇳 भारत का भूगोल', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { id: 'world', label: '🌍 विश्व का भूगोल', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'resources', label: '💎 प्राकृतिक संसाधन', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#0a0d16]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-455 font-bold border border-indigo-500/20">
          🗺️
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">भारत का भूगोल तथा विश्व भूगोल और प्राकृतिक संसाधन</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable & SI परीक्षा हेतु मानचित्र-आधारित विशेष तथ्य</p>
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

        {/* TAB 1: INDIAN GEOGRAPHY */}
        {activeTab === 'india' && (
          <div className="space-y-6 animate-fadeIn">
            {/* General Intro */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-300 block mb-1">📍 1. स्थिति एवं विस्तार (Location & Expansion):</span>
                <p>• भारत उत्तरी-पूर्वी गोलार्द्ध में स्थित है। इसका मुख्य भूभाग <strong>8°4' उत्तरी अक्षांश से 37°6' उत्तरी अक्षांश</strong> तथा <strong>68°7' पूर्वी देशांतर से 97°25' पूर्वी देशांतर</strong> तक विस्तृत है।</p>
                <p>• **कर्क रेखा ($23^\circ 30'$ N):** भारत के मध्य से होकर <strong>8 राज्यों</strong> (गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा, मिजोरम) से गुजरती है।</p>
                <p>• **मानक समय रेखा ($82^\circ 30'$ E):** प्रयागराज (नैनी) से गुजरती है और <strong>5 राज्यों</strong> (UP, MP, छत्तीसगढ़, ओडिशा, आंध्र प्रदेश) से जाती है। यह ग्रीनविच समय (GMT) से <strong>5 घंटे 30 मिनट आगे</strong> है।</p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-300 block mb-1">⛰️ 2. भौतिक विभाजन (Physical Division):</span>
                <p>• **हिमालय पर्वत श्रृंखला:** विश्व की सबसे नवीन वलित पर्वत श्रृंखला है। इसकी सबसे ऊँची चोटी माउंट एवरेस्ट (8848.86 मी, नेपाल में 'सागरमाथा') है। भारत की सबसे ऊँची चोटी <strong>K2 (गॉडविन ऑस्टिन - 8611 मी, POK में)</strong> तथा पूर्णतः भारतीय नियंत्रण वाली चोटी <strong>कंचनजंगा (8586 मी, सिक्किम)</strong> है।</p>
                <p>• **प्रायद्वीपीय पठार (Peninsular Plateau):** भारत का सबसे प्राचीन भूभाग है। इसकी सर्वोच्च चोटी <strong>अनाईमुडी (2695 मी, केरल)</strong> है, जो दक्षिण भारत की भी सबसे ऊँची चोटी है।</p>
              </div>
            </div>

            {/* Rivers & Mountains Table */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-2">🌊 भारत की नदियाँ व बहुउद्देशीय परियोजनाएँ:</span>
                <ul className="space-y-2 text-slate-350">
                  <li>• <strong>गंगा नदी:</strong> भारत की सबसे लंबी नदी (2525 किमी)। भागीरथी और अलकनंदा के **देवप्रयाग** में संगम के बाद इसे गंगा कहा जाता है।</li>
                  <li>• <strong>दक्षिण भारत की गंगा / बूढ़ी गंगा:</strong> **गोदावरी** नदी को कहा जाता है (दक्षिण भारत की सबसे लंबी नदी)।</li>
                  <li>• **टिहरी बांध:** भागीरथी नदी (उत्तराखंड) पर - भारत का सबसे ऊँचा बांध।</li>
                  <li>• **भाखड़ा नांगल बांध:** सतलुज नदी (हिमाचल-पंजाब) पर।</li>
                  <li>• **हीराकुड बांध:** महानदी (ओडिशा) पर - भारत का सबसे लंबा बांध।</li>
                  <li>• **नागार्जुन सागर बांध:** कृष्णा नदी (आंध्र प्रदेश/तेलंगाना) पर।</li>
                </ul>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-2">🏔️ प्रमुख दर्रे (Passes of India):</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 bg-slate-950/50 rounded border border-white/5">
                    <strong>जम्मू-कश्मीर / लद्दाख:</strong>
                    <p>• काराकोरम, जोजिला, बनिहाल (जवाहर सुरंग इसी में है)।</p>
                  </div>
                  <div className="p-2 bg-slate-950/50 rounded border border-white/5">
                    <strong>हिमाचल प्रदेश:</strong>
                    <p>• शिपकीला (सतलुज नदी प्रवेश), रोहतांग, बारालाचा।</p>
                  </div>
                  <div className="p-2 bg-slate-950/50 rounded border border-white/5">
                    <strong>उत्तराखंड:</strong>
                    <p>• लिपुलेख (मानसरोवर मार्ग), माना, नीति।</p>
                  </div>
                  <div className="p-2 bg-slate-950/50 rounded border border-white/5">
                    <strong>सिक्किम:</strong>
                    <p>• नाथुला, जेलेप्ला।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WORLD GEOGRAPHY */}
        {activeTab === 'world' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5">
                <strong className="text-sky-350 block">🪐 सौरमंडल (Solar System):</strong>
                <p>• सबसे बड़ा ग्रह: <strong>बृहस्पति</strong></p>
                <p>• लाल ग्रह: <strong>मंगल</strong> (आयरन ऑक्साइड के कारण)</p>
                <p>• भोर / सांझ का तारा, पृथ्वी की बहन: <strong>शुक्र</strong> (सबसे गर्म ग्रह)</p>
                <p>• बिना उपग्रह वाले ग्रह: <strong>बुध व शुक्र</strong></p>
              </div>

              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5">
                <strong className="text-sky-350 block">⛰️ पर्वत श्रृंखलाएँ व मरुस्थल:</strong>
                <p>• विश्व की सबसे लंबी पर्वत श्रृंखला: <strong>एंडीज (दक्षिण अमेरिका)</strong></p>
                <p>• विश्व का सबसे बड़ा गर्म मरुस्थल: <strong>सहारा (उत्तरी अफ्रीका)</strong></p>
                <p>• भारत का मरुस्थल: <strong>थार मरुस्थल</strong> (सर्वाधिक जनसंख्या घनत्व वाला मरुस्थल)</p>
                <p>• एशिया का सबसे बड़ा मरुस्थल: <strong>गोबी (मंगोलिया/चीन)</strong></p>
              </div>

              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5">
                <strong className="text-sky-350 block">🌊 महासागर, नहरें व जलसंधियां:</strong>
                <p>• सबसे बड़ा और गहरा महासागर: <strong>प्रशांत महासागर</strong> (मारियाना गर्त - 11022 मी)</p>
                <p>• **स्वेज नहर:** भूमध्य सागर को लाल सागर से जोड़ती है।</p>
                <p>• **पनामा नहर:** प्रशांत महासागर को अटलांटिक महासागर से जोड़ती है।</p>
                <p>• **पाक जलसंधि:** भारत (तमिलनाडु) को श्रीलंका से अलग करती है।</p>
              </div>
            </div>

            {/* Grasslands and Atmosphere */}
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-1">🌾 विश्व के प्रमुख घास के मैदान (Grasslands):</span>
                <div className="grid grid-cols-2 gap-2 text-slate-350">
                  <p>• **प्रेयरी:** उत्तरी अमेरिका</p>
                  <p>• **पम्पास:** अर्जेंटीना (दक्षिण अमेरिका)</p>
                  <p>• **डाउन्स:** ऑस्ट्रेलिया</p>
                  <p>• **वेल्ड:** दक्षिण अफ्रीका</p>
                  <p>• **स्टेपीज:** यूरेशिया (यूरोप + एशिया)</p>
                  <p>• **लल्लोस:** वेनेजुएला</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-1">🌤️ वायुमंडल की परतें (Atmospheric Layers):</span>
                <ul className="space-y-1 text-slate-350">
                  <li>• **क्षोभमंडल (Troposphere):** सबसे निचली परत। सभी मौसम सम्बन्धी घटनाएं (वर्षा, आंधी, बादल) इसी में होती हैं।</li>
                  <li>• **समतापमंडल (Stratosphere):** तापमान समान रहता है। हवाई जहाज उड़ाने के लिए आदर्श। <strong>ओजोन परत ($O_3$)</strong> इसी परत में पाई जाती है, जो पराबैंगनी किरणों से रक्षा करती है।</li>
                  <li>• **आयनमंडल (Ionosphere):** रेडियो तरंगों को परावर्तित करता है (दूरसंचार में सहायक)।</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NATURAL RESOURCES & MINERALS */}
        {activeTab === 'resources' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-emerald-300 block text-xs md:text-sm">💎 भारत के खनिज संसाधन (Minerals in India):</span>
              <p>भारत में खनिज संपन्नता की दृष्टि से <strong>'छोटा नागपुर पठार'</strong> को <strong>'भारत का रूर' (Ruhr of India)</strong> कहा जाता है।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-slate-100 block mb-2">📍 प्रमुख खनिज उत्पादक राज्य (Mineral Leaders in India)</span>
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-emerald-300">
                      <th className="p-2">खनिज</th>
                      <th className="p-2">उत्पादन में अग्रणी राज्य</th>
                      <th className="p-2">प्रसिद्ध खान / क्षेत्र</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-350">
                    <tr>
                      <td className="p-2 font-bold">कोयला (Coal)</td>
                      <td className="p-2">छत्तीसगढ़ (उत्पादन), झारखंड (भंडार)</td>
                      <td className="p-2">झरिया (झारखंड), रानीगंज (WB)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">लोहा (Iron Ore)</td>
                      <td className="p-2">ओडिशा</td>
                      <td className="p-2">मयूरभंज (ओडिशा), बैलाडीला (छत्तीसगढ़)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">ताँबा (Copper)</td>
                      <td className="p-2">मध्य प्रदेश</td>
                      <td className="p-2">खेतड़ी (राजस्थान - अत्यंत प्रसिद्ध ऐतिहासिक स्थल)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">सोना (Gold)</td>
                      <td className="p-2">कर्नाटक</td>
                      <td className="p-2">कोलार (KGF) और हट्टी की खानें</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">अबरख (Mica)</td>
                      <td className="p-2">आंध्र प्रदेश</td>
                      <td className="p-2">नेल्लोर जिला (विश्व प्रसिद्ध)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">कच्चा तेल (Petroleum)</td>
                      <td className="p-2">राजस्थान (ऑनशोर), महाराष्ट्र (ऑफशोर)</td>
                      <td className="p-2">डिगबोई (असम - भारत का पहला कुआँ), बॉम्बे हाई</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-4">
                <div>
                  <span className="font-bold text-slate-100 block mb-1">🌲 वन संसाधन (ISFR 2021 रिपोर्ट के अनुसार):</span>
                  <p className="text-[11px] text-slate-400 mb-2">देहरादून स्थित भारतीय वन सर्वेक्षण (FSI) हर 2 वर्ष में रिपोर्ट जारी करता है:</p>
                  <ul className="space-y-1.5 text-slate-350">
                    <li>• **कुल वनावरण + वृक्षावरण:** देश के भौगोलिक क्षेत्र का <strong>24.62%</strong> है। (लक्ष्य 33% का है)।</li>
                    <li>• **क्षेत्रफल के अनुसार सर्वाधिक वन:** 1. मध्य प्रदेश, 2. अरुणाचल प्रदेश।</li>
                    <li>• **क्षेत्रफल के अनुसार न्यूनतम वन:** हरियाणा।</li>
                    <li>• **प्रतिशत के अनुसार सर्वाधिक वन:** मिजोरम (84.53%)।</li>
                    <li>• **सर्वाधिक वन वृद्धि करने वाला राज्य:** आंध्र प्रदेश।</li>
                  </ul>
                </div>

                <div className="p-2.5 bg-emerald-500/5 rounded border border-emerald-500/10 text-[11px] text-emerald-350">
                  ⚡ <strong>सौर ऊर्जा अग्रणी:</strong> भारत में सौर ऊर्जा के उत्पादन में **राजस्थान** वर्तमान में प्रथम स्थान पर है, जबकि पवन ऊर्जा में **तमिलनाडु** अग्रणी है।
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
