"use client";
import React, { useState } from 'react';
import { 
  Percent, Ruler, BarChart2, Hash, Percent as PercentIcon, RefreshCw, 
  Layers, Calculator, FileText, Printer, Download, BookOpen, AlertCircle, Sparkles, ChevronRight
} from 'lucide-react';

export default function SscQuantitativeAptitudeNotes({ topic }: { topic?: string }) {
  const [activeTab, setActiveTab] = useState<'arithmetic' | 'advanced' | 'stats'>('arithmetic');
  const [numSystemTab, setNumSystemTab] = useState<'classification' | 'divisibility' | 'formulas' | 'remainder'>('classification');
  const [simplificationTab, setSimplificationTab] = useState<'vbodmas' | 'formulas' | 'tricks' | 'examples'>('vbodmas');
  const [hcfLcmTab, setHcfLcmTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [ratioTab, setRatioTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [decimalTab, setDecimalTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [percentTab, setPercentTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [unitaryTab, setUnitaryTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [workTab, setWorkTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [distTab, setDistTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [averageTab, setAverageTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [profitTab, setProfitTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [mensurationTab, setMensurationTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [interestTab, setInterestTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [diTab, setDiTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [algebraTab, setAlgebraTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [rootTab, setRootTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');
  const [partnershipTab, setPartnershipTab] = useState<'basics' | 'formulas' | 'tricks' | 'examples'>('basics');


  const tabs = [
    { id: 'arithmetic', label: '🧮 Arithmetic Tricks (अंकगणित)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { id: 'advanced', label: '📐 Advanced Maths (उच्च गणित)', color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' },
    { id: 'stats', label: '📊 Statistics & Probability (सांख्यिकी)', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' }
  ] as const;

  // Topic specific render logic
  if (topic) {
    const topicLower = topic.toLowerCase();

    // 1a. Exclusive Number System (संख्या पद्धति)
    if (topicLower.includes("number system") || topicLower.includes("संख्या पद्धति")) {
      const handleDownloadNumberSystemPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          alert("Please allow popups to download/print the PDF.");
          return;
        }
        const content = `
          <html>
            <head>
              <title>Number System - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body {
                  font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif;
                  color: #1e293b;
                  line-height: 1.6;
                  margin: 0;
                  padding: 35px;
                  background-color: #ffffff;
                }
                .header {
                  text-align: center;
                  border-bottom: 3px double #10b981;
                  padding-bottom: 15px;
                  margin-bottom: 25px;
                }
                .header h1 {
                  color: #0f172a;
                  margin: 0;
                  font-size: 26px;
                  font-weight: 700;
                }
                .header h2 {
                  color: #047857;
                  margin: 5px 0 0 0;
                  font-size: 20px;
                  font-weight: 600;
                }
                .header p {
                  margin: 8px 0 0 0;
                  color: #4b5563;
                  font-size: 13px;
                  font-weight: 500;
                }
                .badge {
                  background-color: #ecfdf5;
                  color: #047857;
                  padding: 4px 12px;
                  border-radius: 12px;
                  font-size: 11px;
                  font-weight: 600;
                  border: 1px solid #a7f3d0;
                  display: inline-block;
                  margin-bottom: 8px;
                }
                .section {
                  margin-bottom: 25px;
                  page-break-inside: avoid;
                }
                .section-title {
                  color: #047857;
                  font-size: 16px;
                  font-weight: 600;
                  border-left: 4px solid #10b981;
                  padding-left: 10px;
                  margin-bottom: 12px;
                  background-color: #f0fdf4;
                  padding-top: 6px;
                  padding-bottom: 6px;
                }
                .grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
                }
                @media (max-width: 600px) {
                  .grid {
                    grid-template-columns: 1fr;
                  }
                }
                .card {
                  border: 1px solid #e2e8f0;
                  border-radius: 8px;
                  padding: 12px;
                  background-color: #fafafa;
                }
                .card-title {
                  font-weight: 600;
                  color: #0f172a;
                  font-size: 13px;
                  margin-bottom: 6px;
                  border-bottom: 1px solid #e2e8f0;
                  padding-bottom: 4px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 15px;
                }
                th, td {
                  border: 1px solid #cbd5e1;
                  padding: 8px 10px;
                  text-align: left;
                  font-size: 12px;
                }
                th {
                  background-color: #f1f5f9;
                  color: #334155;
                  font-weight: 600;
                }
                .formula-box {
                  background-color: #f8fafc;
                  border-left: 3px solid #10b981;
                  padding: 10px;
                  margin: 10px 0;
                  font-family: monospace;
                  font-size: 12px;
                  border-radius: 0 6px 6px 0;
                  white-space: pre-line;
                }
                .example-box {
                  background-color: #fffbeb;
                  border: 1px dashed #f59e0b;
                  padding: 12px;
                  margin: 10px 0;
                  border-radius: 6px;
                  font-size: 12px;
                }
                .example-title {
                  font-weight: 600;
                  color: #b45309;
                  margin-bottom: 4px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  font-size: 10px;
                  color: #94a3b8;
                  border-top: 1px solid #e2e8f0;
                  padding-top: 10px;
                }
                ul {
                  margin: 5px 0;
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 4px;
                  font-size: 12px;
                }
                strong {
                  color: #0f172a;
                }
                @media print {
                  body {
                    padding: 0;
                  }
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Number System</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: संख्या पद्धति</h2>
                <p>Designed for Excellence in Railway Exams | सर्वोत्तम शार्टकट ट्रिक्स व सूत्र संकलन</p>
              </div>

              <div class="section">
                <div class="section-title">1. Classification of Numbers (संख्याओं का वर्गीकरण)</div>
                <table>
                  <thead>
                    <tr>
                      <th>Number Type (प्रकार)</th>
                      <th>Definition & Key Properties (परिभाषा एवं मुख्य विशेषताएं)</th>
                      <th>Examples (उदाहरण)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Natural (प्राकृतिक)</b></td>
                      <td>Counting numbers starting from 1 (1 से अनंत तक). Symbol: <b>N</b>.</td>
                      <td>1, 2, 3, 4, 5, ...</td>
                    </tr>
                    <tr>
                      <td><b>Whole (पूर्ण)</b></td>
                      <td>Natural numbers including 0 (शून्य सहित प्राकृतिक संख्याएं). Symbol: <b>W</b>.</td>
                      <td>0, 1, 2, 3, 4, ...</td>
                    </tr>
                    <tr>
                      <td><b>Prime (अभाज्य)</b></td>
                      <td>Exactly 2 factors: 1 and itself. <b>2 is the only EVEN prime number!</b> (2 एकमात्र सम अभाज्य संख्या है).</td>
                      <td>2, 3, 5, 7, 11, 13, 17, 19, 23, 29...</td>
                    </tr>
                    <tr>
                      <td><b>Composite (भाज्य)</b></td>
                      <td>More than 2 factors. <b>1 is NEITHER prime nor composite!</b> (1 न तो अभाज्य है न भाज्य).</td>
                      <td>4, 6, 8, 9, 10, 12... (Smallest composite is 4)</td>
                    </tr>
                    <tr>
                      <td><b>Co-Prime (सह-अभाज्य)</b></td>
                      <td>HCF of the pair is 1 (ऐसी संख्याएं जिनका महत्तम समापवर्तक 1 हो).</td>
                      <td>(2, 3), (5, 9), (8, 15), (21, 22)</td>
                    </tr>
                    <tr>
                      <td><b>Rational (परिमेय)</b></td>
                      <td>Can be expressed as p/q where q &ne; 0 (p/q रूप की संख्याएं).</td>
                      <td>3/4, -5, 0, 0.333..., 22/7</td>
                    </tr>
                    <tr>
                      <td><b>Irrational (अपरिमेय)</b></td>
                      <td>Non-repeating, non-terminating decimals. <b>&pi; (pi) is Irrational!</b></td>
                      <td>&radic;2, &radic;3, &radic;5, &pi;</td>
                    </tr>
                  </tbody>
                </table>
                <div class="example-box">
                  <div class="example-title">💡 Important Facts for RRB Exams (स्मरण रखें):</div>
                  <ul>
                    <li>Number of Primes from 1 to 50 = <b>15</b> | Primes from 51 to 100 = <b>10</b> | Primes from 1 to 100 = <b>25</b>.</li>
                    <li>Twin Primes are pairs of primes with difference of 2, e.g. (3, 5), (5, 7), (11, 13).</li>
                    <li>Every prime number greater than 3 can be written in the form of <b>6k &plusmn; 1</b> (where k is an integer).</li>
                  </ul>
                </div>
              </div>

              <div class="section">
                <div class="section-title">2. Divisibility Rules (विभाज्यता के नियम)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Divisibility Rules for 3, 9 & 11</div>
                    <ul>
                      <li><b>Divisibility by 3:</b> Sum of digits must be divisible by 3 (अंकों का योग 3 से विभाजित हो).</li>
                      <li><b>Divisibility by 9:</b> Sum of digits must be divisible by 9 (अंकों का योग 9 से विभाजित हो).</li>
                      <li><b>Divisibility by 11:</b> Sum of odd-place digits &minus; Sum of even-place digits = 0 or a multiple of 11 (विषम स्थानों के अंकों का योग और सम स्थानों के अंकों के योग का अंतर 0 या 11 का गुणज हो).</li>
                    </ul>
                  </div>
                  <div class="card">
                    <div class="card-title">Divisibility Rules for 2, 4, 8 & 5</div>
                    <ul>
                      <li><b>Divisibility by 2:</b> Unit digit is even (इकाई का अंक सम हो).</li>
                      <li><b>Divisibility by 4:</b> Last 2 digits are divisible by 4 (अंतिम दो अंक 4 से कटें).</li>
                      <li><b>Divisibility by 8:</b> Last 3 digits are divisible by 8 (अंतिम तीन अंक 8 से कटें).</li>
                      <li><b>Divisibility by 5:</b> Last digit is 0 or 5 (अंतिम अंक 0 या 5 हो).</li>
                    </ul>
                  </div>
                </div>
                <div class="example-box">
                  <div class="example-title">📝 Solved Example (विभाज्यता):</div>
                  <b>Question:</b> If 8-digit number <b>5432a17b</b> is completely divisible by 9 and 5, find the maximum value of <b>(a + b)</b>.<br/>
                  <b>Solution:</b><br/>
                  1. Since the number is divisible by 5, unit digit <b>b</b> can be either <b>0</b> or <b>5</b>. To maximize (a + b), we take <b>b = 5</b>.<br/>
                  2. Divisibility by 9: Sum of digits must be a multiple of 9. Sum = 5 + 4 + 3 + 2 + a + 1 + 7 + 5 = 27 + a.<br/>
                  3. Since 27 is already a multiple of 9, <b>a</b> can be <b>0</b> or <b>9</b>. To maximize, we take <b>a = 9</b>.<br/>
                  4. Maximum value of (a + b) = 9 + 5 = <b>14</b>. <i>(Correct Answer!)</i>
                </div>
              </div>

              <div class="section" style="page-break-before: always;">
                <div class="section-title">3. Unit Digit Cyclicity Concept (इकाई का अंक)</div>
                <table>
                  <thead>
                    <tr>
                      <th>Cyclicity Group</th>
                      <th>Digits</th>
                      <th>Shortcut Rule (शॉर्टकट नियम)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Cyclicity of 1</b></td>
                      <td>0, 1, 5, 6</td>
                      <td>Unit digit remains the same for any positive power (इकाई का अंक समान रहता है चाहे घात कोई भी हो).<br/>e.g., 5<sup>195</sup> &rarr; unit digit is <b>5</b>.</td>
                    </tr>
                    <tr>
                      <td><b>Cyclicity of 2</b></td>
                      <td>4, 9</td>
                      <td>
                        • For <b>4</b>: Power is Odd &rarr; <b>4</b>; Power is Even &rarr; <b>6</b>.<br/>
                        • For <b>9</b>: Power is Odd &rarr; <b>9</b>; Power is Even &rarr; <b>1</b>.
                      </td>
                    </tr>
                    <tr>
                      <td><b>Cyclicity of 4</b></td>
                      <td>2, 3, 7, 8</td>
                      <td>
                        Divide the power by 4 and find the remainder (rem):<br/>
                        • If rem is 1, 2, 3 &rarr; unit digit is <b>(Base Digit)<sup>rem</sup></b>.<br/>
                        • If rem is 0 (fully divisible) &rarr; unit digit is <b>(Base Digit)<sup>4</sup></b>.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="example-box">
                  <div class="example-title">📝 Solved Example (इकाई अंक):</div>
                  <b>Question:</b> Find the unit digit of <b>(762)<sup>97</sup> &times; (353)<sup>40</sup></b>.<br/>
                  <b>Solution:</b><br/>
                  1. (762)<sup>97</sup> &rarr; Base unit digit = 2. Power 97 divided by 4 gives remainder = 1. Unit digit = 2<sup>1</sup> = <b>2</b>.<br/>
                  2. (353)<sup>40</sup> &rarr; Base unit digit = 3. Power 40 is fully divisible by 4 (rem = 0). Unit digit = 3<sup>4</sup> = 81 &rarr; <b>1</b>.<br/>
                  3. Net unit digit = 2 &times; 1 = <b>2</b>. <i>(Correct Answer!)</i>
                </div>
              </div>

              <div class="section">
                <div class="section-title">4. Key Series Sum Formulae (महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>Sum of first n natural numbers (प्रथम n प्राकृतिक संख्याओं का योग):</b>
                    Formula: S = n(n + 1) / 2
                  • <b>Sum of squares of first n natural numbers (प्रथम n प्राकृतिक संख्याओं के वर्गों का योग):</b>
                    Formula: S = n(n + 1)(2n + 1) / 6
                  • <b>Sum of cubes of first n natural numbers (प्रथम n प्राकृतिक संख्याओं के घनों का योग):</b>
                    Formula: S = [n(n + 1) / 2]&sup2;
                  • <b>Sum of first n EVEN numbers (प्रथम n सम संख्याओं का योग):</b>
                    Formula: S = n(n + 1)
                  • <b>Sum of first n ODD numbers (प्रथम n विषम संख्याओं का योग):</b>
                    Formula: S = n&sup2;
                </div>
                <div class="example-box">
                  <div class="example-title">📝 Solved Example (सूत्र आधारित प्रश्न):</div>
                  <b>Question:</b> Find the sum of first 20 odd numbers (1 + 3 + 5 + ... up to 20 terms).<br/>
                  <b>Solution:</b> Here n = 20. Formula: S = n&sup2;.<br/>
                  Sum = 20&sup2; = <b>400</b>. <i>(Correct Answer!)</i>
                </div>
              </div>

              <div class="section">
                <div class="section-title">5. Remainder & Recurring Decimals (शेषफल और आवर्ती दशमलव)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Negative Remainder Concept (ऋणात्मक शेषफल)</div>
                    <p>When numerator is close to denominator, use negative remainder. e.g., <b>(67)<sup>68</sup> / 68</b>.</p>
                    <p>• 67 divided by 68 gives remainder <b>-1</b>.</p>
                    <p>• (-1)<sup>68</sup> = <b>1</b>. So, remainder is <b>1</b>.</p>
                  </div>
                  <div class="card">
                    <div class="card-title">Recurring Decimal to Fraction (दशमलव से भिन्न)</div>
                    <p>• <b>Pure Recurring:</b> 0.4&macr; = 4/9 | 0.47&macr; = 47/99.</p>
                    <p>• <b>Mixed Recurring:</b> 0.35&macr; = (35 &minus; 3) / 90 = 32/90 = 16/45.</p>
                    <p>• <b>General Formula:</b> 0.abc&macr;d = (abcd &minus; abc) / 9000 (denominator has 9 for bar digits, 0 for non-bar digits).</p>
                  </div>
                </div>
              </div>

              <div class="footer">
                <p>Downloaded from Exam Practice Platform. Interactive mock tests and premium study materials.</p>
                <p>&copy; 2026 Exam Practice Platform. For personal education only.</p>
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

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          {/* Decorative Glowing Element */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Header with Title and Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Hash className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-base md:text-lg flex items-center gap-2">
                  Number System Study Notes <Sparkles className="w-4 h-4 text-emerald-350" />
                </h4>
                <p className="text-slate-400 text-[11px] md:text-xs">संख्या पद्धति - RRB Group D Special Bilingual Notes</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownloadNumberSystemPDF}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] self-start sm:self-center font-semibold"
            >
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>

          {/* Interactive Navigation for sub-topics */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setNumSystemTab('classification')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${numSystemTab === 'classification' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              🔢 Classification (वर्गीकरण)
            </button>
            <button 
              onClick={() => setNumSystemTab('divisibility')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${numSystemTab === 'divisibility' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              ⚡ Divisibility & Unit (विभाज्यता)
            </button>
            <button 
              onClick={() => setNumSystemTab('formulas')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${numSystemTab === 'formulas' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📐 Series Formulae (सूत्र)
            </button>
            <button 
              onClick={() => setNumSystemTab('remainder')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${numSystemTab === 'remainder' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              💥 Remainder & Decimals
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="space-y-4 animate-fadeIn">
            {numSystemTab === 'classification' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">🔢 Numbers Classification (संख्या वर्गीकरण):</span>
                  <div className="space-y-2 text-slate-350 text-[12px] leading-relaxed">
                    <p>• <strong>Prime Numbers (अभाज्य संख्या):</strong> Exactly 2 factors (1 & itself). *2 is the only even prime!* (2, 3, 5, 7, 11...)</p>
                    <p>• <strong>Composite Numbers (भाज्य संख्या):</strong> More than 2 factors. (4, 6, 8, 9, 10...) *Smallest composite is 4.*</p>
                    <p>• <strong>Co-Prime (सह-अभाज्य):</strong> HCF of both numbers is 1. Example: (2, 3), (8, 15).</p>
                    <p>• <strong>Rational (परिमेय):</strong> Written as p/q where q &ne; 0. Example: 3/4, 22/7, 0.5.</p>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">💡 Quick RRB Pointers (स्मरण रखें):</span>
                  <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10 space-y-2 text-[12px]">
                    <p>• Primes from <strong>1 to 50:</strong> 15 primes</p>
                    <p>• Primes from <strong>51 to 100:</strong> 10 primes</p>
                    <p>• Primes from <strong>1 to 100:</strong> 25 primes</p>
                    <p className="text-[11px] text-slate-400 font-semibold">• Note: 1 is NEITHER prime NOR composite!</p>
                  </div>
                </div>
              </div>
            )}

            {numSystemTab === 'divisibility' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">⚡ Divisibility rules (विभाज्यता के नियम):</span>
                  <div className="space-y-1.5 text-slate-350 text-[12px]">
                    <p>• <strong>3 & 9:</strong> अंकों का योग 3 या 9 से विभाजित हो।</p>
                    <p>• <strong>4 & 8:</strong> अंतिम 2 अंक (for 4) या अंतिम 3 अंक (for 8) विभाजित हों।</p>
                    <p>• <strong>11:</strong> (विषम स्थानों के अंकों का योग) - (सम स्थानों के अंकों का योग) = 0 या 11 का गुणज हो।</p>
                    <p>• <strong>Composite (72, 88):</strong> सह-अभाज्य गुणनखंडों (co-prime factors) में तोड़ें। 72 &rarr; 8 × 9. 88 &rarr; 8 × 11.</p>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">🎯 Unit Digit Cyclicity (इकाई का अंक):</span>
                  <div className="space-y-1.5 text-slate-350 text-[12px]">
                    <p>• <strong>0, 1, 5, 6:</strong> हमेशा समान रहते हैं (Cyclicity = 1).</p>
                    <p>• <strong>4 & 9:</strong> 4<sup>odd</sup> = 4, 4<sup>even</sup> = 6; 9<sup>odd</sup> = 9, 9<sup>even</sup> = 1.</p>
                    <p>• <strong>2, 3, 7, 8:</strong> घात (power) को 4 से भाग देकर शेषफल निकालें।</p>
                    <p className="p-1.5 bg-slate-950/60 rounded font-mono text-[11px] text-emerald-400">
                      e.g., (274)<sup>135</sup> (odd power) &rarr; Unit digit is 4.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {numSystemTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">📐 Sum of Series Formulae (श्रेणियों के योग):</span>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-[12px] text-slate-350">
                    <p>• Sum of first N natural numbers:<br/><b className="text-slate-100">S = N(N + 1) / 2</b></p>
                    <p>• Sum of squares of first N natural numbers:<br/><b className="text-slate-100">S = N(N + 1)(2N + 1) / 6</b></p>
                    <p>• Sum of cubes of first N natural numbers:<br/><b className="text-slate-100">S = [N(N + 1) / 2]²</b></p>
                  </div>
                  <div className="space-y-2 text-[12px] text-slate-350">
                    <p>• Sum of first N EVEN numbers:<br/><b className="text-slate-100">S = N(N + 1)</b></p>
                    <p>• Sum of first N ODD numbers:<br/><b className="text-slate-100">S = N²</b></p>
                    <p className="p-2 bg-emerald-500/5 rounded border border-emerald-500/10 text-[11px] text-slate-400">
                      💡 Solved: Sum of 1² + 2² + ... + 10² = 10(11)(21)/6 = <b>385</b>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {numSystemTab === 'remainder' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">💥 Remainder Tricks (शेषफल प्रमेय):</span>
                  <div className="space-y-1 text-slate-350 text-[12px]">
                    <p>• <strong>Negative Remainder:</strong> e.g., (67)<sup>67</sup> / 68.</p>
                    <p>• 67 divided by 68 gives remainder <b>-1</b>.</p>
                    <p>• (-1)<sup>67</sup> = -1. Actual remainder = 68 - 1 = <b>67</b>.</p>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">🏷️ Recurring Decimal to Fraction:</span>
                  <div className="space-y-1 text-slate-350 text-[12px]">
                    <p>• <strong>Pure:</strong> 0.p&macr; = p/9 | 0.pq&macr; = pq/99.</p>
                    <p>• <strong>Mixed:</strong> 0.pq&macr; = (pq - p)/90.</p>
                    <p className="p-2 bg-slate-950/60 rounded font-mono text-[11px] text-emerald-400">
                      e.g., 0.35&macr; = (35 - 3)/90 = 32/90 = 16/45.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Topic 1/17 RRB Maths</span>
            <span className="text-emerald-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadNumberSystemPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1b. Exclusive Simplification (सरलीकरण)
    if (topicLower.includes("simplification") || topicLower.includes("सरलीकरण")) {
      const handleDownloadSimplificationPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          alert("Please allow popups to download/print the PDF.");
          return;
        }
        const content = `
          <html>
            <head>
              <title>Simplification - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body {
                  font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif;
                  color: #1e293b;
                  line-height: 1.6;
                  margin: 0;
                  padding: 35px;
                  background-color: #ffffff;
                }
                .header {
                  text-align: center;
                  border-bottom: 3px double #0284c7;
                  padding-bottom: 15px;
                  margin-bottom: 25px;
                }
                .header h1 {
                  color: #0f172a;
                  margin: 0;
                  font-size: 26px;
                  font-weight: 700;
                }
                .header h2 {
                  color: #0284c7;
                  margin: 5px 0 0 0;
                  font-size: 20px;
                  font-weight: 600;
                }
                .header p {
                  margin: 8px 0 0 0;
                  color: #4b5563;
                  font-size: 13px;
                  font-weight: 500;
                }
                .badge {
                  background-color: #f0f9ff;
                  color: #0369a1;
                  padding: 4px 12px;
                  border-radius: 12px;
                  font-size: 11px;
                  font-weight: 600;
                  border: 1px solid #bae6fd;
                  display: inline-block;
                  margin-bottom: 8px;
                }
                .section {
                  margin-bottom: 25px;
                  page-break-inside: avoid;
                }
                .section-title {
                  color: #0369a1;
                  font-size: 16px;
                  font-weight: 600;
                  border-left: 4px solid #0284c7;
                  padding-left: 10px;
                  margin-bottom: 12px;
                  background-color: #f0f9ff;
                  padding-top: 6px;
                  padding-bottom: 6px;
                }
                .grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
                }
                @media (max-width: 600px) {
                  .grid {
                    grid-template-columns: 1fr;
                  }
                }
                .card {
                  border: 1px solid #e2e8f0;
                  border-radius: 8px;
                  padding: 12px;
                  background-color: #fafafa;
                }
                .card-title {
                  font-weight: 600;
                  color: #0f172a;
                  font-size: 13px;
                  margin-bottom: 6px;
                  border-bottom: 1px solid #e2e8f0;
                  padding-bottom: 4px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 15px;
                }
                th, td {
                  border: 1px solid #cbd5e1;
                  padding: 8px 10px;
                  text-align: left;
                  font-size: 12px;
                }
                th {
                  background-color: #f1f5f9;
                  color: #334155;
                  font-weight: 600;
                }
                .formula-box {
                  background-color: #f8fafc;
                  border-left: 3px solid #0284c7;
                  padding: 10px;
                  margin: 10px 0;
                  font-family: monospace;
                  font-size: 12px;
                  border-radius: 0 6px 6px 0;
                  white-space: pre-line;
                }
                .example-box {
                  background-color: #fffbeb;
                  border: 1px dashed #d97706;
                  padding: 12px;
                  margin: 10px 0;
                  border-radius: 6px;
                  font-size: 12px;
                }
                .example-title {
                  font-weight: 600;
                  color: #b45309;
                  margin-bottom: 4px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  font-size: 10px;
                  color: #94a3b8;
                  border-top: 1px solid #e2e8f0;
                  padding-top: 10px;
                }
                ul {
                  margin: 5px 0;
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 4px;
                  font-size: 12px;
                }
                strong {
                  color: #0f172a;
                }
                @media print {
                  body {
                    padding: 0;
                  }
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Simplification</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: सरलीकरण</h2>
                <p>Designed for Excellence in Railway Exams | सर्वोत्तम VBODMAS ट्रिक्स व सूत्र संकलन</p>
              </div>

              <div class="section">
                <div class="section-title">1. VBODMAS Rule (VBODMAS का नियम)</div>
                <p style="font-size: 12px; color: #475569; margin: 0 0 10px 0;">
                  सरलीकरण के किसी भी प्रश्न को हल करने के लिए VBODMAS नियम का पालन करना अनिवार्य है।
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Letter</th>
                      <th>Meaning (मतलब)</th>
                      <th>Mathematical Sign / Operation (गणितीय चिन्ह / क्रिया)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>V</b></td>
                      <td>Vinculum (बार कोष्ठक / रेखा कोष्ठक)</td>
                      <td><span style="text-decoration: overline;">x - y</span> (सबसे पहले हल करें)</td>
                    </tr>
                    <tr>
                      <td><b>B</b></td>
                      <td>Brackets (कोष्ठक)</td>
                      <td>( ), { }, [ ] (इसी क्रम में हल करें)</td>
                    </tr>
                    <tr>
                      <td><b>O</b></td>
                      <td>Of (का)</td>
                      <td>&times; (गुणा, लेकिन भाग से पहले)</td>
                    </tr>
                    <tr>
                      <td><b>D</b></td>
                      <td>Division (भाग)</td>
                      <td>&divide;</td>
                    </tr>
                    <tr>
                      <td><b>M</b></td>
                      <td>Multiplication (गुणा)</td>
                      <td>&times;</td>
                    </tr>
                    <tr>
                      <td><b>A</b></td>
                      <td>Addition (जोड़)</td>
                      <td>+</td>
                    </tr>
                    <tr>
                      <td><b>S</b></td>
                      <td>Subtraction (घटाव)</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="section">
                <div class="section-title">2. Key Algebraic Formulas (महत्वपूर्ण बीजगणितीय सूत्र)</div>
                <div class="formula-box">
                  • <b>(a + b)&sup2; = a&sup2; + 2ab + b&sup2;</b>
                  • <b>(a &minus; b)&sup2; = a&sup2; &minus; 2ab + b&sup2;</b>
                  • <b>a&sup2; &minus; b&sup2; = (a &minus; b)(a + b)</b>
                  • <b>a&sup3; + b&sup3; = (a + b)(a&sup2; &minus; ab + b&sup2;) &rArr; (a&sup3; + b&sup3;) / (a&sup2; &minus; ab + b&sup2;) = a + b</b>
                  • <b>a&sup3; &minus; b&sup3; = (a &minus; b)(a&sup2; + ab + b&sup2;) &rArr; (a&sup3; &minus; b&sup3;) / (a&sup2; + ab + b&sup2;) = a &minus; b</b>
                </div>
              </div>

              <div class="section" style="page-break-before: always;">
                <div class="section-title">3. Time-Saving Shortcuts & Tricks (शॉर्ट ट्रिक्स)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Trick #1: Mixed Fractions (मिश्रित भिन्न)</div>
                    <p>पूर्णांकों (integers) को अलग और भिन्नों को अलग जोड़ें/घटाएं।</p>
                    <div class="example-box" style="margin: 5px 0 0 0; background: #ffffff;">
                      <b>Example:</b> 5&frac12; + 3&frac14; = (5 + 3) + (&frac12; + &frac14;) = 8 + &frac34; = <b>8&frac34;</b>.
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-title">Trick #2: Digital Sum (अंकों का योग)</div>
                    <p>गुणा या जोड़ में विकल्पों को जल्दी एलिमिनेट करने के लिए प्रयोग करें (संख्या में 9 को 0 या 9 मानें)।</p>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">4. Solved Examples (हल सहित उदाहरण)</div>
                
                <div class="example-box">
                  <div class="example-title">📝 Example 1: VBODMAS Based</div>
                  <b>Question:</b> Find the value of: <b>25 &minus; [20 &minus; {10 &minus; (7 &minus; <span style="text-decoration: overline;">5 &minus; 3</span>)}]</b>.<br/>
                  <b>Solution:</b><br/>
                  1. Solve bar first: 5 &minus; 3 = 2.<br/>
                  2. Small bracket ( ): 7 &minus; 2 = 5.<br/>
                  3. Curly bracket { }: 10 &minus; 5 = 5.<br/>
                  4. Square bracket [ ]: 20 &minus; 5 = 15.<br/>
                  5. Final Step: 25 &minus; 15 = <b>10</b>.<br/>
                  <b>Answer:</b> <b>10</b>
                </div>

                <div class="example-box">
                  <div class="example-title">📝 Example 2: Of (का) and Division</div>
                  <b>Question:</b> Find the value of: <b>60 &divide; 5 का 2 &times; (1 + 1)</b>.<br/>
                  <b>Solution:</b><br/>
                  1. Solve bracket ( ): (1 + 1) = 2. Expression: 60 &divide; 5 का 2 &times; 2.<br/>
                  2. Solve 'का' (Of): 5 &times; 2 = 10. Expression: 60 &divide; 10 &times; 2.<br/>
                  3. Solve Division (&divide;): 60 &divide; 10 = 6. Expression: 6 &times; 2.<br/>
                  4. Multiplication: 6 &times; 2 = <b>12</b>.<br/>
                  <b>Answer:</b> <b>12</b>
                </div>

                <div class="example-box">
                  <div class="example-title">📝 Example 3: Algebraic Formula Pattern</div>
                  <b>Question:</b> Find the value of: <br/>
                  <div style="text-align: center; margin: 8px 0;">
                    <b>(0.73 &times; 0.73 &times; 0.73 + 0.27 &times; 0.27 &times; 0.27) &divide; (0.73 &times; 0.73 &minus; 0.73 &times; 0.27 + 0.27 &times; 0.27)</b>
                  </div>
                  <b>Solution:</b><br/>
                  1. Let a = 0.73, b = 0.27. The expression is: (a&sup3; + b&sup3;) / (a&sup2; &minus; ab + b&sup2;).<br/>
                  2. We know this simplifies to (a + b).<br/>
                  3. Sum = 0.73 + 0.27 = <b>1.00</b> = <b>1</b>.<br/>
                  <b>Answer:</b> <b>1</b>
                </div>
              </div>

              <div class="footer">
                <p>Downloaded from Exam Practice Platform. Interactive mock tests and premium study materials.</p>
                <p>&copy; 2026 Exam Practice Platform. For personal education only.</p>
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

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          {/* Decorative Glowing Element */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Header with Title and Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Calculator className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-base md:text-lg flex items-center gap-2">
                  Simplification Study Notes <Sparkles className="w-4 h-4 text-emerald-350" />
                </h4>
                <p className="text-slate-400 text-[11px] md:text-xs">सरलीकरण - RRB Group D Special Bilingual Notes</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownloadSimplificationPDF}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] self-start sm:self-center font-semibold"
            >
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>

          {/* Interactive Navigation for sub-topics */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setSimplificationTab('vbodmas')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${simplificationTab === 'vbodmas' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📊 VBODMAS Rule (नियम)
            </button>
            <button 
              onClick={() => setSimplificationTab('formulas')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${simplificationTab === 'formulas' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📐 Formulas (बीजगणितीय सूत्र)
            </button>
            <button 
              onClick={() => setSimplificationTab('tricks')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${simplificationTab === 'tricks' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              ⚡ Time-Saving Tricks (शॉर्ट्स)
            </button>
            <button 
              onClick={() => setSimplificationTab('examples')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${simplificationTab === 'examples' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📝 Solved Examples (उदाहरण)
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="space-y-4 animate-fadeIn">
            {simplificationTab === 'vbodmas' && (
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">📊 VBODMAS Rule (The Golden Rule):</span>
                  <p className="text-slate-350 text-[12px] leading-relaxed">
                    सरलीकरण के किसी भी प्रश्न को हल करने के लिए <strong>VBODMAS</strong> नियम का पालन करना अनिवार्य है।
                  </p>
                  
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full text-[11px] md:text-[12px] text-slate-300 border-collapse border border-white/5">
                      <thead>
                        <tr className="bg-slate-950/60 text-slate-200">
                          <th className="border border-white/5 p-2 text-left">Letter</th>
                          <th className="border border-white/5 p-2 text-left">Meaning (मतलब)</th>
                          <th className="border border-white/5 p-2 text-left">Sign / Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">V</td>
                          <td className="border border-white/5 p-2">Vinculum (बार ब्रैकेट)</td>
                          <td className="border border-white/5 p-2 font-mono">x - y (सबसे पहले)</td>
                        </tr>
                        <tr className="bg-slate-900/30">
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">B</td>
                          <td className="border border-white/5 p-2">Brackets (कोष्ठक)</td>
                          <td className="border border-white/5 p-2 font-mono">( ), &#123; &#125;, [ ]</td>
                        </tr>
                        <tr>
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">O</td>
                          <td className="border border-white/5 p-2">Of (का)</td>
                          <td className="border border-white/5 p-2 font-mono">&times; (भाग से पहले)</td>
                        </tr>
                        <tr className="bg-slate-900/30">
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">D</td>
                          <td className="border border-white/5 p-2">Division (भाग)</td>
                          <td className="border border-white/5 p-2 font-mono">&divide;</td>
                        </tr>
                        <tr>
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">M</td>
                          <td className="border border-white/5 p-2">Multiplication (गुणा)</td>
                          <td className="border border-white/5 p-2 font-mono">&times;</td>
                        </tr>
                        <tr className="bg-slate-900/30">
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">A</td>
                          <td className="border border-white/5 p-2">Addition (जोड़)</td>
                          <td className="border border-white/5 p-2 font-mono">+</td>
                        </tr>
                        <tr>
                          <td className="border border-white/5 p-2 font-bold text-emerald-400">S</td>
                          <td className="border border-white/5 p-2">Subtraction (घटाव)</td>
                          <td className="border border-white/5 p-2 font-mono">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {simplificationTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">📐 Algebraic Formulas (बीजगणितीय सूत्र):</span>
                <p className="text-slate-355 text-[12px]">कठिन दिखने वाले कई प्रश्न इन सूत्रों पर आधारित होते हैं। इन्हें अच्छी तरह याद रखें:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-[12px] text-slate-350">
                    <p>• <b>(a + b)² = a² + 2ab + b²</b></p>
                    <p>• <b>(a - b)² = a² - 2ab + b²</b></p>
                    <p>• <b>a² - b² = (a - b)(a + b)</b></p>
                  </div>
                  <div className="space-y-2 text-[12px] text-slate-350">
                    <p>• <b>a³ + b³ = (a + b)(a² - ab + b²)</b> <br/> <span className="text-slate-400 font-semibold">&rArr; (a³ + b³) / (a² - ab + b²) = a + b</span></p>
                    <p>• <b>a³ - b³ = (a - b)(a² + ab + b²)</b> <br/> <span className="text-slate-400 font-semibold">&rArr; (a³ - b³) / (a² + ab + b²) = a - b</span></p>
                  </div>
                </div>
              </div>
            )}

            {simplificationTab === 'tricks' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">⚡ Trick #1: Mixed Fractions (मिश्रित भिन्न):</span>
                  <p className="text-slate-350 text-[12px]">पूर्णांकों (integers) को अलग और भिन्नों को अलग जोड़ें या घटाएं।</p>
                  <p className="p-2 bg-slate-950/60 rounded font-mono text-[11px] text-emerald-400">
                    e.g., 5½ + 3¼ = (5 + 3) + (½ + ¼) = 8 + ¾ = <b>8¾</b>
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-355 text-[13px] block border-b border-white/5 pb-1">⚡ Trick #2: Digital Sum (डिजिटल सम):</span>
                  <p className="text-slate-350 text-[12px]">लंबे गुणा या जोड़ में विकल्पों को जल्दी एलिमिनेट करने के लिए अंकों के योग का प्रयोग करें (नौ को 0 या 9 मानें)।</p>
                </div>
              </div>
            )}

            {simplificationTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-350 text-[12px] block">📝 प्रश्न 1: VBODMAS पर आधारित</span>
                  <p className="text-slate-300 font-semibold font-mono text-[12px]">25 - [20 - &#123;10 - (7 - 5 - 3)&#125;] का मान?</p>
                  <div className="text-[11px] text-slate-400 space-y-0.5 leading-relaxed bg-slate-950/40 p-2 rounded">
                    <p>• बार हल करें: 5 - 3 = 2</p>
                    <p>• छोटा कोष्ठक: 7 - 2 = 5</p>
                    <p>• मझला कोष्ठक: 10 - 5 = 5</p>
                    <p>• बड़ा कोष्ठक: 20 - 5 = 15</p>
                    <p>• अंतिम मान: 25 - 15 = <b>10</b></p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-350 text-[12px] block">📝 प्रश्न 2: 'का' (Of) और भाग</span>
                  <p className="text-slate-300 font-semibold font-mono text-[12px]">60 &divide; 5 का 2 &times; (1 + 1) का मान?</p>
                  <div className="text-[11px] text-slate-400 space-y-0.5 leading-relaxed bg-slate-950/40 p-2 rounded">
                    <p>• कोष्ठक ( ): (1 + 1) = 2 &rarr; 60 &divide; 5 का 2 &times; 2</p>
                    <p>• 'का' (Of) पहले: 5 का 2 = 10 &rarr; 60 &divide; 10 &times; 2</p>
                    <p>• भाग (&divide;): 60 &divide; 10 = 6 &rarr; 6 &times; 2</p>
                    <p>• गुणा (&times;): 6 &times; 2 = <b>12</b></p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-350 text-[12px] block">📝 प्रश्न 3: सूत्र आधारित (RRB पसंदीदा पैटर्न)</span>
                  <p className="text-slate-300 font-semibold font-mono text-[11px]">
                    (0.73 &times; 0.73 &times; 0.73 + 0.27 &times; 0.27 &times; 0.27) &divide; (0.73 &times; 0.73 - 0.73 &times; 0.27 + 0.27 &times; 0.27) का मान?
                  </p>
                  <div className="text-[11px] text-slate-400 space-y-0.5 leading-relaxed bg-slate-950/40 p-2 rounded">
                    <p>• यदि a = 0.73, b = 0.27, तो समीकरण रूप: (a³ + b³) &divide; (a² - ab + b²)</p>
                    <p>• हम जानते हैं इसका मान हमेशा (a + b) होता है।</p>
                    <p>• उत्तर: 0.73 + 0.27 = 1.00 = <b>1</b></p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Topic 2/17 RRB Maths</span>
            <span className="text-emerald-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadSimplificationPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1c. Exclusive HCF and LCM (म.स. और ल.स.)
    if (topicLower.includes("hcf") || topicLower.includes("lcm") || topicLower.includes("समापवर्त्य")) {
      const handleDownloadHcfLcmPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          alert("Please allow popups to download/print the PDF.");
          return;
        }
        const content = `
          <html>
            <head>
              <title>HCF & LCM - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body {
                  font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif;
                  color: #1e293b;
                  line-height: 1.6;
                  margin: 0;
                  padding: 35px;
                  background-color: #ffffff;
                }
                .header {
                  text-align: center;
                  border-bottom: 3px double #f59e0b;
                  padding-bottom: 15px;
                  margin-bottom: 25px;
                }
                .header h1 {
                  color: #0f172a;
                  margin: 0;
                  font-size: 26px;
                  font-weight: 700;
                }
                .header h2 {
                  color: #d97706;
                  margin: 5px 0 0 0;
                  font-size: 20px;
                  font-weight: 600;
                }
                .header p {
                  margin: 8px 0 0 0;
                  color: #4b5563;
                  font-size: 13px;
                  font-weight: 500;
                }
                .badge {
                  background-color: #fffbeb;
                  color: #b45309;
                  padding: 4px 12px;
                  border-radius: 12px;
                  font-size: 11px;
                  font-weight: 600;
                  border: 1px solid #fef3c7;
                  display: inline-block;
                  margin-bottom: 8px;
                }
                .section {
                  margin-bottom: 25px;
                  page-break-inside: avoid;
                }
                .section-title {
                  color: #b45309;
                  font-size: 16px;
                  font-weight: 600;
                  border-left: 4px solid #f59e0b;
                  padding-left: 10px;
                  margin-bottom: 12px;
                  background-color: #fffbeb;
                  padding-top: 6px;
                  padding-bottom: 6px;
                }
                .grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
                }
                @media (max-width: 600px) {
                  .grid {
                    grid-template-columns: 1fr;
                  }
                }
                .card {
                  border: 1px solid #e2e8f0;
                  border-radius: 8px;
                  padding: 12px;
                  background-color: #fafafa;
                }
                .card-title {
                  font-weight: 600;
                  color: #0f172a;
                  font-size: 13px;
                  margin-bottom: 6px;
                  border-bottom: 1px solid #e2e8f0;
                  padding-bottom: 4px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 15px;
                }
                th, td {
                  border: 1px solid #cbd5e1;
                  padding: 8px 10px;
                  text-align: left;
                  font-size: 12px;
                }
                th {
                  background-color: #f1f5f9;
                  color: #334155;
                  font-weight: 600;
                }
                .formula-box {
                  background-color: #f8fafc;
                  border-left: 3px solid #f59e0b;
                  padding: 10px;
                  margin: 10px 0;
                  font-family: monospace;
                  font-size: 12px;
                  border-radius: 0 6px 6px 0;
                  white-space: pre-line;
                }
                .example-box {
                  background-color: #fffbeb;
                  border: 1px dashed #d97706;
                  padding: 12px;
                  margin: 10px 0;
                  border-radius: 6px;
                  font-size: 12px;
                }
                .example-title {
                  font-weight: 600;
                  color: #b45309;
                  margin-bottom: 4px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  font-size: 10px;
                  color: #94a3b8;
                  border-top: 1px solid #e2e8f0;
                  padding-top: 10px;
                }
                ul {
                  margin: 5px 0;
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 4px;
                  font-size: 12px;
                }
                strong {
                  color: #0f172a;
                }
                @media print {
                  body {
                    padding: 0;
                  }
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: HCF & LCM</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: महत्तम समापवर्तक व लघुत्तम समापवर्त्य</h2>
                <p>Designed for Excellence in Railway Exams | सर्वोत्तम म.स. व ल.स. ट्रिक्स व सूत्र संकलन</p>
              </div>

              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी परिभाषाएं)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">LCM (लघुत्तम समापवर्त्य - ल.स.)</div>
                    <p>वह छोटी से छोटी संख्या जो दी गई सभी संख्याओं से पूरी तरह विभाजित (divisible) हो जाए।</p>
                    <p><b>Example:</b> 4, 6 and 8 का LCM = <b>24</b> (24 वह सबसे छोटी संख्या है जो 4, 6 और 8 तीनों से कटती है)।</p>
                  </div>
                  <div class="card">
                    <div class="card-title">HCF (महत्तम समापवर्तक - म.स.)</div>
                    <p>वह बड़ी से बड़ी संख्या जो दी गई सभी संख्याओं को पूरी तरह विभाजित कर दे।</p>
                    <p><b>Example:</b> 12, 18 and 24 का HCF = <b>6</b> (6 वह सबसे बड़ी संख्या है जो 12, 18 और 24 तीनों को विभाजित करती है)।</p>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">2. Golden Formulas (सबसे महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>Rule 1: Product of Two Numbers (दो संख्याओं का नियम)</b>
                    पहली संख्या &times; दूसरी संख्या = HCF &times; LCM
                  
                  • <b>Rule 2: LCM & HCF of Fractions (भिन्नों का ल.स. और म.स.)</b>
                    भिन्नों का LCM = अंशों (Numerators) का LCM / हरों (Denominators) का HCF
                    भिन्नों का HCF = अंशों (Numerators) का HCF / हरों (Denominators) का LCM
                </div>
              </div>

              <div class="section" style="page-break-before: always;">
                <div class="section-title">3. RRB Group D Special Patterns & Tricks (स्पेशल ट्रिक्स)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Pattern 1: Bells & Traffic Lights (घंटियों वाले प्रश्न)</div>
                    <p>जब घंटियां या ट्रैफिक लाइटें अलग-अलग अंतरालों पर बदलती हैं और दोबारा एक साथ होने का समय पूछा जाए, तो <b>हमेशा LCM निकालें</b>।</p>
                  </div>
                  <div class="card">
                    <div class="card-title">Pattern 2: Remainder Based Problems (शेषफल वाले प्रश्न)</div>
                    <p>• <b>Smallest number</b> which divided by x, y, z leaves remainder r in each case:<br/>
                       <b>Required Number = (LCM of x, y, z) + r</b>
                    </p>
                    <p>• <b>Largest number</b> which divides x, y, z leaving remainder r in each case:<br/>
                       <b>Required Number = HCF of (x-r), (y-r), (z-r)</b>
                    </p>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">4. Solved Examples (हल सहित उदाहरण)</div>
                
                <div class="example-box">
                  <div class="example-title">📝 Example 1: Product of Two Numbers Rule</div>
                  <b>Question:</b> दो संख्याओं का म.स. (HCF) 11 है और उनका ल.स. (LCM) 693 है। यदि उनमें से एक संख्या 77 है, तो दूसरी संख्या ज्ञात कीजिए।<br/>
                  <b>Solution:</b><br/>
                  1. Formula: पहली संख्या &times; दूसरी संख्या = HCF &times; LCM<br/>
                  2. 77 &times; दूसरी संख्या = 11 &times; 693<br/>
                  3. दूसरी संख्या = (11 &times; 693) / 77 = 693 / 7 = <b>99</b>.<br/>
                  <b>Answer:</b> <b>99</b>
                </div>

                <div class="example-box">
                  <div class="example-title">📝 Example 2: Bells Interval (घंटियों वाला प्रश्न)</div>
                  <b>Question:</b> 4 घंटियाँ क्रमशः 6, 8, 12 और 18 सेकंड के अंतराल पर बजती हैं। यदि वे एक साथ 12:00 बजे बजना शुरू करती हैं, तो वे अगली बार एक साथ कब बजेंगी?<br/>
                  <b>Solution:</b><br/>
                  1. Find LCM of 6, 8, 12, 18:<br/>
                     &bull; 6 = 2 &times; 3<br/>
                     &bull; 8 = 2<sup>3</sup><br/>
                     &bull; 12 = 2<sup>2</sup> &times; 3<br/>
                     &bull; 18 = 2 &times; 3<sup>2</sup><br/>
                     &bull; LCM = 2<sup>3</sup> &times; 3<sup>2</sup> = 8 &times; 9 = 72 seconds.<br/>
                  2. Convert to minutes: 72 seconds = 1 minute 12 seconds.<br/>
                  3. They will ring together again at <b>12:01:12 AM/PM</b>.<br/>
                  <b>Answer:</b> <b>12:01:12</b>
                </div>

                <div class="example-box">
                  <div class="example-title">📝 Example 3: Fractions LCM (भिन्नों का ल.स.)</div>
                  <b>Question:</b> 2/3, 4/9, 5/6 का लघुत्तम समापवर्त्य (LCM) ज्ञात कीजिए।<br/>
                  <b>Solution:</b><br/>
                  1. Formula: भिन्नों का LCM = (अंशों का LCM) / (हरों का HCF)<br/>
                  2. Numerators (2, 4, 5) का LCM = 20.<br/>
                  3. Denominators (3, 9, 6) का HCF = 3.<br/>
                  4. LCM = <b>20/3</b> or <b>6 &frac23;</b>.<br/>
                  <b>Answer:</b> <b>20/3</b>
                </div>
              </div>

              <div class="footer">
                <p>Downloaded from Exam Practice Platform. Interactive mock tests and premium study materials.</p>
                <p>&copy; 2026 Exam Practice Platform. For personal education only.</p>
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

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          {/* Decorative Glowing Element */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Header with Title and Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Calculator className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-base md:text-lg flex items-center gap-2">
                  HCF & LCM Study Notes <Sparkles className="w-4 h-4 text-emerald-350" />
                </h4>
                <p className="text-slate-400 text-[11px] md:text-xs">लघुत्तम समापवर्त्य और महत्तम समापवर्तक - RRB Group D Special Bilingual Notes</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownloadHcfLcmPDF}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] self-start sm:self-center font-semibold"
            >
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>

          {/* Interactive Navigation for sub-topics */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setHcfLcmTab('basics')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${hcfLcmTab === 'basics' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📊 Basic Concepts (परिभाषाएं)
            </button>
            <button 
              onClick={() => setHcfLcmTab('formulas')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${hcfLcmTab === 'formulas' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📐 Golden Formulas (महत्वपूर्ण सूत्र)
            </button>
            <button 
              onClick={() => setHcfLcmTab('tricks')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${hcfLcmTab === 'tricks' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              ⚡ Special Tricks (शॉर्ट ट्रिक्स)
            </button>
            <button 
              onClick={() => setHcfLcmTab('examples')}
              className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${hcfLcmTab === 'examples' ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
            >
              📝 Solved Examples (उदाहरण)
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="space-y-4 animate-fadeIn">
            {hcfLcmTab === 'basics' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">🧮 LCM (लघुत्तम समापवर्त्य):</span>
                  <p className="text-slate-350 text-[12px] leading-relaxed">
                    वह छोटी से छोटी संख्या जो दी गई सभी संख्याओं से पूरी तरह विभाजित (divisible) हो जाए।
                  </p>
                  <p className="p-2.5 bg-slate-950/60 rounded font-mono text-[11.5px] text-emerald-400">
                    e.g., 4, 6 और 8 का LCM = <b>24</b> (24 वह छोटी संख्या है जो 4, 6 और 8 तीनों से विभाजित होती है)।
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-355 text-[13px] block border-b border-white/5 pb-1">🎯 HCF (महत्तम समापवर्तक):</span>
                  <p className="text-slate-350 text-[12px] leading-relaxed">
                    वह बड़ी से बड़ी संख्या जो दी गई सभी संख्याओं को पूरी तरह विभाजित कर दे।
                  </p>
                  <p className="p-2.5 bg-slate-950/60 rounded font-mono text-[11.5px] text-emerald-400">
                    e.g., 12, 18 और 24 का HCF = <b>6</b> (6 वह बड़ी संख्या है जो 12, 18 और 24 तीनों को विभाजित करती है)।
                  </p>
                </div>
              </div>
            )}

            {hcfLcmTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">📐 Golden Formulas (वेबसाइट स्पेशल):</span>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-emerald-500/5 rounded border border-emerald-500/10 space-y-1.5">
                    <span className="font-bold text-emerald-400 text-[12px] block">नियम 1: दो संख्याओं का गुणनफल</span>
                    <p className="text-[12px] text-slate-100 font-mono font-semibold">
                      पहली संख्या &times; दूसरी संख्या = HCF &times; LCM
                    </p>
                    <p className="text-[10.5px] text-slate-400">रेलवे परीक्षा के 80% प्रश्न इसी सूत्र पर बनते हैं!</p>
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded border border-emerald-500/10 space-y-1.5">
                    <span className="font-bold text-emerald-400 text-[12px] block">नियम 2: भिन्नों (Fractions) का LCM/HCF</span>
                    <p className="text-[11px] text-slate-100 font-semibold">
                      • भिन्नों का LCM = अंशों का LCM / हरों का HCF
                    </p>
                    <p className="text-[11px] text-slate-100 font-semibold">
                      • भिन्नों का HCF = अंशों का HCF / हरों का LCM
                    </p>
                  </div>
                </div>
              </div>
            )}

            {hcfLcmTab === 'tricks' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">⏰ पैटर्न 1: ट्रैफिक लाइटें और घंटियां</span>
                  <p className="text-slate-355 text-[12px] leading-relaxed">
                    जब घंटियां क्रमशः 10, 15 और 20 सेकंड के अंतराल पर बजती हैं, तो दोबारा एक साथ बजने का समय निकालने के लिए <strong>हमेशा LCM</strong> निकालें।
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-bold text-emerald-350 text-[13px] block border-b border-white/5 pb-1">⚡ पैटर्न 2: शेषफल (Remainder) आधारित</span>
                  <div className="space-y-1.5 text-[11.5px] text-slate-350">
                    <p>• <strong>लघुत्तम संख्या:</strong> जिसे x, y, z से भाग देने पर r शेष बचे:<br/>
                       <b className="text-slate-200">अभीष्ट संख्या = (LCM of x, y, z) + r</b>
                    </p>
                    <p>• <strong>महत्तम संख्या:</strong> जिससे x, y, z को भाग देने पर r शेष बचे:<br/>
                       <b className="text-slate-200">अभीष्ट संख्या = HCF of (x-r), (y-r), (z-r)</b>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {hcfLcmTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-350 text-[12px] block">📝 प्रश्न 1: दो संख्याओं के नियम पर</span>
                  <p className="text-slate-300 font-semibold text-[11.5px]">
                    दो संख्याओं का HCF = 11, LCM = 693 है। यदि एक संख्या 77 है, तो दूसरी ज्ञात करें।
                  </p>
                  <div className="text-[11px] text-slate-400 space-y-0.5 bg-slate-950/40 p-2 rounded">
                    <p>• सूत्र: पहली संख्या &times; दूसरी संख्या = HCF &times; LCM</p>
                    <p>• 77 &times; दूसरी संख्या = 11 &times; 693</p>
                    <p>• दूसरी संख्या = (11 &times; 693) / 77 = 693 / 7 = <b>99</b></p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-350 text-[12px] block">📝 प्रश्न 2: घंटियों वाला (RRB पसंदीदा)</span>
                  <p className="text-slate-300 font-semibold text-[11.5px]">
                    4 घंटियाँ क्रमशः 6, 8, 12, 18 सेकंड के अंतराल पर बजती हैं। 12:00 बजे के बाद दोबारा कब बजेंगी?
                  </p>
                  <div className="text-[11px] text-slate-400 space-y-0.5 bg-slate-950/40 p-2 rounded">
                    <p>• 6, 8, 12, 18 का LCM = <b>72 सेकंड</b></p>
                    <p>• 72 सेकंड = 1 मिनट 12 सेकंड</p>
                    <p>• अगली बार एक साथ: <b>12:01:12 AM/PM</b> पर</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-350 text-[12px] block">📝 प्रश्न 3: भिन्नों का LCM</span>
                  <p className="text-slate-300 font-semibold font-mono text-[12px]">2/3, 4/9, 5/6 का LCM क्या होगा?</p>
                  <div className="text-[11px] text-slate-400 space-y-0.5 bg-slate-950/40 p-2 rounded">
                    <p>• सूत्र: अंशों (2, 4, 5) का LCM / हरों (3, 9, 6) का HCF</p>
                    <p>• अंशों का LCM = 20 | हरों का HCF = 3</p>
                    <p>• उत्तर = <b>20/3</b> या <b>6⅔</b></p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Topic 3/17 RRB Maths</span>
            <span className="text-emerald-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadHcfLcmPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1d. Decimal Fractions, Square/Cube Roots
    if (
      topicLower.includes("fraction") || 
      topicLower.includes("root") ||
      topicLower.includes("भिन्न")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-350">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Hash className="w-5 h-5" /> Decimals, Fractions & Roots Notes (दशमलव, भिन्न व वर्गमूल)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🔢 Recurring Decimals (आवर्ती दशमलव):</span>
              <p>• <strong>Pure Recurring:</strong> 0.p̅ = p/9, 0.pq̅ = pq/99.</p>
              <p>• <strong>Mixed Recurring:</strong> 0.pq̅ = (pq - p)/90.</p>
              <p className="p-2 bg-slate-950/60 rounded text-emerald-400 font-mono text-[11px]">• *उदाहरण:* 0.35̅ = (35-3)/90 = 32/90 = 16/45.</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">📐 Square & Cube Roots (वर्गमूल व घनमूल):</span>
              <p>• <strong>Square root shortcut:</strong> इकाई अंक चक्रता और निकटतम पूर्ण वर्ग का उपयोग करें।</p>
              <p>• <strong>Useful Squares:</strong> 1-30 तक के वर्गों को अवश्य याद रखें। (e.g. 25² = 625, 29² = 841).</p>
            </div>
          </div>
        </div>
      );
    }

    // 2a. Exclusive Ratio & Proportion (अनुपात और समानुपात)
    if (topicLower.includes("ratio") || topicLower.includes("proportion") || topicLower.includes("अनुपात")) {
      const handleDownloadRatioPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          alert("Please allow popups to download/print the PDF.");
          return;
        }
        const content = `
          <html>
            <head>
              <title>Ratio & Proportion - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body {
                  font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif;
                  color: #1e293b;
                  line-height: 1.6;
                  margin: 0;
                  padding: 35px;
                  background-color: #ffffff;
                }
                .header {
                  text-align: center;
                  border-bottom: 3px double #a855f7;
                  padding-bottom: 15px;
                  margin-bottom: 25px;
                }
                .header h1 {
                  color: #0f172a;
                  margin: 0;
                  font-size: 26px;
                  font-weight: 700;
                }
                .header h2 {
                  color: #7c3aed;
                  margin: 5px 0 0 0;
                  font-size: 20px;
                  font-weight: 600;
                }
                .header p {
                  margin: 8px 0 0 0;
                  color: #4b5563;
                  font-size: 13px;
                  font-weight: 500;
                }
                .badge {
                  background-color: #f3e8ff;
                  color: #6b21a8;
                  padding: 4px 12px;
                  border-radius: 12px;
                  font-size: 11px;
                  font-weight: 600;
                  border: 1px solid #e9d5ff;
                  display: inline-block;
                  margin-bottom: 8px;
                }
                .section {
                  margin-bottom: 25px;
                  page-break-inside: avoid;
                }
                .section-title {
                  color: #6b21a8;
                  font-size: 16px;
                  font-weight: 600;
                  border-left: 4px solid #a855f7;
                  padding-left: 10px;
                  margin-bottom: 12px;
                  background-color: #f3e8ff;
                  padding-top: 6px;
                  padding-bottom: 6px;
                }
                .grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
                }
                @media (max-width: 600px) {
                  .grid {
                    grid-template-columns: 1fr;
                  }
                }
                .card {
                  border: 1px solid #e2e8f0;
                  border-radius: 8px;
                  padding: 12px;
                  background-color: #fafafa;
                }
                .card-title {
                  font-weight: 600;
                  color: #0f172a;
                  font-size: 13px;
                  margin-bottom: 6px;
                  border-bottom: 1px solid #e2e8f0;
                  padding-bottom: 4px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 15px;
                }
                th, td {
                  border: 1px solid #cbd5e1;
                  padding: 8px 10px;
                  text-align: left;
                  font-size: 12px;
                }
                th {
                  background-color: #f1f5f9;
                  color: #334155;
                  font-weight: 600;
                }
                .formula-box {
                  background-color: #f8fafc;
                  border-left: 3px solid #a855f7;
                  padding: 10px;
                  margin: 10px 0;
                  font-family: monospace;
                  font-size: 12px;
                  border-radius: 0 6px 6px 0;
                  white-space: pre-line;
                }
                .example-box {
                  background-color: #fdf4ff;
                  border: 1px dashed #d946ef;
                  padding: 12px;
                  margin: 10px 0;
                  border-radius: 6px;
                  font-size: 12px;
                }
                .example-title {
                  font-weight: 600;
                  color: #6b21a8;
                  margin-bottom: 4px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  font-size: 10px;
                  color: #94a3b8;
                  border-top: 1px solid #e2e8f0;
                  padding-top: 10px;
                }
                ul {
                  margin: 5px 0;
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 4px;
                  font-size: 12px;
                }
                strong {
                  color: #0f172a;
                }
                @media print {
                  body {
                    padding: 0;
                  }
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Ratio & Proportion</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: अनुपात और समानुपात</h2>
                <p>Designed for Excellence in Railway Exams | सर्वोत्तम अनुपात व समानुपात ट्रिक्स संकलन</p>
              </div>

              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Ratio (अनुपात)</div>
                    <p>दो समान प्रकार की राशियों के बीच तुलना को अनुपात कहते हैं। इसे ':' चिन्ह से दर्शाया जाता है।</p>
                    <p><b>Example:</b> A के पास ₹20 और B के पास ₹30 हैं, तो अनुपात = 20 : 30 = <b>2 : 3</b> (अनुपात हमेशा अपने सरलतम रूप में होता है)।</p>
                  </div>
                  <div class="card">
                    <div class="card-title">Proportion (समानुपात)</div>
                    <p>जब दो अनुपात आपस में बराबर हों, तो उन्हें समानुपात कहा जाता है। इसे '::' चिन्ह से दर्शाया जाता है।</p>
                    <p><b>Example:</b> a : b = c : d &rArr; a : b :: c : d &rArr; <b>a/b = c/d</b>.<br/>
                       (बाहरी पदों का गुणनफल = मध्य पदों का गुणनफल: <b>a &times; d = b &times; c</b>)
                    </p>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">2. Types & Formulas (महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>First Proportional (प्रथमानुपाती):</b> a और b का = <b>a&sup2; / b</b>
                  • <b>Mean Proportional (द्वितीयानुपाती / मध्यानुपाती):</b> a और b का = <b>&radic;(ab)</b>
                  • <b>Third Proportional (तृतीयानुपाती):</b> a और b का = <b>b&sup2; / a</b>
                  • <b>Fourth Proportional (चतुर्थानुपाती):</b> a, b, c का = <b>(b &times; c) / a</b>
                </div>
              </div>

              <div class="section" style="page-break-before: always;">
                <div class="section-title">3. Time-Saving Tricks (समय बचाने वाली शॉर्ट ट्रिक्स)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Trick 1: Combining Ratios (अनुपातों को जोड़ना) - पड़ोसी विधि</div>
                    <p>यदि A : B = 2 : 3 और B : C = 4 : 5 हो, तो खाली जगह में उसके बगल वाली संख्या लिख दें:</p>
                    <pre style="font-family: monospace; font-size: 11px; background: #e2e8f0; padding: 8px; border-radius: 4px;">
  A  :  B  :  C
  2  :  3  : [3]   (पड़ोसी 3 आया)
 [4] :  4  :  5   (पड़ोसी 4 आया)
----------------
  8  :  12 :  15   (ऊपर-नीचे गुणा करने पर)
                    </pre>
                    <p>अतः, A : B : C = <b>8 : 12 : 15</b>.</p>
                  </div>
                  <div class="card">
                    <div class="card-title">Trick 2: Coins Based Problems (सिक्कों वाले प्रश्न)</div>
                    <p>अगर थैले में सिक्कों की संख्या का अनुपात दिया हो, तो उन्हें मूल्य (Value) के अनुपात में बदलने के लिए सिक्कों की कीमत से गुणा करें (₹1 के लिए 1 से, 50 पैसे के लिए &frac12; से, 25 पैसे के लिए &frac14; से)।</p>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">4. Solved Examples (हल सहित उदाहरण)</div>
                
                <div class="example-box">
                  <div class="example-title">📝 Example 1: Mean Proportional (मध्यानुपाती)</div>
                  <b>Question:</b> 4 और 64 का मध्यानुपाती (Mean Proportional) ज्ञात कीजिए।<br/>
                  <b>Solution:</b><br/>
                  1. Formula: मध्यानुपाती = &radic;(ab)<br/>
                  2. मध्यानुपाती = &radic;(4 &times; 64)<br/>
                  3. मध्यानुपाती = &radic;256 = <b>16</b>.<br/>
                  <b>Answer:</b> <b>16</b>
                </div>

                <div class="example-box">
                  <div class="example-title">📝 Example 2: Income & Expenditure (आय और व्यय आधारित)</div>
                  <b>Question:</b> A और B की आय का अनुपात 3 : 2 है और उनके खर्च का अनुपात 5 : 3 है। यदि दोनों में से प्रत्येक ₹2000 बचाता है, तो A की आय कितनी है?<br/>
                  <b>Solution:</b><br/>
                  1. Let incomes be 3x and 2x. Since Income - Savings = Expenditure:<br/>
                     &bull; (3x - 2000) / (2x - 2000) = 5 / 3<br/>
                  2. Cross Multiply:<br/>
                     &bull; 3(3x - 2000) = 5(2x - 2000)<br/>
                     &bull; 9x - 6000 = 10x - 10000<br/>
                     &bull; 10x - 9x = 10000 - 6000 &rArr; x = 4000.<br/>
                  3. A's Income = 3x = 3 &times; 4000 = <b>12000</b>.<br/>
                  <b>Answer:</b> <b>₹12,000</b>
                </div>
              </div>

              <div class="footer">
                <p>Downloaded from Exam Practice Platform. Practicing daily guarantees success!</p>
                <p>&copy; 2026 Exam Practice Platform. All rights reserved. Print only for personal learning.</p>
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

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          {/* Decorative Glowing Element */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Header with Title and Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">
                <Percent className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-purple-400 text-base md:text-lg flex items-center gap-2">
                  Ratio & Proportion (अनुपात और समानुपात)
                </h4>
                <p className="text-slate-400 text-[11px] md:text-xs">Complete Bilingual Study Material & Tricks</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownloadRatioPDF}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
            >
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button 
                key={t} 
                onClick={() => setRatioTab(t as any)} 
                className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${ratioTab === t ? 'bg-purple-500/25 border-purple-500/50 text-purple-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}
              >
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ Shortcuts'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>

          <div className="space-y-4 animate-fadeIn">
            {ratioTab === 'basics' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-purple-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Ratio (अनुपात):</span>
                  <p className="text-[12px] leading-relaxed">दो समान प्रकार की राशियों के बीच तुलना को अनुपात कहते हैं। इसे ':' चिन्ह से दर्शाया जाता है। (e.g. 20:30 = 2:3)</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-purple-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Proportion (समानुपात):</span>
                  <p className="text-[12px] leading-relaxed">जब दो अनुपात आपस में बराबर हों, तो उन्हें समानुपात कहा जाता है। इसे '::' चिन्ह से दर्शाया जाता. है। (e.g. a:b = c:d &rArr; a&times;d = b&times;c)</p>
                </div>
              </div>
            )}

            {ratioTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-purple-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Formulas:</span>
                <p>• <b>Mean Proportional (मध्यानुपाती):</b> &radic;(a &times; b)</p>
                <p>• <b>Third Proportional (तृतीयानुपाती):</b> b&sup2; / a</p>
                <p>• <b>First Proportional (प्रथमानुपाती):</b> a&sup2; / b</p>
                <p>• <b>Fourth Proportional (चतुर्थानुपाती):</b> (b &times; c) / a</p>
              </div>
            )}

            {ratioTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-purple-300 text-[13px] block border-b border-white/5 pb-1">⚡ Combining Ratios Trick (पड़ोसी विधि):</span>
                <p className="text-[12px]">खाली स्थानों को बगल के पड़ोसी संख्या से भरें और ऊपर-नीचे गुणा कर दें।</p>
              </div>
            )}

            {ratioTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-purple-400 text-[12px] block">📝 प्रश्न 1: 4 और 64 का मध्यानुपाती</span>
                  <p className="text-[11.5px] text-slate-350">&radic;(4 &times; 64) = &radic;256 = <b>16</b></p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-purple-400 text-[12px] block">📝 प्रश्न 2: A और B की आय का अनुपात 3 : 2 है और खर्च 5 : 3 है। यदि प्रत्येक ₹2000 बचाता है, तो A की आय?</span>
                  <p className="text-[11.5px] text-slate-350">Income: 3x, 2x. (3x - 2000)/(2x - 2000) = 5/3 &rArr; x = 4000. A's Income = 3x = 3 &times; 4000 = <b>₹12,000</b></p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Topic 4/17 RRB Maths</span>
            <span className="text-emerald-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadRatioPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1d. Decimal Fractions (दशमलव और भिन्न)
    if (topicLower.includes("decimal") || topicLower.includes("fraction") || topicLower.includes("दशमलव") || topicLower.includes("भिन्न")) {
      const handleDownloadDecimalPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Decimal Fractions - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #0d9488; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #0d9488; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .header p { margin: 8px 0 0 0; color: #4b5563; font-size: 13px; font-weight: 500; }
                .badge { background-color: #f0fdfa; color: #0d9488; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #ccfbf1; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #0d9488; font-size: 16px; font-weight: 600; border-left: 4px solid #0d9488; padding-left: 10px; margin-bottom: 12px; background-color: #f0fdfa; padding-top: 6px; padding-bottom: 6px; }
                .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; background-color: #fafafa; }
                .card-title { font-weight: 600; color: #0f172a; font-size: 13px; margin-bottom: 6px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #0d9488; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #f0fdfa; border: 1px dashed #0d9488; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
                .example-title { font-weight: 600; color: #0d9488; margin-bottom: 4px; }
                .footer { text-align: center; margin-top: 30px; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Decimal Fractions</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: दशमलव और भिन्न</h2>
                <p>Designed for Railway Exams | Fast Recurring Fractions Conversion Rules</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <div class="grid">
                  <div class="card">
                    <div class="card-title">Decimal to Fraction (दशमलव से भिन्न)</div>
                    <p>साधारण दशमलव को भिन्न में बदलने के लिए दशमलव बिंदु हटाकर हर में 10, 100 आदि लिखें। (e.g. 0.75 = 75/100 = <b>3/4</b>)</p>
                  </div>
                  <div class="card">
                    <div class="card-title">Recurring Decimals (आवर्ती दशमलव)</div>
                    <p>जब दशमलव के बाद अंक बार-बार दोहराए जाएं: 0.333... = 0.3̅. इन्हें बार (Bar) द्वारा दर्शाया जाता है।</p>
                  </div>
                </div>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Conversion Rules (परिवर्तन के नियम)</div>
                <div class="formula-box">
                  • <b>Pure Recurring (शुद्ध आवर्ती):</b> 0.p̅ = <b>p / 9</b> | 0.pq̅ = <b>pq / 99</b>
                  • <b>Mixed Recurring (मिश्रित आवर्ती):</b> 0.pq̅ = <b>(pq &minus; p) / 90</b> | 0.pqr̅ = <b>(pqr &minus; pq) / 900</b>
                  • <b>Fraction Comparison:</b> Cross multiply to find larger. If a/b and c/d, check a&times;d and b&times;c.
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <div class="example-title">📝 Example 1: Recurring Decimal Conversion</div>
                  <b>Question:</b> 0.35̅ (मिश्रित आवर्ती दशमलव) को साधारण भिन्न में बदलें।<br/>
                  <b>Solution:</b> सूत्र: 0.ab̅ = (ab &minus; a) / 90 &rArr; (35 &minus; 3) / 90 = 32 / 90 = <b>16 / 45</b>.
                </div>
                <div class="example-box">
                  <div class="example-title">📝 Example 2: Ladder Fraction (लगातार भिन्न)</div>
                  <b>Question:</b> 1 + 1 / (1 + 1/2) का मान ज्ञात करें।<br/>
                  <b>Solution:</b> नीचे से हल करें: 1 + 1/2 = 3/2 &rArr; 1 / (3/2) = 2/3 &rArr; 1 + 2/3 = <b>5/3</b>.
                </div>
              </div>
              <div class="footer"><p>&copy; Exam Practice Platform</p></div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold border border-teal-500/20">
                <Hash className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-teal-400 text-base md:text-lg flex items-center gap-2">Decimal Fractions (दशमलव और भिन्न)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadDecimalPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setDecimalTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${decimalTab === t ? 'bg-teal-500/25 border-teal-500/50 text-teal-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Rules & Formulas'}
                {t === 'tricks' && '⚡ Shortcuts'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {decimalTab === 'basics' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-teal-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Decimal to Fraction:</span>
                  <p className="text-[12px] leading-relaxed">साधारण दशमलव को भिन्न में बदलने के लिए दशमलव बिंदु हटाकर हर में 10, 100 आदि लिखें। (e.g. 0.75 = 75/100 = 3/4)</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-teal-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Recurring Decimals (आवर्ती दशमलव):</span>
                  <p className="text-[12px] leading-relaxed">जब दशमलव के बाद अंक बार-बार दोहराए जाएं: 0.333... = 0.3̅. इन्हें बार (Bar) द्वारा दर्शाया जाता है।</p>
                </div>
              </div>
            )}
            {decimalTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-teal-300 text-[13px] block border-b border-white/5 pb-1">📐 Recurring Decimals Rules:</span>
                <p>• <b>Pure Recurring (शुद्ध आवर्ती):</b> 0.p̅ = p / 9 | 0.pq̅ = pq / 99</p>
                <p>• <b>Mixed Recurring (मिश्रित आवर्ती):</b> 0.pq̅ = (pq &minus; p) / 90</p>
              </div>
            )}
            {decimalTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-teal-300 text-[13px] block border-b border-white/5 pb-1">⚡ Ladder Fraction (लगातार भिन्न) Shortcut:</span>
                <p className="text-[12px]">हमेशा नीचे से शुरू करें और क्रमबद्ध रूप से ऊपर की तरफ हल करते हुए जाएं।</p>
              </div>
            )}
            {decimalTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-teal-400 text-[12px] block">📝 प्रश्न: Convert 0.35̅ to fraction.</span>
                  <p className="text-[11.5px] text-slate-350">सूत्र: 0.ab̅ = (ab &minus; a) / 90 &rArr; (35 &minus; 3) / 90 = 32 / 90 = <b>16 / 45</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-teal-400" /> Topic 5/17 RRB Maths</span>
            <span className="text-teal-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadDecimalPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1e. Percentage (प्रतिशत)
    if (topicLower.includes("percent") || topicLower.includes("प्रतिशत")) {
      const handleDownloadPercentPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Percentage - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #16a34a; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #16a34a; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #f0fdf4; color: #16a34a; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #bbf7d0; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #16a34a; font-size: 16px; font-weight: 600; border-left: 4px solid #16a34a; padding-left: 10px; margin-bottom: 12px; background-color: #f0fdf4; padding-top: 6px; padding-bottom: 6px; }
                .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; background-color: #fafafa; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #16a34a; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #f0fdf4; border: 1px dashed #16a34a; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Percentage</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: प्रतिशत</h2>
                <p>Designed for Railway Exams | Successive Percentage Tricks</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>प्रतिशत का अर्थ है प्रति सैकड़ा (per hundred)। चिन्ह % से दर्शाया जाता है। (e.g. 20% = 20/100 = 1/5)</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Formulas (महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>Successive % Change:</b> x + y + (x &times; y) / 100
                  • <b>Percentage to Fraction:</b> Divide by 100
                  • <b>Fraction to Percentage:</b> Multiply by 100
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> Price increases by 20% then decreases by 20%. Net change?
                  <br/><b>Solution:</b> Successive rule: 20 &minus; 20 &minus; (20&times;20)/100 = <b>&minus;4%</b> (4% कमी).
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold border border-green-500/20">
                <PercentIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-green-400 text-base md:text-lg flex items-center gap-2">Percentage (प्रतिशत)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadPercentPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setPercentTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${percentTab === t ? 'bg-green-500/25 border-green-500/50 text-green-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Rules & Formulas'}
                {t === 'tricks' && '⚡ Shortcuts'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {percentTab === 'basics' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-green-400 text-[13px] block border-b border-white/5 pb-1 mb-2">What is Percentage:</span>
                  <p className="text-[12px] leading-relaxed">प्रतिशत का अर्थ है प्रति सैकड़ा (per hundred)। चिन्ह % से दर्शाया जाता है। (e.g. 20% = 20/100 = 1/5)</p>
                </div>
              </div>
            )}
            {percentTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-green-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Formulas:</span>
                <p>• <b>Successive % Change:</b> x + y + (x &times; y) / 100</p>
              </div>
            )}
            {percentTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-green-300 text-[13px] block border-b border-white/5 pb-1">⚡ Fraction equivalents:</span>
                <p className="text-[12px]">1/2 = 50% | 1/4 = 25% | 1/8 = 12.5% | 1/3 = 33.33%</p>
              </div>
            )}
            {percentTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-green-400 text-[12px] block">📝 प्रश्न: Price increases by 20% then decreases by 20%. Net change?</span>
                  <p className="text-[11.5px] text-slate-350">Successive rule: 20 &minus; 20 &minus; (20&times;20)/100 = <b>&minus;4%</b> (4% कमी)</p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-green-400" /> Topic 6/17 RRB Maths</span>
            <span className="text-green-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadPercentPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1f. Unitary Method (ऐकिक नियम)
    if (topicLower.includes("unitary") || topicLower.includes("ऐकिक")) {
      const handleDownloadUnitaryPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Unitary Method - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #059669; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #059669; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #ecfdf5; color: #059669; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #a7f3d0; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #059669; font-size: 16px; font-weight: 600; border-left: 4px solid #059669; padding-left: 10px; margin-bottom: 12px; background-color: #ecfdf5; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #059669; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #ecfdf5; border: 1px dashed #059669; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Unitary Method</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: ऐकिक नियम</h2>
                <p>Designed for Railway Exams | Unit Value Estimation and Chain Rules</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>ऐकिक नियम (Unitary Method) में सबसे पहले किसी एक इकाई (unit) का मूल्य निकाला जाता है, और फिर अभीष्ट मात्रा का मूल्य गुणा करके निकाला जाता है।</p>
              </div>
              <div class="section">
                <div class="section-title">2. Proportions (समानुपात)</div>
                <p>• <b>Direct Proportion (सीधा समानुपात):</b> एक राशि बढ़ने पर दूसरी भी बढ़े। (e.g. अधिक वस्तु = अधिक मूल्य)</p>
                <p>• <b>Inverse Proportion (विलोम समानुपात):</b> एक राशि बढ़ने पर दूसरी घटे। (e.g. अधिक पुरुष = कम दिन)</p>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> 15 men earn ₹9000 in 5 days. How much will 20 men earn in 8 days?
                  <br/><b>Solution:</b> Formula: E &prop; (Men &times; Days) &rArr; E2 = (20 &times; 8 &times; 9000) / (15 &times; 5) = <b>₹19,200</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-base md:text-lg flex items-center gap-2">Unitary Method (ऐकिक नियम)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick unit cost calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadUnitaryPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setUnitaryTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${unitaryTab === t ? 'bg-emerald-500/25 border-emerald-500/50 text-emerald-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Proportions'}
                {t === 'tricks' && '⚡ Shortcuts'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {unitaryTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-emerald-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Basic Concepts:</span>
                <p className="text-[12px] leading-relaxed">ऐकिक नियम (Unitary Method) में सबसे पहले किसी एक इकाई (unit) का मूल्य निकाला जाता है, और फिर अभीष्ट मात्रा का मूल्य गुणा करके निकाला जाता है।</p>
              </div>
            )}
            {unitaryTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-300 text-[13px] block border-b border-white/5 pb-1">📐 Rules of Proportions:</span>
                <p>• <b>Direct (सीधा):</b> एक बढ़ने पर दूसरा बढ़े। (e.g. अधिक वस्तु = अधिक मूल्य)</p>
                <p>• <b>Inverse (विलोम):</b> एक बढ़ने पर दूसरा घटे। (e.g. अधिक पुरुष = कम दिन)</p>
              </div>
            )}
            {unitaryTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-emerald-300 text-[13px] block border-b border-white/5 pb-1">⚡ Arrow Shortcut:</span>
                <p className="text-[12px]">विलोम संबंध में तीर की दिशा उल्टी और सीधे में समान रखें।</p>
              </div>
            )}
            {unitaryTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-emerald-400 text-[12px] block">📝 प्रश्न: If 15 men earn ₹9000 in 5 days, how much will 20 men earn in 8 days?</span>
                  <p className="text-[11.5px] text-slate-350">E2 = (20 &times; 8 &times; 9000) / (15 &times; 5) = <b>₹19,200</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Topic 7/17 RRB Maths</span>
            <span className="text-emerald-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadUnitaryPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1g. Time and Work (समय और कार्य)
    if (topicLower.includes("work") || topicLower.includes("कार्य")) {
      const handleDownloadWorkPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Time & Work - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #0891b2; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #0891b2; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #ecfeff; color: #0891b2; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #cffafc; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #0891b2; font-size: 16px; font-weight: 600; border-left: 4px solid #0891b2; padding-left: 10px; margin-bottom: 12px; background-color: #ecfeff; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #0891b2; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #ecfeff; border: 1px dashed #0891b2; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Time & Work</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: समय और कार्य</h2>
                <p>Designed for Railway Exams | LCM Method & Chain Rules</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>• <b>Work = Efficiency &times; Time</b> (कार्य = कार्यक्षमता &times; समय)</p>
                <p>• कार्यक्षमता, समय के व्युत्क्रमानुपाती होती है (Efficiency &prop; 1/Time)।</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Formulas (महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>MDH Chain Rule:</b> (M1 &times; D1 &times; H1) / W1 = (M2 &times; D2 &times; H2) / W2
                  • <b>Combined Work:</b> A in x days, B in y days &rArr; Together = <b>(x&times;y)/(x+y)</b> days.
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> A does a work in 10 days, B in 15 days. Together they take?
                  <br/><b>Solution:</b> LCM of 10,15 = 30 (Total Work). Efficiency: A = 3, B = 2. Together time = 30 / (3+2) = <b>6 days</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/20">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="font-bold text-cyan-400 text-base md:text-lg flex items-center gap-2">Time and Work (समय और कार्य)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick schedule estimation</p>
              </div>
            </div>
            <button onClick={handleDownloadWorkPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setWorkTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${workTab === t ? 'bg-cyan-500/25 border-cyan-500/50 text-cyan-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ LCM Shortcuts'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {workTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-cyan-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Basic Efficiency Rules:</span>
                <p className="text-[12px] leading-relaxed">Work = Efficiency &times; Time. कार्यक्षमता, समय के व्युत्क्रमानुपाती होती है (Efficiency &prop; 1/Time)।</p>
              </div>
            )}
            {workTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-cyan-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Formulas:</span>
                <p>• <b>MDH Chain Rule:</b> (M1 &times; D1 &times; H1) / W1 = (M2 &times; D2 &times; H2) / W2</p>
              </div>
            )}
            {workTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-cyan-300 text-[13px] block border-b border-white/5 pb-1">⚡ LCM Method Shortcut:</span>
                <p className="text-[12px]">हमेशा दिनों का LCM निकालकर उसे कुल कार्य (Total Work) मानें।</p>
              </div>
            )}
            {workTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-cyan-400 text-[12px] block">📝 प्रश्न: A in 10 days, B in 15 days. Combined?</span>
                  <p className="text-[11.5px] text-slate-350">LCM of 10,15 = 30. Efficiencies A=3, B=2. Combined time = 30 / 5 = <b>6 days</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Topic 8/17 RRB Maths</span>
            <span className="text-cyan-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadWorkPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1h. Time and Distance (समय और दूरी)
    if (topicLower.includes("distance") || topicLower.includes("speed") || topicLower.includes("दूरी")) {
      const handleDownloadDistPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Time, Speed & Distance - Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #0284c7; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #0284c7; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #f0f9ff; color: #0284c7; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #bae6fd; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #0284c7; font-size: 16px; font-weight: 600; border-left: 4px solid #0284c7; padding-left: 10px; margin-bottom: 12px; background-color: #f0f9ff; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #0284c7; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #f0f9ff; border: 1px dashed #0284c7; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Time, Speed & Distance</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: समय, चाल और दूरी</h2>
                <p>Designed for Railway Exams | Train & Platform Crossing Rules</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>• <b>Speed = Distance / Time</b> (चाल = दूरी / समय)</p>
                <p>• km/h को m/s में बदलने के लिए <b>5/18</b> से गुणा करें, और m/s को km/h में बदलने के लिए <b>18/5</b> से।</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Formulas (महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>Relative Speed (सापेक्ष चाल):</b> Same direction = S1 - S2 | Opposite direction = S1 + S2
                  • <b>Average Speed:</b> Same distance covered &rArr; Avg = <b>2 &times; S1 &times; S2 / (S1 + S2)</b>
                  • <b>Train Crossing:</b> Distance = Train Length + Platform Length
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> A 200m train crosses a 300m platform at 72 km/h. Find time taken?
                  <br/><b>Solution:</b> Speed = 72 &times; 5/18 = 20 m/s. Total Distance = 200 + 300 = 500m. Time = 500 / 20 = <b>25 seconds</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold border border-sky-500/20">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="font-bold text-sky-400 text-base md:text-lg flex items-center gap-2">Time and Distance (समय और दूरी)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick train speed estimations</p>
              </div>
            </div>
            <button onClick={handleDownloadDistPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setDistTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${distTab === t ? 'bg-sky-500/25 border-sky-500/50 text-sky-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ Relative Speed'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {distTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-sky-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Basic Speed Conversion:</span>
                <p className="text-[12px] leading-relaxed">km/h को m/s में बदलने के लिए 5/18 से गुणा करें, और m/s को km/h में बदलने के लिए 18/5 से।</p>
              </div>
            )}
            {distTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Formulas:</span>
                <p>• <b>Average Speed:</b> Avg = 2 &times; S1 &times; S2 / (S1 + S2) [बराबर दूरी के लिए]</p>
              </div>
            )}
            {distTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-sky-300 text-[13px] block border-b border-white/5 pb-1">⚡ Relative Speed Rule:</span>
                <p className="text-[12px]">समान दिशा में चालों का अंतर (S1 - S2) और विपरीत दिशा में चालों का योग (S1 + S2) लें।</p>
              </div>
            )}
            {distTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-sky-400 text-[12px] block">📝 प्रश्न: Train 200m crosses 300m platform at 72 km/h. Time?</span>
                  <p className="text-[11.5px] text-slate-350">Speed = 20 m/s. Distance = 500m. Time = 500 / 20 = <b>25 seconds</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-sky-400" /> Topic 9/17 RRB Maths</span>
            <span className="text-sky-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadDistPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1i. Average (औसत)
    if (topicLower.includes("average") || topicLower.includes("औसत")) {
      const handleDownloadAveragePDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Average - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #2563eb; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #2563eb; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #eff6ff; color: #2563eb; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #dbeafe; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #2563eb; font-size: 16px; font-weight: 600; border-left: 4px solid #2563eb; padding-left: 10px; margin-bottom: 12px; background-color: #eff6ff; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #2563eb; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #eff6ff; border: 1px dashed #2563eb; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Average</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: औसत</h2>
                <p>Designed for Railway Exams | Consecutive Odd/Even Series Shortcuts</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>• <b>Average = Sum of values / Number of values</b> (औसत = राशियों का योग / राशियों की संख्या)</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Series Rules (महत्वपूर्ण श्रेणी नियम)</div>
                <div class="formula-box">
                  • Average of first N natural numbers = <b>(N + 1) / 2</b>
                  • Average of first N even numbers = <b>N + 1</b>
                  • Average of first N odd numbers = <b>N</b>
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> Average of 5 consecutive odd numbers is 25. Find the largest?
                  <br/><b>Solution:</b> 5 विषम संख्याओं का औसत मध्य संख्या होती है। मध्य संख्या = 25.
                  श्रेणी: 21, 23, 25, 27, 29. सबसे बड़ी संख्या = <b>29</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                <BarChart2 className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-blue-400 text-base md:text-lg flex items-center gap-2">Average (औसत)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick median calculation</p>
              </div>
            </div>
            <button onClick={handleDownloadAveragePDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setAverageTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${averageTab === t ? 'bg-blue-500/25 border-blue-500/50 text-blue-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Series Laws'}
                {t === 'tricks' && '⚡ Tricks'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {averageTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-blue-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Arithmetic Mean:</span>
                <p className="text-[12px] leading-relaxed">औसत = राशियों का योग / राशियों की संख्या। क्रमागत विषम/सम संख्याओं का औसत हमेशा उनका मध्य बिंदु होता है।</p>
              </div>
            )}
            {averageTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-blue-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Rules:</span>
                <p>• <b>First N natural numbers avg:</b> (N + 1) / 2</p>
                <p>• <b>First N even numbers avg:</b> N + 1</p>
                <p>• <b>First N odd numbers avg:</b> N</p>
              </div>
            )}
            {averageTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-blue-300 text-[13px] block border-b border-white/5 pb-1">⚡ Deviations Shortcut:</span>
                <p className="text-[12px]">कठिन गणना से बचने के लिए एक काल्पनिक औसत (Assumed Average) मानकर विचलनों (deviations) का योग शून्य के बराबर करें।</p>
              </div>
            )}
            {averageTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-blue-400 text-[12px] block">📝 प्रश्न: Average of 5 consecutive odd numbers is 25. Largest?</span>
                  <p className="text-[11.5px] text-slate-350">मध्य संख्या = 25 &rArr; संख्याएं = 21, 23, 25, 27, 29. उत्तर = <b>29</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-blue-400" /> Topic 10/17 RRB Maths</span>
            <span className="text-blue-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadAveragePDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1j. Profit and Loss (लाभ और हानि)
    if (topicLower.includes("profit") || topicLower.includes("loss") || topicLower.includes("लाभ")) {
      const handleDownloadProfitPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Profit & Loss - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #ea580c; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #ea580c; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #fff7ed; color: #ea580c; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #ffedd5; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #ea580c; font-size: 16px; font-weight: 600; border-left: 4px solid #ea580c; padding-left: 10px; margin-bottom: 12px; background-color: #fff7ed; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #ea580c; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #fff7ed; border: 1px dashed #ea580c; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Profit & Loss</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: लाभ और हानि</h2>
                <p>Designed for Railway Exams | Dishonest Shopkeeper Shortcuts</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>• लाभ (Profit) या हानि (Loss) हमेशा क्रय मूल्य (Cost Price) पर ही निकाला जाता है।</p>
                <p>• छूट (Discount) हमेशा अंकित मूल्य (Marked Price) पर दी जाती है।</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Formulas (महत्वपूर्ण सूत्र)</div>
                <div class="formula-box">
                  • <b>Profit %:</b> [ (SP &minus; CP) / CP ] &times; 100
                  • <b>Discount %:</b> [ (MP &minus; SP) / MP ] &times; 100
                  • <b>Relationship CP/MP:</b> CP / MP = (100 &minus; D%) / (100 + P%)
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> A shopkeeper sells CP but uses 800g instead of 1kg. Find Profit%?
                  <br/><b>Solution:</b> Profit% = [ Error / (True Value &minus; Error) ] &times; 100 &rArr; [ 200 / 800 ] &times; 100 = <b>25%</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold border border-orange-500/20">
                <PercentIcon className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-orange-400 text-base md:text-lg flex items-center gap-2">Profit & Loss (लाभ और हानि)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick business calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadProfitPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setProfitTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${profitTab === t ? 'bg-orange-500/25 border-orange-500/50 text-orange-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ Dishonest Rules'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {profitTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-orange-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Cost & Selling Price:</span>
                <p className="text-[12px] leading-relaxed">लाभ या हानि हमेशा क्रय मूल्य (Cost Price) पर ही निकाला जाता है। छूट (Discount) हमेशा अंकित मूल्य (Marked Price) पर दी जाती है।</p>
              </div>
            )}
            {profitTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-orange-300 text-[13px] block border-b border-white/5 pb-1">📐 Relations & Formulas:</span>
                <p>• <b>CP / MP Ratio:</b> CP / MP = (100 &minus; Discount%) / (100 + Profit%)</p>
              </div>
            )}
            {profitTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-orange-300 text-[13px] block border-b border-white/5 pb-1">⚡ Dishonest Shopkeeper Shortcut:</span>
                <p className="text-[12px]">Profit% = [ Error / (True Value - Error) ] &times; 100</p>
              </div>
            )}
            {profitTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-orange-400 text-[12px] block">📝 प्रश्न: Uses 800g instead of 1kg. Profit%?</span>
                  <p className="text-[11.5px] text-slate-350">Profit% = [ 200 / 800 ] &times; 100 = <b>25%</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-orange-400" /> Topic 11/17 RRB Maths</span>
            <span className="text-orange-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadProfitPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1k. Mensuration (क्षेत्रमिति)
    if (topicLower.includes("mensuration") || topicLower.includes("क्षेत्रमिति")) {
      const handleDownloadMensurationPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Mensuration - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #4f46e5; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #4f46e5; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #eef2ff; color: #4f46e5; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #e0e7ff; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #4f46e5; font-size: 16px; font-weight: 600; border-left: 4px solid #4f46e5; padding-left: 10px; margin-bottom: 12px; background-color: #eef2ff; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #4f46e5; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #eef2ff; border: 1px dashed #4f46e5; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Mensuration</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: क्षेत्रमिति (2D and 3D)</h2>
                <p>Designed for Railway Exams | Shape Formulas Reference Sheet</p>
              </div>
              <div class="section">
                <div class="section-title">1. 2D Shapes (द्विविमीय क्षेत्रमिति)</div>
                <p>• <b>Circle (वृत्त):</b> Area = <b>&pi;r&sup2;</b> | Perimeter = <b>2&pi;r</b></p>
                <p>• <b>Triangle (त्रिभुज):</b> Area = <b>&frac12; &times; Base &times; Height</b></p>
              </div>
              <div class="section">
                <div class="section-title">2. 3D Solid Shapes (त्रिविमीय क्षेत्रमिति)</div>
                <div class="formula-box">
                  • <b>Cylinder (बेलन):</b> CSA = <b>2&pi;rh</b> | Volume = <b>&pi;r&sup2;h</b>
                  • <b>Cone (शंकु):</b> CSA = <b>&pi;rl</b> | Volume = <b>&frac13; &pi;r&sup2;h</b>
                  • <b>Sphere (गोला):</b> CSA = <b>4&pi;r&sup2;</b> | Volume = <b>&frac43; &pi;r&sup3;</b>
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> Find the volume of a sphere whose radius is doubled?
                  <br/><b>Solution:</b> Volume &prop; r&sup3;. If radius becomes 2r, new volume = 8 times the original volume (700% increase).
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20">
                <Ruler className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-indigo-400 text-base md:text-lg flex items-center gap-2">Mensuration (क्षेत्रमिति)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick perimeter and volume calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadMensurationPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setMensurationTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${mensurationTab === t ? 'bg-indigo-500/25 border-indigo-500/50 text-indigo-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 2D Concepts'}
                {t === 'formulas' && '📐 3D Formulas'}
                {t === 'tricks' && '⚡ Radius Changes'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {mensurationTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-indigo-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Circle & Triangle:</span>
                <p className="text-[12px] leading-relaxed">वृत्त का क्षेत्रफल = &pi;r&sup2; | वृत्त की परिधि = 2&pi;r। त्रिभुज का क्षेत्रफल = &frac12; &times; आधार &times; ऊँचाई।</p>
              </div>
            )}
            {mensurationTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-300 text-[13px] block border-b border-white/5 pb-1">📐 3D Solids:</span>
                <p>• <b>Cylinder (बेलन):</b> Volume = &pi;r&sup2;h</p>
                <p>• <b>Cone (शंकु):</b> Volume = &frac13; &pi;r&sup2;h</p>
                <p>• <b>Sphere (गोला):</b> Volume = &frac43; &pi;r&sup3;</p>
              </div>
            )}
            {mensurationTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-indigo-300 text-[13px] block border-b border-white/5 pb-1">⚡ Doubling Radius Rule:</span>
                <p className="text-[12px]">त्रिज्या दोगुनी करने पर गोले का आयतन 2&sup3; = 8 गुना हो जाता है (700% की वृद्धि)।</p>
              </div>
            )}
            {mensurationTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-indigo-400 text-[12px] block">📝 प्रश्न: Sphere radius doubled. Volume?</span>
                  <p className="text-[11.5px] text-slate-350">Volume &prop; r&sup3; &rArr; (2r)&sup3; = 8r&sup3;. <b>8 गुना (8 times)</b> हो जायेगा।</p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Topic 12/17 RRB Maths</span>
            <span className="text-indigo-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadMensurationPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1l. Simple and Compound Interest (ब्याज)
    if (topicLower.includes("interest") || topicLower.includes("ब्याज")) {
      const handleDownloadInterestPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Simple & Compound Interest - Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #db2777; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #db2777; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #fdf2f8; color: #db2777; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #fbcfe8; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #db2777; font-size: 16px; font-weight: 600; border-left: 4px solid #db2777; padding-left: 10px; margin-bottom: 12px; background-color: #fdf2f8; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #db2777; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #fdf2f8; border: 1px dashed #db2777; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Interest</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: साधारण व चक्रवृद्धि ब्याज</h2>
                <p>Designed for Railway Exams | CI and SI Difference Formulas</p>
              </div>
              <div class="section">
                <div class="section-title">1. Simple Interest (साधारण ब्याज)</div>
                <p>• <b>SI = (P &times; R &times; T) / 100</b></p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Formulas (चक्रवृद्धि ब्याज अंतर)</div>
                <div class="formula-box">
                  • <b>Difference for 2 Years:</b> D2 = P &times; (R / 100)&sup2;
                  • <b>Difference for 3 Years:</b> D3 = P &times; (R / 100)&sup2; &times; [ 3 + R / 100 ]
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> P = ₹10,000, R = 10%, T = 2 years. Find D2 (CI &minus; SI)?
                  <br/><b>Solution:</b> D2 = 10000 &times; (10 / 100)&sup2; = 10000 &times; 0.01 = <b>₹100</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold border border-pink-500/20">
                <Layers className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-pink-400 text-base md:text-lg flex items-center gap-2">Simple & Compound Interest (ब्याज)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick interest calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadInterestPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setInterestTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${interestTab === t ? 'bg-pink-500/25 border-pink-500/50 text-pink-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ Difference Rules'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {interestTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-pink-400 text-[13px] block border-b border-white/5 pb-1 mb-2">SI & CI Basics:</span>
                <p className="text-[12px] leading-relaxed">साधारण ब्याज हमेशा मूलधन पर और चक्रवृद्धि ब्याज ब्याज के ऊपर ब्याज (interest on interest) होता है।</p>
              </div>
            )}
            {interestTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-pink-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Formulas:</span>
                <p>• <b>SI Formula:</b> SI = (P &times; R &times; T) / 100</p>
                <p>• <b>Difference for 2 Years:</b> D2 = P &times; (R / 100)&sup2;</p>
              </div>
            )}
            {interestTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-pink-300 text-[13px] block border-b border-white/5 pb-1">⚡ Yearly vs Half-Yearly:</span>
                <p className="text-[12px]">अर्धवार्षिक compounding में दर को आधा (R/2) और समय को दोगुना (2T) कर दें।</p>
              </div>
            )}
            {interestTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-pink-400 text-[12px] block">📝 प्रश्न: P=10,000, R=10%, T=2 years. Find D2 (CI - SI)?</span>
                  <p className="text-[11.5px] text-slate-350">D2 = 10000 &times; (10 / 100)&sup2; = 10000 &times; 0.01 = <b>₹100</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-pink-400" /> Topic 13/17 RRB Maths</span>
            <span className="text-pink-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadInterestPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1m. Data Interpretation (डेटा व्याख्या)
    if (topicLower.includes("interpretation") || topicLower.includes("data") || topicLower.includes("डेटा")) {
      const handleDownloadDIPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Data Interpretation - Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #7c3aed; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #7c3aed; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #f5f3ff; color: #7c3aed; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #ede9fe; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #7c3aed; font-size: 16px; font-weight: 600; border-left: 4px solid #7c3aed; padding-left: 10px; margin-bottom: 12px; background-color: #f5f3ff; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #7c3aed; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #f5f3ff; border: 1px dashed #7c3aed; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Data Interpretation</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: डेटा व्याख्या (DI)</h2>
                <p>Designed for Railway Exams | Pie Chart Degree Conversion Hacks</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>• <b>Data Interpretation (DI):</b> सारणी (Tables), पाई चार्ट (Pie Charts), दंड आरेख (Bar Graphs) आदि के रूप में प्रस्तुत डेटा का विश्लेषण।</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Formulas (कोण/प्रतिशत संबंध)</div>
                <div class="formula-box">
                  • <b>Degree to Percentage:</b> Value % = (Degree / 360) &times; 100
                  • <b>Percentage to Degree:</b> Sector Angle = (Percentage / 100) &times; 360&deg;
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> Find the sector angle for a contribution of 20% in a pie chart?
                  <br/><b>Solution:</b> Angle = (20 / 100) &times; 360&deg; = <b>72&deg;</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold border border-violet-500/20">
                <BarChart2 className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-violet-400 text-base md:text-lg flex items-center gap-2">Data Interpretation (डेटा व्याख्या)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick chart estimation</p>
              </div>
            </div>
            <button onClick={handleDownloadDIPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setDiTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${diTab === t ? 'bg-violet-500/25 border-violet-500/50 text-violet-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Angle Conversion'}
                {t === 'tricks' && '⚡ Charts Shortcuts'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {diTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-violet-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Pie Charts & Bar Graphs:</span>
                <p className="text-[12px] leading-relaxed">सारणी (Tables), पाई चार्ट (Pie Charts), दंड आरेख (Bar Graphs) आदि के रूप में प्रस्तुत डेटा का विश्लेषण।</p>
              </div>
            )}
            {diTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-violet-300 text-[13px] block border-b border-white/5 pb-1">📐 Sector Angles:</span>
                <p>• <b>Sector Angle Formula:</b> Sector Angle = (Percentage / 100) &times; 360&deg;</p>
              </div>
            )}
            {diTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-violet-300 text-[13px] block border-b border-white/5 pb-1">⚡ Fast Ratio Estimation:</span>
                <p className="text-[12px]">सभी मानों का वास्तविक योग करने के बजाय सीधे उनके संगत अंश/प्रतिशत का अनुपात ज्ञात करें।</p>
              </div>
            )}
            {diTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-violet-400 text-[12px] block">📝 प्रश्न: Find sector angle for a contribution of 20% in pie chart?</span>
                  <p className="text-[11.5px] text-slate-350">Angle = (20 / 100) &times; 360&deg; = <b>72&deg;</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-violet-400" /> Topic 14/17 RRB Maths</span>
            <span className="text-violet-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadDIPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1n. Algebra (बीजगणित)
    if (topicLower.includes("algebra") || topicLower.includes("बीजगणित")) {
      const handleDownloadAlgebraPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Algebra - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #c026d3; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #c026d3; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #fdf4ff; color: #c026d3; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #fae8ff; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #c026d3; font-size: 16px; font-weight: 600; border-left: 4px solid #c026d3; padding-left: 10px; margin-bottom: 12px; background-color: #fdf4ff; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #c026d3; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #fdf4ff; border: 1px dashed #c026d3; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Algebra</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: बीजगणित</h2>
                <p>Designed for Railway Exams | Symmetric Equations Hacks</p>
              </div>
              <div class="section">
                <div class="section-title">1. Essential Identities (प्रमुख सूत्र)</div>
                <div class="formula-box">
                  • <b>Square Identity:</b> (a + b)&sup2; = a&sup2; + 2ab + b&sup2;
                  • <b>Special Cubic Identity:</b> If a + b + c = 0 &rArr; a&sup3; + b&sup3; + c&sup3; = <b>3abc</b>
                </div>
              </div>
              <div class="section">
                <div class="section-title">2. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> If x + 1/x = 4, find x&sup2; + 1/x&sup2;?
                  <br/><b>Solution:</b> Square both sides: (x + 1/x)&sup2; = 16 &rArr; x&sup2; + 2 + 1/x&sup2; = 16 &rArr; x&sup2; + 1/x&sup2; = 16 &minus; 2 = <b>14</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 font-bold border border-fuchsia-500/20">
                <Ruler className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-fuchsia-400 text-base md:text-lg flex items-center gap-2">Algebra (बीजगणित)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick identity applications</p>
              </div>
            </div>
            <button onClick={handleDownloadAlgebraPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setAlgebraTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${algebraTab === t ? 'bg-fuchsia-500/25 border-fuchsia-500/50 text-fuchsia-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ Value Putting'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {algebraTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-fuchsia-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Polynomials & Variables:</span>
                <p className="text-[12px] leading-relaxed">बीजगणित में चरों (variables) का उपयोग समीकरणों को हल करने के लिए किया जाता है। प्रमुख बीजीय सर्वसमिकाओं का उपयोग करके हम बड़े व्यंजकों को सेकंडों में सरल कर सकते हैं।</p>
              </div>
            )}
            {algebraTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-fuchsia-300 text-[13px] block border-b border-white/5 pb-1">📐 Golden Identities:</span>
                <p>• (a + b)&sup2; = a&sup2; + 2ab + b&sup2;</p>
                <p>• If a + b + c = 0 &rArr; a&sup3; + b&sup3; + c&sup3; = 3abc</p>
              </div>
            )}
            {algebraTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-fuchsia-300 text-[13px] block border-b border-white/5 pb-1">⚡ Value Putting Method:</span>
                <p className="text-[12px]">समीकरणों में चरों का काल्पनिक मान (जैसे 0, 1) रखकर विकल्पों को तुरंत संतुष्ट करें।</p>
              </div>
            )}
            {algebraTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-fuchsia-400 text-[12px] block">📝 प्रश्न: If x + 1/x = 4, find x&sup2; + 1/x&sup2;?</span>
                  <p className="text-[11.5px] text-slate-350">Square: (x + 1/x)&sup2; = 16 &rArr; x&sup2; + 2 + 1/x&sup2; = 16 &rArr; x&sup2; + 1/x&sup2; = <b>14</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-fuchsia-400" /> Topic 15/17 RRB Maths</span>
            <span className="text-fuchsia-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadAlgebraPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1o. Square Root and Cube Root (वर्गमूल और घनमूल)
    if (topicLower.includes("root") || topicLower.includes("वर्गमूल")) {
      const handleDownloadRootPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Square & Cube Root - Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #e11d48; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #e11d48; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #fff1f2; color: #e11d48; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #ffe4e6; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #e11d48; font-size: 16px; font-weight: 600; border-left: 4px solid #e11d48; padding-left: 10px; margin-bottom: 12px; background-color: #fff1f2; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #e11d48; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #fff1f2; border: 1px dashed #e11d48; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Square & Cube Roots</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: वर्गमूल और घनमूल</h2>
                <p>Designed for Railway Exams | Perfect Square Estimation Hacks</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Definitions (बुनियादी नियम)</div>
                <p>• <b>Square Root (वर्गमूल):</b> &radic;x वह संख्या है जिसे स्वयं से गुणा करने पर x प्राप्त हो। (e.g. &radic;25 = 5)</p>
                <p>• <b>Cube Root (घनमूल):</b> &sup3;&radic;x वह संख्या है जिसे स्वयं से तीन बार गुणा करने पर x प्राप्त हो। (e.g. &sup3;&radic;125 = 5)</p>
              </div>
              <div class="section">
                <div class="section-title">2. Perfect Square Estimation Tricks (अनुमान विधि)</div>
                <div class="formula-box">
                  • <b>Unit Digit Rule:</b> Perfect squares only end in 0, 1, 4, 5, 6, 9. If number ends in 2, 3, 7, 8, it can NEVER be a perfect square.
                  • <b>Estimation:</b> Locate between nearest perfect squares of multiples of 10.
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> Find the square root of 5041?
                  <br/><b>Solution:</b> Ends in 1 &rArr; root ends in 1 or 9. Since 70&sup2; = 4900 < 5041 < 80&sup2; = 6400. Try 71&sup2; and 79&sup2;. 71&sup2; = <b>5041</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold border border-rose-500/20">
                <Hash className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-rose-400 text-base md:text-lg flex items-center gap-2">Square & Cube Roots (वर्गमूल व घनमूल)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick roots estimation</p>
              </div>
            </div>
            <button onClick={handleDownloadRootPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setRootTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${rootTab === t ? 'bg-rose-500/25 border-rose-500/50 text-rose-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Endings Law'}
                {t === 'tricks' && '⚡ Estimation Tricks'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {rootTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-rose-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Concept of Roots:</span>
                <p className="text-[12px] leading-relaxed">वर्गमूल (&radic;x) वह संख्या है जिसे स्वयं से गुणा करने पर x प्राप्त हो। घनमूल (&sup3;&radic;x) वह संख्या है जिसे स्वयं से तीन बार गुणा करने पर x प्राप्त हो।</p>
              </div>
            )}
            {rootTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-rose-300 text-[13px] block border-b border-white/5 pb-1">📐 Perfect Square Rules:</span>
                <p>• पूर्ण वर्ग केवल 0, 1, 4, 5, 6, 9 पर ही समाप्त हो सकते हैं। यदि संख्या 2, 3, 7, 8 पर समाप्त हो, तो वह कभी पूर्ण वर्ग नहीं हो सकती।</p>
              </div>
            )}
            {rootTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-rose-300 text-[13px] block border-b border-white/5 pb-1">⚡ Estimation Shortcut:</span>
                <p className="text-[12px]">दी गई संख्या के सबसे निकटतम 10 के गुणज के पूर्ण वर्ग की पहचान करके इकाई अंक का मिलान करें।</p>
              </div>
            )}
            {rootTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-rose-400 text-[12px] block">📝 प्रश्न: Find square root of 5041?</span>
                  <p className="text-[11.5px] text-slate-350">Ends in 1 &rArr; root ends in 1 or 9. Since 70&sup2; = 4900 &lt; 5041 &lt; 80&sup2;. 71&sup2; = <b>5041</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-rose-400" /> Topic 16/17 RRB Maths</span>
            <span className="text-rose-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadRootPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // 1p. Partnership (साझेदारी)
    if (topicLower.includes("partnership") || topicLower.includes("साझेदारी")) {
      const handleDownloadPartnershipPDF = () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { alert("Please allow popups to download/print the PDF."); return; }
        const content = `
          <html>
            <head>
              <title>Partnership - Complete Study Notes</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
                body { font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 35px; background-color: #ffffff; }
                .header { text-align: center; border-bottom: 3px double #d97706; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { color: #0f172a; margin: 0; font-size: 26px; font-weight: 700; }
                .header h2 { color: #d97706; margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
                .badge { background-color: #fffbeb; color: #d97706; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #fef3c7; display: inline-block; margin-bottom: 8px; }
                .section { margin-bottom: 25px; page-break-inside: avoid; }
                .section-title { color: #d97706; font-size: 16px; font-weight: 600; border-left: 4px solid #d97706; padding-left: 10px; margin-bottom: 12px; background-color: #fffbeb; padding-top: 6px; padding-bottom: 6px; }
                .formula-box { background-color: #f8fafc; border-left: 3px solid #d97706; padding: 10px; margin: 10px 0; font-family: monospace; font-size: 12px; border-radius: 0 6px 6px 0; white-space: pre-line; }
                .example-box { background-color: #fffbeb; border: 1px dashed #d97706; padding: 12px; margin: 10px 0; border-radius: 6px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="badge">RRB Group D Mathematics Special</div>
                <h1>Complete Bilingual Study Notes: Partnership</h1>
                <h2>गणित सम्पूर्ण हस्तलिखित नोट्स: साझेदारी</h2>
                <p>Designed for Railway Exams | Capital and Time Equalization Hacks</p>
              </div>
              <div class="section">
                <div class="section-title">1. Basic Concepts (बुनियादी अवधारणाएं)</div>
                <p>• साझेदारी (Partnership) में होने वाले लाभ (Profit) या हानि (Loss) का वितरण निवेशित पूंजी और निवेश के समय के गुणनफल के अनुपात में होता है।</p>
              </div>
              <div class="section">
                <div class="section-title">2. Golden Profit Formulas (लाभ विभाजन नियम)</div>
                <div class="formula-box">
                  • <b>Profit Sharing Ratio:</b> Profit Ratio = (Capital A &times; Time A) : (Capital B &times; Time B)
                  • If Capitals are equal: Profit is divided in the ratio of Time.
                  • If Times are equal: Profit is divided in the ratio of Capital.
                </div>
              </div>
              <div class="section">
                <div class="section-title">3. Solved Examples (हल सहित उदाहरण)</div>
                <div class="example-box">
                  <b>Question:</b> A invests ₹10,000 for 12 months, B ₹15,000 for 8 months. Profit sharing ratio?
                  <br/><b>Solution:</b> Ratio = (10000 &times; 12) : (15000 &times; 8) = 120,000 : 120,000 = <b>1 : 1</b>.
                </div>
              </div>
              <script>window.onload = function() { window.print(); setTimeout(window.close, 500); }</script>
            </body>
          </html>
        `;
        printWindow.document.write(content); printWindow.document.close();
      };

      return (
        <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl animate-fadeIn text-xs md:text-sm text-slate-350 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold border border-amber-500/20">
                <Layers className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-amber-400 text-base md:text-lg flex items-center gap-2">Partnership (साझेदारी)</h4>
                <p className="text-slate-400 text-[11px]">Bilingual study notes for quick business share calculations</p>
              </div>
            </div>
            <button onClick={handleDownloadPartnershipPDF} className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold">
              <Printer className="w-4 h-4 text-slate-950" /> Download Premium PDF Notes
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['basics', 'formulas', 'tricks', 'examples'].map((t) => (
              <button key={t} onClick={() => setPartnershipTab(t as any)} className={`px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold transition-all duration-300 ${partnershipTab === t ? 'bg-amber-500/25 border-amber-500/50 text-amber-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'}`}>
                {t === 'basics' && '📊 Concepts'}
                {t === 'formulas' && '📐 Formulas'}
                {t === 'tricks' && '⚡ Equalization'}
                {t === 'examples' && '📝 Examples'}
              </button>
            ))}
          </div>
          <div className="space-y-4 animate-fadeIn">
            {partnershipTab === 'basics' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                <span className="font-bold text-amber-400 text-[13px] block border-b border-white/5 pb-1 mb-2">Basic Concepts:</span>
                <p className="text-[12px] leading-relaxed">साझेदारी (Partnership) में होने वाले लाभ (Profit) या हानि (Loss) का वितरण निवेशित पूंजी और निवेश के समय के गुणनफल के अनुपात में होता है।</p>
              </div>
            )}
            {partnershipTab === 'formulas' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-300 text-[13px] block border-b border-white/5 pb-1">📐 Profit Sharing Ratio:</span>
                <p>• <b>Formula:</b> Profit Ratio = (Capital A &times; Time A) : (Capital B &times; Time B)</p>
              </div>
            )}
            {partnershipTab === 'tricks' && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-amber-300 text-[13px] block border-b border-white/5 pb-1">⚡ Working Partner Rule:</span>
                <p className="text-[12px]">सक्रिय (working) साझेदार को कुल लाभ का एक निश्चित प्रतिशत वेतन के रूप में देकर बचे लाभ को पूर्व अनुपात में विभाजित करें।</p>
              </div>
            )}
            {partnershipTab === 'examples' && (
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <span className="font-bold text-amber-400 text-[12px] block">📝 प्रश्न: A invests 10,000 for 12 months, B 15,000 for 8 months. Profit ratio?</span>
                  <p className="text-[11.5px] text-slate-350">Profit ratio = (10000&times;12) : (15000&times;8) = 120,000 : 120,000 = <b>1 : 1</b></p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-amber-400" /> Topic 17/17 RRB Maths</span>
            <span className="text-amber-350 font-semibold cursor-pointer hover:underline flex items-center gap-1" onClick={handleDownloadPartnershipPDF}>
              <Printer className="w-3 h-3" /> Open Print Layout
            </span>
          </div>
        </div>
      );
    }

    // Default Fallback
    if (topic) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-350">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Calculator className="w-5 h-5" /> Quantitative Aptitude Study Notes ({topic})
          </h4>
          <p className="text-slate-400 mb-2">शॉर्टकट ट्रिक्स, महत्वपूर्ण सूत्र एवं अभ्यास अवधारणाएं:</p>
          <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
            <p className="font-semibold text-emerald-300 mb-1">• {topic} Key Shortcut:</p>
            <p>सभी प्रतियोगी परीक्षाओं (SSC, Railway, Police) के लिए सर्वश्रेष्ठ संकलन। अभ्यास के साथ हल करें!</p>
          </div>
        </div>
      );
    }

    // 2b. Fallback Percentage, Ratio, Partnership, Unitary Method
    if (
      topicLower.includes("percent") || 
      topicLower.includes("partnership") || 
      topicLower.includes("unitary") ||
      topicLower.includes("प्रतिशत") ||
      topicLower.includes("साझेदारी")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <PercentIcon className="w-5 h-5" /> Percentage, Ratio & Ratios (प्रतिशत व अनुपात नियम)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
              <span className="font-semibold text-emerald-350 text-[13px] block">📈 Percentage & Changes:</span>
              <p>• <strong>Successive % Change:</strong> यदि पहले x% और फिर y% की वृद्धि होती है, तो कुल शुद्ध परिवर्तन:</p>
              <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center">
                कुल परिवर्तन % = x + y + (x * y) / 100
              </p>
              <p className="text-[11px] text-slate-400">• *नोट:* कमी होने पर x या y को ऋणात्मक (-) रखें।</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🤝 Ratio & Partnership (साझेदारी):</span>
              <p>• <strong>Partnership Rule:</strong> लाभ का अनुपात = (निवेशित पूंजी × निवेश का समय) का अनुपात।</p>
              <p className="p-2 bg-slate-950/60 rounded text-slate-300">
                Profit Ratio = (P1 × T1) : (P2 × T2)
              </p>
              <p>• <strong>Mean Proportion (मध्यानुपाती):</strong> a और b का मध्यानुपाती = √(a × b)</p>
              <p>• <strong>Third Proportion (तृतीयानुपाती):</strong> a और b का तृतीयानुपाती = b² / a</p>
            </div>
          </div>
        </div>
      );
    }

    // 3. Time and Work, Time and Distance, Speed
    if (
      topicLower.includes("work") || 
      topicLower.includes("distance") || 
      topicLower.includes("speed") || 
      topicLower.includes("time") ||
      topicLower.includes("कार्य") ||
      topicLower.includes("दूरी")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <RefreshCw className="w-5 h-5 animate-spin-slow" /> Time, Work & Relative Speed Notes (कार्य व चाल समय)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">⏳ Time and Work (कार्य और समय):</span>
              <p>• <strong>Efficiency Rule:</strong> कार्य = दक्षता × समय (Work = Efficiency × Time)</p>
              <p>• <strong>LCM Method:</strong> कुल कार्य = समयों का LCM.</p>
              <p className="p-2 bg-slate-950/60 rounded text-slate-300 text-[11px]">
                A, 10 दिन में और B, 15 दिन में करता है, तो कुल कार्य = LCM(10,15) = 30.<br />
                A की दक्षता = 3, B की दक्षता = 2. मिलकर समय = 30 / (3+2) = 6 दिन।
              </p>
              <p>• <strong>MDH Formula:</strong> $(M_1 \times D_1 \times H_1) / W_1 = (M_2 \times D_2 \times H_2) / W_2$</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🏃 Speed, Time & Distance (दूरी व चाल):</span>
              <p>• <strong>Relative Speed (सापेक्ष चाल):</strong></p>
              <p className="pl-3">• **समान दिशा (Same direction):** सापेक्ष चाल = S1 - S2</p>
              <p className="pl-3">• **विपरीत दिशा (Opposite direction):** सापेक्ष चाल = S1 + S2</p>
              <p>• <strong>Average Speed:</strong> बराबर दूरी होने पर, औसत चाल = $2 \times S_1 \times S_2 / (S_1 + S_2)$</p>
              <p>• <strong>Units Conversion:</strong> km/h को m/s में बदलने के लिए 5/18 से गुणा करें।</p>
            </div>
          </div>
        </div>
      );
    }

    // 4. Profit and Loss
    if (topicLower.includes("profit") || topicLower.includes("loss") || topicLower.includes("लाभ")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <PercentIcon className="w-5 h-5" /> Profit, Loss & Discount Notes (लाभ, हानि व बट्टा)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">💰 Profit & Loss Formulas:</span>
              <p>• <strong>Profit %:</strong> [ (SP - CP) / CP ] × 100</p>
              <p>• <strong>Loss %:</strong> [ (CP - SP) / CP ] × 100</p>
              <p>• <strong>Dishonest Shopkeeper Trick:</strong></p>
              <p className="p-2.5 bg-slate-950/60 rounded text-slate-300 text-[11px]">
                लाभ% = [ (त्रुटि / (वास्तविक मान - त्रुटि)) × 100 ]<br />
                *उदाहरण:* यदि 1 kg के स्थान पर 800 g तोलता है, तो लाभ% = [ (200 / 800) × 100 ] = 25%
              </p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🏷️ Marked Price & Discount (अंकित मूल्य व छूट):</span>
              <p>• <strong>Discount %:</strong> [ (MP - SP) / MP ] × 100</p>
              <p>• <strong>Relationship between CP and MP:</strong></p>
              <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center">
                CP / MP = (100 - Discount%) / (100 + Profit%)
              </p>
              <p>• <strong>Successive Discount:</strong> d1% और d2% की दो क्रमिक छूटों के बराबर एकल समतुल्य छूट = d1 + d2 - (d1 × d2) / 100</p>
            </div>
          </div>
        </div>
      );
    }

    // 5. Interest (Simple and Compound)
    if (topicLower.includes("interest") || topicLower.includes("ब्याज")) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Layers className="w-5 h-5" /> Simple & Compound Interest Tricks (साधारण व चक्रवृद्धि ब्याज)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">💰 Simple Interest (SI):</span>
              <p>• <strong>Formula:</strong> SI = (P × R × T) / 100</p>
              <p>• यदि कोई राशि T वर्षों में n गुनी हो जाती है, तो दर R = (n - 1) × 100 / T</p>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">📈 CI & SI Difference Shortcuts (अति महत्वपूर्ण):</span>
              <div className="p-2.5 bg-slate-950/60 rounded border border-white/5 space-y-1.5 text-[11px]">
                <strong>💥 2 वर्ष के लिए CI और SI का अंतर:</strong>
                <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center font-mono">
                  D2 = P × (R / 100)²
                </p>
                <strong>💥 3 वर्ष के लिए CI और SI का अंतर:</strong>
                <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center font-mono">
                  D3 = P × (R / 100)² × [ 3 + R/100 ]
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 6. Mensuration, Geometry, Algebra
    if (
      topicLower.includes("mensuration") || 
      topicLower.includes("geometry") || 
      topicLower.includes("algebra") ||
      topicLower.includes("क्षेत्रमिति") ||
      topicLower.includes("बीजगणित")
    ) {
      return (
        <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
          <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
            <Ruler className="w-5 h-5" /> Algebra, Geometry & Mensuration Formulas (बीजगणित व क्षेत्रमिति)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">🔑 Algebra Identities (बीजगणित):</span>
              <div className="space-y-1 text-slate-350 font-mono text-[11px]">
                <p>• (a + b)³ = a³ + b³ + 3ab(a + b)</p>
                <p>• a³ + b³ = (a + b)(a² - ab + b²)</p>
                <p>• a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)</p>
                <p>🚨 यदि a + b + c = 0 हो, तो <strong>a³ + b³ + c³ = 3abc</strong>.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-semibold text-emerald-350 text-[13px] block">📦 Mensuration Formulas (क्षेत्रमिति):</span>
              <div className="space-y-1 text-slate-350 text-[11px]">
                <p>• <strong>Cone (शंकु):</strong> Volume = 1/3 * πr²h, Lateral Area = πrl</p>
                <p>• <strong>Cylinder (बेलन):</strong> Volume = πr²h, Total Area = 2πr(r+h)</p>
                <p>• <strong>Sphere (गोला):</strong> Volume = 4/3 * πr³, Area = 4πr²</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="mt-4 p-5 md:p-6 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-xl animate-fadeIn text-xs md:text-sm text-slate-300">
        <h4 className="flex items-center gap-2 font-bold text-emerald-400 text-sm md:text-base mb-4 pb-2 border-b border-white/5">
          <Calculator className="w-5 h-5" /> Quantitative Aptitude Study Notes ({topic})
        </h4>
        <p className="text-slate-400 mb-2">शॉर्टकट ट्रिक्स, महत्वपूर्ण सूत्र एवं अभ्यास अवधारणाएं:</p>
        <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
          <p className="font-semibold text-emerald-300 mb-1">• {topic} Key Shortcut:</p>
          <p>सभी प्रतियोगी परीक्षाओं (SSC, Railway, Police) के लिए सर्वश्रेष्ठ संकलन। अभ्यास के साथ हल करें!</p>
        </div>
      </div>
    );
  }

  // Unified full component rendering (original tabbed view for general pages)
  return (
    <div className="mt-4 p-5 md:p-8 bg-[#070b12]/95 border border-emerald-500/20 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Percent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-50">Quantitative Aptitude Study Notes</h3>
          <p className="text-xs md:text-sm text-slate-400">SSC CGL Tier 1 & 2 गणितीय अवधारणाएं, शार्टकट ट्रिक्स और सूत्र</p>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-xl border transition-all duration-300 ${
              activeTab === tab.id 
                ? `${tab.color} border-current shadow-lg shadow-emerald-500/5` 
                : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6 text-slate-350 leading-relaxed text-xs md:text-sm">

        {/* TAB 1: ARITHMETIC TRICKS */}
        {activeTab === 'arithmetic' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            {/* Percentage & Profit Loss */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">📈 1. Percentage & Successive Change:</span>
                <p>• <strong>क्रमागत प्रतिशत परिवर्तन (Successive % Change):</strong> यदि किसी मान में पहले x% और फिर y% की वृद्धि होती है, तो कुल शुद्ध परिवर्तन होता है:</p>
                <p className="p-2 bg-emerald-500/10 font-bold text-slate-100 rounded text-center">
                  कुल परिवर्तन % = x + y + (x * y) / 100
                </p>
                <p className="text-[11px] text-slate-400">• *नोट: कमी होने पर x या y का मान ऋणात्मक (-) रखें।*</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-emerald-350 block border-b border-white/5 pb-1 text-sm">⏳ 2. Time, Work & Relative Speed:</span>
                <p>• <strong>Time and Work Efficiency Rule:</strong> कार्य = दक्षता × समय (Work = Efficiency * Time)</p>
                <p className="p-2 bg-slate-950/60 rounded text-slate-300">
                  यदि A किसी कार्य को 10 दिन में और B उसे 15 दिन में करता है, तो दोनों मिलकर:<br />
                  LCM (10, 15) = 30 (कुल कार्य)<br />
                  A की दक्षता = 3, B की दक्षता = 2. दोनों का कुल समय = 30 / (3+2) = 6 दिन।
                </p>
              </div>
            </div>

            {/* Simple Interest & Compound Interest */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3 text-xs">
              <span className="font-bold text-emerald-350 block text-sm">💰 3. Simple & Compound Interest Tricks (साधारण व चक्रवृद्धि ब्याज):</span>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>💥 2 वर्ष के लिए CI और SI का अंतर (Difference):</strong>
                  <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center mt-1">
                    D₂ = P * (R / 100)²
                  </p>
                </div>
                <div className="p-3 bg-[#0c1220] rounded border border-white/5 space-y-1">
                  <strong>💥 3 वर्ष के लिए CI और SI का अंतर (Difference):</strong>
                  <p className="p-1 bg-emerald-500/10 text-slate-100 rounded font-semibold text-center mt-1">
                    D₃ = P * (R / 100)² * [ 3 + R / 100 ]
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADVANCED MATHS */}
        {activeTab === 'advanced' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-teal-400 flex items-center gap-2 text-sm">
                <Ruler className="w-4 h-4" /> 📐 उच्च गणित बीजगणित, ज्यामिति और त्रिकोणमिति सूत्र
              </span>
              <p>SSC CGL Tier 1 & 2 में एडवांस्ड मैथ्स का भारांक लगभग 40% से 50% होता है।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">🔑 A. Algebra Identities (बीजगणित के सूत्र):</span>
                <div className="space-y-2 text-slate-300 font-mono">
                  <p>• (a + b)³ = a³ + b³ + 3ab(a + b)</p>
                  <p>• a³ + b³ = (a + b)(a² - ab + b²)</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-3">
                <span className="font-bold text-teal-300 block border-b border-white/5 pb-1 text-sm">📐 B. Geometry Concepts (ज्यामिति नियम):</span>
                <div className="space-y-2 text-slate-350">
                  <p>• <strong>Centroid (केंद्रक):</strong> माध्यिका को <strong>2 : 1</strong> के अनुपात में विभाजित करता है।</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STATISTICS & PROBABILITY */}
        {activeTab === 'stats' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 space-y-2">
              <span className="font-bold text-cyan-400 flex items-center gap-2 text-sm">
                <BarChart2 className="w-4 h-4" /> 📊 सांख्यिकी एवं प्रायिकता (Statistics & Probability)
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
