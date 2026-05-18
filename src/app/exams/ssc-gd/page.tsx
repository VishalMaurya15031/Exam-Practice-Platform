"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Import SSC Specific Study Notes components
import SscEnglishNotes from '@/components/SscEnglishNotes';
import SscQuantitativeAptitudeNotes from '@/components/SscQuantitativeAptitudeNotes';
import SscReasoningNotes from '@/components/SscReasoningNotes';
import SscGeneralAwarenessNotes from '@/components/SscGeneralAwarenessNotes';

// Import Hindi Specific Study Notes components
import HindiLanguageGrammarAlphabetNotes from '@/components/HindiLanguageGrammarAlphabetNotes';
import HindiVocabularyNotes from '@/components/HindiVocabularyNotes';
import HindiSandhiSamasPunctuationNotes from '@/components/HindiSandhiSamasPunctuationNotes';
import HindiVyakaranNotes from '@/components/HindiVyakaranNotes';

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
    title: "1. Hindi (हिंदी)",
    topics: [
      "संधि और संधि विच्छेद", "उपसर्ग", "प्रत्यय", "पर्यायवाची शब्द", "मुहावरे और लोकोक्तियाँ", 
      "सामासिक पदों की रचना और समास विग्रह", "विपरीतार्थक (विलोम) शब्द", "शब्द-युग्म", 
      "वाक्यांश के लिए एक सार्थक शब्द", "संज्ञा शब्दों से विशेषण बनाना", "अनेकार्थक शब्द", 
      "वाक्य-शुद्धि : अशुद्ध वाक्यों का शुद्धिकरण और वाक्यगत अशुद्धि का कारण", 
      "वाच्य : कर्तृवाच्य, कर्मवाच्य और भाववाच्य प्रयोग", "क्रिया : सकर्मक, अकर्मक और पूर्वकालिक क्रियाएँ", 
      "शब्द-शुद्धि : अशुद्ध शब्दों का शुद्धिकरण और शब्दगत अशुद्धि का कारण", 
      "अंग्रेजी के पारिभाषिक (तकनीकी) शब्दों के समानार्थक हिंदी शब्द", 
      "सरल, संयुक्त और मिश्र अंग्रेजी वाक्यों का हिंदी में रूपांतरण और हिंदी वाक्यों का अंग्रेजी में रूपांतरण", 
      "कार्यालयी पत्रों से संबंधित ज्ञान"
    ]
  },
  {
    title: "2. English",
    topics: [
      "Fill in the blanks (रिक्त स्थान भरें)", "Error Spotting (त्रुटि पहचानें)", 
      "Phrase Replacement (वाक्यांश प्रतिस्थापन)", "Synonyms & Antonyms (पर्यायवाची और विलोम)", 
      "Cloze Test (गद्यांश पूर्ति)", "Phrase and idioms meaning (वाक्यांश और मुहावरों के अर्थ)", 
      "Spellings (वर्तनी)", "One Word Substitution (एक शब्द प्रतिस्थापन)", "Reading comprehension (पाठ बोध)"
    ]
  },
  {
    title: "3. General Intelligence and Reasoning",
    topics: [
      "Questions on analogies (समानता पर आधारित प्रश्न)", "Similarities and differences (समानताएँ और अंतर)", 
      "Spatial visualization (स्थानिक दृश्यांकन)", "Spatial orientation (स्थानिक अभिविन्यास)", 
      "Visual Memory (दृश्य स्मृति)", "Discrimination observation (भेदभावात्मक अवलोकन)", 
      "Relationship Concepts (संबंध अवधारणाएँ)", "Arithmetical Reasoning (अंकगणितीय तर्क)", 
      "Figural Classification (आकृति वर्गीकरण)", "Arithmetic Number Series (अंकगणितीय संख्या श्रेणी)", 
      "Non-Verbal Series (अशाब्दिक श्रेणी)", "Coding and Decoding (कूटलेखन और कूटभेदन)"
    ]
  },
  {
    title: "4. General Knowledge and General Awareness (GK and GS)",
    topics: [
      "India & its neighbouring countries (भारत और उसके पड़ोसी देश)", "Sports (खेल)", 
      "History (इतिहास)", "Culture (संस्कृति)", "Geography (भूगोल)", 
      "Economic Scene (आर्थिक परिदृश्य)", "General Polity (सामान्य राजनीति)", 
      "Indian Constitution (भारतीय संविधान)", "Scientific Research (वैज्ञानिक अनुसंधान)"
    ]
  },
  {
    title: "5. Elementary Mathematics",
    topics: [
      "Number Systems (संख्या प्रणाली)", "Computation of Whole Numbers (पूर्ण संख्याओं की गणना)", 
      "Decimals and Fractions (दशमलव और भिन्न)", "Relationship between Numbers (संख्याओं के बीच संबंध)", 
      "Fundamental arithmetical operations (मूल अंकगणितीय संक्रियाएं)", "Percentages (प्रतिशत)", 
      "Ratio and Proportion (अनुपात और समानुपात)", "Averages (औसत)", "Interest (ब्याज)", 
      "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Mensuration (क्षेत्रमिति)", 
      "Time and Distance (समय और दूरी)", "Ratio and Time (अनुपात और समय)", "Time and Work (समय और कार्य)"
    ]
  }
];

