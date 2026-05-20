"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ChevronLeft, ChevronRight, Trophy, RotateCcw, FileText, ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';

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
    "title": "RRB NTPC General Awareness Mock Test - 1",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 1",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 1",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 1",
    "questions": [
      {
        "id": 1,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 2,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 3,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 8,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 9,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 12,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 13,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 14,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 15,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 20,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 21,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 22,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 23,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 27,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 2,
    "title": "RRB NTPC General Awareness Mock Test - 2",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 2",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 2",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 2",
    "questions": [
      {
        "id": 1,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 4,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 6,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 8,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 9,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 12,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 13,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 14,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 15,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 16,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 19,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 21,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 22,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 23,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 30,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 3,
    "title": "RRB NTPC General Awareness Mock Test - 3",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 3",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 3",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 3",
    "questions": [
      {
        "id": 1,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 2,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 3,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 5,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 8,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 9,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 14,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 19,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 21,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 22,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 23,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 27,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 28,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 29,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      }
    ]
  },
  {
    "id": 4,
    "title": "RRB NTPC General Awareness Mock Test - 4",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 4",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 4",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 4",
    "questions": [
      {
        "id": 1,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 4,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 6,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 8,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 10,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 12,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 13,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 19,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 21,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 22,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 23,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 27,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 5,
    "title": "RRB NTPC General Awareness Mock Test - 5",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 5",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 5",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 5",
    "questions": [
      {
        "id": 1,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 4,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 8,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 9,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 11,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 14,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 19,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 21,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 22,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 23,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 27,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      }
    ]
  },
  {
    "id": 6,
    "title": "RRB NTPC General Awareness Mock Test - 6",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 6",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 6",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 6",
    "questions": [
      {
        "id": 1,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 2,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 4,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 7,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 8,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 9,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 10,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 13,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 14,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 15,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 19,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 21,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 22,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 23,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 27,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 30,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 7,
    "title": "RRB NTPC General Awareness Mock Test - 7",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 7",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 7",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 7",
    "questions": [
      {
        "id": 1,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 2,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 4,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 8,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 9,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 10,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 13,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 14,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 15,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 23,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 25,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 8,
    "title": "RRB NTPC General Awareness Mock Test - 8",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 8",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 8",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 8",
    "questions": [
      {
        "id": 1,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 2,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 3,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 4,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 8,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 9,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 10,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 11,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 12,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 13,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 14,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 15,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 16,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 18,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 19,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 22,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 23,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 26,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 9,
    "title": "RRB NTPC General Awareness Mock Test - 9",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 9",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 9",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 9",
    "questions": [
      {
        "id": 1,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 4,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 6,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 8,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 9,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 13,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 14,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 15,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 17,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 21,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 22,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 23,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 24,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 26,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 27,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 28,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 30,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      }
    ]
  },
  {
    "id": 10,
    "title": "RRB NTPC General Awareness Mock Test - 10",
    "titleHindi": "आरआरबी एनटीपीसी सामान्य जागरूकता मॉक टेस्ट - 10",
    "description": "30 Questions | 45 Minutes | Bilingual GK & Current Affairs Set 10",
    "descriptionHindi": "30 प्रश्न | 45 मिनट | द्विभाषी सामान्य जागरूकता और समसामयिकी सेट 10",
    "questions": [
      {
        "id": 1,
        "topic": "General Science",
        "text": "What is the chemical formula of water?",
        "textHindi": "पानी का रासायनिक सूत्र क्या है?",
        "options": [
          "H₂O",
          "CO₂",
          "H₂SO₄",
          "NaCl"
        ],
        "correct": "H₂O",
        "category": "Easy"
      },
      {
        "id": 2,
        "topic": "Indian Economy",
        "text": "What does 'GDP' stand for?",
        "textHindi": "'GDP' का पूर्ण रूप क्या है?",
        "options": [
          "Gross Domestic Product",
          "General Development Plan",
          "Gross Development Product",
          "Government Domestic Policy"
        ],
        "correct": "Gross Domestic Product",
        "category": "Easy"
      },
      {
        "id": 3,
        "topic": "World Geography",
        "text": "Which is the largest ocean in the world?",
        "textHindi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correct": "Pacific Ocean",
        "category": "Easy"
      },
      {
        "id": 4,
        "topic": "Indian History",
        "text": "The Battle of Plassey was fought in which year?",
        "textHindi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
        "options": [
          "1757",
          "1764",
          "1761",
          "1749"
        ],
        "correct": "1757",
        "category": "Easy"
      },
      {
        "id": 5,
        "topic": "Indian Polity",
        "text": "Which article of the Indian Constitution deals with the Right to Education?",
        "textHindi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
        "options": [
          "Article 21A",
          "Article 19",
          "Article 32",
          "Article 45"
        ],
        "correct": "Article 21A",
        "category": "Medium"
      },
      {
        "id": 6,
        "topic": "National Symbols",
        "text": "Who wrote India's national anthem 'Jana Gana Mana'?",
        "textHindi": "भारत का राष्ट्रगान 'जन गण मन' किसने लिखा?",
        "options": [
          "Rabindranath Tagore",
          "Bankim Chandra Chatterjee",
          "Sarojini Naidu",
          "Mahatma Gandhi"
        ],
        "correct": "Rabindranath Tagore",
        "category": "Easy"
      },
      {
        "id": 7,
        "topic": "Indian Economy",
        "text": "Which Five-Year Plan was associated with the concept of 'Removal of Poverty' (Garibi Hatao)?",
        "textHindi": "कौन सी पंचवर्षीय योजना 'गरीबी हटाओ' की अवधारणा से जुड़ी थी?",
        "options": [
          "5th Plan",
          "4th Plan",
          "6th Plan",
          "3rd Plan"
        ],
        "correct": "5th Plan",
        "category": "Hard"
      },
      {
        "id": 8,
        "topic": "Indian History",
        "text": "Who is known as the 'Father of the Indian Constitution'?",
        "textHindi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
        "options": [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad",
          "Sardar Patel"
        ],
        "correct": "B.R. Ambedkar",
        "category": "Easy"
      },
      {
        "id": 9,
        "topic": "Indian Geography",
        "text": "Which is the largest desert in India?",
        "textHindi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options": [
          "Thar Desert",
          "Ladakh Cold Desert",
          "Rann of Kutch",
          "Deccan Plateau"
        ],
        "correct": "Thar Desert",
        "category": "Easy"
      },
      {
        "id": 10,
        "topic": "Indian Geography",
        "text": "Which is the longest river in India?",
        "textHindi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options": [
          "Ganga",
          "Godavari",
          "Yamuna",
          "Brahmaputra"
        ],
        "correct": "Ganga",
        "category": "Easy"
      },
      {
        "id": 11,
        "topic": "National Symbols",
        "text": "Which is the national game of India?",
        "textHindi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options": [
          "Hockey",
          "Cricket",
          "Kabaddi",
          "Chess"
        ],
        "correct": "Hockey",
        "category": "Easy"
      },
      {
        "id": 12,
        "topic": "Indian History",
        "text": "Who gave the slogan 'Jai Hind'?",
        "textHindi": "'जय हिंद' का नारा किसने दिया?",
        "options": [
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Jawaharlal Nehru"
        ],
        "correct": "Subhash Chandra Bose",
        "category": "Easy"
      },
      {
        "id": 13,
        "topic": "World Geography",
        "text": "Which country has the longest coastline in the world?",
        "textHindi": "विश्व में सबसे लंबी तटरेखा किस देश की है?",
        "options": [
          "Canada",
          "Russia",
          "USA",
          "Australia"
        ],
        "correct": "Canada",
        "category": "Medium"
      },
      {
        "id": 14,
        "topic": "Indian Polity",
        "text": "The maximum strength of Lok Sabha is:",
        "textHindi": "लोकसभा की अधिकतम सदस्य संख्या है:",
        "options": [
          "552",
          "545",
          "543",
          "500"
        ],
        "correct": "552",
        "category": "Medium"
      },
      {
        "id": 15,
        "topic": "General Science",
        "text": "What is the unit of electric current?",
        "textHindi": "विद्युत धारा की इकाई क्या है?",
        "options": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "correct": "Ampere",
        "category": "Easy"
      },
      {
        "id": 16,
        "topic": "Indian Economy",
        "text": "Which organization publishes the Human Development Index (HDI)?",
        "textHindi": "मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?",
        "options": [
          "UNDP",
          "World Bank",
          "IMF",
          "WHO"
        ],
        "correct": "UNDP",
        "category": "Medium"
      },
      {
        "id": 17,
        "topic": "Indian Economy",
        "text": "Which institution is called the 'Apex Bank' of India?",
        "textHindi": "भारत के 'शीर्ष बैंक' के रूप में किस संस्था को जाना जाता है?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "NABARD",
          "SEBI"
        ],
        "correct": "Reserve Bank of India (RBI)",
        "category": "Easy"
      },
      {
        "id": 18,
        "topic": "Indian Polity",
        "text": "How many articles were there in the original Indian Constitution?",
        "textHindi": "मूल भारतीय संविधान में कितने अनुच्छेद थे?",
        "options": [
          "395",
          "444",
          "400",
          "448"
        ],
        "correct": "395",
        "category": "Medium"
      },
      {
        "id": 19,
        "topic": "Indian Economy",
        "text": "The Green Revolution in India is mainly associated with which crop?",
        "textHindi": "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",
        "options": [
          "Wheat",
          "Rice",
          "Sugarcane",
          "Cotton"
        ],
        "correct": "Wheat",
        "category": "Easy"
      },
      {
        "id": 20,
        "topic": "Sports & Awards",
        "text": "Who is the first Indian woman to win an Olympic gold medal?",
        "textHindi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन है?",
        "options": [
          "Abhinav Bindra won gold but not a woman — Karnam Malleswari won bronze; actually Saina Nehwal — None, no Indian woman has won Olympic gold yet",
          "Sania Mirza",
          "P.V. Sindhu",
          "Karnam Malleswari"
        ],
        "correct": "Karnam Malleswari",
        "category": "Hard"
      },
      {
        "id": 21,
        "topic": "General Science",
        "text": "Which vitamin is produced in the human body when exposed to sunlight?",
        "textHindi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options": [
          "Vitamin D",
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12"
        ],
        "correct": "Vitamin D",
        "category": "Easy"
      },
      {
        "id": 22,
        "topic": "General Science",
        "text": "The process by which plants make food using sunlight is called:",
        "textHindi": "वह प्रक्रिया जिसके द्वारा पौधे सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं, कहलाती है:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Germination"
        ],
        "correct": "Photosynthesis",
        "category": "Easy"
      },
      {
        "id": 23,
        "topic": "Current Affairs",
        "text": "Which organization launched the 'Mission LiFE' (Lifestyle For Environment)?",
        "textHindi": "'मिशन LiFE' (पर्यावरण के लिए जीवनशैली) किस संगठन ने शुरू किया?",
        "options": [
          "India (Government of India)",
          "United Nations",
          "World Bank",
          "European Union"
        ],
        "correct": "India (Government of India)",
        "category": "Medium"
      },
      {
        "id": 24,
        "topic": "Indian History",
        "text": "The Quit India Movement was launched in which year?",
        "textHindi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options": [
          "1942",
          "1940",
          "1944",
          "1938"
        ],
        "correct": "1942",
        "category": "Easy"
      },
      {
        "id": 25,
        "topic": "Indian Polity",
        "text": "The Directive Principles of State Policy in the Indian Constitution are borrowed from which constitution?",
        "textHindi": "भारतीय संविधान में राज्य के नीति निदेशक सिद्धांत किस संविधान से लिए गए हैं?",
        "options": [
          "Irish Constitution",
          "US Constitution",
          "UK Constitution",
          "Canadian Constitution"
        ],
        "correct": "Irish Constitution",
        "category": "Hard"
      },
      {
        "id": 26,
        "topic": "Indian Geography",
        "text": "The Tropic of Cancer passes through how many Indian states?",
        "textHindi": "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correct": "8",
        "category": "Medium"
      },
      {
        "id": 27,
        "topic": "Indian Polity",
        "text": "Who appoints the Chief Justice of India?",
        "textHindi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options": [
          "President of India",
          "Prime Minister",
          "Vice President",
          "Parliament"
        ],
        "correct": "President of India",
        "category": "Easy"
      },
      {
        "id": 28,
        "topic": "National Symbols",
        "text": "What is the national flower of India?",
        "textHindi": "भारत का राष्ट्रीय फूल क्या है?",
        "options": [
          "Lotus",
          "Rose",
          "Marigold",
          "Sunflower"
        ],
        "correct": "Lotus",
        "category": "Easy"
      },
      {
        "id": 29,
        "topic": "General Science",
        "text": "Which planet is known as the 'Red Planet'?",
        "textHindi": "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correct": "Mars",
        "category": "Easy"
      },
      {
        "id": 30,
        "topic": "Indian History",
        "text": "Who was the first President of the Indian National Congress?",
        "textHindi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        "options": [
          "W.C. Bonnerjee",
          "Bal Gangadhar Tilak",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correct": "W.C. Bonnerjee",
        "category": "Easy"
      }
    ]
  }
];

export default function RrbNtpcGKTest() {
  const [activeTestId, setActiveTestId] = useState<number | null>(null);
  const [currentQNo, setCurrentQNo] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(2700);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [lang, setLang] = useState<'en' | 'hi'>('hi');

  const activeTest = mockTestsData.find(t => t.id === activeTestId);
  const totalQCount = activeTest ? activeTest.questions.length : 0;
  const currentQuestion = activeTest ? activeTest.questions[currentQNo - 1] : null;

  useEffect(() => {
    if (activeTestId === null || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(interval); setIsSubmitted(true); return 0; }
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

  const calculateResult = () => {
    if (!activeTest) return { score: 0, percentage: 0, attempted: 0 };
    let correctCount = 0;
    activeTest.questions.forEach(q => { if (answers[q.id] === q.correct) correctCount++; });
    const attempted = Object.keys(answers).length;
    const percentage = Math.round((correctCount / totalQCount) * 100);
    return { score: correctCount, percentage, attempted };
  };

  const result = calculateResult();

  // Test Selection Screen
  if (activeTestId === null) {
    return (
      <div className="min-h-screen bg-[#020617] text-slate-100 p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/exams/rrb-ntpc" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" /> Back to Syllabus
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-teal-500 mb-4">
            RRB NTPC General Awareness Mock Test
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mb-12">
            Practice GK mock tests covering Indian History, Geography, Polity, Economy, Science, Current Affairs and National Symbols for RRB NTPC CBT 1 & CBT 2.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTestsData.map((test) => (
              <div key={test.id} className="glass-panel border-white/5 hover:border-emerald-500/30 p-6 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-emerald-500/5 duration-300 rounded-3xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">Test Set {test.id}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 45 Mins</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">{lang === 'hi' ? test.titleHindi : test.title}</h3>
                  <p className="text-xs text-slate-400 mb-6">{lang === 'hi' ? test.descriptionHindi : test.description}</p>
                </div>
                <button onClick={() => handleStartTest(test.id)} className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 active:scale-95 text-white font-bold rounded-xl transition-all shadow-[0_0_12px_rgba(52,211,153,0.25)] hover:shadow-[0_0_18px_rgba(52,211,153,0.45)] cursor-pointer text-sm">
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-panel border-white/5 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center mb-8 shadow-2xl">
            <Trophy className="w-20 h-20 text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] animate-bounce" />
            <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-4">Test Completed!</h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mb-8">
              {lang === 'hi' ? activeTest.titleHindi : activeTest.title} — Result Breakdown:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-10">
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className="block text-2xl md:text-3xl font-extrabold text-emerald-400">{result.score}/{totalQCount}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Correct Score</span>
              </div>
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className="block text-2xl md:text-3xl font-extrabold text-emerald-400">{result.percentage}%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Accuracy</span>
              </div>
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className="block text-2xl md:text-3xl font-extrabold text-emerald-400">{result.attempted}/{totalQCount}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Attempted</span>
              </div>
              <div className="bg-[#0b1329] border border-white/5 rounded-2xl p-4">
                <span className={`block text-2xl md:text-3xl font-extrabold ${isPassed ? 'text-emerald-400' : 'text-red-400'}`}>{isPassed ? 'PASS' : 'FAIL'}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status (40% Cutoff)</span>
              </div>
            </div>
            <button onClick={handleRestart} className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 active:scale-95 text-white font-bold rounded-xl transition-all shadow-[0_0_12px_rgba(52,211,153,0.25)] flex items-center gap-2 cursor-pointer">
              <RotateCcw className="w-4 h-4" /> Try Another Test
            </button>
          </div>

          {/* Answer Review */}
          <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/5 pb-4">
              <FileText className="w-5 h-5 text-emerald-400" /> Answer Key & Review (उत्तर कुंजी)
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
                      <div className="space-y-2 w-full">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded uppercase">{q.topic}</span>
                        <p className="text-sm md:text-base font-bold text-slate-200">{lang === 'en' ? q.text : q.textHindi}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2.5">
                          {q.options.map((opt, oIdx) => {
                            const isCorrectOpt = opt === q.correct;
                            const isUserSelectedOpt = opt === userAns;
                            let optClass = "p-3 rounded-xl border text-xs md:text-sm font-medium ";
                            if (isCorrectOpt) optClass += "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
                            else if (isUserSelectedOpt) optClass += "bg-red-500/10 border-red-500/30 text-red-400";
                            else optClass += "bg-slate-900/40 border-white/5 text-slate-400";
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-50 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" /> {lang === 'hi' ? activeTest.titleHindi : activeTest.title}
              </h2>
              <p className="text-xs text-slate-400">RRB NTPC General Awareness (द्विभाषी टेस्ट)</p>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="flex bg-slate-900 border border-white/5 rounded-xl p-1 text-xs font-bold">
                <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${lang === 'en' ? 'bg-emerald-500 text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}>English</button>
                <button onClick={() => setLang('hi')} className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${lang === 'hi' ? 'bg-emerald-500 text-slate-950 shadow-inner' : 'text-slate-400 hover:text-white'}`}>हिंदी</button>
              </div>
              <div className={`px-4 py-2 rounded-xl border font-mono text-sm md:text-base font-extrabold flex items-center gap-1.5 ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'animate-pulse text-red-400' : 'text-emerald-400'}`} /> {formatTime(timeLeft)}
              </div>
              <button onClick={() => { if (confirm("Are you sure you want to submit?")) setIsSubmitted(true); }} className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all cursor-pointer">
                Submit Test
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  Question {currentQNo} of {totalQCount} | {currentQuestion.topic}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${currentQuestion.category === 'Hard' ? 'bg-red-500/10 border-red-500/20 text-red-400' : currentQuestion.category === 'Medium' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                  {currentQuestion.category}
                </span>
              </div>
              <div className="text-lg md:text-xl font-bold leading-relaxed mb-6 text-slate-100">
                {lang === 'en' ? currentQuestion.text : currentQuestion.textHindi}
              </div>
              <div className="grid gap-3.5 mt-8">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = answers[currentQuestion.id] === opt;
                  return (
                    <label key={idx} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer group select-none ${isSelected ? 'border-emerald-500/40 bg-emerald-500/5 text-emerald-300 font-semibold' : 'border-white/5 bg-slate-900/30 hover:border-white/10 hover:bg-slate-900/50'}`}>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-emerald-400 bg-emerald-500/20' : 'border-slate-500 group-hover:border-emerald-400'}`}>
                        {isSelected && <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>}
                      </div>
                      <input type="radio" name={`q_${currentQuestion.id}`} value={opt} className="hidden" checked={isSelected} onChange={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: opt }))} />
                      <span className="text-sm md:text-base"><span className="font-bold text-slate-500 mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}</span>
                    </label>
                  );
                })}
              </div>
              <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
                <button onClick={() => setCurrentQNo(prev => prev - 1)} disabled={currentQNo === 1} className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2 cursor-pointer">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button onClick={() => { if (currentQNo < totalQCount) setCurrentQNo(prev => prev + 1); }} disabled={currentQNo === totalQCount} className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2 shadow-[0_0_12px_rgba(52,211,153,0.25)] cursor-pointer">
                  Save & Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 sticky top-48 shadow-2xl">
              <h3 className="m-0 mb-4 text-base font-bold text-slate-100 flex items-center gap-2 border-b border-white/5 pb-3">
                <HelpCircle className="w-4 h-4 text-emerald-400" /> Question Palette
              </h3>
              <div className="flex flex-col gap-2.5 mb-6 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> Answered</div>
                  <span className="font-mono text-slate-300 font-bold">{Object.keys(answers).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div> Unanswered</div>
                  <span className="font-mono text-slate-300 font-bold">{totalQCount - Object.keys(answers).length}</span>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {activeTest.questions.map((q) => {
                  const isAnswered = !!answers[q.id];
                  const isActive = currentQNo === q.id;
                  let btnClass = "w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold cursor-pointer transition-all border ";
                  if (isActive) btnClass += "border-emerald-500 bg-emerald-500/20 text-emerald-300 scale-105";
                  else if (isAnswered) btnClass += "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
                  else btnClass += "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700";
                  return <div key={q.id} onClick={() => setCurrentQNo(q.id)} className={btnClass}>{q.id}</div>;
                })}
              </div>
              <button onClick={() => { if (confirm("Submit the test?")) setIsSubmitted(true); }} className="w-full mt-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer">
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
