"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Import SSC Specific Study Notes components
import SscEnglishNotes from '@/components/SscEnglishNotes';
import SscQuantitativeAptitudeNotes from '@/components/SscQuantitativeAptitudeNotes';
import SscReasoningNotes from '@/components/SscReasoningNotes';
import SscGeneralAwarenessNotes from '@/components/SscGeneralAwarenessNotes';

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
    title: "SSC MTS Complete Syllabus",
    subSections: [
      {
        subtitle: "1. Numerical Aptitude (संख्यात्मक अभिरुचि)",
        topics: [
          "Number System (संख्या पद्धति)", "Simplification (सरलीकरण)", 
          "HCF & LCM (महत्तम समापवर्तक और लघुत्तम समापवर्त्य)", "Ratio & Proportion (अनुपात और समानुपात)", 
          "Average (औसत)", "Percentage (प्रतिशत)", "Profit & Loss (लाभ और हानि)", 
          "Simple & Compound Interest (साधारण और चक्रवृद्धि ब्याज)", "Time & Work (समय और कार्य)", 
          "Speed, Time & Distance (चाल, समय और दूरी)", "Mensuration (क्षेत्रमिति)", 
          "Geometry (ज्यामिति)", "Basic Data Interpretation (बेसिक डेटा व्याख्या)"
        ]
      },
      {
        subtitle: "2. English Language (अंग्रेजी भाषा)",
        topics: [
          "Spotting Errors (त्रुटियां पहचानना)", "Fill in the Blanks (रिक्त स्थान भरें)", 
          "Synonyms & Antonyms (पर्यायवाची और विलोम)", "Sentence Improvement (वाक्यों में सुधार)", 
          "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)", "Para Jumbles (पैरा जंबल्स)", 
          "Reading Comprehension (पठन बोध)", "Cloze Test (क्लोज़ टेस्ट)"
        ]
      },
      {
        subtitle: "3. Reasoning (तर्कशक्ति)",
        topics: [
          "Classification (वर्गीकरण)", "Analogy (समानता)", 
          "Series: Number & Alphabet (श्रृंखला - संख्या और वर्णमाला)", "Coding-Decoding (कोडिंग-डिकोडिंग)", 
          "Direction Sense (दिशा ज्ञान)", "Blood Relations (रक्त संबंध)", 
          "Syllogism (न्याय निगमन)", "Non-Verbal Reasoning (गैर-मौखिक तर्क)", 
          "Embedded Figures (निहित आकृतियाँ)"
        ]
      },
      {
        subtitle: "4. General Awareness (सामान्य जागरूकता)",
        topics: [
          "History (इतिहास)", "Geography (भूगोल)", "Polity (राजव्यवस्था)", 
          "Economy (अर्थव्यवस्था)", "General Science (सामान्य विज्ञान)", 
          "Books & Authors (पुस्तकें और लेखक)", "Awards (पुरस्कार)", 
          "Sports (खेल)", "Important Days (महत्वपूर्ण दिवस)", 
          "Current Affairs: National & International (समसामयिकी - राष्ट्रीय और अंतर्राष्ट्रीय)"
        ]
      }
    ]
  }
];

export default function SscMtsPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const renderNotes = (subSectionIdx: number) => {
    // 0: Numerical, 1: English, 2: Reasoning, 3: GA
    if (subSectionIdx === 0) return <SscQuantitativeAptitudeNotes />;
    if (subSectionIdx === 1) return <SscEnglishNotes />;
    if (subSectionIdx === 2) return <SscReasoningNotes />;
    return <SscGeneralAwarenessNotes />;
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-semibold text-sm mb-4 border border-amber-500/20">
          SSC Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
          SSC MTS Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Complete bilingual (English & Hindi) syllabus for Staff Selection Commission Multi Tasking Staff (SSC MTS) Exam.
          Tap on any syllabus topic to load premium study guides instantly!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-amber-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-amber-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics */}
            {section.subSections && (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h3 className="text-lg font-medium text-amber-400 border-l-2 border-amber-500 pl-3">{sub.subtitle}</h3>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => {
                        const isExpanded = expandedTopic === topic;

                        return (
                          <div key={tIdx} className="space-y-3">
                            <li 
                              onClick={() => setExpandedTopic(isExpanded ? null : topic)}
                              className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-amber-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group cursor-pointer bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/25 hover:border-amber-500/40 text-amber-200 font-medium"
                            >
                              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-amber-500 text-white shadow-[0_0_10px_rgba(245,158,11,0.4)] flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300">
                                {(tIdx + 1).toString().padStart(2, '0')}
                              </div>
                              <span className="font-semibold text-amber-200 group-hover:text-slate-50 transition-colors">{topic}</span>
                              
                              <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)] font-semibold select-none group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
                              </span>
                            </li>
                            
                            {isExpanded && (
                              <div className="w-full">
                                {renderNotes(sIdx)}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </ul>
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
