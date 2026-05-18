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
    title: "RRB Group D Reasoning Mock Test - 1",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) दी गई श्रृंखला में अगला पद ज्ञात कीजिए: 2, 4, 8, 16, 32, ?", options: ["48", "56", "64", "72"], correct: "64", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला में लुप्त पद (?) ज्ञात कीजिए: A, C, E, G, I, ?", options: ["J", "K", "L", "M"], correct: "K", category: "Easy" },
      { id: 3, text: "(Direction Sense) राम अपने घर से उत्तर की ओर 5 किमी चलता है, फिर दाएं मुड़कर 3 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?", options: ["उत्तर (North)", "पूर्व (East)", "उत्तर-पूर्व (North-East)", "उत्तर-पश्चिम (North-West)"], correct: "उत्तर-पूर्व (North-East)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि एक निश्चित कूट भाषा में 'COLD' को 'DPME' लिखा जाता है, तो 'HEAT' को क्या लिखा जाएगा?", options: ["IFBU", "IGBU", "HFBU", "IFBV"], correct: "IFBU", category: "Easy" },
      { id: 5, text: "(Blood Relations) एक लड़के की ओर इशारा करते हुए वीणा ने कहा, \"वह मेरे दादाजी के इकलौते पुत्र का पुत्र है।\" उस लड़के का वीणा से क्या संबंध है?", options: ["चाचा (Uncle)", "भाई (Brother)", "चचेरा भाई (Cousin)", "पिता (Father)"], correct: "भाई (Brother)", category: "Easy" },
      { id: 6, text: "(Analogy) शेर : मांद :: घोड़ा : ?", options: ["अस्तबल (Stable)", "घोंसला (Nest)", "बिल (Burrow)", "पिंजरा (Cage)"], correct: "अस्तबल (Stable)", category: "Easy" },
      { id: 7, text: "(Classification) निम्नलिखित में से विषम (Odd) पद चुनिए:", options: ["आलू (Potato)", "गाजर (Carrot)", "अदरक (Ginger)", "टमाटर (Tomato)"], correct: "टमाटर (Tomato)", category: "Easy" },
      { id: 8, text: "(Ranking) रमेश एक पंक्ति में ऊपर से 15वें और नीचे से 21वें स्थान पर है। पंक्ति में कुल कितने छात्र हैं?", options: ["36", "35", "34", "37"], correct: "35", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '×', '-' का अर्थ '÷', '×' का अर्थ '-' और '÷' का अर्थ '+' है, तो 20 + 3 - 6 ÷ 4 × 8 का मान क्या होगा?", options: ["6", "10", "8", "12"], correct: "6", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'महिलाएं (Women)', 'माताएं (Mothers)' और 'डॉक्टर (Doctors)' के बीच सही संबंध दर्शाने वाला आरेख कौन सा है?", options: ["सभी माताएं महिलाएं हैं और कुछ माताएं/महिलाएं डॉक्टर हो सकती हैं", "माताएं और डॉक्टर बिल्कुल अलग हैं", "महिलाएं और माताएं अलग हैं, डॉक्टर अलग हैं", "तीनों बिल्कुल अलग वर्ग हैं"], correct: "सभी माताएं महिलाएं हैं और कुछ माताएं/महिलाएं डॉक्टर हो सकती हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी पेन पेंसिल हैं। कुछ पेंसिल इरेज़र हैं। निष्कर्ष: I. कुछ पेन इरेज़र हैं। II. कोई पेन इरेज़र नहीं है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल निष्कर्ष II अनुसरण करता है", "या तो I या II अनुसरण करता है", "दोनों निष्कर्ष अनुसरण करते हैं"], correct: "या तो I या II अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) एक पासे की दो स्थितियाँ दी गई हैं। यदि ऊपर 3 है, तो नीचे कौन सी संख्या होगी? (पासा 1 में: 3, 1, 2; पासा 2 में: 1, 5, 6)", options: ["5", "6", "4", "2"], correct: "5", category: "Medium" },
      { id: 13, text: "(Mirror Image) दर्पण को शब्द के दाईं ओर रखने पर शब्द 'REASONING' की सही दर्पण छवि क्या होगी?", options: ["GNINOSAER (पार्श्व उलटा रूप)", "REASONING ही रहेगा", "उलटा अक्षरों वाला REASONING", "अक्षरों का क्रम समान परंतु उलटे अक्षर"], correct: "GNINOSAER (पार्श्व उलटा रूप)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला श्रृंखला में बाएं छोर से 10वें अक्षर के दाएं 5वां अक्षर कौन सा होगा?", options: ["N", "O", "P", "Q"], correct: "O", category: "Medium" },
      { id: 15, text: "(Embedded Images) यदि किसी प्रश्न आकृति में एक 'X' पैटर्न है, तो वह किस उत्तर आकृति में समाहित है?", options: ["आकृति A", "आकृति B", "आकृति C", "आकृति D"], correct: "आकृति A", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि A + B का अर्थ 'A, B का भाई है' और A - B का अर्थ 'A, B की बहन है', तो P + Q - R में P का R से क्या संबंध है?", options: ["भाई (Brother)", "बहन (Sister)", "पिता (Father)", "चाचा (Uncle)"], correct: "भाई (Brother)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति पूर्व की ओर 10 मीटर चलता है, फिर बाएं मुड़कर 5 मीटर चलता है, फिर दोबारा बाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?", options: ["5 मीटर", "10 मीटर", "15 मीटर", "0 मीटर"], correct: "5 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को कौन सा दिन होगा? (2024 एक लीप वर्ष है)", options: ["सोमवार", "मंगलवार", "बुधवार", "रविवार"], correct: "मंगलवार", category: "Medium" },
      { id: 19, text: "(Analogy) आँख (Eye) : मोतियाबिंद (Cataract) :: त्वचा (Skin) : ?", options: ["पायोरिया (Pyorrhea)", "एक्जिमा (Eczema)", "पीलिया (Jaundice)", "ट्रेकोमा (Trachoma)"], correct: "एक्जिमा (Eczema)", category: "Medium" },
      { id: 20, text: "(Number Series) 3, 5, 9, 17, 33, ?", options: ["45", "55", "65", "60"], correct: "65", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 6 मित्र A, B, C, D, E, F एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। B, F और C के बीच में है। A, E और D के बीच में है। F, D के ठीक बाएं है। E के ठीक बाएं कौन बैठा है?", options: ["C", "B", "A", "D"], correct: "A", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"सड़क पर सुरक्षित यात्रा के लिए हमेशा हेलमेट पहनें।\" - यातायात पुलिस विभाग का नोटिस। पूर्वधारणाएं: I. लोग नोटिस पढ़ते हैं और उसका पालन करते हैं। II. हेलमेट पहनने से यात्रा सुरक्षित होती है।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "दोनों I और II अंतर्निहित हैं", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: अधिकांश भारतीय छात्र विदेशों में उच्च शिक्षा प्राप्त करना चाहते हैं। निष्कर्ष: I. भारत में शिक्षा का स्तर अच्छा नहीं है। II. विदेशों में बेहतर नौकरी के अवसर हैं जो छात्रों को आकर्षित करते हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II अनुसरण करता है"], correct: "न तो I और न ही II अनुसरण करता है", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 छात्र एक पंक्ति में बैठे हैं। सुनील, आलोक या प्रणव के बगल में नहीं बैठा है। कपिल, संजय के बगल में बैठा है जो पंक्ति के बिल्कुल बाएं छोर पर बैठा है। आलोक, संजय के बगल में नहीं बैठा है। सुनील के बगल में कौन बैठा है?", options: ["कपिल", "आलोक", "संजय", "प्रणव"], correct: "कपिल", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) रमेश की आयु क्या है? कथन: I. रमेश अपनी बहन सीमा से 5 वर्ष बड़ा है। II. सीमा की आयु वर्तमान में 20 वर्ष है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक वृत्त को 4 बराबर भागों में विभाजित किया जाता है, तो समान संबंध दर्शाने के लिए एक वर्ग को कितने भागों में विभाजित किया जाना चाहिए?", options: ["2 भागों में", "4 भागों में", "8 भागों में", "6 भागों में"], correct: "4 भागों में", category: "Hard" },
      { id: 27, text: "(Figure Matrix) एक ग्रिड में आकृतियों का 3x3 का पैटर्न दिया गया है। अंतिम ग्रिड स्थान पर लुप्त आकृति ज्ञात कीजिए।", options: ["त्रिभुज", "वर्ग", "वृत्त", "षट्भुज"], correct: "वृत्त", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक वर्गाकार कागज को मोड़कर एक कोने पर काटा जाता है। कागज को खोलने पर वह कैसा दिखेगा?", options: ["केंद्र में चार छेद", "कोनों पर चार छेद", "कोई छेद नहीं", "एक बड़ा छेद"], correct: "केंद्र में चार छेद", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: शहर में वायु प्रदूषण का स्तर सुरक्षित सीमा से ऊपर चला गया है। कार्रवाई: I. सभी वाहनों के चलने पर तुरंत पूर्ण प्रतिबंध लगा दिया जाना चाहिए। II. लोगों को सलाह दी जानी चाहिए कि वे बाहर कम से कम निकलें।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल II अनुसरण करता", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) चार आकृतियों में से विषम आकृति चुनिए:", options: ["वृत्त (Circle)", "दीर्घवृत्त (Ellipse)", "त्रिभुज (Triangle)", "गोला (Sphere)"], correct: "गोला (Sphere)", category: "Hard" }
    ]
  },
  {
    id: 2,
    title: "RRB Group D Reasoning Mock Test - 2",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 5, 10, 17, 26, 37, ?", options: ["50", "48", "52", "45"], correct: "50", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: Z, X, V, T, R, ?", options: ["P", "Q", "O", "S"], correct: "P", category: "Easy" },
      { id: 3, text: "(Direction Sense) मोहन दक्षिण की ओर 8 किमी चलता है, फिर पश्चिम की ओर मुड़कर 6 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से कितनी दूरी पर है?", options: ["10 किमी", "14 किमी", "12 किमी", "8 किमी"], correct: "10 किमी", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि 'CAT' को '3120' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?", options: ["4157", "4158", "5157", "4147"], correct: "4157", category: "Easy" },
      { id: 5, text: "(Blood Relations) A, B का भाई है। C, A की माता है। D, C का पिता है। B का D से क्या संबंध है?", options: ["नाती/नतिनी (Grandchild)", "पुत्र (Son)", "भाई (Brother)", "चाचा (Uncle)"], correct: "नाती/नतिनी (Grandchild)", category: "Easy" },
      { id: 6, text: "(Analogy) कलम : लिखना :: चाकू : ?", options: ["काटना (Cut)", "उबलना (Boil)", "सब्जी (Vegetable)", "तेज़ (Sharp)"], correct: "काटना (Cut)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["जनवरी (January)", "मार्च (March)", "जून (June)", "जुलाई (July)"], correct: "जून (June)", category: "Easy" },
      { id: 8, text: "(Ranking) 40 बच्चों की कक्षा में अनिल का स्थान ऊपर से 14वां है। नीचे से उसका स्थान क्या होगा?", options: ["27वां", "26वां", "28वां", "25वां"], correct: "27वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '-' और '-' का अर्थ '×' है, तो 15 - 3 + 10 का मान क्या होगा?", options: ["35", "45", "25", "15"], correct: "35", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'पक्षी', 'कौआ' और 'कुत्ता' का सही वेन आरेख प्रतिनिधित्व कौन सा है?", options: ["कौआ पूरी तरह पक्षी के अंदर है, कुत्ता अलग है", "तीनों एक दूसरे को काटते हैं", "तीनों पूरी तरह अलग हैं", "पक्षी और कौआ अलग हैं, कुत्ता अंदर है"], correct: "कौआ पूरी तरह पक्षी के अंदर है, कुत्ता अलग है", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी बिल्लियां शेर हैं। सभी शेर बाघ हैं। निष्कर्ष: I. सभी बिल्लियां बाघ हैं। II. कुछ बाघ बिल्लियां हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल निष्कर्ष II अनुसरण करता है", "दोनों निष्कर्ष अनुसरण करते हैं", "न तो I और न ही II अनुसरण करता है"], correct: "दोनों निष्कर्ष अनुसरण करते हैं", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: पासा 1 (1, 2, 3), पासा 2 (1, 4, 5)। 2 के विपरीत फलक पर कौन सा अंक होगा?", options: ["4", "5", "6", "3"], correct: "4", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'MOCK' की दर्पण छवि क्या होगी?", options: ["KCOM (अक्षर पार्श्व उलटे)", "MOCK ही रहेगा", "KC0M", "उलटे अक्षरों वाला MOCK"], correct: "KCOM (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में बाएं छोर से 15वें अक्षर के बाएं 5वां अक्षर कौन सा होगा?", options: ["J", "K", "L", "I"], correct: "J", category: "Medium" },
      { id: 15, text: "(Embedded Images) किस उत्तर आकृति में एक वर्ग के अंदर विकर्ण रेखा छिपी हुई है?", options: ["आकृति B", "आकृति A", "आकृति C", "आकृति D"], correct: "आकृति B", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि A * B का अर्थ 'A, B का पिता है', तो P * Q में P का Q से क्या संबंध है?", options: ["पिता (Father)", "माता (Mother)", "पुत्र (Son)", "भाई (Brother)"], correct: "पिता (Father)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति उत्तर की ओर 4 किमी जाता है, फिर पूर्व की ओर 3 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से कितनी दूरी और किस दिशा में है?", options: ["5 किमी, उत्तर-पूर्व", "7 किमी, पूर्व", "5 किमी, उत्तर-पश्चिम", "6 किमी, उत्तर"], correct: "5 किमी, उत्तर-पूर्व", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) घड़ी में 3:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?", options: ["90°", "180°", "60°", "120°"], correct: "90°", category: "Medium" },
      { id: 19, text: "(Analogy) भारत : रुपया :: संयुक्त राज्य अमेरिका : ?", options: ["डॉलर (Dollar)", "यूरो (Euro)", "येन (Yen)", "पौंड (Pound)"], correct: "डॉलर (Dollar)", category: "Medium" },
      { id: 20, text: "(Number Series) 2, 6, 12, 20, 30, ?", options: ["42", "40", "45", "38"], correct: "42", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 5 सहेलियाँ P, Q, R, S, T एक बेंच पर उत्तर की ओर मुंह करके बैठी हैं। Q, P के ठीक बाएं बैठी है। R, S के ठीक दाएं बैठी है। T, Q और R के बीच बैठी है। मध्य में कौन बैठी है?", options: ["T", "Q", "R", "P"], correct: "T", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"यदि आप कंप्यूटर प्रोग्रामिंग सीखना चाहते हैं, तो हमारे संस्थान में शामिल हों।\" - विज्ञापन। पूर्वधारणाएं: I. लोग विज्ञापनों पर प्रतिक्रिया देते हैं। II. संस्थान उच्च गुणवत्ता वाली शिक्षा प्रदान करता है।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "दोनों I और II अंतर्निहित हैं", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सुबह की सैर स्वास्थ्य के लिए अच्छी होती है। निष्कर्ष: I. सभी स्वस्थ लोग सुबह की सैर पर जाते हैं। II. शाम की सैर हानिकारक होती है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II अनुसरण करता है"], correct: "न तो I और न ही II अनुसरण करता है", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 6 मित्र A, B, C, D, E, F एक पंक्ति में बैठे हैं। F, E के ठीक दाएं बैठा है। B, C और D के बीच बैठा है। A, E और C के बीच बैठा है। पंक्ति के दोनों छोरों पर कौन बैठे हैं?", options: ["F और D", "F और E", "A और B", "C और D"], correct: "F और D", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) M का P से क्या संबंध है? कथन: I. M, K का भाई है। II. K, P की पुत्री है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक त्रिभुज के अंदर एक छोटा वृत्त खींचा जाए, तो एक वर्ग के लिए समान संबंध क्या होगा?", options: ["वर्ग के अंदर एक छोटा वृत्त", "वर्ग के बाहर एक वृत्त", "वृत्त के अंदर एक वर्ग", "दो छोटे वर्ग"], correct: "वर्ग के अंदर एक छोटा वृत्त", category: "Hard" },
      { id: 27, text: "(Figure Matrix) अंतिम स्थान पर लुप्त आकृति ज्ञात कीजिए जहां प्रति पंक्ति रेखाओं की संख्या 1, 2, 3 बढ़ रही है।", options: ["3 रेखाओं वाली आकृति", "4 रेखाओं वाली आकृति", "2 रेखाओं वाली आकृति", "1 रेखा वाली आकृति"], correct: "3 रेखाओं वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को त्रिकोणीय रूप में मोड़ा जाता है और दो कट लगाए जाते हैं। खोलने पर वह कैसा दिखेगा?", options: ["चार कोनों पर कट", "केंद्र में दो कट", "कागज के किनारों पर कई कट", "कोई कट नहीं"], correct: "कागज के किनारों पर कई कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: ट्रेन के पटरी से उतरने के कारण यात्रियों को बहुत परेशानी हुई। कार्रवाई: I. रेलवे को पटरियों की तुरंत जांच करानी चाहिए। II. यात्रियों को वैकल्पिक परिवहन सुविधा दी जानी चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) चार आकृतियों में से विषम चुनिए:", options: ["त्रिभुज (Triangle)", "वर्ग (Square)", "पंचभुज (Pentagon)", "वृत्त (Circle)"], correct: "वृत्त (Circle)", category: "Hard" }
    ]
  },
  {
    id: 3,
    title: "RRB Group D Reasoning Mock Test - 3",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) 10, 20, 31, 43, 56, ?", options: ["70", "68", "72", "75"], correct: "70", category: "Easy" },
      { id: 2, text: "(Alphabet Series) A, D, G, J, M, ?", options: ["P", "Q", "O", "N"], correct: "P", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति पश्चिम की ओर मुंह करके खड़ा है। वह 90° दक्षिणावर्त (clockwise) मुड़ता है। अब उसका मुंह किस दिशा में है?", options: ["उत्तर (North)", "दक्षिण (South)", "पूर्व (East)", "पश्चिम (West)"], correct: "उत्तर (North)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि किसी कूट भाषा में 'FISH' को 'EHRG' लिखा जाता है, तो 'JUNGLE' को क्या लिखा जाएगा?", options: ["ITMFKD", "ITNFKD", "KVOHMF", "TIMFKD"], correct: "ITMFKD", category: "Easy" },
      { id: 5, text: "(Blood Relations) यदि X, Y के पुत्र का भाई है, तो X का Y से क्या संबंध है?", options: ["पुत्र (Son)", "भाई (Brother)", "चाचा (Uncle)", "पिता (Father)"], correct: "पुत्र (Son)", category: "Easy" },
      { id: 6, text: "(Analogy) पुस्तक : लेखक :: मूर्ति : ?", options: ["मूर्तिकार (Sculptor)", "पेंटर (Painter)", "संगीतकार (Musician)", "लेखक (Writer)"], correct: "मूर्तिकार (Sculptor)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["तांबा (Copper)", "लोहा (Iron)", "सोना (Gold)", "कोयला (Coal)"], correct: "कोयला (Coal)", category: "Easy" },
      { id: 8, text: "(Ranking) एक कक्षा में 30 छात्रों में से सुरेश का स्थान ऊपर से 11वां है। नीचे से उसका स्थान क्या है?", options: ["20वां", "21वां", "19वां", "22वां"], correct: "20वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '÷' और '÷' का अर्थ '×' है, तो 24 + 6 ÷ 5 का मान क्या होगा?", options: ["20", "15", "10", "25"], correct: "20", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'सब्जी', 'आलू' और 'गोभी' के बीच सही संबंध दर्शाने वाला वेन आरेख कौन सा है?", options: ["आलू और गोभी दोनों अलग-अलग सब्जियां हैं", "आलू के अंदर गोभी है", "तीनों पूरी तरह अलग हैं", "गोभी सब्जी है, आलू अलग है"], correct: "आलू और गोभी दोनों अलग-अलग सब्जियां हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: कुछ डॉक्टर लेखक हैं। सभी लेखक बुद्धिमान हैं। निष्कर्ष: I. कुछ डॉक्टर बुद्धिमान हैं। II. सभी बुद्धिमान लोग लेखक हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों निष्कर्ष अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) 3 के विपरीत फलक का अंक क्या होगा यदि पासे की दो स्थितियाँ 3, 4, 5 और 4, 6, 2 हैं?", options: ["6", "2", "1", "4"], correct: "6", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'TEST' की सही दर्पण छवि क्या होगी?", options: ["TSET (अक्षर पार्श्व उलटे)", "TEST ही रहेगा", "T3ST", "उलटे अक्षरों वाला TEST"], correct: "TSET (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में कौन सा अक्षर बाएं छोर से 7वें अक्षर के ठीक दाएं होगा?", options: ["H", "G", "F", "I"], correct: "H", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक अर्धवृत्त आकृति किस उत्तर आकृति में छिपी हुई है?", options: ["आकृति C", "आकृति A", "आकृति B", "आकृति D"], correct: "आकृति C", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि A - B का अर्थ 'A, B की माता है', तो P - Q में P का Q से क्या संबंध है?", options: ["माता (Mother)", "पिता (Father)", "पुत्री (Daughter)", "बहन (Sister)"], correct: "माता (Mother)", category: "Medium" },
      { id: 17, text: "(Direction Sense) रीता दक्षिण की ओर 30 मीटर चलती है, फिर बाएं मुड़कर 40 मीटर चलती है। अब वह अपने प्रारंभिक बिंदु से कितनी दूरी पर है?", options: ["50 मीटर", "70 मीटर", "60 मीटर", "80 मीटर"], correct: "50 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) यदि आज बुधवार है, तो आज से 15 दिन बाद कौन सा दिन होगा?", options: ["गुरुवार", "बुधवार", "शुक्रवार", "मंगलवार"], correct: "गुरुवार", category: "Medium" },
      { id: 19, text: "(Analogy) थर्मामीटर : तापमान :: बैरोमीटर : ?", options: ["वायुमंडलीय दाब (Pressure)", "आर्द्रता (Humidity)", "ऊंचाई (Height)", "भूकंप (Earthquake)"], correct: "वायुमंडलीय दाब (Pressure)", category: "Medium" },
      { id: 20, text: "(Number Series) 120, 99, 80, 63, 48, ?", options: ["35", "38", "40", "30"], correct: "35", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) A, B, C, D, E, F एक गोल मेज के चारों ओर बैठे हैं। D, A और F के बीच में है। C, B और E के बीच में है। F, E के विपरीत है। A के विपरीत कौन है?", options: ["B", "C", "D", "E"], correct: "C", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"प्रदूषण कम करने के लिए सार्वजनिक वाहनों का अधिक उपयोग करें।\" पूर्वधारणाएं: I. लोग प्रदूषण कम करना चाहते हैं। II. सार्वजनिक वाहनों का उपयोग करने से प्रदूषण कम होता है।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "दोनों I और II अंतर्निहित हैं", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सभी गरीब लोग परिश्रमी होते हैं। राम गरीब है। निष्कर्ष: I. राम परिश्रमी है। II. राम एक अच्छा इंसान है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 मित्र एक पंक्ति में बैठे हैं। मनोज, दिनेश के बाएं और नवीन के दाएं बैठा है। यदि हरीश, दिनेश के दाएं बैठा है, तो मध्य में कौन बैठा है?", options: ["मनोज", "दिनेश", "नवीन", "हरीश"], correct: "मनोज", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) रमेश का जन्मदिन कब है? कथन: I. उसकी माता को याद है कि रमेश का जन्मदिन 15 के बाद और 18 से पहले है। II. उसके भाई को याद है कि उसका जन्मदिन 16 के बाद और 19 से पहले है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक रेखा को घुमाकर एक कोण बनाया जाए, तो दो समानांतर रेखाओं का संबंध किससे होगा?", options: ["एक वर्ग", "एक त्रिकोण", "एक वृत्त", "कोई आकृति नहीं"], correct: "एक वर्ग", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में तीन आकृतियाँ हैं: वृत्त, त्रिभुज, वर्ग।", options: ["त्रिभुज", "वर्ग", "वृत्त", "कोई नहीं"], correct: "त्रिभुज", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को दो बार मोड़ा जाता है और बीच में एक गोल छेद किया जाता है। खोलने पर वह कैसा दिखेगा?", options: ["चारों कोनों पर गोल छेद", "बीच में चार गोल छेद", "बीच में दो गोल छेद", "कोई छेद नहीं"], correct: "बीच में चार गोल छेद", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक त्रिभुज के अंदर त्रिभुज", "एक वर्ग के अंदर वर्ग", "एक वृत्त के अंदर वृत्त", "एक त्रिभुज के अंदर वर्ग"], correct: "एक त्रिभुज के अंदर वर्ग", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: स्थानीय क्षेत्र में मलेरिया के मामलों में भारी वृद्धि हुई है। कार्रवाई: I. नगर निगम को मच्छरों को मारने वाली दवा का छिड़काव तुरंत कराना चाहिए। II. लोगों को पानी जमा न होने देने की सलाह दी जानी चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" }
    ]
  },
  {
    id: 4,
    title: "RRB Group D Reasoning Mock Test - 4",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 2, 9, 28, 65, 126, ?", options: ["217", "215", "220", "198"], correct: "217", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: A, E, I, M, Q, ?", options: ["U", "V", "T", "W"], correct: "U", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक सुबह सूर्योदय के तुरंत बाद, राम और श्याम एक-दूसरे के आमने-सामने खड़े होकर बात कर रहे थे। यदि राम की छाया श्याम के ठीक बाएं बन रही थी, तो श्याम का मुख किस दिशा में था?", options: ["उत्तर (North)", "दक्षिण (South)", "पूर्व (East)", "पश्चिम (West)"], correct: "उत्तर (North)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि किसी कूट भाषा में 'ROSE' को 'TQUG' लिखा जाता है, तो 'BLUE' को क्या लिखा जाएगा?", options: ["DNWG", "DNVG", "CMVG", "CNWG"], correct: "DNWG", category: "Easy" },
      { id: 5, text: "(Blood Relations) एक महिला की ओर इशारा करते हुए एक पुरुष ने कहा, \"उसके भाई का एकमात्र पुत्र मेरी पत्नी का भाई है।\" वह महिला उस पुरुष से किस प्रकार संबंधित है?", options: ["ससुर की बहन (Sister of father-in-law)", "माता (Mother)", "बहन (Sister)", "चाची (Aunt)"], correct: "ससुर की बहन (Sister of father-in-law)", category: "Easy" },
      { id: 6, text: "(Analogy) गाय : बछड़ा :: भेड़ : ?", options: ["मेमना (Lamb)", "बिल्ली का बच्चा (Kitten)", "कुत्ते का बच्चा (Puppy)", "शावक (Cub)"], correct: "मेमना (Lamb)", category: "Easy" },
      { id: 7, text: "(Classification) निम्नलिखित में से विषम पद चुनिए:", options: ["सोमवार (Monday)", "मंगलवार (Tuesday)", "बुधवार (Wednesday)", "जनवरी (January)"], correct: "जनवरी (January)", category: "Easy" },
      { id: 8, text: "(Ranking) 50 छात्रों में से, अमित का स्थान बाएं से 18वां है। दाएं छोर से उसका स्थान क्या है?", options: ["33वां", "32वां", "34वां", "31वां"], correct: "33वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 12 + 4 - 8 का मान क्या होगा?", options: ["56", "48", "64", "40"], correct: "56", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'स्तनधारी', 'गाय' और 'कौआ' के बीच सही संबंध दर्शाने वाला आरेख कौन सा है?", options: ["गाय पूरी तरह स्तनधारी के अंदर है, कौआ अलग है", "तीनों पूरी तरह अलग हैं", "तीनों एक दूसरे को काटते हैं", "गाय स्तनधारी है और कौआ भी स्तनधारी है"], correct: "गाय पूरी तरह स्तनधारी के अंदर है, कौआ अलग है", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी चाबियां ताले हैं। सभी ताले पेंच हैं। निष्कर्ष: I. सभी चाबियां पेंच हैं। II. कुछ पेंच चाबियां हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों अनुसरण करते हैं", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: पासा 1 (6, 2, 3), पासा 2 (6, 5, 4)। 2 के विपरीत फलक का अंक क्या होगा?", options: ["5", "4", "1", "3"], correct: "5", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'HAPPY' की दर्पण छवि क्या होगी?", options: ["YPPAH (अक्षर पार्श्व उलटे)", "HAPPY ही रहेगा", "YPP4H", "उलटे अक्षरों वाला HAPPY"], correct: "YPPAH (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में बाएं छोर से 20वें अक्षर के बाएं 6ठा अक्षर कौन सा होगा?", options: ["N", "M", "O", "P"], correct: "N", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक कोण 'L' आकार किस उत्तर आकृति में समाहित है?", options: ["आकृति D", "आकृति A", "आकृति B", "आकृति C"], correct: "आकृति D", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि P + Q का अर्थ 'P, Q का पुत्र है', तो X + Y में X का Y से क्या संबंध है?", options: ["पुत्र (Son)", "पिता (Father)", "भाई (Brother)", "चाचा (Uncle)"], correct: "पुत्र (Son)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति पश्चिम की ओर 15 मीटर चलता है, फिर बाएं मुड़कर 20 मीटर चलता है। वह प्रारंभिक बिंदु से न्यूनतम कितनी दूरी पर है?", options: ["25 मीटर", "35 मीटर", "15 मीटर", "30 मीटर"], correct: "25 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) यदि आज 15 अगस्त को सोमवार है, तो उसी वर्ष 15 सितंबर को कौन सा दिन होगा?", options: ["गुरुवार", "बुधवार", "शुक्रवार", "मंगलवार"], correct: "गुरुवार", category: "Medium" },
      { id: 19, text: "(Analogy) जापान : येन :: चीन : ?", options: ["युआन (Yuan)", "डॉलर (Dollar)", "रुपया (Rupee)", "टका (Taka)"], correct: "युआन (Yuan)", category: "Medium" },
      { id: 20, text: "(Number Series) 1, 4, 9, 16, 25, ?", options: ["36", "35", "40", "49"], correct: "36", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 5 छात्र एक गोल मेज के चारों ओर बैठे हैं। A, B और C के बीच में बैठा है। D, B के ठीक बाएं बैठा है। E, C के ठीक दाएं बैठा है। B के विपरीत कौन बैठा है?", options: ["E", "C", "A", "D"], correct: "E", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"फास्ट फूड स्वास्थ्य के लिए हानिकारक है, इसलिए बच्चों को इससे दूर रखें।\" पूर्वधारणाएं: I. फास्ट फूड बच्चों को बहुत आकर्षित करता है। II. फास्ट फूड से स्वास्थ्य समस्याएं हो सकती हैं।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "केवल II अंतर्निहित है", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: कुछ बुद्धिमान लोग वैज्ञानिक होते हैं। सभी वैज्ञानिक परिश्रमी होते हैं। निष्कर्ष: I. कुछ बुद्धिमान लोग परिश्रमी होते हैं। II. सभी परिश्रमी लोग वैज्ञानिक होते हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 6 मित्र A, B, C, D, E, F एक पंक्ति में बैठे हैं। B, C और D के बीच है। E, A और F के बीच है। D, F के ठीक बाएं बैठा है। मध्य में कौन बैठे हैं?", options: ["D और F", "C और B", "A और E", "B और E"], correct: "D और F", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) X की माता कौन है? कथन: I. Y, X की बहन है जो Z की पुत्री है। II. Z, W की पत्नी है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक खाली वर्ग को रंगीन कर दिया जाता है, तो एक खाली वृत्त के लिए समान संबंध क्या होगा?", options: ["एक रंगीन वृत्त", "एक बड़ा वृत्त", "एक छोटा वृत्त", "एक वर्ग"], correct: "एक रंगीन वृत्त", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में रेखाओं की मोटाई बढ़ रही है।", options: ["सबसे मोटी रेखा वाली आकृति", "पतली रेखा वाली आकृति", "कोई बदलाव नहीं", "कोई नहीं"], correct: "सबसे मोटी रेखा वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को चार बार मोड़ा जाता है और एक छोटा त्रिकोणीय कट लगाया जाता है। खोलने पर वह कैसा दिखेगा?", options: ["चार कोनों पर त्रिकोणीय कट", "केंद्र में एक त्रिकोणीय कट", "चारों तरफ चार त्रिकोणीय कट", "कोई कट नहीं"], correct: "चारों तरफ चार त्रिकोणीय कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: शहर में पीने के पानी की भारी किल्लत हो गई है। कार्रवाई: I. सरकार को पानी के टैंकरों की व्यवस्था तुरंत करनी चाहिए। II. लोगों को पानी का कम से कम उपयोग करने के लिए जागरूक किया जाना चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक वर्ग के अंदर वृत्त", "एक वृत्त के अंदर वर्ग", "एक त्रिभुज के अंदर वृत्त", "एक वृत्त के अंदर त्रिभुज"], correct: "एक वृत्त के अंदर त्रिभुज", category: "Hard" }
    ]
  },
  {
    id: 5,
    title: "RRB Group D Reasoning Mock Test - 5",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 3, 7, 15, 31, 63, ?", options: ["127", "125", "128", "130"], correct: "127", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: B, D, F, H, J, ?", options: ["L", "K", "M", "N"], correct: "L", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति पूर्व की ओर मुख करके खड़ा है। वह 45° वामावर्त (anti-clockwise) घूमता है। अब उसका मुख किस दिशा में है?", options: ["उत्तर-पूर्व (North-East)", "दक्षिण-पूर्व (South-East)", "उत्तर (North)", "पूर्व (East)"], correct: "उत्तर-पूर्व (North-East)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि 'DOG' को '5168' लिखा जाता है, तो 'CAT' को क्या लिखा जाएगा?", options: ["4221", "3120", "4121", "3221"], correct: "4221", category: "Easy" },
      { id: 5, text: "(Blood Relations) A, B की माता है। C, A का पुत्र है। D, E का भाई है। E, B की पुत्री है। D की नानी कौन है?", options: ["A", "B", "C", "D"], correct: "A", category: "Easy" },
      { id: 6, text: "(Analogy) पुस्तक : पुस्तकालय :: जानवर : ?", options: ["चिड़ियाघर (Zoo)", "वन (Forest)", "घर (Home)", "पिंजरा (Cage)"], correct: "चिड़ियाघर (Zoo)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["गेंद (Ball)", "बल्ला (Bat)", "विकेट (Wicket)", "स्टेडियम (Stadium)"], correct: "स्टेडियम (Stadium)", category: "Easy" },
      { id: 8, text: "(Ranking) एक कक्षा में रमेश ऊपर से 7वें और नीचे से 28वें स्थान पर है। कक्षा में कुल कितने छात्र हैं?", options: ["34", "35", "36", "33"], correct: "34", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '×' और '×' का अर्थ '-' है, तो 10 + 5 × 12 का मान क्या होगा?", options: ["38", "50", "48", "30"], correct: "38", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'लेखक', 'शिक्षक' और 'पुरुष' के बीच सही संबंध दर्शाने वाला वेन आरेख कौन सा है?", options: ["तीनों एक दूसरे को आंशिक रूप से काटते हैं", "सभी लेखक शिक्षक हैं", "सभी शिक्षक पुरुष हैं", "तीनों बिल्कुल अलग हैं"], correct: "तीनों एक दूसरे को आंशिक रूप से काटते हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी लड़के खिलाड़ी हैं। कोई खिलाड़ी आलसी नहीं है। निष्कर्ष: I. कोई लड़का आलसी नहीं है। II. कुछ आलसी लोग खिलाड़ी हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) एक पासे की दो स्थितियाँ: (1, 3, 5) और (2, 4, 6)। 5 के विपरीत फलक का अंक क्या होगा?", options: ["2", "4", "6", "1"], correct: "6", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'EXAM' की दर्पण छवि क्या होगी?", options: ["MAXE (अक्षर पार्श्व उलटे)", "EXAM ही रहेगा", "EXAM का आधा भाग", "MAXE"], correct: "MAXE (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में बाएं छोर से 12वें अक्षर के दाएं 4था अक्षर कौन सा होगा?", options: ["P", "Q", "O", "R"], correct: "P", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक तीर '->' किस उत्तर आकृति में समाहित है?", options: ["आकृति A", "आकृति B", "आकृति C", "आकृति D"], correct: "आकृति A", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि P - Q का अर्थ 'P, Q का भाई है', तो X - Y में X का Y से क्या संबंध है?", options: ["भाई (Brother)", "बहन (Sister)", "पिता (Father)", "चाचा (Uncle)"], correct: "भाई (Brother)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति दक्षिण की ओर 12 मीटर चलता है, फिर पश्चिम की ओर मुड़कर 5 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?", options: ["13 मीटर", "17 मीटर", "15 मीटर", "14 मीटर"], correct: "13 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) यदि आज 1 जनवरी को रविवार है, तो 1 फरवरी को कौन सा दिन होगा? (लीप वर्ष नहीं है)", options: ["बुधवार", "मंगलवार", "गुरुवार", "सोमवार"], correct: "बुधवार", category: "Medium" },
      { id: 19, text: "(Analogy) डॉक्टर : अस्पताल :: रसोइया (Chef) : ?", options: ["रसोई (Kitchen)", "रेस्तरां (Restaurant)", "होटल (Hotel)", "घर (Home)"], correct: "रसोई (Kitchen)", category: "Medium" },
      { id: 20, text: "(Number Series) 4, 9, 19, 39, 79, ?", options: ["159", "155", "160", "150"], correct: "159", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 6 मित्र A, B, C, D, E, F एक पंक्ति में बैठे हैं। E और F मध्य में हैं। A और B छोरों पर बैठे हैं। C, A के ठीक बाएं बैठा है। B के ठीक दाएं कौन बैठा है?", options: ["D", "C", "E", "F"], correct: "D", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"समय पर करों का भुगतान करने वाले नागरिकों को पुरस्कृत किया जाना चाहिए।\" पूर्वधारणाएं: I. पुरस्कार देने से लोग अधिक कर देंगे। II. नागरिक कर चोरी करना बंद कर देंगे।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "केवल पूर्वधारणा I अंतर्निहित है", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सभी पुस्तकें पेन हैं। सभी पेन पेंसिल हैं। निष्कर्ष: I. सभी पुस्तकें पेंसिल हैं। II. कुछ पेंसिल पुस्तकें हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों अनुसरण करते हैं", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 मित्र एक पंक्ति में बैठे हैं। अमित, सुजीत के ठीक दाएं है। रंजीत, सुजीत के ठीक बाएं है। यदि हरीश मध्य में है, तो रंजीत के बाएं कौन बैठा है?", options: ["हरीश", "अमित", "सुजीत", "कोई नहीं"], correct: "हरीश", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) P की आयु क्या है? कथन: I. P, Q से 5 वर्ष छोटा है। II. R, जो 20 वर्ष का है, Q से 2 वर्ष बड़ा है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक वर्ग को 4 भागों में काटकर त्रिकोण बनाए जाएं, तो एक षट्भुज के लिए समान संबंध क्या होगा?", options: ["6 त्रिकोण", "4 त्रिकोण", "8 त्रिकोण", "कोई नहीं"], correct: "6 त्रिकोण", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में आकृतियों के कोनों की संख्या 3, 4, 5 बढ़ रही है।", options: ["5 कोनों वाली आकृति", "6 कोनों वाली आकृति", "4 कोनों वाली आकृति", "3 कोनों वाली आकृति"], correct: "5 कोनों वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को मोड़ा जाता है और किनारों पर छोटे गोल कट लगाए जाते हैं। खोलने पर वह कैसा दिखेगा?", options: ["चारों किनारों पर गोल कट", "केंद्र में एक गोल कट", "केवल कोनों पर कट", "कोई कट नहीं"], correct: "चारों किनारों पर गोल कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: शहर में चोरी और डकैती के मामलों में अचानक भारी वृद्धि हुई है। कार्रवाई: I. पुलिस को रात में गश्त बढ़ा देनी चाहिए। II. लोगों को अपने घरों में ताले मजबूत करने चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक त्रिभुज के अंदर वृत्त", "एक वर्ग के अंदर वृत्त", "एक षट्भुज के अंदर वृत्त", "एक वृत्त के अंदर वृत्त"], correct: "एक वृत्त के अंदर वृत्त", category: "Hard" }
    ]
  },
  {
    id: 6,
    title: "RRB Group D Reasoning Mock Test - 6",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 1, 8, 27, 64, 125, ?", options: ["216", "215", "220", "225"], correct: "216", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: A, Z, B, Y, C, ?", options: ["X", "W", "V", "U"], correct: "X", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति 5 किमी दक्षिण की ओर चलता है, फिर दाएं मुड़कर 3 किमी चलता है। अब वह किस दिशा में चल रहा है?", options: ["पश्चिम (West)", "पूर्व (East)", "उत्तर (North)", "दक्षिण (South)"], correct: "पश्चिम (West)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि 'RED' को '360' लिखा जाता है (R=18, E=5, D=4, गुणा करने पर), तो 'BLUE' को क्या लिखा जाएगा?", options: ["480", "960", "240", "120"], correct: "480", category: "Easy" },
      { id: 5, text: "(Blood Relations) एक चित्र की ओर इशारा करते हुए सुरेश ने कहा, \"वह मेरे पिता के एकमात्र पुत्र की पुत्री है।\" सुरेश का उस लड़की से क्या संबंध है?", options: ["पिता (Father)", "भाई (Brother)", "चाचा (Uncle)", "दादा (Grandfather)"], correct: "पिता (Father)", category: "Easy" },
      { id: 6, text: "(Analogy) थर्मामीटर : ऊष्मा :: लैक्टोमीटर : ?", options: ["दूध की शुद्धता (Purity of Milk)", "पानी की शुद्धता (Purity of Water)", "आर्द्रता (Humidity)", "तापमान (Temperature)"], correct: "दूध की शुद्धता (Purity of Milk)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["सोना (Gold)", "चांदी (Silver)", "प्लैटिनम (Platinum)", "प्लास्टिक (Plastic)"], correct: "प्लास्टिक (Plastic)", category: "Easy" },
      { id: 8, text: "(Ranking) 45 छात्रों की एक कक्षा में नेहा का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या होगा?", options: ["31वां", "30वां", "32वां", "29वां"], correct: "31वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 8 + 5 - 10 का मान क्या होगा?", options: ["50", "45", "40", "35"], correct: "50", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'लेखक', 'वकील' और 'बुद्धिमान' के बीच सही संबंध दर्शाने वाला वेन आरेख कौन सा है?", options: ["तीनों एक दूसरे को आंशिक रूप से काटते हैं", "सभी लेखक वकील हैं", "सभी बुद्धिमान लोग लेखक हैं", "तीनों पूरी तरह अलग हैं"], correct: "तीनों एक दूसरे को आंशिक रूप से काटते हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: कुछ फल मीठे होते हैं। सभी मीठे खाद्य पदार्थ स्वास्थ्यवर्धक होते हैं। निष्कर्ष: I. कुछ फल स्वास्थ्यवर्धक होते हैं। II. सभी स्वास्थ्यवर्धक खाद्य पदार्थ फल होते हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: (3, 5, 1) और (3, 2, 4)। 5 के विपरीत फलक का अंक क्या होगा?", options: ["2", "4", "6", "1"], correct: "2", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'STUDY' की दर्पण छवि क्या होगी?", options: ["YDUTS (अक्षर पार्श्व उलटे)", "STUDY ही रहेगा", "YDUTS", "उलटे अक्षरों वाला STUDY"], correct: "YDUTS (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में बाएं छोर से 15वें अक्षर के दाएं 3रा अक्षर कौन सा होगा?", options: ["R", "S", "Q", "T"], correct: "R", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक क्रॉस आकृति '+' किस उत्तर आकृति में समाहित है?", options: ["आकृति C", "आकृति A", "आकृति B", "आकृति D"], correct: "आकृति C", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि P + Q का अर्थ 'P, Q की बहन है', तो X + Y में X का Y से क्या संबंध है?", options: ["बहन (Sister)", "भाई (Brother)", "माता (Mother)", "पुत्री (Daughter)"], correct: "बहन (Sister)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति उत्तर की ओर 10 किमी चलता है, फिर दाएं मुड़कर 5 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से न्यूनतम कितनी दूरी पर है?", options: ["5√5 किमी", "15 किमी", "10 किमी", "12 किमी"], correct: "5√5 किमी", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) 15 अगस्त 1947 को कौन सा दिन था?", options: ["शुक्रवार", "शनिवार", "गुरुवार", "बुधवार"], correct: "शुक्रवार", category: "Medium" },
      { id: 19, text: "(Analogy) पृथ्वी : नीला :: मंगल : ?", options: ["लाल (Red)", "पीला (Yellow)", "हरा (Green)", "काला (Black)"], correct: "लाल (Red)", category: "Medium" },
      { id: 20, text: "(Number Series) 5, 11, 23, 47, 95, ?", options: ["191", "195", "190", "185"], correct: "191", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 6 मित्र A, B, C, D, E, F एक गोल मेज के चारों ओर बैठे हैं। A, B और C के बीच में है। E, D और F के बीच में है। F, B के विपरीत है। A के विपरीत कौन बैठा है?", options: ["E", "C", "D", "F"], correct: "E", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"धूम्रपान स्वास्थ्य के लिए हानिकारक है, इसलिए इस पर प्रतिबंध लगाया जाना चाहिए।\" पूर्वधारणाएं: I. लोग प्रतिबंध लगाने के बाद धूम्रपान बंद कर देंगे। II. धूम्रपान से फेफड़ों का कैंसर हो सकता है।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "केवल पूर्वधारणा I अंतर्निहित है", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सभी परिश्रमी छात्र परीक्षा में सफल होते हैं। सुरेश परिश्रमी है। निष्कर्ष: I. सुरेश परीक्षा में सफल होगा। II. परीक्षा कठिन नहीं है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 मित्र एक पंक्ति में बैठे हैं। रंजीत, सुजीत के दाएं बैठा है। अमित, सुजीत के बाएं बैठा है लेकिन हरीश के दाएं बैठा है। यदि नवीन मध्य में है, तो रंजीत के दाएं कौन बैठा है?", options: ["नवीन", "सुजीत", "अमित", "कोई नहीं"], correct: "नवीन", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) A की आयु क्या है? कथन: I. A, B से 10 वर्ष बड़ा है। II. C की आयु 30 वर्ष है जो B से 5 वर्ष छोटा है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक वृत्त को 2 भागों में विभाजित कर अर्धवृत्त बनाए जाएं, तो एक वर्ग के लिए समान संबंध क्या होगा?", options: ["2 आयत", "2 त्रिकोण", "4 आयत", "कोई नहीं"], correct: "2 आयत", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ आकृतियों का आकार छोटा हो रहा है।", options: ["सबसे छोटी आकृति", "बड़ी आकृति", "कोई बदलाव नहीं", "कोई नहीं"], correct: "सबसे छोटी आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को त्रिकोणीय रूप में मोड़ा जाता है और तीन गोल कट लगाए जाते हैं। खोलने पर वह कैसा दिखेगा?", options: ["छह कोनों पर गोल कट", "केंद्र में तीन गोल कट", "कागज के किनारों पर कई गोल कट", "कोई कट नहीं"], correct: "कागज के किनारों पर कई गोल कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: शहर में डेंगू के मामलों में अचानक वृद्धि हुई है। कार्रवाई: I. स्वास्थ्य अधिकारियों को तुरंत जागरूकता अभियान चलाना चाहिए। II. लोगों को मच्छरों से बचने के लिए सुरक्षात्मक उपाय करने चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक त्रिभुज के अंदर त्रिभुज", "एक वर्ग के अंदर वर्ग", "एक वृत्त के अंदर वृत्त", "एक वर्ग के अंदर त्रिभुज"], correct: "एक वर्ग के अंदर त्रिभुज", category: "Hard" }
    ]
  },
  {
    id: 7,
    title: "RRB Group D Reasoning Mock Test - 7",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 2, 6, 12, 20, 30, 42, ?", options: ["56", "54", "50", "48"], correct: "56", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: A, C, F, H, K, M, ?", options: ["P", "Q", "O", "N"], correct: "P", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति 10 किमी पश्चिम की ओर चलता है, फिर बाएं मुड़कर 5 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?", options: ["दक्षिण-पश्चिम (South-West)", "उत्तर-पश्चिम (North-West)", "दक्षिण (South)", "पश्चिम (West)"], correct: "दक्षिण-पश्चिम (South-West)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि किसी कूट भाषा में 'WATER' को 'YCVGT' लिखा जाता है, तो 'FIRE' को क्या लिखा जाएगा?", options: ["HKTG", "HKVG", "GKTG", "GKVG"], correct: "HKTG", category: "Easy" },
      { id: 5, text: "(Blood Relations) P, Q का पिता है और R, S का पुत्र है। T, P का भाई है। यदि Q, R की बहन है, तो S का T से क्या संबंध है?", options: ["भाभी (Sister-in-law)", "बहन (Sister)", "माता (Mother)", "चाची (Aunt)"], correct: "भाभी (Sister-in-law)", category: "Easy" },
      { id: 6, text: "(Analogy) मधुमक्खी : छत्ता :: पक्षी : ?", options: ["घोंसला (Nest)", "गुफा (Cave)", "पिंजरा (Cage)", "घर (Home)"], correct: "घोंसला (Nest)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["आँख (Eye)", "कान (Ear)", "नाक (Nose)", "हाथ (Hand)"], correct: "हाथ (Hand)", category: "Easy" },
      { id: 8, text: "(Ranking) 50 छात्रों में से, अमित का स्थान ऊपर से 10वां है। नीचे से उसका स्थान क्या होगा?", options: ["41वां", "40वां", "42वां", "39वां"], correct: "41वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '×' और '×' का अर्थ '+' है, तो 12 + 5 × 8 का मान क्या होगा?", options: ["68", "60", "50", "48"], correct: "68", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'महिलाएं', 'डॉक्टर' और 'इंजीनियर' के बीच सही संबंध दर्शाने वाला वेन आरेख कौन सा है?", options: ["महिलाएं दोनों हो सकती हैं, डॉक्टर और इंजीनियर अलग-अलग हैं", "तीनों एक दूसरे को काटते हैं", "सभी महिलाएं डॉक्टर हैं", "तीनों बिल्कुल अलग हैं"], correct: "महिलाएं दोनों हो सकती हैं, डॉक्टर और इंजीनियर अलग-अलग हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी पेन काले हैं। कुछ काले बैग हैं। निष्कर्ष: I. कुछ पेन बैग हैं। II. कोई पेन बैग नहीं है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल निष्कर्ष II अनुसरण करता है", "या तो I या II अनुसरण करता है", "दोनों निष्कर्ष अनुसरण करते हैं"], correct: "या तो I या II अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: (2, 4, 6) और (2, 1, 3)। 4 के विपरीत फलक का अंक क्या होगा?", options: ["1", "3", "5", "6"], correct: "1", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'TEST' की दर्पण छवि क्या होगी?", options: ["TSET (अक्षर पार्श्व उलटे)", "TEST ही रहेगा", "T3ST", "उलटे अक्षरों वाला TEST"], correct: "TSET (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में दाएं छोर से 15वें अक्षर के बाएं 5वां अक्षर कौन सा होगा?", options: ["G", "H", "I", "F"], correct: "G", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक ज़िगज़ैग 'Z' आकृति किस उत्तर आकृति में समाहित है?", options: ["आकृति A", "आकृति B", "आकृति C", "आकृति D"], correct: "आकृति A", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि A * B का अर्थ 'A, B का भाई है', तो X * Y में X का Y से क्या संबंध है?", options: ["भाई (Brother)", "बहन (Sister)", "माता (Mother)", "पुत्र (Son)"], correct: "भाई (Brother)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति पूर्व की ओर 12 मीटर चलता है, फिर उत्तर की ओर 5 मीटर चलता है। वह प्रारंभिक बिंदु से न्यूनतम कितनी दूरी पर है?", options: ["13 मीटर", "17 मीटर", "15 मीटर", "14 मीटर"], correct: "13 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) 26 जनवरी 1950 को कौन सा दिन था?", options: ["गुरुवार", "शुक्रवार", "शनिवार", "बुधवार"], correct: "गुरुवार", category: "Medium" },
      { id: 19, text: "(Analogy) सिंह : गर्जना :: कुत्ता : ?", options: ["भौंकना (Bark)", "चहकना (Chirp)", "म्याऊं (Meow)", "चिंघाड़ना (Roar)"], correct: "भौंकना (Bark)", category: "Medium" },
      { id: 20, text: "(Number Series) 2, 5, 11, 23, 47, ?", options: ["95", "90", "85", "100"], correct: "95", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 6 मित्र A, B, C, D, E, F एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। B, A और D के बीच है। E, C और F के बीच है। D, F के विपरीत है। B के विपरीत कौन बैठा है?", options: ["E", "C", "A", "D"], correct: "E", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"यदि आप अपनी उत्पादकता बढ़ाना चाहते हैं, तो समय प्रबंधन सीखें।\" पूर्वधारणाएं: I. समय प्रबंधन से उत्पादकता बढ़ती है। II. लोग अपनी उत्पादकता बढ़ाना चाहते हैं।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I and II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "दोनों I and II अंतर्निहित हैं", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सभी परिश्रमी लोग अमीर होते हैं। राम अमीर है। निष्कर्ष: I. राम परिश्रमी है। II. राम एक अच्छा इंसान है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "न तो I और न ही II", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 छात्र एक पंक्ति में बैठे हैं। सुनील, आलोक के ठीक दाएं बैठा है। प्रणव, आलोक के ठीक बाएं बैठा है। यदि संजय मध्य में बैठा है, तो सुनील के दाएं कौन बैठा है?", options: ["संजय", "हरीश", "आलोक", "कोई नहीं"], correct: "संजय", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) X की माता कौन है? कथन: I. Y, X की बहन है जो Z की पुत्री है। II. Z, W की पत्नी है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक वृत्त को 4 बराबर भागों में काटा जाता है, तो एक वर्ग के लिए समान संबंध क्या होगा?", options: ["4 वर्ग", "2 आयत", "4 आयत/वर्ग", "कोई नहीं"], correct: "4 आयत/वर्ग", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में आकृतियों के अंदर की रेखाएं बढ़ रही हैं।", options: ["3 रेखाओं वाली आकृति", "4 रेखाओं वाली आकृति", "2 रेखाओं वाली आकृति", "1 रेखा वाली आकृति"], correct: "3 रेखाओं वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को दो बार मोड़ा जाता है और कोनों पर छोटे त्रिकोणीय कट लगाए जाते हैं। खोलने पर वह कैसा दिखेगा?", options: ["चारों कोनों पर त्रिकोणीय कट", "केंद्र में एक त्रिकोणीय कट", "चारों तरफ चार त्रिकोणीय कट", "कोई कट नहीं"], correct: "चारों कोनों पर त्रिकोणीय कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: स्थानीय जलाशय में पानी के प्रदूषण का स्तर बहुत अधिक बढ़ गया है। कार्रवाई: I. जलाशय को तुरंत साफ कराया जाना चाहिए। II. लोगों को जलाशय के पानी का उपयोग करने से रोकना चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक त्रिभुज के अंदर वृत्त", "एक वर्ग के अंदर वृत्त", "एक षट्भुज के अंदर वृत्त", "एक वृत्त के अंदर वृत्त"], correct: "एक वृत्त के अंदर वृत्त", category: "Hard" }
    ]
  },
  {
    id: 8,
    title: "RRB Group D Reasoning Mock Test - 8",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 4, 9, 16, 25, 36, ?", options: ["49", "45", "40", "42"], correct: "49", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: Z, Y, X, W, V, ?", options: ["U", "T", "S", "R"], correct: "U", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति उत्तर की ओर 10 किमी चलता है, फिर पूर्व की ओर 5 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?", options: ["उत्तर-पूर्व (North-East)", "उत्तर-पश्चिम (North-West)", "पूर्व (East)", "उत्तर (North)"], correct: "उत्तर-पूर्व (North-East)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि 'CAT' को '24' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?", options: ["26", "25", "27", "28"], correct: "26", category: "Easy" },
      { id: 5, text: "(Blood Relations) P, Q का भाई है। R, P का पिता है। S, R की माता है। T, S का पति है। Q का T से क्या संबंध है?", options: ["पोता/पोती (Grandchild)", "पुत्र (Son)", "भाई (Brother)", "चाचा (Uncle)"], correct: "पोता/पोती (Grandchild)", category: "Easy" },
      { id: 6, text: "(Analogy) घड़ी : समय :: कम्पास : ?", options: ["दिशा (Direction)", "दूरी (Distance)", "तापमान (Temperature)", "गति (Speed)"], correct: "दिशा (Direction)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["गुलाब (Rose)", "चमेली (Jasmine)", "गेंदा (Marigold)", "सेब (Apple)"], correct: "सेब (Apple)", category: "Easy" },
      { id: 8, text: "(Ranking) 30 छात्रों की एक कक्षा में नेहा का स्थान ऊपर से 12वां है। नीचे से उसका स्थान क्या होगा?", options: ["19वां", "18वां", "20वां", "17वां"], correct: "19वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '-' और '-' का अर्थ '×' है, तो 20 - 5 + 10 का मान क्या होगा?", options: ["90", "100", "80", "70"], correct: "90", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'फल', 'सेब' और 'केला' का सही वेन आरेख प्रतिनिधित्व कौन सा है?", options: ["सेब और केला दोनों अलग-अलग फल हैं", "सेब के अंदर केला है", "तीनों पूरी तरह अलग हैं", "केला फल है, सेब अलग है"], correct: "सेब और केला दोनों अलग-अलग फल हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी लड़के खिलाड़ी हैं। कोई खिलाड़ी आलसी नहीं है। निष्कर्ष: I. कोई लड़का आलसी नहीं है। II. कुछ आलसी लोग खिलाड़ी हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: (1, 3, 5) और (2, 4, 6)। 5 के विपरीत फलक का अंक क्या होगा?", options: ["2", "4", "6", "1"], correct: "6", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'EXAM' की दर्पण छवि क्या होगी?", options: ["MAXE (अक्षर पार्श्व उलटे)", "EXAM ही रहेगा", "EXAM का आधा भाग", "MAXE"], correct: "MAXE (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में बाएं छोर से 12वें अक्षर के दाएं 4था अक्षर कौन सा होगा?", options: ["P", "Q", "O", "R"], correct: "P", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक तीर '->' किस उत्तर आकृति में समाहित है?", options: ["आकृति A", "आकृति B", "आकृति C", "आकृति D"], correct: "आकृति A", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि P - Q का अर्थ 'P, Q का भाई है', तो X - Y में X का Y से क्या संबंध है?", options: ["भाई (Brother)", "बहन (Sister)", "पिता (Father)", "चाचा (Uncle)"], correct: "भाई (Brother)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति दक्षिण की ओर 12 मीटर चलता है, फिर पश्चिम की ओर मुड़कर 5 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?", options: ["13 मीटर", "17 मीटर", "15 मीटर", "14 मीटर"], correct: "13 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) यदि आज 1 जनवरी को रविवार है, तो 1 फरवरी को कौन सा दिन होगा? (लीप वर्ष नहीं है)", options: ["बुधवार", "मंगलवार", "गुरुवार", "सोमवार"], correct: "बुधवार", category: "Medium" },
      { id: 19, text: "(Analogy) डॉक्टर : अस्पताल :: रसोइया (Chef) : ?", options: ["रसोई (Kitchen)", "रेस्तरां (Restaurant)", "होटल (Hotel)", "घर (Home)"], correct: "रसोई (Kitchen)", category: "Medium" },
      { id: 20, text: "(Number Series) 4, 9, 19, 39, 79, ?", options: ["159", "155", "160", "150"], correct: "159", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 6 मित्र A, B, C, D, E, F एक पंक्ति में बैठे हैं। E और F मध्य में हैं। A और B छोरों पर बैठे हैं। C, A के ठीक बाएं बैठा है। B के ठीक दाएं कौन बैठा है?", options: ["D", "C", "E", "F"], correct: "D", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"समय पर करों का भुगतान करने वाले नागरिकों को पुरस्कृत किया जाना चाहिए।\" पूर्वधारणाएं: I. पुरस्कार देने से लोग अधिक कर देंगे। II. नागरिक कर चोरी करना बंद कर देंगे।", options: ["Ref: पुरस्कार देने से लोगों को प्रेरणा मिलेगी", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "Ref: पुरस्कार देने से लोगों को प्रेरणा मिलेगी", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सभी पुस्तकें पेन हैं। सभी पेन पेंसिल हैं। निष्कर्ष: I. सभी पुस्तकें पेंसिल हैं। II. कुछ पेंसिल पुस्तकें हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों अनुसरण करते हैं", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 मित्र एक पंक्ति में बैठे हैं। अमित, सुजीत के ठीक दाएं है। रंजीत, सुजीत के ठीक बाएं है। यदि हरीश मध्य में है, तो रंजीत के बाएं कौन बैठा है?", options: ["हरीश", "अमित", "सुजीत", "कोई नहीं"], correct: "हरीश", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) P की आयु क्या है? कथन: I. P, Q से 5 वर्ष छोटा है। II. R, जो 20 वर्ष का है, Q से 2 वर्ष बड़ा है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक वर्ग को 4 भागों में काटकर त्रिकोण बनाए जाएं, तो एक षट्भुज के लिए समान संबंध क्या होगा?", options: ["6 त्रिकोण", "4 त्रिकोण", "8 त्रिकोण", "कोई नहीं"], correct: "6 त्रिकोण", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में आकृतियों के कोनों की संख्या 3, 4, 5 बढ़ रही है।", options: ["5 कोनों वाली आकृति", "6 कोनों वाली आकृति", "4 कोनों वाली आकृति", "3 कोनों वाली आकृति"], correct: "5 कोनों वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को मोड़ा जाता है और किनारों पर छोटे गोल कट लगाए जाते हैं। खोलने पर वह कैसा दिखेगा?", options: ["चारों किनारों पर गोल कट", "केंद्र में एक गोल कट", "केवल कोनों पर कट", "कोई कट नहीं"], correct: "चारों किनारों पर गोल कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: शहर में चोरी और डकैती के मामलों में अचानक भारी वृद्धि हुई है। कार्रवाई: I. पुलिस को रात में गश्त बढ़ा देनी चाहिए। II. लोगों को अपने घरों में ताले मजबूत करने चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक त्रिभुज के अंदर वृत्त", "एक वर्ग के अंदर वृत्त", "एक षट्भुज के अंदर वृत्त", "एक वृत्त के अंदर वृत्त"], correct: "एक वृत्त के अंदर वृत्त", category: "Hard" }
    ]
  },
  {
    id: 9,
    title: "RRB Group D Reasoning Mock Test - 9",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 10, 15, 22, 31, 42, ?", options: ["55", "54", "50", "48"], correct: "55", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: A, D, H, M, S, ?", options: ["Z", "Y", "X", "W"], correct: "Z", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति पूर्व की ओर 10 किमी चलता है, फिर बाएं मुड़कर 10 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?", options: ["उत्तर-पूर्व (North-East)", "दक्षिण-पूर्व (South-East)", "उत्तर (North)", "पूर्व (East)"], correct: "उत्तर-पूर्व (North-East)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि 'BLUE' को 'CNVF' लिखा जाता है, तो 'RED' को क्या लिखा जाएगा?", options: ["SFE", "SFD", "TGE", "SGD"], correct: "SFE", category: "Easy" },
      { id: 5, text: "(Blood Relations) X, Y का भाई है। Y, Z की बहन है। Z, W का पिता है। X का W से क्या संबंध है?", options: ["चाचा (Uncle)", "पिता (Father)", "भाई (Brother)", "दादा (Grandfather)"], correct: "चाचा (Uncle)", category: "Easy" },
      { id: 6, text: "(Analogy) पुस्तक : पढ़ना :: रेडियो : ?", options: ["सुनना (Listen)", "देखना (Watch)", "गाना (Sing)", "लिखना (Write)"], correct: "सुनना (Listen)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["कार (Car)", "बस (Bus)", "मोटर साइकिल (Motorcycle)", "ट्रेन (Train)"], correct: "ट्रेन (Train)", category: "Easy" },
      { id: 8, text: "(Ranking) 40 छात्रों में से, राहुल का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या होगा?", options: ["26वां", "25वां", "27वां", "24वां"], correct: "26वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '×' और '×' का अर्थ '+' है, तो 10 + 4 × 5 का मान क्या होगा?", options: ["45", "40", "35", "30"], correct: "45", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'पुरुष', 'पिता' और 'पुत्र' के बीच सही संबंध दर्शाने वाला वेन आरेख कौन सा है?", options: ["सभी पिता और पुत्र पुरुष हैं, और कुछ पुत्र पिता हो सकते हैं", "तीनों बिल्कुल अलग हैं", "सभी पुरुष पिता हैं", "तीनों एक दूसरे को काटते हैं"], correct: "सभी पिता और पुत्र पुरुष हैं, और कुछ पुत्र पिता हो सकते हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी पेन काले हैं। कुछ काले बैग हैं। निष्कर्ष: I. कुछ पेन बैग हैं। II. कोई पेन बैग नहीं है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल निष्कर्ष II अनुसरण करता है", "या तो I या II अनुसरण करता है", "दोनों निष्कर्ष अनुसरण करते हैं"], correct: "या तो I या II अनुसरण करता है", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: (2, 4, 6) और (2, 1, 3)। 4 के विपरीत फलक का अंक क्या होगा?", options: ["1", "3", "5", "6"], correct: "1", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'TEST' की दर्पण छवि क्या होगी?", options: ["TSET (अक्षर पार्श्व उलटे)", "TEST ही रहेगा", "T3ST", "उलटे अक्षरों वाला TEST"], correct: "TSET (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में दाएं छोर से 15वें अक्षर के बाएं 5वां अक्षर कौन सा होगा?", options: ["G", "H", "I", "F"], correct: "G", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक ज़िगज़ैग 'Z' आकृति किस उत्तर आकृति में समाहित है?", options: ["आकृति A", "आकृति B", "आकृति C", "आकृति D"], correct: "आकृति A", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि A * B का अर्थ 'A, B का भाई है', तो X * Y में X का Y से क्या संबंध है?", options: ["भाई (Brother)", "बहन (Sister)", "माता (Mother)", "पुत्र (Son)"], correct: "भाई (Brother)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति पूर्व की ओर 12 मीटर चलता है, फिर उत्तर की ओर 5 मीटर चलता है। वह प्रारंभिक बिंदु से न्यूनतम कितनी दूरी पर है?", options: ["13 मीटर", "17 मीटर", "15 मीटर", "14 मीटर"], correct: "13 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) 26 जनवरी 1950 को कौन सा दिन था?", options: ["गुरुवार", "शुक्रवार", "शनिवार", "बुधवार"], correct: "गुरुवार", category: "Medium" },
      { id: 19, text: "(Analogy) सिंह : गर्जना :: कुत्ता : ?", options: ["भौंकना (Bark)", "चहकना (Chirp)", "म्याऊं (Meow)", "चिंघाड़ना (Roar)"], correct: "भौंकना (Bark)", category: "Medium" },
      { id: 20, text: "(Number Series) 2, 5, 11, 23, 47, ?", options: ["95", "90", "85", "100"], correct: "95", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 6 मित्र A, B, C, D, E, F एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। B, A और D के बीच है। E, C और F के बीच है। D, F के विपरीत है। B के विपरीत कौन बैठा है?", options: ["E", "C", "A", "D"], correct: "E", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"यदि आप अपनी उत्पादकता बढ़ाना चाहते हैं, तो समय प्रबंधन सीखें।\" पूर्वधारणाएं: I. समय प्रबंधन से उत्पादकता बढ़ती है। II. लोग अपनी उत्पादकता बढ़ाना चाहते हैं।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I and II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "दोनों I and II अंतर्निहित हैं", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: सभी परिश्रमी लोग अमीर होते हैं। राम अमीर है। निष्कर्ष: I. राम परिश्रमी है। II. राम एक अच्छा इंसान है।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "न तो I और न ही II", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 5 छात्र एक पंक्ति में बैठे हैं। सुनील, आलोक के ठीक दाएं बैठा है। प्रणव, आलोक के ठीक बाएं बैठा है। यदि संजय मध्य में बैठा है, तो सुनील के दाएं कौन बैठा है?", options: ["संजय", "हरीश", "आलोक", "कोई नहीं"], correct: "संजय", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) X की माता कौन है? कथन: I. Y, X की बहन है जो Z की पुत्री है। II. Z, W की पत्नी है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक वृत्त को 4 बराबर भागों में काटा जाता है, तो एक वर्ग के लिए समान संबंध क्या होगा?", options: ["4 वर्ग", "2 आयत", "4 आयत/वर्ग", "कोई नहीं"], correct: "4 आयत/वर्ग", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में आकृतियों के अंदर की रेखाएं बढ़ रही हैं।", options: ["3 रेखाओं वाली आकृति", "4 रेखाओं वाली आकृति", "2 रेखाओं वाली आकृति", "1 रेखा वाली आकृति"], correct: "3 रेखाओं वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को दो बार मोड़ा जाता है और कोनों पर छोटे त्रिकोणीय कट लगाए जाते हैं। खोलने पर वह कैसा दिखेगा?", options: ["चारों कोनों पर त्रिकोणीय कट", "केंद्र में एक त्रिकोणीय कट", "चारों तरफ चार त्रिकोणीय कट", "कोई कट नहीं"], correct: "चारों कोनों पर त्रिकोणीय कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: स्थानीय जलाशय में पानी के प्रदूषण का स्तर बहुत अधिक बढ़ गया है। कार्रवाई: I. जलाशय को तुरंत साफ कराया जाना चाहिए। II. लोगों को जलाशय के पानी का उपयोग करने से रोकना चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक त्रिभुज के अंदर वृत्त", "एक वर्ग के अंदर वृत्त", "एक षट्भुज के अंदर वृत्त", "एक वृत्त के अंदर वृत्त"], correct: "एक वृत्त के अंदर वृत्त", category: "Hard" }
    ]
  },
  {
    id: 10,
    title: "RRB Group D Reasoning Mock Test - 10",
    description: "30 Questions | 40 Minutes | Bilingual Hindi/English Reasoning Practice",
    questions: [
      { id: 1, text: "(Number Series) श्रृंखला को पूरा करें: 1, 3, 6, 10, 15, ?", options: ["21", "20", "22", "25"], correct: "21", category: "Easy" },
      { id: 2, text: "(Alphabet Series) श्रृंखला को पूरा करें: A, B, D, G, K, ?", options: ["P", "O", "N", "Q"], correct: "P", category: "Easy" },
      { id: 3, text: "(Direction Sense) एक व्यक्ति दक्षिण की ओर 10 किमी चलता है, फिर दाएं मुड़कर 6 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?", options: ["दक्षिण-पश्चिम (South-West)", "दक्षिण-पूर्व (South-East)", "पश्चिम (West)", "दक्षिण (South)"], correct: "दक्षिण-पश्चिम (South-West)", category: "Easy" },
      { id: 4, text: "(Coding-Decoding) यदि किसी कूट भाषा में 'PEN' को 'QFO' लिखा जाता है, तो 'BAG' को क्या लिखा जाएगा?", options: ["CBH", "CBI", "CAH", "CBG"], correct: "CBH", category: "Easy" },
      { id: 5, text: "(Blood Relations) A, B का भाई है। C, B की बहन है। D, C की माता है। A का D से क्या संबंध है?", options: ["पुत्र (Son)", "भाई (Brother)", "चाचा (Uncle)", "पिता (Father)"], correct: "पुत्र (Son)", category: "Easy" },
      { id: 6, text: "(Analogy) पक्षी : उड़ना :: मछली : ?", options: ["तैरना (Swim)", "दौड़ना (Run)", "रेंगना (Crawl)", "कूदना (Jump)"], correct: "तैरना (Swim)", category: "Easy" },
      { id: 7, text: "(Classification) विषम शब्द चुनिए:", options: ["क्रिकेट (Cricket)", "फुटबॉल (Football)", "हॉकी (Hockey)", "शतरंज (Chess)"], correct: "शतरंज (Chess)", category: "Easy" },
      { id: 8, text: "(Ranking) 30 छात्रों में से, अमित का स्थान नीचे से 12वां है। ऊपर से उसका स्थान क्या होगा?", options: ["19वां", "18वां", "20वां", "17वां"], correct: "19वां", category: "Easy" },
      { id: 9, text: "(Mathematical Operations) यदि '+' का अर्थ '÷' और '÷' का अर्थ '+' है, तो 20 + 5 ÷ 4 का मान क्या होगा?", options: ["8", "10", "6", "12"], correct: "8", category: "Easy" },
      { id: 10, text: "(Venn Diagram) 'वाहन', 'कार' और 'साइकिल' के बीच सही संबंध दर्शाने वाला वेन आरेख कौन सा है?", options: ["कार और साइकिल दोनों अलग-अलग वाहन हैं", "कार के अंदर साइकिल है", "तीनों पूरी तरह अलग हैं", "साइकिल वाहन है, कार अलग है"], correct: "कार और साइकिल दोनों अलग-अलग वाहन हैं", category: "Easy" },
      { id: 11, text: "(Syllogism) कथन: सभी चाबियां ताले हैं। सभी ताले पेंच हैं। निष्कर्ष: I. सभी चाबियां पेंच हैं। II. कुछ पेंच चाबियां हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों अनुसरण करते हैं", category: "Medium" },
      { id: 12, text: "(Cubes & Dice) पासे की दो स्थितियाँ: पासा 1 (6, 2, 3), पासा 2 (6, 5, 4)। 2 के विपरीत फलक का अंक क्या होगा?", options: ["5", "4", "1", "3"], correct: "5", category: "Medium" },
      { id: 13, text: "(Mirror Image) शब्द 'HAPPY' की दर्पण छवि क्या होगी?", options: ["YPPAH (अक्षर पार्श्व उलटे)", "HAPPY ही रहेगा", "YPP4H", "उलटे अक्षरों वाला HAPPY"], correct: "YPPAH (अक्षर पार्श्व उलटे)", category: "Medium" },
      { id: 14, text: "(Alphabet Test) अंग्रेज़ी वर्णमाला में बाएं छोर से 20वें अक्षर के बाएं 6ठा अक्षर कौन सा होगा?", options: ["N", "M", "O", "P"], correct: "N", category: "Medium" },
      { id: 15, text: "(Embedded Images) एक कोण 'L' आकार किस उत्तर आकृति में समाहित है?", options: ["आकृति D", "आकृति A", "आकृति B", "आकृति C"], correct: "आकृति D", category: "Medium" },
      { id: 16, text: "(Blood Relations - Coded) यदि P + Q का अर्थ 'P, Q का पुत्र है', तो X + Y में X का Y से क्या संबंध है?", options: ["पुत्र (Son)", "पिता (Father)", "भाई (Brother)", "चाचा (Uncle)"], correct: "पुत्र (Son)", category: "Medium" },
      { id: 17, text: "(Direction Sense) एक व्यक्ति पश्चिम की ओर 15 मीटर चलता है, फिर बाएं मुड़कर 20 मीटर चलता है। वह प्रारंभिक बिंदु से न्यूनतम कितनी दूरी पर है?", options: ["25 मीटर", "35 मीटर", "15 मीटर", "30 मीटर"], correct: "25 मीटर", category: "Medium" },
      { id: 18, text: "(Clock & Calendar) यदि आज 15 अगस्त को सोमवार है, तो उसी वर्ष 15 सितंबर को कौन सा दिन होगा?", options: ["गुरुवार", "बुधवार", "शुक्रवार", "मंगलवार"], correct: "गुरुवार", category: "Medium" },
      { id: 19, text: "(Analogy) जापान : येन :: चीन : ?", options: ["युआन (Yuan)", "डॉलर (Dollar)", "रुपया (Rupee)", "टका (Taka)"], correct: "युआन (Yuan)", category: "Medium" },
      { id: 20, text: "(Number Series) 1, 4, 9, 16, 25, ?", options: ["36", "35", "40", "49"], correct: "36", category: "Medium" },
      { id: 21, text: "(Seating Arrangement) 5 छात्र एक गोल मेज के चारों ओर बैठे हैं। A, B और C के बीच में बैठा है। D, B के ठीक बाएं बैठा है। E, C के ठीक दाएं बैठा है। B के विपरीत कौन बैठा है?", options: ["E", "C", "A", "D"], correct: "E", category: "Hard" },
      { id: 22, text: "(Statements & Assumptions) कथन: \"फास्ट फूड स्वास्थ्य के लिए हानिकारक है, इसलिए बच्चों को इससे दूर रखें।\" पूर्वधारणाएं: I. फास्ट फूड बच्चों को बहुत आकर्षित करता है। II. Fast Food से स्वास्थ्य समस्याएं हो सकती हैं।", options: ["केवल पूर्वधारणा I अंतर्निहित है", "केवल II अंतर्निहित है", "दोनों I और II अंतर्निहित हैं", "न तो I और न ही II अंतर्निहित है"], correct: "केवल II अंतर्निहित है", category: "Hard" },
      { id: 23, text: "(Statements & Conclusions) कथन: कुछ बुद्धिमान लोग वैज्ञानिक होते हैं। सभी वैज्ञानिक परिश्रमी होते हैं। निष्कर्ष: I. कुछ बुद्धिमान लोग परिश्रमी होते हैं। II. सभी परिश्रमी लोग वैज्ञानिक होते हैं।", options: ["केवल निष्कर्ष I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "न तो I और न ही II"], correct: "केवल निष्कर्ष I अनुसरण करता है", category: "Hard" },
      { id: 24, text: "(Seating Arrangement - Linear) 6 मित्र A, B, C, D, E, F एक पंक्ति में बैठे हैं। B, C और D के बीच है। E, A और F के बीच है। D, F के ठीक बाएं बैठा है। मध्य में कौन बैठे हैं?", options: ["D और F", "C और B", "A और E", "B और E"], correct: "D और F", category: "Hard" },
      { id: 25, text: "(Data Sufficiency) X की माता कौन है? कथन: I. Y, X की बहन है जो Z की पुत्री है। II. Z, W की पत्नी है।", options: ["केवल कथन I पर्याप्त है", "केवल II पर्याप्त है", "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", "दोनों मिलकर भी पर्याप्त नहीं हैं"], correct: "दोनों कथन I and II मिलकर उत्तर देने के लिए आवश्यक हैं", category: "Hard" },
      { id: 26, text: "(Analogy - Non-Verbal) यदि एक खाली वर्ग को रंगीन कर दिया जाता है, तो एक खाली वृत्त के लिए समान संबंध क्या होगा?", options: ["एक रंगीन वृत्त", "एक बड़ा वृत्त", "एक छोटा वृत्त", "एक वर्ग"], correct: "एक रंगीन वृत्त", category: "Hard" },
      { id: 27, text: "(Figure Matrix) लुप्त पैटर्न ज्ञात कीजिए जहाँ हर पंक्ति में रेखाओं की मोटाई बढ़ रही है।", options: ["सबसे मोटी रेखा वाली आकृति", "पतली रेखा वाली आकृति", "कोई बदलाव नहीं", "कोई नहीं"], correct: "सबसे मोटी रेखा वाली आकृति", category: "Hard" },
      { id: 28, text: "(Paper Cutting & Folding) एक कागज़ को चार बार मोड़ा जाता है और एक छोटा त्रिकोणीय कट लगाया जाता है। खोलने पर वह कैसा दिखेगा?", options: ["चार कोनों पर त्रिकोणीय कट", "केंद्र में एक त्रिकोणीय कट", "चारों तरफ चार त्रिकोणीय कट", "कोई कट नहीं"], correct: "चारों तरफ चार त्रिकोणीय कट", category: "Hard" },
      { id: 29, text: "(Statement & Course of Action) कथन: शहर में पीने के पानी की भारी किल्लत हो गई है। कार्रवाई: I. सरकार को पानी के टैंकरों की व्यवस्था तुरंत करनी चाहिए। II. लोगों को पानी का कम से कम उपयोग करने के लिए जागरूक किया जाना चाहिए।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "न तो I और न ही II"], correct: "दोनों I और II अनुसरण करते हैं", category: "Hard" },
      { id: 30, text: "(Classification - Non-Verbal) विषम आकृति चुनिए:", options: ["एक वर्ग के अंदर वृत्त", "एक वृत्त के अंदर वर्ग", "एक त्रिभुज के अंदर वृत्त", "एक वृत्त के अंदर त्रिभुज"], correct: "एक वृत्त के अंदर त्रिभुज", category: "Hard" }
    ]
  }
];

export default function RrbGroupDReasoningTestSeries() {
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
  const [currentQNo, setCurrentQNo] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes in seconds
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
    setTimeLeft(2400); // 40 mins
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
              Reasoning Mock Test Series (तर्कशक्ति मॉक टेस्ट)
            </h1>
          </div>
        </div>

        <div className="bg-[#080d1a] border border-sky-500/10 rounded-3xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> Complete Exam Level Practice Simulator
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              यह मॉक टेस्ट सीरीज नवीनतम RRB Group D परीक्षा पैटर्न के आधार पर तैयार की गई है। हर टेस्ट में **10 आसान (Easy)**, **10 मध्यम (Medium)**, और **10 कठिन (Hard)** स्तर के प्रश्न शामिल हैं ताकि आपकी तार्किक क्षमता बिल्कुल सॉलिड हो सके!
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
              <div className="text-2xl font-bold text-sky-400">40 Mins</div>
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
