"use client";
import React from 'react';

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
    title: "SSC CHSL Tier 1 Syllabus",
    subSections: [
      {
        subtitle: "1. General Intelligence (सामान्य बुद्धिमत्ता)",
        topics: [
          "Logical Reasoning (तार्किक रीजनिंग)", "Alphanumeric Series (अल्फ़ान्यूमेरिक श्रृंखला)", 
          "Ranking/Direction/Alphabet Test (रैंकिंग / दिशा / वर्णमाला परीक्षण)", "Data Sufficiency (डेटा पर्याप्तता)", 
          "Coded Inequalities (कोडेड असमानताएं)", "Seating Arrangement (बैठने की व्यवस्था)", 
          "Puzzle (पहेली)", "Tabulation (सारणीकरण)", "Syllogism (न्याय निगमन)", 
          "Blood Relations (रक्त संबंध)", "Input-Output (इनपुट-आउटपुट)", "Coding-Decoding (कोडिंग-डिकोडिंग)"
        ]
      },
      {
        subtitle: "2. Quantitative Aptitude (मात्रात्मक योग्यता)",
        topics: [
          "Simplification (सरलीकरण)", "Profit and Loss (लाभ और हानि)", "Mixtures & Allegations (मिश्रण)", 
          "Simple Interest & Compound Interest (साधारण और चक्रवृद्धि ब्याज)", "Work & Time (कार्य और समय)", 
          "Time & Distance (समय और दूरी)", "Mensuration – Cylinder, Cone, Sphere (क्षेत्रमिति - बेलन, शंकु, गोला)", 
          "Data Interpretation (डेटा व्याख्या)", "Ratio and Proportion, Percentage (अनुपात, समानुपात, प्रतिशत)", 
          "Number Systems (संख्या पद्धति)", "Sequence & Series (अनुक्रम और श्रृंखला)", 
          "Permutation, Combination & Probability (क्रमचय, संचय और प्रायिकता)"
        ]
      },
      {
        subtitle: "3. English Language (अंग्रेजी भाषा)",
        topics: [
          "Reading Comprehension (पठन बोध)", "Cloze Test (क्लोज़ टेस्ट)", "Para jumbles (पैरा जंबल्स)", 
          "Miscellaneous (विविध)", "Fill in the blanks (रिक्त स्थान भरें)", 
          "Multiple Meaning/Error Spotting (एकाधिक अर्थ / त्रुटि पहचानना)", "Paragraph Completion (पैराग्राफ पूरा करना)", 
          "One Word Substitution (एक शब्द प्रतिस्थापन)", "Active and Passive Voice (सक्रिय और निष्क्रिय वाच्य)"
        ]
      },
      {
        subtitle: "4. General Awareness (सामान्य जागरूकता)",
        topics: [
          "History (इतिहास)", "Culture (संस्कृति)", "Geography (भूगोल)", "Economic Scene (आर्थिक परिदृश्य)", 
          "General Policy (सामान्य नीति)", "Scientific Research (वैज्ञानिक अनुसंधान)", 
          "Awards and Honors (पुरस्कार और सम्मान)", "Books and Authors (पुस्तकें और लेखक)"
        ]
      }
    ]
  },
  {
    title: "SSC CHSL Tier 2 Syllabus",
    subSections: [
      {
        subtitle: "Mathematical Abilities (गणितीय क्षमताएं)",
        topics: [
          "Number Systems (संख्या प्रणाली)", "Computation of Whole Number (पूर्ण संख्याओं की गणना)", 
          "Decimal and Fractions (दशमलव और भिन्न)", "Relationship between numbers (संख्याओं के बीच संबंध)", 
          "Fundamental arithmetical operations (मूल अंकगणितीय संक्रियाएं)", "Percentages (प्रतिशत)", 
          "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", "Averages (औसत)", 
          "Interest (Simple and Compound) (साधारण और चक्रवृद्धि ब्याज)", "Profit and Loss (लाभ और हानि)", 
          "Discount (छूट)", "Partnership Business (साझेदारी)", "Mixture and Alligation (मिश्रण)", 
          "Time and distance (समय और दूरी)", "Time and work (समय और कार्य)", 
          "Basic algebraic identities (मूल बीजगणितीय सर्वसमिकाएं)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)", 
          "Familiarity with elementary geometric figures and facts (प्रारंभिक ज्यामितीय आकृतियों और तथ्यों से परिचित होना)", 
          "Mensuration (क्षेत्रमिति)", "Trigonometry (त्रिकोणमिति)", "Statistics and probability (सांख्यिकी और प्रायिकता)"
        ]
      },
      {
        subtitle: "Reasoning and General Intelligence (तर्क और सामान्य बुद्धिमत्ता)",
        topics: [
          "Verbal and non-verbal type (मौखिक और गैर-मौखिक प्रकार)", "Semantic Analogy (शब्दार्थ समानता)", 
          "Symbolic operations (प्रतीकात्मक संचालन)", "Symbolic/ Number Analogy (प्रतीकात्मक / संख्या समानता)", 
          "Trends, Figural Analogy (रुझान, आकृति समानता)", "Space Orientation (स्थानिक अभिविन्यास)", 
          "Semantic Classification (शब्दार्थ वर्गीकरण)", "Venn Diagrams (वेन आरेख)", 
          "Symbolic/ Number Classification (प्रतीकात्मक / संख्या वर्गीकरण)", "Drawing inferences (निष्कर्ष निकालना)", 
          "Figural Classification (आकृति वर्गीकरण)", "Punched hole/ pattern-folding & unfolding (छेद/पैटर्न-फोल्डिंग)", 
          "Semantic Series (शब्दार्थ श्रृंखला)", "Figural Pattern-folding and completion (आकृति पैटर्न फोल्डिंग और पूर्णता)", 
          "Number Series (संख्या श्रृंखला)", "Embedded figures (निहित आकृतियाँ)", "Figural Series (आकृति श्रृंखला)", 
          "Critical Thinking (आलोचनात्मक सोच)", "Problem Solving (समस्या समाधान)", 
          "Emotional Intelligence (भावनात्मक बुद्धिमत्ता)", "Word Building (शब्द निर्माण)", 
          "Social Intelligence (सामाजिक बुद्धिमत्ता)"
        ]
      },
      {
        subtitle: "English Language And Comprehension (अंग्रेजी भाषा और समझ)",
        topics: [
          "Vocabulary (शब्दावली)", "Grammar (व्याकरण)", "Sentence structure (वाक्य संरचना)", 
          "Synonyms/Homonyms (पर्यायवाची/समनाम)", "Antonyms (विलोम)", "Spot the Error (त्रुटि पहचानें)", 
          "Fill in the Blanks (रिक्त स्थान भरें)", "Spellings/ Detecting mis-spelt words (वर्तनी/गलत शब्दों की पहचान)", 
          "Idioms and Phrases (मुहावरे और लोकोक्तियाँ)", "One-word substitution (एक शब्द प्रतिस्थापन)", 
          "Improvement of Sentences (वाक्यों में सुधार)", "Active/ Passive Voice of Verbs (सक्रिय/निष्क्रिय वाच्य)", 
          "Conversion into Direct/ Indirect narration (प्रत्यक्ष/अप्रत्यक्ष कथन)", 
          "Shuffling of Sentence parts (वाक्य के भागों का पुनर्व्यवस्थापन)", 
          "Shuffling of Sentences in a passage (वाक्यों का पुनर्व्यवस्थापन)", "Cloze Passage (क्लोज़ पैसेज)", 
          "Comprehension Passage (गद्यांश समझ)"
        ]
      },
      {
        subtitle: "General Awareness (सामान्य जागरूकता)",
        topics: [
          "Questions relating to India and its neighboring countries pertaining to History, Culture, Geography, Economic Scene, General policy, Scientific research (भारत और उसके पड़ोसी देशों से संबंधित प्रश्न - इतिहास, संस्कृति, भूगोल, आर्थिक परिदृश्य, सामान्य नीति, वैज्ञानिक अनुसंधान)"
        ]
      },
      {
        subtitle: "Computer Proficiency (कंप्यूटर प्रवीणता)",
        topics: [
          "Computer Basics (कंप्यूटर बेसिक्स)", "Organization of a computer (कंप्यूटर का संगठन)", 
          "Central Processing Unit - CPU (सेंट्रल प्रोसेसिंग यूनिट - सीपीयू)", "Input/ output devices (इनपुट/आउटपुट डिवाइस)", 
          "Computer memory (कंप्यूटर मेमोरी)", "Memory organization (मेमोरी संगठन)", "Back-up devices (बैकअप डिवाइस)", 
          "PORTs (पोर्ट्स)", "Windows Explorer (विंडोज एक्सप्लोरर)", "Keyboard shortcuts (कीबोर्ड शॉर्टकट)", 
          "Software: Windows OS, MS Office (सॉफ्टवेयर: विंडोज ओएस, एमएस ऑफिस)", 
          "Working with Internet & E-mails (इंटरनेट और ई-मेल के साथ कार्य)", "Web Browsing & Searching (वेब ब्राउज़िंग और खोजना)", 
          "Downloading & Uploading (डाउनलोडिंग और अपलोडिंग)", "Managing an E-mail Account (ई-मेल अकाउंट का प्रबंधन)", 
          "e-Banking (ई-बैंकिंग)", "Basics of networking & cybersecurity (नेटवर्किंग और साइबर सुरक्षा के मूल सिद्धांत)"
        ]
      }
    ]
  }
];

