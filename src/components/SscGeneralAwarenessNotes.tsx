"use client";
import React, { useState } from 'react';
import { Landmark, Globe, Cpu, Star, ShieldAlert } from 'lucide-react';

export default function SscGeneralAwarenessNotes({ topic }: { topic?: string }) {
  const getDefaultTab = () => {
    if (topic) {
      const topicLower = topic.toLowerCase();
      if (topicLower.includes("computer") || topicLower.includes("basics of computers") || topicLower.includes("कंप्यूटर")) {
        return 'computer';
      }
      if (topicLower.includes("polity") || topicLower.includes("constitution") || topicLower.includes("governance") || topicLower.includes("राजव्यवस्था") || topicLower.includes("संविधान")) {
        return 'polity';
      }
    }
    return 'history'; // Default tab
  };

  const [activeTab, setActiveTab] = useState<'polity' | 'history' | 'computer'>(getDefaultTab());

  const tabs = [
    { id: 'polity', label: '🏛️ Polity & Constitution (राजव्यवस्था)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'history', label: '🏺 History & Geography (इतिहास व भूगोल)', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' },
    { id: 'computer', label: '💻 Computer Basics (Tier 2 कंप्यूटर)', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Landmark className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">General Awareness & Computer Notes</h3>
          <p className="text-xs md:text-sm text-slate-400">SSC CGL सामान्य ज्ञान, इतिहास, भूगोल एवं अनिवार्य कंप्यूटर योग्यता नोट्स</p>
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
                ? `${tab.color} border-current shadow-lg shadow-emerald-500/5` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: POLITY & CONSTITUTION */}
        {activeTab === 'polity' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Important Articles */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">📜 1. Important Articles (महत्वपूर्ण अनुच्छेद):</span>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <p>• <strong>अनुच्छेद 14:</strong> विधि के समक्ष समता (Equality before Law).</p>
                  <p>• <strong>अनुच्छेद 17:</strong> अस्पृश्यता का अंत (Abolition of Untouchability) - *SSC CGL Favorite!*</p>
                  <p>• <strong>अनुच्छेद 21:</strong> प्राण और दैहिक स्वतंत्रता का संरक्षण (Protection of Life & Personal Liberty).</p>
                  <p>• <strong>अनुच्छेद 21A:</strong> 6-14 वर्ष के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा (86वें संशोधन 2002 द्वारा)।</p>
                  <p>• <strong>अनुच्छेद 32:</strong> संवैधानिक उपचारों का अधिकार (Right to Constitutional Remedies) - बी.आर. अंबेडकर ने इसे "संविधान की आत्मा" कहा था।</p>
                  <p>• <strong>अनुच्छेद 51A:</strong> मौलिक कर्तव्य (42वें संशोधन 1976 द्वारा जोड़े गए, स्वर्ण सिंह समिति)।</p>
                </div>
              </div>

              {/* Sources & Amendments */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">🏛️ 2. Sources of Constitution & Amendments (स्रोत व संशोधन):</span>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2 text-[11px]">
                  <strong>🌍 भारतीय संविधान के स्रोत (Borrowed Features):</strong>
                  <p>• <strong>ब्रिटेन (UK):</strong> संसदीय प्रणाली, कानून का शासन, एकल नागरिकता।</p>
                  <p>• <strong>अमेरिका (USA):</strong> मौलिक अधिकार, न्यायिक पुनरावलोकन, महाभियोग।</p>
                  <p>• <strong>आयरलैंड:</strong> राज्य के नीति निदेशक तत्व (DPSP).</p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-2 text-[11px]">
                  <strong>🛠️ महत्वपूर्ण संविधान संशोधन (Amendments):</strong>
                  <p>• <strong>42वां संशोधन (1976):</strong> इसे "लघु संविधान" (Mini Constitution) कहा जाता है। प्रस्तावना में *समाजवादी, पंथनिरपेक्ष, अखंडता* शब्द जोड़े गए।</p>
                  <p>• <strong>44वां संशोधन (1978):</strong> संपत्ति के अधिकार को मौलिक अधिकारों से हटाकर कानूनी अधिकार (अनुच्छेद 300A) बनाया गया।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HISTORY & GEOGRAPHY */}
        {activeTab === 'history' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              {/* History highlights */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">🏺 History Highlights (इतिहास के प्रमुख बिंदु):</span>
                <div className="space-y-2 text-[11px]">
                  <p>• <strong>सिंधु घाटी सभ्यता (Indus Valley):</strong> हड़प्पा (दयाराम साहनी, 1921), मोहनजोदड़ो (आर.डी. बनर्जी, 1922)। लोथल एक गोदीवाड़ा (Port town) था।</p>
                  <p>• <strong>सल्तनत काल (Delhi Sultanate):</strong> गुलाम वंश ➜ खिलजी वंश ➜ तुगलक वंश ➜ सैयद वंश ➜ लोदी वंश। (कुतुबुद्दीन ऐबक ने गुलाम वंश की स्थापना की)।</p>
                  <p>• <strong>मुगल साम्राज्य:</strong> बाबर ने 1526 में पानीपत की पहली लड़ाई में इब्राहिम लोदी को हराकर स्थापना की।</p>
                  <p className="p-2.5 bg-teal-500/10 text-slate-100 rounded font-semibold border border-teal-500/20">
                    ✊ <strong>भारतीय राष्ट्रीय आंदोलन (Freedom Struggle):</strong><br />
                    • 1885: भारतीय राष्ट्रीय कांग्रेस (INC) की स्थापना (A.O. Hume द्वारा, प्रथम अध्यक्ष डब्ल्यू.सी. बनर्जी)।<br />
                    • 1915: गांधीजी का दक्षिण अफ्रीका से भारत आगमन (9 जनवरी - प्रवासी भारतीय दिवस)।<br />
                    • 1920: असहयोग आंदोलन | 1930: सविनय अवज्ञा आंदोलन (दांडी मार्च) | 1942: भारत छोड़ो आंदोलन।
                  </p>
                </div>
              </div>

              {/* Geography highlights */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-350 block border-b border-white/5 pb-1 text-sm">🌍 Geography Core Concepts (भूगोल सामान्य जानकारी):</span>
                <div className="space-y-2 text-[11px] text-slate-350">
                  <p>• <strong>Layers of Atmosphere (वायुमंडल की परतें):</strong> क्षोभमंडल (Troposphere - सभी मौसम गतिविधियाँ) ➜ समतापमंडल (Stratosphere - ओजोन परत, विमान उड़ान) ➜ मध्यमंडल (Mesosphere) ➜ तापमंडल (Thermosphere) ➜ बाह्यमंडल (Exosphere)।</p>
                  <p>• <strong>Indian Rivers (भारतीय नदियां):</strong></p>
                  <p className="pl-3 text-slate-400">• **बंगाल की खाड़ी में गिरने वाली:** गंगा, ब्रह्मपुत्र, महानदी, गोदावरी, कृष्णा, कावेरी।</p>
                  <p className="pl-3 text-slate-400">• **अरब सागर में गिरने वाली:** नर्मदा, तापी, साबरमती, लूनी (कच्छ के रन में खो जाती है)।</p>
                  <p>• <strong>Important Passes (प्रमुख दर्रे):</strong> जोजिला (लद्दाख), शिपकी ला (हिमाचल प्रदेश), नाथुला (सिक्किम), बोमडिला (अरुणाचल प्रदेश)।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPUTER BASICS */}
        {activeTab === 'computer' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-cyan-400 flex items-center gap-2 text-sm">
                <Cpu className="w-4 h-4" /> 💻 कंप्यूटर ज्ञान (Computer Basics - Tier 2 Mandatory)
              </span>
              <p>SSC CGL Tier 2 में कंप्यूटर ज्ञान परीक्षा अनिवार्य रूप से क्वालिफाइंग (Qualifying) प्रकृति की है, जिसमें न्यूनतम स्कोर करना आवश्यक है।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block mb-1 text-sm">🧠 1. Computer Organization & Memory:</span>
                <p>• <strong>CPU:</strong> इसमें ALU (Arithmetic Logic Unit) और CU (Control Unit) शामिल होते हैं। इसे कंप्यूटर का मस्तिष्क कहा जाता है।</p>
                <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-1.5 text-[11px]">
                  <strong>💾 मेमोरी पदानुक्रम (Memory Hierarchy):</strong>
                  <p>• <strong>Register ➜ Cache ➜ RAM ➜ SSD/HDD ➜ Backup Devices</strong></p>
                  <p>• **रजिस्टर और कैश (Cache):** सबसे तेज़ और सबसे महंगी मेमोरी हैं।</p>
                  <p>• **RAM (Random Access Memory):** अस्थिर (Volatile) मेमोरी है, बिजली जाने पर डेटा गायब हो जाता है।</p>
                  <p>• **ROM (Read Only Memory):** गैर-अस्थिर (Non-volatile) मेमोरी है। इसमें BIOS (Basic Input Output System) बूट प्रोग्राम होता है।</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-cyan-300 block mb-1 text-sm">🌐 2. Networking, Cyber Security & Shortcuts:</span>
                <div className="space-y-2 text-[11px]">
                  <p>• <strong>IP Address:</strong> IPv4 (32-bit, e.g. 192.168.1.1) और IPv6 (128-bit) एड्रेस होते हैं।</p>
                  <p>• <strong>Protocols:</strong> HTTP (Hypertext Transfer Protocol - port 80), HTTPS (Secure - port 443), FTP (File Transfer - port 20/21), SMTP (Mail sending - port 25)।</p>
                  <p>• <strong>Malware (मैलवेयर):</strong> वायरस, वॉर्म (Worm - खुद की कॉपी बनाता है), ट्रोजन हॉर्स (वैध सॉफ्टवेयर की तरह दिखता है)।</p>
                  <div className="p-2 bg-[#0c1220] rounded border border-white/5">
                    <strong>⌨️ Keyboard Shortcuts (कीबोर्ड शॉर्टकट):</strong><br />
                    • Alt + F4 (बंद करना) | Ctrl + Z (अनडू) | Ctrl + Y (रीडू) | F5 (रिफ्रेश) | F7 (स्पेलिंग चेक) | Ctrl + Esc (स्टार्ट मेनू खोलना)
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
