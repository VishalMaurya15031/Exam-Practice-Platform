"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Import SSC Specific Study Notes components
import SscEnglishNotes from '@/components/SscEnglishNotes';
import SscQuantitativeAptitudeNotes from '@/components/SscQuantitativeAptitudeNotes';
import SscReasoningNotes from '@/components/SscReasoningNotes';
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
    title: "SSC CGL Tier 1 Syllabus",
    subSections: [
      {
        subtitle: "1. English Language (अंग्रेजी भाषा)",
        topics: [
          "Reading Comprehension (पठन बोध)", "Idioms and Phrases (मुहावरे और लोकोक्तियाँ)", 
          "One word Substitution (एक शब्द प्रतिस्थापन)", "Sentence Correction (वाक्य सुधार)", 
          "Active Passive (सक्रिय-निष्क्रिय वाच्य)", "Spellings Correction (वर्तनी सुधार)", 
          "Fill in the Blanks (रिक्त स्थान भरें)", "Sentence Rearrangement (वाक्य पुनर्व्यवस्था)", 
          "Synonyms-Antonyms (समानार्थी-विलोम)", "Cloze test (क्लोज़ टेस्ट)", 
          "Sentence Improvement (वाक्यों में सुधार)", "Error Spotting (त्रुटि पहचानना)"
        ]
      },
      {
        subtitle: "2. General Awareness (सामान्य जागरूकता)",
        topics: [
          "Important Days (महत्वपूर्ण दिवस)", "Science (विज्ञान)", 
          "India and its neighboring countries (भारत और उसके पड़ोसी देश)", 
          "People in News (चर्चा में रहे व्यक्ति)", "Sports (खेल)", "Static GK (स्टेटिक जीके)", 
          "Important Schemes (महत्वपूर्ण योजनाएं)", "Portfolio (पोर्टफोलियो)", 
          "Books and Authors (पुस्तकें और लेखक)", "Current Affairs (समसामयिकी)"
        ]
      },
      {
        subtitle: "3. General Intelligence and Reasoning (सामान्य बुद्धिमत्ता और तर्क)",
        topics: [
          "Observation (अवलोकन)", "Coding and decoding (कोडिंग और डिकोडिंग)", 
          "Arithmetic number series (अंकगणितीय संख्या श्रेणी)", "Relationship concepts (संबंध अवधारणाएं)", 
          "Arithmetical reasoning (अंकगणितीय तर्क)", "Figural classification (आकृति वर्गीकरण)", 
          "Statement conclusion (कथन-निष्कर्ष)", "Syllogistic reasoning (न्याय निगमन)", 
          "Similarities and differences (समानताएं और अंतर)", "Space visualization (स्थानिक दृश्य)", 
          "Spatial orientation (स्थानिक अभिविन्यास)", "Problem-solving (समस्या समाधान)", 
          "Analysis (विश्लेषण)", "Non-verbal series (गैर-मौखिक श्रृंखला)", "Judgment (निर्णय)", 
          "Blood Relations (रक्त संबंध)", "Decision making (निर्णय क्षमता)", 
          "Visual memory (दृश्य स्मृति)", "Analogies (समानता)"
        ]
      },
      {
        subtitle: "4. Quantitative Aptitude (मात्रात्मक योग्यता)",
        topics: [
          "Percentage (प्रतिशत)", "Partnership Business (साझेदारी)", "Time and distance (समय और दूरी)", 
          "Time & Work (समय और कार्य)", "Mixture and Alligation (मिश्रण)", "Decimals (दशमलव)", 
          "Fractions (भिन्न)", "Quadrilaterals (चतुर्भुज)", "Regular Polygons (सम बहुभुज)", 
          "Right Prism (लंब प्रिज्म)", "Right Circular Cone (लंब वृत्तीय शंकु)", "Interest (ब्याज)", 
          "Sphere (गोला)", "Basic algebraic identities (मूल बीजगणितीय सर्वसमिकाएं)", 
          "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Relationships between numbers (संख्याओं के बीच संबंध)", 
          "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", 
          "Computation of whole numbers (पूर्ण संख्याओं की गणना)", "Right Circular Cylinder (लंब वृत्तीय बेलन)", 
          "Triangle and its centres (त्रिभुज और उसके केंद्र)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)", 
          "Averages (औसत)", "Congruence and similarity of triangles (त्रिभुजों की सर्वांगसमता और समरूपता)", 
          "Circle and its chords, tangents (वृत्त और उसकी जीवाएं, स्पर्श रेखाएं)", "Complementary angles (पूरक कोण)", 
          "Bar diagram & Pie chart (बार आरेख और पाई चार्ट)", "Frequency polygon (आवृत्ति बहुभुज)", 
          "Degree and Radian Measures (डिग्री और रेडियन माप)", "Hemispheres (अर्धगोला)", "Histogram (आयताकार चित्र)", 
          "Regular Right Pyramid (सम लंब पिरामिड)", "Trigonometric ratio (त्रिकोणमितीय अनुपात)", 
          "Heights and Distances (ऊंचाई और दूरी)", "Standard Identities (मानक सर्वसमिकाएं)", 
          "Rectangular Parallelepiped (आयताकार समांतर षट्फलक)"
        ]
      }
    ]
  },
  {
    title: "SSC CGL Tier 2 Paper I",
    subSections: [
      {
        subtitle: "Maths: Number Systems (गणित: संख्या पद्धति)",
        topics: [
          "Computation of Whole Number (पूर्ण संख्याओं की गणना)", "Decimal and Fractions (दशमलव और भिन्न)", 
          "Relationship between numbers (संख्याओं के बीच संबंध)"
        ]
      },
      {
        subtitle: "Maths: Fundamental Arithmetical Operations (गणित: मूल अंकगणितीय संक्रियाएं)",
        topics: [
          "Percentages (प्रतिशत)", "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", 
          "Averages (औसत)", "Interest: Simple & Compound (ब्याज: साधारण और चक्रवृद्धि)", 
          "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Partnership Business (साझेदारी)", 
          "Mixture and Alligation (मिश्रण)", "Time and distance (समय और दूरी)", "Time and work (समय और कार्य)"
        ]
      },
      {
        subtitle: "Maths: Algebra (गणित: बीजगणित)",
        topics: [
          "Basic algebraic identities & surds (मूल बीजगणितीय सर्वसमिकाएं और करणी)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)"
        ]
      },
      {
        subtitle: "Maths: Geometry (गणित: ज्यामिति)",
        topics: [
          "Triangle and its centres (त्रिभुज और उसके केंद्र)", "Congruence and similarity of triangles (त्रिभुजों की सर्वांगसमता और समरूपता)", 
          "Circle and its chords (वृत्त और उसकी जीवाएं)", "Tangents (स्पर्श रेखाएं)", 
          "Angles subtended by chords of a circle (वृत्त की जीवाओं द्वारा अंतरित कोण)", 
          "Common tangents to two or more circles (दो या दो से अधिक वृत्तों की उभयनिष्ठ स्पर्श रेखाएं)"
        ]
      },
      {
        subtitle: "Maths: Mensuration (गणित: क्षेत्रमिति)",
        topics: [
          "Right Prism (लंब प्रिज्म)", "Triangle (त्रिभुज)", "Quadrilaterals (चतुर्भुज)", 
          "Regular Polygons (सम बहुभुज)", "Circle (वृत्त)", "Right Circular Cone (लंब वृत्तीय शंकु)", 
          "Right Circular Cylinder (लंब वृत्तीय बेलन)", "Sphere (गोला)", "Hemispheres (अर्धगोला)", 
          "Rectangular Parallelepiped (आयताकार समांतर षट्फलक)", 
          "Regular Right Pyramid with triangular or square Base (त्रिभुजाकार या वर्गाकार आधार वाला सम लंब पिरामिड)"
        ]
      },
      {
        subtitle: "Maths: Trigonometry (गणित: त्रिकोणमिति)",
        topics: [
          "Trigonometric ratios & Complementary angles (त्रिकोणमितीय अनुपात और पूरक कोण)", 
          "Height and distances (ऊंचाई और दूरी)", "Standard Identities (मानक सर्वसमिकाएं)"
        ]
      },
      {
        subtitle: "Maths: Statistics and probability (गणित: सांख्यिकी और प्रायिकता)",
        topics: [
          "Use of Tables and Graphs (टेबल और ग्राफ का उपयोग)", "Histogram (हिस्टोग्राम)", 
          "Frequency polygon (आवृत्ति बहुभुज)", "Bar-diagram (बार-आरेख)", "Pie-chart (पाई-चार्ट)", 
          "Measures of central tendency (केंद्रीय प्रवृत्ति के उपाय)", "Mean (माध्य)", 
          "Median (माध्यिका)", "Mode (बहुलक)", "Standard deviation (मानक विचलन)", 
          "Calculation of simple probabilities (सरल प्रायिकता की गणना)"
        ]
      },
      {
        subtitle: "Reasoning and General Intelligence (तर्क और सामान्य बुद्धिमत्ता)",
        topics: [
          "Semantic Analogy (शब्दार्थ समानता)", "Symbolic operations, Trends (प्रतीकात्मक संचालन, रुझान)", 
          "Figural Analogy (आकृति समानता)", "Space Orientation (स्थानिक अभिविन्यास)", 
          "Semantic Classification (शब्दार्थ वर्गीकरण)", "Venn Diagrams (वेन आरेख)", 
          "Symbolic/ Number Classification (प्रतीकात्मक/संख्या वर्गीकरण)", "Drawing inferences (निष्कर्ष निकालना)", 
          "Figural Classification (आकृति वर्गीकरण)", "Punched hole/ pattern-folding & unfolding (छेद/पैटर्न-फोल्डिंग)", 
          "Semantic Series (शब्दार्थ श्रृंखला)", "Figural Pattern Folding and completion (आकृति पैटर्न फोल्डिंग और पूर्णता)", 
          "Number Series (संख्या श्रृंखला)", "Embedded figures (निहित आकृतियाँ)", "Figural Series (आकृति श्रृंखला)", 
          "Critical Thinking (आलोचनात्मक सोच)", "Problem-Solving (समस्या समाधान)", "Emotional Intelligence (भावनात्मक बुद्धिमत्ता)", 
          "Word Building (शब्द निर्माण)", "Social Intelligence (सामाजिक बुद्धिमत्ता)", "Coding and decoding (कोडिंग और डिकोडिंग)", 
          "Numerical operations (संख्यात्मक संचालन)"
        ]
      },
      {
        subtitle: "English Language And Comprehension (अंग्रेजी भाषा और समझ)",
        topics: [
          "Vocabulary (शब्दावली)", "One word substitution (एक शब्द प्रतिस्थापन)", "Sentence structure (वाक्य संरचना)", 
          "Shuffling of Sentences (वाक्यों का पुनर्व्यवस्थापन)", "Fill in the Blanks (रिक्त स्थान भरें)", 
          "Synonyms/Homonyms (पर्यायवाची/समनाम)", "Shuffling of Sentence parts (वाक्य के भागों का पुनर्व्यवस्थापन)", 
          "Spellings/ Detecting misspelt words (वर्तनी/गलत शब्दों की पहचान)", "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)", 
          "Improvement of Sentences (वाक्यों में सुधार)", "Antonyms (विलोम)", "Active/ Passive Voice (सक्रिय/निष्क्रिय वाच्य)", 
          "Direct/ Indirect narration (प्रत्यक्ष/अप्रत्यक्ष कथन)", "Spot the Error (त्रुटि पहचानें)", 
          "English Grammar (अंग्रेजी व्याकरण)", "Cloze Passage (क्लोज़ पैसेज)"
        ]
      },
      {
        subtitle: "General Awareness (सामान्य जागरूकता)",
        topics: [
          "Portfolio (पोर्टफोलियो)", "India and its neighboring countries (भारत और उसके पड़ोसी देश)", 
          "Science (विज्ञान)", "Current Affairs (समसामयिकी)", "Books and Authors (पुस्तकें और लेखक)", 
          "Sports (खेल)", "Important Schemes (महत्वपूर्ण योजनाएं)", "Important Days & Dates (महत्वपूर्ण दिवस)", 
          "People in News (चर्चा में रहे व्यक्ति)"
        ]
      }
    ]
  },
  {
    title: "SSC CGL Tier 2 Computer Paper I",
    subSections: [
      {
        subtitle: "Computer Basics (कंप्यूटर बेसिक्स)",
        topics: [
          "Organization of a computer (कंप्यूटर का संगठन)", "Central Processing Unit - CPU (सेंट्रल प्रोसेसिंग यूनिट - सीपीयू)", 
          "Input/Output devices (इनपुट/आउटपुट डिवाइस)", "Computer memory (कंप्यूटर मेमोरी)", 
          "Backup devices (बैकअप डिवाइस)", "PORTs (पोर्ट्स)", "Windows Explorer (विंडोज एक्सप्लोरर)", 
          "Keyboard shortcuts (कीबोर्ड शॉर्टकट)"
        ]
      },
      {
        subtitle: "Software (सॉफ्टवेयर)",
        topics: [
          "Windows Operating System (विंडोज ऑपरेटिंग सिस्टम)", 
          "MS Office: Word, Excel, PowerPoint (एमएस ऑफिस: वर्ड, एक्सेल, पावरपॉइंट)"
        ]
      },
      {
        subtitle: "Working with Internet and E-mails (इंटरनेट और ई-मेल के साथ कार्य)",
        topics: [
          "Web Browsing & Searching (वेब ब्राउज़िंग और खोजना)", "Downloading & Uploading (डाउनलोडिंग और अपलोडिंग)", 
          "Managing an E-mail Account (ई-मेल अकाउंट का प्रबंधन)", "e-Banking (ई-बैंकिंग)"
        ]
      },
      {
        subtitle: "Basics of Networking and Cyber Security (नेटवर्किंग और साइबर सुरक्षा के मूल सिद्धांत)",
        topics: [
          "Networking devices and protocols (नेटवर्किंग डिवाइस और प्रोटोकॉल)", 
          "Network and information security threats (नेटवर्क and सूचना सुरक्षा खतरे)", 
          "Preventive measures (निवारक उपाय)"
        ]
      }
    ]
  },
  {
    title: "SSC CGL Tier 2 Paper II (Statistics)",
    subSections: [
      {
        subtitle: "Collection, Classification & Presentation of Statistical Data (सांख्यिकीय डेटा का संग्रह और प्रस्तुति)",
        topics: [
          "Primary and Secondary data (प्राथमिक और द्वितीयक डेटा)", "Tabulation of data (डेटा का सारणीकरण)", 
          "Frequency distributions (आवृत्ति वितरण)", "Graphs and charts (ग्राफ और चार्ट)", 
          "Diagrammatic presentation of frequency distributions (आवृत्ति वितरण की आरेखीय प्रस्तुति)"
        ]
      },
      {
        subtitle: "Measures of Central Tendency (केंद्रीय प्रवृत्ति के उपाय)",
        topics: [
          "Common measures: mean, median and mode (सामान्य उपाय: माध्य, माध्यिका और बहुलक)", 
          "Partition values: quartiles, deciles, percentiles (विभाजन मूल्य: चतुर्थक, दशमक, प्रतिशतक)"
        ]
      },
      {
        subtitle: "Measures of Dispersion (फैलाव के उपाय)",
        topics: [
          "Range, quartile deviations, mean deviation and standard deviation (सीमा, चतुर्थक विचलन, माध्य विचलन और मानक विचलन)", 
          "Measures of relative dispersion (सापेक्ष फैलाव के उपाय)"
        ]
      },
      {
        subtitle: "Moments, Skewness and Kurtosis (क्षण, विषमता और कर्टोसिस)",
        topics: [
          "Different types of moments and their relationship (विभिन्न प्रकार के क्षण और उनका संबंध)", 
          "Meaning of skewness and kurtosis (विषमता और कर्टोसिस का अर्थ)", 
          "Different measures of skewness and kurtosis (विषमता और कर्टोसिस के विभिन्न उपाय)"
        ]
      },
      {
        subtitle: "Correlation and Regression (सहसंबंध और प्रतिगमन)",
        topics: [
          "Scatter diagram (स्कैटर आरेख)", "Simple correlation coefficient (सरल सहसंबंध गुणांक)", 
          "Simple regression lines (सरल प्रतिगमन रेखाएं)", "Spearman's rank correlation (स्पीयरमैन का रैंक सहसंबंध)", 
          "Measures of association of attributes (विशेषताओं के जुड़ाव के उपाय)", "Multiple regression (एकाधिक प्रतिगमन)", 
          "Multiple and partial correlation (एकाधिक और आंशिक सहसंबंध)"
        ]
      },
      {
        subtitle: "Probability Theory (प्रायिकता सिद्धांत)",
        topics: [
          "Meaning of probability (प्रायिकता का अर्थ)", "Different definitions of probability (प्रायिकता की विभिन्न परिभाषाएं)", 
          "Conditional probability (सशर्त प्रायिकता)", "Compound probability (यौगिक प्रायिकता)", 
          "Independent events (स्वतंत्र घटनाएँ)", "Bayes' theorem (बेयस का प्रमेय)"
        ]
      },
      {
        subtitle: "Random Variable & Probability Distributions (यादृच्छिक चर और प्रायिकता वितरण)",
        topics: [
          "Random variable (यादृच्छिक चर)", "Probability functions (प्रायिकता फलन)", 
          "Expectation and Variance (अपेक्षा और विचरण)", "Higher moments of a random variable (उच्च क्षण)", 
          "Binomial, Poisson, Normal and Exponential distributions (द्विपद, पॉइसन, सामान्य और घातीय वितरण)", 
          "Joint distribution of two random variable (दो यादृच्छिक चर का संयुक्त वितरण)"
        ]
      },
      {
        subtitle: "Sampling Theory (नमूनाकरण सिद्धांत)",
        topics: [
          "Concept of population and sample (जनसंख्या और नमूने की अवधारणा)", "Parameter and statistic (पैरामीटर और सांख्यिकी)", 
          "Sampling and non-sampling errors (नमूनाकरण और गैर-नमूनाकरण त्रुटियां)", 
          "Probability and non-probability sampling techniques (प्रायिकता और गैर-प्रायिकता नमूनाकरण तकनीकें)", 
          "Sampling distribution (नमूनाकरण वितरण)", "Sample size decisions (नमूना आकार के निर्णय)"
        ]
      },
      {
        subtitle: "Statistical Inference (सांख्यिकीय अनुमान)",
        topics: [
          "Point estimation and interval estimation (बिंदु अनुमान और अंतराल अनुमान)", "Properties of a good estimator (एक अच्छे अनुमानक के गुण)", 
          "Methods of estimation (अनुमान के तरीके)", "Testing of hypothesis, Basic concept (परिकल्पना का परीक्षण, मूल अवधारणा)", 
          "Small and large sample tests (छोटे और बड़े नमूने के परीक्षण)", "Tests based on Z, t, Chi-square and F statistic (Z, t, ची-स्क्वायर और F सांख्यिकी परीक्षण)", 
          "Confidence intervals (विश्वास अंतराल)"
        ]
      },
      {
        subtitle: "Analysis of Variance & Time Series (विचरण का विश्लेषण और समय श्रृंखला)",
        topics: [
          "Analysis of one-way and two-way classified data (एक-तरफ़ा और दो-तरफ़ा वर्गीकृत डेटा का विश्लेषण)", 
          "Components of time series (समय श्रृंखला के घटक)", "Determination of trend components (प्रवृत्ति घटकों का निर्धारण)", 
          "Measurement of seasonal variation (मौसमी भिन्नता का मापन)"
        ]
      },
      {
        subtitle: "Index Numbers (सूचकांक संख्या)",
        topics: [
          "Meaning of Index Numbers (सूचकांक संख्याओं का अर्थ)", "Problems in the construction of index numbers (निर्माण में समस्याएं)", 
          "Types of index number, Different formulae (प्रकार और विभिन्न सूत्र)", "Base shifting and splicing (बेस शिफ्टिंग और स्प्लिसिंग)", 
          "Cost of living Index Numbers (जीवन निर्वाह सूचकांक संख्या)", "Uses of Index Numbers (सूचकांक संख्याओं के उपयोग)"
        ]
      }
    ]
  }
];

