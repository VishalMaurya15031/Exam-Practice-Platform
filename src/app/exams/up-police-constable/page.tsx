"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import GeneralScienceNotes from '@/components/GeneralScienceNotes';
import HistoryNotes from '@/components/HistoryNotes';
import ConstitutionNotes from '@/components/ConstitutionNotes';
import EconomyCultureNotes from '@/components/EconomyCultureNotes';
import AgricultureTradeNotes from '@/components/AgricultureTradeNotes';
import DemographyEnvironmentNotes from '@/components/DemographyEnvironmentNotes';
import GeographyResourcesNotes from '@/components/GeographyResourcesNotes';
import UPCultureRevenueNotes from '@/components/UPCultureRevenueNotes';
import HumanRightsSecurityNotes from '@/components/HumanRightsSecurityNotes';
import CurrentAffairsOrganizationsNotes from '@/components/CurrentAffairsOrganizationsNotes';
import EconomyMiscNotes from '@/components/EconomyMiscNotes';
import StaticGKPrizesNotes from '@/components/StaticGKPrizesNotes';
import HindiLanguageGrammarAlphabetNotes from '@/components/HindiLanguageGrammarAlphabetNotes';
import HindiVocabularyNotes from '@/components/HindiVocabularyNotes';
import HindiVyakaranNotes from '@/components/HindiVyakaranNotes';
import HindiSandhiSamasPunctuationNotes from '@/components/HindiSandhiSamasPunctuationNotes';
import HindiLiteraturePoeticsNotes from '@/components/HindiLiteraturePoeticsNotes';

type SyllabusSection = {
  title: string;
  subSections?: {
    subtitle: string;
    topics: string[];
  }[];
  topics?: string[];
};

