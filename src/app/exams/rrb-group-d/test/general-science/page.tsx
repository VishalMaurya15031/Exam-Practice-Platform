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
    title: "RRB Group D General Science Mock Test - 1",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) What is the SI unit of Force? / बल का SI मात्रक क्या है?", options: ["Newton (न्यूटन)", "Joule (जूल)", "Watt (वाट)", "Pascal (पास्कल)"], correct: "Newton (न्यूटन)", category: "Easy" },
      { id: 2, text: "(Chemistry) What is the chemical formula of common salt? / साधारण नमक का रासायनिक सूत्र क्या है?", options: ["NaCl", "NaHCO3", "Na2CO3", "HCl"], correct: "NaCl", category: "Easy" },
      { id: 3, text: "(Biology) Which cell organelle is known as the powerhouse of the cell? / किस कोशिकांग को कोशिका का पावरहाउस कहा जाता है?", options: ["Mitochondria (माइटोकॉन्ड्रिया)", "Ribosome (राइबोसोम)", "Lysosome (लाइसोसोम)", "Golgi Body (गोल्गी काय)"], correct: "Mitochondria (माइटोकॉन्ड्रिया)", category: "Easy" },
      { id: 4, text: "(Physics) The speed of sound is maximum in which of the following? / ध्वनि की गति निम्नलिखित में से किसमें अधिकतम होती है?", options: ["Solids (ठोस में - जैसे Steel)", "Liquids (द्रव में - जैसे Water)", "Gases (गैस में - जैसे Air)", "Vacuum (निर्वात में)"], correct: "Solids (ठोस में - जैसे Steel)", category: "Easy" },
      { id: 5, text: "(Chemistry) What is the pH value of pure water? / शुद्ध जल का pH मान क्या होता है?", options: ["7", "6", "8", "0"], correct: "7", category: "Easy" },
      { id: 6, text: "(Biology) Which vitamin is also known as Ascorbic acid? / किस विटामिन को एस्कॉर्बिक एसिड भी कहा जाता है?", options: ["Vitamin C", "Vitamin A", "Vitamin B12", "Vitamin D"], correct: "Vitamin C", category: "Easy" },
      { id: 7, text: "(Physics) Which instrument is used to measure blood pressure? / रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?", options: ["Sphygmomanometer (स्फिग्मोमैनोमीटर)", "Barometer (बैरोमीटर)", "Hydrometer (हाइड्रोमीटर)", "Thermometer (थर्मामीटर)"], correct: "Sphygmomanometer (स्फिग्मोमैनोमीटर)", category: "Easy" },
      { id: 8, text: "(Chemistry) Which is the lightest element in the periodic table? / आवर्त सारणी का सबसे हल्का तत्व कौन सा है?", options: ["Hydrogen (हाइड्रोजन)", "Helium (हीलियम)", "Lithium (लिथियम)", "Oxygen (ऑक्सीजन)"], correct: "Hydrogen (हाइड्रोजन)", category: "Easy" },
      { id: 9, text: "(Biology) The red color of human blood is due to the presence of: / मानव रक्त का लाल रंग किसकी उपस्थिति के कारण होता है?", options: ["Hemoglobin (हीमोग्लोबिन)", "Myoglobin (मायोग्लोबिन)", "Melanin (मेलेनिन)", "Chlorophyll (क्लोरोफिल)"], correct: "Hemoglobin (हीमोग्लोबिन)", category: "Easy" },
      { id: 10, text: "(Physics) The law of conservation of energy states that: / ऊर्जा संरक्षण का नियम क्या कहता है?", options: ["Energy can neither be created nor destroyed (ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है)", "Energy can be destroyed (ऊर्जा को नष्ट किया जा सकता है)", "Total energy of universe changes (ब्रह्मांड की कुल ऊर्जा बदलती रहती है)", "None of these"], correct: "Energy can neither be created nor destroyed (ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है)", category: "Easy" },
      { id: 11, text: "(Physics) What is the weight of an object of mass 10 kg on the surface of Earth? (Take g = 9.8 m/s²) / पृथ्वी की सतह पर 10 किलोग्राम द्रव्यमान वाली वस्तु का भार क्या होगा?", options: ["98 N", "10 N", "9.8 N", "100 N"], correct: "98 N", category: "Medium" },
      { id: 12, text: "(Chemistry) Which gas is filled inside an electric bulb to prevent oxidation? / ऑक्सीकरण को रोकने के लिए विद्युत बल्ब के भीतर कौन सी गैस भरी होती है?", options: ["Nitrogen or Argon (नाइट्रोजन या आर्गन)", "Oxygen (ऑक्सीजन)", "Hydrogen (हाइड्रोजन)", "Carbon dioxide (कार्बन डाइऑक्साइड)"], correct: "Nitrogen or Argon (नाइट्रोजन या आर्गन)", category: "Medium" },
      { id: 13, text: "(Biology) Which blood group is known as the universal donor? / किस रक्त समूह को सार्वभौमिक दाता (Universal Donor) कहा जाता है?", options: ["O negative (O-)", "AB positive (AB+)", "O positive (O+)", "A negative (A-)"], correct: "O negative (O-)", category: "Medium" },
      { id: 14, text: "(Physics) A concave mirror forms a virtual, erect, and magnified image when the object is placed: / एक अवतल दर्पण एक आभासी, सीधी और आवर्धित छवि बनाता है जब वस्तु को रखा जाता है:", options: ["Between Focus and Pole (फोकस और ध्रुव के बीच)", "At Focus (फोकस पर)", "At Center of Curvature (वक्रता केंद्र पर)", "Beyond Center of Curvature (वक्रता केंद्र से परे)"], correct: "Between Focus and Pole (फोकस और ध्रुव के बीच)", category: "Medium" },
      { id: 15, text: "(Chemistry) The Modern Periodic Table is based on which property? / आधुनिक आवर्त सारणी किस गुण पर आधारित है?", options: ["Atomic Number (परमाणु क्रमांक)", "Atomic Mass (परमाणु द्रव्यमान)", "Valency (संयोजकता)", "Metallic Character (धात्विक लक्षण)"], correct: "Atomic Number (परमाणु क्रमांक)", category: "Medium" },
      { id: 16, text: "(Biology) Which plant hormone is responsible for fruit ripening? / कौन सा पादप हार्मोन फलों के पकने के लिए जिम्मेदार है?", options: ["Ethylene (एथिलीन)", "Auxin (ऑक्सिन)", "Gibberellin (जिबरेलिन)", "Cytokinin (साइटोकाइनिन)"], correct: "Ethylene (एथिलीन)", category: "Medium" },
      { id: 17, text: "(Physics) What is the equivalent resistance when three resistors of 6Ω each are connected in parallel? / जब 6Ω के तीन प्रतिरोधों को समानांतर क्रम में जोड़ा जाता है, तो समतुल्य प्रतिरोध क्या होगा?", options: ["2Ω", "18Ω", "3Ω", "1Ω"], correct: "2Ω", category: "Medium" },
      { id: 18, text: "(Chemistry) Baking soda is chemically known as: / बेकिंग सोडा को रासायनिक रूप से किस नाम से जाना जाता है?", options: ["Sodium bicarbonate (सोडियम बाइकार्बोनेट)", "Sodium carbonate (सोडियम कार्बोनेट)", "Calcium chloride (कैल्शियम क्लोराइड)", "Sodium hydroxide (सोडियम हाइड्रोक्साइड)"], correct: "Sodium bicarbonate (सोडियम बाइकार्बोनेट)", category: "Medium" },
      { id: 19, text: "(Biology) The breakdown of glucose in the absence of oxygen is called: / ऑक्सीजन की अनुपस्थिति में ग्लूकोज के टूटने को क्या कहा जाता है?", options: ["Anaerobic respiration (अवायवीय श्वसन)", "Aerobic respiration (वायवीय श्वसन)", "Photosynthesis (प्रकाश संश्लेषण)", "Fermentation (किण्वन)"], correct: "Anaerobic respiration (अवायवीय श्वसन)", category: "Medium" },
      { id: 20, text: "(Physics) What is the focal length of a lens with power +2.0 Diopter? / +2.0 डायोप्टर क्षमता वाले लेंस की फोकस दूरी क्या होगी?", options: ["+0.5 m", "+2.0 m", "-0.5 m", "-2.0 m"], correct: "+0.5 m", category: "Medium" },
      { id: 21, text: "(Physics) An object of mass 2 kg is thrown vertically upwards with an initial velocity of 20 m/s. What will be its kinetic energy after 1 second? (Take g = 10 m/s²) / 2 किलोग्राम द्रव्यमान की एक वस्तु को 20 मीटर/सेकंड के प्रारंभिक वेग से लंबवत ऊपर की ओर फेंका जाता है। 1 सेकंड के बाद उसकी गतिज ऊर्जा क्या होगी?", options: ["100 J", "200 J", "400 J", "50 J"], correct: "100 J", category: "Hard" },
      { id: 22, text: "(Chemistry) What is the IUPAC name of the compound CH3-CH2-OH? / यौगिक CH3-CH2-OH का IUPAC नाम क्या है?", options: ["Ethanol (एथेनॉल)", "Methanol (मेथनॉल)", "Ethanal (एथेनल)", "Propanol (प्रोपेनॉल)"], correct: "Ethanol (एथेनॉल)", category: "Hard" },
      { id: 23, text: "(Biology) Which part of the human brain controls involuntary actions like heartbeat and respiration? / मानव मस्तिष्क का कौन सा भाग दिल की धड़कन और श्वसन जैसी अनैच्छिक क्रियाओं को नियंत्रित करता है?", options: ["Medulla Oblongata (मेडुला ऑब्वलागेटा)", "Cerebrum (प्रमस्तिष्क)", "Cerebellum (अनुमस्तिष्क)", "Pons (पोंस)"], correct: "Medulla Oblongata (मेडुला ऑब्वलागेटा)", category: "Hard" },
      { id: 24, text: "(Physics) According to Snell's law, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant, which is known as: / स्नेल के नियम के अनुसार, आपतन कोण की ज्या और अपवर्तन कोण की ज्या का अनुपात स्थिर होता है, जिसे किस रूप में जाना जाता है?", options: ["Refractive Index (अपवर्तनांक)", "Critical Angle (क्रांतिक कोण)", "Focal Length (फोकस दूरी)", "Dispersion (विक्षेपण)"], correct: "Refractive Index (अपवर्तनांक)", category: "Hard" },
      { id: 25, text: "(Chemistry) Which element has the highest electronegativity in the periodic table? / आवर्त सारणी में किस तत्व की विद्युत ऋणात्मकता (Electronegativity) सबसे अधिक होती है?", options: ["Fluorine (फ्लोरीन)", "Oxygen (ऑक्सीजन)", "Chlorine (क्लोरीन)", "Nitrogen (नाइट्रोजन)"], correct: "Fluorine (फ्लोरीन)", category: "Hard" },
      { id: 26, text: "(Biology) The genetic material DNA is primarily located in which organelle? / आनुवंशिक पदार्थ DNA मुख्य रूप से किस कोशिकांग में स्थित होता है?", options: ["Nucleus (केंद्रक)", "Ribosome (राइबोसोम)", "Lysosome (लाइसोसोम)", "Cytoplasm (कोशिका द्रव्य)"], correct: "Nucleus (केंद्रक)", category: "Hard" },
      { id: 27, text: "(Physics) If the distance between two masses is doubled, the gravitational force between them becomes: / यदि दो द्रव्यमानों के बीच की दूरी दोगुनी कर दी जाए, तो उनके बीच का गुरुत्वाकर्षण बल हो जाएगा:", options: ["One-fourth (एक-चौथाई)", "Double (दुगुना)", "Half (आधा)", "Four times (चार गुना)"], correct: "One-fourth (एक-चौथाई)", category: "Hard" },
      { id: 28, text: "(Chemistry) The process of heating sulfide ores in the presence of excess air to convert them into oxides is called: / सल्फाइड अयस्कों को हवा की अधिकता में गर्म करके ऑक्साइड में बदलने की प्रक्रिया क्या कहलाती है?", options: ["Roasting (भर्जन)", "Calcination (निस्तापन)", "Smelting (प्रगलन)", "Refining (शोधन)"], correct: "Roasting (भर्जन)", category: "Hard" },
      { id: 29, text: "(Biology) Nephron is the basic structural and functional unit of which organ? / नेफ्रॉन किस अंग की बुनियादी संरचनात्मक और कार्यात्मक इकाई है?", options: ["Kidney (गुर्दा / वृक्क)", "Liver (यकृत)", "Lungs (फेफड़े)", "Heart (हृदय)"], correct: "Kidney (गुर्दा / वृक्क)", category: "Hard" },
      { id: 30, text: "(Chemistry) Which type of bonding is present in a water molecule (H2O)? / जल के अणु (H2O) में किस प्रकार का आबंध मौजूद होता है?", options: ["Polar Covalent Bonding (ध्रुवीय सहसंयोजक आबंध)", "Ionic Bonding (आयनिक आबंध)", "Hydrogen Bonding (केवल हाइड्रोजन आबंध)", "Metallic Bonding (धात्विक आबंध)"], correct: "Polar Covalent Bonding (ध्रुवीय सहसंयोजक आबंध)", category: "Hard" }
    ]
  },
  {
    id: 2,
    title: "RRB Group D General Science Mock Test - 2",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) The rate of change of momentum of an object is proportional to: / किसी वस्तु के संवेग परिवर्तन की दर किसके समानुपाती होती है?", options: ["Applied Force (लागू बल)", "Velocity (वेग)", "Acceleration (त्वरण)", "Mass (द्रव्यमान)"], correct: "Applied Force (लागू बल)", category: "Easy" },
      { id: 2, text: "(Chemistry) Which acid is present in lemon? / नींबू में कौन सा अम्ल मौजूद होता है?", options: ["Citric acid (साइट्रिक अम्ल)", "Acetic acid (एसिटिक अम्ल)", "Tartaric acid (टार्टरिक अम्ल)", "Formic acid (फॉर्मिक अम्ल)"], correct: "Citric acid (साइट्रिक अम्ल)", category: "Easy" },
      { id: 3, text: "(Biology) What is the structural and functional unit of life? / जीवन की संरचनात्मक और कार्यात्मक इकाई क्या है?", options: ["Cell (कोशिका)", "Tissue (ऊतक)", "Organ (अंग)", "DNA"], correct: "Cell (कोशिका)", category: "Easy" },
      { id: 4, text: "(Physics) The phenomena of split of white light into its component colors is called: / श्वेत प्रकाश के उसके घटक रंगों में विभाजित होने की घटना क्या कहलाती है?", options: ["Dispersion (विक्षेपण)", "Reflection (परावर्तन)", "Refraction (अपवर्तन)", "Scattering (प्रकीर्णन)"], correct: "Dispersion (विक्षेपण)", category: "Easy" },
      { id: 5, text: "(Chemistry) What is the chemical formula of rust? / जंग का रासायनिक सूत्र क्या है?", options: ["Fe2O3.xH2O", "Fe3O4", "FeO", "Fe(OH)3"], correct: "Fe2O3.xH2O", category: "Easy" },
      { id: 6, text: "(Biology) Scurvy is caused due to deficiency of: / स्कर्वी रोग किस विटामिन की कमी के कारण होता है?", options: ["Vitamin C", "Vitamin A", "Vitamin B", "Vitamin D"], correct: "Vitamin C", category: "Easy" },
      { id: 7, text: "(Physics) Which instrument measures electrical current? / कौन सा उपकरण विद्युत धारा को मापता है?", options: ["Ammeter (एमीटर)", "Voltmeter (वोल्टमीटर)", "Galvanometer (गैल्वेनोमीटर)", "Multimeter (मल्टीमीटर)"], correct: "Ammeter (एमीटर)", category: "Easy" },
      { id: 8, text: "(Chemistry) Which gas is also known as laughing gas? / किस गैस को लाफिंग गैस (हंसाने वाली गैस) भी कहा जाता है?", options: ["Nitrous oxide (नाइट्रस ऑक्साइड)", "Nitric oxide (नाइट्रिक ऑक्साइड)", "Nitrogen dioxide (नाइट्रोजन डाइऑक्साइड)", "Ammonia (अमोनिया)"], correct: "Nitrous oxide (नाइट्रस ऑक्साइड)", category: "Easy" },
      { id: 9, text: "(Biology) Normal blood pressure of a healthy human is: / एक स्वस्थ मनुष्य का सामान्य रक्तचाप कितना होता है?", options: ["120/80 mm Hg", "140/90 mm Hg", "100/60 mm Hg", "150/100 mm Hg"], correct: "120/80 mm Hg", category: "Easy" },
      { id: 10, text: "(Physics) Universal law of gravitation was given by: / गुरुत्वाकर्षण का सार्वभौमिक नियम किसके द्वारा दिया गया था?", options: ["Isaac Newton (आइजैक न्यूटन)", "Albert Einstein (अल्बर्ट आइंस्टीन)", "Galileo Galilei (गैलीलियो गैलीली)", "Johannes Kepler (जोहान्स केप्लर)"], correct: "Isaac Newton (आइजैक न्यूटन)", category: "Easy" },
      { id: 11, text: "(Physics) What will be the kinetic energy of a body of mass 2 kg moving with a velocity of 5 m/s? / 5 मीटर/सेकंड के वेग से चल रहे 2 किलोग्राम द्रव्यमान वाले पिंड की गतिज ऊर्जा क्या होगी?", options: ["25 J", "50 J", "10 J", "12.5 J"], correct: "25 J", category: "Medium" },
      { id: 12, text: "(Chemistry) Bleaching powder is chemically known as: / ब्लीचिंग पाउडर को रासायनिक रूप से किस नाम से जाना जाता है?", options: ["Calcium oxychloride (कैल्शियम ऑक्सीक्लोराइड)", "Calcium carbonate (कैल्शियम कार्बोनेट)", "Calcium hydroxide (कैल्शियम हाइड्रोक्साइड)", "Sodium chloride (सोडियम क्लोराइड)"], correct: "Calcium oxychloride (कैल्शियम ऑक्सीक्लोराइड)", category: "Medium" },
      { id: 13, text: "(Biology) Which endocrine gland is also known as the master gland? / किस अंतःस्रावी ग्रंथि को मास्टर ग्रंथि भी कहा जाता है?", options: ["Pituitary Gland (पीयूष ग्रंथि)", "Thyroid Gland (थायरॉयड ग्रंथि)", "Adrenal Gland (अधिवृक्क ग्रंथि)", "Pancreas (अग्नाशय)"], correct: "Pituitary Gland (पीयूष ग्रंथि)", category: "Medium" },
      { id: 14, text: "(Physics) Convex lens is used to correct which eye defect? / हाइपरमेट्रोपिया (दूर-दृष्टि दोष) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?", options: ["Convex Lens (उत्तल लेंस)", "Concave Lens (अवलत लेंस)", "Bifocal Lens (द्वि-फोकसी लेंस)", "Cylindrical Lens (बेलनाकार लेंस)"], correct: "Convex Lens (उत्तल लेंस)", category: "Medium" },
      { id: 15, text: "(Chemistry) The process of turning gas directly into solid is called: / गैस को सीधे ठोस में बदलने की प्रक्रिया क्या कहलाती है?", options: ["Deposition (निक्षेपण)", "Sublimation (उर्ध्वपातन)", "Condensation (संघनन)", "Evaporation (वाष्पीकरण)"], correct: "Deposition (निक्षेपण)", category: "Medium" },
      { id: 16, text: "(Biology) Which part of plant is responsible for transport of water? / पौधों का कौन सा भाग जल के परिवहन के लिए जिम्मेदार होता है?", options: ["Xylem (जाइलम)", "Phloem (फ्लोएम)", "Stomata (रंध्र)", "Root hair (जड़ के बाल)"], correct: "Xylem (जाइलम)", category: "Medium" },
      { id: 17, text: "(Physics) The power of a lens is -4.0 D. What is its focal length and type? / एक लेंस की क्षमता -4.0 D है। इसकी फोकस दूरी और प्रकार क्या है?", options: ["-25 cm, Concave (अवलत लेंस)", "+25 cm, Convex (उत्तल लेंस)", "-4 m, Concave (अवलत लेंस)", "+4 m, Convex (उत्तल लेंस)"], correct: "-25 cm, Concave (अवलत लेंस)", category: "Medium" },
      { id: 18, text: "(Chemistry) Plaster of Paris is made from: / प्लास्टर ऑफ पेरिस किससे बनाया जाता है?", options: ["Gypsum (जिप्सम)", "Bauxite (बॉक्साइट)", "Limestone (चूना पत्थर)", "Slaked lime (बुझा हुआ चूना)"], correct: "Gypsum (जिप्सम)", category: "Medium" },
      { id: 19, text: "(Biology) Which organ is affected in Hepatitis disease? / हेपेटाइटिस रोग में कौन सा अंग प्रभावित होता है?", options: ["Liver (यकृत)", "Lungs (फेफड़े)", "Kidney (वृक्क)", "Heart (हृदय)"], correct: "Liver (यकृत)", category: "Medium" },
      { id: 20, text: "(Physics) The resistance of a conductor is inversely proportional to its: / किसी चालक का प्रतिरोध उसके किसके व्युत्क्रमानुपाती (Inversely proportional) होता है?", options: ["Area of cross-section (अनुप्रस्थ काट का क्षेत्रफल)", "Length (लंबाई)", "Resistivity (प्रतिरोधकता)", "Temperature (तापमान)"], correct: "Area of cross-section (अनुप्रस्थ काट का क्षेत्रफल)", category: "Medium" },
      { id: 21, text: "(Physics) If the velocity of a moving object is doubled, its kinetic energy becomes: / यदि किसी गतिशील वस्तु का वेग दोगुना कर दिया जाए, तो उसकी गतिज ऊर्जा हो जाएगी:", options: ["Four times (चार गुना)", "Double (दुगुनी)", "Half (आधी)", "Eight times (आठ गुना)"], correct: "Four times (चार गुना)", category: "Hard" },
      { id: 22, text: "(Chemistry) What is the chemical name of Vinegar? / सिरके का रासायनिक नाम क्या है?", options: ["Acetic acid (एसिटिक अम्ल)", "Citric acid (साइट्रिक अम्ल)", "Methanoic acid (मेथेनोइक अम्ल)", "Tartaric acid (टार्टरिक अम्ल)"], correct: "Acetic acid (एसिटिक अम्ल)", category: "Hard" },
      { id: 23, text: "(Biology) What is the respiratory pigment in human beings? / मनुष्यों में श्वसन वर्णक (Respiratory Pigment) कौन सा है?", options: ["Hemoglobin (हीमोग्लोबिन)", "Chlorophyll (क्लोरोफिल)", "Melanin (मेलेनिन)", "Bilirubin (बिलीरुबिन)"], correct: "Hemoglobin (हीमोग्लोबिन)", category: "Hard" },
      { id: 24, text: "(Physics) The critical angle for a medium is 45°. What is its refractive index? / किसी माध्यम के लिए क्रांतिक कोण 45° है। इसका अपवर्तनांक क्या होगा?", options: ["√2 (लगभग 1.41)", "1.5", "2", "1.33"], correct: "√2 (लगभग 1.41)", category: "Hard" },
      { id: 25, text: "(Chemistry) Thermite reaction is the reaction between iron oxide and which element? / थर्माइट अभिक्रिया आयरन ऑक्साइड और किस तत्व के बीच की अभिक्रिया है?", options: ["Aluminum (एल्युमिनियम)", "Copper (तांबा)", "Zinc (जस्ता)", "Magnesium (मैग्नीशियम)"], correct: "Aluminum (एल्युमिनियम)", category: "Hard" },
      { id: 26, text: "(Biology) Double fertilization is a characteristic feature of: / दोहरा निषेचन (Double Fertilization) किसकी एक विशिष्ट विशेषता है?", options: ["Angiosperms (आवृतबीजी)", "Gymnosperms (अनावृतबीजी)", "Pteridophytes (टेरिडोफाइट्स)", "Bryophytes (ब्रायोफाइट्स)"], correct: "Angiosperms (आवृतबीजी)", category: "Hard" },
      { id: 27, text: "(Physics) An electric kettle consumes 1 kW of electric power when operated at 220 V. A fuse wire of what rating must be used? / एक विद्युत केतली 220 V पर संचालित होने पर 1 kW विद्युत शक्ति की खपत करती है। किस रेटिंग के फ्यूज तार का उपयोग किया जाना चाहिए?", options: ["5 A", "3 A", "2 A", "10 A"], correct: "5 A", category: "Hard" },
      { id: 28, text: "(Chemistry) Which gas is evolved when zinc granules react with dilute sulfuric acid? / जब जिंक के दानों की तनु सल्फ्यूरिक अम्ल के साथ अभिक्रिया कराई जाती है, तो कौन सी गैस निकलती है?", options: ["Hydrogen (हाइड्रोजन)", "Oxygen (ऑक्सीजन)", "Sulfur dioxide (सल्फर डाइऑक्साइड)", "Hydrogen sulfide (हाइड्रोजन सल्फाइड)"], correct: "Hydrogen (हाइड्रोजन)", category: "Hard" },
      { id: 29, text: "(Biology) The oxygenated blood from the lungs enters which chamber of the human heart? / फेफड़ों से ऑक्सीजन युक्त रक्त मानव हृदय के किस कक्ष में प्रवेश करता है?", options: ["Left Atrium (बायां अलिंद)", "Right Atrium (दायां अलिंद)", "Left Ventricle (बायां निलय)", "Right Ventricle (दायां निलय)"], correct: "Left Atrium (बायां अलिंद)", category: "Hard" },
      { id: 30, text: "(Chemistry) Acid rain is caused due to the pollution of atmosphere by: / अम्लीय वर्षा वायुमंडल में किसके प्रदूषण के कारण होती है?", options: ["Oxides of Nitrogen and Sulfur (नाइट्रोजन और सल्फर के ऑक्साइड)", "Carbon dioxide and Carbon monoxide", "Ozone and Dust", "Methane and Chlorine"], correct: "Oxides of Nitrogen and Sulfur (नाइट्रोजन और सल्फर के ऑक्साइड)", category: "Hard" }
    ]
  },
  {
    id: 3,
    title: "RRB Group D General Science Mock Test - 3",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) What is the unit of power? / शक्ति (Power) का मात्रक क्या है?", options: ["Watt (वाट)", "Volt (वोल्ट)", "Ohm (ओम)", "Joule (जूल)"], correct: "Watt (वाट)", category: "Easy" },
      { id: 2, text: "(Chemistry) Which element is present in all organic compounds? / सभी कार्बनिक यौगिकों में कौन सा तत्व अनिवार्य रूप से उपस्थित होता है?", options: ["Carbon (कार्बन)", "Hydrogen (हाइड्रोजन)", "Oxygen (ऑक्सीजन)", "Nitrogen (नाइट्रोजन)"], correct: "Carbon (कार्बन)", category: "Easy" },
      { id: 3, text: "(Biology) Which blood cells protect our body from pathogens? / कौन सी रक्त कोशिकाएं हमारे शरीर को रोगाणुओं से बचाती हैं?", options: ["White Blood Cells (श्वेत रक्त कोशिकाएं - WBC)", "Red Blood Cells (लाल रक्त कोशिकाएं - RBC)", "Platelets (प्लेटलेट्स)", "Plasma (प्लाज्मा)"], correct: "White Blood Cells (श्वेत रक्त कोशिकाएं - WBC)", category: "Easy" },
      { id: 4, text: "(Physics) Rainbow is formed due to: / इंद्रधनुष किसके कारण बनता है?", options: ["Refraction, Dispersion and Total Internal Reflection", "Only Reflection", "Only Refraction", "Only Scattering"], correct: "Refraction, Dispersion and Total Internal Reflection", category: "Easy" },
      { id: 5, text: "(Chemistry) What is the chemical name of dry ice? / सूखी बर्फ (Dry Ice) का रासायनिक नाम क्या है?", options: ["Solid Carbon Dioxide (ठोस कार्बन डाइऑक्साइड)", "Liquid Nitrogen (तरल नाइट्रोजन)", "Solid Hydrogen", "Ice made from heavy water"], correct: "Solid Carbon Dioxide (ठोस Carbon Dioxide)", category: "Easy" },
      { id: 6, text: "(Biology) Goitre disease is caused due to deficiency of: / घेंघा (Goitre) रोग किसकी कमी के कारण होता है?", options: ["Iodine (आयोडीन)", "Iron (लोहा)", "Calcium (कैल्शियम)", "Vitamin A"], correct: "Iodine (आयोडीन)", category: "Easy" },
      { id: 7, text: "(Physics) What is the unit of electric resistance? / विद्युत प्रतिरोध (Resistance) का मात्रक क्या है?", options: ["Ohm (ओम)", "Ampere (एमीटर)", "Volt (वोल्ट)", "Farad (फैराड)"], correct: "Ohm (ओम)", category: "Easy" },
      { id: 8, text: "(Chemistry) Which metal is kept immersed in kerosene oil to prevent catching fire? / किस धातु को आग पकड़ने से रोकने के लिए मिट्टी के तेल (Kerosene) में डुबोकर रखा जाता है?", options: ["Sodium (सोडियम)", "Potassium (पोटैशियम)", "Iron (लोहा)", "Copper (तांबा)"], correct: "Sodium (सोडियम)", category: "Easy" },
      { id: 9, text: "(Biology) Which pigment gives green color to plant leaves? / पौधों की पत्तियों को हरा रंग कौन सा वर्णक प्रदान करता है?", options: ["Chlorophyll (क्लोरोफिल)", "Carotenoid (कैरोटीनॉयड)", "Melanin (मेलेनिन)", "Hemoglobin (हीमोग्लोबिन)"], correct: "Chlorophyll (क्लोरोफिल)", category: "Easy" },
      { id: 10, text: "(Physics) The focal length of a plane mirror is: / समतल दर्पण की फोकस दूरी क्या होती है?", options: ["Infinite (अनंत)", "Zero (शून्य)", "25 cm", "-25 cm"], correct: "Infinite (अनंत)", category: "Easy" },
      { id: 11, text: "(Physics) Sound waves are which type of waves? / ध्वनि तरंगें किस प्रकार की तरंगें होती हैं?", options: ["Mechanical Longitudinal Waves (यांत्रिक अनुदैर्ध्य तरंगें)", "Electromagnetic Waves (विद्युत चुंबकीय तरंगें)", "Mechanical Transverse Waves (यांत्रिक अनुप्रस्थ तरंगें)", "Non-mechanical Waves"], correct: "Mechanical Longitudinal Waves (यांत्रिक अनुदैर्ध्य तरंगें)", category: "Medium" },
      { id: 12, text: "(Chemistry) Liquid metal at room temperature is: / कमरे के तापमान पर तरल अवस्था में रहने वाली धातु कौन सी है?", options: ["Mercury (पारा)", "Bromine (ब्रोमीन)", "Gallium (गैलियम)", "Cesium (सीजियम)"], correct: "Mercury (पारा)", category: "Medium" },
      { id: 13, text: "(Biology) Bile juice is secreted by which organ? / पित्त रस (Bile Juice) का स्राव किस अंग द्वारा किया जाता है?", options: ["Liver (यकृत)", "Pancreas (अग्नाशय)", "Stomach (आमाशय)", "Gallbladder (पित्ताशय)"], correct: "Liver (यकृत)", category: "Medium" },
      { id: 14, text: "(Physics) An object is placed at a distance of 10 cm in front of a convex lens of focal length 15 cm. The nature of image is: / 15 सेमी फोकस दूरी वाले उत्तल लेंस के सामने 10 सेमी की दूरी पर एक वस्तु रखी गई है। प्रतिबिंब की प्रकृति क्या होगी?", options: ["Virtual and Erect (आभासी और सीधा)", "Real and Inverted (वास्तविक और उलटा)", "Real and Erect (वास्तविक और सीधा)", "Virtual and Inverted"], correct: "Virtual and Erect (आभासी और सीधा)", category: "Medium" },
      { id: 15, text: "(Chemistry) Bronze is an alloy of which metals? / कांसा (Bronze) किन धातुओं की मिश्र धातु है?", options: ["Copper and Tin (तांबा और टिन)", "Copper and Zinc (तांबा और जस्ता)", "Lead and Tin (सीसा और टिन)", "Iron and Carbon"], correct: "Copper and Tin (तांबा और टिन)", category: "Medium" },
      { id: 16, text: "(Biology) Which structure protects the growing plant embryo? / बढ़ते पौधे के भ्रूण को कौन सी संरचना सुरक्षा प्रदान करती है?", options: ["Seed Coat (बीज आवरण)", "Cotyledon (बीजपत्र)", "Endosperm (भ्रूणपोष)", "Plumule (प्रांकुर)"], correct: "Seed Coat (बीज आवरण)", category: "Medium" },
      { id: 17, text: "(Physics) The escape velocity from the surface of Earth is approximately: / पृथ्वी की सतह से पलायन वेग (Escape Velocity) लगभग कितना होता है?", options: ["11.2 km/s", "11.2 m/s", "9.8 km/s", "7.9 km/s"], correct: "11.2 km/s", category: "Medium" },
      { id: 18, text: "(Chemistry) The process of prevention of rusting of iron by coating with zinc is called: / लोहे को जंग से बचाने के लिए उस पर जस्ते की परत चढ़ाने की प्रक्रिया क्या कहलाती है?", options: ["Galvanization (यशदलेपन / गैल्वेनाइजेशन)", "Anodizing (एनोडीकरण)", "Alloying (मिश्रधातु बनाना)", "Electroplating (विद्युतलेपन)"], correct: "Galvanization (यशदलेपन / गैल्वेनाइजेशन)", category: "Medium" },
      { id: 19, text: "(Biology) Which hormone controls blood glucose levels in humans? / मनुष्यों में रक्त ग्लूकोज के स्तर को कौन सा हार्मोन नियंत्रित करता है?", options: ["Insulin (इंसुलिन)", "Glucagon (ग्लूकागन)", "Thyroxin (थायरोक्सिन)", "Adrenaline (एड्रिनेलिन)"], correct: "Insulin (इंसुलिन)", category: "Medium" },
      { id: 20, text: "(Physics) What is the power consumed by a bulb of 100W operated for 10 hours? / 10 घंटे तक संचालित 100W के बल्ब द्वारा कितनी विद्युत ऊर्जा की खपत होगी?", options: ["1 unit (1 kWh)", "10 units (10 kWh)", "0.1 unit (0.1 kWh)", "100 units"], correct: "1 unit (1 kWh)", category: "Medium" },
      { id: 21, text: "(Physics) An electric motor of power 2 HP is operated for 2 hours daily. Find the electrical energy consumed in 30 days. (1 HP = 746 W) / 2 HP की एक इलेक्ट्रिक मोटर रोजाना 2 घंटे चलाई जाती है। 30 दिनों में खपत हुई विद्युत ऊर्जा ज्ञात कीजिए।", options: ["89.52 kWh", "44.76 kWh", "179.04 kWh", "60 kWh"], correct: "89.52 kWh", category: "Hard" },
      { id: 22, text: "(Chemistry) What is the hybridization of carbon in methane (CH4) and ethene (C2H4) respectively? / मीथेन (CH4) और एथीन (C2H4) में कार्बन का संकरण (Hybridization) क्रमशः क्या है?", options: ["sp3, sp2", "sp2, sp3", "sp3, sp", "sp, sp2"], correct: "sp3, sp2", category: "Hard" },
      { id: 23, text: "(Biology) The yellow color of human urine is due to the presence of: / मानव मूत्र का पीला रंग किसकी उपस्थिति के कारण होता है?", options: ["Urochrome (यूरॉक्रोम)", "Bile (पित्त)", "Melanin (मेलेनिन)", "Cholesterol (कोलेस्ट्रॉल)"], correct: "Urochrome (यूरॉक्रोम)", category: "Hard" },
      { id: 24, text: "(Physics) For a glass prism, which color of light deviates the most when passing through it? / कांच के प्रिज्म के लिए, गुजरने पर प्रकाश का कौन सा रंग सबसे अधिक विचलित होता है?", options: ["Violet (बैंगनी)", "Red (लाल)", "Green (हरा)", "Yellow (पीला)"], correct: "Violet (बैंगनी)", category: "Hard" },
      { id: 25, text: "(Chemistry) Which noble gas is radioactive? / कौन सी उत्कृष्ट गैस (Noble Gas) रेडियोधर्मी होती है?", options: ["Radon (रेडॉन)", "Xenon (जेनॉन)", "Krypton (क्रिप्टन)", "Argon (आर्गन)"], correct: "Radon (रेडॉन)", category: "Hard" },
      { id: 26, text: "(Biology) The filtration unit of human kidney is: / मानव वृक्क की निस्पंदन इकाई (Filtration Unit) कौन सी है?", options: ["Nephron (नेफ्रॉन)", "Neuron (न्यूरॉन)", "Ureter (मूत्रवाहिनी)", "Bowman capsule (बोमैन कैप्सूल)"], correct: "Nephron (नेफ्रॉन)", category: "Hard" },
      { id: 27, text: "(Physics) The kinetic energy of an object becomes 9 times its initial value. What happens to its linear momentum? / किसी वस्तु की गतिज ऊर्जा उसके प्रारंभिक मान की 9 गुनी हो जाती है। इसका रैखिक संवेग क्या होगा?", options: ["3 times (3 गुना)", "9 times (9 गुना)", "81 times (81 गुना)", "Unchanged"], correct: "3 times (3 गुना)", category: "Hard" },
      { id: 28, text: "(Chemistry) Which catalyst is used in the hydrogenation of vegetable oils to form vanaspati ghee? / वनस्पति तेलों के हाइड्रोजनीकरण में वनस्पति घी बनाने के लिए किस उत्प्रेरक का उपयोग किया जाता है?", options: ["Nickel (निकेल)", "Platinum (प्लैटिनम)", "Iron (लोहा)", "Copper (तांबा)"], correct: "Nickel (निकेल)", category: "Hard" },
      { id: 29, text: "(Biology) In which part of cell, Krebs cycle takes place? / कोशिका के किस भाग में क्रेब्स चक्र (Krebs Cycle) संपन्न होता है?", options: ["Mitochondria (माइटोकॉन्ड्रिया)", "Cytoplasm (कोशिका द्रव्य)", "Ribosome (राइबोसोम)", "Nucleus (केंद्रक)"], correct: "Mitochondria (माइटोकॉन्ड्रिया)", category: "Hard" },
      { id: 30, text: "(Chemistry) Solder is an alloy of which metals? / सोल्डर (टांका) किन धातुओं की मिश्र धातु है?", options: ["Lead and Tin (सीसा और टिन)", "Copper and Zinc", "Lead and Zinc", "Tin and Copper"], correct: "Lead and Tin (सीसा और टिन)", category: "Hard" }
    ]
  },
  {
    id: 4,
    title: "RRB Group D General Science Mock Test - 4",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) What is the unit of electrical energy? / विद्युत ऊर्जा का व्यावसायिक मात्रक क्या है?", options: ["Kilowatt-hour (kWh) / किलोवाट-घंटा", "Joule (जूल)", "Watt (वाट)", "Volt (वोल्ट)"], correct: "Kilowatt-hour (kWh) / किलोवाट-घंटा", category: "Easy" },
      { id: 2, text: "(Chemistry) Liquid non-metal at room temperature is: / कमरे के तापमान पर तरल अवस्था में रहने वाली अधातु कौन सी है?", options: ["Bromine (ब्रोमीन)", "Mercury (पारा)", "Chlorine (क्लोरीन)", "Iodine (आयोडीन)"], correct: "Bromine (ब्रोमीन)", category: "Easy" },
      { id: 3, text: "(Biology) Which component of blood helps in blood clotting? / रक्त का कौन सा घटक रक्त का थक्का बनाने में मदद करता है?", options: ["Platelets (प्लेटलेट्स)", "Red Blood Cells (RBC)", "White Blood Cells (WBC)", "Plasma (प्लाज्मा)"], correct: "Platelets (प्लेटलेट्स)", category: "Easy" },
      { id: 4, text: "(Physics) The focal length of plane mirror is: / समतल दर्पण की फोकस दूरी होती है:", options: ["Infinity (अनंत)", "Zero (शून्य)", "25 cm", "-25 cm"], correct: "Infinity (अनंत)", category: "Easy" },
      { id: 5, text: "(Chemistry) Carbon exists in which forms on earth? / पृथ्वी पर कार्बन किन रूपों में मौजूद है?", options: ["Diamond, Graphite, Coal (हीरा, ग्रेफाइट, कोयला)", "Only Diamond", "Only Coal", "None of these"], correct: "Diamond, Graphite, Coal (हीरा, ग्रेफाइट, कोयला)", category: "Easy" },
      { id: 6, text: "(Biology) Rickets disease is caused due to deficiency of: / रिकेट्स (सूखा रोग) किस विटामिन की कमी के कारण होता है?", options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"], correct: "Vitamin D", category: "Easy" },
      { id: 7, text: "(Physics) Watt is equal to: / वाट किसके बराबर होता है?", options: ["Joule/second (जूल/सेकंड)", "Joule-second", "Joule", "Watt-second"], correct: "Joule/second (जूल/सेकंड)", category: "Easy" },
      { id: 8, text: "(Chemistry) Vinegar chemically contains: / सिरके में रासायनिक रूप से क्या होता है?", options: ["Acetic acid (एसिटिक अम्ल)", "Citric acid (साइट्रिक अम्ल)", "Formic acid (फॉर्मिक अम्ल)", "Hydrochloric acid (HCl)"], correct: "Acetic acid (एसिटिक अम्ल)", category: "Easy" },
      { id: 9, text: "(Biology) Melanin gives: / मेलेनिन क्या प्रदान करता है?", options: ["Color to skin (त्वचा को रंग)", "Strength to bones (हड्डियों को मजबूती)", "Color to blood (रक्त को रंग)", "None of these"], correct: "Color to skin (त्वचा को रंग)", category: "Easy" },
      { id: 10, text: "(Physics) Speed of light in vacuum is: / निर्वात में प्रकाश की चाल कितनी होती है?", options: ["3 * 10^8 m/s", "3 * 10^5 m/s", "3 * 10^10 m/s", "1.5 * 10^8 m/s"], correct: "3 * 10^8 m/s", category: "Easy" },
      { id: 11, text: "(Physics) Sound waves are longitudinal waves. They cannot travel through: / ध्वनि तरंगें अनुदैर्ध्य तरंगें होती हैं। वे किससे होकर यात्रा नहीं कर सकती हैं?", options: ["Vacuum (निर्वात)", "Air (हवा)", "Water (पानी)", "Steel (इस्पात)"], correct: "Vacuum (निर्वात)", category: "Medium" },
      { id: 12, text: "(Chemistry) Plaster of Paris chemical formula is: / प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?", options: ["CaSO4.1/2H2O", "CaSO4.2H2O", "CaSO4.7H2O", "CaCO3"], correct: "CaSO4.1/2H2O", category: "Medium" },
      { id: 13, text: "(Biology) Which plant tissue transport food from leaves to other parts? / कौन सा पादप ऊतक पत्तियों से भोजन को अन्य भागों में स्थानांतरित करता है?", options: ["Phloem (फ्लोएंम)", "Xylem (जाइलम)", "Sclerenchyma", "Parenchyma"], correct: "Phloem (फ्लोएंम)", category: "Medium" },
      { id: 14, text: "(Physics) Refractive index of glass is 1.5. What is the speed of light in glass? / कांच का अपवर्तनांक 1.5 है। कांच में प्रकाश की चाल क्या होगी?", options: ["2 * 10^8 m/s", "3 * 10^8 m/s", "1.5 * 10^8 m/s", "2.25 * 10^8 m/s"], correct: "2 * 10^8 m/s", category: "Medium" },
      { id: 15, text: "(Chemistry) Brass is an alloy of: / पीतल (Brass) किसकी मिश्र धातु है?", options: ["Copper and Zinc (तांबा और जस्ता)", "Copper and Tin", "Zinc and Tin", "Lead and Tin"], correct: "Copper and Zinc (तांबा and जस्ता)", category: "Medium" },
      { id: 16, text: "(Biology) The male reproductive part of flower is: / फूल का नर जनन अंग कौन सा होता है?", options: ["Stamen (पुंकेसर)", "Carpel (स्त्रीकेसर)", "Petal (पंखुड़ी)", "Sepal (बाह्यदल)"], correct: "Stamen (पुंकेसर)", category: "Medium" },
      { id: 17, text: "(Physics) What is the value of acceleration due to gravity (g) at center of earth? / पृथ्वी के केंद्र पर गुरुत्वीय त्वरण (g) का मान कितना होता है?", options: ["Zero (शून्य)", "9.8 m/s²", "9.8 km/s²", "Infinite (अनंत)"], correct: "Zero (शून्य)", category: "Medium" },
      { id: 18, text: "(Chemistry) Bleaching powder is chemically: / ब्लीचिंग पाउडर का रासायनिक नाम क्या है?", options: ["Calcium oxychloride (CaOCl2)", "Calcium carbonate", "Sodium carbonate", "Calcium hydroxide"], correct: "Calcium oxychloride (CaOCl2)", category: "Medium" },
      { id: 19, text: "(Biology) Which organ secretes Insulin? / कौन सा अंग इंसुलिन का स्राव करता है?", options: ["Pancreas (अग्नाशय)", "Liver (यकृत)", "Stomach (आमाशय)", "Gallbladder (पित्ताशय)"], correct: "Pancreas (अग्नाशय)", category: "Medium" },
      { id: 20, text: "(Physics) Ohm's law relation is: / ओम के नियम का संबंध कौन सा है?", options: ["V = IR", "I = VR", "R = VI", "V = I/R"], correct: "V = IR", category: "Medium" },
      { id: 21, text: "(Physics) A body of mass 5 kg drops from a height of 20 m. Find its kinetic energy just before hitting ground. (g = 10 m/s²) / 5 किलोग्राम द्रव्यमान का एक पिंड 20 मीटर की ऊंचाई से गिरता है। जमीन से टकराने से ठीक पहले उसकी गतिज ऊर्जा ज्ञात कीजिए।", options: ["1000 J", "500 J", "2000 J", "100 J"], correct: "1000 J", category: "Hard" },
      { id: 22, text: "(Chemistry) IUPAC name of formic acid is: / फॉर्मिक अम्ल का IUPAC नाम क्या है?", options: ["Methanoic acid (मेथेनोइक अम्ल)", "Ethanoic acid (एथेनोइक अम्ल)", "Propanoic acid", "Butanoic acid"], correct: "Methanoic acid (मेथेनोइक अम्ल)", category: "Hard" },
      { id: 23, text: "(Biology) The functional unit of neural system is: / तंत्रिका तंत्र की कार्यात्मक इकाई कौन सी है?", options: ["Neuron (न्यूरॉन)", "Nephron (नेफ्रॉन)", "Axon (एक्सॉन)", "Brain (मस्तिष्क)"], correct: "Neuron (न्यूरॉन)", category: "Hard" },
      { id: 24, text: "(Physics) Total internal reflection occurs when light travels from: / पूर्ण आंतरिक परावर्तन तब होता है जब प्रकाश जाता है:", options: ["Denser to Rarer medium (सघन से विरल माध्यम में)", "Rarer to Denser medium", "Air to Water", "Vacuum to Glass"], correct: "Denser to Rarer medium (सघन से विरल माध्यम में)", category: "Hard" },
      { id: 25, text: "(Chemistry) Most electropositive element in periodic table is: / आवर्त सारणी में सबसे अधिक विद्युत धनात्मक (Electropositive) तत्व कौन सा है?", options: ["Cesium (सीजियम)", "Francium (फ्रान्सियम)", "Sodium (सोडियम)", "Potassium (पोटैशियम)"], correct: "Cesium (सीजियम)", category: "Hard" },
      { id: 26, text: "(Biology) Primary component of plant cell wall is: / पादप कोशिका भित्ति का प्राथमिक घटक क्या है?", options: ["Cellulose (सेलुलोज)", "Starch (स्टार्च)", "Chitin (काइटिन)", "Protein (प्रोटीन)"], correct: "Cellulose (सेलुलोज)", category: "Hard" },
      { id: 27, text: "(Physics) Gravitational force between two bodies does not depend on: / दो पिंडों के बीच गुरुत्वाकर्षण बल किस पर निर्भर नहीं करता है?", options: ["Medium between them (उनके बीच के माध्यम पर)", "Product of their masses", "Distance between them", "Gravitational constant"], correct: "Medium between them (उनके बीच के माध्यम पर)", category: "Hard" },
      { id: 28, text: "(Chemistry) What is the chemical name of Gypsum? / जिप्सम का रासायनिक नाम क्या है?", options: ["Calcium sulfate dihydrate (CaSO4.2H2O)", "Calcium carbonate", "Sodium carbonate", "Sodium bicarbonate"], correct: "Calcium sulfate dihydrate (CaSO4.2H2O)", category: "Hard" },
      { id: 29, text: "(Biology) The part of kidney that collects urine is: / वृक्क का वह भाग जो मूत्र एकत्र करता है, क्या कहलाता है?", options: ["Renal pelvis (वृक्क द्रोणी / पेल्विस)", "Nephron", "Glomerulus", "Ureter"], correct: "Renal pelvis (वृक्क द्रोणी / पेल्विस)", category: "Hard" },
      { id: 30, text: "(Chemistry) Hardness of water is primarily due to presence of: / जल की कठोरता मुख्य रूप से किसकी उपस्थिति के कारण होती है?", options: ["Calcium and Magnesium salts (कैल्शियम और मैग्नीशियम के लवण)", "Sodium and Potassium salts", "Iron and Copper salts", "Chlorides and Fluorides"], correct: "Calcium and Magnesium salts (कैल्शियम और मैग्नीशियम के लवण)", category: "Hard" }
    ]
  },
  {
    id: 5,
    title: "RRB Group D General Science Mock Test - 5",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) Unit of electrical potential is: / विद्युत विभव का मात्रक क्या है?", options: ["Volt (वोल्ट)", "Ohm (ओम)", "Ampere (एम्पियर)", "Watt (वाट)"], correct: "Volt (वोल्ट)", category: "Easy" },
      { id: 2, text: "(Chemistry) The core metal of chlorophyll is: / क्लोरोफिल का मुख्य धातु घटक कौन सा है?", options: ["Magnesium (मैग्नीशियम)", "Iron (लोहा)", "Calcium (कैल्शियम)", "Sodium (सोडियम)"], correct: "Magnesium (मैग्नीशियम)", category: "Easy" },
      { id: 3, text: "(Biology) Which vitamin helps in blood clotting? / कौन सा विटामिन रक्त का थक्का जमाने में मदद करता है?", options: ["Vitamin K", "Vitamin E", "Vitamin A", "Vitamin C"], correct: "Vitamin K", category: "Easy" },
      { id: 4, text: "(Physics) What is the lens formula? / लेंस सूत्र क्या है?", options: ["1/f = 1/v - 1/u", "1/f = 1/v + 1/u", "1/f = 1/u - 1/v", "f = u + v"], correct: "1/f = 1/v - 1/u", category: "Easy" },
      { id: 5, text: "(Chemistry) What is the chemical formula of limestone? / चूना पत्थर का रासायनिक सूत्र क्या है?", options: ["CaCO3", "Ca(OH)2", "CaO", "CaCl2"], correct: "CaCO3", category: "Easy" },
      { id: 6, text: "(Biology) The master gland of the human body is: / मानव शरीर की मास्टर ग्रंथि कौन सी है?", options: ["Pituitary Gland (पीयूष ग्रंथि)", "Adrenal Gland (अधिवृक्क ग्रंथि)", "Thyroid Gland (थायरॉयड ग्रंथि)", "Pancreas (अग्नाशय)"], correct: "Pituitary Gland (पीयूष ग्रंथि)", category: "Easy" },
      { id: 7, text: "(Physics) A unit of magnetic flux density is: / चुंबकीय प्रवाह घनत्व का मात्रक क्या है?", options: ["Tesla (टेस्ला)", "Weber (वेबर)", "Henry (हेनरी)", "Gauss (गॉस)"], correct: "Tesla (टेस्ला)", category: "Easy" },
      { id: 8, text: "(Chemistry) Which gas is filled inside potato chips packets? / आलू के चिप्स के पैकेटों में कौन सी गैस भरी होती है?", options: ["Nitrogen (नाइट्रोजन)", "Oxygen (ऑक्सीजन)", "Helium (हीलियम)", "Argon (आर्गन)"], correct: "Nitrogen (नाइट्रोजन)", category: "Easy" },
      { id: 9, text: "(Biology) Bilirubin pigment is produced in which organ? / बिलीरुबिन वर्णक किस अंग में निर्मित होता है?", options: ["Liver (यकृत)", "Spleen (प्लीहा)", "Kidney (वृक्क)", "Pancreas (अग्नाशय)"], correct: "Liver (यकृत)", category: "Easy" },
      { id: 10, text: "(Physics) S.I. unit of power of lens is: / लेंस की क्षमता का S.I. मात्रक क्या है?", options: ["Diopter (डायोप्टर)", "Meter", "Centimeter", "Decibel"], correct: "Diopter (डायोप्टर)", category: "Easy" },
      { id: 11, text: "(Physics) Velocity of sound in air is approximately: / वायु में ध्वनि का वेग लगभग कितना होता है?", options: ["344 m/s", "330 km/s", "1500 m/s", "3 * 10^8 m/s"], correct: "344 m/s", category: "Medium" },
      { id: 12, text: "(Chemistry) Which gas is evolved when carbon reacts with oxygen? / जब कार्बन ऑक्सीजन के साथ अभिक्रिया करता है, तो कौन सी गैस बनती है?", options: ["Carbon dioxide (CO2)", "Carbon monoxide (CO)", "Methane", "Ozone"], correct: "Carbon dioxide (CO2)", category: "Medium" },
      { id: 13, text: "(Biology) Stomata are present in: / रंध्र (Stomata) किसमें उपस्थित होते हैं?", options: ["Leaves (पत्तियों में)", "Roots (जड़ों में)", "Stems (तनों में)", "Flowers (फूलों में)"], correct: "Leaves (पत्तियों में)", category: "Medium" },
      { id: 14, text: "(Physics) An object is placed at infinite distance in front of a concave lens. The image formed is: / एक अवतल लेंस के सामने अनंत दूरी पर एक वस्तु रखी गई है। बनने वाला प्रतिबिंब होगा:", options: ["Virtual, erect and highly diminished (आभासी, सीधा और अत्यंत छोटा)", "Real, inverted and enlarged", "Real, erect and enlarged", "Virtual, inverted and diminished"], correct: "Virtual, erect and highly diminished (आभासी, सीधा और अत्यंत छोटा)", category: "Medium" },
      { id: 15, text: "(Chemistry) Main component of LPG is: / एलपीजी (LPG) का मुख्य घटक क्या है?", options: ["Butane (ब्यूटेन)", "Methane (मीथेन)", "Ethane (एथेन)", "Propane (प्रोपेन)"], correct: "Butane (ब्यूटेन)", category: "Medium" },
      { id: 16, text: "(Biology) Which part of brain helps in maintain posture and balance? / मस्तिष्क का कौन सा भाग शरीर के संतुलन और पोस्चर को बनाए रखने में मदद करता है?", options: ["Cerebellum (अनुमस्तिष्क)", "Cerebrum (प्रमस्तिष्क)", "Medulla (मेडुला)", "Pons (पोंस)"], correct: "Cerebellum (अनुमस्तिष्क)", category: "Medium" },
      { id: 17, text: "(Physics) What is the unit of resistivity? / प्रतिरोधकता (Resistivity) का मात्रक क्या है?", options: ["Ohm-meter (ओम-मीटर)", "Ohm", "Ampere-meter", "Volt-meter"], correct: "Ohm-meter (ओम-मीटर)", category: "Medium" },
      { id: 18, text: "(Chemistry) Bleaching powder chemical name: / ब्लीचिंग पाउडर का रासायनिक नाम क्या है?", options: ["Calcium oxychloride (CaOCl2)", "Calcium carbonate", "Sodium bicarbonate", "Calcium hydroxide"], correct: "Calcium oxychloride (CaOCl2)", category: "Medium" },
      { id: 19, text: "(Biology) The structural unit of lungs is: / फेफड़ों की संरचनात्मक इकाई कौन सी है?", options: ["Alveoli (कूपिका / एल्वियोली)", "Nephron (नेफ्रॉन)", "Neuron (न्यूरॉन)", "Bronchioles"], correct: "Alveoli (कूपिका / एल्वियोली)", category: "Medium" },
      { id: 20, text: "(Physics) Fleming's left hand rule is used to find direction of: / फ्लेमिंग के बाएं हाथ का नियम किसकी दिशा ज्ञात करने के लिए उपयोग किया जाता है?", options: ["Force on current-carrying conductor in magnetic field", "Induced current", "Magnetic field lines", "None of these"], correct: "Force on current-carrying conductor in magnetic field", category: "Medium" },
      { id: 21, text: "(Physics) An object of mass 10 kg is moving with a constant velocity of 10 m/s. Find the work required to stop it. / 10 किलोग्राम द्रव्यमान की एक वस्तु 10 मीटर/सेकंड के निरंतर वेग से चल रही है। इसे रोकने के लिए आवश्यक कार्य ज्ञात कीजिए।", options: ["500 J", "1000 J", "250 J", "2000 J"], correct: "500 J", category: "Hard" },
      { id: 22, text: "(Chemistry) Esterification is the reaction between an acid and which compound? / एस्टरीकरण (Esterification) एक अम्ल और किस यौगिक के बीच की अभिक्रिया है?", options: ["Alcohol (अल्कोहल)", "Aldehyde (एल्डिहाइड)", "Ketone (कीटोन)", "Ether (ईथर)"], correct: "Alcohol (अल्कोहल)", category: "Hard" },
      { id: 23, text: "(Biology) Normal hemoglobin range in healthy male is: / एक स्वस्थ वयस्क पुरुष में सामान्य हीमोग्लोबिन की सीमा कितनी होती है?", options: ["13.5 - 17.5 g/dL", "10.0 - 12.0 g/dL", "18.0 - 22.0 g/dL", "8.0 - 10.0 g/dL"], correct: "13.5 - 17.5 g/dL", category: "Hard" },
      { id: 24, text: "(Physics) Focal length of a convex lens in air is 20 cm. Its power is: / हवा में एक उत्तल लेंस की फोकस दूरी 20 सेमी है। इसकी क्षमता क्या होगी?", options: ["+5.0 D", "-5.0 D", "+0.05 D", "+20.0 D"], correct: "+5.0 D", category: "Hard" },
      { id: 25, text: "(Chemistry) Aqua Regia is a mixture of concentrated HCl and HNO3 in which ratio? / एक्वा रेजिया (Aqua Regia) सांद्र HCl और HNO3 का किस अनुपात में मिश्रण है?", options: ["3:1", "1:3", "2:1", "1:2"], correct: "3:1", category: "Hard" },
      { id: 26, text: "(Biology) Plant cell wall is absent in: / पादप कोशिका भित्ति किसमें अनुपस्थित होती है?", options: ["Animal cells (जंतु कोशिकाओं में)", "Fungal cells", "Plant cells", "Bacterial cells"], correct: "Animal cells (जंतु कोशिकाओं में)", category: "Hard" },
      { id: 27, text: "(Physics) Speed of sound does not depend on: / ध्वनि की चाल किस पर निर्भर नहीं करती है?", options: ["Pressure of medium (माध्यम के दाब पर)", "Temperature of medium", "Humidity of medium", "Nature of medium"], correct: "Pressure of medium (माध्यम के दाब पर)", category: "Hard" },
      { id: 28, text: "(Chemistry) Washing soda chemical formula is: / धावन सोडा (Washing Soda) का रासायनिक सूत्र क्या है?", options: ["Na2CO3.10H2O", "NaHCO3", "CaSO4.2H2O", "NaOH"], correct: "Na2CO3.10H2O", category: "Hard" },
      { id: 29, text: "(Biology) Bowman capsule is present in: / बोमैन कैप्सूल (Bowman Capsule) किसमें उपस्थित होता है?", options: ["Nephron (नेफ्रॉन में)", "Neuron (न्यूरॉन में)", "Liver (यकृत में)", "Lungs (फेफड़ों में)"], correct: "Nephron (नेफ्रॉन में)", category: "Hard" },
      { id: 30, text: "(Chemistry) Hard water forms scum with soap because of: / कठोर जल साबुन के साथ मैल (Scum) बनाता है क्योंकि:", options: ["Calcium and Magnesium salts react with soap to form insoluble compounds", "Soap is acidic", "Hard water is toxic", "None of these"], correct: "Calcium and Magnesium salts react with soap to form insoluble compounds", category: "Hard" }
    ]
  },
  {
    id: 6,
    title: "RRB Group D General Science Mock Test - 6",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) What is the relation between focal length (f) and radius of curvature (R)? / फोकस दूरी (f) और वक्रता त्रिज्या (R) के बीच क्या संबंध है?", options: ["R = 2f", "f = 2R", "R = f", "f = R/4"], correct: "R = 2f", category: "Easy" },
      { id: 2, text: "(Chemistry) What is the chemical formula of hydrochloric acid? / हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?", options: ["HCl", "HNO3", "H2SO4", "CH3COOH"], correct: "HCl", category: "Easy" },
      { id: 3, text: "(Biology) Which is the largest organ in the human body? / मानव शरीर का सबसे बड़ा अंग कौन सा है?", options: ["Skin (त्वचा)", "Liver (यकृत)", "Lungs (फेफड़े)", "Brain (मस्तिष्क)"], correct: "Skin (त्वचा)", category: "Easy" },
      { id: 4, text: "(Physics) The light rays reflecting from a plane mirror form an image that is: / समतल दर्पण से परावर्तित होने वाली प्रकाश किरणें कैसा प्रतिबिंब बनाती हैं?", options: ["Virtual and erect (आभासी और सीधा)", "Real and inverted", "Real and erect", "Virtual and inverted"], correct: "Virtual and erect (आभासी और सीधा)", category: "Easy" },
      { id: 5, text: "(Chemistry) Rusting of iron is a: / लोहे में जंग लगना एक उदाहरण है:", options: ["Chemical Change (रासायनिक परिवर्तन)", "Physical Change (भौतिक परिवर्तन)", "Reversible Change", "None of these"], correct: "Chemical Change (रासायनिक परिवर्तन)", category: "Easy" },
      { id: 6, text: "(Biology) Deficiency of iron in human diet causes: / मानव आहार में लोहे की कमी से कौन सा रोग होता है?", options: ["Anemia (एनीमिया)", "Scurvy", "Rickets", "Goitre"], correct: "Anemia (एनीमिया)", category: "Easy" },
      { id: 7, text: "(Physics) What is the value of gravitational acceleration (g) on Earth's surface? / पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का मान कितना होता है?", options: ["9.8 m/s²", "98 m/s²", "0.98 m/s²", "100 m/s²"], correct: "9.8 m/s²", category: "Easy" },
      { id: 8, text: "(Chemistry) Which noble gas is used inside advertising sign boards? / विज्ञापन साइन बोर्डों के भीतर किस उत्कृष्ट गैस का उपयोग किया जाता है?", options: ["Neon (नियोन)", "Helium (हीलियम)", "Argon (आर्गन)", "Krypton (क्रिप्टन)"], correct: "Neon (नियोन)", category: "Easy" },
      { id: 9, text: "(Biology) Primary function of stomata in leaves is: / पत्तियों में रंध्रों (Stomata) का प्राथमिक कार्य क्या है?", options: ["Gas exchange and Transpiration (गैस विनिमय और वाष्पोत्सर्जन)", "Photosynthesis", "Water absorption", "None of these"], correct: "Gas exchange and Transpiration (गैस विनिमय और वाष्पोत्सर्जन)", category: "Easy" },
      { id: 10, text: "(Physics) S.I. unit of power is: / शक्ति (Power) का S.I. मात्रक क्या है?", options: ["Watt (वाट)", "Joule", "Newton", "Pascal"], correct: "Watt (वाट)", category: "Easy" },
      { id: 11, text: "(Physics) The splitting of white light into seven colors is called: / श्वेत प्रकाश का सात रंगों में विभाजित होना क्या कहलाता है?", options: ["Dispersion (वर्ण विक्षेपण)", "Refraction", "Reflection", "Total Internal Reflection"], correct: "Dispersion (वर्ण विक्षेपण)", category: "Medium" },
      { id: 12, text: "(Chemistry) Bleaching powder chemical name is: / ब्लीचिंग पाउडर का रासायनिक नाम क्या है?", options: ["Calcium oxychloride (CaOCl2)", "Calcium carbonate", "Sodium carbonate", "Calcium hydroxide"], correct: "Calcium oxychloride (CaOCl2)", category: "Medium" },
      { id: 13, text: "(Biology) Phloem tissue in plants is responsible for: / पौधों में फ्लोएम ऊतक किसके लिए जिम्मेदार होता है?", options: ["Transport of Food (भोजन का परिवहन)", "Transport of Water (जल का परिवहन)", "Support", "Growth"], correct: "Transport of Food (भोजन का परिवहन)", category: "Medium" },
      { id: 14, text: "(Physics) Convex mirror is commonly used as: / उत्तल दर्पण का सामान्यतः किस रूप में उपयोग किया जाता है?", options: ["Rear-view mirror in vehicles (वाहनों में पीछे देखने वाले दर्पण के रूप में)", "Shaving mirror", "Solar furnace mirror", "Headlights mirror"], correct: "Rear-view mirror in vehicles (वाहनों में पीछे देखने वाले दर्पण के रूप में)", category: "Medium" },
      { id: 15, text: "(Chemistry) Pure gold is of how many carats? / शुद्ध सोना कितने कैरेट का होता है?", options: ["24 Carats", "22 Carats", "18 Carats", "20 Carats"], correct: "24 Carats", category: "Medium" },
      { id: 16, text: "(Biology) Plants take carbon dioxide from atmosphere mainly through: / पौधे वायुमंडल से कार्बन डाइऑक्साइड मुख्य रूप से किसके माध्यम से लेते हैं?", options: ["Stomata (रंध्र)", "Roots", "Stems", "Leaves surface without stomata"], correct: "Stomata (रंध्र)", category: "Medium" },
      { id: 17, text: "(Physics) Power of lens of focal length 50 cm is: / 50 सेमी फोकस दूरी वाले लेंस की क्षमता क्या होगी?", options: ["+2.0 D", "+0.5 D", "-2.0 D", "+5.0 D"], correct: "+2.0 D", category: "Medium" },
      { id: 18, text: "(Chemistry) Vinegar is chemically: / सिरका रासायनिक रूप से क्या है?", options: ["Dilute Acetic Acid (तनु एसिटिक अम्ल)", "Citric Acid", "Formic Acid", "Hydrochloric Acid"], correct: "Dilute Acetic Acid (तनु एसिटिक अम्ल)", category: "Medium" },
      { id: 19, text: "(Biology) Which organ is affected in Goitre disease? / घेंघा रोग में कौन सा अंग प्रभावित होता है?", options: ["Thyroid Gland (थायरॉयड ग्रंथि)", "Liver", "Spleen", "Kidney"], correct: "Thyroid Gland (थायरॉयड ग्रंथि)", category: "Medium" },
      { id: 20, text: "(Physics) Ohm's law relation V = IR holds true for: / ओम का नियम V = IR किसके लिए सत्य है?", options: ["Metallic conductors (धात्विक चालकों के लिए)", "Semiconductors", "Superconductors", "Insulators"], correct: "Metallic conductors (धात्विक चालकों के लिए)", category: "Medium" },
      { id: 21, text: "(Physics) If the velocity of a moving body is doubled, its momentum becomes: / यदि किसी गतिशील पिंड का वेग दोगुना कर दिया जाए, तो उसका संवेग हो जाएगा:", options: ["Double (दुगुना)", "Four times", "Half", "Unchanged"], correct: "Double (दुगुना)", category: "Hard" },
      { id: 22, text: "(Chemistry) IUPAC name of vinegar acid is: / सिरके के अम्ल का IUPAC नाम क्या है?", options: ["Ethanoic acid (एथेनोइक अम्ल)", "Methanoic acid", "Propanoic acid", "Butanoic acid"], correct: "Ethanoic acid (एथेनोइक अम्ल)", category: "Hard" },
      { id: 23, text: "(Biology) Basic unit of neural system in human is: / मनुष्य में तंत्रिका तंत्र की मूल इकाई कौन सी है?", options: ["Neuron (न्यूरॉन)", "Nephron", "Brain", "Spinal cord"], correct: "Neuron (न्यूरॉन)", category: "Hard" },
      { id: 24, text: "(Physics) Total internal reflection is possible when light goes from: / पूर्ण आंतरिक परावर्तन तब संभव है जब प्रकाश जाता है:", options: ["Glass to Water (कांच से पानी में)", "Water to Glass", "Air to Water", "Vacuum to Glass"], correct: "Glass to Water (कांच से पानी में)", category: "Hard" },
      { id: 25, text: "(Chemistry) The element with highest electronegativity is: / सबसे अधिक विद्युत ऋणात्मकता वाला तत्व कौन सा है?", options: ["Fluorine (फ्लोरीन)", "Chlorine", "Oxygen", "Nitrogen"], correct: "Fluorine (फ्लोरीन)", category: "Hard" },
      { id: 26, text: "(Biology) Genetic material DNA is present in: / आनुवंशिक पदार्थ DNA किसमें उपस्थित होता है?", options: ["Nucleus, Mitochondria and Chloroplast (केंद्रक, माइटोकॉन्ड्रिया और क्लोरोप्लास्ट)", "Only Nucleus", "Only Mitochondria", "None of these"], correct: "Nucleus, Mitochondria and Chloroplast (केंद्रक, माइटोकॉन्ड्रिया और क्लोरोप्लास्ट)", category: "Hard" },
      { id: 27, text: "(Physics) An electric heater of 1000W operates 2 hours daily. Electricity consumed in 30 days is: / 1000W का एक इलेक्ट्रिक हीटर रोजाना 2 घंटे चलता है। 30 दिनों में खपत हुई बिजली होगी:", options: ["60 Units (60 kWh)", "30 Units", "10 Units", "120 Units"], correct: "60 Units (60 kWh)", category: "Hard" },
      { id: 28, text: "(Chemistry) Bleaching powder is chemically CaOCl2. Its chlorine is active for: / ब्लीचिंग पाउडर रासायनिक रूप से CaOCl2 है। इसकी क्लोरीन किसके लिए सक्रिय होती है?", options: ["Disinfection of Water (पानी के कीटाणुशोधन के लिए)", "Coloring", "Taste", "None of these"], correct: "Disinfection of Water (पानी के कीटाणुशोधन के लिए)", category: "Hard" },
      { id: 29, text: "(Biology) Main filtering unit of human kidney is: / मानव वृक्क की मुख्य छननी इकाई कौन सी है?", options: ["Glomerulus (ग्लोमेरुलस)", "Bowman capsule", "Loop of Henle", "Nephron"], correct: "Nephron (नेफ्रॉन)", category: "Hard" },
      { id: 30, text: "(Chemistry) Temporary hardness of water can be removed by: / जल की अस्थायी कठोरता को किसके द्वारा दूर किया जा सकता है?", options: ["Boiling (उबालकर)", "Adding Sodium carbonate", "Adding Chlorine", "Filtration"], correct: "Boiling (उबालकर)", category: "Hard" }
    ]
  },
  {
    id: 7,
    title: "RRB Group D General Science Mock Test - 7",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) S.I. unit of resistance is: / प्रतिरोध (Resistance) का S.I. मात्रक क्या है?", options: ["Ohm (ओम)", "Volt", "Ampere", "Watt"], correct: "Ohm (ओम)", category: "Easy" },
      { id: 2, text: "(Chemistry) Chemical formula of washing soda is: / धावन सोडा का रासायनिक सूत्र क्या है?", options: ["Na2CO3.10H2O", "NaHCO3", "NaOH", "NaCl"], correct: "Na2CO3.10H2O", category: "Easy" },
      { id: 3, text: "(Biology) Which is the smallest cell in human body? / मानव शरीर की सबसे छोटी कोशिका कौन सी है?", options: ["Sperm (शुक्राणु)", "Ovum (अंडाणु)", "Neuron (न्यूरॉन)", "Red Blood Cell"], correct: "Sperm (शुक्राणु)", category: "Easy" },
      { id: 4, text: "(Physics) The splitting of white light into seven colors is called: / श्वेत प्रकाश का सात रंगों में विभाजित होना क्या कहलाता है?", options: ["Dispersion (वर्ण विक्षेपण)", "Refraction", "Reflection", "Scattering"], correct: "Dispersion (वर्ण विक्षेपण)", category: "Easy" },
      { id: 5, text: "(Chemistry) Pure gold is: / शुद्ध सोना होता है:", options: ["24 Carats", "22 Carats", "18 Carats", "20 Carats"], correct: "24 Carats", category: "Easy" },
      { id: 6, text: "(Biology) Goitre disease is caused due to: / घेंघा रोग किसके कारण होता है?", options: ["Iodine deficiency (आयोडीन की कमी)", "Iron deficiency", "Calcium deficiency", "Vitamin deficiency"], correct: "Iodine deficiency (आयोडीन की कमी)", category: "Easy" },
      { id: 7, text: "(Physics) Acceleration due to gravity (g) is: / गुरुत्वीय त्वरण (g) का मान पृथ्वी के केंद्र पर होता है:", options: ["Zero (शून्य)", "9.8 m/s²", "Maximum", "Infinite"], correct: "Zero (शून्य)", category: "Easy" },
      { id: 8, text: "(Chemistry) Which element has highest electronegativity? / किस तत्व की विद्युत ऋणात्मकता सबसे अधिक होती है?", options: ["Fluorine (फ्लोरीन)", "Chlorine", "Oxygen", "Nitrogen"], correct: "Fluorine (फ्लोरीन)", category: "Easy" },
      { id: 9, text: "(Biology) Red blood cells are produced in: / लाल रक्त कोशिकाएं (RBC) कहाँ निर्मित होती हैं?", options: ["Bone Marrow (अस्थि मज्जा)", "Spleen", "Liver", "Heart"], correct: "Bone Marrow (अस्थि मज्जा)", category: "Easy" },
      { id: 10, text: "(Physics) Watt-hour is unit of: / वाट-घंटा किसका मात्रक है?", options: ["Electrical Energy (विद्युत ऊर्जा)", "Electrical Power", "Current", "Potential"], correct: "Electrical Energy (विद्युत ऊर्जा)", category: "Easy" },
      { id: 11, text: "(Physics) Refractive index of water is: / जल का अपवर्तनांक कितना होता है?", options: ["1.33", "1.5", "2.42", "1.0"], correct: "1.33", category: "Medium" },
      { id: 12, text: "(Chemistry) Dry ice is: / सूखी बर्फ होती है:", options: ["Solid CO2 (ठोस कार्बन डाइऑक्साइड)", "Liquid Nitrogen", "Heavy Ice", "None of these"], correct: "Solid CO2 (ठोस कार्बन डाइऑक्साइड)", category: "Medium" },
      { id: 13, text: "(Biology) Bile juice is stored in: / पित्त रस (Bile Juice) कहाँ संचित होता है?", options: ["Gallbladder (पित्ताशय में)", "Liver", "Stomach", "Pancreas"], correct: "Gallbladder (पित्ताशय में)", category: "Medium" },
      { id: 14, text: "(Physics) Concave mirror is used in: / अवतल दर्पण का उपयोग किसमें किया जाता है?", options: ["Solar Cooker (सौर कुकर)", "Rear-view mirror", "Street light", "None of these"], correct: "Solar Cooker (सौर कुकर)", category: "Medium" },
      { id: 15, text: "(Chemistry) Hybridization of carbon in methane is: / मीथेन में कार्बन का संकरण क्या होता है?", options: ["sp3", "sp2", "sp", "sp3d"], correct: "sp3", category: "Medium" },
      { id: 16, text: "(Biology) Primary respiratory organ in fish is: / मछली में प्राथमिक श्वसन अंग कौन सा होता है?", options: ["Gills (गलफड़े)", "Lungs", "Skin", "Trachea"], correct: "Gills (गलफड़े)", category: "Medium" },
      { id: 17, text: "(Physics) Power of lens of focal length 25 cm is: / 25 सेमी फोकस दूरी वाले लेंस की क्षमता होगी:", options: ["+4.0 D", "+2.5 D", "-4.0 D", "+0.25 D"], correct: "+4.0 D", category: "Medium" },
      { id: 18, text: "(Chemistry) Acid present in vinegar is: / सिरके में कौन सा अम्ल उपस्थित होता है?", options: ["Acetic acid (एसिटिक अम्ल)", "Citric acid", "Formic acid", "Tartaric acid"], correct: "Acetic acid (एसिटिक अम्ल)", category: "Medium" },
      { id: 19, text: "(Biology) Nephron is unit of: / नेफ्रॉन किसकी मूल इकाई है?", options: ["Excretory System (उत्सर्जन तंत्र)", "Nervous System", "Respiratory System", "Circulatory System"], correct: "Excretory System (उत्सर्जन तंत्र)", category: "Medium" },
      { id: 20, text: "(Physics) Sound waves are: / ध्वनि तरंगें होती हैं:", options: ["Longitudinal mechanical waves (अनुदैर्ध्य यांत्रिक तरंगें)", "Transverse waves", "Electromagnetic waves", "None of these"], correct: "Longitudinal mechanical waves (अनुदैर्ध्य यांत्रिक तरंगें)", category: "Medium" },
      { id: 21, text: "(Physics) Equivalent resistance of three resistors of 9Ω in parallel: / समानांतर में 9Ω के तीन प्रतिरोधों का समतुल्य प्रतिरोध:", options: ["3Ω", "27Ω", "1Ω", "4.5Ω"], correct: "3Ω", category: "Hard" },
      { id: 22, text: "(Chemistry) Plaster of Paris is chemically: / प्लास्टर ऑफ पेरिस का रासायनिक नाम क्या है?", options: ["Calcium sulfate hemihydrate (CaSO4.1/2H2O)", "Calcium carbonate", "Sodium carbonate", "Calcium hydroxide"], correct: "Calcium sulfate hemihydrate (CaSO4.1/2H2O)", category: "Hard" },
      { id: 23, text: "(Biology) Universal acceptor blood group is: / सार्वभौमिक प्राप्तकर्ता (Universal Acceptor) रक्त समूह कौन सा है?", options: ["AB positive (AB+)", "O negative", "A positive", "B positive"], correct: "AB positive (AB+)", category: "Hard" },
      { id: 24, text: "(Physics) Escape velocity of earth is: / पृथ्वी का पलायन वेग कितना होता है?", options: ["11.2 km/s", "11.2 m/s", "9.8 km/s", "7.9 km/s"], correct: "11.2 km/s", category: "Hard" },
      { id: 25, text: "(Chemistry) Solder alloy is made of: / सोल्डर मिश्र धातु किससे बनती है?", options: ["Lead and Tin (सीसा और टिन)", "Copper and Zinc", "Lead and Zinc", "Tin and Copper"], correct: "Lead and Tin (सीसा और टिन)", category: "Hard" },
      { id: 26, text: "(Biology) Human heart has how many chambers? / मानव हृदय में कितने कक्ष होते हैं?", options: ["4 Chambers", "2 Chambers", "3 Chambers", "5 Chambers"], correct: "4 Chambers", category: "Hard" },
      { id: 27, text: "(Physics) Fleming's right hand rule shows direction of: / फ्लेमिंग का दाएं हाथ का नियम किसकी दिशा दिखाता है?", options: ["Induced current (प्रेरित धारा)", "Magnetic field", "Force on conductor", "None of these"], correct: "Induced current (प्रेरित धारा)", category: "Hard" },
      { id: 28, text: "(Chemistry) Acid rain is due to: / अम्लीय वर्षा किसके कारण होती है?", options: ["Oxides of Nitrogen and Sulfur (नाइट्रोजन और सल्फर के ऑक्साइड)", "Carbon dioxide", "Ozone", "Methane"], correct: "Oxides of Nitrogen and Sulfur (नाइट्रोजन और सल्फर के ऑक्साइड)", category: "Hard" },
      { id: 29, text: "(Biology) Basic filtration unit of kidney: / वृक्क की मूल निस्पंदन इकाई:", options: ["Nephron (नेफ्रॉन)", "Glomerulus", "Neuron", "Ureter"], correct: "Nephron (नेफ्रॉन)", category: "Hard" },
      { id: 30, text: "(Chemistry) Temporary hardness of water: / जल की अस्थायी कठोरता:", options: ["Removed by boiling (उबालकर दूर की जा सकती है)", "Cannot be removed", "Removed by chlorine", "None of these"], correct: "Removed by boiling (उबालकर दूर की जा सकती है)", category: "Hard" }
    ]
  },
  {
    id: 8,
    title: "RRB Group D General Science Mock Test - 8",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) Joule is the SI unit of: / जूल किसका SI मात्रक है?", options: ["Work and Energy (कार्य और ऊर्जा)", "Force", "Power", "Pressure"], correct: "Work and Energy (कार्य और ऊर्जा)", category: "Easy" },
      { id: 2, text: "(Chemistry) What is the chemical formula of baking soda? / बेकिंग सोडा का रासायनिक सूत्र क्या है?", options: ["NaHCO3", "Na2CO3", "NaOH", "NaCl"], correct: "NaHCO3", category: "Easy" },
      { id: 3, text: "(Biology) Which is the largest gland in human body? / मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?", options: ["Liver (यकृत)", "Thyroid Gland", "Pancreas", "Pituitary Gland"], correct: "Liver (यकृत)", category: "Easy" },
      { id: 4, text: "(Physics) Convex lens forms: / उत्तल लेंस बनाता है:", options: ["Real and virtual images depending on object distance (वस्तु की दूरी के आधार पर वास्तविक और आभासी दोनों)", "Only Real images", "Only Virtual images", "None of these"], correct: "Real and virtual images depending on object distance (वस्तु की दूरी के आधार पर वास्तविक और आभासी दोनों)", category: "Easy" },
      { id: 5, text: "(Chemistry) Chemical formula of bleach is: / ब्लीचिंग पाउडर का रासायनिक सूत्र क्या है?", options: ["CaOCl2", "CaCO3", "NaHCO3", "Ca(OH)2"], correct: "CaOCl2", category: "Easy" },
      { id: 6, text: "(Biology) Night blindness is caused due to deficiency of: / रतौंधी (Night Blindness) किस विटामिन की कमी के कारण होती है?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: "Vitamin A", category: "Easy" },
      { id: 7, text: "(Physics) Standard atmospheric pressure is: / मानक वायुमंडलीय दाब कितना होता है?", options: ["1 atm (लगभग 1.01 * 10^5 Pa)", "10 atm", "0.5 atm", "100 atm"], correct: "1 atm (लगभग 1.01 * 10^5 Pa)", category: "Easy" },
      { id: 8, text: "(Chemistry) Lightest metal in periodic table: / आवर्त सारणी की सबसे हल्की धातु कौन सी है?", options: ["Lithium (लिथियम)", "Hydrogen", "Helium", "Sodium"], correct: "Lithium (लिथियम)", category: "Easy" },
      { id: 9, text: "(Biology) Which plant tissue transport water? / कौन सा पादप ऊतक जल का परिवहन करता है?", options: ["Xylem (जाइलम)", "Phloem", "Parenchyma", "Collenchyma"], correct: "Xylem (जाइलम)", category: "Easy" },
      { id: 10, text: "(Physics) Unit of power of lens is: / लेंस की क्षमता का मात्रक क्या है?", options: ["Diopter (डायोप्टर)", "Meter", "Lumen", "Lux"], correct: "Diopter (डायोप्टर)", category: "Easy" },
      { id: 11, text: "(Physics) Refractive index of diamond is: / हीरे का अपवर्तनांक कितना होता है?", options: ["2.42", "1.5", "1.33", "1.0"], correct: "2.42", category: "Medium" },
      { id: 12, text: "(Chemistry) Bleaching powder is chemically: / ब्लीचिंग पाउडर का रासायनिक नाम:", options: ["Calcium oxychloride (CaOCl2)", "Calcium carbonate", "Sodium carbonate", "Calcium hydroxide"], correct: "Calcium oxychloride (CaOCl2)", category: "Medium" },
      { id: 13, text: "(Biology) Insulin hormone is secreted by: / इंसुलिन हार्मोन किसके द्वारा स्रावित होता है?", options: ["Pancreas (अग्नाशय)", "Liver", "Thyroid", "Adrenal"], correct: "Pancreas (अग्नाशय)", category: "Medium" },
      { id: 14, text: "(Physics) Convex mirror is used: / उत्तल दर्पण का उपयोग किया जाता है:", options: ["Rear-view mirror in vehicles (वाहनों में पीछे देखने वाले दर्पण के रूप में)", "Solar cooker", "Shaving mirror", "None of these"], correct: "Rear-view mirror in vehicles (वाहनों में पीछे देखने वाले दर्पण के रूप में)", category: "Medium" },
      { id: 15, text: "(Chemistry) Vinegar is chemically: / सिरका रासायनिक रूप से है:", options: ["Dilute Acetic Acid (तनु एसिटिक अम्ल)", "Citric Acid", "Formic Acid", "Hydrochloric Acid"], correct: "Dilute Acetic Acid (तनु एसिटिक अम्ल)", category: "Medium" },
      { id: 16, text: "(Biology) Nephron is basic unit of: / नेफ्रॉन किसकी मूल इकाई है?", options: ["Kidney (वृक्क)", "Brain", "Lungs", "Heart"], correct: "Kidney (वृक्क)", category: "Medium" },
      { id: 17, text: "(Physics) Power of lens of focal length 50 cm is: / 50 सेमी फोकस दूरी वाले लेंस की क्षमता क्या होगी?", options: ["+2.0 D", "+0.5 D", "-2.0 D", "+5.0 D"], correct: "+2.0 D", category: "Medium" },
      { id: 18, text: "(Chemistry) Brass is an alloy of: / पीतल मिश्र धातु है:", options: ["Copper and Zinc (तांबा और जस्ता)", "Copper and Tin", "Zinc and Tin", "Lead and Tin"], correct: "Copper and Zinc (तांबा और जस्ता)", category: "Medium" },
      { id: 19, text: "(Biology) Which blood cells defend body from diseases? / कौन सी रक्त कोशिकाएं शरीर को बीमारियों से बचाती हैं?", options: ["White Blood Cells (WBC)", "Red Blood Cells (RBC)", "Platelets", "Plasma"], correct: "White Blood Cells (WBC)", category: "Medium" },
      { id: 20, text: "(Physics) Ohm's law V = IR: / ओम का नियम V = IR:", options: ["V=Voltage, I=Current, R=Resistance", "V=Velocity, I=Current, R=Resistance", "V=Voltage, I=Induced current, R=Resistance", "None of these"], correct: "V=Voltage, I=Current, R=Resistance", category: "Medium" },
      { id: 21, text: "(Physics) If distance between two masses is doubled, gravitational force becomes: / यदि दो द्रव्यमानों के बीच की दूरी दोगुनी कर दी जाए, तो गुरुत्वाकर्षण बल हो जाएगा:", options: ["One-fourth (एक-चौथाई)", "Double", "Half", "Four times"], correct: "One-fourth (एक-चौथाई)", category: "Hard" },
      { id: 22, text: "(Chemistry) Plaster of Paris chemical name: / प्लास्टर ऑफ पेरिस का रासायनिक नाम:", options: ["Calcium sulfate hemihydrate (CaSO4.1/2H2O)", "Calcium carbonate", "Sodium carbonate", "Calcium hydroxide"], correct: "Calcium sulfate hemihydrate (CaSO4.1/2H2O)", category: "Hard" },
      { id: 23, text: "(Biology) Blood group O negative is: / रक्त समूह O नेगेटिव है:", options: ["Universal Donor (सार्वभौमिक दाता)", "Universal Acceptor", "Normal blood", "None of these"], correct: "Universal Donor (सार्वभौमिक दाता)", category: "Hard" },
      { id: 24, text: "(Physics) Escape velocity of earth is approx: / पृथ्वी का पलायन वेग लगभग है:", options: ["11.2 km/s", "11.2 m/s", "9.8 km/s", "7.9 km/s"], correct: "11.2 km/s", category: "Hard" },
      { id: 25, text: "(Chemistry) Solder is alloy of: / सोल्डर मिश्र धातु है:", options: ["Lead and Tin (सीसा और टिन)", "Copper and Zinc", "Lead and Zinc", "Tin and Copper"], correct: "Lead and Tin (सीसा और टिन)", category: "Hard" },
      { id: 26, text: "(Biology) Human heart chambers: / मानव हृदय में कितने कक्ष होते हैं?", options: ["4 Chambers", "2 Chambers", "3 Chambers", "5 Chambers"], correct: "4 Chambers", category: "Hard" },
      { id: 27, text: "(Physics) Fleming's left hand rule: / फ्लेमिंग का बाएं हाथ का नियम:", options: ["Force on current-carrying conductor in magnetic field (बल की दिशा)", "Induced current direction", "Magnetic field lines", "None of these"], correct: "Force on current-carrying conductor in magnetic field (बल की दिशा)", category: "Hard" },
      { id: 28, text: "(Chemistry) Acid rain oxides: / अम्लीय वर्षा के प्रमुख कारक:", options: ["Nitrogen and Sulfur oxides (नाइट्रोजन और सल्फर के ऑक्साइड)", "Carbon dioxide", "Ozone", "Methane"], correct: "Nitrogen and Sulfur oxides (नाइट्रोजन और सल्फर के ऑक्साइड)", category: "Hard" },
      { id: 29, text: "(Biology) Bowman capsule nephron: / बोमैन कैप्सूल किसमें होता है?", options: ["Nephron (नेफ्रॉन)", "Glomerulus", "Neuron", "Ureter"], correct: "Nephron (नेफ्रॉन)", category: "Hard" },
      { id: 30, text: "(Chemistry) Hardness of water salts: / जल की कठोरता के प्रमुख कारक लवण:", options: ["Calcium and Magnesium (कैल्शियम और मैग्नीशियम)", "Sodium and Potassium", "Iron and Copper", "Chlorides and Fluorides"], correct: "Calcium and Magnesium (कैल्शियम और मैग्नीशियम)", category: "Hard" }
    ]
  },
  {
    id: 9,
    title: "RRB Group D General Science Mock Test - 9",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) Speed of light is maximum in: / प्रकाश की चाल अधिकतम किसमें होती है?", options: ["Vacuum (निर्वात)", "Air (हवा)", "Water (पानी)", "Glass (कांच)"], correct: "Vacuum (निर्वात)", category: "Easy" },
      { id: 2, text: "(Chemistry) What is the chemical formula of sulfuric acid? / सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?", options: ["H2SO4", "HCl", "HNO3", "H2CO3"], correct: "H2SO4", category: "Easy" },
      { id: 3, text: "(Biology) The human blood pressure is measured by: / मानव रक्तचाप किसके द्वारा मापा जाता है?", options: ["Sphygmomanometer (स्फिग्मोमैनोमीटर)", "Barometer", "Hydrometer", "Thermometer"], correct: "Sphygmomanometer (स्फिग्मोमैनोमीटर)", category: "Easy" },
      { id: 4, text: "(Physics) Refractive index of glass is: / कांच का अपवर्तनांक लगभग कितना होता है?", options: ["1.5", "1.33", "2.42", "1.0"], correct: "1.5", category: "Easy" },
      { id: 5, text: "(Chemistry) Rusting of iron requires: / लोहे में जंग लगने के लिए किसकी आवश्यकता होती है?", options: ["Oxygen and Moisture (ऑक्सीजन और नमी)", "Only Oxygen", "Only Moisture", "None of these"], correct: "Oxygen and Moisture (ऑक्सीजन और नमी)", category: "Easy" },
      { id: 6, text: "(Biology) Goitre disease is due to lack of: / घेंघा रोग किसकी कमी से होता है?", options: ["Iodine (आयोडीन)", "Iron", "Calcium", "Vitamin A"], correct: "Iodine (आयोडीन)", category: "Easy" },
      { id: 7, text: "(Physics) Zero of gravitational potential energy is taken at: / गुरुत्वीय स्थितिज ऊर्जा का शून्य कहाँ माना जाता है?", options: ["Infinite distance (अनंत पर)", "Earth's surface", "Earth's center", "None of these"], correct: "Infinite distance (अनंत पर)", category: "Easy" },
      { id: 8, text: "(Chemistry) The highly reactive metal Na is stored in: / अत्यधिक क्रियाशील धातु सोडियम को किसमें रखा जाता है?", options: ["Kerosene (मिट्टी के तेल में)", "Water", "Alcohol", "Ether"], correct: "Kerosene (मिट्टी के तेल में)", category: "Easy" },
      { id: 9, text: "(Biology) Red pigment hemoglobin contains: / लाल वर्णक हीमोग्लोबिन में कौन सी धातु होती है?", options: ["Iron (लोहा)", "Copper", "Magnesium", "Calcium"], correct: "Iron (लोहा)", category: "Easy" },
      { id: 10, text: "(Physics) Unit of power of lens is: / लेंस की क्षमता का मात्रक क्या है?", options: ["Diopter (डायोप्टर)", "Meter", "Lumen", "Watt"], correct: "Diopter (डायोप्टर)", category: "Easy" },
      { id: 11, text: "(Physics) Light is which type of wave? / प्रकाश किस प्रकार की तरंग है?", options: ["Electromagnetic Transverse Wave (विद्युत चुंबकीय अनुप्रस्थ तरंग)", "Mechanical Longitudinal Wave", "Mechanical Transverse Wave", "None of these"], correct: "Electromagnetic Transverse Wave (विद्युत चुंबकीय अनुप्रस्थ तरंग)", category: "Medium" },
      { id: 12, text: "(Chemistry) Heavy water is: / भारी जल (Heavy Water) रासायनिक रूप से क्या है?", options: ["Deuterium Oxide (D2O)", "Tritium Oxide", "Hydrogen Peroxide", "None of these"], correct: "Deuterium Oxide (D2O)", category: "Medium" },
      { id: 13, text: "(Biology) Bile juice is produced by: / पित्त रस का उत्पादन किस अंग द्वारा किया जाता है?", options: ["Liver (यकृत)", "Pancreas", "Gallbladder", "Stomach"], correct: "Liver (यकृत)", category: "Medium" },
      { id: 14, text: "(Physics) Shaving mirror should be: / हजामत बनाने के लिए किस दर्पण का उपयोग किया जाना चाहिए?", options: ["Concave Mirror (अवलत दर्पण)", "Convex Mirror", "Plane Mirror", "None of these"], correct: "Concave Mirror (अवलत दर्पण)", category: "Medium" },
      { id: 15, text: "(Chemistry) Bronze alloy metals: / कांसा किन धातुओं की मिश्र धातु है?", options: ["Copper and Tin (तांबा और टिन)", "Copper and Zinc", "Zinc and Tin", "Lead and Tin"], correct: "Copper and Tin (तांबा और टिन)", category: "Medium" },
      { id: 16, text: "(Biology) Plant hormone responsible for fruit ripening: / फलों के पकने के लिए उत्तरदायी पादप हार्मोन:", options: ["Ethylene (एथिलीन)", "Auxin", "Gibberellin", "Cytokinin"], correct: "Ethylene (एथिलीन)", category: "Medium" },
      { id: 17, text: "(Physics) Resistance of ideal ammeter is: / एक आदर्श एमीटर का प्रतिरोध कितना होना चाहिए?", options: ["Zero (शून्य)", "Infinite", "Very High", "None of these"], correct: "Zero (शून्य)", category: "Medium" },
      { id: 18, text: "(Chemistry) Acid in lemon is: / नींबू में कौन सा अम्ल पाया जाता है?", options: ["Citric acid (साइट्रिक अम्ल)", "Acetic acid", "Formic acid", "Tartaric acid"], correct: "Citric acid (साइट्रिक अम्ल)", category: "Medium" },
      { id: 19, text: "(Biology) Unit of filtration in kidney: / वृक्क में निस्पंदन की इकाई:", options: ["Nephron (नेफ्रॉन)", "Glomerulus", "Neuron", "Ureter"], correct: "Nephron (नेफ्रॉन)", category: "Medium" },
      { id: 20, text: "(Physics) Longitudinal sound waves cannot pass through: / अनुदैर्ध्य ध्वनि तरंगें किससे होकर नहीं गुजर सकती हैं?", options: ["Vacuum (निर्वात)", "Air", "Water", "Steel"], correct: "Vacuum (निर्वात)", category: "Medium" },
      { id: 21, text: "(Physics) Resistance of three 6Ω resistors in parallel is: / 6Ω के तीन प्रतिरोधों को समानांतर में जोड़ने पर समतुल्य प्रतिरोध:", options: ["2Ω", "18Ω", "3Ω", "1Ω"], correct: "2Ω", category: "Hard" },
      { id: 22, text: "(Chemistry) Chemical formula of gypsum: / जिप्सम का रासायनिक सूत्र क्या है?", options: ["CaSO4.2H2O", "CaSO4.1/2H2O", "CaCO3", "CaO"], correct: "CaSO4.2H2O", category: "Hard" },
      { id: 23, text: "(Biology) Universal donor blood group: / सार्वभौमिक दाता रक्त समूह:", options: ["O negative (O-)", "AB positive", "O positive", "A negative"], correct: "O negative (O-)", category: "Hard" },
      { id: 24, text: "(Physics) Value of g at center of earth: / पृथ्वी के केंद्र पर g का मान कितना होता है?", options: ["Zero (शून्य)", "9.8 m/s²", "Infinite", "None of these"], correct: "Zero (शून्य)", category: "Hard" },
      { id: 25, text: "(Chemistry) Solder is alloy of Pb and Sn. What is its use? / सोल्डर सीसे और टिन की मिश्र धातु है। इसका प्रमुख उपयोग क्या है?", options: ["Welding electrical wires (विद्युत तारों की वेल्डिंग के लिए)", "Making vessels", "Coloring", "None of these"], correct: "Welding electrical wires (विद्युत तारों की वेल्डिंग के लिए)", category: "Hard" },
      { id: 26, text: "(Biology) Main chambers in human heart: / मानव हृदय में मुख्य कक्षों की संख्या:", options: ["4 Chambers", "2 Chambers", "3 Chambers", "5 Chambers"], correct: "4 Chambers", category: "Hard" },
      { id: 27, text: "(Physics) Fleming's right hand rule: / फ्लेमिंग का दाएं हाथ का नियम:", options: ["Induced current (प्रेरित धारा की दिशा)", "Force", "Magnetic field lines", "None of these"], correct: "Induced current (प्रेरित धारा की दिशा)", category: "Hard" },
      { id: 28, text: "(Chemistry) Major pollutants of acid rain: / अम्लीय वर्षा के प्रमुख प्रदूषक गैसें:", options: ["SO2 and NO2 (सल्फर और नाइट्रोजन के ऑक्साइड)", "CO2 and CO", "CH4", "O3"], correct: "SO2 and NO2 (सल्फर और नाइट्रोजन के ऑक्साइड)", category: "Hard" },
      { id: 29, text: "(Biology) Bowman capsule is nephron part: / बोमैन कैप्सूल किसका भाग है?", options: ["Nephron (नेफ्रॉन)", "Glomerulus", "Neuron", "Ureter"], correct: "Nephron (नेफ्रॉन)", category: "Hard" },
      { id: 30, text: "(Chemistry) Hardness of water salts: / जल की कठोरता के लिए उत्तरदायी लवण:", options: ["Calcium and Magnesium (कैल्शियम और मैग्नीशियम के लवण)", "Sodium and Potassium", "Iron and Copper", "None of these"], correct: "Calcium and Magnesium (कैल्शियम और मैग्नीशियम के लवण)", category: "Hard" }
    ]
  },
  {
    id: 10,
    title: "RRB Group D General Science Mock Test - 10",
    description: "30 Questions | 30 Minutes | Bilingual Hindi/English Science Practice",
    questions: [
      { id: 1, text: "(Physics) What is the SI unit of work? / कार्य का SI मात्रक क्या है?", options: ["Joule (जूल)", "Newton", "Watt", "Pascal"], correct: "Joule (जूल)", category: "Easy" },
      { id: 2, text: "(Chemistry) Chemical formula of baking soda is: / बेकिंग सोडा का रासायनिक सूत्र क्या है?", options: ["NaHCO3", "Na2CO3", "NaOH", "NaCl"], correct: "NaHCO3", category: "Easy" },
      { id: 3, text: "(Biology) Powerhouse of the cell is: / कोशिका का बिजलीघर किसे कहा जाता है?", options: ["Mitochondria (माइटोकॉन्ड्रिया)", "Ribosome", "Lysosome", "Golgi Body"], correct: "Mitochondria (माइटोकॉन्ड्रिया)", category: "Easy" },
      { id: 4, text: "(Physics) Light is a: / प्रकाश एक है:", options: ["Transverse Wave (अनुप्रस्थ तरंग)", "Longitudinal Wave", "Mechanical Wave only", "None of these"], correct: "Transverse Wave (अनुप्रस्थ तरंग)", category: "Easy" },
      { id: 5, text: "(Chemistry) Vinegar is chemically: / सिरका रासायनिक रूप से क्या है?", options: ["Dilute Acetic Acid (तनु एसिटिक अम्ल)", "Citric Acid", "Formic Acid", "Hydrochloric Acid"], correct: "Dilute Acetic Acid (तनु एसिटिक अम्ल)", category: "Easy" },
      { id: 6, text: "(Biology) Goitre disease is due to: / घेंघा रोग किसकी कमी से होता है?", options: ["Iodine deficiency (आयोडीन की कमी)", "Iron deficiency", "Calcium deficiency", "Vitamin deficiency"], correct: "Iodine deficiency (आयोडीन की कमी)", category: "Easy" },
      { id: 7, text: "(Physics) Sound waves are: / ध्वनि तरंगें होती हैं:", options: ["Longitudinal mechanical waves (अनुदैर्ध्य यांत्रिक तरंगें)", "Transverse waves", "Electromagnetic waves", "None of these"], correct: "Longitudinal mechanical waves (अनुदैर्ध्य यांत्रिक तरंगें)", category: "Easy" },
      { id: 8, text: "(Chemistry) Element with highest electronegativity: / सबसे अधिक विद्युत ऋणात्मकता वाला तत्व कौन सा है?", options: ["Fluorine (फ्लोरीन)", "Chlorine", "Oxygen", "Nitrogen"], correct: "Fluorine (फ्लोरीन)", category: "Easy" },
      { id: 9, text: "(Biology) Red blood cells Bone Marrow: / लाल रक्त कोशिकाएं (RBC) कहाँ बनती हैं?", options: ["Bone Marrow (अस्थि मज्जा)", "Spleen", "Liver", "Heart"], correct: "Bone Marrow (अस्थि मज्जा)", category: "Easy" },
      { id: 10, text: "(Physics) Power of lens of focal length 100 cm: / 100 सेमी फोकस दूरी वाले लेंस की क्षमता क्या होगी?", options: ["+1.0 D", "+10.0 D", "-1.0 D", "+0.1 D"], correct: "+1.0 D", category: "Easy" },
      { id: 11, text: "(Physics) Speed of sound in solid steel compared to air is: / वायु की तुलना में ठोस इस्पात (Steel) में ध्वनि की चाल होती है:", options: ["Much faster (बहुत तेज)", "Slower", "Same", "Zero"], correct: "Much faster (बहुत तेज)", category: "Medium" },
      { id: 12, text: "(Chemistry) Plaster of Paris formula: / प्लास्टर ऑफ पेरिस का सूत्र क्या है?", options: ["CaSO4.1/2H2O", "CaSO4.2H2O", "CaCO3", "CaO"], correct: "CaSO4.1/2H2O", category: "Medium" },
      { id: 13, text: "(Biology) Bile juice stored in: / पित्त रस कहाँ संचित होता है?", options: ["Gallbladder (पित्ताशय)", "Liver", "Stomach", "Pancreas"], correct: "Gallbladder (पित्ताशय)", category: "Medium" },
      { id: 14, text: "(Physics) Shaving mirror concave: / हजामत के लिए किस दर्पण का उपयोग किया जाता है?", options: ["Concave Mirror (अवलत दर्पण)", "Convex Mirror", "Plane Mirror", "None of these"], correct: "Concave Mirror (अवलत दर्पण)", category: "Medium" },
      { id: 15, text: "(Chemistry) Hybridization of carbon in methane: / मीथेन में कार्बन का संकरण क्या होता है?", options: ["sp3", "sp2", "sp", "sp3d"], correct: "sp3", category: "Medium" },
      { id: 16, text: "(Biology) Plant hormone fruit ripening: / फलों को पकाने वाला पादप हार्मोन:", options: ["Ethylene (एथिलीन)", "Auxin", "Gibberellin", "Cytokinin"], correct: "Ethylene (एथिलीन)", category: "Medium" },
      { id: 17, text: "(Physics) Resistance of ideal ammeter: / एक आदर्श एमीटर का प्रतिरोध:", options: ["Zero (शून्य)", "Infinite", "Very High", "None of these"], correct: "Zero (शून्य)", category: "Medium" },
      { id: 18, text: "(Chemistry) Acid in lemon is: / नींबू में कौन सा अम्ल होता है?", options: ["Citric acid (साइट्रिक अम्ल)", "Acetic acid", "Formic acid", "Tartaric acid"], correct: "Citric acid (साइट्रिक अम्ल)", category: "Medium" },
      { id: 19, text: "(Biology) Basic unit of neural system: / तंत्रिका तंत्र की मूल इकाई:", options: ["Neuron (न्यूरॉन)", "Nephron", "Brain", "Spinal cord"], correct: "Neuron (न्यूरॉन)", category: "Medium" },
      { id: 20, text: "(Physics) Power consumed by 100W bulb in 10 hours: / 100W का बल्ब 10 घंटे में कितनी ऊर्जा खपत करेगा?", options: ["1 unit (1 kWh)", "10 units", "0.1 unit", "None of these"], correct: "1 unit (1 kWh)", category: "Medium" },
      { id: 21, text: "(Physics) Equivalent resistance of three 6Ω resistors in parallel: / 6Ω के तीन प्रतिरोधों को समानांतर में जोड़ने पर समतुल्य प्रतिरोध:", options: ["2Ω", "18Ω", "3Ω", "1Ω"], correct: "2Ω", category: "Hard" },
      { id: 22, text: "(Chemistry) Chemical formula of gypsum: / जिप्सम का रासायनिक सूत्र क्या है?", options: ["CaSO4.2H2O", "CaSO4.1/2H2O", "CaCO3", "CaO"], correct: "CaSO4.2H2O", category: "Hard" },
      { id: 23, text: "(Biology) Universal donor blood group: / सार्वभौमिक दाता रक्त समूह कौन सा है?", options: ["O negative (O-)", "AB positive", "O positive", "A negative"], correct: "O negative (O-)", category: "Hard" },
      { id: 24, text: "(Physics) Value of g at center of earth: / पृथ्वी के केंद्र पर g का मान कितना होता है?", options: ["Zero (शून्य)", "9.8 m/s²", "Infinite", "None of these"], correct: "Zero (शून्य)", category: "Hard" },
      { id: 25, text: "(Chemistry) Solder alloy Sn and Pb: / सोल्डर मिश्र धातु किनकी होती है?", options: ["Lead and Tin (सीसा और टिन)", "Copper and Zinc", "Lead and Zinc", "Tin and Copper"], correct: "Lead and Tin (सीसा और टिन)", category: "Hard" },
      { id: 26, text: "(Biology) Human heart chambers number: / मानव हृदय में कितने कक्ष होते हैं?", options: ["4 Chambers", "2 Chambers", "3 Chambers", "5 Chambers"], correct: "4 Chambers", category: "Hard" },
      { id: 27, text: "(Physics) Fleming's right hand rule: / फ्लेमिंग का दाएं हाथ का नियम क्या दिखाता है?", options: ["Induced current (प्रेरित धारा की दिशा)", "Force", "Magnetic field lines", "None of these"], correct: "Induced current (प्रेरित धारा की दिशा)", category: "Hard" },
      { id: 28, text: "(Chemistry) Major pollutants of acid rain: / अम्लीय वर्षा के प्रमुख प्रदूषक:", options: ["SO2 and NO2 (सल्फर और नाइट्रोजन के ऑक्साइड)", "CO2 and CO", "CH4", "O3"], correct: "SO2 and NO2 (सल्फर and नाइट्रोजन के ऑक्साइड)", category: "Hard" },
      { id: 29, text: "(Biology) Bowman capsule is nephron part: / बोमैन कैप्सूल किसका भाग है?", options: ["Nephron (नेफ्रॉन)", "Glomerulus", "Neuron", "Ureter"], correct: "Nephron (नेफ्रॉन)", category: "Hard" },
      { id: 30, text: "(Chemistry) Hardness of water salts: / जल की कठोरता के लिए उत्तरदायी लवण कौन से हैं?", options: ["Calcium and Magnesium (कैल्शियम और मैग्नीशियम के लवण)", "Sodium and Potassium", "Iron and Copper", "None of these"], correct: "Calcium and Magnesium (कैल्शियम और मैग्नीशियम के लवण)", category: "Hard" }
    ]
  }
];

export default function RrbGroupDGeneralScienceTestSeries() {
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
  const [currentQNo, setCurrentQNo] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
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
    setTimeLeft(1800); // 30 mins
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
              General Science Mock Test Series (सामान्य विज्ञान मॉक टेस्ट)
            </h1>
          </div>
        </div>

        <div className="bg-[#080d1a] border border-sky-500/10 rounded-3xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> Premium Science CBT Practice Simulator
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              यह मॉक टेस्ट श्रृंखला पूर्ण रूप से RRB Group D सामान्य विज्ञान के भौतिकी (Physics), रसायन विज्ञान (Chemistry) और जीव विज्ञान (Biology) के विषयों पर आधारित है। अपनी तैयारी को पूर्ण रूप से परखें!
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
              <div className="text-2xl font-bold text-sky-400">30 Mins</div>
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
