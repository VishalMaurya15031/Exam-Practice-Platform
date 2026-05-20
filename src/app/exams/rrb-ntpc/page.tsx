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
    title: "RRB NTPC CBT 1 & CBT 2 General Syllabus",
    subSections: [
      {
        subtitle: "1. Mathematics (गणित)",
        topics: [
          "Number system (संख्या पद्धति)", "Decimals (दशमलव)", "Fractions (भिन्न)", 
          "LCM & HCF (लघुत्तम समापवर्त्य और महत्तम समापवर्तक)", "Ratios and Proportions (अनुपात और समानुपात)", 
          "Percentage (प्रतिशत)", "Mensuration (क्षेत्रमिति)", "Time and Work (समय और कार्य)", 
          "Time and Distance (समय और दूरी)", "Simple & Compound Interest (साधारण और चक्रवृद्धि ब्याज)", 
          "Profit and Loss (लाभ और हानि)", "Elementary Algebra (प्रारंभिक बीजगणित)", 
          "Geometry and Trigonometry (ज्यामिति और त्रिकोणमिति)", "Elementary Statistics (प्रारंभिक सांख्यिकी)"
        ]
      },
      {
        subtitle: "2. General Intelligence & Reasoning (सामान्य बुद्धिमत्ता और तर्कशक्ति)",
        topics: [
          "Analogies (समानताएं)", "Completion of number and alphabetical series (संख्या और वर्णमाला श्रृंखला)", 
          "Coding and Decoding (कोडिंग और डिकोडिंग)", "Mathematical Operations (गणितीय संक्रियाएं)", 
          "Similarities and Differences (समानताएं और भेद)", "Relationships (संबंध)", 
          "Analytical Reasoning (विश्लेषणात्मक तर्क)", "Syllogism (न्याय निगमन)", "Jumbling (जंबलिंग)", 
          "Venn Diagrams (वेन आरेख)", "Puzzle (पहेली)", "Data Sufficiency (डेटा पर्याप्तता)", 
          "Statement-Conclusion (कथन-निष्कर्ष)", "Statement-Courses of Action (कथन-कार्यवाही)", 
          "Decision Making (निर्णय क्षमता)", "Maps, Interpretation of Graphs (मानचित्र, ग्राफ़ की व्याख्या)", 
          "Alphanumeric Series (अल्फ़ान्यूमेरिक श्रृंखला)"
        ]
      },
      {
        subtitle: "3. General Awareness (सामान्य जागरूकता)",
        topics: [
          "Current Events of National & International Importance (राष्ट्रीय और अंतर्राष्ट्रीय समसामयिकी)", 
          "Games and Sports (खेलकूद)", "Art and Culture of India (कला और संस्कृति)", 
          "Indian Literature (भारतीय साहित्य)", "Monuments and Places of India (भारत के स्मारक और स्थान)", 
          "General Science and Life Science - up to 10th (सामान्य विज्ञान और जीवन विज्ञान - 10वीं तक)", 
          "History of India and Freedom Struggle (भारत का इतिहास और स्वतंत्रता संग्राम)", 
          "Geography of India and the World (भारत और विश्व का भूगोल)", 
          "Indian Polity and Governance (भारतीय राजव्यवस्था और शासन)", 
          "Scientific and Technological Developments - Space & Nuclear (वैज्ञानिक एवं तकनीकी विकास - अंतरिक्ष और परमाणु)", 
          "UN and Other World Organizations (संयुक्त राष्ट्र और विश्व संगठन)", 
          "Environmental Issues (पर्यावरणीय मुद्दे)", "Basics of Computers (कंप्यूटर बेसिक्स)", 
          "Common Abbreviations (सामान्य संक्षिप्ताक्षर)", "Transport Systems in India (भारत में परिवहन प्रणाली)", 
          "Indian Economy (भारतीय अर्थव्यवस्था)", "Famous Personalities (प्रसिद्ध व्यक्तित्व)", 
          "Flagship Government Programs (प्रमुख सरकारी कार्यक्रम)", "Flora and Fauna of India (वनस्पति और जीव)"
        ]
      }
    ]
  },
  {
    title: "Detailed Subject-wise Syllabus (विस्तृत विषयवार पाठ्यक्रम)",
    subSections: [
      {
        subtitle: "History (इतिहास)",
        topics: [
          "Pre-historic Period (प्रागैतिहासिक काल)", "Harappan civilization (हड़प्पा सभ्यता)", 
          "The Vedic Civilization & Culture (वैदिक सभ्यता और संस्कृति)", "The emergence of Mahajanapadas & Magadh (महाजनपद और मगध का उदय)", 
          "Religious Revolution (धार्मिक क्रांति)", "The Mauryan Empire (मौर्य साम्राज्य)", "The Sangam Age (संगम युग)", 
          "The Gupta Empire (गुप्त साम्राज्य)", "Post Gupta Period / Vardhana Dynasty (उत्तर गुप्त काल / वर्धन वंश)", 
          "India After Harsha (हर्ष के बाद का भारत)", "Rajput Age (राजपूत युग)", "Sultanate Period (सल्तनत काल)", 
          "The Vijayanagar Empire (विजयनगर साम्राज्य)", "Sufi and Bhakti Movement (सूफी और भक्ति आंदोलन)", 
          "The Mughal Empire (मुगल साम्राज्य)", "Maratha State & Maratha Confederacy (मराठा राज्य और मराठा संघ)", 
          "Advent Of Europeans (यूरोपीय लोगों का आगमन)", "Expansion Of British Power (ब्रिटिश सत्ता का विस्तार)", 
          "Economic Impact Of British Rule (ब्रिटिश शासन का आर्थिक प्रभाव)", "Socio-Religious Movements in the 19th -20th Century (19वीं-20वीं सदी में सामाजिक-धार्मिक आंदोलन)", 
          "Revolt of 1857 (1857 का विद्रोह)", "Moderate, Extremist Phase Of Congress (कांग्रेस का उदारवादी, उग्रवादी चरण)", 
          "The Indian National Movements (भारतीय राष्ट्रीय आंदोलन)", "The Gandhian Era (गांधीवादी युग)", "First Phase Of Independence (स्वतंत्रता का पहला चरण)"
        ]
      },
      {
        subtitle: "Indian Polity (भारतीय राजव्यवस्था)",
        topics: [
          "Evolution of the Indian Constitution (भारतीय संविधान का विकास)", "Constituent Assembly and Making of the Constitution (संविधान सभा और संविधान का निर्माण)", 
          "Different Sources of the Indian Constitution (भारतीय संविधान के विभिन्न स्रोत)", "Important Articles of the Constitution (संविधान के महत्वपूर्ण अनुच्छेद)", 
          "Important Amendments of the Constitution (संविधान के महत्वपूर्ण संशोधन)", "Some Special features of the Indian Constitution (संविधान की कुछ विशेष विशेषताएं)", 
          "Federal and Unitary features of the Indian Union (भारतीय संघ की संघीय और एकात्मक विशेषताएं)", "The preamble (प्रस्तावना)", 
          "Lapse of Paramountcy (सर्वोच्चता की समाप्ति)", "Integration and Merger of Indian States (भारतीय राज्यों का एकीकरण और विलय)", 
          "The Union and its Territories (संघ और उसके क्षेत्र)", "Reorganization of States (राजörungen)", "Citizenship (नागरिकता)", 
          "Fundamental Rights (मौलिक अधिकार)", "Directive Principles of State Policy (राज्य के नीति निदेशक तत्व)", "Fundamental Duties (मौलिक कर्तव्य)", 
          "The procedure of Amending the Constitution (संविधान में संशोधन की प्रक्रिया)", "Executive of the Union (संघ की कार्यपालिका)", 
          "The Parliament of India (भारत की संसद)", "Executive of the States (राज्यों की कार्यपालिका)", "Special Position of J & K (जम्मू और कश्मीर की विशेष स्थिति)", 
          "Panchayats (पंचायतें)", "Municipalities (नगरपालिकाएं)", "The Supreme Court (सर्वोच्च न्यायालय)", "The High Court (उच्च न्यायालय)", 
          "Inter-State Council (अंतर-राज्य परिषद)", "Finance Commission (वित्त आयोग)", "Planning Commission (योजना आयोग)", 
          "National Development Council (राष्ट्रीय विकास परिषद)", "National Integration Council (राष्ट्रीय एकता परिषद)", "Inter-State Relations (अंतर-राज्य संबंध)", 
          "Emergency Provisions (आपातकालीन प्रावधान)", "Public Service Commissions (लोक सेवा आयोग)", "Election (चुनाव)", 
          "Delimitation Commission of India (भारत का परिसीमन आयोग)", "The Official Languages (राजभाषा)", "National Symbols (राष्ट्रीय प्रतीक)"
        ]
      },
      {
        subtitle: "Geography (भूगोल)",
        topics: [
          "The Solar System (सौर मंडल)", "Continents and Oceans (महाद्वीप और महासागर)", "Biosphere, Lithosphere, Hydrosphere (जीवमंडल, स्थलमंडल, जलमंडल)", 
          "Latitudes and Longitudes (अक्षांश और देशांतर)", "Different heat zones of the earth (पृथ्वी के विभिन्न ताप क्षेत्र)", 
          "Longitudes and time zones (देशांतर और समय क्षेत्र)", "International Date Line (अंतर्राष्ट्रीय तिथि रेखा)", 
          "The motion of the earth (पृथ्वी की गति)", "The Atmosphere (वायुमंडल)", "Weather and Climate (मौसम और जलवायु)", 
          "Atmospheric Pressure (वायुमंडलीय दबाव)", "Internal Structure of the earth (पृथ्वी की आंतरिक संरचना)", "Rocks (चट्टानें)", 
          "Earthquakes and Volcanoes (भूकंप और ज्वालामुखी)", "Various Landforms (विभिन्न स्थलाकृतियाँ)", "The Indian Subcontinent (भारतीय उपमहाद्वीप)", 
          "Climatic diversity (जलवायु विविधता)", "Soil resources (मृदा संसाधन)", "Agriculture and Land use (कृषि और भूमि उपयोग)", 
          "Water resources and utilization (जल संसाधन और उपयोग)", "Multipurpose river valley projects (बहुउद्देशीय नदी घाटी परियोजनाएं)", 
          "Transport in India (भारत में परिवहन)", "India-Facts and figures (भारत - तथ्य और आंकड़े)", "General introduction to Asia (एशिया का सामान्य परिचय)", 
          "Geography of the Indian subcontinent Countries (भारतीय उपमहाद्वीप के देशों का भूगोल)", "Riverside cities (नदी किनारे के शहर)", 
          "Wonders of the world (दुनिया के अजूबे)", "Countries and their main products and industries (देश और उनके मुख्य उत्पाद और उद्योग)", 
          "Famous sites (प्रसिद्ध स्थल)", "Important boundary lines (महत्वपूर्ण सीमा रेखाएं)", "Tribes and their homelands (जनजातियां और उनके निवास स्थान)"
        ]
      },
      {
        subtitle: "Economics (अर्थव्यवस्था)",
        topics: [
          "Highlights of the Indian Economy (भारतीय अर्थव्यवस्था की मुख्य विशेषताएं)", "Economy and Economics (अर्थव्यवस्था और अर्थशास्त्र)", 
          "Characteristics of the Indian Economy (भारतीय अर्थव्यवस्था की विशेषताएं)", "Agriculture & Land Development (कृषि और भूमि विकास)", 
          "National Income (राष्ट्रीय आय)", "Planning (योजना)", "Unemployment (बेरोजगारी)", "Trade & Commerce (व्यापार और वाणिज्य)", 
          "New Economic Policy (नई आर्थिक नीति)", "Indian Financial System (भारतीय वित्तीय प्रणाली)", "Indian Fiscal System (भारतीय राजकोषीय प्रणाली)", 
          "Banking in India (भारत में बैंकिंग)", "Tax System (कर प्रणाली)", "Industry (उद्योग)", "Foreign Trade (विदेशी व्यापार)"
        ]
      },
      {
        subtitle: "Science (विज्ञान)",
        topics: [
          "Physics: Motion (भौतिकी: गति)", "Physics: Work Energy and Power (भौतिकी: कार्य ऊर्जा और शक्ति)", 
          "Physics: Gravitation (भौतिकी: गुरुत्वाकर्षण)", "Physics: Pressure, Floatation, Surface Tension, Viscosity (भौतिकी: दबाव, प्लवन, पृष्ठ तनाव, श्यानता)", 
          "Physics: Wave, Sound, Heat, Light (भौतिकी: तरंग, ध्वनि, ऊष्मा, प्रकाश)", "Physics: Electricity & Magnetism (भौतिकी: विद्युत और चुंबकत्व)", 
          "Physics: Atomic & Nuclear Physics (भौतिकी: परमाणु और नाभिकीय भौतिकी)", "Chemistry: Substance & its nature (रसायन विज्ञान: पदार्थ और उसकी प्रकृति)", 
          "Chemistry: Atomic Structure, Periodic Table (रसायन विज्ञान: परमाणु संरचना, आवर्त सारणी)", 
          "Chemistry: Chemical Bonding, Oxidation & Reduction (रसायन विज्ञान: रासायनिक बंधन, ऑक्सीकरण और अपचयन)", 
          "Chemistry: Acids, Bases & Salts (रसायन विज्ञान: अम्ल, क्षार और लवण)", "Chemistry: Carbon & its Compounds, Fuels (रसायन विज्ञान: कार्बन और उसके यौगिक, ईंधन)", 
          "Chemistry: Metallurgy (रसायन विज्ञान: धातु विज्ञान)", "Biology: Classification of Organism, Cytology (जीव विज्ञान: जीवों का वर्गीकरण, कोशिका विज्ञान)", 
          "Botany: Plant Morphology, Tissue, Photo-synthesis, Hormones (वनस्पति विज्ञान: पादप आकारिकी, ऊतक, प्रकाश संश्लेषण, हार्मोन)", 
          "Zoology: Animal Kingdom, Tissue (प्राणी विज्ञान: जंतु जगत, ऊतक)", "Biology: Human Blood, Systems, Nutrients, Diseases (जीव विज्ञान: मानव रक्त, तंत्र, पोषक तत्व, रोग)"
        ]
      }
    ]
  }
];

