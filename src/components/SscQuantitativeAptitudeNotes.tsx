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

    // 2. Percentage, Ratio, Partnership, Unitary Method
    if (
      topicLower.includes("percent") || 
      topicLower.includes("ratio") || 
      topicLower.includes("proportion") || 
      topicLower.includes("partnership") || 
      topicLower.includes("unitary") ||
      topicLower.includes("प्रतिशत") ||
      topicLower.includes("अनुपात") ||
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
