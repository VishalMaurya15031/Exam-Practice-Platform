"use client";
import React, { useState } from 'react';
import { 
  Rocket, Beaker, Dna, Leaf, Lightbulb, 
  ChevronRight, ArrowRight, ShieldAlert, Award, Star 
} from 'lucide-react';

export default function GeneralScienceNotes() {
  const [activeTab, setActiveTab] = useState<'physics' | 'chemistry' | 'biology' | 'ecology' | 'facts'>('physics');

  const tabs = [
    { id: 'physics', label: '🚀 भौतिकी (Physics)', color: 'text-sky-400 border-sky-400 bg-sky-500/5' },
    { id: 'chemistry', label: '🧪 रसायन (Chemistry)', color: 'text-amber-400 border-amber-400 bg-amber-500/5' },
    { id: 'biology', label: '🧬 जीव विज्ञान (Biology)', color: 'text-emerald-400 border-emerald-400 bg-emerald-500/5' },
    { id: 'ecology', label: '🍀 पर्यावरण (Ecology)', color: 'text-teal-400 border-teal-400 bg-teal-500/5' },
    { id: 'facts', label: '💡 तथ्य व खोज (Facts)', color: 'text-purple-400 border-purple-400 bg-purple-500/5' }
  ] as const;

  return (
    <div className="mt-4 p-5 md:p-8 bg-[#1e293b]/95 border border-indigo-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20">
          ✨
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">सामान्य विज्ञान (General Science) - विस्तृत नोट्स</h3>
          <p className="text-xs md:text-sm text-slate-400">UP Police Constable परीक्षा के लिए पूर्णतः वर्गीकृत अध्ययन सामग्री</p>
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
        
        {/* PHYSICS TAB */}
        {activeTab === 'physics' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Section 1 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-sky-500 rounded" />
                गति एवं बल (Motion and Force)
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-200 text-sm mb-1.5">● गति के प्रकार:</h5>
                  <p className="text-slate-300 text-sm mb-2">जब कोई वस्तु समय के साथ अपनी स्थिति बदलती है, तो उसे गति कहते हैं।</p>
                  <ul className="space-y-2 pl-4 text-xs md:text-sm">
                    <li>🔹 <strong>सरल रेखीय गति (Linear Motion):</strong> सीधे रास्ते पर गति (जैसे- पटरी पर दौड़ती ट्रेन)।</li>
                    <li>🔹 <strong>वृत्तीय गति (Circular Motion):</strong> वृत्ताकार पथ पर गति (जैसे- सूर्य के चक्कर लगाती पृथ्वी)।</li>
                    <li>🔹 <strong>दोलन गति (Oscillatory Motion):</strong> एक निश्चित बिंदु के आगे-पीछे या ऊपर-नीचे गति (जैसे- घड़ी का पेंडुलम)।</li>
                  </ul>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <h5 className="font-semibold text-slate-200 text-sm mb-1.5">● वेग एवं त्वरण:</h5>
                  <ul className="space-y-2 pl-4 text-xs md:text-sm">
                    <li>🔹 <strong>वेग (Velocity):</strong> निश्चित दिशा में प्रति सेकंड तय की गई दूरी (विस्थापन)। मात्रक: <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">m/s</code></li>
                    <li>🔹 <strong>त्वरण (Acceleration):</strong> वेग में परिवर्तन की दर। सूत्र: <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">a = (v-u)/t</code> | मात्रक: <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">m/s²</code></li>
                  </ul>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <h5 className="font-semibold text-slate-200 text-sm mb-2">● न्यूटन के गति के नियम:</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block mb-1">प्रथम नियम (जड़त्व का नियम)</span>
                      <p className="text-xs text-slate-400">कोई वस्तु जैसी है वैसी रहेगी जब तक बाहरी बल न लगे (उदा: बस रुकने पर आगे झुकना)।</p>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block mb-1">द्वितीय नियम (F = ma)</span>
                      <p className="text-xs text-slate-400">बल, संवेग परिवर्तन की दर के अनुक्रमानुपाती होता है (उदा: कैच लेते समय हाथ पीछे खींचना)।</p>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block mb-1">तृतीय नियम (क्रिया-प्रतिक्रिया)</span>
                      <p className="text-xs text-slate-400">हर क्रिया की बराबर और विपरीत प्रतिक्रिया होती है (उदा: रॉकेट का उड़ना, बंदूक का झटका)।</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <h5 className="font-semibold text-slate-200 text-sm mb-1.5">● गुरुत्वाकर्षण बल (Gravitational Force):</h5>
                  <p className="text-xs md:text-sm text-slate-300">
                    किन्हीं दो पिंडों के बीच आकर्षण बल। पृथ्वी जिस बल से वस्तुओं को खींचती है, उसे गुरुत्व बल कहते हैं। गुरुत्वीय त्वरण 
                    <strong className="text-sky-300 ml-1">g = 9.8 m/s²</strong> होता है।
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-sky-500 rounded" />
                कार्य, शक्ति एवं ऊर्जा
              </h4>
              <ul className="space-y-3 pl-2 text-xs md:text-sm">
                <li>🔹 <strong>कार्य (Work):</strong> बल लगाने से वस्तु का विस्थापित होना। <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">W = F × s</code> | मात्रक: <strong className="text-slate-100">जूल (Joule)</strong></li>
                <li>🔹 <strong>शक्ति (Power):</strong> कार्य करने की दर। <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">P = W / t</code> | मात्रक: <strong className="text-slate-100">वाट (Watt)</strong> | <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">1 HP = 746 W</code></li>
                <li>🔹 <strong>गतिज ऊर्जा (Kinetic Energy):</strong> गति के कारण संचित ऊर्जा। सूत्र: <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">KE = 1/2 mv²</code> (उदा: बहता पानी)</li>
                <li>🔹 <strong>स्थितिज ऊर्जा (Potential Energy):</strong> आकार या स्थिति के कारण ऊर्जा। सूत्र: <code className="bg-slate-850 px-1.5 py-0.5 rounded text-sky-300">PE = mgh</code> (उदा: तना हुआ धनुष, बांध का पानी)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-sky-500 rounded" />
                प्रकाश (Light)
              </h4>
              <div className="space-y-4 text-xs md:text-sm">
                <p className="text-slate-300">विद्युत चुंबकीय विकिरण जो देखने की शक्ति देता है। यह हमेशा सीधी रेखा में चलता है।</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5">
                    <span className="font-bold text-slate-100 block mb-1">परावर्तन (Reflection)</span>
                    <p className="text-xs text-slate-400">सतह से टकराकर वापस लौटना (उदा: शीशा)। आपातन कोण = परावर्तन कोण।</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5">
                    <span className="font-bold text-slate-100 block mb-1">अपवर्तन (Refraction)</span>
                    <p className="text-xs text-slate-400">एक माध्यम से दूसरे में जाने पर मुड़ना (उदा: पानी में टेढ़ी पेंसिल, तारों का टिमटिमाना)।</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <h5 className="font-semibold text-slate-200 mb-2">दर्पण एवं लेंस के उपयोग:</h5>
                  <div className="grid md:grid-cols-4 gap-3">
                    <div className="p-2.5 bg-slate-900/40 rounded border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block">अवत्तल दर्पण</span>
                      <p className="text-[11px] text-slate-400">दाढ़ी बनाने वाले शीशे, हेडलाइट</p>
                    </div>
                    <div className="p-2.5 bg-slate-900/40 rounded border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block">उत्तल दर्पण</span>
                      <p className="text-[11px] text-slate-400">वाहनों के साइड मिरर</p>
                    </div>
                    <div className="p-2.5 bg-slate-900/40 rounded border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block">अवतल लेंस</span>
                      <p className="text-[11px] text-slate-400">निकट दृष्टि दोष (Myopia) सुधार</p>
                    </div>
                    <div className="p-2.5 bg-slate-900/40 rounded border border-white/5">
                      <span className="text-xs text-sky-400 font-bold block">उत्तल लेंस</span>
                      <p className="text-[11px] text-slate-400">दूर दृष्टि दोष (Hypermetropia)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-sky-400 mb-3 flex items-center gap-2">
                  <span>🔊</span> ध्वनि (Sound)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  यह अनुदैर्ध्य यांत्रिक तरंग है। इसे माध्यम की जरूरत होती है (ठोस &gt; द्रव &gt; गैस)। निर्वात में ध्वनि नहीं चल सकती। हवा में गति: <strong className="text-slate-200">332 m/s</strong>.
                  स्पष्ट प्रतिध्वनि (Echo) हेतु परावर्तक दूरी कम से कम <strong className="text-slate-200">17 मीटर</strong> होनी चाहिए।
                </p>
              </div>
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-sky-400 mb-3 flex items-center gap-2">
                  <span>🔥</span> ऊष्मा (Heat)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  मानव शरीर का सामान्य ताप <strong className="text-slate-200">37°C / 98.6°F</strong> होता है। संचरण विधियाँ: 
                  <br />1. <strong>चालन:</strong> ठोस में
                  <br />2. <strong>संवहन:</strong> द्रवों/गैसों में
                  <br />3. <strong>विकिरण:</strong> बिना माध्यम (उदा: धूप)।
                </p>
              </div>
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-base font-semibold text-sky-400 mb-3 flex items-center gap-2">
                  <span>⚡</span> विद्युत (Electricity)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  इलेक्ट्रॉनों के प्रवाह की दर को धारा कहते हैं (मात्रक: एम्पीयर)। 
                  <strong> ओम का नियम:</strong> <code className="bg-slate-850 px-1 py-0.5 rounded text-sky-300">V = IR</code> (R = प्रतिरोध, मात्रक: ओम Ω)। 
                  घरों के उपकरण <strong className="text-slate-200">समांतर क्रम (Parallel)</strong> में लगे होते हैं।
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CHEMISTRY TAB */}
        {activeTab === 'chemistry' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Section 1 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                पदार्थ की संरचना (Structure of Matter)
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-2">
                  <li>🔹 <strong>परमाणु (Atom):</strong> तत्व का सबसे छोटा कण जो रासायनिक क्रियाओं में भाग लेता है। केंद्रक (नाभिक) में प्रोटॉन (+) व न्यूट्रॉन (उदासीन) तथा इलेक्ट्रॉन (-) बाहर चक्कर लगाते हैं।</li>
                  <li>🔹 <strong>अणु (Molecule):</strong> दो या अधिक परमाणुओं का समूह। यह स्वतंत्र रह सकता है (उदा: <code className="bg-slate-850 px-1 text-amber-300">O₂, H₂O</code>)।</li>
                </div>
                <div className="space-y-2">
                  <li>🔹 <strong>तत्व (Element):</strong> एक ही प्रकार के परमाणुओं से बना शुद्ध पदार्थ (उदा: सोना, ऑक्सीजन)।</li>
                  <li>🔹 <strong>यौगिक (Compound):</strong> दो या अधिक तत्वों के निश्चित अनुपात में रासायनिक मेल से बना पदार्थ (उदा: नमक <code className="bg-slate-850 px-1 text-amber-300">NaCl</code>, पानी <code className="bg-slate-850 px-1 text-amber-300">H₂O</code>)।</li>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-amber-500 rounded" />
                अम्ल, क्षार एवं लवण (Acids, Bases and Salts)
              </h4>
              <p className="text-xs md:text-sm text-slate-400 mb-4">पदार्थ के स्वभाव को मापने के लिए pH स्केल (0 से 14) का उपयोग होता है। 7 उदासीन, 7 से कम अम्ल और 7 से अधिक क्षार है।</p>
              <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/10">
                  <span className="font-bold text-amber-300 block mb-1">अम्ल (Acids)</span>
                  <p className="text-slate-400 text-xs">स्वाद में खट्टे, नीले लिटमस को लाल करते हैं। (उदा: नींबू का साइट्रिक अम्ल, सिरके का एसिटिक अम्ल)। pH &lt; 7</p>
                </div>
                <div className="p-3 bg-teal-500/5 rounded-lg border border-teal-500/10">
                  <span className="font-bold text-teal-300 block mb-1">क्षार (Bases)</span>
                  <p className="text-slate-400 text-xs">स्वाद में कड़वे, छूने में साबुन जैसे, लाल लिटमस को नीला करते हैं। (उदा: चूने का पानी, कास्टिक सोडा)। pH &gt; 7</p>
                </div>
                <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                  <span className="font-bold text-emerald-300 block mb-1">लवण (Salts)</span>
                  <p className="text-slate-400 text-xs">अम्ल और क्षार की उदासीन प्रतिक्रिया से बनते हैं। (उदा: साधारण नमक <code className="bg-slate-850 px-1 text-emerald-300">NaCl</code> और पानी)।</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 text-xs md:text-sm">
                <h4 className="text-base font-semibold text-amber-400 mb-3">🛠️ धातु एवं अधातु (Metals & Non-metals)</h4>
                <ul className="space-y-2">
                  <li>✨ <strong>धातु (Metals):</strong> चमकदार, कठोर, विद्युत व ऊष्मा की सुचालक (तन्य व आघातवर्धनीय)। <em>अपवाद:</em> <strong>पारा (Mercury)</strong> कमरे के ताप पर द्रव होती है।</li>
                  <li>✨ <strong>अधातु (Non-metals):</strong> भंगुर, विद्युत की कुचालक। <em>अपवाद:</em> <strong>ग्रेफाइट</strong> अधातु होते हुए भी विद्युत का सुचालक है।</li>
                </ul>
              </div>
              <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 text-xs md:text-sm">
                <h4 className="text-base font-semibold text-amber-400 mb-3">💨 गैसों के प्रकार एवं उपयोग</h4>
                <ul className="space-y-2">
                  <li>✨ <strong>ऑक्सीजन (O₂):</strong> प्राणवायु, जलने में सहायक (हवा में 21%)।</li>
                  <li>✨ <strong>हाइड्रोजन (H₂):</strong> ब्रह्मांड में सर्वाधिक प्रचुर तत्व, अत्यंत ज्वलनशील, <strong>भविष्य का ईंधन</strong>।</li>
                  <li>✨ <strong>कार्बन डाइऑक्साइड (CO₂):</strong> आग बुझाने, सोडा वाटर और प्रकाश संश्लेषण में सहायक (प्रमुख ग्रीनहाउस गैस)।</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 text-xs md:text-sm">
              <h4 className="text-base font-semibold text-amber-400 mb-3">🧼 दैनिक जीवन में रसायन (Chemistry in Daily Life)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1">साबुन और डिटर्जेंट</span>
                  <p className="text-xs text-slate-400">साबुन कठोर जल में झाग नहीं देते जबकि डिटर्जेंट (अपमार्जक) कठोर जल में भी आसानी से झाग देते हैं व सफाई कर देते हैं।</p>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1">उर्वरक (Fertilizers)</span>
                  <p className="text-xs text-slate-400">मिट्टी की उपजाऊ क्षमता बढ़ाने के लिए आवश्यक पोषक तत्व <strong>NPK</strong> (नाइट्रोजन, फास्फोरस, पोटेशियम) प्रदान करते हैं। उदा: यूरिया।</p>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold text-slate-200 block mb-1">प्लास्टिक (Polymers)</span>
                  <p className="text-xs text-slate-400"><strong>थर्मोप्लास्टिक:</strong> दुबारा ढाला जा सकता है (उदा: पॉलिथीन)। <strong>थर्मोसेटिंग:</strong> दुबारा नहीं ढाला जा सकता (उदा: बेकेलाइट स्विच)।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BIOLOGY TAB */}
        {activeTab === 'biology' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Section 1 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded" />
                मानव शरीर रचना (Human Anatomy)
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <span className="font-bold text-emerald-300 block mb-1">🥗 पाचन तंत्र (Digestive System)</span>
                    <p className="text-slate-400 text-xs">मुँह से लार (टायलिन एंजाइम) द्वारा प्रारंभ। मुख्य पाचन अमाशय (Stomach) व छोटी आँत में होता है। पोषक तत्वों का अवशोषण छोटी आँत (Small Intestine) में होता है।</p>
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <span className="font-bold text-emerald-300 block mb-1">🫁 श्वसन तंत्र (Respiratory System)</span>
                    <p className="text-slate-400 text-xs">मुख्य अंग फेफड़े (Lungs) हैं। गैसों का आदान-प्रदान फेफड़ों की सूक्ष्म वायु-कोशिकाओं (Alveoli) के माध्यम से होता है।</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <span className="font-bold text-emerald-300 block mb-1">❤️ रक्त परिसंचरण तंत्र (Circulatory System)</span>
                    <p className="text-slate-400 text-xs">खोजकर्ता: <strong>विलियम हार्वे</strong>। हृदय रक्त पंप करता है। धमनियां (Arteries) हृदय से अंगों तक शुद्ध रक्त तथा शिराएं (Veins) अशुद्ध रक्त को वापस हृदय तक लाती हैं।</p>
                  </div>
                  <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                    <span className="font-bold text-emerald-300 block mb-1">🧪 उत्सर्जन तंत्र (Excretory System)</span>
                    <p className="text-slate-400 text-xs">मुख्य अंग <strong>किडनी (वृक्क)</strong> है। यह रक्त को छानकर यूरिया जैसी अशुद्धियों को यूरिन के रूप में शरीर से बाहर निकालती है।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded" />
                कोशिका (Cell) & पोषण (Nutrition)
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div>
                  <h5 className="font-bold text-slate-200 mb-2">🔬 कोशिका संरचना व तथ्य:</h5>
                  <ul className="space-y-2 pl-2">
                    <li>🔸 जीवन की सबसे छोटी रचनात्मक व कार्यात्मक इकाई। खोज: <strong>रॉबर्ट हुक (1665)</strong>।</li>
                    <li>🔸 <strong>माइटोकॉन्ड्रिया:</strong> कोशिका का पावरहाउस (ऊर्जा ATP के रूप में संचित)।</li>
                    <li>🔸 <strong>लाइसोसोम:</strong> कोशिका की आत्मघाती थैली (Suicide Bag)।</li>
                    <li>🔸 <strong>केंद्रक (Nucleus):</strong> कोशिका का नियंत्रण केंद्र (Brain of Cell)।</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-slate-200 mb-2">🍎 पोषण, विटामिन एवं रोग:</h5>
                  <ul className="space-y-1.5 pl-2 text-xs">
                    <li>🔸 <strong>विटामिन A:</strong> रतौंधी (स्रोत: गाजर)।</li>
                    <li>🔸 <strong>विटामिन B:</strong> बेरी-बेरी रोग।</li>
                    <li>🔸 <strong>विटामिन C:</strong> स्कर्वी रोग (स्रोत: आंवला, खट्टे फल)।</li>
                    <li>🔸 <strong>विटामिन D:</strong> रिकेट्स (हड्डियों की कमजोरी) - स्रोत: धूप।</li>
                    <li className="mt-2 text-emerald-300 font-semibold">💡 जल में घुलनशील: B, C | वसा में घुलनशील: A, D, E, K</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 text-xs md:text-sm">
              <h4 className="text-base font-semibold text-emerald-400 mb-3">🩸 रक्त एवं रक्त समूह (Blood & Blood Groups)</h4>
              <p className="text-slate-300 mb-3">रक्त एक तरल संयोजी ऊतक है। इसका pH <strong>7.4</strong> (हल्का क्षारीय) होता है। इसके मुख्य तीन कण हैं:</p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-2.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold block text-slate-200">RBC (लाल कणिकाएं)</span>
                  <p className="text-[11px] text-slate-400">इनमें हीमोग्लोबिन होता है जो ऑक्सीजन का वहन करता है। जीवनकाल: 120 दिन।</p>
                </div>
                <div className="p-2.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold block text-slate-200">WBC (श्वेत कणिकाएं)</span>
                  <p className="text-[11px] text-slate-400">संक्रमण व रोगों से लड़कर शरीर को सुरक्षा प्रदान करती हैं (सैनिक कोशिकाएं)।</p>
                </div>
                <div className="p-2.5 bg-slate-900/50 rounded border border-white/5">
                  <span className="font-bold block text-slate-200">प्लेटलेट्स</span>
                  <p className="text-[11px] text-slate-400">चोट लगने पर रक्त का थक्का (Clotting) बनाने में अत्यंत सहायक हैं।</p>
                </div>
              </div>
              <p className="text-slate-300">रक्त समूह (खोजकर्ता: <strong>कार्ल लैंडस्टीनर</strong>) के चार प्रकार हैं:</p>
              <ul className="mt-2 space-y-1.5 pl-2">
                <li>🔴 <strong>ग्रुप O (सर्वदाता - Universal Donor):</strong> यह ग्रुप किसी भी रक्त समूह वाले व्यक्ति को रक्त दे सकता है।</li>
                <li>🔴 <strong>ग्रुप AB (सर्वग्राही - Universal Acceptor):</strong> यह ग्रुप किसी भी रक्त समूह वाले व्यक्ति से रक्त प्राप्त कर सकता है।</li>
              </ul>
            </div>
          </div>
        )}

        {/* ECOLOGY TAB */}
        {activeTab === 'ecology' && (
          <div className="space-y-6 animate-fadeIn text-xs md:text-sm">
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-teal-500 rounded" />
                पर्यावरण एवं पारिस्थितिकी (Environment & Ecology)
              </h4>
              <ul className="space-y-4">
                <li>
                  🌿 <strong>पर्यावरण संरक्षण:</strong> 
                  पृथ्वी को बचाने के लिए भारत सरकार द्वारा <strong className="text-teal-300">1986 में पर्यावरण संरक्षण अधिनियम</strong> लागू किया गया। 
                  प्रतिवर्ष <strong className="text-teal-300">5 जून को विश्व पर्यावरण दिवस</strong> मनाया जाता है।
                </li>
                <li className="border-t border-white/5 pt-3">
                  🌧️ <strong>अम्लीय वर्षा (Acid Rain):</strong> 
                  कारखानों और वाहनों के धुएं से निकलने वाली हानिकारक गैसों (<strong className="text-teal-300">SO₂ और NO₂</strong>) के हवा में मौजूद पानी से क्रिया करने पर एसिड रेन होती है।
                </li>
                <li className="border-t border-white/5 pt-3">
                  🐯 <strong>वन्य जीव संरक्षण (Wildlife):</strong> 
                  लुप्तप्राय जीवों के संरक्षण हेतु नेशनल पार्क बनाए गए हैं। भारत में प्रसिद्ध <strong className="text-teal-300">प्रोजेक्ट टाइगर (Project Tiger) 1973 में</strong> प्रारंभ किया गया।
                </li>
                <li className="border-t border-white/5 pt-3">
                  🌍 <strong>ग्लोबल वार्मिंग (Global Warming):</strong> 
                  वातावरण में कार्बन डाइऑक्साइड (<code className="bg-slate-850 px-1 text-teal-300">CO₂</code>) और मीथेन (<code className="bg-slate-850 px-1 text-teal-300">CH₄</code>) जैसी 
                  ग्रीनहाउस गैसों के बढ़ने के कारण पृथ्वी के औसत तापमान में वृद्धि हो रही है, जिससे ग्लेशियर पिघल रहे हैं।
                </li>
                <li className="border-t border-white/5 pt-3">
                  🛡️ <strong>ओजोन परत (Ozone Layer - O₃):</strong> 
                  यह वायुमंडल के <strong>समताप मंडल (Stratosphere)</strong> में स्थित है। यह सूर्य की हानिकारक पराबैंगनी किरणों (UV Rays) को रोकती है। 
                  CFC (क्लोरोफ्लोरोकार्बन) गैस के कारण इसे नुकसान पहुँच रहा है। प्रतिवर्ष <strong className="text-teal-300">16 सितम्बर को विश्व ओजोन दिवस</strong> मनाया जाता है।
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* FACTS TAB */}
        {activeTab === 'facts' && (
          <div className="space-y-8 animate-fadeIn text-xs md:text-sm">
            {/* Table of Discoveries */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-purple-500 rounded" />
                विज्ञान के महत्वपूर्ण आविष्कार एवं खोज
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/40 text-purple-300">
                      <th className="p-3 font-semibold">खोज / आविष्कार</th>
                      <th className="p-3 font-semibold">वैज्ञानिक</th>
                      <th className="p-3 font-semibold">महत्वपूर्ण तथ्य</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-3 font-medium text-slate-200">🍎 गुरुत्वाकर्षण & गति नियम</td>
                      <td className="p-3 text-slate-300">सर आइजक न्यूटन</td>
                      <td className="p-3 text-slate-400">सेब गिरने की ऐतिहासिक घटना से गुरुत्व की खोज।</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">💡 विद्युत बल्ब</td>
                      <td className="p-3 text-slate-300">थॉमस एडिसन</td>
                      <td className="p-3 text-slate-400">बल्ब के अंदर उच्च गलनांक वाले टंगस्टन फिलामेंट का प्रयोग।</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">📞 टेलीफोन</td>
                      <td className="p-3 text-slate-300">अलेक्जेंडर ग्राहम बेल</td>
                      <td className="p-3 text-slate-400">ध्वनि तरंगों को विद्युत संकेतों में परिवर्तित करने की खोज।</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">💊 पेनिसिलिन (First Antibiotic)</td>
                      <td className="p-3 text-slate-300">अलेक्जेंडर फ्लेमिंग</td>
                      <td className="p-3 text-slate-400">यह दुनिया की पहली जीवनरक्षक एंटीबायोटिक दवा थी (कवक से निर्मित)।</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">📻 रेडियो / वायरलेस</td>
                      <td className="p-3 text-slate-300">जी. मार्कोनी</td>
                      <td className="p-3 text-slate-400">बिना तारों के तरंगों द्वारा दूर संचार की नींव रखी।</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">🩻 एक्स-रे (X-Ray)</td>
                      <td className="p-3 text-slate-300">डब्ल्यू. सी. रॉन्टगन</td>
                      <td className="p-3 text-slate-400">हड्डियों की जांच व चिकित्सा में क्रांतिकारी अविष्कार।</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">🧪 रेडियम / रेडियोधर्मिता</td>
                      <td className="p-3 text-slate-300">मैडम क्यूरी</td>
                      <td className="p-3 text-slate-400">रेडियोएक्टिविटी पर ऐतिहासिक कार्य के लिए इन्हें दो बार नोबेल मिला।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Daily Life Science */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-base font-semibold text-purple-400 mb-4">🏠 दैनिक जीवन में विज्ञान (Science in Daily Life)</h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                  <strong className="text-slate-200 block mb-1">🔥 LPG रसोई गैस:</strong>
                  ब्यूटेन और प्रोपेन गैस का मिश्रण। गैस रिसाव का पता लगाने के लिए इसमें तीखी गंध वाला <strong>इथाइल मर्कैप्टेन</strong> रसायन मिलाया जाता है।
                </div>
                <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                  <strong className="text-slate-200 block mb-1">🚗 CNG (वाहनों में):</strong>
                  प्रदूषण मुक्त गैस, जिसमें मुख्य रूप से <strong>मीथेन (CH₄)</strong> पाई जाती है।
                </div>
                <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                  <strong className="text-slate-200 block mb-1">🌐 मोबाइल एवं इंटरनेट:</strong>
                  मोबाइल रेडियो तरंगों पर काम करता है। इंटरनेट डाटा ऑप्टिकल फाइबर केबल के जरिए जाता है जो <strong>पूर्ण आंतरिक परावर्तन (TIR)</strong> पर काम करता है।
                </div>
                <div className="p-3 bg-slate-900/40 rounded border border-white/5">
                  <strong className="text-slate-200 block mb-1">☀️ सोलर ऊर्जा:</strong>
                  सोलर पैनल सेमीकंडक्टर सिलिकॉन के बने होते हैं जो धूप से सीधे करंट पैदा करते हैं (फोटोवोल्टिक प्रभाव)।
                </div>
              </div>
            </div>

            {/* Imp Scientific Facts */}
            <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5">
              <h4 className="text-base font-semibold text-purple-400 mb-3">💡 महत्वपूर्ण वैज्ञानिक तथ्य (Important Science Facts)</h4>
              <ul className="space-y-2 text-xs md:text-sm pl-2">
                <li>🌟 <strong>प्रकाश की गति:</strong> निर्वात में प्रकाश की चाल सर्वाधिक <code className="bg-slate-850 px-1.5 py-0.5 rounded text-purple-300">3 × 10⁸ m/s</code> (3 लाख किमी प्रति सेकंड) होती है। सूर्य से पृथ्वी तक प्रकाश आने में <strong className="text-slate-250">8 मिनट 20 सेकंड</strong> का समय लगता है।</li>
                <li>🌟 <strong>पानी का घनत्व:</strong> पानी का घनत्व सबसे अधिक <strong className="text-purple-300">4°C</strong> पर होता है। यह एक यूनिवर्सल साल्वेंट है।</li>
                <li>🌟 <strong>सोडियम धातु:</strong> यह अत्यधिक क्रियाशील है जो हवा व पानी में आग पकड़ लेती है, इसलिए इसे <strong>मिट्टी के तेल (Kerosene)</strong> में डुबोकर रखा जाता है।</li>
                <li>🌟 <strong>किडनी का छानना:</strong> शरीर में दो किडनियां होती हैं, जो प्रतिदिन लगभग <strong>180 लीटर</strong> रक्त को छानती हैं।</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
