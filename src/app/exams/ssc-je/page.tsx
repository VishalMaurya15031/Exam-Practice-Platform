"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Import SSC Specific Study Notes components
import SscReasoningNotes from '@/components/SscReasoningNotes';
import SscGeneralAwarenessNotes from '@/components/SscGeneralAwarenessNotes';
import { Cpu, Landmark, Settings } from 'lucide-react';

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
    title: "SSC JE Paper 1 Syllabus",
    subSections: [
      {
        subtitle: "1. General Intelligence & Reasoning (सामान्य बुद्धिमत्ता और तर्कशक्ति)",
        topics: [
          "Analogies (समानताएं)", "Similarities and differences (समानताएं और भेद)", 
          "Spatial visualisation: shapes and space (स्थानिक दृश्य: आकार और स्थान)", 
          "Blood relations (रक्त संबंध)", "Direction sense (दिशा ज्ञान)", 
          "Series completion (श्रृंखला पूर्णता)"
        ]
      },
      {
        subtitle: "2. General Awareness & Current Events (सामान्य जागरूकता और समसामयिक घटनाक्रम)",
        topics: [
          "Indian History (भारतीय इतिहास)", "Geography (भूगोल)", "Polity (राजव्यवस्था)", 
          "Scientific Research (वैज्ञानिक अनुसंधान)", "National news / Current affairs (राष्ट्रीय समाचार / समसामयिक मामले)"
        ]
      },
      {
        subtitle: "3. General Engineering (सामान्य इंजीनियरिंग)",
        topics: [
          "Civil: Building Materials, Surveying, Soil Mechanics (सिविल: भवन निर्माण सामग्री, सर्वेक्षण, मृदा यांत्रिकी)", 
          "Electrical: Basic Concepts, Circuit Law, Magnetic Circuits (इलेक्ट्रिकल: मूल अवधारणाएं, सर्किट नियम, चुंबकीय सर्किट)", 
          "Mechanical: Theory of Machines, Thermodynamics, Fluid Mechanics (मैकेनिकल: मशीनों का सिद्धांत, ऊष्मागतिकी, द्रव यांत्रिकी)"
        ]
      }
    ]
  },
  {
    title: "SSC JE Paper 2 Syllabus",
    subSections: [
      {
        subtitle: "Part A: Civil and Structural Engineering (भाग ए: सिविल और स्ट्रक्चरल इंजीनियरिंग)",
        topics: [
          "RCC Design: Beams and Slabs (आरसीसी डिजाइन: बीम और स्लैब)", 
          "Environmental Engineering: Water quality and sewage systems (पर्यावरण इंजीनियरिंग: पानी की गुणवत्ता और सीवेज सिस्टम)", 
          "Transportation Engineering: Roads and highways (परिवहन इंजीनियरिंग: सड़कें और राजमार्ग)"
        ]
      },
      {
        subtitle: "Part B: Electrical Engineering (भाग बी: इलेक्ट्रिकल इंजीनियरिंग)",
        topics: [
          "Electrical Machines: Motors and transformers (इलेक्ट्रिकल मशीनें: मोटर्स और ट्रांसफार्मर)", 
          "Power Systems: Generation and transmission (पावर सिस्टम: उत्पादन और संचरण)", 
          "Basic Electronics: Modern circuits (बेसिक इलेक्ट्रॉनिक्स: आधुनिक सर्किट)"
        ]
      },
      {
        subtitle: "Part C: Mechanical Engineering (भाग सी: मैकेनिकल इंजीनियरिंग)",
        topics: [
          "Thermal Engineering: Boilers and refrigeration (थर्मल इंजीनियरिंग: बॉयलर और प्रशीतन)", 
          "Manufacturing Science: Tools and machines (विनिर्माण विज्ञान: उपकरण और मशीनें)", 
          "Fluid Mechanics: Liquids and gases in pipes and turbines (द्रव यांत्रिकी: पाइप और टर्बाइन में तरल पदार्थ और गैसें)"
        ]
      }
    ]
  }
];

