"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Import all Detailed Study Notes components
import GeneralScienceNotes from '@/components/GeneralScienceNotes';
import HistoryNotes from '@/components/HistoryNotes';
import ConstitutionNotes from '@/components/ConstitutionNotes';
import EconomyCultureNotes from '@/components/EconomyCultureNotes';
import AgricultureTradeNotes from '@/components/AgricultureTradeNotes';
import DemographyEnvironmentNotes from '@/components/DemographyEnvironmentNotes';
import GeographyResourcesNotes from '@/components/GeographyResourcesNotes';
import UPCultureRevenueNotes from '@/components/UPCultureRevenueNotes';
import HumanRightsSecurityNotes from '@/components/HumanRightsSecurityNotes';
import CurrentAffairsOrganizationsNotes from '@/components/CurrentAffairsOrganizationsNotes';
import EconomyMiscNotes from '@/components/EconomyMiscNotes';
import StaticGKPrizesNotes from '@/components/StaticGKPrizesNotes';
import HindiLanguageGrammarAlphabetNotes from '@/components/HindiLanguageGrammarAlphabetNotes';
import HindiVocabularyNotes from '@/components/HindiVocabularyNotes';
import HindiVyakaranNotes from '@/components/HindiVyakaranNotes';
import HindiSandhiSamasPunctuationNotes from '@/components/HindiSandhiSamasPunctuationNotes';
import HindiLiteraturePoeticsNotes from '@/components/HindiLiteraturePoeticsNotes';
import NumericalAbilityNotes from '@/components/NumericalAbilityNotes';
import ReasoningNotes from '@/components/ReasoningNotes';
import BasicLawNotes from '@/components/BasicLawNotes';

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
    title: "1. सामान्य हिन्दी (General Hindi)",
    topics: [
      "हिन्दी और अन्य भारतीय भाषायें", "हिन्दी व्याकरण का मौलिक ज्ञान", "हिन्दी वर्णमाला", 
      "तद्भव-तत्सम", "पर्यायवाची", "विलोम", "अनेकार्थक", "वाक्यांशों के स्थान पर एक शब्द", 
      "समरूपी भिन्नार्थक शब्द", "अशुद्ध वाक्यों को शुद्ध करना", "लिंग", "वचन", "कारक", 
      "सर्वनाम", "विशेषण", "क्रिया", "काल", "वाच्य", "अव्यय", "उपसर्ग", "प्रत्यय", 
      "सन्धि", "समास", "विराम-चिन्ह", "मुहावरे एवं लोकोक्तियां", "रस", "छन्द", "अलंकार", 
      "अपठित बोध", "प्रसिद्ध कवि", "लेखक एवं उनकी प्रसिद्ध रचनायें", "हिन्दी भाषा में पुरस्कार", "विविध"
    ]
  },
  {
    title: "2. मूलविधि संविधान / सामान्य ज्ञान (Basic Law, Constitution & GK)",
    subSections: [
      {
        subtitle: "मूलविधि (Basic Law)",
        topics: [
          "भारतीय न्याय संहिता (BNS) एवं भारतीय नागरिक सुरक्षा संहिता (BNSS)", "महिलाओं", "बच्चों", 
          "अनुसूचित जाति के सदस्यों आदि को संरक्षण देने सम्बन्धी विधिक प्राविधान", "यातायात नियमों", 
          "पर्यावरण संरक्षण", "वन्य जीव संरक्षण", "मानवाधिकार संरक्षण", "सूचना का अधिकार अधिनियम", 
          "आयकर अधिनियम", "भ्रष्टाचार निवारण अधिनियम", "राष्ट्रीय सुरक्षा अधिनियम", "आईटी अधिनियम", 
          "साइबर अपराध", "जनहित याचिका", "महत्वपूर्ण न्यायिक निर्णय", "भूमि सुधार", "भूमि अधिग्रहण", 
          "भू-राजस्व संबंधी कानूनों का सामान्य ज्ञान"
        ]
      },
      {
        subtitle: "संविधान (Constitution)",
        topics: [
          "संविधान का उद्देश्य", "मौलिक अधिकार", "नीति निदेशक तत्व एवं मूल कर्तव्य", "संसदीय व्यवस्था", 
          "केन्द्रीय एवं प्रदेशीय सरकारों का गठन एवं उनके अधिकार", "कानून बनाने का अधिकार", "स्थानीय शासन", 
          "केन्द्र और राज्यों के बीच सम्बन्ध", "निर्वाचन तथा अन्य महत्वपूर्ण जानकारी में संवैधानिक अनुसूचियां", 
          "अखिल भारतीय सेवायें एवं उनकी चयन पद्धति आदि के विषय में सामान्य जानकारी"
        ]
      },
      {
        subtitle: "सामान्य ज्ञान (General Knowledge)",
        topics: [
          "सामान्य विज्ञान", "स्वास्थ्य एवं स्वास्थ्य विज्ञान", "भारत का इतिहास", "भारत का स्वतंत्रता संग्राम", 
          "भारतीय अर्थव्यवस्था एवं संस्कृति", "भारतीय कृषि", "वाणिज्य एवं व्यापार", "जनसंख्या", 
          "पर्यावरण एवं नगरीकरण", "एफ०डी०आई० (फारेन डायरेक्ट इन्वेस्टमेन्ट)", 
          "विश्व भूगोल तथा भारत का भूगोल और प्राकृतिक संसाधन", "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय", 
          "उ०प्र० की शिक्षा संस्कृति और सामाजिक प्रथाओं के सम्बन्ध में विशिष्ट जानकारी", 
          "उ0प्र0 में राजस्व, पुलिस व सामान्य प्रशासनिक व्यवस्था", "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध", 
          "कम्प्यूटर कौशल की आधारभूत जानकारी", "सूचना एवं संचार प्रौद्योगिकी का मौलिक /आधारभूत ज्ञान", 
          "सोशल मीडिया कम्युनिकेशन"
        ]
      }
    ]
  },
  {
    title: "3. संख्यात्मक एवं मानसिक योग्यता परीक्षा (Numerical & Mental Ability)",
    subSections: [
      {
        subtitle: "संख्यात्मक योग्यता (Numerical Ability)",
        topics: [
          "Number System - संख्या पद्धति", "Simplification - सरलीकरण", "Decimals and Fraction - दशमलव और भिन्न", 
          "HCF and LCM - महत्तम समापवर्तक और लघुत्तम समापवर्तक", "Ratio and Proportion - अनुपात और समानुपात", 
          "Percentage - प्रतिशतता", "Profit and Loss - लाभ और हानि", "Discount - छूट", 
          "Simple interest - साधारण ब्याज", "Compound interest - चक्रवृद्धि ब्याज", "Partnership - भागीदारी", 
          "Average - औसत", "Time and Work - समय और कार्य", "Time and Distance - समय और दूरी", 
          "Use of Tables and Graphs - सारणी और ग्राफ का प्रयोग", "Mensuration - मेन्सुरेशन", 
          "Arithmetical computations and other analytical functions", "Miscellaneous - विविध"
        ]
      },
      {
        subtitle: "मानसिक योग्यता (Mental Ability)",
        topics: [
          "Logical Diagrams - तार्किक आरेख", "Symbol-Relationship Interpretation - संकेत सम्बन्ध विश्लेषण", 
          "Perception Test - प्रत्यक्ष ज्ञान बोध", "Word formation Test - शब्द रचना परीक्षण", 
          "Letter and number series - अक्षर और संख्या श्रृंखला", 
          "Word and alphabet Analogy - शब्द और वर्णमाला में आंशिक समरूपता", 
          "Common Sense Test - व्यावहारिक ज्ञान परीक्षण", "Direction Sense Test - दिशा ज्ञान परीक्षण", 
          "Logical interpretation of data - आंकड़ों का तार्किक विश्लेषण", "Forcefulness of argument - प्रभावी तर्क", 
          "Determining implied meanings - अंतर्निहित भावों का विनिश्चय करना"
        ]
      }
    ]
  },
  {
    title: "4. मानसिक अभिरुचि / बुद्धिलब्धि / तार्किक परीक्षा (Mental Aptitude, I.Q. & Reasoning)",
    topics: [
      "Relationship and Analogy Test - सम्बन्ध व आंशिक समानता परीक्षण", "Spotting out the dissimilar - असमान को चिन्हित करना", 
      "Series Completion Test - श्रृंखला पूरी करने का परीक्षण", "Coding and Decoding Test - संकेत लिपि और सांकेतिक लिपि को समझना", 
      "Direction Sense Test - दिशा ज्ञान परीक्षण", "Blood Relation - रक्त सम्बन्ध", 
      "Problem based on alphabet - वर्णमाला पर आधारित प्रश्न", "Time sequence Test - समय क्रम परीक्षण", 
      "Venn Diagram and chart type test - वेन आरेख और चार्ट सदृश परीक्षण", "Mathematical ability Test - गणितीय योग्यता परीक्षण", 
      "Arranging in order - क्रम में व्यवस्थित करना", "Analogies - समरूपता", "Similarities - समानता", 
      "Differences - भिन्नता", "Space visualization - खाली स्थान भरना", "Problem solving - समस्या को सुलझाना", 
      "Analysis judgement - विश्लेषण निर्णय", "Decision making - निर्णायक क्षमता", "Visual memory - दृश्य स्मृति", 
      "Discrimination - विभेदन क्षमता", "Observation - पर्यवेक्षण", "Relationship - सम्बन्ध", "Concepts - अवधारणा", 
      "Arithmetical reasoning - अंकगणितीय तर्क", "Verbal and figure classification - शब्द और आकृति वर्गीकरण", 
      "Arithmetical number series - अंकगणितीय संख्या श्रृंखला", 
      "Abilities to deal with abstract ideas and symbols and their relationships - अमूर्त विचारों व प्रतीकों तथा उनके सम्बन्धों से सामंजस्य की क्षमता"
    ]
  }
];