export default function SscCglPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  // List of all English, GK, Reasoning, Maths & Computer topics that have detailed study notes
  const topicsWithNotes = [
    // --- English Language ---
    "Reading Comprehension (पठन बोध)", "Idioms and Phrases (मुहावरे और लोकोक्तियाँ)", 
    "One word Substitution (एक शब्द प्रतिस्थापन)", "Sentence Correction (वाक्य सुधार)", 
    "Active Passive (सक्रिय-निष्क्रिय वाच्य)", "Spellings Correction (वर्तनी सुधार)", 
    "Fill in the Blanks (रिक्त स्थान भरें)", "Sentence Rearrangement (वाक्य पुनर्व्यवस्था)", 
    "Synonyms-Antonyms (समानार्थी-विलोम)", "Cloze test (क्लोज़ टेस्ट)", 
    "Sentence Improvement (वाक्यों में सुधार)", "Error Spotting (त्रुटि पहचानना)",
    "Vocabulary (शब्दावली)", "One word substitution (एक शब्द प्रतिस्थापन)", "Sentence structure (वाक्य संरचना)", 
    "Shuffling of Sentences (वाक्यों का पुनर्व्यवस्थापन)", "Synonyms/Homonyms (पर्यायवाची/समनाम)", 
    "Shuffling of Sentence parts (वाक्य के भागों का पुनर्व्यवस्थापन)", "Spellings/ Detecting misspelt words (वर्तनी/गलत शब्दों की पहचान)", 
    "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)", "Improvement of Sentences (वाक्यों में सुधार)", 
    "Antonyms (विलोम)", "Active/ Passive Voice (सक्रिय/निष्क्रिय वाच्य)", "Direct/ Indirect narration (प्रत्यक्ष/अप्रत्यक्ष कथन)", 
    "Spot the Error (त्रुटि पहचानें)", "English Grammar (अंग्रेजी व्याकरण)", "Cloze Passage (क्लोज़ पैसेज)",

    // --- General Awareness ---
    "Important Days (महत्वपूर्ण दिवस)", "Science (विज्ञान)", 
    "India and its neighboring countries (भारत और उसके पड़ोसी देश)", 
    "People in News (चर्चा में रहे व्यक्ति)", "Sports (खेल)", "Static GK (स्टेटिक जीके)", 
    "Important Schemes (महत्वपूर्ण योजनाएं)", "Portfolio (पोर्टफोलियो)", 
    "Books and Authors (पुस्तकें और लेखक)", "Current Affairs (समसामयिकी)",
    "Important Days & Dates (महत्वपूर्ण दिवस)",

    // --- General Intelligence & Reasoning ---
    "Observation (अवलोकन)", "Coding and decoding (कोडिंग और डिकोडिंग)", 
    "Arithmetic number series (अंकगणितीय संख्या श्रेणी)", "Relationship concepts (संबंध अवधारणाएं)", 
    "Arithmetical reasoning (अंकगणितीय तर्क)", "Figural classification (आकृति वर्गीकरण)", 
    "Statement conclusion (कथन-निष्कर्ष)", "Syllogistic reasoning (न्याय निगमन)", 
    "Similarities and differences (समानताएं और अंतर)", "Space visualization (स्थानिक दृश्य)", 
    "Spatial orientation (स्थानिक अभिविन्यास)", "Problem-solving (समस्या समाधान)", 
    "Analysis (विश्लेषण)", "Non-verbal series (गैर-मौखिक श्रृंखला)", "Judgment (निर्णय)", 
    "Blood Relations (रक्त संबंध)", "Decision making (निर्णय क्षमता)", 
    "Visual memory (दृश्य स्मृति)", "Analogies (समानता)",
    "Semantic Analogy (शब्दार्थ समानता)", "Symbolic operations, Trends (प्रतीकात्मक संचालन, रुझान)", 
    "Figural Analogy (आकृति समानता)", "Space Orientation (स्थानिक अभिविन्यास)", 
    "Semantic Classification (शब्दार्थ वर्गीकरण)", "Venn Diagrams (वेन आरेख)", 
    "Symbolic/ Number Classification (प्रतीकात्मक/संख्या वर्गीकरण)", "Drawing inferences (निष्कर्ष निकालना)", 
    "Figural Classification (आकृति वर्गीकरण)", "Punched hole/ pattern-folding & unfolding (छेद/पैटर्न-फोल्डिंग)", 
    "Semantic Series (शब्दार्थ श्रृंखला)", "Figural Pattern Folding and completion (आकृति पैटर्न फोल्डिंग और पूर्णता)", 
    "Number Series (संख्या श्रृंखला)", "Embedded figures (निहित आकृतियाँ)", "Figural Series (आकृति श्रृंखला)", 
    "Critical Thinking (आलोचनात्मक सोच)", "Problem-Solving (समस्या समाधान)", "Emotional Intelligence (भावनात्मक बुद्धिमत्ता)", 
    "Word Building (शब्द निर्माण)", "Social Intelligence (सामाजिक बुद्धिमत्ता)", "Coding and decoding (कोडिंग और डिकोडिंग)", 
    "Numerical operations (संख्यात्मक संचालन)",

    // --- Quantitative Aptitude & Statistics ---
    "Percentage (प्रतिशत)", "Partnership Business (साझेदारी)", "Time and distance (समय और दूरी)", 
    "Time & Work (समय और कार्य)", "Mixture and Alligation (मिश्रण)", "Decimals (दशमलव)", 
    "Fractions (भिन्न)", "Quadrilaterals (चतुर्भुज)", "Regular Polygons (सम बहुभुज)", 
    "Right Prism (लंब प्रिज्म)", "Right Circular Cone (लंब वृत्तीय शंकु)", "Interest (ब्याज)", 
    "Sphere (गोला)", "Basic algebraic identities (मूल बीजगणितीय सर्वसमिकाएं)", 
    "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Relationships between numbers (संख्याओं के बीच संबंध)", 
    "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", 
    "Computation of whole numbers (पूर्ण संख्याओं की गणना)", "Right Circular Cylinder (लंब वृत्तीय बेलन)", 
    "Triangle and its centres (त्रिभुज और उसके केंद्र)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)", 
    "Averages (औसत)", "Congruence and similarity of triangles (त्रिभुजों की सर्वांगसमता और समरूपता)", 
    "Circle and its chords, tangents (वृत्त और उसकी जीवाएं, स्पर्श रेखाएं)", "Complementary angles (पूरक कोण)", 
    "Bar diagram & Pie chart (बार आरेख और पाई चार्ट)", "Frequency polygon (आवृत्ति बहुभुज)", 
    "Degree and Radian Measures (डिग्री and रेडियन माप)", "Hemispheres (अर्धगोला)", "Histogram (आयताकार चित्र)", 
    "Regular Right Pyramid (सम लंब पिरामिड)", "Trigonometric ratio (त्रिकोणमितीय अनुपात)", 
    "Heights and Distances (ऊंचाई और दूरी)", "Standard Identities (मानक सर्वसमिकाएं)", 
    "Rectangular Parallelepiped (आयताकार समांतर षट्फलक)",
    "Computation of Whole Number (पूर्ण संख्याओं की गणना)", "Decimal and Fractions (दशमलव और भिन्न)", 
    "Percentages (प्रतिशत)", "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", 
    "Averages (औसत)", "Interest: Simple & Compound (ब्याज: साधारण और चक्रवृद्धि)", 
    "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Partnership Business (साझेदारी)", 
    "Mixture and Alligation (मिश्रण)", "Time and distance (समय और दूरी)", "Time and work (समय और कार्य)",
    "Basic algebraic identities & surds (मूल बीजगणितीय सर्वसमिकाएं और करणी)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)",
    "Triangle and its centres (त्रिभुज और उसके केंद्र)", "Congruence and similarity of triangles (त्रिभुजों की सर्वांगसमता और समरूपता)", 
    "Circle and its chords (वृत्त और उसकी जीवाएं)", "Tangents (स्पर्श रेखाएं)", 
    "Angles subtended by chords of a circle (वृत्त की जीवाओं द्वारा अंतरित कोण)", 
    "Common tangents to two or more circles (दो या दो से अधिक वृत्तों की उभयनिष्ठ स्पर्श रेखाएं)",
    "Right Prism (लंब प्रिज्म)", "Triangle (त्रिभुज)", "Quadrilaterals (चतुर्भुज)", 
    "Regular Polygons (सम बहुभुज)", "Circle (वृत्त)", "Right Circular Cone (लंब वृत्तीय शंकु)", 
    "Right Circular Cylinder (लंब वृत्तीय बेलन)", "Sphere (गोला)", "Hemispheres (अर्धगोला)", 
    "Rectangular Parallelepiped (आयताकार समांतर षट्फलक)", 
    "Regular Right Pyramid with triangular or square Base (त्रिभुजाकार या वर्गाकार आधार वाला सम लंब पिरामिड)",
    "Trigonometric ratios & Complementary angles (त्रिकोणमितीय अनुपात और पूरक कोण)", 
    "Height and distances (ऊंचाई और दूरी)", "Standard Identities (मानक सर्वसमिकाएं)",
    "Use of Tables and Graphs (टेबल और ग्राफ का उपयोग)", "Histogram (हिस्टोग्राम)", 
    "Frequency polygon (आवृत्ति बहुभुज)", "Bar-diagram (बार-आरेख)", "Pie-chart (पाई-चार्ट)", 
    "Measures of central tendency (केंद्रीय प्रवृत्ति के उपाय)", "Mean (माध्य)", 
    "Median (माध्यिका)", "Mode (बहुलक)", "Standard deviation (मानक विचलन)", 
    "Calculation of simple probabilities (सरल प्रायिकता की गणना)",
    // Statistics Paper II Topics
    "Primary and Secondary data (प्राथमिक और द्वितीयक डेटा)", "Tabulation of data (डेटा का सारणीकरण)", 
    "Frequency distributions (आवृत्ति वितरण)", "Graphs and charts (ग्राफ और चार्ट)", 
    "Methods of data collection (डेटा संग्रह के तरीके)", "Diagrammatic presentation of frequency distributions (आवृत्ति वितरण की आरेखीय प्रस्तुति)",
    "Common measures: mean, median and mode (सामान्य उपाय: माध्य, माध्यिका और बहुलक)", 
    "Partition values: quartiles, deciles, percentiles (विभाजन मूल्य: चतुर्थक, दशमक, प्रतिशतक)",
    "Range, quartile deviations, mean deviation and standard deviation (सीमा, चतुर्थक विचलन, माध्य विचलन और मानक विचलन)", 
    "Measures of relative dispersion (सापेक्ष फैलाव के उपाय)",
    "Different types of moments and their relationship (विभिन्न प्रकार के क्षण और उनका संबंध)", 
    "Meaning of skewness and kurtosis (विषमता और कर्टोसिस का अर्थ)", 
    "Different measures of skewness and kurtosis (विषमता और कर्टोसिस के विभिन्न उपाय)",
    "Scatter diagram (स्कैटर आरेख)", "Simple correlation coefficient (सरल सहसंबंध गुणांक)", 
    "Simple regression lines (सरल प्रतिगमन रेखाएं)", "Spearman's rank correlation (स्पीयरमैन का रैंक सहसंबंध)", 
    "Measures of association of attributes (विशेषताओं के जुड़ाव के उपाय)", "Multiple regression (एकाधिक प्रतिगमन)", 
    "Multiple and partial correlation (एकाधिक और आंशिक सहसंबंध)",
    "Meaning of probability (प्रायिकता का अर्थ)", "Different definitions of probability (प्रायिकता की विभिन्न परिभाषाएं)", 
    "Conditional probability (सशर्त प्रायिकता)", "Compound probability (यौगिक प्रायिकता)", 
    "Independent events (स्वतंत्र घटनाएँ)", "Bayes' theorem (बेयस का प्रमेय)",
    "Random variable (यादृच्छिक चर)", "Probability functions (प्रायिकता फलन)", 
    "Expectation and Variance (अपेक्षा और विचरण)", "Higher moments of a random variable (उच्च क्षण)", 
    "Binomial, Poisson, Normal and Exponential distributions (द्विपद, पॉइसन, सामान्य और घातीय वितरण)", 
    "Joint distribution of two random variable (दो यादृच्छिक चर का संयुक्त वितरण)",
    "Concept of population and sample (जनसंख्या और नमूने की अवधारणा)", "Parameter and statistic (पैरामीटर और सांख्यिकी)", 
    "Sampling and non-sampling errors (नमूनाकरण और गैर-नमूनाकरण त्रुटियां)", 
    "Probability and non-probability sampling techniques (प्रायिकता और गैर-प्रायिकता नमूनाकरण तकनीकें)", 
    "Sampling distribution (नमूनाकरण वितरण)", "Sample size decisions (नमूना आकार के निर्णय)",
    "Point estimation and interval estimation (बिंदु अनुमान और अंतराल अनुमान)", "Properties of a good estimator (एक अच्छे अनुमानक के गुण)", 
    "Methods of estimation (अनुमान के तरीके)", "Testing of hypothesis, Basic concept (परिकल्पना का परीक्षण, मूल अवधारणा)", 
    "Small and large sample tests (छोटे और बड़े नमूने के परीक्षण)", "Tests based on Z, t, Chi-square and F statistic (Z, t, ची-स्क्वायर और F सांख्यिकी परीक्षण)", 
    "Confidence intervals (विश्वास अंतराल)",
    "Analysis of one-way and two-way classified data (एक-तरफ़ा और दो-तरफ़ा वर्गीकृत डेटा का विश्लेषण)", 
    "Components of time series (समय श्रृंखला के घटक)", "Determination of trend components (प्रवृत्ति घटकों का निर्धारण)", 
    "Measurement of seasonal variation (मौसमी भिन्नता का मापन)",
    "Meaning of Index Numbers (सूचकांक संख्याओं का अर्थ)", "Problems in the construction of index numbers (निर्माण में समस्याएं)", 
    "Types of index number, Different formulae (प्रकार और विभिन्न सूत्र)", "Base shifting and splicing (बेस शिफ्टिंग और स्प्लिसिंग)", 
    "Cost of living Index Numbers (जीवन निर्वाह सूचकांक संख्या)", "Uses of Index Numbers (सूचकांक संख्याओं के उपयोग)",

    // --- Computer Basics ---
    "Organization of a computer (कंप्यूटर का संगठन)", "Central Processing Unit - CPU (सेंट्रल प्रोसेसिंग यूनिट - सीपीयू)", 
    "Input/Output devices (इनपुट/आउटपुट डिवाइस)", "Computer memory (कंप्यूटर मेमोरी)", 
    "Backup devices (बैकअप डिवाइस)", "PORTs (पोर्ट्स)", "Windows Explorer (विंडोज एक्सप्लोरर)", 
    "Keyboard shortcuts (कीबोर्ड शॉर्टकट)", "Windows Operating System (विंडोज ऑपरेटिंग सिस्टम)", 
    "MS Office: Word, Excel, PowerPoint (एमएस ऑफिस: वर्ड, एक्सेल, पावरपॉइंट)", 
    "Web Browsing & Searching (वेब ब्राउज़िंग और खोजना)", "Downloading & Uploading (डाउनलोडिंग और अपलोडिंग)", 
    "Managing an E-mail Account (ई-मेल अकाउंट का प्रबंधन)", "e-Banking (ई-बैंकिंग)", 
    "Networking devices and protocols (नेटवर्किंग डिवाइस और प्रोटोकॉल)", 
    "Network and information security threats (नेटवर्क और सूचना सुरक्षा खतरे)", "Preventive measures (निवारक उपाय)"
  ];

  const renderNotes = (topic: string) => {
    // Determine the subject based on the topic name or prefix matching
    const isEnglish = [
      "Reading Comprehension (पठन बोध)", "Idioms and Phrases (मुहावरे और लोकोक्तियाँ)", 
      "One word Substitution (एक शब्द प्रतिस्थापन)", "Sentence Correction (वाक्य सुधार)", 
      "Active Passive (सक्रिय-निष्क्रिय वाच्य)", "Spellings Correction (वर्तनी सुधार)", 
      "Fill in the Blanks (रिक्त स्थान भरें)", "Sentence Rearrangement (वाक्य पुनर्व्यवस्था)", 
      "Synonyms-Antonyms (समानार्थी-विलोम)", "Cloze test (क्लोज़ टेस्ट)", 
      "Sentence Improvement (वाक्यों में सुधार)", "Error Spotting (त्रुटि पहचानना)",
      "Vocabulary (शब्दावली)", "One word substitution (एक शब्द प्रतिस्थापन)", "Sentence structure (वाक्य संरचना)", 
      "Shuffling of Sentences (वाक्यों का पुनर्व्यवस्थापन)", "Synonyms/Homonyms (पर्यायवाची/समनाम)", 
      "Shuffling of Sentence parts (वाक्य के भागों का पुनर्व्यवस्थापन)", "Spellings/ Detecting misspelt words (वर्तनी/गलत शब्दों की पहचान)", 
      "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)", "Improvement of Sentences (वाक्यों में सुधार)", 
      "Antonyms (विलोम)", "Active/ Passive Voice (सक्रिय/निष्क्रिय वाच्य)", "Direct/ Indirect narration (प्रत्यक्ष/अप्रत्यक्ष कथन)", 
      "Spot the Error (त्रुटि पहचानें)", "English Grammar (अंग्रेजी व्याकरण)", "Cloze Passage (क्लोज़ पैसेज)"
    ].includes(topic);

    const isReasoning = [
      "Observation (अवलोकन)", "Coding and decoding (कोडिंग और डिकोडिंग)", 
      "Arithmetic number series (अंकगणितीय संख्या श्रेणी)", "Relationship concepts (संबंध अवधारणाएं)", 
      "Arithmetical reasoning (अंकगणितीय तर्क)", "Figural classification (आकृति वर्गीकरण)", 
      "Statement conclusion (कथन-निष्कर्ष)", "Syllogistic reasoning (न्याय निगमन)", 
      "Similarities and differences (समानताएं और अंतर)", "Space visualization (स्थानिक दृश्य)", 
      "Spatial orientation (स्थानिक अभिविन्यास)", "Problem-solving (समस्या समाधान)", 
      "Analysis (विश्लेषण)", "Non-verbal series (गैर-मौखिक श्रृंखला)", "Judgment (निर्णय)", 
      "Blood Relations (रक्त संबंध)", "Decision making (निर्णय क्षमता)", 
      "Visual memory (दृश्य स्मृति)", "Analogies (समानता)",
      "Semantic Analogy (शब्दार्थ समानता)", "Symbolic operations, Trends (प्रतीकात्मक संचालन, रुझान)", 
      "Figural Analogy (आकृति समानता)", "Space Orientation (स्थानिक अभिविन्यास)", 
      "Semantic Classification (शब्दार्थ वर्गीकरण)", "Venn Diagrams (वेन आरेख)", 
      "Symbolic/ Number Classification (प्रतीकात्मक/संख्या वर्गीकरण)", "Drawing inferences (निष्कर्ष निकालना)", 
      "Figural Classification (आकृति वर्गीकरण)", "Punched hole/ pattern-folding & unfolding (छेद/पैटर्न-फोल्डिंग)", 
      "Semantic Series (शब्दार्थ श्रृंखला)", "Figural Pattern Folding and completion (आकृति पैटर्न फोल्डिंग और पूर्णता)", 
      "Number Series (संख्या श्रृंखला)", "Embedded figures (निहित आकृतियाँ)", "Figural Series (आकृति श्रृंखला)", 
      "Critical Thinking (आलोचनात्मक सोच)", "Problem-Solving (समस्या समाधान)", "Emotional Intelligence (भावनात्मक बुद्धिमत्ता)", 
      "Word Building (शब्द निर्माण)", "Social Intelligence (सामाजिक बुद्धिमत्ता)", "Coding and decoding (कोडिंग और डिकोडिंग)", 
      "Numerical operations (संख्यात्मक संचालन)"
    ].includes(topic);

    const isMathsOrStats = [
      "Percentage (प्रतिशत)", "Partnership Business (साझेदारी)", "Time and distance (समय और दूरी)", 
      "Time & Work (समय और कार्य)", "Mixture and Alligation (मिश्रण)", "Decimals (दशमलव)", 
      "Fractions (भिन्न)", "Quadrilaterals (चतुर्भुज)", "Regular Polygons (सम बहुभुज)", 
      "Right Prism (लंब प्रिज्म)", "Right Circular Cone (लंब वृत्तीय शंकु)", "Interest (ब्याज)", 
      "Sphere (गोला)", "Basic algebraic identities (मूल बीजगणितीय सर्वसमिकाएं)", 
      "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Relationships between numbers (संख्याओं के बीच संबंध)", 
      "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", 
      "Computation of whole numbers (पूर्ण संख्याओं की गणना)", "Right Circular Cylinder (लंब वृत्तीय बेलन)", 
      "Triangle and its centres (त्रिभुज और उसके केंद्र)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)", 
      "Averages (औसत)", "Congruence and similarity of triangles (त्रिभुजों की सर्वांगसमता और समरूपता)", 
      "Circle and its chords, tangents (वृत्त और उसकी जीवाएं, स्पर्श रेखाएं)", "Complementary angles (पूरक कोण)", 
      "Bar diagram & Pie chart (बार आरेख और पाई चार्ट)", "Frequency polygon (आवृत्ति बहुभुज)", 
      "Degree and Radian Measures (डिग्री और रेडियन माप)", "Hemispheres (अर्धगोला)", "Histogram (आयताकार चित्र)", 
      "Regular Right Pyramid (सम लंब पिरामिड)", "Trigonometric ratio (त्रिकोणमितीय अनुपात)", 
      "Heights and Distances (ऊंचाई और दूरी)", "Standard Identities (मानक सर्वसमिकाएं)", 
      "Rectangular Parallelepiped (आयताकार समांतर षट्फलक)",
      "Computation of Whole Number (पूर्ण संख्याओं की गणना)", "Decimal and Fractions (दशमलव और भिन्न)", 
      "Percentages (प्रतिशत)", "Ratio and Proportion (अनुपात और समानुपात)", "Square roots (वर्गमूल)", 
      "Averages (औसत)", "Interest: Simple & Compound (ब्याज: साधारण और चक्रवृद्धि)", 
      "Profit and Loss (लाभ और हानि)", "Discount (छूट)", "Partnership Business (साझेदारी)", 
      "Mixture and Alligation (मिश्रण)", "Time and distance (समय और दूरी)", "Time and work (समय और कार्य)",
      "Basic algebraic identities & surds (मूल बीजगणितीय सर्वसमिकाएं और करणी)", "Graphs of Linear Equations (रैखिक समीकरणों के ग्राफ)",
      "Triangle and its centres (त्रिभुज और उसके केंद्र)", "Congruence and similarity of triangles (त्रिभुजों की सर्वांगसमता और समरूपता)", 
      "Circle and its chords (वृत्त और उसकी जीवाएं)", "Tangents (स्पर्श रेखाएं)", 
      "Angles subtended by chords of a circle (वृत्त की जीवाओं द्वारा अंतरित कोण)", 
      "Common tangents to two or more circles (दो या दो से अधिक वृत्तों की उभयनिष्ठ स्पर्श रेखाएं)",
      "Right Prism (लंब प्रिज्म)", "Triangle (त्रिभुज)", "Quadrilaterals (चतुर्भुज)", 
      "Regular Polygons (सम बहुभुज)", "Circle (वृत्त)", "Right Circular Cone (लंब वृत्तीय शंकु)", 
      "Right Circular Cylinder (लंब वृत्तीय बेलन)", "Sphere (गोला)", "Hemispheres (अर्धगोला)", 
      "Rectangular Parallelepiped (आयताकार समांतर षट्फलक)", 
      "Regular Right Pyramid with triangular or square Base (त्रिभुजाकार या वर्गाकार आधार वाला सम लंब पिरामिड)",
      "Trigonometric ratios & Complementary angles (त्रिकोणमितीय अनुपात और पूरक कोण)", 
      "Height and distances (ऊंचाई और दूरी)", "Standard Identities (मानक सर्वसमिकाएं)",
      "Use of Tables and Graphs (टेबल और ग्राफ का उपयोग)", "Histogram (हिस्टोग्राम)", 
      "Frequency polygon (आवृत्ति बहुभुज)", "Bar-diagram (बार-आरेख)", "Pie-chart (पाई-चार्ट)", 
      "Measures of central tendency (केंद्रीय प्रवृत्ति के उपाय)", "Mean (माध्य)", 
      "Median (माध्यिका)", "Mode (बहुलक)", "Standard deviation (मानक विचलन)", 
      "Calculation of simple probabilities (सरल प्रायिकता की गणना)",
      // Stats paper
      "Primary and Secondary data (प्राथमिक और द्वितीयक डेटा)", "Tabulation of data (डेटा का सारणीकरण)", 
      "Frequency distributions (आवृत्ति वितरण)", "Graphs and charts (ग्राफ और चार्ट)", 
      "Methods of data collection (डेटा संग्रह के तरीके)", "Diagrammatic presentation of frequency distributions (आवृत्ति वितरण की आरेखीय प्रस्तुति)",
      "Common measures: mean, median and mode (सामान्य उपाय: माध्य, माध्यिका और बहुलक)", 
      "Partition values: quartiles, deciles, percentiles (विभाजन मूल्य: चतुर्थक, दशमक, प्रतिशतक)",
      "Range, quartile deviations, mean deviation and standard deviation (सीमा, चतुर्थक विचलन, माध्य विचलन और मानक विचलन)", 
      "Measures of relative dispersion (सापेक्ष फैलाव के उपाय)",
      "Different types of moments and their relationship (विभिन्न प्रकार के क्षण और उनका संबंध)", 
      "Meaning of skewness and kurtosis (विषमता और कर्टोसिस का अर्थ)", 
      "Different measures of skewness and kurtosis (विषमता और कर्टोसिस के विभिन्न उपाय)",
      "Scatter diagram (स्कैटर आरेख)", "Simple correlation coefficient (सरल सहसंबंध गुणांक)", 
      "Simple regression lines (सरल प्रतिगमन रेखाएं)", "Spearman's rank correlation (स्पीयरमैन का रैंक सहसंबंध)", 
      "Measures of association of attributes (विशेषताओं के जुड़ाव के उपाय)", "Multiple regression (एकाधिक प्रतिगमन)", 
      "Multiple and partial correlation (एकाधिक और आंशिक सहसंबंध)",
      "Meaning of probability (प्रायिकता का अर्थ)", "Different definitions of probability (प्रायिकता की विभिन्न परिभाषाएं)", 
      "Conditional probability (सशर्त प्रायिकता)", "Compound probability (यौगिक प्रायिकता)", 
      "Independent events (स्वतंत्र घटनाएँ)", "Bayes' theorem (बेयस का प्रमेय)",
      "Random variable (यादृच्छिक चर)", "Probability functions (प्रायिकता फलन)", 
      "Expectation and Variance (अपेक्षा और विचरण)", "Higher moments of a random variable (उच्च क्षण)", 
      "Binomial, Poisson, Normal and Exponential distributions (द्विपद, पॉइसन, सामान्य और घातीय वितरण)", 
      "Joint distribution of two random variable (दो यादृच्छिक चर का संयुक्त वितरण)",
      "Concept of population and sample (जनसंख्या और नमूने की अवधारणा)", "Parameter and statistic (पैरामीटर और सांख्यिकी)", 
      "Sampling and non-sampling errors (नमूनाकरण और गैर-नमूनाकरण त्रुटियां)", 
      "Probability and non-probability sampling techniques (प्रायिकता और गैर-प्रायिकता नमूनाकरण तकनीकें)", 
      "Sampling distribution (नमूनाकरण वितरण)", "Sample size decisions (नमूना आकार के निर्णय)",
      "Point estimation and interval estimation (बिंदु अनुमान और अंतराल अनुमान)", "Properties of a good estimator (एक अच्छे अनुमानक के गुण)", 
      "Methods of estimation (अनुमान के तरीके)", "Testing of hypothesis, Basic concept (परिकल्पना का परीक्षण, मूल अवधारणा)", 
      "Small and large sample tests (छोटे और बड़े नमूने के परीक्षण)", "Tests based on Z, t, Chi-square and F statistic (Z, t, ची-स्क्वायर और F सांख्यिकी परीक्षण)", 
      "Confidence intervals (विश्वास अंतराल)",
      "Analysis of one-way and two-way classified data (एक-तरफ़ा और दो-तरफ़ा वर्गीकृत डेटा का विश्लेषण)", 
      "Components of time series (समय श्रृंखला के घटक)", "Determination of trend components (प्रवृत्ति घटकों का निर्धारण)", 
      "Measurement of seasonal variation (मौसमी भिन्नता का मापन)",
      "Meaning of Index Numbers (सूचकांक संख्याओं का अर्थ)", "Problems in the construction of index numbers (निर्माण में समस्याएं)", 
      "Types of index number, Different formulae (प्रकार और विभिन्न सूत्र)", "Base shifting and splicing (बेस शिफ्टिंग और स्प्लिसिंग)", 
      "Cost of living Index Numbers (जीवन निर्वाह सूचकांक संख्या)", "Uses of Index Numbers (सूचकांक संख्याओं के उपयोग)"
    ].includes(topic);

    if (isEnglish) return <SscEnglishNotes />;
    if (isReasoning) return <SscReasoningNotes topic={topic} />;
    if (isMathsOrStats) return <SscQuantitativeAptitudeNotes topic={topic} />;
    
    // Everything else maps to General Awareness / Computer Basics
    return <SscGeneralAwarenessNotes topic={topic} />;
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-4 border border-emerald-500/20">
          SSC Exams
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4">
          SSC CGL Syllabus (Tier 1 & Tier 2)
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Complete and highly detailed bilingual (English & Hindi) syllabus for Staff Selection Commission Combined Graduate Level (SSC CGL) Exam.
          Unlock your preparation with high-yield interactive study notes.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-emerald-500/25">
          Start Mock Test
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 font-semibold hover:bg-slate-700 transition-colors">
          Download PDF
        </button>
      </div>

      {/* Syllabus Grid */}
      <div className="space-y-8">
        {syllabusData.map((section, idx) => (
          <div key={idx} className="glass-panel hover:border-emerald-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-4">
              {section.title}
            </h2>
            
            {/* Handle Sections with Subtopics */}
            {section.subSections ? (
              <div className="space-y-8">
                {section.subSections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h3 className="text-lg font-medium text-emerald-305 border-l-2 border-emerald-500 pl-3">{sub.subtitle}</h3>
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
                              className={`flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-emerald-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group ${
                                hasNotes 
                                  ? 'cursor-pointer bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/25 hover:border-emerald-500/40 text-emerald-200 font-medium' 
                                  : 'cursor-default hover:bg-emerald-500/5 hover:translate-x-1'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                                hasNotes 
                                  ? 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.4)]' 
                                  : 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white'
                              }`}>
                                {(tIdx + 1).toString().padStart(2, '0')}
                              </div>
                              <span className={`font-medium transition-colors ${
                                hasNotes ? 'text-emerald-200 group-hover:text-slate-50 font-semibold' : 'group-hover:text-slate-100'
                              }`}>{topic}</span>
                              
                              {hasNotes && (
                                <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)] font-semibold select-none group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                  {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
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
                        className={`flex items-center gap-4 px-4 py-3 bg-[#0f172a]/45 border border-white/5 hover:border-emerald-500/20 rounded-xl text-slate-300 text-sm md:text-base transition-all duration-300 group ${
                          hasNotes 
                            ? 'cursor-pointer bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/25 hover:border-emerald-500/40 text-emerald-200 font-medium' 
                            : 'cursor-default hover:bg-emerald-500/5 hover:translate-x-1'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                          hasNotes 
                            ? 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.4)]' 
                            : 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white'
                        }`}>
                          {(tIdx + 1).toString().padStart(2, '0')}
                        </div>
                        <span className={`font-medium transition-colors ${
                          hasNotes ? 'text-emerald-200 group-hover:text-slate-50 font-semibold' : 'group-hover:text-slate-100'
                        }`}>{topic}</span>
                        
                        {hasNotes && (
                          <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)] font-semibold select-none group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                            {isExpanded ? "📖 Hide Notes" : "✨ Notes Available"}
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
