"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  { id: 1, text: "उत्तर प्रदेश की राजधानी क्या है?", options: ["कानपुर", "लखनऊ", "आगरा", "वाराणसी"], correct: "लखनऊ" },
  { id: 2, text: "भारत के वर्तमान राष्ट्रपति कौन हैं?", options: ["रामनाथ कोविंद", "द्रौपदी मुर्मू", "नरेंद्र मोदी", "अमित शाह"], correct: "द्रौपदी मुर्मू" },
  { id: 3, text: "'ताजमहल' उत्तर प्रदेश के किस जिले में स्थित है?", options: ["मथुरा", "आगरा", "अलीगढ़", "गाजियाबाद"], correct: "आगरा" },
  { id: 4, text: "'आकाश' का पर्यायवाची शब्द है?", options: ["पाताल", "धरती", "गगन", "सागर"], correct: "गगन" },
  { id: 5, text: "'रात' का विलोम शब्द क्या है?", options: ["संध्या", "दिन", "भोर", "सवेरा"], correct: "दिन" },
  { id: 6, text: "जो कभी न मरे, उसे क्या कहते हैं?", options: ["अमर", "अजर", "मृत्युंजय", "शाश्वत"], correct: "अमर" },
  { id: 7, text: "15 और 20 का LCM (लघुत्तम समापवर्त्य) क्या होगा?", options: ["30", "45", "60", "75"], correct: "60" },
  { id: 8, text: "एक वस्तु को 500 रुपये में खरीदकर 600 रुपये में बेचा गया। लाभ प्रतिशत ज्ञात करें?", options: ["10%", "20%", "25%", "30%"], correct: "20%" },
  { id: 9, text: "यदि X का 20%, 40 है, तो X का मान क्या होगा?", options: ["100", "150", "200", "250"], correct: "200" },
  { id: 10, text: "2, 4, 8, 16, ? श्रृंखला में अगला नंबर क्या होगा?", options: ["24", "30", "32", "64"], correct: "32" },
  { id: 11, text: "'कुत्ता' का संबंध 'भौंकना' से है, तो 'बिल्ली' का संबंध किससे है?", options: ["रंभाना", "म्याऊँ", "चिंघाड़ना", "दहाड़ना"], correct: "म्याऊँ" },
  { id: 12, text: "पुलिस स्मृति दिवस कब मनाया जाता है?", options: ["21 अक्टूबर", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"], correct: "21 अक्टूबर" },
  { id: 13, text: "'कमल' का पर्यायवाची शब्द इनमें से कौन सा नहीं है?", options: ["पंकज", "जलज", "सरोज", "वारिद"], correct: "वारिद" },
  { id: 14, text: "450 का 30% कितना होगा?", options: ["120", "135", "150", "165"], correct: "135" },
  { id: 15, text: "A, C, E, G, ? अगला अक्षर क्या होगा?", options: ["H", "I", "J", "K"], correct: "I" },
  { id: 16, text: "उत्तर प्रदेश में कुल कितने मंडल (Divisions) हैं?", options: ["16", "17", "18", "19"], correct: "18" },
  { id: 17, text: "'आंखों का तारा' मुहावरे का अर्थ है?", options: ["बहुत प्यारा होना", "दुश्मन होना", "अंधा होना", "तारा देखना"], correct: "बहुत प्यारा होना" },
  { id: 18, text: "एक ट्रेन 60 किमी/घंटा की गति से चल रही है। वह 3 घंटे में कितनी दूरी तय करेगी?", options: ["120 किमी", "150 किमी", "180 किमी", "200 किमी"], correct: "180 किमी" },
  { id: 19, text: "यदि RED को 27 लिखा जाता है, तो CAT को क्या लिखा जाएगा?", options: ["24", "25", "26", "27"], correct: "24" },
  { id: 20, text: "उत्तर प्रदेश का राजकीय पुष्प कौन सा है?", options: ["कमल", "गुलाब", "पलाश", "गेंदा"], correct: "पलाश" }
];

export default function UPPoliceTest() {
  const [currentQNo, setCurrentQNo] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQNo - 1];
  const totalQCount = questions.length;

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  if (isSubmitted) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto my-16 text-center">
        <div className="glass-panel p-10">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 mb-4">Test Submitted Successfully!</h2>
          <p className="text-xl text-slate-300 mb-8">
            You scored <span className="text-emerald-400 font-bold text-2xl">{score}</span> out of {totalQCount}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/exams/up-police-constable" className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors">
              Back to Syllabus
            </Link>
            <button 
              onClick={() => { setAnswers({}); setIsSubmitted(false); setCurrentQNo(1); setTimeLeft(3600); }} 
              className="px-6 py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
            >
              Retake Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Test Header */}
      <div className="flex flex-wrap justify-between items-center mb-8 bg-[#0f172a]/80 p-4 rounded-2xl border border-white/5 shadow-lg sticky top-20 z-40 backdrop-blur-md">
        <div>
          <h1 className="text-xl font-bold text-slate-50">UP Police Constable Mock Test 1</h1>
          <p className="text-sm text-slate-400">Total Questions: 20 | Marks: 20</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-lg font-mono text-lg font-bold ${timeLeft < 300 ? 'bg-red-500/20 text-red-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
            ⏱ {formatTime(timeLeft)}
          </div>
          <button 
            onClick={() => setIsSubmitted(true)}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-red-500/30"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Left: Question Area */}
        <div className="glass-panel p-8">
          <div className="flex justify-between items-center mb-6 pb-5 border-b border-white/5">
            <div className="text-indigo-400 font-semibold bg-indigo-400/10 px-4 py-1.5 rounded-full text-sm">
              Question {currentQNo} of {totalQCount}
            </div>
          </div>
          
          <div className="text-xl font-medium leading-relaxed mb-8 text-slate-50">
            Q{currentQNo}. {currentQuestion.text}
          </div>
          
          <div className="grid gap-4">
            {currentQuestion.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 cursor-pointer transition-colors group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${answers[currentQNo] === opt ? 'border-indigo-400 bg-indigo-400' : 'border-slate-500 group-hover:border-indigo-400'}`}>
                  {answers[currentQNo] === opt && <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div>}
                </div>
                <input 
                  type="radio" 
                  name={`q_${currentQNo}`} 
                  value={opt} 
                  className="hidden"
                  checked={answers[currentQNo] === opt}
                  onChange={() => setAnswers(prev => ({...prev, [currentQNo]: opt}))}
                />
                <span className="text-slate-300 text-lg">
                  <span className="font-bold text-slate-500 mr-2">{String.fromCharCode(65 + i)}.</span> {opt}
                </span>
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
            <button 
              className="px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentQNo === 1}
              onClick={() => setCurrentQNo(prev => prev - 1)}
            >
              &larr; Previous
            </button>
            <button 
              className="px-6 py-2.5 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-500/25"
              disabled={currentQNo === totalQCount}
              onClick={() => setCurrentQNo(prev => prev + 1)}
            >
              Save & Next &rarr;
            </button>
          </div>
        </div>

        {/* Right: Palette Area */}
        <div className="glass-panel p-6 sticky top-48">
          <h3 className="m-0 mb-4 text-lg font-semibold text-slate-50">Question Palette</h3>
          
          <div className="flex flex-col gap-3 mb-6 text-sm text-slate-400 border-b border-white/5 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Answered
              </div>
              <span className="font-mono">{Object.keys(answers).length}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-600"></div> Unanswered
              </div>
              <span className="font-mono">{totalQCount - Object.keys(answers).length}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-2.5">
            {questions.map((q) => {
              const isAnswered = !!answers[q.id];
              const isActive = currentQNo === q.id;
              
              let btnClass = "w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 border";
              
              if (isActive) {
                btnClass += " border-indigo-400 bg-indigo-500/20 text-indigo-300 scale-110 shadow-lg shadow-indigo-500/20";
              } else if (isAnswered) {
                btnClass += " border-emerald-500/50 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30";
              } else {
                btnClass += " border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500 hover:text-slate-300";
              }

              return (
                <div 
                  key={q.id} 
                  className={btnClass}
                  onClick={() => setCurrentQNo(q.id)}
                >
                  {q.id}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