const syllabusData: SyllabusSection[] = [
  {
    title: "1. सामान्य ज्ञान (General Knowledge)",
    topics: [
      "सामान्य विज्ञान", "भारत का इतिहास", "भारतीय संविधान", "भारतीय अर्थव्यवस्था एवं संस्कृति",
      "भारतीय कृषि, वाणिज्य एवं व्यापार", "जनसंख्या, पर्यावरण एवं नगरीकरण", 
      "भारत का भूगोल तथा विश्व भूगोल और प्राकृतिक संसाधन", 
      "उ0प्र0 की शिक्षा संस्कृति and सामाजिक परिवेश के सम्बन्ध विशिष्ट जानकारी",
      "उ0प्र0 में राजस्व, police व सामान्य प्रशासनिक व्यवस्था", "मानवाधिकार",
      "आंतरिक सुरक्षा तथा आतंकवाद", "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध",
      "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय", "राष्ट्रीय तथा अन्तर्राष्ट्रीय संगठन",
      "विमुद्रीकरण और उसका प्रभाव", "साइबर क्राइम", "वस्तु एवं सेवा कर",
      "पुरस्कार और सम्मान", "देश / राजधानी / मुद्रायें", "महत्वपूर्ण दिवस",
      "अनुसंधान एवं खोज", "पुस्तक और उनके लेखक", "सोशल मीडिया संचार"
    ]
  },
  {
    title: "2. सामान्य हिन्दी (General Hindi)",
    topics: [
      "हिन्दी और अन्य भारतीय भाषायें",
      "हिन्दी व्याकरण का मौलिक ज्ञान", "हिन्दी वर्णमाला", "तद्भव तत्सम", 
      "पर्यायवाची", "विलोम", "अनेकार्थक", "वाक्यांशों के स्थान पर एक शब्द", 
      "समरूपी भिन्नार्थक शब्द", "अशुद्ध वाक्यों को शुद्ध करना", "लिंग", 
      "वचन", "कारक", "सर्वनाम", "विशेषण", "क्रिया", "काल", "वाच्य", 
      "अव्यय", "उपसर्ग", "प्रत्यय", "सन्धि", "समास", "विराम-चिन्ह", 
      "मुहावरे एवं लोकोक्तियां", "रस", "छन्द", "अलंकार",
      "अपठित बोध",
      "प्रसिद्ध कवि, लेखक एवं उनकी प्रसिद्ध रचनायें",
      "हिन्दी भाषा में पुरस्कार",
      "विविध"
    ]
  },
  {
    title: "3. संख्यात्मक एवं मानसिक योग्यता (Numerical and Mental Ability)",
    topics: [
      "Number System - संख्या पद्धति", "Simplification - सरलीकरण", 
      "Decimals and Fraction - दशमलव और भिन्न", 
      "Highest common factor and lowest common multiple - महत्तम समापवर्तक और लघुत्तम समापवर्तक",
      "Ratio and Proportion - अनुपात और समानुपात", "Percentage - प्रतिशतता", 
      "Profit and Loss - लाभ और हानि", "Discount - छूट", 
      "Simple interest - साधारण ब्याज", "Compound interest - चक्रवृद्धि ब्याज",
      "Partnership - भागीदारी", "Average - औसत", "Time and Work - समय and कार्य",
      "Time and Distance - समय और दूरी", "Use of Tables and Graphs - सारणी और ग्राफ का प्रयोग",
      "Mensuration - मेन्सुरेशन", "Arithmetical computations and other analytical functions", 
      "Miscellaneous - विविध", "Logical Diagrams - तार्किक आरेख", 
      "Symbol-Relationship Interpretation - संकेत सम्बन्ध विश्लेषण", "Perception Test - प्रत्यक्ष ज्ञान बोध",
      "Word formation Test - शब्द रचना परीक्षण", "Letter and number series - अक्षर और संख्या श्रृंखला",
      "Word and alphabet Analogy - शब्द और वर्णमाला में आंशिक समरूपता", "Common Sense Test - व्यावहारिक ज्ञान",
      "Direction sense Test - दिशा ज्ञान परीक्षण", "Logical interpretation of data - आंकड़ों का तार्किक विश्लेषण",
      "Forcefulness of argument - प्रभावी तर्क", "Determining implied meanings - अंतर्निहित भावों का विनिश्चय करना"
    ]
  },
  {
    title: "4. मानसिक अभिरुचि, बुद्धिलब्धि एवं तार्किक क्षमता (Mental Aptitude, I.Q. and Reasoning)",
    topics: [
      "Relationship and Analogy Test - सम्बन्ध व आंशिक समानता परीक्षण",
      "Spotting out the dissimilar - असमान को चिन्हित करना",
      "Series Completion Test - श्रृंखला पूरी करने का परीक्षण",
      "Coding and Decoding Test - संकेत लिपि और सांकेतिक लिपि को समझना",
      "Direction Sense Test - दिशा ज्ञान परीक्षण", "Blood Relation - रक्त सम्बन्ध",
      "Problems based on alphabet - वर्णमाला पर आधारित प्रश्न",
      "Time sequence test - समय क्रम परीक्षण",
      "Venn Diagram and chart type test - वेन आरेख और चार्ट सदृश परीक्षण",
      "Mathematical ability Test - गणितीय योग्यता परीक्षण",
      "Arranging in order - क्रम में व्यवस्थित करना",
      "Analogies - समरूपता", "Similarities - समानता", "Differences - भिन्नता",
      "Space visualization - खाली स्थान भरना", "Problem solving - समस्या को सुलझाना",
      "Analysis judgement - विश्लेषण निर्णय", "Decision-making - निर्णायक क्षमता",
      "Visual memory - दृश्य स्मृति", "Discrimination - विभेदन क्षमता",
      "Observation - पर्यवेक्षण", "Relationship - सम्बन्ध", "Concepts - अवधारणा",
      "Arithmetical reasoning - अंकगणितीय तर्क", "Verbal and figure classification - शब्द और आकृति वर्गीकरण",
      "Arithmetical number series - अंकगणितीय संख्या श्रृंखला",
      "Abilities to deal with abstract ideas and symbols and their relationships"
    ]
  }
];

