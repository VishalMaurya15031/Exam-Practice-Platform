"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Import Specific Study Notes components
import SscQuantitativeAptitudeNotes from '@/components/SscQuantitativeAptitudeNotes';
import SscReasoningNotes from '@/components/SscReasoningNotes';
import RrbGeneralScienceNotes from '@/components/RrbGeneralScienceNotes';
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
    title: "1. RRB Group D Mathematics Syllabus (गणित पाठ्यक्रम)",
    topics: [
      "Number System (संख्या पद्धति)", "Simplification (सरलीकरण)", 
      "HCF and LCM (लघुत्तम समापवर्त्य और महत्तम समापवर्तक)", "Ratio and Proportions (अनुपात और समानुपात)", 
      "Decimal Fractions (दशमलव और भिन्न)", "Percentage (प्रतिशत)", 
      "Unitary Method (ऐकिक नियम)", "Time and Work (समय और कार्य)", 
      "Time and Distance (समय और दूरी)", "Average (औसत)", "Profit and Loss (लाभ और हानि)", 
      "Mensuration (2D and 3D) (क्षेत्रमिति)", "Simple and Compound Interest (साधारण और चक्रवृद्धि ब्याज)", 
      "Data Interpretation (डेटा व्याख्या)", "Algebra (बीजगणित)", 
      "Square root and cube root (वर्गमूल और घनमूल)", "Partnership (साझेदारी)"
    ]
  },
  {
    title: "2. RRB Group D Reasoning Syllabus (तर्कशक्ति)",
    subSections: [
      {
        subtitle: "Verbal Reasoning (मौखिक तर्कशक्ति)",
        topics: [
          "Number Series (संख्या श्रृंखला)", "Direction Sense (दिशा ज्ञान)", 
          "Alphabet Series (वर्णमाला श्रृंखला)", "Ranking (रैंकिंग)", 
          "Coding-Decoding (कोडिंग-डिकोडिंग)", "Blood Relations (रक्त संबंध)", 
          "Problem on Ages (आयु संबंधी प्रश्न)", "Decision Making (निर्णय क्षमता)", 
          "Analogy (समानता)"
        ]
      },
      {
        subtitle: "Non-Verbal & Analytical Reasoning (गैर-मौखिक एवं विश्लेषणात्मक)",
        topics: [
          "Mirror Images (दर्पण छवि)", "Embedded Images (निहित आकृतियाँ)", 
          "Cubes and Dice (घन और पासा)", "Paper Cutting (कागज काटना)", 
          "Figure Matrix (आकृति आव्यूह)", "Shape Construction (आकृति निर्माण)", 
          "Grouping of Images (आकृतियों का समूहन)", "Water Images (जल छवि)", 
          "Analytical Reasoning (विश्लेषणात्मक तर्क)", "Paper Folding (कागज मोड़ना)", 
          "Pattern Completion (पैटर्न पूर्णता)", "Dot Situation (बिंदु स्थिति)", 
          "Rule Detection (नियम का पता लगाना)", "Image Analysis (छवि विश्लेषण)"
        ]
      }
    ]
  },
  {
    title: "3. RRB Group D General Science Syllabus (सामान्य विज्ञान)",
    subSections: [
      {
        subtitle: "Physics (भौतिक विज्ञान)",
        topics: [
          "Units and measurements (मात्रक और मापन)", "Force and Laws of Motion (बल और गति के नियम)", 
          "Work, Energy, and Power (कार्य, ऊर्जा और शक्ति)", "Gravitation (गुरुत्वाकर्षण)", 
          "Pressure (दबाव)", "Sound & Waves (ध्वनि और तरंगें)", "Heat (ऊष्मा)", 
          "Friction (घर्षण)", "Light- Reflection and Refraction (प्रकाश - परावर्तन और अपवर्तन)", 
          "Current Electricity & Magnetism (विद्युत और चुंबकत्व)", 
          "Scientific Instruments & Inventions (वैज्ञानिक उपकरण और आविष्कार)", 
          "Important Discoveries Relating to Physics (भौतिकी से संबंधित महत्वपूर्ण खोजें)", 
          "Sources of Energy (ऊर्जा के स्रोत)"
        ]
      },
      {
        subtitle: "Chemistry (रसायन विज्ञान)",
        topics: [
          "Matter (पदार्थ)", "Atoms and Molecules (परमाणु और अणु)", 
          "Structure of Atom (परमाणु की संरचना)", "Chemical Reactions and Equations (रासायनिक अभिक्रियाएं और समीकरण)", 
          "Periodic Classification of Elements (तत्वों का आवर्त वर्गीकरण)", "Chemical Bonding (रासायनिक बंधन)", 
          "Oxidation & Reduction (ऑक्सीकरण और अपचयन)", "Combustion and Flame (दहन और ज्वाला)", 
          "Metals & Non-Metals (धातु और अधातु)"
        ]
      },
      {
        subtitle: "Life Science / Biology (जीव विज्ञान)",
        topics: [
          "Classification of Organism (जीवों का वर्गीकरण)", "Cytology / Cell (कोशिका विज्ञान)", 
          "Genetics (आनुवंशिकी)", "Heredity and Evolution (आनुवंशिकता और विकास)", 
          "Classification of Plant Kingdom (पादप जगत का वर्गीकरण)", "Plant Morphology & Tissue (पादप आकारिकी और ऊतक)", 
          "Photo-synthesis (प्रकाश संश्लेषण)", "Plant Hormones & Diseases (पादप हार्मोन और रोग)", 
          "Ecology & Environment (पारिस्थितिकी और पर्यावरण)", "Pollution (प्रदूषण)", 
          "Classification of Animal Kingdom (जंतु जगत का वर्गीकरण)", "Animal Tissue (जंतु ऊतक)", 
          "Human Blood & Blood Group (मानव रक्त और रक्त समूह)", "Organ & Organ System (अंग और अंग प्रणाली)", 
          "Human Eye (मानव नेत्र)", "Nutrients & Vitamins (पोषक तत्व और विटामिन)", 
          "Natural Resources (प्राकृतिक संसाधन)"
        ]
      }
    ]
  },
  {
    title: "4. RRB Group D General Awareness and Current Affairs (सामान्य जागरूकता)",
    topics: [
      "Geography (भूगोल)", "Culture & Sports (संस्कृति और खेल)", 
      "Indian History (भारतीय इतिहास)", "Economics (अर्थव्यवस्था)", 
      "General Polity & Constitution of India (सामान्य राजव्यवस्था और भारतीय संविधान)", 
      "Current affairs (समसामयिकी)", "Scientific Research (वैज्ञानिक अनुसंधान)", 
      "General Policy (सामान्य नीति)"
    ]
  }
];