export default function SscJePage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const renderNotes = (topic: string) => {
    const topicLower = topic.toLowerCase();

    // Check if Reasoning
    if (topicLower.includes("reasoning") || topicLower.includes("analogies") || topicLower.includes("similarities") || topicLower.includes("visualisation") || topicLower.includes("relations") || topicLower.includes("direction") || topicLower.includes("series")) {
      return <SscReasoningNotes topic={topic} />;
    }

    // Check if General Awareness
    if (topicLower.includes("history") || topicLower.includes("geography") || topicLower.includes("polity") || topicLower.includes("research") || topicLower.includes("current")) {
      return <SscGeneralAwarenessNotes topic={topic} />;
    }

    // Render Premium Custom Engineering Notes for technical segments!
    return (
      <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-lime-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn text-slate-300 text-xs md:text-sm">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-lime-500/5 rounded-full blur-[90px] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center text-lime-400 font-bold border border-lime-500/20 shadow-[0_0_15px_rgba(132,204,22,0.15)]">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-50">General Engineering Core Notes</h3>
            <p className="text-xs md:text-sm text-slate-400">SSC JE तकनीकी शाखा सूत्र एवं महत्वपूर्ण संक्षेपिका</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Civil */}
          <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
            <span className="font-bold text-lime-400 block border-b border-white/5 pb-1 text-sm">🏗️ Civil Engineering:</span>
            <div className="space-y-2 text-[11px]">
              <p>• <strong>Concrete Grade:</strong> M20 ratio is 1:1.5:3, M15 is 1:2:4 (Cement:Sand:Aggregate).</p>
              <p>• <strong>Soil Mechanics:</strong> Void ratio e = Vv / Vs. Porosity n = e / (1+e).</p>
              <p>• <strong>Surveying:</strong> Representative Fraction (RF) represents map distance to ground ratio.</p>
            </div>
          </div>

          {/* Electrical */}
          <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
            <span className="font-bold text-lime-400 block border-b border-white/5 pb-1 text-sm">⚡ Electrical Engineering:</span>
            <div className="space-y-2 text-[11px]">
              <p>• <strong>Ohm's Law:</strong> V = I * R. Power P = V * I = I² * R = V² / R.</p>
              <p>• <strong>Circuit Laws:</strong> KCL (Kirchhoff's Current Law - based on conservation of charge) & KVL (Voltage Law - conservation of energy).</p>
              <p>• <strong>AC Circuits:</strong> Active Power P = V * I * cos(θ), Reactive Power Q = V * I * sin(θ).</p>
            </div>
          </div>

          {/* Mechanical */}
          <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
            <span className="font-bold text-lime-400 block border-b border-white/5 pb-1 text-sm">⚙️ Mechanical Engineering:</span>
            <div className="space-y-2 text-[11px]">
              <p>• <strong>Thermodynamics:</strong> First Law: dQ = dU + dW. Second Law introduces Entropy.</p>
              <p>• <strong>Fluid Mechanics:</strong> Bernoulli's Equation: P/ρg + v²/2g + z = Constant.</p>
              <p>• <strong>Boilers:</strong> Cochran is a vertical multi-tubular boiler, Babcock & Wilcox is a water-tube boiler.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 font-semibold text-sm mb-4 border border-lime-500/20">
          SSC Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent mb-4">
          SSC JE Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Complete bilingual (English & Hindi) syllabus for Staff Selection Commission Junior Engineer (SSC JE) Exam.
          Tap on any subject block to unlock engineering notes and core non-technical study guides!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-lime-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-lime-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics */}
            {section.subSections && (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h3 className="text-lg font-medium text-lime-400 border-l-2 border-lime-500 pl-3">{sub.subtitle}</h3>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => {
                        const isExpanded = expandedTopic === topic;

                        return (
                          <div key={tIdx} className="space-y-3">
                            <li 
                              onClick={() => setExpandedTopic(isExpanded ? null : topic)}
                              className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-lime-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group cursor-pointer bg-lime-500/5 hover:bg-lime-500/10 border-lime-500/25 hover:border-lime-500/40 text-lime-200 font-medium"
                            >
                              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-lime-500 text-white shadow-[0_0_10px_rgba(132,204,22,0.4)] flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300">
                                {(tIdx + 1).toString().padStart(2, '0')}
                              </div>
                              <span className="font-semibold text-lime-200 group-hover:text-slate-50 transition-colors">{topic}</span>
                              
                              <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-lime-500/20 text-lime-300 border border-lime-500/30 shadow-[0_0_10px_rgba(132,204,22,0.15)] font-semibold select-none group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                                {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
                              </span>
                            </li>
                            
                            {isExpanded && (
                              <div className="w-full">
                                {renderNotes(topic)}
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
