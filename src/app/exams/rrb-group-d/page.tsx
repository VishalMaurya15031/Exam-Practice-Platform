"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

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

  const handleDownloadSyllabusPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please allow popups to download/print the PDF.");
      return;
    }

    const content = `
      <html>
        <head>
          <title>RRB Group D Complete Syllabus & Math Cheat Sheet</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif;
              color: #1e293b;
              line-height: 1.5;
              margin: 0;
              padding: 30px;
              background-color: #ffffff;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #0284c7;
              padding-bottom: 15px;
              margin-bottom: 20px;
            }
            .header h1 {
              color: #0f172a;
              margin: 0 0 5px 0;
              font-size: 24px;
              font-weight: 700;
            }
            .header h2 {
              color: #0284c7;
              margin: 0;
              font-size: 16px;
              font-weight: 600;
            }
            .header p {
              margin: 5px 0 0 0;
              color: #4b5563;
              font-size: 12px;
            }
            .badge {
              background-color: #f0f9ff;
              color: #0369a1;
              padding: 3px 10px;
              border-radius: 10px;
              font-size: 10px;
              font-weight: 600;
              border: 1px solid #bae6fd;
              display: inline-block;
              margin-bottom: 5px;
            }
            .section {
              margin-bottom: 20px;
              page-break-inside: avoid;
            }
            .section-title {
              color: #0369a1;
              font-size: 15px;
              font-weight: 600;
              border-left: 4px solid #0284c7;
              padding-left: 8px;
              margin-bottom: 10px;
              background-color: #f0f9ff;
              padding-top: 4px;
              padding-bottom: 4px;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }
            @media (max-width: 600px) {
              .grid {
                grid-template-columns: 1fr;
              }
            }
            .card {
              border: 1px solid #e2e8f0;
              border-radius: 6px;
              padding: 10px;
              background-color: #f8fafc;
            }
            .card-title {
              font-weight: 600;
              color: #0f172a;
              font-size: 12px;
              margin-bottom: 4px;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 3px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 10px;
            }
            th, td {
              border: 1px solid #cbd5e1;
              padding: 6px 8px;
              text-align: left;
              font-size: 11px;
            }
            th {
              background-color: #f1f5f9;
              color: #334155;
              font-weight: 600;
            }
            .formula-box {
              background-color: #f8fafc;
              border-left: 3px solid #10b981;
              padding: 8px;
              margin: 8px 0;
              font-family: monospace;
              font-size: 11px;
              border-radius: 0 4px 4px 0;
              white-space: pre-line;
            }
            .example-box {
              background-color: #fffbeb;
              border: 1px dashed #d97706;
              padding: 8px 10px;
              margin: 8px 0;
              border-radius: 4px;
              font-size: 11px;
            }
            .example-title {
              font-weight: 600;
              color: #b45309;
              margin-bottom: 2px;
            }
            .footer {
              text-align: center;
              margin-top: 25px;
              font-size: 9px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 8px;
            }
            ul {
              margin: 5px 0;
              padding-left: 15px;
            }
            li {
              font-size: 11px;
              margin-bottom: 2px;
              color: #334155;
            }
            .topic-list {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4px;
              list-style-type: square;
              padding-left: 15px;
            }
            .highlight-card {
              border: 1px solid #a7f3d0;
              background-color: #f0fdf4;
              border-radius: 8px;
              padding: 15px;
              margin-bottom: 20px;
            }
            .highlight-title {
              color: #047857;
              font-weight: 750;
              font-size: 14px;
              margin-bottom: 8px;
              border-bottom: 1px solid #a7f3d0;
              padding-bottom: 4px;
              display: flex;
              align-items: center;
              gap: 5px;
            }
            strong {
              color: #0f172a;
            }
            @media print {
              body {
                padding: 0;
              }
              .page-break {
                page-break-before: always;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="badge">Bilingual Syllabus & Math Booklet</div>
            <h1>RRB Group D Exam Complete Syllabus</h1>
            <h2>रेलवे भर्ती बोर्ड (RRB) ग्रुप डी सम्पूर्ण पाठ्यक्रम</h2>
            <p>Bilingual Guide containing Official Syllabus and Hand-written Math Notes Booklet</p>
          </div>

          <!-- Section 1: Mathematics and Number System booklet -->
          <div class="section">
            <div class="section-title">1. Mathematics Syllabus (गणित पाठ्यक्रम)</div>
            <p style="font-size: 11px; color: #475569; margin: 0 0 10px 0;">
              Mathematics comprises 25 marks in the RRB Group D Exam. Below are the official topics, featuring a special hand-written reference guide for the core topic: <b>Number System (संख्या पद्धति)</b>.
            </p>
            <ul class="topic-list" style="margin-bottom: 15px;">
              ${syllabusData[0].topics?.map((topic, i) => `<li><b>${(i+1).toString().padStart(2, '0')}.</b> ${topic}</li>`).join('')}
            </ul>

            <!-- Special Appendix: Number System notes built-in -->
            <div class="highlight-card">
              <div class="highlight-title">📖 Topic 01 Special Booklet: Number System (संख्या पद्धति हस्तलिखित नोट्स)</div>
              
              <h3 style="font-size: 12px; color: #047857; margin: 10px 0 5px 0;">A. Classification of Numbers (संख्याओं का वर्गीकरण)</h3>
              <table style="background: #ffffff;">
                <thead>
                  <tr>
                    <th>Type (प्रकार)</th>
                    <th>Definition & Rules (परिभाषा व नियम)</th>
                    <th>Examples (उदाहरण)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Prime (अभाज्य)</b></td>
                    <td>Exactly 2 factors. <b>2 is the only EVEN prime number!</b> (2 एकमात्र सम अभाज्य संख्या है).</td>
                    <td>2, 3, 5, 7, 11, 13, 17, 19...</td>
                  </tr>
                  <tr>
                    <td><b>Composite (भाज्य)</b></td>
                    <td>More than 2 factors. <b>1 is neither prime nor composite!</b> (1 न तो अभाज्य है न भाज्य).</td>
                    <td>4, 6, 8, 9, 10, 12... (Smallest composite is 4)</td>
                  </tr>
                  <tr>
                    <td><b>Rational (परिमेय)</b></td>
                    <td>p/q form where q &ne; 0 (e.g. integer fractions, terminating decimals).</td>
                    <td>3/4, -5, 0, 22/7, 0.333...</td>
                  </tr>
                  <tr>
                    <td><b>Irrational (अपरिमेय)</b></td>
                    <td>Non-terminating, non-repeating decimals. <b>&pi; (pi) is Irrational!</b></td>
                    <td>&radic;2, &radic;3, &pi;</td>
                  </tr>
                </tbody>
              </table>
              <p style="font-size: 10px; color: #047857; margin: -5px 0 10px 0;">
                *Note:* Primes from 1 to 50 = <b>15</b> | Primes from 51 to 100 = <b>10</b> | Primes from 1 to 100 = <b>25</b>.
              </p>

              <h3 style="font-size: 12px; color: #047857; margin: 10px 0 5px 0;">B. Divisibility Shortcuts (विभाज्यता के नियम)</h3>
              <div class="grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 10px;">
                <div class="card" style="background: #ffffff; border-color: #a7f3d0;">
                  <div class="card-title" style="color: #047857;">For 3, 9 & 11</div>
                  <ul style="padding-left: 12px; margin: 0;">
                    <li style="font-size: 10px;"><b>By 3 & 9:</b> Sum of digits is divisible by 3 or 9.</li>
                    <li style="font-size: 10px;"><b>By 11:</b> Sum of odd-place digits &minus; Sum of even-place digits = 0 or multiple of 11.</li>
                  </ul>
                </div>
                <div class="card" style="background: #ffffff; border-color: #a7f3d0;">
                  <div class="card-title" style="color: #047857;">For 4, 8 & Composites</div>
                  <ul style="padding-left: 12px; margin: 0;">
                    <li style="font-size: 10px;"><b>By 4 & 8:</b> Last 2 digits (for 4) or last 3 digits (for 8) are divisible.</li>
                    <li style="font-size: 10px;"><b>By 72 / 88:</b> For 72, check 8 & 9. For 88, check 8 & 11.</li>
                  </ul>
                </div>
              </div>

              <h3 style="font-size: 12px; color: #047857; margin: 10px 0 5px 0;">C. Unit Digit Rules & Cyclicity (इकाई का अंक)</h3>
              <ul style="padding-left: 15px; margin: 0 0 10px 0;">
                <li style="font-size: 10px;"><b>0, 1, 5, 6:</b> Unit digit stays the same for any positive power.</li>
                <li style="font-size: 10px;"><b>4 & 9:</b> 4<sup>odd</sup> = 4, 4<sup>even</sup> = 6 | 9<sup>odd</sup> = 9, 9<sup>even</sup> = 1.</li>
                <li style="font-size: 10px;"><b>2, 3, 7, 8:</b> Divide power by 4, find remainder (rem). Unit digit = (Base Digit)<sup>rem</sup> (If rem=0, power=4).</li>
              </ul>
              <div class="example-box" style="background: #ffffff; border-color: #a7f3d0;">
                <b>Example:</b> Unit digit of (274)<sup>135</sup> &times; (317)<sup>82</sup> &rarr; 4<sup>odd</sup> &times; 7<sup>(82%4)</sup> = 4 &times; 7&sup2; = 4 &times; 9 = 36 &rarr; <b>6</b>.
              </div>

              <h3 style="font-size: 12px; color: #047857; margin: 10px 0 5px 0;">D. Essential Formula Sheet & Series (प्रमुख सूत्र)</h3>
              <div class="formula-box" style="background: #ffffff; border: 1px solid #a7f3d0; margin-bottom: 0;">
                • Sum of first N natural numbers = <b>N(N + 1) / 2</b>
                • Sum of squares of first N natural numbers = <b>N(N + 1)(2N + 1) / 6</b>
                • Sum of cubes of first N natural numbers = <b>[N(N + 1) / 2]&sup2;</b>
                • Sum of first N EVEN numbers = <b>N(N + 1)</b> | Sum of first N ODD numbers = <b>N&sup2;</b>
                • Mixed Recurring Decimals conversion: <b>0.ab&macr; = (ab &minus; a) / 90</b> (e.g. 0.35&macr; = 32/90 = 16/45)
              </div>
            </div>

            <!-- Special Appendix: Simplification notes built-in -->
            <div class="highlight-card" style="border-color: #bae6fd; background-color: #f0f9ff; margin-top: 15px;">
              <div class="highlight-title" style="color: #0369a1; border-color: #bae6fd;">📖 Topic 02 Special Booklet: Simplification (सरलीकरण हस्तलिखित नोट्स)</div>
              
              <h3 style="font-size: 12px; color: #0369a1; margin: 10px 0 5px 0;">A. VBODMAS Rule (The Golden Rule / VBODMAS का नियम)</h3>
              <p style="font-size: 11px; color: #475569; margin: 0 0 10px 0;">
                सरलीकरण के किसी भी प्रश्न को हल करने के लिए VBODMAS नियम का पालन करना अनिवार्य है।
              </p>
              <table style="background: #ffffff; border-color: #bae6fd;">
                <thead>
                  <tr style="background-color: #e0f2fe; color: #0369a1;">
                    <th style="border-color: #bae6fd;">Letter</th>
                    <th style="border-color: #bae6fd;">Meaning (मतलब)</th>
                    <th style="border-color: #bae6fd;">Sign / Operation (क्रिया)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>V</b> (Vinculum)</td>
                    <td style="border-color: #bae6fd;">बार कोष्ठक / रेखा कोष्ठक</td>
                    <td style="border-color: #bae6fd;"><span style="text-decoration: overline;">x - y</span> (सबसे पहले)</td>
                  </tr>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>B</b> (Brackets)</td>
                    <td style="border-color: #bae6fd;">कोष्ठक ( ), { }, [ ]</td>
                    <td style="border-color: #bae6fd;">कोष्ठक इसी क्रम में हल करें</td>
                  </tr>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>O</b> (Of)</td>
                    <td style="border-color: #bae6fd;">का (&times;)</td>
                    <td style="border-color: #bae6fd;">गुणा, लेकिन भाग से पहले</td>
                  </tr>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>D</b> (Division)</td>
                    <td style="border-color: #bae6fd;">भाग (&divide;)</td>
                    <td style="border-color: #bae6fd;">भाग</td>
                  </tr>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>M</b> (Multiplication)</td>
                    <td style="border-color: #bae6fd;">गुणा (&times;)</td>
                    <td style="border-color: #bae6fd;">गुणा</td>
                  </tr>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>A</b> (Addition)</td>
                    <td style="border-color: #bae6fd;">जोड़ (+)</td>
                    <td style="border-color: #bae6fd;">जोड़</td>
                  </tr>
                  <tr>
                    <td style="border-color: #bae6fd;"><b>S</b> (Subtraction)</td>
                    <td style="border-color: #bae6fd;">घटाव (-)</td>
                    <td style="border-color: #bae6fd;">घटाव</td>
                  </tr>
                </tbody>
              </table>

              <h3 style="font-size: 12px; color: #0369a1; margin: 10px 0 5px 0;">B. Important Algebraic Formulas (बीजगणितीय सूत्र)</h3>
              <div class="formula-box" style="background: #ffffff; border: 1px solid #bae6fd; margin-bottom: 10px;">
                • <b>(a + b)&sup2; = a&sup2; + 2ab + b&sup2;</b> | <b>(a &minus; b)&sup2; = a&sup2; &minus; 2ab + b&sup2;</b>
                • <b>a&sup2; &minus; b&sup2; = (a &minus; b)(a + b)</b>
                • <b>a&sup3; + b&sup3; = (a + b)(a&sup2; &minus; ab + b&sup2;) &rArr; (a&sup3; + b&sup3;) / (a&sup2; &minus; ab + b&sup2;) = a + b</b>
                • <b>a&sup3; &minus; b&sup3; = (a &minus; b)(a&sup2; + ab + b&sup2;) &rArr; (a&sup3; &minus; b&sup3;) / (a&sup2; + ab + b&sup2;) = a &minus; b</b>
              </div>

              <h3 style="font-size: 12px; color: #0369a1; margin: 10px 0 5px 0;">C. Shortcuts & Tricks (शॉर्ट ट्रिक्स)</h3>
              <ul style="padding-left: 15px; margin: 0 0 10px 0;">
                <li style="font-size: 10px;"><b>Mixed Fractions:</b> 5&frac12; + 3&frac14; = (5 + 3) + (&frac12; + &frac14;) = 8 + &frac34; = <b>8&frac34;</b>.</li>
                <li style="font-size: 10px;"><b>Digital Sum:</b> अंकों का योग (नौ को 0 या 9 मानें) का प्रयोग बड़े गुणा/जोड़ के विकल्पों को एलिमिनेट करने के लिए करें.</li>
              </ul>

              <h3 style="font-size: 12px; color: #0369a1; margin: 10px 0 5px 0;">D. Solved Examples (हल सहित उदाहरण)</h3>
              <div class="example-box" style="background: #ffffff; border-color: #bae6fd; margin-bottom: 5px;">
                <b>Example 1 (VBODMAS):</b> 25 &minus; [20 &minus; {10 &minus; (7 &minus; <span style="text-decoration: overline;">5 &minus; 3</span>)}] &rArr; 25 &minus; [20 &minus; {10 &minus; (7 &minus; 2)}] &rArr; 25 &minus; [20 &minus; {10 &minus; 5}] &rArr; 25 &minus; [20 &minus; 5] &rArr; 25 &minus; 15 = <b>10</b>.<br/>
                <b>Example 2 (Of & Division):</b> 60 &divide; 5 का 2 &times; (1 + 1) &rArr; 60 &divide; 5 का 2 &times; 2 &rArr; 60 &divide; 10 &times; 2 &rArr; 6 &times; 2 = <b>12</b>.<br/>
                <b>Example 3 (Formulas):</b> (0.73&sup3; + 0.27&sup3;) / (0.73&sup2; &minus; 0.73 &times; 0.27 + 0.27&sup2;) = a + b = 0.73 + 0.27 = <b>1</b>.
              </div>
            </div>
          </div>

          <!-- Section 2: Reasoning, Science, Awareness -->
          <div class="section page-break">
            <div class="section-title">2. General Intelligence & Reasoning (तर्कशक्ति) - 30 Marks</div>
            <div class="grid">
              ${syllabusData[1].subSections?.map(sub => `
                <div class="card">
                  <div class="card-title">${sub.subtitle}</div>
                  <ul style="padding-left: 12px; margin: 0;">
                    ${sub.topics.map(topic => `<li>${topic}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title">3. General Science (सामान्य विज्ञान) - 25 Marks</div>
            <p style="font-size: 11px; color: #475569; margin: 0 0 10px 0;">
              Covers Physics, Chemistry, and Life Sciences of 10th standard level (CBSE/State Board).
            </p>
            <div class="grid" style="grid-template-columns: 1fr 1fr 1fr;">
              ${syllabusData[2].subSections?.map(sub => `
                <div class="card">
                  <div class="card-title">${sub.subtitle}</div>
                  <ul style="padding-left: 10px; margin: 0;">
                    ${sub.topics.map(topic => `<li>${topic}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title">4. General Awareness & Current Affairs (सामान्य जागरूकता) - 20 Marks</div>
            <div class="card" style="width: 100%;">
              <ul class="topic-list">
                ${syllabusData[3].topics?.map(topic => `<li>${topic}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="footer">
            <p>Downloaded from Exam Practice Platform. Practicing daily guarantees success!</p>
            <p>© 2026 Exam Practice Platform. All rights reserved. Print only for personal learning.</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() {
                window.close();
              }, 500);
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  const renderNotes = (sectionIdx: number, topic: string) => {
    // 0: Mathematics, 1: Reasoning, 2: Science, 3: General Awareness
    if (sectionIdx === 0) return <SscQuantitativeAptitudeNotes topic={topic} />;
    if (sectionIdx === 1) return <SscReasoningNotes topic={topic} />;
    if (sectionIdx === 2) return <RrbGeneralScienceNotes topic={topic} />;
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
        <button 
          onClick={handleDownloadSyllabusPDF}
          className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2"
        >
          <FileText className="w-5 h-5 text-sky-400" /> Download PDF Syllabus
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
                          {renderNotes(idx, topic)}
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
