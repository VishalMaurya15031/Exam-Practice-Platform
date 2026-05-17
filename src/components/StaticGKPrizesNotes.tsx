"use client";
import React, { useState } from 'react';
import { Award, Globe, Calendar, Search, BookOpen, Share2, Star } from 'lucide-react';

export default function StaticGKPrizesNotes() {
  const [activeTab, setActiveTab] = useState<'prizes' | 'countries' | 'days' | 'misc' | 'social'>('prizes');

  const tabs = [
    { id: 'prizes', label: '🏆 पुरस्कार व सम्मान', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5' },
    { id: 'countries', label: '🌍 देश, राजधानी व मुद्रा', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { id: 'days', label: '📅 महत्वपूर्ण दिवस', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' },
    { id: 'misc', label: '🔬 खोज, संस्थान व पुस्तकें', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'social', label: '📱 सोशल मीडिया संचार', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#090b16]/95 border border-yellow-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-455 font-bold border border-yellow-500/20">
          🏆
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">विविध सामान्य ज्ञान (Static GK Encyclopedia)</h3>
          <p className="text-xs md:text-sm text-slate-400">पुरस्कार, देश-राजधानी, दिवस, अनुसंधान संस्थान, पुस्तकें, तथा सोशल मीडिया संचार</p>
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

        {/* TAB 1: AWARDS AND PRIZES */}
        {activeTab === 'prizes' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-yellow-305 block mb-1">🥇 भारत रत्न (Bharat Ratna):</span>
                <p>• यह भारत का <strong>सर्वोच्च नागरिक सम्मान</strong> है। इसकी शुरुआत <strong>1954</strong> में हुई थी।</p>
                <p>• प्रथम प्राप्तकर्ता: <strong>डॉ. सर्वपल्ली राधाकृष्णन, सी. राजगोपालाचारी, और डॉ. सी. वी. रमन</strong>।</p>
                <p>• एक वर्ष में अधिकतम **3 व्यक्तियों** को दिया जा सकता है। यह तांबे के बने <strong>'पीपल के पत्ते'</strong> के आकार का होता है जिसके ऊपर प्लैटिनम का चमकता सूर्य अंकित होता है।</p>
                <p className="p-2 bg-yellow-500/5 text-yellow-300 rounded text-[11px]">
                  📌 **नवीनतम तथ्य (2024):** जननायक कर्पूरी ठाकुर, लालकृष्ण आडवाणी, पूर्व प्रधानमंत्री चौधरी चरण सिंह, पी.वी. नरसिम्हा राव, और डॉ. एम.एस. स्वामीनाथन को मरणोपरांत भारत रत्न से सम्मानित किया गया।
                </p>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-yellow-305 block mb-1">🎖️ साहित्यिक व वीरता पुरस्कार (Literary & Gallantry):</span>
                <p>• <strong>ज्ञानपीठ पुरस्कार (Jnanpith Award):</strong> भारत का सर्वोच्च साहित्यिक सम्मान (शुरुआत 1961)। प्रथम विजेता: **जी. शंकर कुरुप** (मलयालम)। हिंदी में पहले विजेता: **सुमित्रानंदन पंत** (चिदंबरा हेतु)।</p>
                <p>• <strong>परमवीर चक्र:</strong> युद्धकाल में अदम्य साहस प्रदर्शन के लिए भारत का <strong>सर्वोच्च वीरता पुरस्कार</strong>। प्रथम प्राप्तकर्ता: **मेजर सोमनाथ शर्मा**।</p>
                <p>• <strong>अशोक चक्र:</strong> शांतिकाल (Peacetime) का सर्वोच्च वीरता पुरस्कार।</p>
                <p>• <strong>नोबेल पुरस्कार:</strong> शुरुआत 1901 में हुई। प्रथम भारतीय विजेता: <strong>रवींद्रनाथ टैगोर</strong> (1913, साहित्य - **गीतांजलि** महाकाव्य हेतु)।</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COUNTRIES, CAPITALS, CURRENCIES */}
        {activeTab === 'countries' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5 text-xs">
              <h4 className="text-sm font-semibold text-sky-400 mb-3">🌎 प्रमुख पड़ोसी व वैश्विक देश, राजधानी एवं मुद्राएँ (Exam Special Chart)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-sky-305">
                      <th className="p-2">देश (Country)</th>
                      <th className="p-2">राजधानी (Capital)</th>
                      <th className="p-2">मुद्रा (Currency)</th>
                      <th className="p-2">विशेषता / तथ्य</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-350">
                    <tr>
                      <td className="p-2 font-bold text-slate-200">बांग्लादेश</td>
                      <td className="p-2">ढाका</td>
                      <td className="p-2">टका (Taka)</td>
                      <td className="p-2">भारत की सर्वाधिक लंबी सीमा साझा करता है।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-slate-200">नेपाल</td>
                      <td className="p-2">काठमांडू</td>
                      <td className="p-2">नेपाली रुपया</td>
                      <td className="p-2">सार्क (SAARC) का मुख्यालय काठमांडू में है।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-slate-200">भूटान</td>
                      <td className="p-2">थिमफू</td>
                      <td className="p-2">नुगल्ट्रम (Ngultrum)</td>
                      <td className="p-2">इसे 'लैंड ऑफ थंडर ड्रैगन' भी कहते हैं।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-slate-200">म्यांमार</td>
                      <td className="p-2">नेपीडॉ (Naypyidaw)</td>
                      <td className="p-2">क्यात (Kyat)</td>
                      <td className="p-2">इसे 'स्वर्ण पैगोडा का देश' कहा जाता है।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-slate-200">चीन</td>
                      <td className="p-2">बीजिंग</td>
                      <td className="p-2">रेनमिन्बी - युआन (Yuan)</td>
                      <td className="p-2">विश्व में सर्वाधिक देशों (14) से सीमा साझा करता है।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-slate-200">रूस</td>
                      <td className="p-2">मास्को</td>
                      <td className="p-2">रूबल (Ruble)</td>
                      <td className="p-2">क्षेत्रफल की दृष्टि से विश्व का सबसे बड़ा देश।</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-slate-200">जापान</td>
                      <td className="p-2">टोक्यो</td>
                      <td className="p-2">येन (Yen)</td>
                      <td className="p-2">इसे 'उगते सूरज का देश' भी कहते हैं।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: IMPORTANT DAYS */}
        {activeTab === 'days' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-white/5">
              <h4 className="text-sm md:text-base font-semibold text-rose-455 mb-3">📅 परीक्षाओं के पसंदीदा "अति-महत्वपूर्ण दिवस" (Monthly Highlight)</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>❄️ जनवरी:</strong>
                  <p className="text-slate-400 mt-1">• <strong>9 जनवरी:</strong> प्रवासी भारतीय दिवस</p>
                  <p className="text-slate-400">• <strong>12 जनवरी:</strong> राष्ट्रीय युवा दिवस (विवेकानंद)</p>
                  <p className="text-slate-400">• <strong>25 जनवरी:</strong> राष्ट्रीय मतदाता दिवस</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>🌸 फरवरी - अप्रैल:</strong>
                  <p className="text-slate-400 mt-1">• <strong>28 फरवरी:</strong> राष्ट्रीय विज्ञान दिवस (रमन प्रभाव)</p>
                  <p className="text-slate-400">• <strong>22 मार्च:</strong> विश्व जल दिवस</p>
                  <p className="text-slate-400">• <strong>7 अप्रैल:</strong> विश्व स्वास्थ्य दिवस</p>
                  <p className="text-slate-400">• <strong>22 अप्रैल:</strong> विश्व पृथ्वी दिवस</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5">
                  <strong>☀️ मई - जून:</strong>
                  <p className="text-slate-400 mt-1">• <strong>1 मई:</strong> अंतर्राष्ट्रीय श्रम (मजदूर) दिवस</p>
                  <p className="text-slate-400">• <strong>31 मई:</strong> तंबाकू निषेध दिवस</p>
                  <p className="text-slate-400">• <strong>5 जून:</strong> विश्व पर्यावरण दिवस (अति-महत्वपूर्ण)</p>
                  <p className="text-slate-400">• <strong>21 जून:</strong> अंतर्राष्ट्रीय योग दिवस</p>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-white/5 col-span-2 md:col-span-1">
                  <strong>🍂 अगस्त - दिसंबर:</strong>
                  <p className="text-slate-400 mt-1">• <strong>29 अगस्त:</strong> राष्ट्रीय खेल दिवस (मेजर ध्यानचंद)</p>
                  <p className="text-slate-400">• <strong>16 सितंबर:</strong> विश्व ओजोन दिवस</p>
                  <p className="text-slate-400">• <strong>26 नवंबर:</strong> संविधान दिवस / राष्ट्रीय दुग्ध दिवस</p>
                  <p className="text-slate-400">• <strong>10 दिसंबर:</strong> विश्व मानवाधिकार दिवस</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RESEARCH, DISCOVERIES & BOOKS */}
        {activeTab === 'misc' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1.5">🔬 भारत के प्रमुख अनुसंधान संस्थान (Research Institutes):</span>
                <ul className="space-y-1.5 text-slate-350">
                  <li>• **भारतीय दलहन अनुसंधान संस्थान:** **कानपुर** (उत्तर प्रदेश)</li>
                  <li>• **राष्ट्रीय चीनी (शर्करा) संस्थान:** **कानपुर** (उत्तर प्रदेश)</li>
                  <li>• **केंद्रीय गन्ना अनुसंधान संस्थान:** **लखनऊ** (उत्तर प्रदेश)</li>
                  <li>• **केंद्रीय आलू अनुसंधान संस्थान:** **शिमला** (हिमाचल प्रदेश)</li>
                  <li>• **राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI):** **करनाल** (हरियाणा)</li>
                  <li>• **भाभा परमाणु अनुसंधान केंद्र (BARC):** **ट्रॉम्बे** (मुंबई)</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-350 block mb-1.5">📚 प्रसिद्ध पुस्तकें व उनके लेखक (Books & Authors):</span>
                <div className="grid grid-cols-2 gap-2 text-slate-400 text-[11px]">
                  <p>• **अर्थशास्त्र:** चाणक्य (कौटिल्य)</p>
                  <p>• **पंचतंत्र:** विष्णु शर्मा</p>
                  <p>• **अभिज्ञान शाकुंतलम:** कालिदास</p>
                  <p>• **मुद्राराक्षस:** विशाखदत्त</p>
                  <p>• **गोदान, गबन, कर्मभूमि:** मुंशी प्रेमचंद</p>
                  <p>• **डिस्कवरी ऑफ इंडिया:** जवाहरलाल नेहरू</p>
                  <p>• **गीतांजलि:** रवींद्रनाथ टैगोर</p>
                  <p>• **सत्यार्थ प्रकाश:** स्वामी दयानंद सरस्वती</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SOCIAL MEDIA COMMUNICATION */}
        {activeTab === 'social' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-indigo-300 block text-sm">📱 सोशल मीडिया संचार (Social Media Communication)</span>
              <p>सोशल मीडिया आज के संचार का एक अत्यंत शक्तिशाली डिजिटल माध्यम है, जो इंटरनेट पर आधारित सामाजिक संपर्क (Networking) और सूचना के आदान-प्रदान (User-Generated Content) की सुविधा देता है। यह Web 1.0 (केवल पढ़ने योग्य) से **Web 2.0 (संवादात्मक व सहभागी)** के रूप में विकसित हुआ है।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1">🔗 प्रमुख प्लेटफॉर्म, वर्ष व संस्थापक:</span>
                <p>• <strong>Facebook (फेसबुक):</strong> <strong>2004</strong> में **मार्क जुकरबर्ग** द्वारा लॉन्च (अब मूल कंपनी का नाम **'Meta'** है)।</p>
                <p>• <strong>YouTube (यूट्यूब):</strong> <strong>2005</strong> में स्टीव चेन, चाड हर्ली और जाविद करीम द्वारा शुरू। (अब गूगल का हिस्सा)।</p>
                <p>• <strong>X (पूर्व नाम Twitter):</strong> <strong>2006</strong> में जैक डोर्सी द्वारा स्थापित। वर्तमान में इसका स्वामित्व **एलन मस्क** के पास है।</p>
                <p>• <strong>WhatsApp (व्हाट्सएप):</strong> <strong>2009</strong> में जैन कौम और ब्रायन एक्टन द्वारा स्थापित। 2014 में इसे **मेटा (फेसबुक)** ने खरीद लिया।</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-350 block mb-1">🛡️ विनियामक ढांचा व आईटी नियम 2021:</span>
                <p>भारत सरकार ने सोशल मीडिया पर भ्रामक सूचनाओं (Fake News), साइबर बुलिंग और राष्ट्र विरोधी संदेशों को नियंत्रित करने हेतु <strong>'आईटी नियम 2021' (IT Rules 2021)</strong> लागू किया है:</p>
                <ul className="space-y-1 pl-2.5 text-slate-400 text-[11px]">
                  <li>- 👥 **शिकायत निवारण अधिकारी (Resident Grievance Officer):** सभी प्रमुख सोशल मीडिया कंपनियों को भारत में एक शिकायत निवारण अधिकारी नियुक्त करना अनिवार्य है।</li>
                  <li>- 🔎 **प्रथम संदेश प्रेषक की पहचान (Tracing Originator):** सरकार या न्यायालय के आदेश पर किसी देशद्रोही या भ्रामक संदेश के मूल लेखक की पहचान बताना आवश्यक होगा।</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
