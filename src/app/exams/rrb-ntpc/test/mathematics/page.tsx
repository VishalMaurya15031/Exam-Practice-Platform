"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, CheckCircle2, AlertTriangle, ChevronLeft, ChevronRight, Trophy, RotateCcw, FileText, ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  textHindi: string;
  options: string[];
  correct: string;
  category: string;
  topic: string;
};

type MockTest = {
  id: number;
  title: string;
  titleHindi: string;
  description: string;
  descriptionHindi: string;
  questions: Question[];
};

const mockTestsData: MockTest[] = [
  {
    id: 1,
    title: "RRB NTPC Mathematics Mock Test - 1",
    titleHindi: "आरआरबी एनटीपीसी गणित मॉक टेस्ट - 1",
    description: "30 Questions | 45 Minutes | Bilingual Practice on Complete NTPC Syllabus",
    descriptionHindi: "30 प्रश्न | 45 मिनट | संपूर्ण एनटीपीसी पाठ्यक्रम पर द्विभाषी अभ्यास",
    questions: [
      {
        id: 1,
        topic: "Number System",
        text: "Find the unit digit of (237)¹⁵⁴ × (159)¹²³.",
        textHindi: "(237)¹⁵⁴ × (159)¹²³ का इकाई अंक ज्ञात कीजिए।",
        options: ["1", "3", "7", "9"],
        correct: "1",
        category: "Medium"
      },
      {
        id: 2,
        topic: "Decimals & Fractions",
        text: "Express 0.37̅ + 0.42̅ as a fraction in its simplest form.",
        textHindi: "0.37̅ + 0.42̅ को इसके सरलतम रूप में भिन्न के रूप में व्यक्त करें।",
        options: ["79/99", "80/99", "79/100", "8/11"],
        correct: "79/99",
        category: "Medium"
      },
      {
        id: 3,
        topic: "LCM & HCF",
        text: "The HCF and LCM of two numbers are 12 and 144 respectively. If one of the numbers is 36, find the other number.",
        textHindi: "दो संख्याओं का म.स. (HCF) और ल.स. (LCM) क्रमशः 12 और 144 हैं। यदि उनमें से एक संख्या 36 है, तो दूसरी संख्या ज्ञात कीजिए।",
        options: ["48", "72", "96", "108"],
        correct: "48",
        category: "Easy"
      },
      {
        id: 4,
        topic: "Ratios & Proportions",
        text: "If A : B = 3 : 5 and B : C = 4 : 7, find the ratio of A : B : C.",
        textHindi: "यदि A : B = 3 : 5 और B : C = 4 : 7 है, तो A : B : C का अनुपात ज्ञात कीजिए।",
        options: ["12 : 20 : 35", "3 : 5 : 7", "12 : 15 : 35", "9 : 15 : 35"],
        correct: "12 : 20 : 35",
        category: "Easy"
      },
      {
        id: 5,
        topic: "Percentage",
        text: "If A's salary is 20% more than B's salary, then B's salary is how much percent less than A's salary?",
        textHindi: "यदि A का वेतन B के वेतन से 20% अधिक है, तो B का वेतन A के वेतन से कितने प्रतिशत कम है?",
        options: ["20%", "16.67%", "15%", "25%"],
        correct: "16.67%",
        category: "Easy"
      },
      {
        id: 6,
        topic: "Mensuration",
        text: "A rectangular park is 60 m long and 40 m wide. A path of uniform width 5 m is built all around the outside of the park. Find the area of the path.",
        textHindi: "एक आयताकार पार्क 60 मीटर लंबा और 40 मीटर चौड़ा है। पार्क के बाहर चारों ओर 5 मीटर समान चौड़ाई का एक रास्ता बनाया गया है। रास्ते का क्षेत्रफल ज्ञात कीजिए।",
        options: ["1100 sq.m", "1200 sq.m", "1000 sq.m", "900 sq.m"],
        correct: "1100 sq.m",
        category: "Medium"
      },
      {
        id: 7,
        topic: "Time and Work",
        text: "A can do a piece of work in 12 days and B can do it in 15 days. They work together for 4 days and then A leaves. In how many days will B finish the remaining work?",
        textHindi: "A किसी कार्य को 12 दिनों में और B उसे 15 दिनों में कर सकता है। वे 4 दिनों तक एक साथ काम करते हैं और फिर A काम छोड़ देता है। B शेष कार्य को कितने दिनों में समाप्त करेगा?",
        options: ["5 days", "6 days", "8 days", "4 days"],
        correct: "6 days",
        category: "Medium"
      },
      {
        id: 8,
        topic: "Time and Distance",
        text: "A train 150 meters long crosses a bridge 250 meters long in 20 seconds. What is the speed of the train in km/h?",
        textHindi: "150 मीटर लंबी एक ट्रेन 250 मीटर लंबे पुल को 20 सेकंड में पार करती है। किमी/घंटा में ट्रेन की गति क्या है?",
        options: ["60 km/h", "72 km/h", "90 km/h", "80 km/h"],
        correct: "72 km/h",
        category: "Easy"
      },
      {
        id: 9,
        topic: "Simple & Compound Interest",
        text: "What will be the difference between simple interest and compound interest on ₹8000 at 10% per annum for 2 years?",
        textHindi: "₹8000 की राशि पर 10% वार्षिक दर से 2 वर्ष के साधारण ब्याज और चक्रवृद्धि ब्याज में कितना अंतर होगा?",
        options: ["₹80", "₹100", "₹160", "₹60"],
        correct: "₹80",
        category: "Medium"
      },
      {
        id: 10,
        topic: "Profit and Loss",
        text: "An article is sold at a loss of 10%. Had it been sold for ₹90 more, there would have been a gain of 5%. Find the cost price of the article.",
        textHindi: "एक वस्तु को 10% की हानि पर बेचा जाता है। यदि इसे ₹90 अधिक में बेचा जाता, तो 5% का लाभ होता। वस्तु का क्रय मूल्य ज्ञात कीजिए।",
        options: ["₹500", "₹600", "₹750", "₹800"],
        correct: "₹600",
        category: "Medium"
      },
      {
        id: 11,
        topic: "Elementary Algebra",
        text: "If x + 1/x = 5, find the value of x³ + 1/x³.",
        textHindi: "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।",
        options: ["110", "115", "125", "140"],
        correct: "110",
        category: "Medium"
      },
      {
        id: 12,
        topic: "Geometry & Trigonometry",
        text: "If sin θ + cos θ = √2 cos θ, then find the value of cos θ - sin θ.",
        textHindi: "यदि sin θ + cos θ = √2 cos θ है, तो cos θ - sin θ का मान ज्ञात कीजिए।",
        options: ["√2 sin θ", "2 sin θ", "√2 cos θ", "1/2 sin θ"],
        correct: "√2 sin θ",
        category: "Hard"
      },
      {
        id: 13,
        topic: "Elementary Statistics",
        text: "If the mean of the data 6, 8, 10, x, 7 is 8, find the value of x.",
        textHindi: "यदि आंकड़ों 6, 8, 10, x, 7 का माध्य 8 है, तो x का मान ज्ञात कीजिए।",
        options: ["7", "8", "9", "10"],
        correct: "9",
        category: "Easy"
      },
      {
        id: 14,
        topic: "Number System",
        text: "How many natural numbers between 100 and 300 are divisible by 13?",
        textHindi: "100 और 300 के बीच कितनी प्राकृतिक संख्याएं 13 से विभाज्य हैं?",
        options: ["14", "15", "16", "17"],
        correct: "15",
        category: "Medium"
      },
      {
        id: 15,
        topic: "LCM & HCF",
        text: "Four bells toll at intervals of 6, 8, 12 and 18 seconds respectively. If they toll together at 12:00 PM, at what time will they toll together next?",
        textHindi: "चार घंटियाँ क्रमशः 6, 8, 12 और 18 सेकंड के अंतराल पर बजती हैं। यदि वे दोपहर 12:00 बजे एक साथ बजती हैं, तो वे अगली बार किस समय एक साथ बजेंगी?",
        options: ["12:01:12 PM", "12:02:18 PM", "12:01:00 PM", "12:02:00 PM"],
        correct: "12:01:12 PM",
        category: "Easy"
      },
      {
        id: 16,
        topic: "Ratios & Proportions",
        text: "The ratio of ages of father and son is 7 : 3. If the product of their ages is 756, find the ratio of their ages after 6 years.",
        textHindi: "पिता और पुत्र की आयु का अनुपात 7 : 3 है। यदि उनकी आयु का गुणनफल 756 है, तो 6 वर्ष बाद उनकी आयु का अनुपात ज्ञात कीजिए।",
        options: ["4 : 2", "2 : 1", "3 : 1", "5 : 2"],
        correct: "2 : 1",
        category: "Medium"
      },
      {
        id: 17,
        topic: "Percentage",
        text: "In an exam, 35% of the total students failed in Hindi, 45% failed in English and 20% failed in both. What percentage of students passed in both subjects?",
        textHindi: "एक परीक्षा में, कुल छात्रों में से 35% हिंदी में अनुत्तीर्ण हुए, 45% अंग्रेजी में अनुत्तीर्ण हुए और 20% दोनों में अनुत्तीर्ण हुए। दोनों विषयों में कितने प्रतिशत छात्र उत्तीर्ण हुए?",
        options: ["30%", "40%", "45%", "25%"],
        correct: "40%",
        category: "Hard"
      },
      {
        id: 18,
        topic: "Time and Work",
        text: "A and B can complete a work in 15 days and 10 days respectively. They started the work together, but B left after 2 days. A alone finished the remaining work. The whole work was completed in how many days?",
        textHindi: "A और B क्रमशः 15 दिनों और 10 दिनों में एक काम पूरा कर सकते हैं। उन्होंने एक साथ काम शुरू किया, लेकिन B 2 दिनों के बाद चला गया। A ने अकेले शेष काम पूरा किया। पूरा काम कितने दिनों में समाप्त हुआ?",
        options: ["12 days", "10 days", "8 days", "15 days"],
        correct: "12 days",
        category: "Hard"
      },
      {
        id: 19,
        topic: "Time and Distance",
        text: "A boat covers 24 km upstream and 36 km downstream in 6 hours. While it covers 36 km upstream and 24 km downstream in 6.5 hours. Find the speed of the stream.",
        textHindi: "एक नाव 6 घंटे में 24 किमी धारा के प्रतिकूल और 36 किमी धारा के अनुकूल तय करती है। जबकि वह 6.5 घंटे में 36 किमी धारा के प्रतिकूल और 24 किमी धारा के अनुकूल तय करती है। धारा की गति ज्ञात कीजिए।",
        options: ["2 km/h", "3 km/h", "4 km/h", "2.5 km/h"],
        correct: "2 km/h",
        category: "Hard"
      },
      {
        id: 20,
        topic: "Profit and Loss",
        text: "A dishonest dealer claims to sell his goods at cost price, but he uses a weight of 960 grams for a kg. Find his gain percentage.",
        textHindi: "एक बेईमान डीलर लागत मूल्य पर अपना माल बेचने का दावा करता है, लेकिन वह एक किलो के लिए 960 ग्राम वजन का उपयोग करता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
        options: ["4%", "4.17%", "5%", "4.5%"],
        correct: "4.17%",
        category: "Medium"
      },
      {
        id: 21,
        topic: "Elementary Algebra",
        text: "If a² + b² + c² = ab + bc + ca, then which of the following is true?",
        textHindi: "यदि a² + b² + c² = ab + bc + ca है, तो निम्नलिखित में से कौन सा सत्य है?",
        options: ["a = b = c", "a + b = c", "a - b = c", "a² + b² = c²"],
        correct: "a = b = c",
        category: "Medium"
      },
      {
        id: 22,
        topic: "Geometry & Trigonometry",
        text: "A ladder 15 m long reaches a window which is 9 m above the ground on one side of a street. Keeping its foot at the same point, the ladder is turned to other side of street to reach a window 12 m high. Find the width of the street.",
        textHindi: "एक गली के एक तरफ 15 मीटर लंबी एक सीढ़ी जमीन से 9 मीटर ऊपर एक खिड़की तक पहुंचती है। अपने पैर को उसी बिंदु पर रखते हुए, सीढ़ी को गली के दूसरी तरफ मोड़ा जाता है जिससे वह 12 मीटर ऊंची खिड़की तक पहुंचती है। गली की चौड़ाई ज्ञात कीजिए।",
        options: ["21 m", "18 m", "15 m", "20 m"],
        correct: "21 m",
        category: "Hard"
      },
      {
        id: 23,
        topic: "Elementary Statistics",
        text: "Find the median of the following set of numbers: 15, 35, 18, 26, 19, 25, 29, 31, 27.",
        textHindi: "संख्याओं के निम्नलिखित सेट की माध्यिका (median) ज्ञात कीजिए: 15, 35, 18, 26, 19, 25, 29, 31, 27।",
        options: ["25", "26", "27", "29"],
        correct: "26",
        category: "Medium"
      },
      {
        id: 24,
        topic: "Mensuration",
        text: "A copper sphere of diameter 18 cm is melted and drawn into a wire of uniform cross-section. If the length of the wire is 108 m, find its diameter.",
        textHindi: "18 सेमी व्यास वाले एक तांबे के गोले को पिघलाकर समान क्रॉस-सेक्शन के तार में खींचा जाता है। यदि तार की लंबाई 108 मीटर है, तो इसका व्यास ज्ञात कीजिए।",
        options: ["0.6 cm", "0.4 cm", "0.3 cm", "0.2 cm"],
        correct: "0.6 cm",
        category: "Hard"
      },
      {
        id: 25,
        topic: "Simple & Compound Interest",
        text: "At what rate percent per annum simple interest will a sum of money double itself in 8 years?",
        textHindi: "किस साधारण ब्याज की वार्षिक दर पर कोई धनराशि 8 वर्षों में स्वयं की दोगुनी हो जाएगी?",
        options: ["12.5%", "10%", "15%", "8%"],
        correct: "12.5%",
        category: "Easy"
      },
      {
        id: 26,
        topic: "Number System",
        text: "What is the sum of the first 15 odd natural numbers?",
        textHindi: "प्रथम 15 विषम प्राकृतिक संख्याओं का योग क्या है?",
        options: ["225", "210", "240", "196"],
        correct: "225",
        category: "Easy"
      },
      {
        id: 27,
        topic: "Decimals & Fractions",
        text: "Which of the following fractions is the largest: 5/6, 7/9, 11/15, 3/4?",
        textHindi: "निम्नलिखित में से कौन सी भिन्न सबसे बड़ी है: 5/6, 7/9, 11/15, 3/4?",
        options: ["5/6", "7/9", "11/15", "3/4"],
        correct: "5/6",
        category: "Easy"
      },
      {
        id: 28,
        topic: "Elementary Algebra",
        text: "Find the roots of the quadratic equation x² - 7x + 12 = 0.",
        textHindi: "द्विघात समीकरण x² - 7x + 12 = 0 के मूल (roots) ज्ञात कीजिए।",
        options: ["3, 4", "-3, -4", "2, 6", "1, 12"],
        correct: "3, 4",
        category: "Easy"
      },
      {
        id: 29,
        topic: "Geometry & Trigonometry",
        text: "In a right-angled triangle ABC, right-angled at B, if tan A = 1, find the value of 2 sin A cos A.",
        textHindi: "एक समकोण त्रिभुज ABC में, जिसका कोण B समकोण है, यदि tan A = 1 है, तो 2 sin A cos A का मान ज्ञात कीजिए।",
        options: ["1", "1/2", "2", "√2"],
        correct: "1",
        category: "Medium"
      },
      {
        id: 30,
        topic: "Elementary Statistics",
        text: "If the mode of a distribution is 18 and the mean is 24, find its median using empirical relation.",
        textHindi: "यदि किसी वितरण का बहुलक (mode) 18 है और माध्य (mean) 24 है, तो आनुभविक संबंध (empirical relation) का उपयोग करके इसकी माध्यिका (median) ज्ञात कीजिए।",
        options: ["22", "20", "21", "23"],
        correct: "22",
        category: "Medium"
      }
    ]
  },
  {
    id: 2,
    title: "RRB NTPC Mathematics Mock Test - 2",
    titleHindi: "आरआरबी एनटीपीसी गणित मॉक टेस्ट - 2",
    description: "30 Questions | 45 Minutes | Advance Bilingual Arithmetic Practice",
    descriptionHindi: "30 प्रश्न | 45 मिनट | उन्नत द्विभाषी अंकगणितीय अभ्यास",
    questions: [
      {
        id: 1,
        topic: "Number System",
        text: "What is the remainder when 2³¹ is divided by 5?",
        textHindi: "जब 2³¹ को 5 से विभाजित किया जाता है तो शेषफल क्या होता है?",
        options: ["1", "2", "3", "4"],
        correct: "3",
        category: "Hard"
      },
      {
        id: 2,
        topic: "Decimals & Fractions",
        text: "Arrange in descending order: 3/5, 4/7, 5/9, 2/3.",
        textHindi: "अवरोही क्रम (descending order) में व्यवस्थित करें: 3/5, 4/7, 5/9, 2/3।",
        options: ["2/3 > 3/5 > 4/7 > 5/9", "2/3 > 4/7 > 3/5 > 5/9", "5/9 > 4/7 > 3/5 > 2/3", "3/5 > 2/3 > 4/7 > 5/9"],
        correct: "2/3 > 3/5 > 4/7 > 5/9",
        category: "Medium"
      },
      {
        id: 3,
        topic: "LCM & HCF",
        text: "Find the greatest number of four digits which is exactly divisible by 15, 20, 25 and 30.",
        textHindi: "चार अंकों की वह सबसे बड़ी संख्या ज्ञात कीजिए जो 15, 20, 25 और 30 से पूरी तरह विभाज्य हो।",
        options: ["9900", "9600", "9800", "9750"],
        correct: "9900",
        category: "Medium"
      },
      {
        id: 4,
        topic: "Ratios & Proportions",
        text: "Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, then they are in the ratio 12 : 23. Find the smaller number.",
        textHindi: "दो संख्याएँ 3 : 5 के अनुपात में हैं। यदि प्रत्येक में से 9 घटा दिया जाए, तो वे 12 : 23 के अनुपात में हो जाती हैं। छोटी संख्या ज्ञात कीजिए।",
        options: ["27", "33", "49", "55"],
        correct: "33",
        category: "Medium"
      },
      {
        id: 5,
        topic: "Percentage",
        text: "Due to a 25% price reduction of sugar, a man can buy 5 kg more for ₹360. Find the reduced price of sugar per kg.",
        textHindi: "चीनी के मूल्य में 25% की कमी के कारण, एक व्यक्ति ₹360 में 5 किलो अधिक चीनी खरीद सकता है। चीनी का प्रति किलो घटा हुआ मूल्य ज्ञात कीजिए।",
        options: ["₹18", "₹20", "₹15", "₹16"],
        correct: "₹18",
        category: "Hard"
      },
      {
        id: 6,
        topic: "Mensuration",
        text: "If the radius of a cylinder is doubled and the height is halved, what is the ratio between the volume of new cylinder to old cylinder?",
        textHindi: "यदि एक बेलन की त्रिज्या दोगुनी कर दी जाए और ऊंचाई आधी कर दी जाए, तो नए बेलन के आयतन और पुराने बेलन के आयतन का अनुपात क्या होगा?",
        options: ["2 : 1", "1 : 2", "4 : 1", "1 : 4"],
        correct: "2 : 1",
        category: "Medium"
      },
      {
        id: 7,
        topic: "Time and Work",
        text: "12 men or 18 women can do a work in 14 days. In how many days can 8 men and 16 women do the same work?",
        textHindi: "12 पुरुष या 18 महिलाएं किसी काम को 14 दिनों में कर सकते हैं। 8 पुरुष और 16 महिलाएं उसी काम को कितने दिनों में कर सकते हैं?",
        options: ["9 days", "10 days", "8 days", "12 days"],
        correct: "9 days",
        category: "Medium"
      },
      {
        id: 8,
        topic: "Time and Distance",
        text: "A man covers 1/3 of his journey at a speed of 20 km/h, next 1/3 at 30 km/h and the remaining at 60 km/h. Find his average speed for the entire journey.",
        textHindi: "एक व्यक्ति अपनी यात्रा का 1/3 भाग 20 किमी/घंटा, अगला 1/3 भाग 30 किमी/घंटा और शेष 60 किमी/घंटा की गति से तय करता है। पूरी यात्रा के लिए उसकी औसत गति ज्ञात कीजिए।",
        options: ["30 km/h", "36 km/h", "40 km/h", "45 km/h"],
        correct: "30 km/h",
        category: "Hard"
      },
      {
        id: 9,
        topic: "Simple & Compound Interest",
        text: "A sum of money invested at compound interest doubles itself in 5 years. In how many years will it become 8 times of itself at the same rate?",
        textHindi: "चक्रवृद्धि ब्याज पर निवेश की गई कोई धनराशि 5 वर्षों में दोगुनी हो जाती है। समान दर पर वह कितने वर्षों में स्वयं की 8 गुनी हो जाएगी?",
        options: ["15 years", "20 years", "12 years", "10 years"],
        correct: "15 years",
        category: "Easy"
      },
      {
        id: 10,
        topic: "Profit and Loss",
        text: "By selling 33 meters of cloth, a shopkeeper gains the selling price of 11 meters of cloth. Find his gain percentage.",
        textHindi: "33 मीटर कपड़ा बेचने पर, एक दुकानदार को 11 मीटर कपड़े के विक्रय मूल्य के बराबर लाभ होता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
        options: ["50%", "33.33%", "25%", "20%"],
        correct: "50%",
        category: "Hard"
      },
      {
        id: 11,
        topic: "Elementary Algebra",
        text: "If a + b + c = 0, find the value of (a²/bc) + (b²/ca) + (c²/ab).",
        textHindi: "यदि a + b + c = 0 है, तो (a²/bc) + (b²/ca) + (c²/ab) का मान ज्ञात कीजिए।",
        options: ["3", "0", "1", "-3"],
        correct: "3",
        category: "Medium"
      },
      {
        id: 12,
        topic: "Geometry & Trigonometry",
        text: "A chord of length 16 cm is drawn in a circle of radius 10 cm. Find the distance of the chord from the center of the circle.",
        textHindi: "10 सेमी त्रिज्या वाले एक वृत्त में 16 सेमी लंबी जीवा खींची जाती है। वृत्त के केंद्र से जीवा की दूरी ज्ञात कीजिए।",
        options: ["6 cm", "8 cm", "5 cm", "4 cm"],
        correct: "6 cm",
        category: "Easy"
      },
      {
        id: 13,
        topic: "Elementary Statistics",
        text: "The mean of 10 observations is 25. If one observation 43 is replaced by 23, what will be the new mean?",
        textHindi: "10 प्रेक्षणों का माध्य 25 है। यदि एक प्रेक्षण 43 को 23 से बदल दिया जाता है, तो नया माध्य क्या होगा?",
        options: ["23", "24", "25", "26"],
        correct: "23",
        category: "Medium"
      },
      {
        id: 14,
        topic: "Number System",
        text: "Find the sum of all two-digit numbers divisible by 5.",
        textHindi: "5 से विभाज्य सभी दो अंकों की संख्याओं का योग ज्ञात कीजिए।",
        options: ["945", "950", "900", "985"],
        correct: "945",
        category: "Medium"
      },
      {
        id: 15,
        topic: "LCM & HCF",
        text: "Find the HCF of 2/3, 8/9, 16/81 and 10/27.",
        textHindi: "2/3, 8/9, 16/81 और 10/27 का म.स. (HCF) ज्ञात कीजिए।",
        options: ["2/81", "8/81", "2/9", "16/81"],
        correct: "2/81",
        category: "Easy"
      },
      {
        id: 16,
        topic: "Ratios & Proportions",
        text: "A bag contains ₹1, 50p and 25p coins in the ratio 5 : 6 : 8. If the total money in the bag is ₹210, find the number of 50p coins.",
        textHindi: "एक बैग में ₹1, 50 पैसे और 25 पैसे के सिक्के 5 : 6 : 8 के अनुपात में हैं। यदि बैग में कुल राशि ₹210 है, तो 50 पैसे के सिक्कों की संख्या ज्ञात कीजिए।",
        options: ["120", "150", "180", "100"],
        correct: "120",
        category: "Hard"
      },
      {
        id: 17,
        topic: "Percentage",
        text: "In an election between two candidates, one got 55% of the total valid votes. 20% of the votes were invalid. If the total number of votes was 7500, find the number of valid votes the other candidate got.",
        textHindi: "दो उम्मीदवारों के बीच एक चुनाव में, एक को कुल वैध मतों का 55% मिला। 20% मत अवैध घोषित किए गए। यदि कुल मतों की संख्या 7500 थी, तो दूसरे उम्मीदवार को मिले वैध मतों की संख्या ज्ञात कीजिए।",
        options: ["2700", "2900", "3000", "3100"],
        correct: "2700",
        category: "Hard"
      },
      {
        id: 18,
        topic: "Time and Work",
        text: "A can do a work in 15 days, B in 20 days and C in 30 days. They work together but A leaves after 3 days and B leaves 2 days before completion of work. In how many days was the work completed?",
        textHindi: "A किसी काम को 15 दिनों में, B 20 दिनों में और C 30 दिनों में कर सकता है। वे एक साथ काम करते हैं लेकिन A 3 दिनों के बाद काम छोड़ देता है और B काम पूरा होने से 2 दिन पहले काम छोड़ देता है। काम कितने दिनों में पूरा हुआ?",
        options: ["10 days", "9 days", "11 days", "12 days"],
        correct: "10 days",
        category: "Hard"
      },
      {
        id: 19,
        topic: "Time and Distance",
        text: "Without stoppages, the speed of a train is 60 km/h, and with stoppages, it is 45 km/h. For how many minutes per hour does the train stop?",
        textHindi: "बिना रुके एक ट्रेन की गति 60 किमी/घंटा है, और रुकने के साथ इसकी गति 45 किमी/घंटा है। ट्रेन प्रति घंटे कितने मिनट के लिए रुकती है?",
        options: ["15 minutes", "12 minutes", "10 minutes", "20 minutes"],
        correct: "15 minutes",
        category: "Medium"
      },
      {
        id: 20,
        topic: "Profit and Loss",
        text: "A shopkeeper marks his goods 20% above the cost price and allows a discount of 10% on the marked price. Find his gain percentage.",
        textHindi: "एक दुकानदार अपने माल पर क्रय मूल्य से 20% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 10% की छूट देता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
        options: ["8%", "10%", "12%", "6%"],
        correct: "8%",
        category: "Easy"
      },
      {
        id: 21,
        topic: "Elementary Algebra",
        text: "Find the sum of the solutions of the equation |x - 3| = 5.",
        textHindi: "समीकरण |x - 3| = 5 के हलों का योग ज्ञात कीजिए।",
        options: ["6", "8", "0", "-2"],
        correct: "6",
        category: "Medium"
      },
      {
        id: 22,
        topic: "Geometry & Trigonometry",
        text: "Find the value of sec² 30° + cosec² 30° - cot² 30°.",
        textHindi: "sec² 30° + cosec² 30° - cot² 30° का मान ज्ञात कीजिए।",
        options: ["7/3", "4/3", "2", "3"],
        correct: "7/3",
        category: "Medium"
      },
      {
        id: 23,
        topic: "Elementary Statistics",
        text: "What is the relation between Mean, Median and Mode?",
        textHindi: "माध्य (Mean), माध्यिका (Median) और बहुलक (Mode) के बीच क्या संबंध है?",
        options: [
          "Mode = 3 Median - 2 Mean",
          "Median = 3 Mode - 2 Mean",
          "Mean = 3 Median - 2 Mode",
          "Mode = 3 Mean - 2 Median"
        ],
        correct: "Mode = 3 Median - 2 Mean",
        category: "Easy"
      },
      {
        id: 24,
        topic: "Mensuration",
        text: "If the surface area of a sphere is 616 sq.cm, find its radius. (Use π = 22/7)",
        textHindi: "यदि एक गोले का पृष्ठीय क्षेत्रफल 616 वर्ग सेमी है, तो उसकी त्रिज्या ज्ञात कीजिए। (π = 22/7 का प्रयोग करें)",
        options: ["7 cm", "14 cm", "3.5 cm", "10.5 cm"],
        correct: "7 cm",
        category: "Easy"
      },
      {
        id: 25,
        topic: "Simple & Compound Interest",
        text: "A sum of money amounts to ₹920 in 3 years and to ₹1040 in 4 years at simple interest. Find the sum.",
        textHindi: "साधारण ब्याज पर कोई धनराशि 3 वर्ष में ₹920 और 4 वर्ष में ₹1040 हो जाती है। वह धनराशि ज्ञात कीजिए।",
        options: ["₹560", "₹600", "₹640", "₹700"],
        correct: "₹560",
        category: "Medium"
      },
      {
        id: 26,
        topic: "Number System",
        text: "The sum of a two-digit number and the number obtained by reversing its digits is 121. The difference between the digits is 3. Find the number.",
        textHindi: "दो अंकों की एक संख्या और उसके अंकों को उलटने पर प्राप्त संख्या का योग 121 है। अंकों के बीच का अंतर 3 है। संख्या ज्ञात कीजिए।",
        options: ["74", "85", "47", "दोनों A और C"],
        correct: "दोनों A और C",
        category: "Hard"
      },
      {
        id: 27,
        topic: "Decimals & Fractions",
        text: "Convert 0.2343434... into a fraction.",
        textHindi: "0.2343434... को एक भिन्न में बदलें।",
        options: ["232/990", "234/990", "232/900", "234/900"],
        correct: "232/990",
        category: "Medium"
      },
      {
        id: 28,
        topic: "Elementary Algebra",
        text: "For what value of k, the system of equations 2x + 3y = 7 and kx + 9y = 15 has no solution?",
        textHindi: "k के किस मान के लिए, समीकरण प्रणाली 2x + 3y = 7 और kx + 9y = 15 का कोई हल नहीं होगा?",
        options: ["6", "4", "2", "3"],
        correct: "6",
        category: "Medium"
      },
      {
        id: 29,
        topic: "Geometry & Trigonometry",
        text: "If A + B = 90°, find the value of (tan A tan B + tan A cot B) / (sin A sec B) - (sin² B) / (cos² A).",
        textHindi: "यदि A + B = 90° है, तो (tan A tan B + tan A cot B) / (sin A sec B) - (sin² B) / (cos² A) का मान ज्ञात कीजिए।",
        options: ["1", "0", "tan A", "cot B"],
        correct: "1",
        category: "Hard"
      },
      {
        id: 30,
        topic: "Elementary Statistics",
        text: "Find the mean deviation about mean for the data: 3, 8, 4, 10, 6, 2.",
        textHindi: "आंकड़ों 3, 8, 4, 10, 6, 2 के लिए माध्य के सापेक्ष माध्य विचलन (mean deviation) ज्ञात कीजिए।",
        options: ["2.33", "2.5", "3.0", "2.67"],
        correct: "2.33",
        category: "Hard"
      }
    ]
  },
  {
    id: 3,
    title: "RRB NTPC Mathematics Mock Test - 3",
    titleHindi: "आरआरबी एनटीपीसी गणित मॉक टेस्ट - 3",
    description: "30 Questions | 45 Minutes | Advanced Level Math Drill",
    descriptionHindi: "30 प्रश्न | 45 मिनट | उन्नत स्तर गणित ड्रिल",
    questions: [
      {
        id: 1,
        topic: "Number System",
        text: "Find the highest power of 5 in 120!.",
        textHindi: "120! में 5 की अधिकतम घात ज्ञात कीजिए।",
        options: ["24", "28", "26", "22"],
        correct: "28",
        category: "Medium"
      },
      {
        id: 2,
        topic: "Decimals & Fractions",
        text: "Find the value of 1/(1×3) + 1/(3×5) + 1/(5×7) + ... + 1/(19×21).",
        textHindi: "1/(1×3) + 1/(3×5) + 1/(5×7) + ... + 1/(19×21) का मान ज्ञात कीजिए।",
        options: ["10/21", "20/21", "5/21", "1"],
        correct: "10/21",
        category: "Hard"
      },
      {
        id: 3,
        topic: "LCM & HCF",
        text: "The ratio of two numbers is 4 : 5 and their HCF is 6. Find their LCM.",
        textHindi: "दो संख्याओं का अनुपात 4 : 5 है और उनका म.स. (HCF) 6 है। उनका ल.स. (LCM) ज्ञात कीजिए।",
        options: ["120", "60", "24", "30"],
        correct: "120",
        category: "Easy"
      },
      {
        id: 4,
        topic: "Ratios & Proportions",
        text: "Find the mean proportional between 0.08 and 0.18.",
        textHindi: "0.08 और 0.18 के बीच मध्यानुपाती (mean proportional) ज्ञात कीजिए।",
        options: ["0.12", "0.15", "0.012", "0.14"],
        correct: "0.12",
        category: "Easy"
      },
      {
        id: 5,
        topic: "Percentage",
        text: "A student has to secure 40% marks to pass an exam. If he gets 178 marks and fails by 22 marks, find the maximum marks.",
        textHindi: "एक छात्र को एक परीक्षा पास करने के लिए 40% अंक प्राप्त करने होते हैं। यदि वह 178 अंक प्राप्त करता है और 22 अंकों से अनुत्तीर्ण हो जाता है, तो अधिकतम अंक ज्ञात कीजिए।",
        options: ["500", "600", "400", "450"],
        correct: "500",
        category: "Easy"
      },
      {
        id: 6,
        topic: "Mensuration",
        text: "If the area of a circle is equal to the area of a square, find the ratio of their perimeters.",
        textHindi: "यदि एक वृत्त का क्षेत्रफल एक वर्ग के क्षेत्रफल के बराबर है, तो उनके परिमापों का अनुपात ज्ञात कीजिए।",
        options: ["√π : 2", "π : 2", "2 : √π", "√π : √2"],
        correct: "√π : 2",
        category: "Hard"
      },
      {
        id: 7,
        topic: "Time and Work",
        text: "A, B and C can complete a work in 10, 12 and 15 days respectively. They started working together, but A left 2 days after start of work and B left 3 days before completion of work. How long did the work last?",
        textHindi: "A, B और C क्रमशः 10, 12 और 15 दिनों में एक काम पूरा कर सकते हैं। उन्होंने एक साथ काम करना शुरू किया, लेकिन A ने काम शुरू होने के 2 दिन बाद छोड़ दिया और B ने काम पूरा होने से 3 दिन पहले छोड़ दिया। काम कितने दिनों तक चला?",
        options: ["5.8 days", "6 days", "5 days", "7 days"],
        correct: "5.8 days",
        category: "Hard"
      },
      {
        id: 8,
        topic: "Time and Distance",
        text: "Excluding stoppages, the speed of a bus is 54 km/h, and including stoppages, it is 45 km/h. For how many minutes does the bus stop per hour?",
        textHindi: "स्टॉपेज को छोड़कर, एक बस की गति 54 किमी/घंटा है, और स्टॉपेज सहित यह 45 किमी/घंटा है। बस प्रति घंटे कितने मिनट रुकती है?",
        options: ["10 minutes", "12 minutes", "15 minutes", "8 minutes"],
        correct: "10 minutes",
        category: "Easy"
      },
      {
        id: 9,
        topic: "Simple & Compound Interest",
        text: "A sum of money at compound interest amounts to ₹4840 in 2 years and to ₹5324 in 3 years. Find the rate of interest per annum.",
        textHindi: "चक्रवृद्धि ब्याज पर कोई धनराशि 2 वर्ष में ₹4840 और 3 वर्ष में ₹5324 हो जाती है। प्रति वर्ष ब्याज की दर ज्ञात कीजिए।",
        options: ["10%", "8%", "9%", "12%"],
        correct: "10%",
        category: "Medium"
      },
      {
        id: 10,
        topic: "Profit and Loss",
        text: "A man sold two items for ₹990 each, gaining 10% on one and losing 10% on the other. What is his net gain or loss percentage?",
        textHindi: "एक व्यक्ति ने दो वस्तुएं ₹990 प्रत्येक में बेचीं, एक पर 10% का लाभ और दूसरी पर 10% की हानि हुई। उसका शुद्ध लाभ या हानि प्रतिशत क्या है?",
        options: ["1% loss", "1% gain", "No loss no gain", "2% loss"],
        correct: "1% loss",
        category: "Medium"
      },
      {
        id: 11,
        topic: "Elementary Algebra",
        text: "Find the value of a³ + b³ + c³ - 3abc if a = 25, b = 27, c = 28.",
        textHindi: "यदि a = 25, b = 27, c = 28 है, तो a³ + b³ + c³ - 3abc का मान ज्ञात कीजिए।",
        options: ["560", "600", "570", "580"],
        correct: "560",
        category: "Hard"
      },
      {
        id: 12,
        topic: "Geometry & Trigonometry",
        text: "Find the value of (1 + tan θ + sec θ)(1 + cot θ - cosec θ).",
        textHindi: "(1 + tan θ + sec θ)(1 + cot θ - cosec θ) का मान ज्ञात कीजिए।",
        options: ["2", "1", "0", "-1"],
        correct: "2",
        category: "Medium"
      },
      {
        id: 13,
        topic: "Elementary Statistics",
        text: "Find the mean of the first 10 prime numbers.",
        textHindi: "प्रथम 10 अभाज्य संख्याओं का माध्य ज्ञात कीजिए।",
        options: ["12.9", "12.0", "11.9", "13.1"],
        correct: "12.9",
        category: "Easy"
      },
      {
        id: 14,
        topic: "Number System",
        text: "How many zero factors are there at the end of 50! (factorial 50)?",
        textHindi: "50! (फैक्टोरियल 50) के अंत में शून्य कारकों (zeros) की संख्या कितनी है?",
        options: ["12", "10", "11", "9"],
        correct: "12",
        category: "Easy"
      },
      {
        id: 15,
        topic: "LCM & HCF",
        text: "Find the least number which when divided by 12, 15, 20 and 54 leaves a remainder of 4 in each case.",
        textHindi: "वह छोटी से छोटी संख्या ज्ञात कीजिए जिसे 12, 15, 20 और 54 से विभाजित करने पर प्रत्येक स्थिति में 4 शेष बचे।",
        options: ["544", "540", "536", "560"],
        correct: "544",
        category: "Medium"
      },
      {
        id: 16,
        topic: "Ratios & Proportions",
        text: "The ratio of milk and water in a 40-liter mixture is 3 : 1. How much water should be added to make the ratio 1 : 3?",
        textHindi: "40 लीटर के मिश्रण में दूध और पानी का अनुपात 3 : 1 है। अनुपात को 1 : 3 बनाने के लिए कितना पानी और मिलाया जाना चाहिए?",
        options: ["80 liters", "60 liters", "40 liters", "50 liters"],
        correct: "80 liters",
        category: "Medium"
      },
      {
        id: 17,
        topic: "Percentage",
        text: "In a library, 20% of books are in Hindi, 50% of the remaining are in English and 30% of the remaining are in French. If the remaining 6300 books are in regional languages, find the total books.",
        textHindi: "एक पुस्तकालय में, 20% पुस्तकें हिंदी में हैं, शेष का 50% अंग्रेजी में और शेष का 30% फ्रेंच में हैं। यदि शेष 6300 पुस्तकें क्षेत्रीय भाषाओं में हैं, तो कुल पुस्तकें ज्ञात कीजिए।",
        options: ["22500", "20000", "25000", "30000"],
        correct: "22500",
        category: "Hard"
      },
      {
        id: 18,
        topic: "Time and Work",
        text: "A can build a wall in 30 days while B can destroy it in 40 days. If they work on alternate days starting with A on day 1, in how many days will the wall be completed?",
        textHindi: "A एक दीवार को 30 दिनों में बना सकता है जबकि B उसे 40 दिनों में नष्ट कर सकता है। यदि वे वैकल्पिक दिनों (alternate days) में काम करते हैं और पहले दिन A काम शुरू करता है, तो दीवार कितने दिनों में पूरी होगी?",
        options: ["233 days", "240 days", "235 days", "120 days"],
        correct: "233 days",
        category: "Hard"
      },
      {
        id: 19,
        topic: "Time and Distance",
        text: "A man goes from town A to town B at 40 km/h and returns at 60 km/h. Find his average speed.",
        textHindi: "एक व्यक्ति शहर A से शहर B तक 40 किमी/घंटा की गति से जाता है और 60 किमी/घंटा की गति से वापस आता है। उसकी औसत गति ज्ञात कीजिए।",
        options: ["48 km/h", "50 km/h", "45 km/h", "52 km/h"],
        correct: "48 km/h",
        category: "Easy"
      },
      {
        id: 20,
        topic: "Profit and Loss",
        text: "A shopkeeper buys an article for ₹360 and wishes to sell it at 20% profit. What should be marked price if he allows 10% discount?",
        textHindi: "एक दुकानदार ₹360 में एक वस्तु खरीदता है और 20% लाभ पर बेचना चाहता है। यदि वह 10% की छूट देता है, तो अंकित मूल्य (marked price) क्या होना चाहिए?",
        options: ["₹480", "₹450", "₹432", "₹500"],
        correct: "₹480",
        category: "Medium"
      },
      {
        id: 21,
        topic: "Elementary Algebra",
        text: "Find the value of k if x - 2 is a factor of x³ - 3x² + kx - 8.",
        textHindi: "यदि x - 2, x³ - 3x² + kx - 8 का एक गुणनखंड है, तो k का मान ज्ञात कीजिए।",
        options: ["6", "5", "4", "2"],
        correct: "6",
        category: "Medium"
      },
      {
        id: 22,
        topic: "Geometry & Trigonometry",
        text: "A right triangle ABC has sides AB = 6 cm, BC = 8 cm and AC = 10 cm. Find the radius of its circumcircle.",
        textHindi: "एक समकोण त्रिभुज ABC की भुजाएँ AB = 6 सेमी, BC = 8 सेमी और AC = 10 सेमी हैं। इसके परिवृत्त (circumcircle) की त्रिज्या ज्ञात कीजिए।",
        options: ["5 cm", "4 cm", "3 cm", "6 cm"],
        correct: "5 cm",
        category: "Easy"
      },
      {
        id: 23,
        topic: "Elementary Statistics",
        text: "Find the variance of first 5 natural numbers.",
        textHindi: "प्रथम 5 प्राकृतिक संख्याओं का प्रसरण (variance) ज्ञात कीजिए।",
        options: ["2", "1.5", "2.5", "3"],
        correct: "2",
        category: "Hard"
      },
      {
        id: 24,
        topic: "Mensuration",
        text: "If the radius of a sphere is increased by 10%, find the percentage increase in its volume.",
        textHindi: "यदि किसी गोले की त्रिज्या में 10% की वृद्धि की जाती है, तो उसके आयतन में कितने प्रतिशत की वृद्धि होगी?",
        options: ["33.1%", "30%", "21%", "40%"],
        correct: "33.1%",
        category: "Medium"
      },
      {
        id: 25,
        topic: "Simple & Compound Interest",
        text: "Find the compound interest on ₹10000 at 10% per annum for 1.5 years, compound interest being interest semi-annually.",
        textHindi: "₹10000 पर 10% वार्षिक दर से 1.5 वर्ष का चक्रवृद्धि ब्याज ज्ञात कीजिए, जबकि ब्याज अर्धवार्षिक रूप से संयोजित होता है।",
        options: ["₹1576.25", "₹1500", "₹1600", "₹1550"],
        correct: "₹1576.25",
        category: "Hard"
      },
      {
        id: 26,
        topic: "Number System",
        text: "Simplify: (999 995/999) × 999.",
        textHindi: "सरल करें: (999 995/999) × 999।",
        options: ["998996", "999996", "998999", "999999"],
        correct: "998996",
        category: "Hard"
      },
      {
        id: 27,
        topic: "Decimals & Fractions",
        text: "Convert 0.57̅ into a fraction.",
        textHindi: "0.57̅ को एक भिन्न में बदलें।",
        options: ["26/45", "57/99", "57/90", "28/45"],
        correct: "26/45",
        category: "Medium"
      },
      {
        id: 28,
        topic: "Elementary Algebra",
        text: "Solve for x: log₂ (x + 2) + log₂ (x - 2) = 5.",
        textHindi: "x के लिए हल करें: log₂ (x + 2) + log₂ (x - 2) = 5।",
        options: ["6", "5", "4", "8"],
        correct: "6",
        category: "Hard"
      },
      {
        id: 29,
        topic: "Geometry & Trigonometry",
        text: "The angle of elevation of the top of a tower from a point on the ground 30 m away from its foot is 30°. Find the height of the tower.",
        textHindi: "एक मीनार के पाद से 30 मीटर की दूरी पर जमीन पर एक बिंदु से मीनार के शिखर का उन्नयन कोण 30° है। मीनार की ऊंचाई ज्ञात कीजिए।",
        options: ["10√3 m", "30√3 m", "15 m", "20 m"],
        correct: "10√3 m",
        category: "Medium"
      },
      {
        id: 30,
        topic: "Elementary Statistics",
        text: "Find the mean of the squared values of the first 5 natural numbers.",
        textHindi: "प्रथम 5 प्राकृतिक संख्याओं के वर्गों का माध्य ज्ञात कीजिए।",
        options: ["11", "12", "13", "14"],
        correct: "11",
        category: "Easy"
      }
    ]
  }
];