export default function RrbGroupDPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const renderNotes = (sectionIdx: number) => {
    // 0: Mathematics, 1: Reasoning, 2: Science, 3: General Awareness
    if (sectionIdx === 0) return <SscQuantitativeAptitudeNotes />;
    if (sectionIdx === 1) return <SscReasoningNotes />;
    if (sectionIdx === 2) return <RrbGeneralScienceNotes />;
    return <SscGeneralAwarenessNotes />;
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 font-semibold text-sm mb-4 border border-sky-500/20">
          Railway Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4">
          RRB Group D Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Complete topic-wise bilingual (English & Hindi) syllabus for Railway Recruitment Board (RRB) Group D Level 1 Exam.
          Empower your studies with premium interactive collapsible study notes!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-sky-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-sky-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics */}
            {section.subSections ? (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h3 className="text-lg font-medium text-sky-400 border-l-2 border-sky-500 pl-3">{sub.subtitle}</h3>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => {
                        const isExpanded = expandedTopic === topic;

                        return (
                          <div key={tIdx} className="space-y-3">
                            <li 
                              onClick={() => setExpandedTopic(isExpanded ? null : topic)}
                              className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-sky-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group cursor-pointer bg-sky-500/5 hover:bg-sky-500/10 border-sky-500/25 hover:border-sky-500/40 text-sky-200 font-medium"
                            >
                              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.4)] flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300">
                                {(tIdx + 1).toString().padStart(2, '0')}
                              </div>
                              <span className="font-semibold text-sky-200 group-hover:text-slate-50 transition-colors">{topic}</span>
                              
                              <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-[0_0_10px_rgba(56,189,248,0.15)] font-semibold select-none group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
                              </span>
                            </li>
                            
                            {isExpanded && (
                              <div className="w-full">
                                {renderNotes(idx)}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              /* Handle Normal Flat Topics */
              <ul className="space-y-3">
                {section.topics?.map((topic, tIdx) => {
                  const isExpanded = expandedTopic === topic;

                  return (
                    <div key={tIdx} className="space-y-3">
                      <li 
                        onClick={() => setExpandedTopic(isExpanded ? null : topic)}
                        className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-sky-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group cursor-pointer bg-sky-500/5 hover:bg-sky-500/10 border-sky-500/25 hover:border-sky-500/40 text-sky-200 font-medium"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.4)] flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300">
                          {(tIdx + 1).toString().padStart(2, '0')}
                        </div>
                        <span className="font-semibold text-sky-200 group-hover:text-slate-50 transition-colors">{topic}</span>
                        
                        <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-[0_0_10px_rgba(56,189,248,0.15)] font-semibold select-none group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                          {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
                        </span>
                      </li>
                      
                      {isExpanded && (
                        <div className="w-full">
                          {renderNotes(idx)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
