"use client";
import React from 'react';

const syllabusData = [
  {
    title: "1. सामान्य हिन्दी (General Hindi)",
    topics: [
      "हिन्दी और अन्य भारतीय भाषायें", "हिन्दी व्याकरण का मौलिक ज्ञान", "हिन्दी वर्णमाला", 
      "तद्भव-तत्सम", "पर्यायवाची", "विलोम", "अनेकार्थक", "वाक्यांशों के स्थान पर एक शब्द", 
      "समरूपी भिन्नार्थक शब्द", "अशुद्ध वाक्यों को शुद्ध करना", "लिंग", "वचन", "कारक", 
      "सर्वनाम", "विशेषण", "क्रिया", "काल", "वाच्य", "अव्यय", "उपसर्ग", "प्रत्यय", 
      "सन्धि", "समास", "विराम-चिन्ह", "मुहावरे एवं लोकोक्तियां", "रस", "छन्द", "अलंकार", 
      "अपठित बोध", "प्रसिद्ध कवि", "लेखक एवं उनकी प्रसिद्ध रचनायें", "हिन्दी भाषा में पुरस्कार", "विविध"
    ]
  },
  {
    title: "2. मूलविधि संविधान / सामान्य ज्ञान (Basic Law, Constitution & GK)",
    subSections: [
      {
        subtitle: "मूलविधि (Basic Law)",
        topics: [
          "भारतीय न्याय संहिता (BNS) एवं भारतीय नागरिक सुरक्षा संहिता (BNSS)", "महिलाओं", "बच्चों", 
          "अनुसूचित जाति के सदस्यों आदि को संरक्षण देने सम्बन्धी विधिक प्राविधान", "यातायात नियमों", 
          "पर्यावरण संरक्षण", "वन्य जीव संरक्षण", "मानवाधिकार संरक्षण", "सूचना का अधिकार अधिनियम", 
          "आयकर अधिनियम", "भ्रष्टाचार निवारण अधिनियम", "राष्ट्रीय सुरक्षा अधिनियम", "आईटी अधिनियम", 
          "साइबर अपराध", "जनहित याचिका", "महत्वपूर्ण न्यायिक निर्णय", "भूमि सुधार", "भूमि अधिग्रहण", 
          "भू-राजस्व संबंधी कानूनों का सामान्य ज्ञान"
        ]
      },
      {
        subtitle: "संविधान (Constitution)",
        topics: [
          "संविधान का उद्देश्य", "मौलिक अधिकार", "नीति निदेशक तत्व एवं मूल कर्तव्य", "संसदीय व्यवस्था", 
          "केन्द्रीय एवं प्रदेशीय सरकारों का गठन एवं उनके अधिकार", "कानून बनाने का अधिकार", "स्थानीय शासन", 
          "केन्द्र और राज्यों के बीच सम्बन्ध", "निर्वाचन तथा अन्य महत्वपूर्ण जानकारी में संवैधानिक अनुसूचियां", 
          "अखिल भारतीय सेवायें एवं उनकी चयन पद्धति आदि के विषय में सामान्य जानकारी"
        ]
      },
      {
        subtitle: "सामान्य ज्ञान (General Knowledge)",
        topics: [
          "सामान्य विज्ञान", "स्वास्थ्य एवं स्वास्थ्य विज्ञान", "भारत का इतिहास", "भारत का स्वतंत्रता संग्राम", 
          "भारतीय अर्थव्यवस्था एवं संस्कृति", "भारतीय कृषि", "वाणिज्य एवं व्यापार", "जनसंख्या", 
          "पर्यावरण एवं नगरीकरण", "एफ०डी०आई० (फारेन डायरेक्ट इन्वेस्टमेन्ट)", 
          "विश्व भूगोल तथा भारत का भूगोल और प्राकृतिक संसाधन", "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय", 
          "उ०प्र० की शिक्षा संस्कृति और सामाजिक प्रथाओं के सम्बन्ध में विशिष्ट जानकारी", 
          "उ0प्र0 में राजस्व, पुलिस व सामान्य प्रशासनिक व्यवस्था", "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध", 
          "कम्प्यूटर कौशल की आधारभूत जानकारी", "सूचना एवं संचार प्रौद्योगिकी का मौलिक /आधारभूत ज्ञान", 
          "सोशल मीडिया कम्युनिकेशन"
        ]
      }
    ]
  },
  {
    title: "3. संख्यात्मक एवं मानसिक योग्यता परीक्षा (Numerical & Mental Ability)",
    subSections: [
      {
        subtitle: "संख्यात्मक योग्यता (Numerical Ability)",
        topics: [
          "Number System - संख्या पद्धति", "Simplification - सरलीकरण", "Decimals and Fraction - दशमलव और भिन्न", 
          "HCF and LCM - महत्तम समापवर्तक और लघुत्तम समापवर्तक", "Ratio and Proportion - अनुपात और समानुपात", 
          "Percentage - प्रतिशतता", "Profit and Loss - लाभ और हानि", "Discount - छूट", 
          "Simple interest - साधारण ब्याज", "Compound interest - चक्रवृद्धि ब्याज", "Partnership - भागीदारी", 
          "Average - औसत", "Time and Work - समय और कार्य", "Time and Distance - समय और दूरी", 
          "Use of Tables and Graphs - सारणी और ग्राफ का प्रयोग", "Mensuration - मेन्सुरेशन", 
          "Arithmetical computations and other analytical functions", "Miscellaneous - विविध"
        ]
      },
      {
        subtitle: "मानसिक योग्यता (Mental Ability)",
        topics: [
          "Logical Diagrams - तार्किक आरेख", "Symbol-Relationship Interpretation - संकेत सम्बन्ध विश्लेषण", 
          "Perception Test - प्रत्यक्ष ज्ञान बोध", "Word formation Test - शब्द रचना परीक्षण", 
          "Letter and number series - अक्षर और संख्या श्रृंखला", 
          "Word and alphabet Analogy - शब्द और वर्णमाला में आंशिक समरूपता", 
          "Common Sense Test - व्यावहारिक ज्ञान परीक्षण", "Direction Sense Test - दिशा ज्ञान परीक्षण", 
          "Logical interpretation of data - आंकड़ों का तार्किक विश्लेषण", "Forcefulness of argument - प्रभावी तर्क", 
          "Determining implied meanings - अंतर्निहित भावों का विनिश्चय करना"
        ]
      }
    ]
  },
  {
    title: "4. मानसिक अभिरुचि / बुद्धिलब्धि / तार्किक परीक्षा (Mental Aptitude, I.Q. & Reasoning)",
    topics: [
      "Relationship and Analogy Test - सम्बन्ध व आंशिक समानता परीक्षण", "Spotting out the dissimilar - असमान को चिन्हित करना", 
      "Series Completion Test - श्रृंखला पूरी करने का परीक्षण", "Coding and Decoding Test - संकेत लिपि और सांकेतिक लिपि को समझना", 
      "Direction Sense Test - दिशा ज्ञान परीक्षण", "Blood Relation - रक्त सम्बन्ध", 
      "Problem based on alphabet - वर्णमाला पर आधारित प्रश्न", "Time sequence Test - समय क्रम परीक्षण", 
      "Venn Diagram and chart type test - वेन आरेख और चार्ट सदृश परीक्षण", "Mathematical ability Test - गणितीय योग्यता परीक्षण", 
      "Arranging in order - क्रम में व्यवस्थित करना", "Analogies - समरूपता", "Similarities - समानता", 
      "Differences - भिन्नता", "Space visualization - खाली स्थान भरना", "Problem solving - समस्या को सुलझाना", 
      "Analysis judgement - विश्लेषण निर्णय", "Decision making - निर्णायक क्षमता", "Visual memory - दृश्य स्मृति", 
      "Discrimination - विभेदन क्षमता", "Observation - पर्यवेक्षण", "Relationship - सम्बन्ध", "Concepts - अवधारणा", 
      "Arithmetical reasoning - अंकगणितीय तर्क", "Verbal and figure classification - शब्द और आकृति वर्गीकरण", 
      "Arithmetical number series - अंकगणितीय संख्या श्रृंखला", 
      "Abilities to deal with abstract ideas and symbols and their relationships - अमूर्त विचारों व प्रतीकों तथा उनके सम्बन्धों से सामंजस्य की क्षमता"
    ]
  }
];

export default function UPPoliceSIPage() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 font-semibold text-sm mb-4 border border-orange-500/20">
          State Police (Sub Inspector)
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
          UP Police SI Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Detailed syllabus and topic breakdown for the Uttar Pradesh Police Sub Inspector (SI) Examination. 
          Prepare effectively with our comprehensive mock tests.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-orange-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics (like Basic Law / Const) */}
            {section.subSections ? (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx}>
                    <h3 className="text-lg font-medium text-orange-300 mb-4">{sub.subtitle}</h3>
                    <div className="flex flex-wrap gap-3">
                      {sub.topics.map((topic, tIdx) => (
                        <div 
                          key={tIdx} 
                          className="px-4 py-2 bg-[#0f172a]/60 border border-white/5 rounded-lg text-slate-300 text-sm hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 transition-all duration-300 cursor-default"
                        >
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Handle Normal Flat Topics */
              <div className="flex flex-wrap gap-3">
                {section.topics?.map((topic, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="px-4 py-2 bg-[#0f172a]/60 border border-white/5 rounded-lg text-slate-300 text-sm hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 transition-all duration-300 cursor-default"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
