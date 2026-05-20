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
    "id": 1,
    "title": "RRB NTPC Reasoning Mock Test - 1",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 1",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 1",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 1",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Doctor : Hospital :: Teacher : ?",
        "textHindi": "चिकित्सक : अस्पताल :: शिक्षक : ?",
        "options": [
          "Hospital",
          "Sky",
          "School",
          "Water"
        ],
        "correct": "School",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 5, 8, 11, 14, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 5, 8, 11, 14, ?",
        "options": [
          "17",
          "15",
          "20",
          "34"
        ],
        "correct": "17",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'EQNF', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'EQNF' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "JGCV"
        ],
        "correct": "JGCV",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 10 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 10 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "52",
          "42",
          "57",
          "13"
        ],
        "correct": "52",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Potato, Carrot, Ginger, Tomato.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: आलू, गाजर, अदरक, टमाटर.",
        "options": [
          "Tomato",
          "Potato",
          "Carrot",
          "Ginger"
        ],
        "correct": "Tomato",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 32 students, Ramesh ranks 11th from the top. What is his rank from the bottom?",
        "textHindi": "32 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 11वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "22",
          "21",
          "23",
          "24"
        ],
        "correct": "22",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: D, G, J, M, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: D, G, J, M, ?",
        "options": [
          "P",
          "O",
          "Q",
          "R"
        ],
        "correct": "P",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'DOG' is coded as '26', then how will 'RAT' be coded?",
        "textHindi": "यदि 'DOG' को '26' लिखा जाता है, तो 'RAT' को क्या लिखा जाएगा?",
        "options": [
          "39",
          "42",
          "20",
          "30"
        ],
        "correct": "39",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 4 days?",
        "textHindi": "यदि आज सोमवार है, तो 4 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Sunday (रविवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)",
          "Tuesday (मंगलवार)"
        ],
        "correct": "Friday (शुक्रवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 4:00?",
        "textHindi": "घड़ी में 4:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "120°",
          "150°",
          "180°"
        ],
        "correct": "120°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 6, 12, 20, 30, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 6, 12, 20, 30, ?",
        "options": [
          "42",
          "38",
          "48",
          "84"
        ],
        "correct": "42",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A1Z, B2Y, C3X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A1Z, B2Y, C3X, ?",
        "options": [
          "D4W",
          "D3W",
          "E4V",
          "D4V"
        ],
        "correct": "D4W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 2,
    "title": "RRB NTPC Reasoning Mock Test - 2",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 2",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 2",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 2",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Pen : Write :: Knife : ?",
        "textHindi": "कलम : लिखना :: चाकू : ?",
        "options": [
          "Cut",
          "Sky",
          "Write",
          "Water"
        ],
        "correct": "Cut",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 10, 14, 18, 22, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 10, 14, 18, 22, ?",
        "options": [
          "26",
          "24",
          "29",
          "52"
        ],
        "correct": "26",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'FROG', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'FROG' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "KHDW"
        ],
        "correct": "KHDW",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 20 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 20 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "102",
          "92",
          "107",
          "23"
        ],
        "correct": "102",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: January, March, May, June.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: जनवरी, मार्च, मई, जून.",
        "options": [
          "June",
          "January",
          "March",
          "May"
        ],
        "correct": "June",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 34 students, Ramesh ranks 12th from the top. What is his rank from the bottom?",
        "textHindi": "34 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 12वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "23",
          "22",
          "24",
          "25"
        ],
        "correct": "23",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: G, J, M, P, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: G, J, M, P, ?",
        "options": [
          "S",
          "R",
          "T",
          "U"
        ],
        "correct": "S",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'RAT' is coded as '39', then how will 'MAT' be coded?",
        "textHindi": "यदि 'RAT' को '39' लिखा जाता है, तो 'MAT' को क्या लिखा जाएगा?",
        "options": [
          "42",
          "34",
          "20",
          "30"
        ],
        "correct": "34",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 5 days?",
        "textHindi": "यदि आज सोमवार है, तो 5 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Saturday (शनिवार)",
          "Sunday (रविवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)"
        ],
        "correct": "Saturday (शनिवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 5:00?",
        "textHindi": "घड़ी में 5:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "180°",
          "120°",
          "150°"
        ],
        "correct": "150°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 12, 20, 30, 42, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 12, 20, 30, 42, ?",
        "options": [
          "56",
          "52",
          "62",
          "112"
        ],
        "correct": "56",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A2Z, B3Y, C4X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A2Z, B3Y, C4X, ?",
        "options": [
          "D5W",
          "D4W",
          "E5V",
          "D5V"
        ],
        "correct": "D5W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 3,
    "title": "RRB NTPC Reasoning Mock Test - 3",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 3",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 3",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 3",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Bird : Fly :: Fish : ?",
        "textHindi": "पक्षी : उड़ना :: मछली : ?",
        "options": [
          "Sky",
          "Fly",
          "Water",
          "Swim"
        ],
        "correct": "Swim",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 15, 17, 19, 21, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 15, 17, 19, 21, ?",
        "options": [
          "23",
          "21",
          "26",
          "46"
        ],
        "correct": "23",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'DPME', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'DPME' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "XYZW"
        ],
        "correct": "IFBU",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 30 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 30 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "152",
          "142",
          "157",
          "33"
        ],
        "correct": "152",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Copper, Iron, Gold, Coal.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: तांबा, लोहा, सोना, कोयला.",
        "options": [
          "Coal",
          "Copper",
          "Iron",
          "Gold"
        ],
        "correct": "Coal",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 36 students, Ramesh ranks 13th from the top. What is his rank from the bottom?",
        "textHindi": "36 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 13वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "24",
          "23",
          "25",
          "26"
        ],
        "correct": "24",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: A, D, G, J, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: A, D, G, J, ?",
        "options": [
          "M",
          "L",
          "N",
          "O"
        ],
        "correct": "M",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'MAT' is coded as '34', then how will 'BAT' be coded?",
        "textHindi": "यदि 'MAT' को '34' लिखा जाता है, तो 'BAT' को क्या लिखा जाएगा?",
        "options": [
          "23",
          "42",
          "20",
          "30"
        ],
        "correct": "23",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 6 days?",
        "textHindi": "यदि आज सोमवार है, तो 6 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Friday (शुक्रवार)",
          "Monday (सोमवार)",
          "Sunday (रविवार)",
          "Tuesday (मंगलवार)"
        ],
        "correct": "Sunday (रविवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 6:00?",
        "textHindi": "घड़ी में 6:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "180°",
          "210°",
          "150°"
        ],
        "correct": "180°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 2, 6, 12, 20, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 2, 6, 12, 20, ?",
        "options": [
          "30",
          "26",
          "36",
          "60"
        ],
        "correct": "30",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A3Z, B4Y, C5X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A3Z, B4Y, C5X, ?",
        "options": [
          "D6W",
          "D5W",
          "E6V",
          "D6V"
        ],
        "correct": "D6W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 4,
    "title": "RRB NTPC Reasoning Mock Test - 4",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 4",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 4",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 4",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Lion : Den :: Horse : ?",
        "textHindi": "शेर : मांद :: घोड़ा : ?",
        "options": [
          "Stable",
          "Sky",
          "Den",
          "Water"
        ],
        "correct": "Stable",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 20, 23, 26, 29, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 20, 23, 26, 29, ?",
        "options": [
          "32",
          "30",
          "35",
          "64"
        ],
        "correct": "32",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'EQNF', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'EQNF' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "JGCV"
        ],
        "correct": "JGCV",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 40 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 40 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "202",
          "192",
          "207",
          "43"
        ],
        "correct": "202",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Circle, Triangle, Square, Sphere.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: वृत्त, त्रिभुज, वर्ग, गोला.",
        "options": [
          "Sphere",
          "Circle",
          "Triangle",
          "Square"
        ],
        "correct": "Sphere",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 38 students, Ramesh ranks 14th from the top. What is his rank from the bottom?",
        "textHindi": "38 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 14वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "25",
          "24",
          "26",
          "27"
        ],
        "correct": "25",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: D, G, J, M, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: D, G, J, M, ?",
        "options": [
          "P",
          "O",
          "Q",
          "R"
        ],
        "correct": "P",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'BAT' is coded as '23', then how will 'CAT' be coded?",
        "textHindi": "यदि 'BAT' को '23' लिखा जाता है, तो 'CAT' को क्या लिखा जाएगा?",
        "options": [
          "24",
          "42",
          "20",
          "30"
        ],
        "correct": "24",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 7 days?",
        "textHindi": "यदि आज सोमवार है, तो 7 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Sunday (रविवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)",
          "Tuesday (मंगलवार)"
        ],
        "correct": "Monday (सोमवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 3:00?",
        "textHindi": "घड़ी में 3:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "120°",
          "60°",
          "180°"
        ],
        "correct": "90°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 6, 12, 20, 30, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 6, 12, 20, 30, ?",
        "options": [
          "42",
          "38",
          "48",
          "84"
        ],
        "correct": "42",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A4Z, B5Y, C6X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A4Z, B5Y, C6X, ?",
        "options": [
          "D7W",
          "D6W",
          "E7V",
          "D7V"
        ],
        "correct": "D7W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 5,
    "title": "RRB NTPC Reasoning Mock Test - 5",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 5",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 5",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 5",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "India : New Delhi :: Japan : ?",
        "textHindi": "भारत : नई दिल्ली :: जापान : ?",
        "options": [
          "Sky",
          "New Delhi",
          "Tokyo",
          "Water"
        ],
        "correct": "Tokyo",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 25, 29, 33, 37, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 25, 29, 33, 37, ?",
        "options": [
          "41",
          "39",
          "44",
          "82"
        ],
        "correct": "41",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'FROG', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'FROG' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "KHDW"
        ],
        "correct": "KHDW",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 50 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 50 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "252",
          "242",
          "257",
          "53"
        ],
        "correct": "252",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Cow, Goat, Deer, Lion.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: गाय, बकरी, हिरण, शेर.",
        "options": [
          "Lion",
          "Cow",
          "Goat",
          "Deer"
        ],
        "correct": "Lion",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 40 students, Ramesh ranks 15th from the top. What is his rank from the bottom?",
        "textHindi": "40 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "26",
          "25",
          "27",
          "28"
        ],
        "correct": "26",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: G, J, M, P, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: G, J, M, P, ?",
        "options": [
          "S",
          "R",
          "T",
          "U"
        ],
        "correct": "S",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'CAT' is coded as '24', then how will 'DOG' be coded?",
        "textHindi": "यदि 'CAT' को '24' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?",
        "options": [
          "42",
          "26",
          "20",
          "30"
        ],
        "correct": "26",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 8 days?",
        "textHindi": "यदि आज सोमवार है, तो 8 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Sunday (रविवार)",
          "Tuesday (मंगलवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)"
        ],
        "correct": "Tuesday (मंगलवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 4:00?",
        "textHindi": "घड़ी में 4:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "120°",
          "150°",
          "180°"
        ],
        "correct": "120°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 12, 20, 30, 42, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 12, 20, 30, 42, ?",
        "options": [
          "56",
          "52",
          "62",
          "112"
        ],
        "correct": "56",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A5Z, B6Y, C7X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A5Z, B6Y, C7X, ?",
        "options": [
          "D8W",
          "D7W",
          "E8V",
          "D8V"
        ],
        "correct": "D8W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 6,
    "title": "RRB NTPC Reasoning Mock Test - 6",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 6",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 6",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 6",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Earth : Planet :: Moon : ?",
        "textHindi": "पृथ्वी : ग्रह :: चंद्रमा : ?",
        "options": [
          "Sky",
          "Planet",
          "Satellite",
          "Water"
        ],
        "correct": "Satellite",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 30, 32, 34, 36, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 30, 32, 34, 36, ?",
        "options": [
          "38",
          "36",
          "41",
          "76"
        ],
        "correct": "38",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'DPME', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'DPME' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "XYZW"
        ],
        "correct": "IFBU",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 60 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 60 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "302",
          "292",
          "307",
          "63"
        ],
        "correct": "302",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Potato, Carrot, Ginger, Tomato.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: आलू, गाजर, अदरक, टमाटर.",
        "options": [
          "Tomato",
          "Potato",
          "Carrot",
          "Ginger"
        ],
        "correct": "Tomato",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 42 students, Ramesh ranks 16th from the top. What is his rank from the bottom?",
        "textHindi": "42 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 16वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "27",
          "26",
          "28",
          "29"
        ],
        "correct": "27",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: A, D, G, J, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: A, D, G, J, ?",
        "options": [
          "M",
          "L",
          "N",
          "O"
        ],
        "correct": "M",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'DOG' is coded as '26', then how will 'RAT' be coded?",
        "textHindi": "यदि 'DOG' को '26' लिखा जाता है, तो 'RAT' को क्या लिखा जाएगा?",
        "options": [
          "39",
          "42",
          "20",
          "30"
        ],
        "correct": "39",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 9 days?",
        "textHindi": "यदि आज सोमवार है, तो 9 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Sunday (रविवार)",
          "Wednesday (बुधवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)"
        ],
        "correct": "Wednesday (बुधवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 5:00?",
        "textHindi": "घड़ी में 5:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "180°",
          "120°",
          "150°"
        ],
        "correct": "150°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 2, 6, 12, 20, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 2, 6, 12, 20, ?",
        "options": [
          "30",
          "26",
          "36",
          "60"
        ],
        "correct": "30",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A6Z, B7Y, C8X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A6Z, B7Y, C8X, ?",
        "options": [
          "D9W",
          "D8W",
          "E9V",
          "D9V"
        ],
        "correct": "D9W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 7,
    "title": "RRB NTPC Reasoning Mock Test - 7",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 7",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 7",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 7",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Thermometer : Temperature :: Barometer : ?",
        "textHindi": "थर्मामीटर : तापमान :: बैरोमीटर : ?",
        "options": [
          "Pressure",
          "Sky",
          "Water",
          "Temperature"
        ],
        "correct": "Pressure",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 35, 38, 41, 44, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 35, 38, 41, 44, ?",
        "options": [
          "47",
          "45",
          "50",
          "94"
        ],
        "correct": "47",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'EQNF', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'EQNF' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "JGCV"
        ],
        "correct": "JGCV",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 70 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 70 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "352",
          "342",
          "357",
          "73"
        ],
        "correct": "352",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: January, March, May, June.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: जनवरी, मार्च, मई, जून.",
        "options": [
          "June",
          "January",
          "March",
          "May"
        ],
        "correct": "June",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 44 students, Ramesh ranks 17th from the top. What is his rank from the bottom?",
        "textHindi": "44 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 17वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "28",
          "27",
          "29",
          "30"
        ],
        "correct": "28",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: D, G, J, M, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: D, G, J, M, ?",
        "options": [
          "P",
          "O",
          "Q",
          "R"
        ],
        "correct": "P",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'RAT' is coded as '39', then how will 'MAT' be coded?",
        "textHindi": "यदि 'RAT' को '39' लिखा जाता है, तो 'MAT' को क्या लिखा जाएगा?",
        "options": [
          "42",
          "34",
          "20",
          "30"
        ],
        "correct": "34",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 10 days?",
        "textHindi": "यदि आज सोमवार है, तो 10 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Friday (शुक्रवार)",
          "Sunday (रविवार)",
          "Monday (सोमवार)",
          "Thursday (गुरुवार)"
        ],
        "correct": "Thursday (गुरुवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 6:00?",
        "textHindi": "घड़ी में 6:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "180°",
          "210°",
          "150°"
        ],
        "correct": "180°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 6, 12, 20, 30, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 6, 12, 20, 30, ?",
        "options": [
          "42",
          "38",
          "48",
          "84"
        ],
        "correct": "42",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A7Z, B8Y, C9X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A7Z, B8Y, C9X, ?",
        "options": [
          "D10W",
          "D9W",
          "E10V",
          "D10V"
        ],
        "correct": "D10W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 8,
    "title": "RRB NTPC Reasoning Mock Test - 8",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 8",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 8",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 8",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Clock : Time :: Odometer : ?",
        "textHindi": "घड़ी : समय :: ओडोमीटर : ?",
        "options": [
          "Sky",
          "Time",
          "Water",
          "Speed"
        ],
        "correct": "Speed",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 40, 44, 48, 52, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 40, 44, 48, 52, ?",
        "options": [
          "56",
          "54",
          "59",
          "112"
        ],
        "correct": "56",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'FROG', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'FROG' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "KHDW"
        ],
        "correct": "KHDW",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 80 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 80 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "402",
          "392",
          "407",
          "83"
        ],
        "correct": "402",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Copper, Iron, Gold, Coal.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: तांबा, लोहा, सोना, कोयला.",
        "options": [
          "Coal",
          "Copper",
          "Iron",
          "Gold"
        ],
        "correct": "Coal",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 46 students, Ramesh ranks 18th from the top. What is his rank from the bottom?",
        "textHindi": "46 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 18वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "29",
          "28",
          "30",
          "31"
        ],
        "correct": "29",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: G, J, M, P, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: G, J, M, P, ?",
        "options": [
          "S",
          "R",
          "T",
          "U"
        ],
        "correct": "S",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'MAT' is coded as '34', then how will 'BAT' be coded?",
        "textHindi": "यदि 'MAT' को '34' लिखा जाता है, तो 'BAT' को क्या लिखा जाएगा?",
        "options": [
          "23",
          "42",
          "20",
          "30"
        ],
        "correct": "23",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 11 days?",
        "textHindi": "यदि आज सोमवार है, तो 11 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Sunday (रविवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)",
          "Tuesday (मंगलवार)"
        ],
        "correct": "Friday (शुक्रवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 3:00?",
        "textHindi": "घड़ी में 3:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "120°",
          "60°",
          "180°"
        ],
        "correct": "90°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 12, 20, 30, 42, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 12, 20, 30, 42, ?",
        "options": [
          "56",
          "52",
          "62",
          "112"
        ],
        "correct": "56",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A8Z, B9Y, C10X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A8Z, B9Y, C10X, ?",
        "options": [
          "D11W",
          "D10W",
          "E11V",
          "D11V"
        ],
        "correct": "D11W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 9,
    "title": "RRB NTPC Reasoning Mock Test - 9",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 9",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 9",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 9",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Ice : Cold :: Fire : ?",
        "textHindi": "बर्फ : ठंडा :: आग : ?",
        "options": [
          "Sky",
          "Cold",
          "Water",
          "Hot"
        ],
        "correct": "Hot",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 45, 47, 49, 51, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 45, 47, 49, 51, ?",
        "options": [
          "53",
          "51",
          "56",
          "106"
        ],
        "correct": "53",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'DPME', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'DPME' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "XYZW"
        ],
        "correct": "IFBU",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 90 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 90 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "452",
          "442",
          "457",
          "93"
        ],
        "correct": "452",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Circle, Triangle, Square, Sphere.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: वृत्त, त्रिभुज, वर्ग, गोला.",
        "options": [
          "Sphere",
          "Circle",
          "Triangle",
          "Square"
        ],
        "correct": "Sphere",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 48 students, Ramesh ranks 19th from the top. What is his rank from the bottom?",
        "textHindi": "48 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 19वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "30",
          "29",
          "31",
          "32"
        ],
        "correct": "30",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: A, D, G, J, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: A, D, G, J, ?",
        "options": [
          "M",
          "L",
          "N",
          "O"
        ],
        "correct": "M",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'BAT' is coded as '23', then how will 'CAT' be coded?",
        "textHindi": "यदि 'BAT' को '23' लिखा जाता है, तो 'CAT' को क्या लिखा जाएगा?",
        "options": [
          "24",
          "42",
          "20",
          "30"
        ],
        "correct": "24",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 12 days?",
        "textHindi": "यदि आज सोमवार है, तो 12 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Saturday (शनिवार)",
          "Sunday (रविवार)",
          "Monday (सोमवार)",
          "Friday (शुक्रवार)"
        ],
        "correct": "Saturday (शनिवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 4:00?",
        "textHindi": "घड़ी में 4:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "120°",
          "150°",
          "180°"
        ],
        "correct": "120°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 2, 6, 12, 20, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 2, 6, 12, 20, ?",
        "options": [
          "30",
          "26",
          "36",
          "60"
        ],
        "correct": "30",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A9Z, B10Y, C11X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A9Z, B10Y, C11X, ?",
        "options": [
          "D12W",
          "D11W",
          "E12V",
          "D12V"
        ],
        "correct": "D12W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  },
  {
    "id": 10,
    "title": "RRB NTPC Reasoning Mock Test - 10",
    "titleHindi": "आरआरबी एनटीपीसी तर्कशक्ति मॉक टेस्ट - 10",
    "description": "30 Questions | 45 Minutes | Bilingual General Intelligence & Reasoning Set 10",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य बुद्धिमत्ता और तर्कशक्ति सेट 10",
    "questions": [
      {
        "id": 1,
        "topic": "Analogies",
        "text": "Book : Author :: Statue : ?",
        "textHindi": "पुस्तक : लेखक :: मूर्ति : ?",
        "options": [
          "Sky",
          "Sculptor",
          "Water",
          "Author"
        ],
        "correct": "Sculptor",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 50, 53, 56, 59, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 50, 53, 56, 59, ?",
        "options": [
          "62",
          "60",
          "65",
          "124"
        ],
        "correct": "62",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Coding and Decoding",
        "text": "In a certain code language, if 'COLD' is coded as 'EQNF', how will 'HEAT' be coded?",
        "textHindi": "एक निश्चित कूट भाषा में, यदि 'COLD' को 'EQNF' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?",
        "options": [
          "KHWDa",
          "JGVC",
          "IFBU",
          "JGCV"
        ],
        "correct": "JGCV",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Mathematical Operations",
        "text": "If '+' means '×' and '-' means '+', find the value of: 100 + 5 - 2.",
        "textHindi": "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 100 + 5 - 2 का मान ज्ञात कीजिए।",
        "options": [
          "502",
          "492",
          "507",
          "103"
        ],
        "correct": "502",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Similarities and Differences",
        "text": "Find the odd one out: Cow, Goat, Deer, Lion.",
        "textHindi": "दिए गए विकल्पों में से विषम शब्द का चयन करें: गाय, बकरी, हिरण, शेर.",
        "options": [
          "Lion",
          "Cow",
          "Goat",
          "Deer"
        ],
        "correct": "Lion",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Relationships",
        "text": "Pointing to a man, a woman said, 'He is the only son of my mother's husband.' How is the man related to the woman?",
        "textHindi": "एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, 'वह मेरी माँ के पति का इकलौता पुत्र है।' पुरुष का महिला से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Father (पिता)",
          "Uncle (चाचा)",
          "Cousin (चचेरा भाई)"
        ],
        "correct": "Brother (भाई)",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Syllogism",
        "text": "Statements: All pens are pencils. All pencils are erasers. Conclusions: I. All pens are erasers. II. Some erasers are pens.",
        "textHindi": "कथन: सभी पेन पेंसिल हैं। सभी पेंसिल इरेज़र हैं। निष्कर्ष: I. सभी पेन इरेज़र हैं। II. कुछ इरेज़र पेन हैं।",
        "options": [
          "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
          "Only I follows (केवल निष्कर्ष I)",
          "Only II follows (केवल निष्कर्ष II)",
          "Neither I nor II follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों निष्कर्ष अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Analytical Reasoning",
        "text": "In a class of 50 students, Ramesh ranks 20th from the top. What is his rank from the bottom?",
        "textHindi": "50 छात्रों की कक्षा में, रमेश का स्थान ऊपर से 20वां है। नीचे से उसका स्थान क्या होगा?",
        "options": [
          "31",
          "30",
          "32",
          "33"
        ],
        "correct": "31",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "Venn Diagrams",
        "text": "Which Venn diagram best represents the relationship between: Birds, Crows, Dogs?",
        "textHindi": "कौन सा वेन आरेख पक्षी, कौआ और कुत्ते के बीच सही संबंध दर्शाता है?",
        "options": [
          "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
          "All three intersect (तीनों एक दूसरे को काटते हैं)",
          "All three are separate (तीनों अलग हैं)",
          "Crow and Dog are inside Bird (कौआ और कुत्ता दोनों पक्षी के अंदर हैं)"
        ],
        "correct": "Crow is inside Bird, Dog is separate (कौआ पक्षी के अंदर है, कुत्ता अलग है)",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Puzzle",
        "text": "Five friends A, B, C, D, E are sitting in a row facing North. B is between A and E. D is to the immediate left of C, and E is to the immediate right of B. Who is sitting in the exact middle?",
        "textHindi": "पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। B, A और E के बीच में बैठा है। D, C के ठीक बाएं बैठा है, और E, B के ठीक दाएं है। ठीक मध्य में कौन बैठा है?",
        "options": [
          "B",
          "E",
          "A",
          "C"
        ],
        "correct": "B",
        "category": "Hard"
      },
      {
        "id": 11,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the alphabet series: D, G, J, M, ?",
        "textHindi": "वर्णमाला श्रृंखला में अगला पद ज्ञात कीजिए: D, G, J, M, ?",
        "options": [
          "P",
          "O",
          "Q",
          "R"
        ],
        "correct": "P",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Coding and Decoding",
        "text": "If 'CAT' is coded as '24', then how will 'DOG' be coded?",
        "textHindi": "यदि 'CAT' को '24' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?",
        "options": [
          "42",
          "26",
          "20",
          "30"
        ],
        "correct": "26",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Relationships",
        "text": "A man walks 10 m East, then turns left and walks 5 m, then turns left again and walks 10 m. How far is he from his starting point?",
        "textHindi": "एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        "options": [
          "5 m (5 मीटर)",
          "10 m (10 मीटर)",
          "15 m (15 मीटर)",
          "0 m (0 मीटर)"
        ],
        "correct": "5 m (5 मीटर)",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Similarities and Differences",
        "text": "Find the correct mirror image of the word 'MOCK' when the mirror is placed to its right.",
        "textHindi": "दर्पण को शब्द के दाईं ओर रखने पर शब्द 'MOCK' की सही दर्पण छवि क्या होगी?",
        "options": [
          "KCOṀ (lateral inversion)",
          "MOCK remains same",
          "KC0M",
          "MOCK reversed vertically"
        ],
        "correct": "KCOṀ (lateral inversion)",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Relationships",
        "text": "If A + B means 'A is brother of B' and A - B means 'A is sister of B', what is P's relation to R in P + Q - R?",
        "textHindi": "यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?",
        "options": [
          "Brother (भाई)",
          "Sister (बहन)",
          "Father (पिता)",
          "Uncle (चाचा)"
        ],
        "correct": "Brother (भाई)",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Analytical Reasoning",
        "text": "If today is Monday, what day will it be after 13 days?",
        "textHindi": "यदि आज सोमवार है, तो 13 दिनों के बाद कौन सा दिन होगा?",
        "options": [
          "Friday (शुक्रवार)",
          "Monday (सोमवार)",
          "Sunday (रविवार)",
          "Tuesday (मंगलवार)"
        ],
        "correct": "Sunday (रविवार)",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Analytical Reasoning",
        "text": "What is the angle between the hour and minute hands of a clock at 5:00?",
        "textHindi": "घड़ी में 5:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        "options": [
          "90°",
          "180°",
          "120°",
          "150°"
        ],
        "correct": "150°",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Completion of number and alphabetical series",
        "text": "Find the next term in the series: 6, 12, 20, 30, ?",
        "textHindi": "श्रृंखला में अगला पद ज्ञात कीजिए: 6, 12, 20, 30, ?",
        "options": [
          "42",
          "38",
          "48",
          "84"
        ],
        "correct": "42",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Analogies",
        "text": "Square : Cube :: Circle : ?",
        "textHindi": "वर्ग : घन :: वृत्त : ?",
        "options": [
          "Sphere (गोला)",
          "Cylinder (बेलन)",
          "Cone (शंकु)",
          "Oval (अंडाकार)"
        ],
        "correct": "Sphere (गोला)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Puzzle",
        "text": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting opposite to E?",
        "textHindi": "6 मित्र A, B, C, D, E, F एक वृत्त में केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के बाएं है। E के विपरीत कौन बैठा है?",
        "options": [
          "F",
          "B",
          "C",
          "D"
        ],
        "correct": "F",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Statement-Conclusion",
        "text": "Statement: 'Wear a helmet while driving a two-wheeler.' - Notice. Assumptions: I. People read notices. II. Wearing a helmet is safe.",
        "textHindi": "कथन: 'दुपहिया वाहन चलाते समय हेलमेट पहनें।' - नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं। II. हेलमेट पहनना सुरक्षित है।",
        "options": [
          "Both I and II are implicit (दोनों अंतर्निहित हैं)",
          "Only I is implicit (केवल I)",
          "Only II is implicit (केवल II)",
          "Neither is implicit (कोई अंतर्निहित नहीं है)"
        ],
        "correct": "Both I and II are implicit (दोनों अंतर्निहित हैं)",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Statement-Courses of Action",
        "text": "Statement: Water level of the local lake has dropped alarmingly. Courses of action: I. Municipality should restrict water supply. II. Citizens should reduce water wastage.",
        "textHindi": "कथन: स्थानीय झील का जल स्तर चिंताजनक रूप से गिर गया है। कार्रवाई: I. नगर पालिका को पानी की आपूर्ति सीमित करनी चाहिए। II. नागरिकों को पानी की बर्बादी कम करनी चाहिए।",
        "options": [
          "Both I and II follow (दोनों अनुसरण करते हैं)",
          "Only I follows (केवल I)",
          "Only II follows (केवल II)",
          "Neither follows (कोई अनुसरण नहीं करता)"
        ],
        "correct": "Both I and II follow (दोनों अनुसरण करते हैं)",
        "category": "Hard"
      },
      {
        "id": 23,
        "topic": "Alphanumeric Series",
        "text": "Find the next term: A10Z, B11Y, C12X, ?",
        "textHindi": "अगला पद ज्ञात कीजिए: A10Z, B11Y, C12X, ?",
        "options": [
          "D13W",
          "D12W",
          "E13V",
          "D13V"
        ],
        "correct": "D13W",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Data Sufficiency",
        "text": "What is the age of Ram? Statements: I. Ram is 5 years older than Shyam. II. Shyam is 20 years old.",
        "textHindi": "राम की आयु क्या है? कथन: I. राम, श्याम से 5 वर्ष बड़ा है। II. श्याम 20 वर्ष का है।",
        "options": [
          "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
          "Statement I alone is sufficient (केवल I पर्याप्त है)",
          "Statement II alone is sufficient (केवल II पर्याप्त है)",
          "Both are insufficient (दोनों मिलकर भी अपर्याप्त हैं)"
        ],
        "correct": "Both I and II together are sufficient (दोनों कथन मिलकर पर्याप्त हैं)",
        "category": "Hard"
      },
      {
        "id": 25,
        "topic": "Similarities and Differences",
        "text": "A circular paper is folded in half, then into a quarter, and a small circle is cut at the corner. When unfolded, what will it look like?",
        "textHindi": "एक गोल कागज को आधा मोड़ा जाता है, फिर चौथाई मोड़ा जाता है, और एक कोने पर छोटा वृत्त काटा जाता है। खोलने पर वह कैसा दिखेगा?",
        "options": [
          "Four holes arranged symmetrically (चार छेद सममित रूप से)",
          "One single hole (एक छेद)",
          "Two holes (दो छेद)",
          "No holes (कोई छेद नहीं)"
        ],
        "correct": "Four holes arranged symmetrically (चार छेद सममित रूप से)",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "Relationships",
        "text": "A person walks 5 km North, turns right and walks 3 km. In which direction is he now with respect to the starting point?",
        "textHindi": "एक व्यक्ति 5 किमी उत्तर की ओर चलता है, दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु के संदर्भ में अब किस दिशा में है?",
        "options": [
          "North-East (उत्तर-पूर्व)",
          "North-West (उत्तर-पश्चिम)",
          "South-East (दक्षिण-पूर्व)",
          "North (उत्तर)"
        ],
        "correct": "North-East (उत्तर-पूर्व)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Similarities and Differences",
        "text": "Two positions of a dice are shown. If 1 is at the top, what number will be at the bottom? (Pos 1: 1, 2, 3; Pos 2: 1, 4, 5)",
        "textHindi": "एक पासे की दो स्थितियाँ दिखाई गई हैं। यदि 1 ऊपर है, तो नीचे कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3; स्थिति 2: 1, 4, 5)",
        "options": [
          "6",
          "4",
          "5",
          "2"
        ],
        "correct": "6",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Completion of number and alphabetical series",
        "text": "Which letter is 5th to the right of the 10th letter from the left in English alphabet?",
        "textHindi": "अंग्रेजी वर्णमाला में बाएं से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?",
        "options": [
          "O",
          "N",
          "P",
          "Q"
        ],
        "correct": "O",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Analogies",
        "text": "Car : Road :: Ship : ?",
        "textHindi": "कार : सड़क :: जहाज : ?",
        "options": [
          "Water (पानी)",
          "Air (हवा)",
          "Track (पटरी)",
          "Sky (आकाश)"
        ],
        "correct": "Water (पानी)",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Decision Making",
        "text": "To qualify for a post, a candidate must have at least 60% in Graduation and be between 21-28 years old. Candidate X has 65% in graduation and is 25 years old. What decision should be made?",
        "textHindi": "एक पद के लिए अर्हता प्राप्त करने के लिए, उम्मीदवार के पास स्नातक में कम से कम 60% होना चाहिए और आयु 21-28 वर्ष होनी चाहिए। उम्मीदवार X के पास स्नातक में 65% है और उसकी आयु 25 वर्ष है। क्या निर्णय लिया जाना चाहिए?",
        "options": [
          "Select the candidate (उम्मीदवार का चयन करें)",
          "Reject the candidate (उम्मीदवार को अस्वीकार करें)",
          "Refer to Manager (मैनेजर को संदर्भित करें)",
          "Data inadequate (डेटा अपर्याप्त है)"
        ],
        "correct": "Select the candidate (उम्मीदवार का चयन करें)",
        "category": "Medium"
      }
    ]
  }
];