export default function UPPoliceConstablePage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  // List of all GK and Hindi topics that have detailed interactive study notes
  const topicsWithNotes = [
    // --- General Knowledge ---
    "सामान्य विज्ञान", "भारत का इतिहास", "भारतीय संविधान", "भारतीय अर्थव्यवस्था एवं संस्कृति",
    "भारतीय कृषि, वाणिज्य एवं व्यापार", "जनसंख्या, पर्यावरण एवं नगरीकरण", 
    "भारत का भूगोल तथा विश्व भूगोल और प्राकृतिक संसाधन", 
    "उ0प्र0 की शिक्षा संस्कृति and सामाजिक परिवेश के सम्बन्ध विशिष्ट जानकारी",
    "उ0प्र0 में राजस्व, police व सामान्य प्रशासनिक व्यवस्था", "मानवाधिकार",
    "आंतरिक सुरक्षा तथा आतंकवाद", "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध",
    "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय", "राष्ट्रीय तथा अन्तर्राष्ट्रीय संगठन",
    "विमुद्रीकरण और उसका प्रभाव", "साइबर क्राइम", "वस्तु एवं सेवा कर",
    "पुरस्कार और सम्मान", "देश / राजधानी / मुद्रायें", "महत्वपूर्ण दिवस",
    "अनुसंधान एवं खोज", "पुस्तक और उनके लेखक", "सोशल मीडिया संचार",

    // --- General Hindi ---
    "हिन्दी और अन्य भारतीय भाषायें", "हिन्दी व्याकरण का मौलिक ज्ञान", "हिन्दी वर्णमाला",
    "तद्भव तत्सम", "पर्यायवाची", "विलोम", "अनेकार्थक",
    "वाक्यांशों के स्थान पर एक शब्द", "समरूपी भिन्नार्थक शब्द", "अशुद्ध वाक्यों को शुद्ध करना",
    "लिंग", "वचन", "कारक", "सर्वनाम", "विशेषण", "क्रिया", "काल", "वाच्य", "अव्यय",
    "उपसर्ग", "प्रत्यय", "सन्धि", "समास", "विराम-चिन्ह", "मुहावरे एवं लोकोक्तियां",
    "रस", "छन्द", "अलंकार", "अपठित बोध", "प्रसिद्ध कवि, लेखक एवं उनकी प्रसिद्ध रचनायें",
    "हिन्दी भाषा में पुरस्कार", "विविध"
  ];

  const renderNotes = (topic: string) => {
    switch (topic) {
      // --- General Knowledge Notes ---
      case "सामान्य विज्ञान":
        return <GeneralScienceNotes />;
      case "भारत का इतिहास":
        return <HistoryNotes />;
      case "भारतीय संविधान":
        return <ConstitutionNotes />;
      case "भारतीय अर्थव्यवस्था एवं संस्कृति":
        return <EconomyCultureNotes />;
      case "भारतीय कृषि, वाणिज्य एवं व्यापार":
        return <AgricultureTradeNotes />;
      case "जनसंख्या, पर्यावरण एवं नगरीकरण":
        return <DemographyEnvironmentNotes />;
      case "भारत का भूगोल तथा विश्व भूगोल और प्राकृतिक संसाधन":
        return <GeographyResourcesNotes />;
      case "उ0प्र0 की शिक्षा संस्कृति and सामाजिक परिवेश के सम्बन्ध विशिष्ट जानकारी":
      case "उ0प्र0 में राजस्व, police व सामान्य प्रशासनिक व्यवस्था":
        return <UPCultureRevenueNotes />;
      case "मानवाधिकार":
      case "आंतरिक सुरक्षा तथा आतंकवाद":
      case "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध":
        return <HumanRightsSecurityNotes />;
      case "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय":
      case "राष्ट्रीय तथा अन्तर्राष्ट्रीय संगठन":
        return <CurrentAffairsOrganizationsNotes />;
      case "विमुद्रीकरण और उसका प्रभाव":
      case "साइबर क्राइम":
      case "वस्तु एवं सेवा कर":
        return <EconomyMiscNotes />;
      case "पुरस्कार और सम्मान":
      case "देश / राजधानी / मुद्रायें":
      case "महत्वपूर्ण दिवस":
      case "अनुसंधान एवं खोज":
      case "पुस्तक और उनके लेखक":
      case "सोशल मीडिया संचार":
        return <StaticGKPrizesNotes />;

      // --- General Hindi Notes ---
      case "हिन्दी और अन्य भारतीय भाषायें":
      case "हिन्दी व्याकरण का मौलिक ज्ञान":
      case "हिन्दी वर्णमाला":
        return <HindiLanguageGrammarAlphabetNotes />;
      case "तद्भव तत्सम":
      case "पर्यायवाची":
      case "विलोम":
      case "अनेकार्थक":
      case "वाक्यांशों के स्थान पर एक शब्द":
      case "समरूपी भिन्नार्थक शब्द":
      case "विविध":
        return <HindiVocabularyNotes />;
      case "अशुद्ध वाक्यों को शुद्ध करना":
      case "लिंग":
      case "वचन":
      case "कारक":
      case "सर्वनाम":
      case "विशेषण":
      case "क्रिया":
      case "काल":
      case "वाच्य":
      case "अव्यय":
      case "उपसर्ग":
      case "प्रत्यय":
        return <HindiVyakaranNotes />;
      case "सन्धि":
      case "समास":
      case "विराम-चिन्ह":
      case "अपठित बोध":
        return <HindiSandhiSamasPunctuationNotes />;
      case "मुहावरे एवं लोकोक्तियां":
      case "रस":
      case "छन्द":
      case "अलंकार":
      case "प्रसिद्ध कवि, लेखक एवं उनकी प्रसिद्ध रचनायें":
      case "हिन्दी भाषा में पुरस्कार":
        return <HindiLiteraturePoeticsNotes />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold text-sm mb-4 border border-indigo-500/20">
          State Police
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
          UP Police Constable Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Comprehensive syllabus and topic breakdown for the Uttar Pradesh Police Constable Examination. 
          Master these subjects to excel in your upcoming exam.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link 
          href="/exams/up-police-constable/test" 
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-indigo-500/25 inline-block"
        >
          Start Mock Test
        </Link>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-indigo-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.topics?.map((topic, tIdx) => {
                const hasNotes = topicsWithNotes.includes(topic);
                const isExpanded = expandedTopic === topic;

                const toggleExpand = () => {
                  if (hasNotes) {
                    setExpandedTopic(isExpanded ? null : topic);
                  }
                };

                return (
                  <div key={tIdx} className="space-y-3">
                    <li 
                      onClick={toggleExpand}
                      className={`flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-indigo-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group ${
                        hasNotes 
                          ? 'cursor-pointer bg-indigo-500/5 hover:bg-indigo-500/10 border-indigo-500/25 hover:border-indigo-500/40 text-indigo-200' 
                          : 'cursor-default hover:bg-indigo-500/5 hover:translate-x-1'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                        hasNotes 
                          ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.4)]' 
                          : 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white'
                      }`}>
                        {(tIdx + 1).toString().padStart(2, '0')}
                      </div>
                      <span className={`font-medium transition-colors ${
                        hasNotes ? 'text-indigo-200 group-hover:text-slate-50 font-semibold' : 'group-hover:text-slate-100'
                      }`}>{topic}</span>
                      
                      {hasNotes && (
                        <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)] font-semibold select-none group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                          {isExpanded ? "📖 हाइड नोट्स" : "✨ नोट्स उपलब्ध"}
                        </span>
                      )}
                    </li>
                    
                    {isExpanded && renderNotes(topic)}
                  </div>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