export default function RrbNtpcPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const renderNotes = (subtitle: string, topic: string) => {
    const subLower = subtitle.toLowerCase();

    // Mathematics
    if (subLower.includes("math") || subLower.includes("arithmetic")) {
      return <SscQuantitativeAptitudeNotes topic={topic} />;
    }
    // Reasoning
    if (subLower.includes("intelligence") || subLower.includes("reasoning")) {
      return <SscReasoningNotes topic={topic} />;
    }
    // General Science
    if (subLower.includes("science") || subLower.includes("biology") || subLower.includes("physics") || subLower.includes("chemistry")) {
      return <RrbGeneralScienceNotes topic={topic} />;
    }
    // General Awareness
    return <SscGeneralAwarenessNotes topic={topic} />;
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 font-semibold text-sm mb-4 border border-sky-500/20">
          Railway Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4">
          RRB NTPC Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Comprehensive bilingual (English & Hindi) syllabus for Railway Recruitment Board Non-Technical Popular Categories (RRB NTPC) CBT 1 & CBT 2.
          Click on any topic to explore premium, highly structured interactive study notes!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link href="/exams/rrb-ntpc/test/mathematics">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-sky-500/25 cursor-pointer">
            Start Mock Test
          </button>
        </Link>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors cursor-pointer">
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
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-2">
                      <h3 className="text-lg font-medium text-sky-400 border-l-2 border-sky-500 pl-3">{sub.subtitle}</h3>
                      {sub.subtitle.includes("Mathematics") && (
                        <Link href="/exams/rrb-ntpc/test/mathematics">
                          <button className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-105 active:scale-95 text-slate-950 rounded-xl transition-all shadow-[0_0_12px_rgba(14,165,233,0.25)] hover:shadow-[0_0_18px_rgba(14,165,233,0.45)] flex items-center gap-1 cursor-pointer">
                            📝 Start Mathematics Mock Test (गणित मॉक टेस्ट)
                          </button>
                        </Link>
                      )}
                      {sub.subtitle.includes("General Intelligence & Reasoning") && (
                        <Link href="/exams/rrb-ntpc/test/reasoning">
                          <button className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-400 to-indigo-500 hover:scale-105 active:scale-95 text-slate-950 rounded-xl transition-all shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 cursor-pointer">
                            🧠 Start Reasoning Mock Test (तर्कशक्ति मॉक टेस्ट)
                          </button>
                        </Link>
                      )}
                      {sub.subtitle.includes("General Awareness") && (
                        <Link href="/exams/rrb-ntpc/test/general-awareness">
                          <button className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-emerald-400 to-teal-500 hover:scale-105 active:scale-95 text-slate-950 rounded-xl transition-all shadow-[0_0_12px_rgba(52,211,153,0.25)] hover:shadow-[0_0_18px_rgba(52,211,153,0.45)] flex items-center gap-1 cursor-pointer">
                            🌍 Start GK Mock Test (सामान्य जागरूकता मॉक टेस्ट)
                          </button>
                        </Link>
                      )}
                    </div>
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
                                {renderNotes(sub.subtitle, topic)}
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
                          {renderNotes(section.title, topic)}
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
