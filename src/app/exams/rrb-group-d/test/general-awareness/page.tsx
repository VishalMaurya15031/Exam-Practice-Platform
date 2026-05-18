"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, CheckCircle2, AlertTriangle, ChevronLeft, ChevronRight, Trophy, RotateCcw, FileText, ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  options: string[];
  correct: string;
  category: string;
};

type MockTest = {
  id: number;
  title: string;
  description: string;
  questions: Question[];
};

const mockTestsData: MockTest[] = [
  {
    id: 1,
    title: "RRB Group D General Awareness Mock Test - 1",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Who won the ICC Men's Cricket World Cup 2023? / आईसीसी पुरुष क्रिकेट विश्व कप 2023 किसने जीता?", options: ["India (भारत)", "Australia (ऑस्ट्रेलिया)", "South Africa (दक्षिण अफ्रीका)", "New Zealand (न्यूजीलैंड)"], correct: "Australia (ऑस्ट्रेलिया)", category: "Easy" },
      { id: 2, text: "(Polity) Who is the ex-officio Chairman of Rajya Sabha? / राज्यसभा का पदेन सभापति कौन होता है?", options: ["President of India (भारत के राष्ट्रपति)", "Vice President of India (भारत के उपराष्ट्रपति)", "Prime Minister of India (भारत के प्रधानमंत्री)", "Speaker of Lok Sabha (लोकसभा अध्यक्ष)"], correct: "Vice President of India (भारत के उपराष्ट्रपति)", category: "Easy" },
      { id: 3, text: "(Science & Tech) ISRO successfully launched Chandrayaan-3 using which launch vehicle? / इसरो ने किस प्रक्षेपण यान का उपयोग करके चंद्रयान-3 को सफलतापूर्वक लॉन्च किया था?", options: ["LVM3-M4", "PSLV-C56", "GSLV-MkIII", "SSLV-D2"], correct: "LVM3-M4", category: "Easy" },
      { id: 4, text: "(Culture) Kathakali is a classical dance form of which Indian state? / कथकली किस भारतीय राज्य का शास्त्रीय नृत्य है?", options: ["Kerala (केरल)", "Tamil Nadu (तमिलनाडु)", "Andhra Pradesh (आंध्र प्रदेश)", "Karnataka (कर्नाटक)"], correct: "Kerala (केरल)", category: "Easy" },
      { id: 5, text: "(Economics) Who is the current Governor of the Reserve Bank of India (RBI)? / भारतीय रिजर्व बैंक (RBI) के वर्तमान गवर्नर कौन हैं?", options: ["Shaktikanta Das (शक्तिकांत दास)", "Urjit Patel (ऊर्जित पटेल)", "Raghuram Rajan (रघुराम राजन)", "Duvvuri Subbarao (दुव्वूरी सुब्बाराओ)"], correct: "Shaktikanta Das (शक्तिकांत दास)", category: "Easy" },
      { id: 6, text: "(Geography) Which is the longest river in India? / भारत की सबसे लंबी नदी कौन सी है?", options: ["Ganga (गंगा)", "Godavari (गोदावरी)", "Yamuna (यमुना)", "Narmada (नर्मदा)"], correct: "Ganga (गंगा)", category: "Easy" },
      { id: 7, text: "(History) Who was the founder of the Maurya Empire? / मौर्य साम्राज्य का संस्थापक कौन था?", options: ["Chandragupta Maurya (चंद्रगुप्त मौर्य)", "Ashoka the Great (महान अशोक)", "Bindusara (बिन्दुसार)", "Samudragupta (समुद्रगुप्त)"], correct: "Chandragupta Maurya (चंद्रगुप्त मौर्य)", category: "Easy" },
      { id: 8, text: "(Polity) Which Article of the Indian Constitution is related to Equality before Law? / भारतीय संविधान का कौन सा अनुच्छेद कानून के समक्ष समानता से संबंधित है?", options: ["Article 14 (अनुच्छेद 14)", "Article 19 (अनुच्छेद 19)", "Article 21 (अनुच्छेद 21)", "Article 32 (अनुच्छेद 32)"], correct: "Article 14 (अनुच्छेद 14)", category: "Easy" },
      { id: 9, text: "(Sports) In which city were the 2024 Summer Olympic Games held? / 2024 ग्रीष्मकालीन ओलंपिक खेल किस शहर में आयोजित किए गए थे?", options: ["Paris (पेरिस)", "Tokyo (टोक्यो)", "Los Angeles (लॉस एंजिल्स)", "London (लंदन)"], correct: "Paris (पेरिस)", category: "Easy" },
      { id: 10, text: "(Science & Tech) What is the name of India's first indigenous aircraft carrier? / भारत के पहले स्वदेशी विमानवाहक पोत का नाम क्या है?", options: ["INS Vikrant (आईएनएस विक्रांत)", "INS Vikramaditya (आईएनएस विक्रमादित्य)", "INS Virat (आईएनएस विराट)", "INS Arihant (आईएनएस अरिहंत)"], correct: "INS Vikrant (आईएनएस विक्रांत)", category: "Easy" },
      { id: 11, text: "(Polity) Fundamental Duties were added to the Indian Constitution by which Amendment Act? / भारतीय संविधान में मौलिक कर्तव्यों को किस संशोधन अधिनियम द्वारा जोड़ा गया था?", options: ["42nd Amendment Act (42वां संशोधन अधिनियम)", "44th Amendment Act (44वां संशोधन अधिनियम)", "86th Amendment Act (86वां संशोधन अधिनियम)", "52nd Amendment Act (52वां संशोधन अधिनियम)"], correct: "42nd Amendment Act (42वां संशोधन अधिनियम)", category: "Medium" },
      { id: 12, text: "(Geography) Which state in India has the longest coastline? / भारत में किस राज्य की तटरेखा सबसे लंबी है?", options: ["Gujarat (गुजरात)", "Andhra Pradesh (आंध्र प्रदेश)", "Tamil Nadu (तमिलनाडु)", "Maharashtra (महाराष्ट्र)"], correct: "Gujarat (गुजरात)", category: "Medium" },
      { id: 13, text: "(Culture) The famous Sun Temple of Konark is located in which state? / कोणार्क का प्रसिद्ध सूर्य मंदिर किस राज्य में स्थित है?", options: ["Odisha (ओडिशा)", "West Bengal (पश्चिम बंगाल)", "Bihar (बिहार)", "Jharkhand (झारखंड)"], correct: "Odisha (ओडिशा)", category: "Medium" },
      { id: 14, text: "(History) The first Battle of Panipat was fought in which year? / पानीपत की पहली लड़ाई किस वर्ष लड़ी गई थी?", options: ["1526", "1556", "1761", "1576"], correct: "1526", category: "Medium" },
      { id: 15, text: "(Economics) What is the primary objective of Pradhan Mantri Jan Dhan Yojana (PMJDY)? / प्रधानमंत्री जन धन योजना (PMJDY) का प्राथमिक उद्देश्य क्या है?", options: ["Financial Inclusion (वित्तीय समावेशन)", "Housing for All (सभी के लिए आवास)", "Digital Literacy (डिजिटल साक्षरता)", "Agricultural Subsidies (कृषि सब्सिडी)"], correct: "Financial Inclusion (वित्तीय समावेशन)", category: "Medium" },
      { id: 16, text: "(Sports) Who became the first Indian to win an individual Olympic gold medal in athletics? / एथलेटिक्स में व्यक्तिगत ओलंपिक स्वर्ण पदक जीतने वाले पहले भारतीय कौन बने?", options: ["Neeraj Chopra (नीरज चोपड़ा)", "Abhinav Bindra (अभिनव बिंद्रा)", "Milkha Singh (मिलखा सिंह)", "P.V. Sindhu (पी.वी. सिंधु)"], correct: "Neeraj Chopra (नीरज चोपड़ा)", category: "Medium" },
      { id: 17, text: "(Science & Tech) What is India's first manned ocean mission called? / भारत के पहले मानवयुक्त महासागर मिशन को क्या कहा जाता है?", options: ["Samudrayaan (समुद्रयान)", "Gaganyaan (गगनयान)", "Sagar-Manthan (सागर-मंथन)", "DeepOcean-1"], correct: "Samudrayaan (समुद्रयान)", category: "Medium" },
      { id: 18, text: "(Polity) The Right to Education (RTE) Act was enacted in which year in India? / भारत में शिक्षा का अधिकार (RTE) अधिनियम किस वर्ष अधिनियमित किया गया था?", options: ["2009", "2005", "2010", "2012"], correct: "2009", category: "Medium" },
      { id: 19, text: "(History) Who was the Governor-General of India during the Revolt of 1857? / 1857 के विद्रोह के दौरान भारत का गवर्नर-जनरल कौन था?", options: ["Lord Canning (लॉर्ड कैनिंग)", "Lord Dalhousie (लॉर्ड डलहौजी)", "Lord William Bentinck (लॉर्ड विलियम बेंटिक)", "Lord Mountbatten (लॉर्ड माउंटबेटन)"], correct: "Lord Canning (लॉर्ड कैनिंग)", category: "Medium" },
      { id: 20, text: "(Economics) Which sector contributes the most to India's GDP? / भारत के सकल घरेलू उत्पाद (GDP) में कौन सा क्षेत्र सबसे अधिक योगदान देता है?", options: ["Services Sector (सेवा क्षेत्र)", "Agriculture Sector (कृषि क्षेत्र)", "Industry Sector (उद्योग क्षेत्र)", "Manufacturing Sector (विनिर्माण क्षेत्र)"], correct: "Services Sector (सेवा क्षेत्र)", category: "Medium" },
      { id: 21, text: "(Polity) The concept of 'Directive Principles of State Policy' (DPSP) in the Indian Constitution was borrowed from which country? / भारतीय संविधान में 'राज्य के नीति निर्देशक सिद्धांतों' (DPSP) की अवधारणा किस देश से ली गई थी?", options: ["Ireland (आयरलैंड)", "USA (संयुक्त राज्य अमेरिका)", "USSR (सोवियत संघ)", "Australia (ऑस्ट्रेलिया)"], correct: "Ireland (आयरलैंड)", category: "Hard" },
      { id: 22, text: "(Science & Tech) What is the name of ISRO's solar mission launched in September 2023? / सितंबर 2023 में लॉन्च किए गए इसरो के सौर मिशन का नाम क्या है?", options: ["Aditya-L1 (आदित्य-L1)", "Solar-India", "Helios-I", "Sun-Observer"], correct: "Aditya-L1 (आदित्य-L1)", category: "Hard" },
      { id: 23, text: "(Geography) The 'Dien Bien Phu' valley, recently in news, is located in which country? / हाल ही में खबरों में रही 'डिएन बिएन फू' घाटी किस देश में स्थित है?", options: ["Vietnam (वियतनाम)", "Cambodia (कंबोडिया)", "Laos (लाओस)", "Thailand (थाईलैंड)"], correct: "Vietnam (वियतनाम)", category: "Hard" },
      { id: 24, text: "(History) Under whose reign was the fourth Buddhist Council held in Kashmir? / कश्मीर में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?", options: ["Kanishka (कनिष्क)", "Ashoka (अशोक)", "Kalashoka (कालाशोक)", "Ajatashatru (अजातशत्रु)"], correct: "Kanishka (कनिष्क)", category: "Hard" },
      { id: 25, text: "(Economics) The term 'Giffen Good' in economics refers to: / अर्थशास्त्र में 'गिफेन वस्तु' (Giffen Good) शब्द का क्या अर्थ है?", options: ["A good for which demand increases as price increases (एक वस्तु जिसकी कीमत बढ़ने पर मांग भी बढ़ती है)", "A luxurious good", "A highly discounted item", "A normal consumer good"], correct: "A good for which demand increases as price increases (एक वस्तु जिसकी कीमत बढ़ने पर मांग भी बढ़ती है)", category: "Hard" },
      { id: 26, text: "(Polity) Under which Article of the Indian Constitution can the President declare a Financial Emergency? / भारतीय संविधान के किस अनुच्छेद के तहत राष्ट्रपति वित्तीय आपातकाल की घोषणा कर सकते हैं?", options: ["Article 360 (अनुच्छेद 360)", "Article 352 (अनुच्छेद 352)", "Article 356 (अनुच्छेद 356)", "Article 368 (अनुच्छेद 368)"], correct: "Article 360 (अनुच्छेद 360)", category: "Hard" },
      { id: 27, text: "(Sports) Who became the youngest Grandmaster of India in Chess (as of 2024)? / शतरंज में भारत के सबसे कम उम्र के ग्रैंडमास्टर कौन बने (2024 तक)?", options: ["D. Gukesh (डी. गुकेश)", "R. Praggnanandhaa (आर. प्रज्ञानंद)", "Arjun Erigaisi (अर्जुन एरिगैसी)", "Vidit Gujrathi (विदित गुजराती)"], correct: "D. Gukesh (डी. गुकेश)", category: "Hard" },
      { id: 28, text: "(Culture) 'Sattriya' is the classical dance form of which Indian state? / 'सत्रिया' किस भारतीय राज्य का शास्त्रीय नृत्य है?", options: ["Assam (असम)", "Manipur (मणिपुर)", "Tripura (त्रिपुरा)", "Meghalaya (मेघालय)"], correct: "Assam (असम)", category: "Hard" },
      { id: 29, text: "(Science & Tech) Which space agency developed the first 3D-printed rocket engine launched into space from India? / अंतरिक्ष में लॉन्च किए गए पहले 3D-प्रिंटेड रॉकेट इंजन को भारत में किस स्टार्ट-अप द्वारा विकसित किया गया था?", options: ["Agnikul Cosmos (अग्निकुल कॉस्मॉस)", "Skyroot Aerospace (स्काईरूट एयरोस्पेस)", "Dhruva Space", "Bellatrix Aerospace"], correct: "Agnikul Cosmos (अग्निकुल कॉस्मॉस)", category: "Hard" },
      { id: 30, text: "(History) Who was the author of the famous book 'Kitab-ul-Hind'? / प्रसिद्ध पुस्तक 'किताब-उल-हिंद' के लेखक कौन थे?", options: ["Al-Biruni (अल-बिरूनी)", "Ibn Battuta (इब्न बतूता)", "Abul Fazl (अबुल फजल)", "Amir Khusrau (अमीर खुसरो)"], correct: "Al-Biruni (अल-बिरूनी)", category: "Hard" }
    ]
  },
  {
    id: 2,
    title: "RRB Group D General Awareness Mock Test - 2",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) In which sport is the Davis Cup awarded? / डेविस कप किस खेल में प्रदान किया जाता है?", options: ["Tennis (टेनिस)", "Football (फुटबॉल)", "Badminton (बैडमिंटन)", "Golf (गोल्फ)"], correct: "Tennis (टेनिस)", category: "Easy" },
      { id: 2, text: "(Polity) What is the minimum age required to become the Prime Minister of India? / भारत का प्रधानमंत्री बनने के लिए न्यूनतम आयु सीमा क्या है?", options: ["25 Years (25 वर्ष)", "30 Years", "35 Years", "18 Years"], correct: "25 Years (25 वर्ष)", category: "Easy" },
      { id: 3, text: "(Science & Tech) Which country launched the world's first artificial satellite, Sputnik 1? / विश्व का पहला कृत्रिम उपग्रह, स्पुतनिक 1 किस देश ने लॉन्च किया था?", options: ["USSR (सोवियत संघ)", "USA (संयुक्त राज्य अमेरिका)", "United Kingdom", "France"], correct: "USSR (सोवियत संघ)", category: "Easy" },
      { id: 4, text: "(Culture) In which state is the famous festival 'Hornbill' celebrated? / प्रसिद्ध त्योहार 'हॉर्नबिल' किस राज्य में मनाया जाता है?", options: ["Nagaland (नागालैंड)", "Manipur (मणिपुर)", "Mizoram (मिजोरम)", "Arunachal Pradesh"], correct: "Nagaland (नागालैंड)", category: "Easy" },
      { id: 5, text: "(Economics) What is the full form of GST? / GST का पूर्ण रूप क्या है?", options: ["Goods and Services Tax (वस्तु एवं सेवा कर)", "Government Services Tax", "Global Sales Tax", "General Sales Tax"], correct: "Goods and Services Tax (वस्तु एवं सेवा कर)", category: "Easy" },
      { id: 6, text: "(Geography) Which Indian state is known as the 'Land of Five Rivers'? / किस भारतीय राज्य को 'पांच नदियों की भूमि' कहा जाता है?", options: ["Punjab (पंजाब)", "Haryana (हरियाणा)", "Uttar Pradesh", "Bihar"], correct: "Punjab (पंजाब)", category: "Easy" },
      { id: 7, text: "(History) The Harappan Civilization belonged to which age? / हड़प्पा सभ्यता किस युग से संबंधित थी?", options: ["Bronze Age (कांस्य युग)", "Stone Age (पाषाण युग)", "Iron Age (लोह युग)", "Neolithic Age"], correct: "Bronze Age (कांस्य युग)", category: "Easy" },
      { id: 8, text: "(Polity) Who appoints the Chief Justice of India? / भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?", options: ["President of India (भारत के राष्ट्रपति)", "Prime Minister of India", "Law Minister", "Parliament"], correct: "President of India (भारत के राष्ट्रपति)", category: "Easy" },
      { id: 9, text: "(Sports) Who has won the most Ballon d'Or awards in Football history? / फुटबॉल इतिहास में सबसे अधिक बैलन डी'ओर पुरस्कार किसने जीते हैं?", options: ["Lionel Messi (लियोनेल मेसी)", "Cristiano Ronaldo (क्रिस्टियानो रोनाल्डो)", "Pelé (पेले)", "Diego Maradona"], correct: "Lionel Messi (लियोनेल मेसी)", category: "Easy" },
      { id: 10, text: "(Science & Tech) What is the chemical formula of ozone gas? / ओजोन गैस का रासायनिक सूत्र क्या है?", options: ["O3", "O2", "CO2", "H2O"], correct: "O3", category: "Easy" },
      { id: 11, text: "(Polity) Which Article of the Constitution gives the power to the President to grant pardons? / संविधान का कौन सा अनुच्छेद राष्ट्रपति को क्षमादान देने की शक्ति प्रदान करता है?", options: ["Article 72 (अनुच्छेद 72)", "Article 61", "Article 123", "Article 356"], correct: "Article 72 (अनुच्छेद 72)", category: "Medium" },
      { id: 12, text: "(Geography) Which state in India is the largest producer of coffee? / भारत में कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?", options: ["Karnataka (कर्नाटक)", "Kerala (केरल)", "Tamil Nadu (तमिलनाडु)", "Andhra Pradesh"], correct: "Karnataka (कर्नाटक)", category: "Medium" },
      { id: 13, text: "(Culture) The famous classical dance 'Bharatanatyam' originated in which state? / प्रसिद्ध शास्त्रीय नृत्य 'भरतनाट्यम' की उत्पत्ति किस राज्य में हुई थी?", options: ["Tamil Nadu (तमिलनाडु)", "Kerala (केरल)", "Andhra Pradesh", "Odisha"], correct: "Tamil Nadu (तमिलनाडु)", category: "Medium" },
      { id: 14, text: "(History) The Quit India Movement was launched in which year? / भारत छोड़ो आंदोलन किस वर्ष शुरू किया गया था?", options: ["1942", "1930", "1920", "1947"], correct: "1942", category: "Medium" },
      { id: 15, text: "(Economics) Which organization publishes the Human Development Index (HDI)? / मानव विकास सूचकांक (HDI) कौन सा संगठन प्रकाशित करता है?", options: ["UNDP", "World Bank", "IMF", "UNESCO"], correct: "UNDP", category: "Medium" },
      { id: 16, text: "(Sports) In which city are the 2026 Winter Olympic Games scheduled to be held? / 2026 शीतकालीन ओलंपिक खेल किस शहर में आयोजित होने वाले हैं?", options: ["Milan and Cortina (मिलान और कॉर्टिना)", "Beijing", "Pyeongchang", "Vancouver"], correct: "Milan and Cortina (मिलान और कॉर्टिना)", category: "Medium" },
      { id: 17, text: "(Science & Tech) What is the name of India's first indigenous COVID-19 vaccine? / भारत के पहले स्वदेशी COVID-19 टीके का नाम क्या है?", options: ["Covaxin (कोवैक्सिन)", "Covishield (कोविशील्ड)", "Corbevax", "Sputnik V"], correct: "Covaxin (कोवैक्सिन)", category: "Medium" },
      { id: 18, text: "(Polity) Which Constitutional Amendment is known as the 'Mini Constitution' of India? / किस संविधान संशोधन को भारत का 'लघु संविधान' कहा जाता है?", options: ["42nd Amendment (42वां संशोधन)", "44th Amendment", "86th Amendment", "73rd Amendment"], correct: "42nd Amendment (42वां संशोधन)", category: "Medium" },
      { id: 19, text: "(History) The Battle of Plassey was fought in which year? / प्लासी का युद्ध किस वर्ष लड़ा गया था?", options: ["1757", "1764", "1857", "1526"], correct: "1757", category: "Medium" },
      { id: 20, text: "(Economics) Who is known as the Father of Green Revolution in India? / भारत में हरित क्रांति के जनक के रूप में किसे जाना जाता है?", options: ["M.S. Swaminathan (एम.एस. स्वामीनाथन)", "Norman Borlaug", "Verghese Kurien", "C. Subramaniam"], correct: "M.S. Swaminathan (एम.एस. स्वामीनाथन)", category: "Medium" },
      { id: 21, text: "(Polity) The joint sitting of both Houses of Parliament is presided over by: / संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता किसके द्वारा की जाती है?", options: ["Speaker of Lok Sabha (लोकसभा अध्यक्ष)", "President of India", "Vice President of India", "Prime Minister"], correct: "Speaker of Lok Sabha (लोकसभा अध्यक्ष)", category: "Hard" },
      { id: 22, text: "(Science & Tech) What is the payload of India's Aditya-L1 solar mission? / भारत के आदित्य-L1 सौर मिशन में कितने पेलोड हैं?", options: ["7 Payouts (7 पेलोड)", "5 Payouts", "9 Payouts", "6 Payouts"], correct: "7 Payouts (7 पेलोड)", category: "Hard" },
      { id: 23, text: "(Geography) Through which of the following states does the Tropic of Cancer NOT pass? / कर्क रेखा निम्नलिखित में से किस राज्य से होकर नहीं गुजरती है?", options: ["Odisha (ओडिशा)", "Gujarat (गुजरात)", "Tripura (त्रिपुरा)", "Rajasthan (राजस्थान)"], correct: "Odisha (ओडिशा)", category: "Hard" },
      { id: 24, text: "(History) The Ghadar Party was founded in 1913 at which place? / गदर पार्टी की स्थापना 1913 में किस स्थान पर की गई थी?", options: ["San Francisco (सैन फ्रांसिस्को)", "London", "Tokyo", "Berlin"], correct: "San Francisco (सैन फ्रांसिस्को)", category: "Hard" },
      { id: 25, text: "(Economics) What is the main objective of monetary policy in India? / भारत में मौद्रिक नीति (Monetary Policy) का मुख्य उद्देश्य क्या है?", options: ["Price stability with growth (विकास के साथ मूल्य स्थिरता)", "Job generation", "Import increase", "Agricultural subsidy"], correct: "Price stability with growth (विकास के साथ मूल्य स्थिरता)", category: "Hard" },
      { id: 26, text: "(Polity) How many members are nominated to the Rajya Sabha by the President? / राष्ट्रपति द्वारा राज्यसभा में कितने सदस्यों को मनोनीत किया जाता है?", options: ["12 Members (12 सदस्य)", "10 Members", "15 Members", "2 Members"], correct: "12 Members (12 सदस्य)", category: "Hard" },
      { id: 27, text: "(Sports) Who became the first Indian woman to win two Olympic medals? / दो ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन बनीं?", options: ["P.V. Sindhu (पी.वी. सिंधु)", "Saina Nehwal", "Mary Kom", "Mirabai Chanu"], correct: "P.V. Sindhu (पी.वी. सिंधु)", category: "Hard" },
      { id: 28, text: "(Culture) 'Santhara' is a religious ritual of which community? / 'संथारा' किस समुदाय का एक धार्मिक अनुष्ठान है?", options: ["Jains (जैन)", "Buddhists", "Sikhs", "Hindus"], correct: "Jains (जैन)", category: "Hard" },
      { id: 29, text: "(Science & Tech) India's first supercomputer is known as: / भारत के पहले सुपर कंप्यूटर को किस नाम से जाना जाता है?", options: ["PARAM 8000 (परम 8000)", "Pratyush", "Mihir", "Sahasrat"], correct: "PARAM 8000 (परम 8000)", category: "Hard" },
      { id: 30, text: "(History) Under which Treaty did the East India Company acquire the Diwani rights of Bengal, Bihar, and Odisha? / किस संधि के तहत ईस्ट इंडिया कंपनी ने बंगाल, बिहार और ओडिशा के दीवानी अधिकार प्राप्त किए थे?", options: ["Treaty of Allahabad (इलाहाबाद की संधि - 1765)", "Treaty of Paris", "Treaty of Madras", "Treaty of Seringapatam"], correct: "Treaty of Allahabad (इलाहाबाद की संधि - 1765)", category: "Hard" }
    ]
  },
  {
    id: 3,
    title: "RRB Group D General Awareness Mock Test - 3",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) The term 'Dribbling' is associated with which sport? / 'ड्रिबलिंग' शब्द किस खेल से संबंधित है?", options: ["Basketball (बास्केटबॉल)", "Cricket (क्रिकेट)", "Badminton", "Chess"], correct: "Basketball (बास्केटबॉल)", category: "Easy" },
      { id: 2, text: "(Polity) What is the tenure of a member of Rajya Sabha? / राज्यसभा के एक सदस्य का कार्यकाल कितना होता है?", options: ["6 Years (6 वर्ष)", "5 Years", "4 Years", "2 Years"], correct: "6 Years (6 वर्ष)", category: "Easy" },
      { id: 3, text: "(Science & Tech) Who is known as the Father of Indian Space Program? / भारतीय अंतरिक्ष कार्यक्रम के जनक के रूप में किसे जाना जाता है?", options: ["Vikram Sarabhai (विक्रम साराभाई)", "Homi Bhabha", "A.P.J. Abdul Kalam", "Satish Dhawan"], correct: "Vikram Sarabhai (विक्रम साराभाई)", category: "Easy" },
      { id: 4, text: "(Culture) Where is the world-famous Ajanta Caves located? / विश्व प्रसिद्ध अजंता की गुफाएं कहाँ स्थित हैं?", options: ["Maharashtra (महाराष्ट्र)", "Madhya Pradesh", "Rajasthan", "Gujarat"], correct: "Maharashtra (महाराष्ट्र)", category: "Easy" },
      { id: 5, text: "(Economics) Which institution replaced the Planning Commission of India? / किस संस्थान ने भारत के योजना आयोग को प्रतिस्थापित किया?", options: ["NITI Aayog (नीति आयोग)", "Finance Commission", "National Development Council", "RBI"], correct: "NITI Aayog (नीति आयोग)", category: "Easy" },
      { id: 6, text: "(Geography) Which river is known as the 'Sorrow of Bihar'? / किस नदी को 'बिहार का शोक' कहा जाता है?", options: ["Kosi River (कोसी नदी)", "Ganga River", "Son River", "Gandak River"], correct: "Kosi River (कोसी नदी)", category: "Easy" },
      { id: 7, text: "(History) Who was the last emperor of the Mughal Empire? / मुगल साम्राज्य का अंतिम सम्राट कौन था?", options: ["Bahadur Shah Zafar (बहादुर शाह जफर)", "Aurangzeb", "Shah Alam II", "Akbar II"], correct: "Bahadur Shah Zafar (बहादुर शाह जफर)", category: "Easy" },
      { id: 8, text: "(Polity) Which body is responsible for conducting elections in India? / भारत में चुनाव कराने के लिए कौन सा निकाय जिम्मेदार है?", options: ["Election Commission of India (भारत निर्वाचन आयोग)", "Parliament", "Supreme Court", "Ministry of Home Affairs"], correct: "Election Commission of India (भारत निर्वाचन आयोग)", category: "Easy" },
      { id: 9, text: "(Sports) In which year did India win its first Cricket World Cup? / भारत ने अपना पहला क्रिकेट विश्व कप किस वर्ष जीता था?", options: ["1983", "2011", "2007", "1975"], correct: "1983", category: "Easy" },
      { id: 10, text: "(Science & Tech) Which country developed the first operational GPS system? / पहला कार्यात्मक GPS सिस्टम किस देश ने विकसित किया था?", options: ["USA (संयुक्त राज्य अमेरिका)", "Russia", "China", "Germany"], correct: "USA (संयुक्त राज्य अमेरिका)", category: "Easy" },
      { id: 11, text: "(Polity) The concept of single citizenship in India is borrowed from: / भारत में एकल नागरिकता (Single Citizenship) की अवधारणा कहाँ से ली गई है?", options: ["United Kingdom (ब्रिटेन)", "USA", "Canada", "Australia"], correct: "United Kingdom (ब्रिटेन)", category: "Medium" },
      { id: 12, text: "(Geography) Which line divides India and China? / भारत और चीन को कौन सी रेखा विभाजित करती है?", options: ["MacMahon Line (मैकमोहन रेखा)", "Radcliffe Line", "Durand Line", "Palk Strait"], correct: "MacMahon Line (मैकमोहन रेखा)", category: "Medium" },
      { id: 13, text: "(Culture) In which temple is the famous Jagannath Rath Yatra held? / प्रसिद्ध जगन्नाथ रथ यात्रा किस मंदिर में आयोजित की जाती है?", options: ["Puri, Odisha (पुरी, ओडिशा)", "Konark", "Bhubaneswar", "Tirupati"], correct: "Puri, Odisha (पुरी, ओडिशा)", category: "Medium" },
      { id: 14, text: "(History) The Non-Cooperation Movement was suspended after which event? / असहयोग आंदोलन को किस घटना के बाद स्थगित कर दिया गया था?", options: ["Chauri Chaura incident (चौरी चौरा घटना)", "Jallianwala Bagh massacre", "Dandi March", "Partition of Bengal"], correct: "Chauri Chaura incident (चौरी चौरा घटना)", category: "Medium" },
      { id: 15, text: "(Economics) The term 'Repo Rate' is determined by: / 'रेपो रेट' (Repo Rate) शब्द किसके द्वारा निर्धारित किया जाता है?", options: ["Reserve Bank of India (RBI)", "Ministry of Finance", "SBI", "NITI Aayog"], correct: "Reserve Bank of India (RBI)", category: "Medium" },
      { id: 16, text: "(Sports) Who became the first Indian wrestler to win two individual Olympic medals? / दो व्यक्तिगत ओलंपिक पदक जीतने वाले पहले भारतीय पहलवान कौन बने?", options: ["Sushil Kumar (सुशील कुमार)", "Bajrang Punia", "Ravi Dahiya", "Yogeshwar Dutt"], correct: "Sushil Kumar (सुशील कुमार)", category: "Medium" },
      { id: 17, text: "(Science & Tech) Which satellite launched by ISRO is known as India's first dedicated military communication satellite? / इसरो द्वारा लॉन्च किया गया कौन सा उपग्रह भारत का पहला समर्पित सैन्य संचार उपग्रह है?", options: ["GSAT-7 (रुक्मिणी)", "Cartosat-2", "RISAT-1", "INSAT-4B"], correct: "GSAT-7 (रुक्मिणी)", category: "Medium" },
      { id: 18, text: "(Polity) Fundamental Rights are guaranteed by which part of the Indian Constitution? / भारतीय संविधान के किस भाग द्वारा मौलिक अधिकारों की गारंटी दी गई है?", options: ["Part III (भाग III)", "Part IV", "Part II", "Part V"], correct: "Part III (भाग III)", category: "Medium" },
      { id: 19, text: "(History) Who was the founder of Arya Samaj? / आर्य समाज के संस्थापक कौन थे?", options: ["Swami Dayanand Saraswati (स्वामी दयानंद सरस्वती)", "Raja Ram Mohan Roy", "Swami Vivekananda", "Ishwar Chandra Vidyasagar"], correct: "Swami Dayanand Saraswati (स्वामी दयानंद सरस्वती)", category: "Medium" },
      { id: 20, text: "(Economics) Which regulatory authority controls the capital market in India? / भारत में पूंजी बाजार (Capital Market) को कौन सा नियामक प्राधिकरण नियंत्रित करता है?", options: ["SEBI (सेबी)", "RBI", "IRDAI", "PFRDA"], correct: "SEBI (सेबी)", category: "Medium" },
      { id: 21, text: "(Polity) Who is the final authority to interpret the Constitution in India? / भारत में संविधान की व्याख्या करने वाला अंतिम प्राधिकरण कौन सा है?", options: ["Supreme Court of India (भारत का सर्वोच्च न्यायालय)", "President", "Parliament", "Prime Minister"], correct: "Supreme Court of India (भारत का सर्वोच्च न्यायालय)", category: "Hard" },
      { id: 22, text: "(Science & Tech) Gaganyaan mission aim is to send astronauts to which orbit? / गगनयान मिशन का उद्देश्य अंतरिक्ष यात्रियों को किस कक्षा में भेजना है?", options: ["Low Earth Orbit (LEO)", "Geostationary Orbit (GEO)", "Polar Orbit", "Medium Earth Orbit (MEO)"], correct: "Low Earth Orbit (LEO)", category: "Hard" },
      { id: 23, text: "(Geography) The standard meridian of India passes through which city? / भारत का मानक मध्याह्न (Standard Meridian) किस शहर से होकर गुजरता है?", options: ["Mirzapur, Uttar Pradesh (मिर्जापुर)", "Patna", "Ranchi", "Ujjain"], correct: "Mirzapur, Uttar Pradesh (मिर्जापुर)", category: "Hard" },
      { id: 24, text: "(History) Under whose leadership was the Indian National Army (INA) reorganized in 1943? / 1943 में आज़ाद हिन्द फ़ौज (INA) का पुनर्गठन किसके नेतृत्व में किया गया था?", options: ["Subhas Chandra Bose (सुभाष चंद्र बोस)", "Rash Behari Bose", "Mohan Singh", "Lala Har Dayal"], correct: "Subhas Chandra Bose (सुभाष चंद्र बोस)", category: "Hard" },
      { id: 25, text: "(Economics) What is the base year for calculation of Consumer Price Index (CPI) in India currently? / वर्तमान में भारत में उपभोक्ता मूल्य सूचकांक (CPI) की गणना के लिए आधार वर्ष क्या है?", options: ["2012", "2011-12", "2004-05", "2015"], correct: "2012", category: "Hard" },
      { id: 26, text: "(Polity) How many languages are currently recognized in the 8th Schedule of the Constitution? / वर्तमान में संविधान की 8वीं अनुसूची में कितनी भाषाओं को मान्यता प्राप्त है?", options: ["22 Languages (22 भाषाएँ)", "18 Languages", "20 Languages", "24 Languages"], correct: "22 Languages (22 भाषाएँ)", category: "Hard" },
      { id: 27, text: "(Sports) Dhyan Chand Trophy is associated with which sport? / ध्यानचंद ट्रॉफी किस खेल से संबंधित है?", options: ["Hockey (हॉकी)", "Cricket", "Football", "Athletics"], correct: "Hockey (हॉकी)", category: "Hard" },
      { id: 28, text: "(Culture) 'Losoong' is a festival celebrated in which state? / 'लोसूंग' (Losoong) किस राज्य में मनाया जाने वाला त्योहार है?", options: ["Sikkim (सिक्किम)", "Meghalaya", "Nagaland", "Mizoram"], correct: "Sikkim (सिक्किम)", category: "Hard" },
      { id: 29, text: "(Science & Tech) India's first nuclear power station was established at which place? / भारत का पहला परमाणु ऊर्जा स्टेशन किस स्थान पर स्थापित किया गया था?", options: ["Tarapur, Maharashtra (तारापुर)", "Rawatbhata", "Kalpakkam", "Kiga"], correct: "Tarapur, Maharashtra (तारापुर)", category: "Hard" },
      { id: 30, text: "(History) The Cabinet Mission arrived in India in which year? / कैबिनेट मिशन किस वर्ष भारत आया था?", options: ["1946", "1942", "1945", "1947"], correct: "1946", category: "Hard" }
    ]
  },
  {
    id: 4,
    title: "RRB Group D General Awareness Mock Test - 4",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Term 'Checkmate' is related to: / 'शह और मात' (Checkmate) शब्द किस खेल से संबंधित है?", options: ["Chess (शतरंज)", "Boxing", "Tennis", "Wrestling"], correct: "Chess (शतरंज)", category: "Easy" },
      { id: 2, text: "(Polity) Rajya Sabha members are elected for: / राज्यसभा सदस्य कितने समय के लिए निर्वाचित होते हैं?", options: ["6 Years (6 वर्ष)", "5 Years", "4 Years", "2 Years"], correct: "6 Years (6 वर्ष)", category: "Easy" },
      { id: 3, text: "(Science & Tech) Father of Indian Nuclear Program: / भारतीय परमाणु कार्यक्रम के जनक कौन माने जाते हैं?", options: ["Homi Bhabha (होमी भाभा)", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"], correct: "Homi Bhabha (होमी भाभा)", category: "Easy" },
      { id: 4, text: "(Culture) World famous Sun Temple Konark state: / विश्व प्रसिद्ध कोणार्क सूर्य मंदिर किस राज्य में है?", options: ["Odisha (ओडिशा)", "West Bengal", "Bihar", "Assam"], correct: "Odisha (ओडिशा)", category: "Easy" },
      { id: 5, text: "(Economics) Planning Commission replaced by: / योजना आयोग को किसके द्वारा प्रतिस्थापित किया गया था?", options: ["NITI Aayog (नीति आयोग)", "Finance Commission", "RBI", "SEBI"], correct: "NITI Aayog (नीति आयोग)", category: "Easy" },
      { id: 6, text: "(Geography) Sorrow of Bengal river: / 'बंगाल का शोक' किस नदी को कहा जाता है?", options: ["Damodar (दामोदर)", "Kosi", "Hooghly", "Ganga"], correct: "Damodar (दामोदर)", category: "Easy" },
      { id: 7, text: "(History) Last Mughal Emperor: / अंतिम मुगल सम्राट कौन था?", options: ["Bahadur Shah II (बहादुर शाह द्वितीय)", "Aurangzeb", "Shah Alam", "Akbar Shah"], correct: "Bahadur Shah II (बहादुर शाह द्वितीय)", category: "Easy" },
      { id: 8, text: "(Polity) Election Commission Article: / भारतीय निर्वाचन आयोग किस अनुच्छेद के तहत आता है?", options: ["Article 324 (अनुच्छेद 324)", "Article 356", "Article 370", "Article 280"], correct: "Article 324 (अनुच्छेद 324)", category: "Easy" },
      { id: 9, text: "(Sports) First individual Olympic gold for India: / भारत के लिए पहला व्यक्तिगत ओलंपिक स्वर्ण पदक किसने जीता?", options: ["Abhinav Bindra (अभिनव बिंद्रा)", "Neeraj Chopra", "Rajyavardhan Rathore", "K.D. Jadhav"], correct: "Abhinav Bindra (अभिनव बिंद्रा)", category: "Easy" },
      { id: 10, text: "(Science & Tech) First satellite of India: / भारत का पहला उपग्रह कौन सा था?", options: ["Aryabhata (आर्यभट्ट)", "Rohini", "Bhaskara", "Apple"], correct: "Aryabhata (आर्यभट्ट)", category: "Easy" },
      { id: 11, text: "(Polity) Single citizenship in India is from: / भारत की एकल नागरिकता किस देश के संविधान से प्रेरित है?", options: ["Britain (ब्रिटेन)", "USA", "Canada", "Australia"], correct: "Britain (ब्रिटेन)", category: "Medium" },
      { id: 12, text: "(Geography) Line dividing India and China: / भारत और चीन के बीच की सीमा रेखा:", options: ["MacMahon Line (मैकमोहन रेखा)", "Radcliffe Line", "Durand Line", "10 Degree Channel"], correct: "MacMahon Line (मैकमोहन रेखा)", category: "Medium" },
      { id: 13, text: "(Culture) Jagannath Rath Yatra city: / प्रसिद्ध जगन्नाथ रथ यात्रा कहाँ आयोजित होती है?", options: ["Puri (पुरी)", "Konark", "Bhubaneswar", "Cuttack"], correct: "Puri (पुरी)", category: "Medium" },
      { id: 14, text: "(History) Suspended Non-Cooperation Movement incident: / किस घटना के कारण असहयोग आंदोलन स्थगित हुआ?", options: ["Chauri Chaura (चौरी चौरा)", "Jallianwala Bagh", "Dandi", "Partition"], correct: "Chauri Chaura (चौरी चौरा)", category: "Medium" },
      { id: 15, text: "(Economics) Repo Rate decider: / रेपो रेट का निर्धारण कौन करता है?", options: ["RBI (भारतीय रिजर्व बैंक)", "Finance Ministry", "SBI", "NITI Aayog"], correct: "RBI (भारतीय रिजर्व बैंक)", category: "Medium" },
      { id: 16, text: "(Sports) First Indian wrestler with two Olympic medals: / दो ओलंपिक पदक जीतने वाले पहले भारतीय पहलवान:", options: ["Sushil Kumar (सुशील कुमार)", "Bajrang Punia", "Ravi Dahiya", "Sakshi Malik"], correct: "Sushil Kumar (सुशील कुमार)", category: "Medium" },
      { id: 17, text: "(Science & Tech) First military communication satellite: / भारत का पहला सैन्य संचार उपग्रह कौन सा है?", options: ["GSAT-7 (रुक्मिणी)", "Cartosat-2", "RISAT-1", "GSAT-6"], correct: "GSAT-7 (रुक्मिणी)", category: "Medium" },
      { id: 18, text: "(Polity) Fundamental Rights part: / मौलिक अधिकार संविधान के किस भाग में हैं?", options: ["Part III (भाग III)", "Part IV", "Part II", "Part V"], correct: "Part III (भाग III)", category: "Medium" },
      { id: 19, text: "(History) Founder of Arya Samaj: / आर्य समाज के संस्थापक कौन थे?", options: ["Swami Dayanand Saraswati (स्वामी दयानंद सरस्वती)", "Raja Ram Mohan Roy", "Swami Vivekananda", "Keshab Chandra Sen"], correct: "Swami Dayanand Saraswati (स्वामी दयानंद सरस्वती)", category: "Medium" },
      { id: 20, text: "(Economics) Capital market regulator: / भारतीय पूंजी बाजार का नियामक:", options: ["SEBI (सेबी)", "RBI", "IRDA", "PFRDA"], correct: "SEBI (सेबी)", category: "Medium" },
      { id: 21, text: "(Polity) Final interpreter of Constitution: / भारतीय संविधान का अंतिम व्याख्याकार कौन है?", options: ["Supreme Court (सर्वोच्च न्यायालय)", "President", "Parliament", "Prime Minister"], correct: "Supreme Court (सर्वोच्च न्यायालय)", category: "Hard" },
      { id: 22, text: "(Science & Tech) Gaganyaan crew orbit aim: / गगनयान मिशन के तहत चालक दल को किस कक्षा में भेजा जाएगा?", options: ["Low Earth Orbit (LEO)", "GEO", "Polar Orbit", "MEO"], correct: "Low Earth Orbit (LEO)", category: "Hard" },
      { id: 23, text: "(Geography) Standard meridian city: / भारत की मानक मध्याह्न रेखा कहाँ से गुजरती है?", options: ["Mirzapur (मिर्जापुर)", "Patna", "Ranchi", "Ujjain"], correct: "Mirzapur (मिर्जापुर)", category: "Hard" },
      { id: 24, text: "(History) INA reorganization leader 1943: / 1943 में आजाद हिंद फौज का पुनर्गठन किसके नेतृत्व में हुआ?", options: ["Subhas Chandra Bose (सुभाष चंद्र बोस)", "Rash Behari Bose", "Mohan Singh", "Lala Lajpat Rai"], correct: "Subhas Chandra Bose (सुभाष चंद्र बोस)", category: "Hard" },
      { id: 25, text: "(Economics) CPI Base Year currently: / उपभोक्ता मूल्य सूचकांक का वर्तमान आधार वर्ष क्या है?", options: ["2012", "2011", "2004", "2015"], correct: "2012", category: "Hard" },
      { id: 26, text: "(Polity) Languages in 8th Schedule: / संविधान की 8वीं अनुसूची में कुल कितनी भाषाएं हैं?", options: ["22 Languages (22 भाषाएं)", "18", "20", "24"], correct: "22 Languages (22 भाषाएं)", category: "Hard" },
      { id: 27, text: "(Sports) Dhyan Chand Trophy sport: / ध्यानचंद ट्रॉफी किस खेल में दी जाती है?", options: ["Hockey (हॉकी)", "Cricket", "Football", "Tennis"], correct: "Hockey (हॉकी)", category: "Hard" },
      { id: 28, text: "(Culture) Losoong festival state: / 'लोसूंग' त्योहार किस राज्य में मनाया जाता है?", options: ["Sikkim (सिक्किम)", "Meghalaya", "Nagaland", "Mizoram"], correct: "Sikkim (सिक्किम)", category: "Hard" },
      { id: 29, text: "(Science & Tech) First nuclear power station: / भारत का पहला परमाणु ऊर्जा केंद्र:", options: ["Tarapur (तारापुर)", "Rawatbhata", "Kalpakkam", "Kaiga"], correct: "Tarapur (तारापुर)", category: "Hard" },
      { id: 30, text: "(History) Cabinet Mission year: / कैबिनेट मिशन किस वर्ष भारत आया था?", options: ["1946", "1942", "1945", "1947"], correct: "1946", category: "Hard" }
    ]
  },
  {
    id: 5,
    title: "RRB Group D General Awareness Mock Test - 5",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Term 'Deuce' is related to: / 'ड्यूस' (Deuce) शब्द किस खेल से संबंधित है?", options: ["Tennis (टेनिस)", "Football", "Cricket", "Hockey"], correct: "Tennis (टेनिस)", category: "Easy" },
      { id: 2, text: "(Polity) Lok Sabha tenure is normally: / लोकसभा का कार्यकाल सामान्यतः कितने वर्ष का होता है?", options: ["5 Years (5 वर्ष)", "6 Years", "4 Years", "3 Years"], correct: "5 Years (5 वर्ष)", category: "Easy" },
      { id: 3, text: "(Science & Tech) ISRO Headquarters location: / इसरो (ISRO) का मुख्यालय कहाँ स्थित है?", options: ["Bengaluru (बेंगलुरु)", "Mumbai", "New Delhi", "Sriharikota"], correct: "Bengaluru (बेंगलुरु)", category: "Easy" },
      { id: 4, text: "(Culture) Bihu dance state: / बिहू किस राज्य का प्रसिद्ध लोक नृत्य है?", options: ["Assam (असम)", "Odisha", "West Bengal", "Bihar"], correct: "Assam (असम)", category: "Easy" },
      { id: 5, text: "(Economics) Demonetization in India occurred in: / भारत में विमुद्रीकरण (Demonetization) किस वर्ष हुआ था?", options: ["2016", "2014", "2018", "2015"], correct: "2016", category: "Easy" },
      { id: 6, text: "(Geography) Highest peak in India (K2): / भारत की सबसे ऊंची चोटी कौन सी है?", options: ["K2 (Godwin Austen)", "Kanchenjunga", "Nanda Devi", "Anamudi"], correct: "K2 (Godwin Austen)", category: "Easy" },
      { id: 7, text: "(History) Who wrote 'Discovery of India'? / 'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी थी?", options: ["Jawaharlal Nehru (जवाहरलाल नेहरू)", "Mahatma Gandhi", "Subhas Chandra Bose", "B.R. Ambedkar"], correct: "Jawaharlal Nehru (जवाहरलाल नेहरू)", category: "Easy" },
      { id: 8, text: "(Polity) Guardian of Indian Constitution: / भारतीय संविधान का संरक्षक कौन है?", options: ["Supreme Court (सर्वोच्च न्यायालय)", "President", "Parliament", "Prime Minister"], correct: "Supreme Court (सर्वोच्च न्यायालय)", category: "Easy" },
      { id: 9, text: "(Sports) Term 'Chinaman' is related to: / 'चाइनामैन' शब्द किस खेल से संबंधित है?", options: ["Cricket (क्रिकेट)", "Football", "Tennis", "Golf"], correct: "Cricket (क्रिकेट)", category: "Easy" },
      { id: 10, text: "(Science & Tech) BARC stands for: / BARC का पूर्ण रूप क्या है?", options: ["Bhabha Atomic Research Centre (भाभा परमाणु अनुसंधान केंद्र)", "Bhabha Aerospace Research Council", "Bharat Atomic Research Commission", "None of these"], correct: "Bhabha Atomic Research Centre (भाभा परमाणु अनुसंधान केंद्र)", category: "Easy" },
      { id: 11, text: "(Polity) Retirement age of Supreme Court Judge: / सर्वोच्च न्यायालय के न्यायाधीश की सेवानिवृत्ति की आयु क्या है?", options: ["65 Years (65 वर्ष)", "62 Years", "60 Years", "70 Years"], correct: "65 Years (65 वर्ष)", category: "Medium" },
      { id: 12, text: "(Geography) Lake Chilika state: / चिल्का झील किस राज्य में स्थित है?", options: ["Odisha (ओडिशा)", "Andhra Pradesh", "Tamil Nadu", "Kerala"], correct: "Odisha (ओडिशा)", category: "Medium" },
      { id: 13, text: "(Culture) Garba dance state: / गरबा किस राज्य का प्रसिद्ध नृत्य है?", options: ["Gujarat (गुजरात)", "Rajasthan", "Maharashtra", "Madhya Pradesh"], correct: "Gujarat (गुजरात)", category: "Medium" },
      { id: 14, text: "(History) First round table conference held in: / प्रथम गोलमेज सम्मेलन किस वर्ष आयोजित किया गया था?", options: ["1930", "1931", "1932", "1929"], correct: "1930", category: "Medium" },
      { id: 15, text: "(Economics) Which planning system was used before NITI Aayog? / नीति आयोग से पहले किस नियोजन प्रणाली का उपयोग किया जाता था?", options: ["Five-Year Plans (पंचवर्षीय योजनाएं)", "Annual Budget Planning", "Ten-Year Plans", "None of these"], correct: "Five-Year Plans (पंचवर्षीय योजनाएं)", category: "Medium" },
      { id: 16, text: "(Sports) Santosh Trophy is associated with: / संतोष ट्रॉफी किस खेल से संबंधित है?", options: ["Football (फुटबॉल)", "Cricket", "Hockey", "Kabaddi"], correct: "Football (फुटबॉल)", category: "Medium" },
      { id: 17, text: "(Science & Tech) Param Siddhi is a: / 'परम सिद्धि' भारत का क्या है?", options: ["Supercomputer (सुपरकंप्यूटर)", "Missile System", "Fighter Jet", "Satellite"], correct: "Supercomputer (सुपरकंप्यूटर)", category: "Medium" },
      { id: 18, text: "(Polity) First Lok Sabha Speaker was: / लोकसभा के प्रथम अध्यक्ष कौन थे?", options: ["G.V. Mavalankar (जी.वी. मावलंकर)", "M.A. Ayyangar", "Hukum Singh", "Neelam Sanjiva Reddy"], correct: "G.V. Mavalankar (जी.वी. मावलंकर)", category: "Medium" },
      { id: 19, text: "(History) Jallianwala Bagh massacre occurred in: / जलियाँवाला बाग हत्याकांड किस शहर में हुआ था?", options: ["Amritsar (अमृतसर)", "Lahore", "Jalandhar", "Ludhiana"], correct: "Amritsar (अमृतसर)", category: "Medium" },
      { id: 20, text: "(Economics) Blue Revolution is related to: / नीली क्रांति (Blue Revolution) किससे संबंधित है?", options: ["Fish Production (मछली उत्पादन)", "Milk Production", "Oilseeds Production", "Water Conservation"], correct: "Fish Production (मछली उत्पादन)", category: "Medium" },
      { id: 21, text: "(Polity) Comptroller and Auditor General (CAG) Article: / कैग (CAG) का उल्लेख किस अनुच्छेद में है?", options: ["Article 148 (अनुच्छेद 148)", "Article 76", "Article 280", "Article 324"], correct: "Article 148 (अनुच्छेद 148)", category: "Hard" },
      { id: 22, text: "(Science & Tech) Indian missile Agni-V range is approx: / भारतीय मिसाइल अग्नि-V की मारक क्षमता लगभग कितनी है?", options: ["5000 km", "3000 km", "1000 km", "10000 km"], correct: "5000 km", category: "Hard" },
      { id: 23, text: "(Geography) Major tributary of Ganges that flows from south to north: / गंगा की कौन सी प्रमुख सहायक नदी दक्षिण से उत्तर की ओर बहती है?", options: ["Son (सोन)", "Yamuna", "Chambal", "Kosi"], correct: "Son (सोन)", category: "Hard" },
      { id: 24, text: "(History) Who founded the Swaraj Party in 1923? / 1923 में स्वराज पार्टी की स्थापना किसने की थी?", options: ["Motilal Nehru and C.R. Das (मोतीलाल नेहरू और सी.आर. दास)", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"], correct: "Motilal Nehru and C.R. Das (मोतीलाल नेहरू और सी.आर. दास)", category: "Hard" },
      { id: 25, text: "(Economics) Human Development Report is released by: / मानव विकास रिपोर्ट किसके द्वारा जारी की जाती है?", options: ["UNDP (संयुक्त राष्ट्र विकास कार्यक्रम)", "World Bank", "IMF", "WEF"], correct: "UNDP (संयुक्त राष्ट्र विकास कार्यक्रम)", category: "Hard" },
      { id: 26, text: "(Polity) First state formed on linguistic basis: / भाषाई आधार पर गठित होने वाला पहला राज्य कौन सा था?", options: ["Andhra Pradesh (आंध्र प्रदेश)", "Tamil Nadu", "Kerala", "Karnataka"], correct: "Andhra Pradesh (आंध्र प्रदेश)", category: "Hard" },
      { id: 27, text: "(Sports) In which Olympics did India win maximum gold medals in Hockey? / भारत ने हॉकी में किस ओलंपिक में सर्वाधिक स्वर्ण पदक जीते हैं?", options: ["1928-1956 Era (1928-1956 स्वर्ण युग)", "1980 Moscow", "1964 Tokyo", "None of these"], correct: "1928-1956 Era (1928-1956 स्वर्ण युग)", category: "Hard" },
      { id: 28, text: "(Culture) Hornbill Festival Nagaland celebrated in month of: / हॉर्नबिल महोत्सव नागालैंड में किस महीने मनाया जाता है?", options: ["December (दिसंबर)", "November", "January", "October"], correct: "December (दिसंबर)", category: "Hard" },
      { id: 29, text: "(Science & Tech) ISRO's first launch vehicle: / इसरो का पहला प्रक्षेपण यान कौन सा था?", options: ["SLV-3", "ASLV", "PSLV", "GSLV"], correct: "SLV-3", category: "Hard" },
      { id: 30, text: "(History) First Governor-General of Bengal: / बंगाल के प्रथम गवर्नर-जनरल कौन थे?", options: ["Warren Hastings (वारन हेस्टिंग्स)", "Lord Clive", "Lord Cornwallis", "Lord Wellesley"], correct: "Warren Hastings (वारन हेस्टिंग्स)", category: "Hard" }
    ]
  },
  {
    id: 6,
    title: "RRB Group D General Awareness Mock Test - 6",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Thomas Cup is associated with: / थॉमस कप किस खेल से संबंधित है?", options: ["Badminton (बैडमिंटन)", "Tennis", "Table Tennis", "Golf"], correct: "Badminton (बैडमिंटन)", category: "Easy" },
      { id: 2, text: "(Polity) Maximum members in Lok Sabha can be: / लोकसभा में अधिकतम सदस्यों की संख्या कितनी हो सकती है?", options: ["552", "545", "500", "550"], correct: "550", category: "Easy" },
      { id: 3, text: "(Science & Tech) Father of Indian Space Program: / भारतीय अंतरिक्ष कार्यक्रम के जनक कौन हैं?", options: ["Vikram Sarabhai (विक्रम साराभाई)", "Satish Dhawan", "A.P.J. Abdul Kalam", "U.R. Rao"], correct: "Vikram Sarabhai (विक्रम साराभाई)", category: "Easy" },
      { id: 4, text: "(Culture) Classical dance form of Tamil Nadu is: / तमिलनाडु का शास्त्रीय नृत्य कौन सा है?", options: ["Bharatanatyam (भरतनाट्यम)", "Kathakali", "Mohiniyattam", "Kathak"], correct: "Bharatanatyam (भरतनाट्यम)", category: "Easy" },
      { id: 5, text: "(Economics) Which planning body is chaired by PM? / भारत में किस नियोजन संस्था की अध्यक्षता प्रधानमंत्री करते हैं?", options: ["NITI Aayog (नीति आयोग)", "Finance Commission", "NDC", "Planning Commission"], correct: "NITI Aayog (नीति आयोग)", category: "Easy" },
      { id: 6, text: "(Geography) Lonar Lake is in state of: / लोनार झील किस राज्य में स्थित है?", options: ["Maharashtra (महाराष्ट्र)", "Gujarat", "Rajasthan", "Madhya Pradesh"], correct: "Maharashtra (महाराष्ट्र)", category: "Easy" },
      { id: 7, text: "(History) Author of 'Arthashastra' is: / 'अर्थशास्त्र' पुस्तक के लेखक कौन हैं?", options: ["Chanakya (चाणक्य)", "Megasthenes", "Kalidasa", "Banabhatta"], correct: "Chanakya (चाणक्य)", category: "Easy" },
      { id: 8, text: "(Polity) Fundamental Rights taken from: / भारतीय संविधान में मौलिक अधिकार किस देश से लिए गए हैं?", options: ["USA (संयुक्त राज्य अमेरिका)", "USSR", "UK", "Ireland"], correct: "USA (संयुक्त राज्य अमेरिका)", category: "Easy" },
      { id: 9, text: "(Sports) In Chess, vertical rows are called: / शतरंज में लंबवत पंक्तियों (Vertical Rows) को क्या कहा जाता है?", options: ["Files (फाइलें)", "Ranks", "Squares", "None of these"], correct: "Files (फाइलें)", category: "Easy" },
      { id: 10, text: "(Science & Tech) Chandrayaan-3 lander name: / चंद्रयान-3 के लैंडर का नाम क्या था?", options: ["Vikram (विक्रम)", "Pragyan (प्रज्ञान)", "Aditya", "Dhruv"], correct: "Vikram (विक्रम)", category: "Easy" },
      { id: 11, text: "(Polity) First Chief Election Commissioner of India: / भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options: ["Sukumar Sen (सुकुमार सेन)", "T.N. Seshan", "Sunil Arora", "Rajiv Kumar"], correct: "Sukumar Sen (सुकुमार सेन)", category: "Medium" },
      { id: 12, text: "(Geography) Major soil type in India by area: / क्षेत्रफल के अनुसार भारत में पाई जाने वाली सबसे प्रमुख मिट्टी:", options: ["Alluvial Soil (जलोढ़ मिट्टी)", "Black Soil", "Red Soil", "Laterite Soil"], correct: "Alluvial Soil (जलोढ़ मिट्टी)", category: "Medium" },
      { id: 13, text: "(Culture) 'Dandia' is folk dance of: / 'डांडिया' किस राज्य का लोक नृत्य है?", options: ["Gujarat (गुजरात)", "Rajasthan", "Maharashtra", "Madhya Pradesh"], correct: "Gujarat (गुजरात)", category: "Medium" },
      { id: 14, text: "(History) First Governor-General of independent India: / स्वतंत्र भारत के प्रथम गवर्नर-जनरल कौन थे?", options: ["Lord Mountbatten (लॉर्ड माउंटबेटन)", "C. Rajagopalachari", "Jawaharlal Nehru", "Dr. Rajendra Prasad"], correct: "Lord Mountbatten (लॉर्ड माउंटबेटन)", category: "Medium" },
      { id: 15, text: "(Economics) Father of Economics is: / अर्थशास्त्र के जनक किसे माना जाता है?", options: ["Adam Smith (एडम स्मिथ)", "Karl Marx", "Alfred Marshall", "John Keynes"], correct: "Adam Smith (एडम स्मिथ)", category: "Medium" },
      { id: 16, text: "(Sports) Major Dhyan Chand Khel Ratna award cash prize: / मेजर ध्यानचंद खेल रत्न पुरस्कार की पुरस्कार राशि क्या है?", options: ["₹25 Lakh (₹25 लाख)", "₹15 Lakh", "₹10 Lakh", "₹50 Lakh"], correct: "₹25 Lakh (₹25 लाख)", category: "Medium" },
      { id: 17, text: "(Science & Tech) First indigenous satellite launch vehicle: / भारत का पहला स्वदेशी उपग्रह प्रक्षेपण यान:", options: ["SLV-3", "ASLV", "PSLV", "GSLV"], correct: "SLV-3", category: "Medium" },
      { id: 18, text: "(Polity) Total Schedules in Indian Constitution currently: / वर्तमान में भारतीय संविधान में कुल कितनी अनुसूचियां हैं?", options: ["12 Schedules (12 अनुसूचियां)", "8 Schedules", "10 Schedules", "14 Schedules"], correct: "12 Schedules (12 अनुसूचियां)", category: "Medium" },
      { id: 19, text: "(History) Jallianwala Bagh incident year: / जलियाँवाला बाग हत्याकांड किस वर्ष हुआ था?", options: ["1919", "1920", "1918", "1921"], correct: "1919", category: "Medium" },
      { id: 20, text: "(Economics) White Revolution is related to: / श्वेत क्रांति (White Revolution) किससे संबंधित है?", options: ["Milk Production (दूध उत्पादन)", "Egg Production", "Cotton Production", "Wheat Production"], correct: "Milk Production (दूध उत्पादन)", category: "Medium" },
      { id: 21, text: "(Polity) Under which Article can National Emergency be declared? / किस अनुच्छेद के तहत राष्ट्रीय आपातकाल की घोषणा की जा सकती है?", options: ["Article 352 (अनुच्छेद 352)", "Article 356", "Article 360", "Article 368"], correct: "Article 352 (अनुच्छेद 352)", category: "Hard" },
      { id: 22, text: "(Science & Tech) ISRO's Venus mission name: / इसरो के प्रस्तावित शुक्र (Venus) मिशन का नाम क्या है?", options: ["Shukrayaan-1 (शुक्रयान-1)", "Venus-India", "Aditya-V", "None of these"], correct: "Shukrayaan-1 (शुक्रयान-1)", category: "Hard" },
      { id: 23, text: "(Geography) Dynamic state of India with maximum boundaries with other states: / सर्वाधिक राज्यों के साथ सीमा साझा करने वाला भारतीय राज्य कौन सा है?", options: ["Uttar Pradesh (उत्तर प्रदेश)", "Madhya Pradesh", "Maharashtra", "Assam"], correct: "Uttar Pradesh (उत्तर प्रदेश)", category: "Hard" },
      { id: 24, text: "(History) Forward Bloc was founded by: / फॉरवर्ड ब्लॉक की स्थापना किसने की थी?", options: ["Subhas Chandra Bose (सुभाष चंद्र बोस)", "Bhagat Singh", "Chandra Shekhar Azad", "Lala Lajpat Rai"], correct: "Subhas Chandra Bose (सुभाष चंद्र बोस)", category: "Hard" },
      { id: 25, text: "(Economics) First Five-Year Plan focused on: / प्रथम पंचवर्षीय योजना का मुख्य फोकस किस पर था?", options: ["Agriculture (कृषि)", "Industrialization", "Employment", "None of these"], correct: "Agriculture (कृषि)", category: "Hard" },
      { id: 26, text: "(Polity) The source of 'Preamble' in Indian Constitution: / भारतीय संविधान की 'प्रस्तावना' का विचार किस देश से लिया गया है?", options: ["USA (संयुक्त राज्य अमेरिका)", "France", "Australia", "UK"], correct: "USA (संयुक्त राज्य अमेरिका)", category: "Hard" },
      { id: 27, text: "(Sports) In which city were the first Asian Games held in 1951? / 1951 में पहले एशियाई खेल किस शहर में आयोजित किए गए थे?", options: ["New Delhi (नई दिल्ली)", "Tokyo", "Jakarta", "Manila"], correct: "New Delhi (नई दिल्ली)", category: "Hard" },
      { id: 28, text: "(Culture) 'Sangai Festival' is celebrated in: / 'संगाई महोत्सव' किस राज्य में मनाया जाता है?", options: ["Manipur (मणिपुर)", "Mizoram", "Nagaland", "Tripura"], correct: "Manipur (मणिपुर)", category: "Hard" },
      { id: 29, text: "(Science & Tech) First nuclear test of India codename: / भारत के पहले परमाणु परीक्षण का कोडनाम क्या था?", options: ["Smiling Buddha (स्माइलिंग बुद्धा)", "Operation Vijay", "Operation Shakti", "None of these"], correct: "Smiling Buddha (स्माइलिंग बुद्धा)", category: "Hard" },
      { id: 30, text: "(History) Author of 'Poverty and Un-British Rule in India': / 'पॉवर्टी एंड अन-ब्रिटिश रूल इन इंडिया' के लेखक कौन थे?", options: ["Dadabhai Naoroji (दादाभाई नौरोजी)", "R.C. Dutt", "Mahatma Gandhi", "Jawaharlal Nehru"], correct: "Dadabhai Naoroji (दादाभाई नौरोजी)", category: "Hard" }
    ]
  },
  {
    id: 7,
    title: "RRB Group D General Awareness Mock Test - 7",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Santosh Trophy is associated with: / संतोष ट्रॉफी किस खेल से संबंधित है?", options: ["Football (फुटबॉल)", "Cricket", "Hockey", "Tennis"], correct: "Football (फुटबॉल)", category: "Easy" },
      { id: 2, text: "(Polity) What is the minimum age to become Governor of state? / किसी राज्य का राज्यपाल बनने के लिए न्यूनतम आयु सीमा क्या है?", options: ["35 Years (35 वर्ष)", "30 Years", "25 Years", "40 Years"], correct: "35 Years (35 वर्ष)", category: "Easy" },
      { id: 3, text: "(Science & Tech) Which planet is known as Red Planet? / किस ग्रह को लाल ग्रह (Red Planet) कहा जाता है?", options: ["Mars (मंगल)", "Venus", "Saturn", "Jupiter"], correct: "Mars (मंगल)", category: "Easy" },
      { id: 4, text: "(Culture) Capital of Maurya Empire was: / मौर्य साम्राज्य की राजधानी कहाँ थी?", options: ["Patliputra (पाटलिपुत्र)", "Vaishali", "Taxila", "Ujjain"], correct: "Patliputra (पाटलिपुत्र)", category: "Easy" },
      { id: 5, text: "(Economics) Head office of SEBI is in: / सेबी (SEBI) का मुख्यालय कहाँ स्थित है?", options: ["Mumbai (मुंबई)", "New Delhi", "Kolkata", "Bengaluru"], correct: "Mumbai (मुंबई)", category: "Easy" },
      { id: 6, text: "(Geography) Which city is known as Silicon Valley of India? / किस शहर को भारत की सिलिकॉन वैली कहा जाता है?", options: ["Bengaluru (बेंगलुरु)", "Hyderabad", "Pune", "Chennai"], correct: "Bengaluru (बेंगलुरु)", category: "Easy" },
      { id: 7, text: "(History) First Battle of Tarain year: / तराइन की पहली लड़ाई किस वर्ष लड़ी गई थी?", options: ["1191", "1192", "1526", "1556"], correct: "1191", category: "Easy" },
      { id: 8, text: "(Polity) Election Commission article: / चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options: ["Article 324 (अनुच्छेद 324)", "Article 280", "Article 110", "Article 360"], correct: "Article 324 (अनुच्छेद 324)", category: "Easy" },
      { id: 9, text: "(Sports) In which sport is 'Uber Cup' awarded? / उबर कप किस खेल में दिया जाता है?", options: ["Badminton (बैडमिंटन - महिला)", "Tennis", "Table Tennis", "Golf"], correct: "Badminton (बैडमिंटन - महिला)", category: "Easy" },
      { id: 10, text: "(Science & Tech) Father of Indian Nuclear Program: / भारतीय परमाणु कार्यक्रम के जनक कौन हैं?", options: ["Homi Bhabha (होमी भाभा)", "A.P.J. Abdul Kalam", "Vikram Sarabhai", "Raja Ramanna"], correct: "Homi Bhabha (होमी भाभा)", category: "Easy" },
      { id: 11, text: "(Polity) First female Governor of state in India: / भारत में किसी राज्य की पहली महिला राज्यपाल कौन थीं?", options: ["Sarojini Naidu (सरोजिनी नायडू)", "Sucheta Kripalani", "Vijayalakshmi Pandit", "Indira Gandhi"], correct: "Sarojini Naidu (सरोजिनी नायडू)", category: "Medium" },
      { id: 12, text: "(Geography) Major river flowing into Arabian Sea: / अरब सागर में गिरने वाली प्रमुख भारतीय नदी कौन सी है?", options: ["Narmada (नर्मदा)", "Ganga", "Godavari", "Krishna"], correct: "Narmada (नर्मदा)", category: "Medium" },
      { id: 13, text: "(Culture) Classical dance form 'Kathak' is from: / शास्त्रीय नृत्य 'कथक' किस क्षेत्र से संबंधित है?", options: ["North India (उत्तर भारत)", "South India", "East India", "West India"], correct: "North India (उत्तर भारत)", category: "Medium" },
      { id: 14, text: "(History) Founder of Indian National Congress (INC): / भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?", options: ["A.O. Hume (ए.ओ. ह्यूम)", "W.C. Bonnerjee", "Dadabhai Naoroji", "Bal Gangadhar Tilak"], correct: "A.O. Hume (ए.ओ. ह्यूम)", category: "Medium" },
      { id: 15, text: "(Economics) Which planning scheme replaced Five-Year plans? / पंचवर्षीय योजनाओं के स्थान पर कौन सी प्रणाली शुरू हुई?", options: ["NITI Aayog Action Agenda (नीति आयोग कार्य एजेंडा)", "Annual Budget Planning", "Ten-Year Plans", "None of these"], correct: "NITI Aayog Action Agenda (नीति आयोग कार्य एजेंडा)", category: "Medium" },
      { id: 16, text: "(Sports) Which country won first ICC T20 World Cup in 2007? / 2007 में पहला आईसीसी टी20 विश्व कप किस देश ने जीता था?", options: ["India (भारत)", "Pakistan", "Australia", "South Africa"], correct: "India (भारत)", category: "Medium" },
      { id: 17, text: "(Science & Tech) DRDO head office location: / डीआरडीओ (DRDO) का मुख्यालय कहाँ है?", options: ["New Delhi (नई दिल्ली)", "Bengaluru", "Hyderabad", "Pune"], correct: "New Delhi (नई दिल्ली)", category: "Medium" },
      { id: 18, text: "(Polity) Fundamental Duties in Constitution: / मौलिक कर्तव्य किस देश के संविधान से लिए गए हैं?", options: ["USSR (सोवियत संघ / रूस)", "USA", "Ireland", "UK"], correct: "USSR (सोवियत संघ / रूस)", category: "Medium" },
      { id: 19, text: "(History) Battle of Buxar year: / बक्सर का युद्ध किस वर्ष लड़ा गया था?", options: ["1764", "1757", "1857", "1526"], correct: "1764", category: "Medium" },
      { id: 20, text: "(Economics) National Income in India is calculated by: / भारत में राष्ट्रीय आय की गणना किसके द्वारा की जाती है?", options: ["CSO / NSO (राष्ट्रीय सांख्यिकी कार्यालय)", "Finance Ministry", "RBI", "NITI Aayog"], correct: "CSO / NSO (राष्ट्रीय सांख्यिकी कार्यालय)", category: "Medium" },
      { id: 21, text: "(Polity) Panchayati Raj was constitutionalized by which amendment? / पंचायती राज को किस संविधान संशोधन द्वारा संवैधानिक दर्जा दिया गया?", options: ["73rd Amendment (73वां संशोधन)", "74th Amendment", "42nd Amendment", "44th Amendment"], correct: "73rd Amendment (73वां संशोधन)", category: "Hard" },
      { id: 22, text: "(Science & Tech) Supercomputer PARAM Shivay was installed at: / भारत का पहला शैक्षिक सुपरकंप्यूटर 'परम शिवाय' कहाँ स्थापित किया गया था?", options: ["IIT BHU (आईआईटी बीएचयू)", "IIT Bombay", "IIT Delhi", "IIT Kanpur"], correct: "IIT BHU (आईआईटी बीएचयू)", category: "Hard" },
      { id: 23, text: "(Geography) Active Volcano in India: / भारत का एकमात्र सक्रिय ज्वालामुखी कहाँ स्थित है?", options: ["Barren Island (बैरन द्वीप - अंडमान)", "Narcondam", "Lakshadweep", "None of these"], correct: "Barren Island (बैरन द्वीप - अंडमान)", category: "Hard" },
      { id: 24, text: "(History) Jallianwala Bagh massacre general order by: / जलियाँवाला बाग हत्याकांड का आदेश किस ब्रिटिश सैन्य अधिकारी ने दिया था?", options: ["General Dyer (जनरल डायर)", "Lord Chelmsford", "Michael O'Dwyer", "Lord Curzon"], correct: "General Dyer (जनरल डायर)", category: "Hard" },
      { id: 25, text: "(Economics) Father of White Revolution in India: / भारत में श्वेत क्रांति के जनक कौन माने जाते हैं?", options: ["Verghese Kurien (वर्गीज कुरियन)", "M.S. Swaminathan", "Norman Borlaug", "Sam Pitroda"], correct: "Verghese Kurien (वर्गीज कुरियन)", category: "Hard" },
      { id: 26, text: "(Polity) First citizen of India is: / भारत का प्रथम नागरिक किसे माना जाता है?", options: ["President of India (राष्ट्रपति)", "Prime Minister", "Chief Justice", "Speaker"], correct: "President of India (राष्ट्रपति)", category: "Hard" },
      { id: 27, text: "(Sports) Dronacharya Award is given to: / द्रोणाचार्य पुरस्कार किसे दिया जाता है?", options: ["Sports Coaches (खेल प्रशिक्षक / कोच)", "Athletes", "Umpires", "Sports Writers"], correct: "Sports Coaches (खेल प्रशिक्षक / कोच)", category: "Hard" },
      { id: 28, text: "(Culture) Famous festival of Kerala 'Onam' is associated with which mythological king? / केरल का प्रसिद्ध त्योहार 'ओणम' किस पौराणिक राजा से संबंधित है?", options: ["King Mahabali (राजा महाबली)", "King Rama", "King Harishchandra", "None of these"], correct: "King Mahabali (राजा महाबली)", category: "Hard" },
      { id: 29, text: "(Science & Tech) First nuclear submarine of India: / भारत की पहली स्वदेशी परमाणु पनडुब्बी कौन सी है?", options: ["INS Arihant (आईएनएस अरिहंत)", "INS Chakra", "INS Vikrant", "INS Sindhurashtra"], correct: "INS Arihant (आईएनएस अरिहंत)", category: "Hard" },
      { id: 30, text: "(History) Author of 'Gitanjali': / प्रसिद्ध काव्य 'गीतांजलि' के रचनाकार कौन थे?", options: ["Rabindranath Tagore (रवींद्रनाथ टैगोर)", "Bankim Chandra Chattopadhyay", "Sarat Chandra Chattopadhyay", "Munshi Premchand"], correct: "Rabindranath Tagore (रवींद्रनाथ टैगोर)", category: "Hard" }
    ]
  },
  {
    id: 8,
    title: "RRB Group D General Awareness Mock Test - 8",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Ranji Trophy is associated with: / रणजी ट्रॉफी किस खेल से संबंधित है?", options: ["Cricket (क्रिकेट)", "Football", "Hockey", "Kabaddi"], correct: "Cricket (क्रिकेट)", category: "Easy" },
      { id: 2, text: "(Polity) Rajya Sabha Chairman: / राज्यसभा का पदेन सभापति कौन होता है?", options: ["Vice President of India (भारत के उपराष्ट्रपति)", "President", "Prime Minister", "Speaker"], correct: "Vice President of India (भारत के उपराष्ट्रपति)", category: "Easy" },
      { id: 3, text: "(Science & Tech) First artificial satellite in world: / विश्व का पहला कृत्रिम उपग्रह कौन सा था?", options: ["Sputnik-1 (स्पुतनिक-1)", "Explorer-1", "Vanguard-1", "Aryabhata"], correct: "Sputnik-1 (स्पुतनिक-1)", category: "Easy" },
      { id: 4, text: "(Culture) Hornbill Festival state: / हॉर्नबिल महोत्सव किस राज्य में मनाया जाता है?", options: ["Nagaland (नागालैंड)", "Manipur", "Mizoram", "Arunachal"], correct: "Nagaland (नागालैंड)", category: "Easy" },
      { id: 5, text: "(Economics) GST full form: / जीएसटी (GST) का पूर्ण रूप क्या है?", options: ["Goods and Services Tax (वस्तु एवं सेवा कर)", "Government Sales Tax", "Global Sales Tax", "None of these"], correct: "Goods and Services Tax (वस्तु एवं सेवा कर)", category: "Easy" },
      { id: 6, text: "(Geography) Five rivers state: / पांच नदियों की भूमि किस राज्य को कहा जाता है?", options: ["Punjab (पंजाब)", "Haryana", "UP", "Bihar"], correct: "Punjab (पंजाब)", category: "Easy" },
      { id: 7, text: "(History) Harappan Civilization period: / हड़प्पा सभ्यता किस काल से संबंधित थी?", options: ["Bronze Age (कांस्य युग)", "Iron Age", "Stone Age", "None of these"], correct: "Bronze Age (कांस्य युग)", category: "Easy" },
      { id: 8, text: "(Polity) Chief Justice of India appointed by: / भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?", options: ["President (राष्ट्रपति)", "Prime Minister", "Law Minister", "Parliament"], correct: "President (राष्ट्रपति)", category: "Easy" },
      { id: 9, text: "(Sports) Ballon d'Or award is associated with: / बैलन डी'ओर पुरस्कार किस खेल से संबंधित है?", options: ["Football (फुटबॉल)", "Cricket", "Tennis", "Golf"], correct: "Football (फुटबॉल)", category: "Easy" },
      { id: 10, text: "(Science & Tech) Ozone chemical formula: / ओजोन का रासायनिक सूत्र क्या है?", options: ["O3", "O2", "CO2", "H2O"], correct: "O3", category: "Easy" },
      { id: 11, text: "(Polity) Article for President's pardoning power: / राष्ट्रपति की क्षमादान शक्ति किस अनुच्छेद में है?", options: ["Article 72 (अनुच्छेद 72)", "Article 61", "Article 123", "Article 356"], correct: "Article 72 (अनुच्छेद 72)", category: "Medium" },
      { id: 12, text: "(Geography) Highest coffee producing state: / भारत में कॉफी का सबसे बड़ा उत्पादक राज्य:", options: ["Karnataka (कर्नाटक)", "Kerala", "Tamil Nadu", "Andhra Pradesh"], correct: "Karnataka (कर्नाटक)", category: "Medium" },
      { id: 13, text: "(Culture) Bharatanatyam origin state: / भरतनाट्यम शास्त्रीय नृत्य की उत्पत्ति किस राज्य में हुई?", options: ["Tamil Nadu (तमिलनाडु)", "Kerala", "Andhra Pradesh", "Odisha"], correct: "Tamil Nadu (तमिलनाडु)", category: "Medium" },
      { id: 14, text: "(History) Quit India Movement year: / भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?", options: ["1942", "1930", "1920", "1947"], correct: "1942", category: "Medium" },
      { id: 15, text: "(Economics) HDI index publisher: / मानव विकास सूचकांक (HDI) किसके द्वारा प्रकाशित किया जाता है?", options: ["UNDP (संयुक्त राष्ट्र विकास कार्यक्रम)", "World Bank", "IMF", "UNESCO"], correct: "UNDP (संयुक्त राष्ट्र विकास कार्यक्रम)", category: "Medium" },
      { id: 16, text: "(Sports) Winter Olympics 2026 hosts: / 2026 शीतकालीन ओलंपिक कहाँ आयोजित होंगे?", options: ["Milan and Cortina (इटली)", "Beijing", "Pyeongchang", "Vancouver"], correct: "Milan and Cortina (इटली)", category: "Medium" },
      { id: 17, text: "(Science & Tech) First indigenous COVID-19 vaccine of India: / भारत की पहली स्वदेशी COVID-19 वैक्सीन:", options: ["Covaxin (कोवैक्सिन)", "Covishield", "Corbevax", "Sputnik V"], correct: "Covaxin (कोवैक्सिन)", category: "Medium" },
      { id: 18, text: "(Polity) Mini constitution of India: / भारत के किस संविधान संशोधन को लघु संविधान कहा जाता है?", options: ["42nd Amendment (42वां संशोधन)", "44th Amendment", "86th Amendment", "73rd Amendment"], correct: "42nd Amendment (42वां संशोधन)", category: "Medium" },
      { id: 19, text: "(History) Battle of Plassey year: / प्लासी की लड़ाई किस वर्ष लड़ी गई थी?", options: ["1757", "1764", "1857", "1526"], correct: "1757", category: "Medium" },
      { id: 20, text: "(Economics) Father of Green Revolution in India: / भारत में हरित क्रांति के जनक:", options: ["M.S. Swaminathan (एम.एस. स्वामीनाथन)", "Norman Borlaug", "Verghese Kurien", "None of these"], correct: "M.S. Swaminathan (एम.एस. स्वामीनाथन)", category: "Medium" },
      { id: 21, text: "(Polity) Joint sitting of Parliament presided by: / संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?", options: ["Speaker of Lok Sabha (लोकसभा अध्यक्ष)", "President", "Vice President", "Prime Minister"], correct: "Speaker of Lok Sabha (लोकसभा अध्यक्ष)", category: "Hard" },
      { id: 22, text: "(Science & Tech) Aditya-L1 solar payloads: / आदित्य-L1 सौर मिशन में कुल कितने वैज्ञानिक उपकरण (पेलोड) हैं?", options: ["7 Payouts (7 पेलोड)", "5 Payouts", "9 Payouts", "6 Payouts"], correct: "7 Payouts (7 पेलोड)", category: "Hard" },
      { id: 23, text: "(Geography) Tropic of Cancer does not pass through: / कर्क रेखा किस भारतीय राज्य से नहीं गुजरती?", options: ["Odisha (ओडिशा)", "Gujarat", "Tripura", "Rajasthan"], correct: "Odisha (ओडिशा)", category: "Hard" },
      { id: 24, text: "(History) Ghadar Party founded in: / गदर पार्टी की स्थापना कहाँ की गई थी?", options: ["San Francisco (सैन फ्रांसिस्को)", "London", "Tokyo", "Berlin"], correct: "San Francisco (सैन फ्रांसिस्को)", category: "Hard" },
      { id: 25, text: "(Economics) Main objective of monetary policy in India: / भारत में मौद्रिक नीति का मुख्य उद्देश्य क्या है?", options: ["Price stability with growth (विकास के साथ मूल्य स्थिरता)", "Job generation", "Import increase", "None of these"], correct: "Price stability with growth (विकास के साथ मूल्य स्थिरता)", category: "Hard" },
      { id: 26, text: "(Polity) Rajya Sabha President nominated members: / राष्ट्रपति द्वारा राज्यसभा में कितने सदस्य मनोनीत होते हैं?", options: ["12 Members (12 सदस्य)", "10", "15", "2"], correct: "12 Members (12 सदस्य)", category: "Hard" },
      { id: 27, text: "(Sports) First Indian woman with two Olympic medals: / दो ओलंपिक पदक जीतने वाली पहली भारतीय महिला एथलीट:", options: ["P.V. Sindhu (पी.वी. सिंधु)", "Saina Nehwal", "Mary Kom", "Mirabai Chanu"], correct: "P.V. Sindhu (पी.वी. सिंधु)", category: "Hard" },
      { id: 28, text: "(Culture) Santhara ritual is related to: / संथारा प्रथा किस धर्म से संबंधित है?", options: ["Jains (जैन धर्म)", "Buddhists", "Sikhs", "Hindus"], correct: "Jains (जैन धर्म)", category: "Hard" },
      { id: 29, text: "(Science & Tech) First supercomputer of India: / भारत का पहला सुपरकंप्यूटर कौन सा था?", options: ["PARAM 8000 (परम 8000)", "Pratyush", "Mihir", "Sahasrat"], correct: "PARAM 8000 (परम 8000)", category: "Hard" },
      { id: 30, text: "(History) Treaty of Allahabad year: / इलाहाबाद की संधि किस वर्ष हस्ताक्षरित हुई थी?", options: ["1765", "1757", "1764", "1857"], correct: "1765", category: "Hard" }
    ]
  },
  {
    id: 9,
    title: "RRB Group D General Awareness Mock Test - 9",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) FIFA World Cup 2022 winner: / फीफा विश्व कप 2022 का विजेता देश कौन सा है?", options: ["Argentina (अर्जेंटीना)", "France", "Brazil", "Croatia"], correct: "Argentina (अर्जेंटीना)", category: "Easy" },
      { id: 2, text: "(Polity) First citizen of India: / भारत का प्रथम नागरिक कौन होता है?", options: ["President (राष्ट्रपति)", "Prime Minister", "Chief Justice", "Speaker"], correct: "President (राष्ट्रपति)", category: "Easy" },
      { id: 3, text: "(Science & Tech) Which planet is closest to Sun? / सूर्य के सबसे निकट कौन सा ग्रह है?", options: ["Mercury (बुध)", "Venus", "Earth", "Mars"], correct: "Mercury (बुध)", category: "Easy" },
      { id: 4, text: "(Culture) Sanchi Stupa state: / सांची का स्तूप किस राज्य में स्थित है?", options: ["Madhya Pradesh (मध्य प्रदेश)", "Uttar Pradesh", "Bihar", "Rajasthan"], correct: "Madhya Pradesh (मध्य प्रदेश)", category: "Easy" },
      { id: 5, text: "(Economics) Central Bank of India: / भारत का केंद्रीय बैंक कौन सा है?", options: ["Reserve Bank of India (RBI)", "State Bank of India", "Punjab National Bank", "None of these"], correct: "Reserve Bank of India (RBI)", category: "Easy" },
      { id: 6, text: "(Geography) Capital of India moved from Calcutta to Delhi in: / भारत की राजधानी कलकत्ता से दिल्ली किस वर्ष स्थानांतरित की गई?", options: ["1911", "1905", "1921", "1947"], correct: "1911", category: "Easy" },
      { id: 7, text: "(History) Father of Nation: / महात्मा गांधी को सर्वप्रथम 'राष्ट्रपिता' किसने कहा था?", options: ["Subhas Chandra Bose (सुभाष चंद्र बोस)", "Jawaharlal Nehru", "Rabindranath Tagore", "Sardar Patel"], correct: "Subhas Chandra Bose (सुभाष चंद्र बोस)", category: "Easy" },
      { id: 8, text: "(Polity) High Court Judges retirement age: / उच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति की आयु कितनी होती है?", options: ["62 Years (62 वर्ष)", "65 Years", "60 Years", "70 Years"], correct: "62 Years (62 वर्ष)", category: "Easy" },
      { id: 9, text: "(Sports) National Sport of India: / भारत का राष्ट्रीय खेल कौन सा माना जाता है?", options: ["Field Hockey (हॉकी)", "Cricket", "Kabaddi", "None of these"], correct: "Field Hockey (हॉकी)", category: "Easy" },
      { id: 10, text: "(Science & Tech) Full form of ISRO: / इसरो (ISRO) का पूर्ण रूप क्या है?", options: ["Indian Space Research Organisation (भारतीय अंतरिक्ष अनुसंधान संगठन)", "Indian Space Research Office", "International Space Research Organisation", "None of these"], correct: "Indian Space Research Organisation (भारतीय अंतरिक्ष अनुसंधान संगठन)", category: "Easy" },
      { id: 11, text: "(Polity) First female Prime Minister of India: / भारत की पहली महिला प्रधानमंत्री कौन थीं?", options: ["Indira Gandhi (इंदीरा गांधी)", "Pratibha Patil", "Sarojini Naidu", "Sucheta Kripalani"], correct: "Indira Gandhi (इंदीरा गांधी)", category: "Medium" },
      { id: 12, text: "(Geography) River flows through rift valley: / भ्रंश घाटी (Rift Valley) से होकर बहने वाली प्रमुख नदी कौन सी है?", options: ["Narmada (नर्मदा)", "Ganga", "Godavari", "Krishna"], correct: "Narmada (नर्मदा)", category: "Medium" },
      { id: 13, text: "(Culture) Mohiniyattam dance state: / मोहिनीअट्टम शास्त्रीय नृत्य किस राज्य से संबंधित है?", options: ["Kerala (केरल)", "Tamil Nadu", "Andhra Pradesh", "Karnataka"], correct: "Kerala (केरल)", category: "Medium" },
      { id: 14, text: "(History) Who founded Swaraj Party 1923: / 1923 में स्वराज पार्टी की स्थापना किसने की थी?", options: ["Motilal Nehru and C.R. Das (मोतीलाल नेहरू और सी.आर. दास)", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"], correct: "Motilal Nehru and C.R. Das (मोतीलाल नेहरू और सी.आर. दास)", category: "Medium" },
      { id: 15, text: "(Economics) Five-year plans initiator: / भारत में पंचवर्षीय योजनाओं की शुरुआत किसने की थी?", options: ["Jawaharlal Nehru (जवाहरलाल नेहरू)", "Mahatma Gandhi", "Indira Gandhi", "Lal Bahadur Shastri"], correct: "Jawaharlal Nehru (जवाहरलाल नेहरू)", category: "Medium" },
      { id: 16, text: "(Sports) First Indian to win Olympic medal: / स्वतंत्र भारत के लिए पहला व्यक्तिगत ओलंपिक पदक किसने जीता?", options: ["K.D. Jadhav (के.डी. जाधव)", "Milkha Singh", "Karnam Malleswari", "Dhyan Chand"], correct: "K.D. Jadhav (के.डी. जाधव)", category: "Medium" },
      { id: 17, text: "(Science & Tech) First nuclear power plant: / भारत का पहला परमाणु ऊर्जा संयंत्र कहाँ स्थापित हुआ था?", options: ["Tarapur (तारापुर - महाराष्ट्र)", "Rawatbhata", "Kalpakkam", "Narora"], correct: "Tarapur (तारापुर - महाराष्ट्र)", category: "Medium" },
      { id: 18, text: "(Polity) Total articles originally in Constitution: / मूल संविधान में कुल कितने अनुच्छेद थे?", options: ["395", "448", "370", "390"], correct: "395", category: "Medium" },
      { id: 19, text: "(History) Battle of Haldighati year: / हल्दीघाटी का प्रसिद्ध युद्ध किस वर्ष लड़ा गया था?", options: ["1576", "1526", "1556", "1761"], correct: "1576", category: "Medium" },
      { id: 20, text: "(Economics) Green Revolution main crops: / हरित क्रांति के दौरान सर्वाधिक वृद्धि किस फसल के उत्पादन में हुई?", options: ["Wheat and Rice (गेहूं और चावल)", "Oilseeds", "Pulses", "Cotton"], correct: "Wheat and Rice (गेहूं और चावल)", category: "Medium" },
      { id: 21, text: "(Polity) Punchayati Raj state first: / भारत में पंचायती राज व्यवस्था सर्वप्रथम किस राज्य में लागू की गई थी?", options: ["Rajasthan (राजस्थान - नागौर)", "Andhra Pradesh", "Gujarat", "Maharashtra"], correct: "Rajasthan (राजस्थान - नागौर)", category: "Hard" },
      { id: 22, text: "(Science & Tech) First Indian research station in Antarctica: / अंटार्कटिका में भारत का पहला अनुसंधान केंद्र कौन सा था?", options: ["Dakshin Gangotri (दक्षिण गंगोत्री)", "Maitri", "Bharati", "Himadri"], correct: "Dakshin Gangotri (दक्षिण गंगोत्री)", category: "Hard" },
      { id: 23, text: "(Geography) Highest waterfall in India: / भारत का सबसे ऊंचा जलप्रपात कौन सा है?", options: ["Kunchikal Falls (कुंचिकल जलप्रपात)", "Jog Falls", "Dudhsagar", "Nohkalikai"], correct: "Kunchikal Falls (कुंचिकल जलप्रपात)", category: "Hard" },
      { id: 24, text: "(History) Vernacular Press Act was passed by: / वर्नाक्युलर प्रेस एक्ट किस वायसराय के कार्यकाल में पारित हुआ था?", options: ["Lord Lytton (लॉर्ड लिटन)", "Lord Ripon", "Lord Curzon", "Lord Dufferin"], correct: "Lord Lytton (लॉर्ड लिटन)", category: "Hard" },
      { id: 25, text: "(Economics) Main head of IMF is: / अंतर्राष्ट्रीय मुद्रा कोष (IMF) का मुख्य प्रशासनिक अधिकारी कौन होता है?", options: ["Managing Director (प्रबंध निदेशक)", "President", "Chairman", "Governor"], correct: "Managing Director (प्रबंध निदेशक)", category: "Hard" },
      { id: 26, text: "(Polity) Concept of DPSP from: / राज्य के नीति निर्देशक तत्वों की अवधारणा किस देश से ली गई है?", options: ["Ireland (आरलैंड)", "USA", "Germany", "Australia"], correct: "Ireland (आरलैंड)", category: "Hard" },
      { id: 27, text: "(Sports) Olympic Games occur every: / ओलंपिक खेलों का आयोजन कितने वर्षों के अंतराल पर होता है?", options: ["4 Years (4 वर्ष)", "2 Years", "5 Years", "None of these"], correct: "4 Years (4 वर्ष)", category: "Hard" },
      { id: 28, text: "(Culture) 'Khajuraho Temples' state: / खजुराहो के मंदिर किस राज्य में स्थित हैं?", options: ["Madhya Pradesh (मध्य प्रदेश)", "Uttar Pradesh", "Rajasthan", "Maharashtra"], correct: "Madhya Pradesh (मध्य प्रदेश)", category: "Hard" },
      { id: 29, text: "(Science & Tech) Gaganyaan astronauts train in: / गगनयान के अंतरिक्ष यात्रियों ने बुनियादी प्रशिक्षण किस देश में प्राप्त किया?", options: ["Russia (रूस)", "USA", "France", "Japan"], correct: "Russia (रूस)", category: "Hard" },
      { id: 30, text: "(History) Permanent Settlement of Bengal introduced by: / बंगाल में स्थायी बंदोबस्त (Permanent Settlement) किसने लागू किया था?", options: ["Lord Cornwallis (लॉर्ड कॉर्नवालिस)", "Warren Hastings", "Lord Wellesley", "Lord William Bentinck"], correct: "Lord Cornwallis (लॉर्ड कॉर्नवालिस)", category: "Hard" }
    ]
  },
  {
    id: 10,
    title: "RRB Group D General Awareness Mock Test - 10",
    description: "30 Questions | 25 Minutes | Bilingual General Awareness & Current Affairs Practice",
    questions: [
      { id: 1, text: "(Sports) Who won FIFA World Cup 2022? / फीफा विश्व कप 2022 का विजेता देश कौन सा है?", options: ["Argentina (अर्जेंटीना)", "France", "Brazil", "Croatia"], correct: "Argentina (अर्जेंटीना)", category: "Easy" },
      { id: 2, text: "(Polity) First citizen of India: / भारत का प्रथम नागरिक कौन होता है?", options: ["President (राष्ट्रपति)", "Prime Minister", "Chief Justice", "Speaker"], correct: "President (राष्ट्रपति)", category: "Easy" },
      { id: 3, text: "(Science & Tech) Which planet is closest to Sun? / सूर्य के सबसे निकट कौन सा ग्रह है?", options: ["Mercury (बुध)", "Venus", "Earth", "Mars"], correct: "Mercury (बुध)", category: "Easy" },
      { id: 4, text: "(Culture) Sanchi Stupa state: / सांची का स्तूप किस राज्य में स्थित है?", options: ["Madhya Pradesh (मध्य प्रदेश)", "Uttar Pradesh", "Bihar", "Rajasthan"], correct: "Madhya Pradesh (मध्य प्रदेश)", category: "Easy" },
      { id: 5, text: "(Economics) Central Bank of India: / भारत का केंद्रीय बैंक कौन सा है?", options: ["Reserve Bank of India (RBI)", "State Bank of India", "Punjab National Bank", "None of these"], correct: "Reserve Bank of India (RBI)", category: "Easy" },
      { id: 6, text: "(Geography) Capital of India moved from Calcutta to Delhi in: / भारत की राजधानी कलकत्ता से दिल्ली किस वर्ष स्थानांतरित की गई?", options: ["1911", "1905", "1921", "1947"], correct: "1911", category: "Easy" },
      { id: 7, text: "(History) Father of Nation: / महात्मा गांधी को सर्वप्रथम 'राष्ट्रपिता' किसने कहा था?", options: ["Subhas Chandra Bose (सुभाष चंद्र बोस)", "Jawaharlal Nehru", "Rabindranath Tagore", "Sardar Patel"], correct: "Subhas Chandra Bose (सुभाष चंद्र बोस)", category: "Easy" },
      { id: 8, text: "(Polity) High Court Judges retirement age: / उच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति की आयु कितनी होती है?", options: ["62 Years (62 वर्ष)", "65 Years", "60 Years", "70 Years"], correct: "62 Years (62 वर्ष)", category: "Easy" },
      { id: 9, text: "(Sports) National Sport of India: / भारत का राष्ट्रीय खेल कौन सा माना जाता है?", options: ["Field Hockey (हॉकी)", "Cricket", "Kabaddi", "None of these"], correct: "Field Hockey (हॉकी)", category: "Easy" },
      { id: 10, text: "(Science & Tech) Full form of ISRO: / इसरो (ISRO) का पूर्ण रूप क्या है?", options: ["Indian Space Research Organisation (भारतीय अंतरिक्ष अनुसंधान संगठन)", "Indian Space Research Office", "International Space Research Organisation", "None of these"], correct: "Indian Space Research Organisation (भारतीय अंतरिक्ष अनुसंधान संगठन)", category: "Easy" },
      { id: 11, text: "(Polity) First female Prime Minister of India: / भारत की पहली महिला प्रधानमंत्री कौन थीं?", options: ["Indira Gandhi (इंदीरा गांधी)", "Pratibha Patil", "Sarojini Naidu", "Sucheta Kripalani"], correct: "Indira Gandhi (इंदीरा गांधी)", category: "Medium" },
      { id: 12, text: "(Geography) River flows through rift valley: / भ्रंश घाटी (Rift Valley) से होकर बहने वाली प्रमुख नदी कौन सी है?", options: ["Narmada (नर्मदा)", "Ganga", "Godavari", "Krishna"], correct: "Narmada (नर्मदा)", category: "Medium" },
      { id: 13, text: "(Culture) Mohiniyattam dance state: / मोहिनीअट्टम शास्त्रीय नृत्य किस राज्य से संबंधित है?", options: ["Kerala (केरल)", "Tamil Nadu", "Andhra Pradesh", "Karnataka"], correct: "Kerala (केरल)", category: "Medium" },
      { id: 14, text: "(History) Who founded Swaraj Party 1923: / 1923 में स्वराज पार्टी की स्थापना किसने की थी?", options: ["Motilal Nehru and C.R. Das (मोतीलाल नेहरू और सी.आर. दास)", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"], correct: "Motilal Nehru and C.R. Das (मोतीलाल नेहरू और सी.आर. दास)", category: "Medium" },
      { id: 15, text: "(Economics) Five-year plans initiator: / भारत में पंचवर्षीय योजनाओं की शुरुआत किसने की थी?", options: ["Jawaharlal Nehru (जवाहरलाल नेहरू)", "Mahatma Gandhi", "Indira Gandhi", "Lal Bahadur Shastri"], correct: "Jawaharlal Nehru (जवाहरलाल नेहरू)", category: "Medium" },
      { id: 16, text: "(Sports) First Indian to win Olympic medal: / स्वतंत्र भारत के लिए पहला व्यक्तिगत ओलंपिक पदक किसने जीता?", options: ["K.D. Jadhav (के.डी. जाधव)", "Milkha Singh", "Karnam Malleswari", "Dhyan Chand"], correct: "K.D. Jadhav (के.डी. जाधव)", category: "Medium" },
      { id: 17, text: "(Science & Tech) First nuclear power plant: / भारत का पहला परमाणु ऊर्जा संयंत्र कहाँ स्थापित हुआ था?", options: ["Tarapur (तारापुर - महाराष्ट्र)", "Rawatbhata", "Kalpakkam", "Narora"], correct: "Tarapur (तारापुर - महाराष्ट्र)", category: "Medium" },
      { id: 18, text: "(Polity) Total articles originally in Constitution: / मूल संविधान में कुल कितने अनुच्छेद थे?", options: ["395", "448", "370", "390"], correct: "395", category: "Medium" },
      { id: 19, text: "(History) Battle of Haldighati year: / हल्दीघाटी का प्रसिद्ध युद्ध किस वर्ष लड़ा गया था?", options: ["1576", "1526", "1556", "1761"], correct: "1576", category: "Medium" },
      { id: 20, text: "(Economics) Green Revolution main crops: / हरित क्रांति के दौरान सर्वाधिक वृद्धि किस फसल के उत्पादन में हुई?", options: ["Wheat and Rice (गेहूं और चावल)", "Oilseeds", "Pulses", "Cotton"], correct: "Wheat and Rice (गेहूं और चावल)", category: "Medium" },
      { id: 21, text: "(Polity) Punchayati Raj state first: / भारत में पंचायती राज व्यवस्था सर्वप्रथम किस राज्य में लागू की गई थी?", options: ["Rajasthan (राजस्थान - नागौर)", "Andhra Pradesh", "Gujarat", "Maharashtra"], correct: "Rajasthan (राजस्थान - नागौर)", category: "Hard" },
      { id: 22, text: "(Science & Tech) First Indian research station in Antarctica: / अंटार्कटिका में भारत का पहला अनुसंधान केंद्र कौन सा था?", options: ["Dakshin Gangotri (दक्षिण गंगोत्री)", "Maitri", "Bharati", "Himadri"], correct: "Dakshin Gangotri (दक्षिण गंगोत्री)", category: "Hard" },
      { id: 23, text: "(Geography) Highest waterfall in India: / भारत का सबसे ऊंचा जलप्रपात कौन सा है?", options: ["Kunchikal Falls (कुंचिकल जलप्रपात)", "Jog Falls", "Dudhsagar", "Nohkalikai"], correct: "Kunchikal Falls (कुंचिकल जलप्रपात)", category: "Hard" },
      { id: 24, text: "(History) Vernacular Press Act was passed by: / वर्नाक्युलर प्रेस एक्ट किस वायसराय के कार्यकाल में पारित हुआ था?", options: ["Lord Lytton (लॉर्ड लिटन)", "Lord Ripon", "Lord Curzon", "Lord Dufferin"], correct: "Lord Lytton (लॉर्ड लिटन)", category: "Hard" },
      { id: 25, text: "(Economics) Main head of IMF is: / अंतर्राष्ट्रीय मुद्रा कोष (IMF) का मुख्य प्रशासनिक अधिकारी कौन होता है?", options: ["Managing Director (प्रबंध निदेशक)", "President", "Chairman", "Governor"], correct: "Managing Director (प्रबंध निदेशक)", category: "Hard" },
      { id: 26, text: "(Polity) Concept of DPSP from: / राज्य के नीति निर्देशक तत्वों की अवधारणा किस देश से ली गई है?", options: ["Ireland (आरलैंड)", "USA", "Germany", "Australia"], correct: "Ireland (आरलैंड)", category: "Hard" },
      { id: 27, text: "(Sports) Olympic Games occur every: / ओलंपिक खेलों का आयोजन कितने वर्षों के अंतराल पर होता है?", options: ["4 Years (4 वर्ष)", "2 Years", "5 Years", "None of these"], correct: "4 Years (4 वर्ष)", category: "Hard" },
      { id: 28, text: "(Culture) 'Khajuraho Temples' state: / खजुराहो के मंदिर किस राज्य में स्थित हैं?", options: ["Madhya Pradesh (मध्य प्रदेश)", "Uttar Pradesh", "Rajasthan", "Maharashtra"], correct: "Madhya Pradesh (मध्य प्रदेश)", category: "Hard" },
      { id: 29, text: "(Science & Tech) Gaganyaan astronauts train in: / गगनयान के अंतरिक्ष यात्रियों ने बुनियादी प्रशिक्षण किस देश में प्राप्त किया?", options: ["Russia (रूस)", "USA", "France", "Japan"], correct: "Russia (रूस)", category: "Hard" },
      { id: 30, text: "(History) Permanent Settlement of Bengal introduced by: / बंगाल में स्थायी बंदोबस्त (Permanent Settlement) किसने लागू किया था?", options: ["Lord Cornwallis (लॉर्ड कॉर्नवालिस)", "Warren Hastings", "Lord Wellesley", "Lord William Bentinck"], correct: "Lord Cornwallis (लॉर्ड कॉर्नवालिस)", category: "Hard" }
    ]
  }
];

export default function RrbGroupDGeneralAwarenessTestSeries() {
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
  const [currentQNo, setCurrentQNo] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedTestId === null || isSubmitted) return;
    
    if (timeLeft <= 0) {
      setIsSubmitted(true);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, selectedTestId]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartTest = (testId: number) => {
    setSelectedTestId(testId);
    setCurrentQNo(1);
    setAnswers({});
    setTimeLeft(1500); // 25 mins
    setIsSubmitted(false);
  };

  const handleBackToSelection = () => {
    setSelectedTestId(null);
    setIsSubmitted(false);
  };

  const activeTest = mockTestsData.find(t => t.id === selectedTestId);
  const currentQuestion = activeTest?.questions[currentQNo - 1];
  const totalQCount = activeTest?.questions.length || 0;

  const calculateScore = () => {
    if (!activeTest) return 0;
    let score = 0;
    activeTest.questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  // Test Selection Screen
  if (selectedTestId === null) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/exams/rrb-group-d" className="p-2 rounded-xl bg-slate-800 border border-white/5 hover:border-sky-500/30 text-sky-400 hover:text-sky-300 transition-all flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">RRB Group D Special</span>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mt-1">
              General Awareness Mock Test Series (सामान्य जागरूकता मॉक टेस्ट)
            </h1>
          </div>
        </div>

        <div className="bg-[#080d1a] border border-sky-500/10 rounded-3xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> Premium CBT General Awareness Simulator
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              यह मॉक टेस्ट श्रृंखला पूर्ण रूप से RRB Group D सामान्य जागरूकता और सामयिकी (Current Affairs) के विषयों पर आधारित है। राष्ट्रीय एवं अंतर्राष्ट्रीय समसामयिक घटनाओं, पुरस्कार, भारतीय राजनीति, इतिहास एवं खेल के प्रश्नों से अभ्यास करें!
            </p>
          </div>
          <div className="flex gap-6 text-center bg-slate-900/40 border border-white/5 px-6 py-4 rounded-2xl">
            <div>
              <div className="text-2xl font-bold text-sky-400">10</div>
              <div className="text-[11px] text-slate-400">Total Tests</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-sky-400">300</div>
              <div className="text-[11px] text-slate-400">Questions</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-sky-400">25 Mins</div>
              <div className="text-[11px] text-slate-400">Per Test</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTestsData.map((test) => (
            <div key={test.id} className="bg-[#070b12]/95 border border-white/5 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center font-bold font-mono">
                    {test.id.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">
                    Active
                  </span>
                </div>
                <h3 className="font-bold text-slate-100 text-lg mb-2 group-hover:text-sky-400 transition-colors">
                  {test.title}
                </h3>
                <p className="text-xs text-slate-450 leading-relaxed mb-6">
                  {test.description}
                </p>
              </div>
              <button 
                onClick={() => handleStartTest(test.id)}
                className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.15)] hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <BookOpen className="w-4 h-4" /> Start Practice Test
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Result Screen
  if (isSubmitted && activeTest) {
    const score = calculateScore();
    const pct = Math.round((score / totalQCount) * 100);
    
    let remark = "Good Attempt! Keep practicing to improve your speed.";
    let remarkHindi = "अच्छा प्रयास! अपनी गति सुधारने के लिए अभ्यास जारी रखें।";
    let remarkColor = "text-sky-400";
    
    if (pct >= 80) {
      remark = "Outstanding Performance! You are fully prepared to ace the exam.";
      remarkHindi = "उत्कृष्ट प्रदर्शन! आप परीक्षा पास करने के लिए पूरी तरह तैयार हैं।";
      remarkColor = "text-emerald-400";
    } else if (pct >= 50) {
      remark = "Average Score. Focus more on analytical concepts and timing.";
      remarkHindi = "औसत स्कोर। विश्लेषणात्मक अवधारणाओं और समय प्रबंधन पर अधिक ध्यान दें।";
      remarkColor = "text-yellow-400";
    }

    return (
      <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
        <div className="glass-panel p-8 text-center relative overflow-hidden mb-8 border border-white/10 rounded-3xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 mb-2">Test Submitted Successfully!</h2>
          <p className="text-sm text-slate-400 mb-6">You have completed {activeTest.title}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-8 bg-slate-950/45 p-6 rounded-2xl border border-white/5 max-w-xl mx-auto">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Your Score</div>
              <div className="text-4xl font-extrabold text-emerald-400 mt-1">
                {score} <span className="text-lg text-slate-455">/ {totalQCount}</span>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Accuracy</div>
              <div className="text-4xl font-extrabold text-sky-400 mt-1">{pct}%</div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Time Left</div>
              <div className="text-4xl font-extrabold text-purple-400 mt-1">{formatTime(timeLeft)}</div>
            </div>
          </div>

          <div className="mb-8">
            <p className={`text-base font-semibold ${remarkColor}`}>{remark}</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">{remarkHindi}</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleBackToSelection}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-300 font-semibold transition-all duration-300 text-xs md:text-sm"
            >
              Back to Test List
            </button>
            <button 
              onClick={() => handleStartTest(activeTest.id)}
              className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold transition-all duration-300 text-xs md:text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              <RotateCcw className="w-4 h-4" /> Retake Test
            </button>
          </div>
        </div>

        {/* Detailed Solutions Section */}
        <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-100 mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" /> Answer Key & Explanatory Analysis
          </h3>
          
          <div className="space-y-6">
            {activeTest.questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.correct;
              
              return (
                <div key={q.id} className={`p-5 rounded-2xl border transition-all duration-200 ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : userAns ? 'bg-red-500/5 border-red-500/20' : 'bg-slate-900/40 border-white/5'}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase ${q.category === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' : q.category === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/15' : 'bg-rose-500/10 text-rose-400 border border-rose-500/15'}`}>
                      {q.category}
                    </span>
                    {userAns ? (
                      isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Correct</span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-red-400"><AlertTriangle className="w-4 h-4" /> Incorrect</span>
                      )
                    ) : (
                      <span className="text-xs font-bold text-slate-400">Unanswered</span>
                    )}
                  </div>
                  
                  <h4 className="text-sm font-semibold text-slate-200 mb-4">
                    Q{idx+1}. {q.text}
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {q.options.map((opt, oIdx) => {
                      const isOptionCorrect = opt === q.correct;
                      const isOptionChosen = opt === userAns;
                      
                      let optClass = "flex items-center gap-3 px-4 py-2.5 rounded-xl border text-xs ";
                      if (isOptionCorrect) {
                        optClass += "bg-emerald-500/20 border-emerald-500/45 text-emerald-300 font-semibold";
                      } else if (isOptionChosen) {
                        optClass += "bg-red-500/20 border-red-500/45 text-red-300";
                      } else {
                        optClass += "bg-slate-900/40 border-white/5 text-slate-400";
                      }
                      
                      return (
                        <div key={oIdx} className={optClass}>
                          <span className="font-bold text-[10px] text-slate-500">{String.fromCharCode(65 + oIdx)}.</span> {opt}
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
    );
  }

  // Active Quiz Interface
  if (activeTest && currentQuestion) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Sticky Test Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 bg-[#0b0f19]/90 border border-white/10 p-5 rounded-2xl shadow-2xl sticky top-20 z-40 backdrop-blur-md">
          <div>
            <h1 className="text-lg md:text-xl font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" /> {activeTest.title}
            </h1>
            <p className="text-[11px] text-slate-400 mt-0.5">30 Questions | Negative Marking: 1/3</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`px-4 py-2 rounded-xl font-mono text-base md:text-lg font-bold flex items-center gap-2 ${timeLeft < 300 ? 'bg-red-500/25 text-red-400 border border-red-500/40 animate-pulse' : 'bg-sky-500/10 border border-sky-500/20 text-sky-400'}`}>
              <Clock className="w-4 h-4" /> {formatTime(timeLeft)}
            </div>
            <button 
              onClick={() => {
                if (confirm("Are you sure you want to submit the test?")) {
                  setIsSubmitted(true);
                }
              }}
              className="px-5 py-2.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded-xl text-xs md:text-sm font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.25)]"
            >
              Submit Test
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Main Question Panel */}
          <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Question {currentQNo} of {totalQCount}
              </span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase ${currentQuestion.category === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' : currentQuestion.category === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/15' : 'bg-rose-500/10 text-rose-400 border border-rose-500/15'}`}>
                Difficulty: {currentQuestion.category}
              </span>
            </div>

            <div className="text-lg md:text-xl font-bold text-slate-100 leading-relaxed mb-8">
              Q{currentQNo}. {currentQuestion.text}
            </div>

            <div className="grid gap-4">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = answers[currentQuestion.id] === opt;
                
                return (
                  <label 
                    key={idx} 
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all group ${isSelected ? 'bg-sky-500/10 border-sky-500/50 text-sky-300' : 'bg-slate-900/40 border-white/5 hover:border-white/20 text-slate-300'}`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-sky-400 bg-sky-500' : 'border-slate-500 group-hover:border-sky-400'}`}>
                      {isSelected && <div className="w-2 h-2 bg-[#050811] rounded-full"></div>}
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
                className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2"
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
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs md:text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.2)]"
              >
                Save & Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Question Navigation Palette */}
          <div className="bg-[#070b12] border border-white/5 rounded-3xl p-6 sticky top-48 shadow-2xl">
            <h3 className="m-0 mb-4 text-base font-bold text-slate-100 flex items-center gap-2 border-b border-white/5 pb-3">
              <HelpCircle className="w-4 h-4 text-sky-400" /> Question Palette
            </h3>
            
            <div className="flex flex-col gap-2.5 mb-6 text-xs text-slate-450">
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
                  btnClass += "border-sky-400 bg-sky-500/20 text-sky-300 scale-105 shadow-[0_0_10px_rgba(14,165,233,0.25)]";
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
              className="w-full mt-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
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
