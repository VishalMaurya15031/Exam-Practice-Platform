"use client";
import React from 'react';

const syllabusData = [
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
  return (
    <div className="max-w-5xl mx-auto pb-12">
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
            {section.subSections ? (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx}>
                    <h3 className="text-lg font-medium text-lime-400 mb-4">{sub.subtitle}</h3>
                    <div className="flex flex-wrap gap-3">
                      {sub.topics.map((topic, tIdx) => (
                        <div 
                          key={tIdx} 
                          className="px-4 py-2 bg-[#0f172a]/60 border border-white/5 rounded-lg text-slate-300 text-sm hover:bg-lime-500/10 hover:border-lime-500/30 hover:text-lime-300 transition-all duration-300 cursor-default"
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
                    className="px-4 py-2 bg-[#0f172a]/60 border border-white/5 rounded-lg text-slate-300 text-sm hover:bg-lime-500/10 hover:border-lime-500/30 hover:text-lime-300 transition-all duration-300 cursor-default"
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