export default function SscChslPage() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 font-semibold text-sm mb-4 border border-pink-500/20">
          SSC Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-4">
          SSC CHSL Syllabus (Tier 1 & Tier 2)
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Complete bilingual (English & Hindi) syllabus for Staff Selection Commission Combined Higher Secondary Level (SSC CHSL) Exam.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-pink-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-pink-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics */}
            {section.subSections ? (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx}>
                    <h3 className="text-lg font-medium text-pink-300 mb-4">{sub.subtitle}</h3>
                    <ul className="space-y-2.5">
                      {sub.topics.map((topic, tIdx) => (
                        <li 
                          key={tIdx} 
                          className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/40 hover:bg-pink-500/5 border border-white/5 hover:border-pink-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 cursor-default group hover:translate-x-1"
                        >
                          <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-mono text-xs font-semibold group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                            {(tIdx + 1).toString().padStart(2, '0')}
                          </div>
                          <span className="font-medium group-hover:text-slate-100 transition-colors">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              /* Handle Normal Flat Topics */
              <ul className="space-y-2.5">
                {section.topics?.map((topic, tIdx) => (
                  <li 
                    key={tIdx} 
                    className="flex items-center gap-4 px-4 py-3 bg-[#0f172a]/40 hover:bg-pink-500/5 border border-white/5 hover:border-pink-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 cursor-default group hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-mono text-xs font-semibold group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      {(tIdx + 1).toString().padStart(2, '0')}
                    </div>
                    <span className="font-medium group-hover:text-slate-100 transition-colors">{topic}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