export default function SscGdPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const renderNotes = (sectionIdx: number, topic: string) => {
    // Section 1: Hindi
    if (sectionIdx === 0) {
      if (topic.includes("संधि") || topic.includes("समास")) {
        return <HindiSandhiSamasPunctuationNotes />;
      }
      if (topic.includes("पर्यायवाची") || topic.includes("विलोम") || topic.includes("मुहावरे") || topic.includes("अनेकार्थक") || topic.includes("शब्द-युग्म") || topic.includes("वाक्यांश")) {
        return <HindiVocabularyNotes />;
      }
      if (topic.includes("वाक्य") || topic.includes("वाच्य") || topic.includes("क्रिया") || topic.includes("संज्ञा")) {
        return <HindiVyakaranNotes />;
      }
      return <HindiLanguageGrammarAlphabetNotes />;
    }

    // Section 2: English
    if (sectionIdx === 1) {
      return <SscEnglishNotes />;
    }

    // Section 3: Reasoning
    if (sectionIdx === 2) {
      return <SscReasoningNotes topic={topic} />;
    }

    // Section 4: GK/GS
    if (sectionIdx === 3) {
      return <SscGeneralAwarenessNotes topic={topic} />;
    }

    // Section 5: Mathematics
    return <SscQuantitativeAptitudeNotes topic={topic} />;
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold text-sm mb-4 border border-cyan-500/20">
          SSC Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          SSC GD Constable Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Complete topic-wise syllabus for Staff Selection Commission General Duty (SSC GD) Constable Exam. 
          Prepare systematically with our structured interactive study notes.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.topics?.map((topic, tIdx) => {
                const isExpanded = expandedTopic === topic;

                return (
                  <div key={tIdx} className="space-y-3">
                    <li 
                      onClick={() => setExpandedTopic(isExpanded ? null : topic)}
                      className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-cyan-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group cursor-pointer bg-cyan-500/5 hover:bg-cyan-500/10 border-cyan-500/25 hover:border-cyan-500/40 text-cyan-200 font-medium"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-cyan-500 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300">
                        {(tIdx + 1).toString().padStart(2, '0')}
                      </div>
                      <span className="font-semibold text-cyan-250 group-hover:text-slate-50 transition-colors">{topic}</span>
                      
                      <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)] font-semibold select-none group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                        {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
                      </span>
                    </li>
                    
                    {isExpanded && (
                      <div className="w-full">
                        {renderNotes(idx, topic)}
                      </div>
                    )}
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