export default function UPPoliceSIPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  // List of all GK, Hindi, Basic Law, Maths and Reasoning topics that have detailed study notes
  const topicsWithNotes = [
    // --- General Hindi ---
    "हिन्दी और अन्य भारतीय भाषायें", "हिन्दी व्याकरण का मौलिक ज्ञान", "हिन्दी वर्णमाला", 
    "तद्भव-तत्सम", "पर्यायवाची", "विलोम", "अनेकार्थक", "वाक्यांशों के स्थान पर एक शब्द", 
    "समरूपी भिन्नार्थक शब्द", "अशुद्ध वाक्यों को शुद्ध करना", "लिंग", "वचन", "कारक", 
    "सर्वनाम", "विशेषण", "क्रिया", "काल", "वाच्य", "अव्यय", "उपसर्ग", "प्रत्यय", 
    "सन्धि", "समास", "विराम-चिन्ह", "मुहावरे एवं लोकोक्तियां", "रस", "छन्द", "अलंकार", 
    "अपठित बोध", "प्रसिद्ध कवि", "लेखक एवं उनकी प्रसिद्ध रचनायें", "हिन्दी भाषा में पुरस्कार", "विविध",

    // --- Basic Law ---
    "भारतीय न्याय संहिता (BNS) एवं भारतीय नागरिक सुरक्षा संहिता (BNSS)", "महिलाओं", "बच्चों", 
    "अनुसूचित जाति के सदस्यों आदि को संरक्षण देने सम्बन्धी विधिक प्राविधान", "यातायात नियमों", 
    "पर्यावरण संरक्षण", "वन्य जीव संरक्षण", "मानवाधिकार संरक्षण", "सूचना का अधिकार अधिनियम", 
    "आयकर अधिनियम", "भ्रष्टाचार निवारण अधिनियम", "राष्ट्रीय सुरक्षा अधिनियम", "आईटी अधिनियम", 
    "साइबर अपराध", "जनहित याचिका", "महत्वपूर्ण न्यायिक निर्णय", "भूमि सुधार", "भूमि अधिग्रहण", 
    "भू-राजस्व संबंधी कानूनों का सामान्य ज्ञान",

    // --- Constitution ---
    "संविधान का उद्देश्य", "मौलिक अधिकार", "नीति निदेशक तत्व एवं मूल कर्तव्य", "संसदीय व्यवस्था", 
    "केन्द्रीय एवं प्रदेशीय सरकारों का गठन एवं उनके अधिकार", "कानून बनाने का अधिकार", "स्थानीय शासन", 
    "केन्द्र और राज्यों के बीच सम्बन्ध", "निर्वाचन तथा अन्य महत्वपूर्ण जानकारी में संवैधानिक अनुसूचियां", 
    "अखिल भारतीय सेवायें एवं उनकी चयन पद्धति आदि के विषय में सामान्य जानकारी",

    // --- General Knowledge ---
    "सामान्य विज्ञान", "स्वास्थ्य एवं स्वास्थ्य विज्ञान", "भारत का इतिहास", "भारत का स्वतंत्रता संग्राम", 
    "भारतीय अर्थव्यवस्था एवं संस्कृति", "भारतीय कृषि", "वाणिज्य एवं व्यापार", "जनसंख्या", 
    "पर्यावरण एवं नगरीकरण", "एफ०डी०आई० (फारेन डायरेक्ट इन्वेस्टमेन्ट)", 
    "विश्व भूगोल तथा भारत का भूगोल और प्राकृतिक संसाधन", "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय", 
    "उ०प्र० की शिक्षा संस्कृति और सामाजिक प्रथाओं के सम्बन्ध में विशिष्ट जानकारी", 
    "उ0प्र0 में राजस्व, पुलिस व सामान्य प्रशासनिक व्यवस्था", "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध", 
    "कम्प्यूटर कौशल की आधारभूत जानकारी", "सूचना एवं संचार प्रौद्योगिकी का मौलिक /आधारभूत ज्ञान", 
    "सोशल मीडिया कम्युनिकेशन",

    // --- Numerical Ability ---
    "Number System - संख्या पद्धति", "Simplification - सरलीकरण", "Decimals and Fraction - दशमलव और भिन्न", 
    "HCF and LCM - महत्तम समापवर्तक और लघुत्तम समापवर्तक", "Ratio and Proportion - अनुपात और समानुपात", 
    "Percentage - प्रतिशतता", "Profit and Loss - लाभ और हानि", "Discount - छूट", 
    "Simple interest - साधारण ब्याज", "Compound interest - चक्रवृद्धि ब्याज", "Partnership - भागीदारी", 
    "Average - औसत", "Time and Work - समय और कार्य", "Time and Distance - समय और दूरी", 
    "Use of Tables and Graphs - सारणी और ग्राफ का प्रयोग", "Mensuration - मेन्सुरेशन", 
    "Arithmetical computations and other analytical functions", "Miscellaneous - विविध",

    // --- Mental Ability ---
    "Logical Diagrams - तार्किक आरेख", "Symbol-Relationship Interpretation - संकेत सम्बन्ध विश्लेषण", 
    "Perception Test - प्रत्यक्ष ज्ञान बोध", "Word formation Test - शब्द रचना परीक्षण", 
    "Letter and number series - अक्षर और संख्या श्रृंखला", 
    "Word and alphabet Analogy - शब्द और वर्णमाला में आंशिक समरूपता", 
    "Common Sense Test - व्यावहारिक ज्ञान परीक्षण", "Direction Sense Test - दिशा ज्ञान परीक्षण", 
    "Logical interpretation of data - आंकड़ों का तार्किक विश्लेषण", "Forcefulness of argument - प्रभावी तर्क", 
    "Determining implied meanings - अंतर्निहित भावों का विनिश्चय करना",

    // --- Mental Aptitude, I.Q. & Reasoning ---
    "Relationship and Analogy Test - सम्बन्ध व आंशिक समानता परीक्षण", "Spotting out the dissimilar - असमान को चिन्हित करना", 
    "Series Completion Test - श्रृंखला पूरी करने का परीक्षण", "Coding and Decoding Test - संकेत लिपि और सांकेतिक लिपि को समझना", 
    "Direction Sense Test - दिशा ज्ञान परीक्षण", "Blood Relation - रक्त सम्बन्ध", 
    "Problem based on alphabet - वर्णमाला पर आधारित प्रश्न", "Time sequence Test - समय क्रम परीक्षण", 
    "Venn Diagram and chart type test - वेन आरेख और चार्ट सदृश परीक्षण", "Mathematical ability Test - गणितीय योग्यता परीक्षण", 
    "Arranging in order - क्रम में व्यवस्थित करना", "Analogies - समरूपता", "Similarities - समानता", 
    "Differences - भिन्नता", "Space visualization - खाली स्थान भरना", "Problem solving - समस्या को सुलझाना", 
    "Analysis judgement - विश्लेषण निर्णय", "Decision making - निर्णायक क्षमता", "Visual memory - दृश्य स्मृति", 
    "Discrimination - विभेदन क्षमता", "Observation - पर्यवेक्षण", "Relationship - सम्बन्ध", "Concepts - अवधारणा", 
    "Arithmetical reasoning - अंकगणितीय तर्क", "Verbal and figure classification - शब्द और आकृति वर्गीकरण", 
    "Arithmetical number series - अंकगणितीय संख्या श्रृंखला", 
    "Abilities to deal with abstract ideas and symbols and their relationships - अमूर्त विचारों व प्रतीकों तथा उनके सम्बन्धों से सामंजस्य की क्षमता"
  ];

  const renderNotes = (topic: string) => {
    switch (topic) {
      // --- Basic Law Notes ---
      case "भारतीय न्याय संहिता (BNS) एवं भारतीय नागरिक सुरक्षा संहिता (BNSS)":
      case "महिलाओं":
      case "बच्चों":
      case "अनुसूचित जाति के सदस्यों आदि को संरक्षण देने सम्बन्धी विधिक प्राविधान":
      case "यातायात नियमों":
      case "पर्यावरण संरक्षण":
      case "वन्य जीव संरक्षण":
      case "मानवाधिकार संरक्षण":
      case "सूचना का अधिकार अधिनियम":
      case "आयकर अधिनियम":
      case "भ्रष्टाचार निवारण अधिनियम":
      case "राष्ट्रीय सुरक्षा अधिनियम":
      case "आईटी अधिनियम":
      case "साइबर अपराध":
      case "जनहित याचिका":
      case "महत्वपूर्ण न्यायिक निर्णय":
      case "भूमि सुधार":
      case "भूमि अधिग्रहण":
      case "भू-राजस्व संबंधी कानूनों का सामान्य ज्ञान":
        return <BasicLawNotes />;

      // --- Constitution Notes ---
      case "संविधान का उद्देश्य":
      case "मौलिक अधिकार":
      case "नीति निदेशक तत्व एवं मूल कर्तव्य":
      case "संसदीय व्यवस्था":
      case "केन्द्रीय एवं प्रदेशीय सरकारों का गठन एवं उनके अधिकार":
      case "कानून बनाने का अधिकार":
      case "स्थानीय शासन":
      case "केन्द्र और राज्यों के बीच सम्बन्ध":
      case "निर्वाचन तथा अन्य महत्वपूर्ण जानकारी में संवैधानिक अनुसूचियां":
      case "अखिल भारतीय सेवायें एवं उनकी चयन पद्धति आदि के विषय में सामान्य जानकारी":
        return <ConstitutionNotes />;

      // --- General Knowledge Notes ---
      case "सामान्य विज्ञान":
      case "स्वास्थ्य एवं स्वास्थ्य विज्ञान":
        return <GeneralScienceNotes />;
      case "भारत का इतिहास":
      case "भारत का स्वतंत्रता संग्राम":
        return <HistoryNotes />;
      case "भारतीय अर्थव्यवस्था एवं संस्कृति":
      case "एफ०डी०आई० (फारेन डायरेक्ट इन्वेस्टमेन्ट)":
        return <EconomyCultureNotes />;
      case "भारतीय कृषि":
      case "वाणिज्य एवं व्यापार":
        return <AgricultureTradeNotes />;
      case "जनसंख्या":
      case "पर्यावरण एवं नगरीकरण":
        return <DemographyEnvironmentNotes />;
      case "विश्व भूगोल तथा भारत का भूगोल और प्राकृतिक संसाधन":
        return <GeographyResourcesNotes />;
      case "राष्ट्रीय तथा अन्तर्राष्ट्रीय महत्व के समसामयिक विषय":
        return <CurrentAffairsOrganizationsNotes />;
      case "उ०प्र० की शिक्षा संस्कृति और सामाजिक प्रथाओं के सम्बन्ध में विशिष्ट जानकारी":
      case "उ0प्र0 में राजस्व, पुलिस व सामान्य प्रशासनिक व्यवस्था":
        return <UPCultureRevenueNotes />;
      case "भारत और उसके पड़ोसी देशों के बीच सम्बन्ध":
        return <HumanRightsSecurityNotes />;
      case "कम्प्यूटर कौशल की आधारभूत जानकारी":
      case "सूचना एवं संचार प्रौद्योगिकी का मौलिक /आधारभूत ज्ञान":
      case "सोशल मीडिया कम्युनिकेशन":
        return <StaticGKPrizesNotes />;

      // --- General Hindi Notes ---
      case "हिन्दी और अन्य भारतीय भाषायें":
      case "हिन्दी व्याकरण का मौलिक ज्ञान":
      case "हिन्दी वर्णमाला":
        return <HindiLanguageGrammarAlphabetNotes />;
      case "तद्भव-तत्सम":
      case "पर्यायवाची":
      case "विलोम":
      case "अनेकार्थक":
      case "वाक्यांशों के स्थान पर एक शब्द":
      case "समरूपी भिन्नार्थक शब्द":
      case "विविध":
        return <HindiVocabularyNotes />;
      case "अशुद्ध वाक्यों को शुद्ध करना":
      case "लिंग":
      case "वचन":
      case "कारक":
      case "सर्वनाम":
      case "विशेषण":
      case "क्रिया":
      case "काल":
      case "वाच्य":
      case "अव्यय":
      case "उपसर्ग":
      case "प्रत्यय":
        return <HindiVyakaranNotes />;
      case "सन्धि":
      case "समास":
      case "विराम-चिन्ह":
      case "अपठित बोध":
        return <HindiSandhiSamasPunctuationNotes />;
      case "मुहावरे एवं लोकोक्तियां":
      case "रस":
      case "छन्द":
      case "अलंकार":
      case "प्रसिद्ध कवि":
      case "लेखक एवं उनकी प्रसिद्ध रचनायें":
      case "हिन्दी भाषा में पुरस्कार":
        return <HindiLiteraturePoeticsNotes />;

      // --- Numerical Ability & Mental Ability ---
      case "Number System - संख्या पद्धति":
      case "Simplification - सरलीकरण":
      case "Decimals and Fraction - दशमलव और भिन्न":
      case "HCF and LCM - महत्तम समापवर्तक और लघुत्तम समापवर्तक":
      case "Ratio and Proportion - अनुपात और समानुपात":
      case "Percentage - प्रतिशतता":
      case "Profit and Loss - लाभ और हानि":
      case "Discount - छूट":
      case "Simple interest - साधारण ब्याज":
      case "Compound interest - चक्रवृद्धि ब्याज":
      case "Partnership - भागीदारी":
      case "Average - औसत":
      case "Time and Work - समय और कार्य":
      case "Time and Distance - समय और दूरी":
      case "Use of Tables and Graphs - सारणी और ग्राफ का प्रयोग":
      case "Mensuration - मेन्सुरेशन":
      case "Arithmetical computations and other analytical functions":
      case "Miscellaneous - विविध":
      case "Logical Diagrams - तार्किक आरेख":
      case "Symbol-Relationship Interpretation - संकेत सम्बन्ध विश्लेषण":
      case "Perception Test - प्रत्यक्ष ज्ञान बोध":
      case "Word formation Test - शब्द रचना परीक्षण":
      case "Letter and number series - अक्षर और संख्या श्रृंखला":
      case "Word and alphabet Analogy - शब्द और वर्णमाला में आंशिक समरूपता":
      case "Common Sense Test - व्यावहारिक ज्ञान परीक्षण":
      case "Direction Sense Test - दिशा ज्ञान परीक्षण":
      case "Logical interpretation of data - आंकड़ों का तार्किक विश्लेषण":
      case "Forcefulness of argument - प्रभावी तर्क":
      case "Determining implied meanings - अंतर्निहित भावों का विनिश्चय करना":
        return <NumericalAbilityNotes />;

      // --- Mental Aptitude, I.Q. and Reasoning ---
      case "Relationship and Analogy Test - सम्बन्ध व आंशिक समानता परीक्षण":
      case "Spotting out the dissimilar - असमान को चिन्हित करना":
      case "Series Completion Test - श्रृंखला पूरी करने का परीक्षण":
      case "Coding and Decoding Test - संकेत लिपि और सांकेतिक लिपि को समझना":
      case "Direction Sense Test - दिशा ज्ञान परीक्षण":
      case "Blood Relation - रक्त सम्बन्ध":
      case "Problem based on alphabet - वर्णमाला पर आधारित प्रश्न":
      case "Time sequence Test - समय क्रम परीक्षण":
      case "Venn Diagram and chart type test - वेन आरेख और चार्ट सदृश परीक्षण":
      case "Mathematical ability Test - गणितीय योग्यता परीक्षण":
      case "Arranging in order - क्रम में व्यवस्थित करना":
      case "Analogies - समरूपता":
      case "Similarities - समानता":
      case "Differences - भिन्नता":
      case "Space visualization - खाली स्थान भरना":
      case "Problem solving - समस्या को सुलझाना":
      case "Analysis judgement - विश्लेषण निर्णय":
      case "Decision making - निर्णायक क्षमता":
      case "Visual memory - दृश्य स्मृति":
      case "Discrimination - विभेदन क्षमता":
      case "Observation - पर्यवेक्षण":
      case "Relationship - सम्बन्ध":
      case "Concepts - अवधारणा":
      case "Arithmetical reasoning - अंकगणितीय तर्क":
      case "Verbal and figure classification - शब्द और आकृति वर्गीकरण":
      case "Arithmetical number series - अंकगणितीय संख्या श्रृंखला":
      case "Abilities to deal with abstract ideas and symbols and their relationships - अमूर्त विचारों व प्रतीकों तथा उनके सम्बन्धों से सामंजस्य की क्षमता":
        return <ReasoningNotes />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 font-semibold text-sm mb-4 border border-orange-500/20">
          State Police (Sub Inspector)
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
          UP Police SI Syllabus
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Detailed syllabus and topic breakdown for the Uttar Pradesh Police Sub Inspector (SI) Examination. 
          Prepare effectively with our comprehensive mock tests and detailed study notes.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-orange-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics (like Basic Law / Const) */}
            {section.subSections ? (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h3 className="text-lg font-medium text-orange-355 border-l-2 border-orange-500 pl-3">{sub.subtitle}</h3>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => {
                        const hasNotes = topicsWithNotes.includes(topic);
                        const isExpanded = expandedTopic === topic;

                        const toggleExpand = () => {
                          if (hasNotes) {
                            setExpandedTopic(isExpanded ? null : topic);
                          }
                        };

                        return (
                          <div key={tIdx} className="space-y-3">
                            <li 
                              onClick={toggleExpand}
                              className={`flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-orange-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group ${
                                hasNotes 
                                  ? 'cursor-pointer bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/25 hover:border-orange-500/40 text-orange-200 font-medium' 
                                  : 'cursor-default hover:bg-orange-500/5 hover:translate-x-1'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                                hasNotes 
                                  ? 'bg-orange-500 text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]' 
                                  : 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white'
                              }`}>
                                {(tIdx + 1).toString().padStart(2, '0')}
                              </div>
                              <span className={`font-medium transition-colors ${
                                hasNotes ? 'text-orange-200 group-hover:text-slate-50 font-semibold' : 'group-hover:text-slate-100'
                              }`}>{topic}</span>
                              
                              {hasNotes && (
                                <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.15)] font-semibold select-none group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                  {isExpanded ? "📖 हाइड नोट्स" : "✨ नोट्स उपलब्ध"}
                                </span>
                              )}
                            </li>
                            
                            {isExpanded && (
                              <div className="w-full">
                                {renderNotes(topic)}
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
                  const hasNotes = topicsWithNotes.includes(topic);
                  const isExpanded = expandedTopic === topic;

                  const toggleExpand = () => {
                    if (hasNotes) {
                      setExpandedTopic(isExpanded ? null : topic);
                    }
                  };

                  return (
                    <div key={tIdx} className="space-y-3">
                      <li 
                        onClick={toggleExpand}
                        className={`flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-orange-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group ${
                          hasNotes 
                            ? 'cursor-pointer bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/25 hover:border-orange-500/40 text-orange-200 font-medium' 
                            : 'cursor-default hover:bg-orange-500/5 hover:translate-x-1'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                          hasNotes 
                            ? 'bg-orange-500 text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]' 
                            : 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white'
                        }`}>
                          {(tIdx + 1).toString().padStart(2, '0')}
                        </div>
                        <span className={`font-medium transition-colors ${
                          hasNotes ? 'text-orange-200 group-hover:text-slate-50 font-semibold' : 'group-hover:text-slate-100'
                        }`}>{topic}</span>
                        
                        {hasNotes && (
                          <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.15)] font-semibold select-none group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                            {isExpanded ? "📖 हाइड नोट्स" : "✨ नोट्स उपलब्ध"}
                          </span>
                        )}
                      </li>
                      
                      {isExpanded && (
                        <div className="w-full">
                          {renderNotes(topic)}
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
