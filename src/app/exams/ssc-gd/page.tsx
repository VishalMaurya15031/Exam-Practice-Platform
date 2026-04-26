"use client";
import React from 'react';

const syllabusData = [
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
  return (
    <div className="max-w-5xl mx-auto pb-12">
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
          Prepare systematically with our structured modules.
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
            <div className="flex flex-wrap gap-3">
              {section.topics.map((topic, tIdx) => (
                <div 
                  key={tIdx} 
                  className="px-4 py-2 bg-[#0f172a]/60 border border-white/5 rounded-lg text-slate-300 text-sm hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 cursor-default"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