export default function RrbNtpcReasoningTest() {
  const [activeTestId, setActiveTestId] = useState<number | null>(null);
  const [currentQNo, setCurrentQNo] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(2700); // 45 minutes
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [lang, setLang] = useState<'en' | 'hi'>('hi');

  const activeTest = mockTestsData.find(t => t.id === activeTestId);
  const totalQCount = activeTest ? activeTest.questions.length : 0;
  const currentQuestion = activeTest ? activeTest.questions[currentQNo - 1] : null;

  // Timer Effect
  useEffect(() => {
    if (activeTestId === null || isSubmitted) return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTestId, isSubmitted]);

  const handleStartTest = (id: number) => {
    setActiveTestId(id);
    setCurrentQNo(1);
    setAnswers({});
    setTimeLeft(2700);
    setIsSubmitted(false);
  };

  const handleRestart = () => {
    setActiveTestId(null);
    setIsSubmitted(false);
    setAnswers({});
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Score Calculation
  const calculateResult = () => {
    if (!activeTest) return { score: 0, percentage: 0, attempted: 0, correctCount: 0 };
    let correctCount = 0;
    activeTest.questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correctCount++;
      }
    });
    const attempted = Object.keys(answers).length;
    const percentage = Math.round((correctCount / totalQCount) * 100);
    return {
      score: correctCount,
      correctCount,
      percentage,
      attempted
    };
  };

  const result = calculateResult();

  // Test Selection Screen
  if (activeTestId === null) {
    return (
      <div className="min-h-screen bg-[#020617] text-slate-100 p-6 md:p-12 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/exams/rrb-ntpc" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" /> Back to Syllabus
            </Link>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-indigo-500 mb-4">
            RRB NTPC General Intelligence & Reasoning Mock Test
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mb-12">
            Practice mock tests spanning Analogies, Series, Venn Diagrams, Syllogisms, Coding-Decoding, and Seating Arrangements to excel in RRB NTPC CBT 1 and CBT 2.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTestsData.map((test) => (
              <div 
                key={test.id}
                className="glass-panel border-white/5 hover:border-purple-500/30 p-6 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/5 duration-300 rounded-3xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
                      Test Set {test.id}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 45 Mins
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">
                    {lang === 'hi' ? test.titleHindi : test.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    {lang === 'hi' ? test.descriptionHindi : test.description}
                  </p>
                </div>
                <button
                  onClick={() => handleStartTest(test.id)}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 active:scale-95 text-white font-bold rounded-xl transition-all shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] cursor-pointer text-sm"
                >
                  Start Mock Test (टेस्ट शुरू करें)
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (isSubmitted && activeTest) {
    const isPassed = result.percentage >= 40;
    return (
      <div className="min-h-screen bg-[#020617] text-slate-100 p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-panel border-white/5 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center mb-8 shadow-2xl">
            <Trophy className="w-20 h-20 text-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] animate-bounce" />
            <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-4">
              Test Completed!
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mb-8">
              You have completed {lang === 'hi' ? activeTest.titleHindi : activeTest.title}. Here is your result breakdown:
            </p>

            {/* Score Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-10">
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className="block text-2xl md:text-3xl font-extrabold text-purple-400">{result.score}/{totalQCount}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Correct Score</span>
              </div>
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className="block text-2xl md:text-3xl font-extrabold text-purple-400">{result.percentage}%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Accuracy</span>
              </div>
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className="block text-2xl md:text-3xl font-extrabold text-purple-400">{result.attempted}/{totalQCount}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Attempted</span>
              </div>
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className={`block text-2xl md:text-3xl font-extrabold ${isPassed ? 'text-emerald-400' : 'text-red-400'}`}>
                  {isPassed ? 'PASS' : 'FAIL'}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status (Cutoff 40%)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleRestart}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 active:scale-95 text-white font-bold rounded-xl transition-all shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Try Another Test
              </button>
            </div>
          </div>

          {/* Answer Review Section */}
          <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/5 pb-4">
              <FileText className="w-5 h-5 text-purple-400" /> Answer Key & Review (उत्तर कुंजी)
            </h2>
            <div className="space-y-6">
              {activeTest.questions.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correct;
                return (
                  <div key={q.id} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3.5">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 ${isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : userAns ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-400 border border-white/5'}`}>
                        {idx + 1}
                      </span>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded uppercase">
                          {q.topic}
                        </span>
                        <p className="text-sm md:text-base font-bold text-slate-200">
                          {lang === 'en' ? q.text : q.textHindi}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2.5">
                          {q.options.map((opt, oIdx) => {
                            const isCorrectOpt = opt === q.correct;
                            const isUserSelectedOpt = opt === userAns;
                            
                            let optClass = "p-3 rounded-xl border text-xs md:text-sm font-medium ";
                            if (isCorrectOpt) {
                              optClass += "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
                            } else if (isUserSelectedOpt) {
                              optClass += "bg-red-500/10 border-red-500/30 text-red-400";
                            } else {
                              optClass += "bg-slate-900/40 border-white/5 text-slate-400";
                            }

                            return (
                              <div key={oIdx} className={optClass}>
                                <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                                {isCorrectOpt && <span className="text-[10px] ml-2 font-bold px-1.5 py-0.5 bg-emerald-500/25 text-emerald-300 rounded uppercase">Correct</span>}
                                {isUserSelectedOpt && !isCorrectOpt && <span className="text-[10px] ml-2 font-bold px-1.5 py-0.5 bg-red-500/25 text-red-300 rounded uppercase">Your Pick</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
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

  // Test Simulator Screen
  if (activeTest && currentQuestion) {
    return (
      <div className="min-h-screen bg-[#020617] text-slate-100 p-6 md:p-12 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Panel */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-55 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-400" /> {lang === 'hi' ? activeTest.titleHindi : activeTest.title}
              </h2>
              <p className="text-xs text-slate-400">RRB NTPC General Intelligence & Reasoning (द्विभाषी टेस्ट)</p>
            </div>

            <div className="flex items-center gap-3.5 self-stretch md:self-auto justify-between">
              {/* Language Switcher */}
              <div className="flex bg-slate-900 border border-white/5 rounded-xl p-1 text-xs font-bold">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${lang === 'en' ? 'bg-purple-500 text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLang('hi')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${lang === 'hi' ? 'bg-purple-500 text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}
                >
                  हिंदी
                </button>
              </div>

              {/* Timer */}
              <div className={`px-4 py-2 rounded-xl border font-mono text-sm md:text-base font-extrabold flex items-center gap-1.5 ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-purple-500/10 border-purple-500/20 text-purple-400'}`}>
                <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'animate-pulse text-red-400' : 'text-purple-400'}`} /> {formatTime(timeLeft)}
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
                <span className="text-xs font-bold px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
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
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer group select-none ${isSelected ? 'border-purple-500/40 bg-purple-500/5 text-purple-300 font-semibold' : 'border-white/5 bg-slate-900/30 text-slate-350 hover:border-white/10 hover:bg-slate-900/50'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-purple-400 bg-purple-500/20 text-purple-300' : 'border-slate-500 group-hover:border-purple-400'}`}>
                        {isSelected && <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>}
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
                  className="px-5 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2 shadow-[0_0_12px_rgba(168,85,247,0.25)] cursor-pointer"
                >
                  Save & Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Question Palette */}
            <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 sticky top-48 shadow-2xl">
              <h3 className="m-0 mb-4 text-base font-bold text-slate-100 flex items-center gap-2 border-b border-white/5 pb-3">
                <HelpCircle className="w-4 h-4 text-purple-400" /> Question Palette
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
                    btnClass += "border-purple-500 bg-purple-500/20 text-purple-300 scale-105 shadow-[0_0_8px_rgba(168,85,247,0.2)]";
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
      </div>
    );
  }

  return null;
}