export default function RrbNtpcMathTest() {
  const [activeTestId, setActiveTestId] = useState<number | null>(null);
  const [currentQNo, setCurrentQNo] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('hi');

  const activeTest = mockTestsData.find(t => t.id === activeTestId);

  useEffect(() => {
    if (activeTestId === null || isSubmitted) return;
    if (timeLeft <= 0) {
      setIsSubmitted(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, activeTestId, isSubmitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartTest = (id: number) => {
    setActiveTestId(id);
    setCurrentQNo(1);
    setAnswers({});
    setTimeLeft(2700);
    setIsSubmitted(false);
  };

  const handleRetake = () => {
    setAnswers({});
    setIsSubmitted(false);
    setCurrentQNo(1);
    setTimeLeft(2700);
  };

  const calculateScore = () => {
    if (!activeTest) return 0;
    let score = 0;
    activeTest.questions.forEach(q => {
      if (answers[q.id] === q.correct) score++;
    });
    return score;
  };

  if (activeTestId === null) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-fadeIn">
        <div className="flex items-center gap-3 mb-10">
          <Link href="/exams/rrb-ntpc" className="p-2 rounded-xl bg-slate-800 border border-white/5 hover:border-sky-500/30 text-sky-400 hover:text-sky-300 transition-all flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">RRB NTPC CBT Series</span>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mt-1">
              Mathematics Mock Test Dashboard (गणित मॉक टेस्ट)
            </h1>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTestsData.map((test) => (
            <div key={test.id} className="bg-[#070b12] border border-white/5 rounded-3xl p-6 hover:border-sky-500/35 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-[30px]" />
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase">
                  Test {test.id}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mt-3 group-hover:text-sky-400 transition-colors">
                  {test.title}
                </h3>
                <h4 className="text-xs text-sky-500/80 font-semibold mb-3">
                  {test.titleHindi}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-1">
                  {test.description}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {test.descriptionHindi}
                </p>
              </div>
              <button 
                onClick={() => handleStartTest(test.id)}
                className="w-full py-2.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-[1.02] active:scale-[0.98] text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(14,165,233,0.2)] cursor-pointer"
              >
                Start Test Series (टेस्ट शुरू करें) <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTest && isSubmitted) {
    const score = calculateScore();
    const totalQCount = activeTest.questions.length;
    const pct = ((score / totalQCount) * 100).toFixed(1);

    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-fadeIn">
        <div className="bg-[#070b12] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-50 text-center mb-1">Test Results (परिणाम)</h2>
          <p className="text-slate-400 text-center text-sm mb-8">{activeTest.title} / {activeTest.titleHindi}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Score (स्कोर)</span>
              <div className="text-2xl font-black text-emerald-400 mt-1">{score} / {totalQCount}</div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Accuracy (सटीकता)</span>
              <div className="text-2xl font-black text-sky-400 mt-1">{pct}%</div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Attempted (प्रयास किए गए)</span>
              <div className="text-2xl font-black text-amber-400 mt-1">{Object.keys(answers).length}</div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Status (स्थिति)</span>
              <div className="text-xl font-bold text-slate-200 mt-2">{parseFloat(pct) >= 60 ? "Qualified (योग्य)" : "Need Practice"}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button 
              onClick={handleRetake}
              className="px-6 py-3 bg-slate-800 border border-white/5 text-slate-350 hover:bg-slate-700 hover:text-white font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" /> Retake Test (पुनः प्रयास करें)
            </button>
            <button 
              onClick={() => setActiveTestId(null)}
              className="px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-sky-500/25 cursor-pointer"
            >
              Back to Dashboard (डैशबोर्ड पर जाएं)
            </button>
          </div>

          {/* Answer Key Review */}
          <div className="border-t border-white/5 pt-8">
            <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-sky-400" /> Answer Key & Explanations (उत्तर कुंजी और विश्लेषण)
            </h3>
            
            <div className="space-y-6">
              {activeTest.questions.map((q, idx) => {
                const isCorrect = answers[q.id] === q.correct;
                const isAttempted = !!answers[q.id];

                return (
                  <div key={q.id} className={`p-6 rounded-2xl border ${isCorrect ? 'bg-emerald-950/15 border-emerald-500/20' : isAttempted ? 'bg-red-950/15 border-red-500/20' : 'bg-slate-900/30 border-white/5'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-white/5">
                        Q{idx+1} | {q.topic}
                      </span>
                      {isCorrect ? (
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">✓ Correct (सही)</span>
                      ) : isAttempted ? (
                        <span className="text-xs font-bold text-red-400 flex items-center gap-1">✗ Incorrect (गलत)</span>
                      ) : (
                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1">Unattempted (बिना प्रयास)</span>
                      )}
                    </div>

                    <p className="text-slate-200 text-base font-semibold mb-1">{q.text}</p>
                    <p className="text-sky-300/80 text-sm mb-4 font-medium">{q.textHindi}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {q.options.map((opt, oIdx) => {
                        const isCorrectOpt = opt === q.correct;
                        const isChosenOpt = opt === answers[q.id];
                        let optStyle = "p-3 rounded-xl border text-sm flex items-center justify-between ";

                        if (isCorrectOpt) {
                          optStyle += "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-semibold";
                        } else if (isChosenOpt) {
                          optStyle += "bg-red-500/10 border-red-500/40 text-red-300";
                        } else {
                          optStyle += "bg-slate-900/40 border-white/5 text-slate-400";
                        }

                        return (
                          <div key={oIdx} className={optStyle}>
                            <span>{String.fromCharCode(65+oIdx)}. {opt}</span>
                            {isCorrectOpt && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase">Correct</span>}
                            {!isCorrectOpt && isChosenOpt && <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold uppercase">Your Choice</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTest) {
    const currentQuestion = activeTest.questions[currentQNo - 1];
    const totalQCount = activeTest.questions.length;
    const isSelected = !!answers[currentQuestion.id];

    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#070b12]/80 border border-white/5 rounded-2xl p-4 sticky top-16 z-30 backdrop-blur-lg shadow-2xl">
          <div>
            <h1 className="text-lg font-bold text-slate-100">{activeTest.title}</h1>
            <p className="text-xs text-sky-400 font-semibold">{activeTest.titleHindi}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Lang Switcher */}
            <div className="flex bg-slate-900 border border-white/5 rounded-xl p-1 text-xs font-bold">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${lang === 'en' ? 'bg-sky-500 text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('hi')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${lang === 'hi' ? 'bg-sky-500 text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}
              >
                हिंदी
              </button>
            </div>

            {/* Timer */}
            <div className={`px-4 py-2 rounded-xl border font-mono text-sm md:text-base font-extrabold flex items-center gap-1.5 ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-sky-500/10 border-sky-500/20 text-sky-400'}`}>
              <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'animate-pulse text-red-400' : 'text-sky-400'}`} /> {formatTime(timeLeft)}
            </div>

            {/* Submit */}
            <button 
              onClick={() => {
                if (confirm("Are you sure you want to finish and submit the test?")) {
                  setIsSubmitted(true);
                }
              }}
              className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all shadow-[0_0_12px_rgba(239,68,68,0.25)] cursor-pointer"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          
          {/* Question Panel */}
          <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
              <span className="text-xs font-bold px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full">
                Question {currentQNo} of {totalQCount} | {currentQuestion.topic}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${currentQuestion.category === 'Hard' ? 'bg-red-500/10 border-red-500/20 text-red-400' : currentQuestion.category === 'Medium' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                {currentQuestion.category}
              </span>
            </div>

            {/* Text rendering based on language choice */}
            <div className="text-lg md:text-xl font-bold leading-relaxed mb-6 text-slate-100">
              {lang === 'en' ? currentQuestion.text : currentQuestion.textHindi}
            </div>

            {/* Radio Options */}
            <div className="grid gap-3.5 mt-8">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = answers[currentQuestion.id] === opt;
                return (
                  <label 
                    key={idx} 
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer group select-none ${isSelected ? 'border-sky-500/40 bg-sky-500/5 text-sky-300 font-semibold' : 'border-white/5 bg-slate-900/30 text-slate-350 hover:border-white/10 hover:bg-slate-900/50'}`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-sky-400 bg-sky-500/20 text-sky-300' : 'border-slate-500 group-hover:border-sky-400'}`}>
                      {isSelected && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div>}
                    </div>
                    <input 
                      type="radio" 
                      name={`q_${currentQuestion.id}`} 
                      value={opt} 
                      className="hidden"
                      checked={isSelected}
                      onChange={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: opt }))}
                    />
                    <span className="text-sm md:text-base">
                      <span className="font-bold text-slate-500 mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Bottom Nav Controls */}
            <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
              <button 
                onClick={() => setCurrentQNo(prev => prev - 1)}
                disabled={currentQNo === 1}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button 
                onClick={() => {
                  if (currentQNo < totalQCount) {
                    setCurrentQNo(prev => prev + 1);
                  }
                }}
                disabled={currentQNo === totalQCount}
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2 shadow-[0_0_12px_rgba(14,165,233,0.25)] cursor-pointer"
              >
                Save & Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Question Palette */}
          <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 sticky top-48 shadow-2xl">
            <h3 className="m-0 mb-4 text-base font-bold text-slate-100 flex items-center gap-2 border-b border-white/5 pb-3">
              <HelpCircle className="w-4 h-4 text-sky-400" /> Question Palette
            </h3>
            
            <div className="flex flex-col gap-2.5 mb-6 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div> Answered
                </div>
                <span className="font-mono text-slate-300 font-bold">{Object.keys(answers).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div> Unanswered
                </div>
                <span className="font-mono text-slate-300 font-bold">{totalQCount - Object.keys(answers).length}</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {activeTest.questions.map((q) => {
                const isAnswered = !!answers[q.id];
                const isActive = currentQNo === q.id;
                
                let btnClass = "w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold cursor-pointer transition-all border ";
                if (isActive) {
                  btnClass += "border-sky-450 bg-sky-500/20 text-sky-300 scale-105 shadow-[0_0_8px_rgba(14,165,233,0.2)]";
                } else if (isAnswered) {
                  btnClass += "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20";
                } else {
                  btnClass += "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-300";
                }

                return (
                  <div 
                    key={q.id} 
                    onClick={() => setCurrentQNo(q.id)}
                    className={btnClass}
                  >
                    {q.id}
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={() => {
                if (confirm("Are you sure you want to finish and submit the test?")) {
                  setIsSubmitted(true);
                }
              }}
              className="w-full mt-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Submit Entire Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
