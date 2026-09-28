import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage } from '../types';

export interface Translations {
  nav: {
    estateTwin: string;
    challenges: string;
    intelligence: string;
    copilot: string;
    flow: string;
    market: string;
    launchConsole: string;
    selectLanguage: string;
  };
  hero: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    launchConsole: string;
    exploreLiving: string;
    statsFootprint: string;
    statsFootprintSub: string;
    statsShield: string;
    statsShieldSub: string;
    statsVault: string;
    statsVaultSub: string;
    statsRealization: string;
    statsRealizationSub: string;
  };
  problem: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    phase: string;
    agrioraRes: string;
  };
  intelligence: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    pillar: string;
    telemetryInputs: string;
    autonomousOutput: string;
  };
  copilot: {
    eyebrow: string;
    title1: string;
    title2: string;
    scannerTab: string;
    advisorTab: string;
    opticalSpectrometry: string;
    camera4k: string;
    runScan: string;
    scanningText: string;
    scannedDone: string;
    pathologyVerdict: string;
    severityHigh: string;
    symptomsHeader: string;
    bioPrescription: string;
    immediateDispatch: string;
    preservedYield: string;
    weatherWindow: string;
    aiWelcome: string;
    askPlaceholder: string;
    askButton: string;
  };
  journey: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    stageLabel: string;
    aiCapabilities: string;
    realTimeMetric: string;
    farmerDecisionAction: string;
    stageTelemetry: string;
    prevStage: string;
    nextStage: string;
  };
  market: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    traditionalMandi: string;
    conventional: string;
    middlemanCut: string;
    agrioraEscrow: string;
    marginBadge: string;
    netRealizationNote: string;
    verifiedBuyersHeader: string;
    activeDemand: string;
    openEscrows: string;
    netToFarmer: string;
    demandVolume: string;
  };
  cta: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    launchBtn: string;
    pipelineBtn: string;
  };
  footer: {
    description: string;
    livingTwin: string;
    operations: string;
    workspace: string;
    allRightsReserved: string;
    farmerSovereignty: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  en: {
    nav: {
      estateTwin: 'Estate Twin',
      challenges: 'Challenges',
      intelligence: 'Intelligence',
      copilot: 'AI Plant Doctor',
      flow: '7-Stage Flow',
      market: 'Fair Market',
      launchConsole: 'Launch Console',
      selectLanguage: 'Language'
    },
    hero: {
      eyebrow: 'AUTONOMOUS ESTATE & HARVEST INTELLIGENCE',
      titlePart1: 'Living Architecture for',
      titlePart2: 'the Modern Harvest.',
      subtitle: 'An immersive spatial ecosystem uniting real-time foliar diagnostics, autonomous irrigation, solar-thermal preservation, and direct institutional escrow.',
      launchConsole: 'Launch Spatial Console',
      exploreLiving: 'Explore Living Intelligence',
      statsFootprint: 'ESTATE FOOTPRINT',
      statsFootprintSub: 'Autonomous Soil Grid',
      statsShield: 'DIAGNOSTIC SHIELD',
      statsShieldSub: 'Foliar Pathogen Intercept',
      statsVault: 'SOLAR COLD VAULT',
      statsVaultSub: 'Zero-Grid Spoilage Barrier',
      statsRealization: 'DIRECT REALIZATION',
      statsRealizationSub: 'Net Margin vs Mandi Traps'
    },
    problem: {
      eyebrow: '01 // SYSTEMIC ROOT CAUSES',
      title1: 'Farming is not one decision.',
      title2: 'It is a connected sequence.',
      subtitle: 'When weather, disease, water, storage, and market access operate in silos, failure at any single point collapses the farmer\'s entire livelihood.',
      phase: 'PHASE',
      agrioraRes: 'AGRIORA RESOLUTION'
    },
    intelligence: {
      eyebrow: '02 // UNIFIED INTELLIGENCE ARCHITECTURE',
      title1: 'Four Living Pillars.',
      title2: 'One Autonomous Operating System.',
      subtitle: 'From raw satellite telemetry to real-time bank deposits, AGRIORA synchronizes every physical and digital step across the estate lifecycle.',
      pillar: 'PILLAR',
      telemetryInputs: 'TELEMETRY INPUTS',
      autonomousOutput: 'AUTONOMOUS OUTPUT'
    },
    copilot: {
      eyebrow: '03 // ADVANCED COMPUTER VISION & ADVISORY',
      title1: 'Autonomous Plant Doctor.',
      title2: 'Instant Sub-Millimeter Diagnosis.',
      scannerTab: 'Holographic Scanner',
      advisorTab: 'Conversational Advisor',
      opticalSpectrometry: 'OPTICAL SPECTROMETRY',
      camera4k: 'CAMERA 4K // MACRO',
      runScan: 'Run Scan',
      scanningText: 'Computing fungal morphology...',
      scannedDone: 'Leaf Scan Completed',
      pathologyVerdict: 'PATHOLOGY VERDICT',
      severityHigh: 'SEVERITY: HIGH RISK',
      symptomsHeader: 'DETECTED FIELD SYMPTOMS',
      bioPrescription: 'TARGETED BIO-PRESCRIPTION',
      immediateDispatch: 'IMMEDIATE DISPATCH',
      preservedYield: 'PRESERVED ECONOMIC YIELD',
      weatherWindow: 'WEATHER WINDOW CORRELATION',
      aiWelcome: 'Namaste! I am your Estate Plant Doctor. I am monitoring your fields. Zone 2 tomatoes show early blight indicators. Would you like a dosage calculation for organic copper spray?',
      askPlaceholder: 'Ask about dosage, sowing dates, soil health, or market pricing...',
      askButton: 'Ask'
    },
    journey: {
      eyebrow: '04 // CONNECTED LIFECYCLE PIPELINE',
      title1: 'Seven Intelligent Stages.',
      title2: 'One Continuous Journey.',
      subtitle: 'Every decision from initial soil preparation to final institutional settlement is tracked, optimized, and linked to ensure maximum profit.',
      stageLabel: 'STAGE',
      aiCapabilities: 'AI CAPABILITIES',
      realTimeMetric: 'REAL-TIME METRIC',
      farmerDecisionAction: 'FARMER DECISION ACTION',
      stageTelemetry: 'STAGE TELEMETRY',
      prevStage: 'PREVIOUS',
      nextStage: 'NEXT STAGE'
    },
    market: {
      eyebrow: '05 // DIRECT FAIR-TRADE EXCHANGE',
      title1: 'Transparent Pricing.',
      title2: 'Institutional Escrow Guarantees.',
      subtitle: 'Eliminating traditional mandi commission traps and arbitrary weight deductions through pre-verified institutional purchase contracts.',
      traditionalMandi: 'TRADITIONAL WHOLESALE MANDI',
      conventional: 'CONVENTIONAL',
      middlemanCut: '53% extracted by middlemen brokers and unrecorded fees',
      agrioraEscrow: 'AGRIORA DIRECT ESCROW',
      marginBadge: '+114% MARGIN',
      netRealizationNote: '100% net realization settled directly to farmer bank account',
      verifiedBuyersHeader: 'VERIFIED BUYER NETWORK',
      activeDemand: 'Active Institutional Demand',
      openEscrows: '12 Escrows Open Today',
      netToFarmer: 'NET TO FARMER',
      demandVolume: 'DEMAND VOLUME'
    },
    cta: {
      eyebrow: 'INDEPENDENT FOOD SOVEREIGNTY',
      title1: 'Step into the Living',
      title2: 'Agricultural Estate.',
      subtitle: 'Experience the autonomous operating console that transforms farming from an uncertain gamble into a predictable, profitable, dignified enterprise.',
      launchBtn: 'Launch Spatial Console',
      pipelineBtn: 'Inspect Technical Pipeline'
    },
    footer: {
      description: 'Living autonomous architecture and fair-trade agricultural intelligence empowering smallholder farming estates with diagnostic certainty, cold-chain preservation, and direct institutional escrow.',
      livingTwin: 'LIVING TWIN',
      operations: 'OPERATIONS',
      workspace: 'WORKSPACE',
      allRightsReserved: 'ALL RIGHTS RESERVED',
      farmerSovereignty: 'DATA SOVEREIGNTY'
    }
  },
  ta: {
    nav: {
      estateTwin: 'பண்ணை இரட்டை',
      challenges: 'சிக்கல்கள்',
      intelligence: 'நுண்ணறிவு',
      copilot: 'தாவர மருத்துவர்',
      flow: '7-படி பயணம்',
      market: 'நேரடி சந்தை',
      launchConsole: 'கட்டுப்பாட்டு அறை',
      selectLanguage: 'மொழி'
    },
    hero: {
      eyebrow: 'தானியங்கி பண்ணை மற்றும் அறுவடை நுண்ணறிவு',
      titlePart1: 'நவீன அறுவடைக்கான',
      titlePart2: 'உயிருள்ள கட்டமைப்பு.',
      subtitle: 'இலை நோய் கண்டறிதல், துல்லியமான நீர்ப்பாசனம், சூரிய குளிர் சேமிப்பு மற்றும் நேரடி வங்கி வரவு ஆகியவற்றை இணைக்கும் முழுமையான 3D சுற்றுச்சூழல்.',
      launchConsole: '3D கன்சோல் திற',
      exploreLiving: 'நுண்ணறிவை ஆராய்க',
      statsFootprint: 'பண்ணை பரப்பு',
      statsFootprintSub: 'தானியங்கி மண் வலையமைப்பு',
      statsShield: 'பாதுகாப்பு கவசம்',
      statsShieldSub: 'நோய் தடுப்பு விகிதம்',
      statsVault: 'சூரிய குளிர் அறை',
      statsVaultSub: 'அழுகல் தடுப்பு வெப்பநிலை',
      statsRealization: 'நேரடி லாபம்',
      statsRealizationSub: 'தரகர் இல்லாத கூடுதல் வருவாய்'
    },
    problem: {
      eyebrow: '01 // அடிப்படை வேளாண் சவால்கள்',
      title1: 'விவசாயம் ஒரு முடிவு அல்ல.',
      title2: 'அது தொடர்ச்சியான சங்கிலி.',
      subtitle: 'வானிலை, நோய், நீர், சேமிப்பு மற்றும் சந்தை தனித்தனியாக இயங்கும்போது, ஏதேனும் ஒன்றில் ஏற்படும் தோல்வி விவசாயியின் முழு உழைப்பையும் அழிக்கிறது.',
      phase: 'நிலை',
      agrioraRes: 'அக்ரியோரா தீர்வு'
    },
    intelligence: {
      eyebrow: '02 // ஒருங்கிணைந்த நுண்ணறிவு கட்டமைப்பு',
      title1: 'நான்கு முக்கிய தூண்கள்.',
      title2: 'ஒருங்கிணைந்த தானியங்கி அமைப்பு.',
      subtitle: 'செயற்கைக்கோள் தரவு முதல் நேரடி வங்கி வைப்பு வரை, பண்ணையின் ஒவ்வொரு அடியையும் அக்ரியோரா ஒருங்கிணைக்கிறது.',
      pillar: 'தூண்',
      telemetryInputs: 'உள்ளீட்டு சிக்னல்கள்',
      autonomousOutput: 'தானியங்கி முடிவு'
    },
    copilot: {
      eyebrow: '03 // மேம்பட்ட இலை பரிசோதனை & ஆலோசனை',
      title1: 'தானியங்கி தாவர மருத்துவர்.',
      title2: 'உடனடி துல்லிய இலை நோய் கண்டறிதல்.',
      scannerTab: 'இலை ஸ்கேனர்',
      advisorTab: 'குரல் வழிகாட்டி',
      opticalSpectrometry: 'ஒளியியல் பரிசோதனை',
      camera4k: 'கேமரா 4K // மேக்ரோ',
      runScan: 'ஸ்கேன் செய்',
      scanningText: 'பூஞ்சை அமைப்பை கணக்கிடுகிறது...',
      scannedDone: 'ஸ்கேன் முடிந்தது',
      pathologyVerdict: 'நோய் கண்டறிதல் முடிவு',
      severityHigh: 'தீவிரம்: அதிக ஆபத்து',
      symptomsHeader: 'கண்டறியப்பட்ட அறிகுறிகள்',
      bioPrescription: 'பரிந்துரைக்கப்பட்ட உயிரியல் மருந்து',
      immediateDispatch: 'உடனடி தெளிப்பு',
      preservedYield: 'காப்பாற்றப்பட்ட விளைச்சல் மதிப்பு',
      weatherWindow: 'வானிலை சாதக நேரம்',
      aiWelcome: 'வணக்கம்! நான் உங்கள் பண்ணை தாவர மருத்துவர். தக்காளி பயிரில் ஆரம்பகால இலைக்கருகல் நோய் தென்படுகிறது. இயற்கை செம்பு மருந்து தெளிப்பு அளவை கணக்கிடவா?',
      askPlaceholder: 'மருந்து அளவு, விதைப்பு தேதி அல்லது சந்தை விலை பற்றி கேளுங்கள்...',
      askButton: 'கேட்க'
    },
    journey: {
      eyebrow: '04 // 7-படி முழுமையான பண்ணை சுழற்சி',
      title1: 'ஏழு நுண்ணறிவு நிலைகள்.',
      title2: 'தொடர்ச்சியான ஒரு பயணம்.',
      subtitle: 'விதைப்பு முதல் அறுவடை விற்பனை வரை ஒவ்வொரு முடிவும் கண்காணிக்கப்பட்டு லாபம் உறுதி செய்யப்படுகிறது.',
      stageLabel: 'நிலை',
      aiCapabilities: 'செயற்கை நுண்ணறிவு திறன்கள்',
      realTimeMetric: 'நிகழ்நேர அளவுரு',
      farmerDecisionAction: 'விவசாயியின் இறுதி முடிவு',
      stageTelemetry: 'நிலை விவரங்கள்',
      prevStage: 'முந்தையது',
      nextStage: 'அடுத்த நிலை'
    },
    market: {
      eyebrow: '05 // இடைத்தரகர் இல்லாத நேரடி சந்தை',
      title1: 'வெளிப்படையான விலை நிர்ணயம்.',
      title2: 'பாதுகாப்பான எஸ்க்ரோ உத்தரவாதம்.',
      subtitle: 'பாரம்பரிய மண்டி தரகுக் கழிவுகள் மற்றும் போலி எடை பிடித்தங்களை ஒழித்து நிறுவனங்களுடன் நேரடி ஒப்பந்தம்.',
      traditionalMandi: 'பாரம்பரிய மொத்த மண்டி',
      conventional: 'வழக்கமான முறை',
      middlemanCut: '53% வருமானம் இடைத்தரகர்கள் மற்றும் கமிஷன்களால் பறிக்கப்படுகிறது',
      agrioraEscrow: 'அக்ரியோரா நேரடி வரவு',
      marginBadge: '+114% கூடுதல் வருவாய்',
      netRealizationNote: '100% முழுத் தொகையும் நேரடியாக விவசாயி வங்கி கணக்கில் சேரும்',
      verifiedBuyersHeader: 'சரிபார்க்கப்பட்ட கொள்முதல் நிறுவனங்கள்',
      activeDemand: 'நேரடி வாங்குவோர் தேவை',
      openEscrows: 'இன்று 12 நேரடி கொள்முதல் தயார்',
      netToFarmer: 'விவசாயிக்கு நிகர விலை',
      demandVolume: 'தேவைப்படும் அளவு'
    },
    cta: {
      eyebrow: 'உணவு மற்றும் விவசாய தன்னுரிமை',
      title1: 'உயிருள்ள பண்ணை',
      title2: 'கட்டமைப்பில் இணையுங்கள்.',
      subtitle: 'விவசாயத்தை நிச்சயமற்ற தன்மையிலிருந்து லாபகரமான, கண்ணியமான தொழிலாக மாற்றும் தன்னாட்சி இயங்குதளம்.',
      launchBtn: 'கன்சோலைத் திறக்கவும்',
      pipelineBtn: 'தொழில்நுட்ப விபரங்கள்'
    },
    footer: {
      description: 'சிறு விவசாயிகளுக்கு துல்லியமான நோய் கண்டறிதல், குளிர்சாதன சேமிப்பு மற்றும் இடைத்தரகர் அற்ற நேரடி சந்தை வழங்கும் தன்னாட்சி தளம்.',
      livingTwin: 'பண்ணை இரட்டை',
      operations: 'செயல்பாடுகள்',
      workspace: 'பணித்தளம்',
      allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',
      farmerSovereignty: 'விவசாயி தரவு உரிமை'
    }
  },
  hi: {
    nav: {
      estateTwin: 'फार्म डिजिटल ट्विन',
      challenges: 'चुनौतियां',
      intelligence: 'इंटेलिजेंस',
      copilot: 'एआई प्लांट डॉक्टर',
      flow: '7-चरणीय चक्र',
      market: 'प्रत्यक्ष मंडी',
      launchConsole: 'कंसोल खोलें',
      selectLanguage: 'भाषा'
    },
    hero: {
      eyebrow: 'स्वायत्त कृषि एवं फसल इंटेलिजेंस',
      titlePart1: 'आधुनिक फसल के लिए',
      titlePart2: 'सजीव 3D आर्किटेक्चर।',
      subtitle: 'पत्तियों के रोग निदान, सटीक सिंचाई, सौर कोल्ड स्टोरेज और सीधे बैंक भुगतान को जोड़ने वाला संपूर्ण डिजिटल तंत्र।',
      launchConsole: '3D कंसोल शुरू करें',
      exploreLiving: 'इंटेलिजेंस देखें',
      statsFootprint: 'फार्म क्षेत्रफल',
      statsFootprintSub: 'सक्रिय डिजिटल ग्रिड',
      statsShield: 'रोग सुरक्षा कवच',
      statsShieldSub: 'सटीक रोग पहचान',
      statsVault: 'सोलर कोल्ड स्टोरेज',
      statsVaultSub: 'खराबी से सुरक्षा',
      statsRealization: 'सीधा शुद्ध मुनाफा',
      statsRealizationSub: 'मंडी दलालों से मुक्ति'
    },
    problem: {
      eyebrow: '01 // कृषि की बुनियादी समस्याएं',
      title1: 'खेती केवल एक निर्णय नहीं है।',
      title2: 'यह एक जुड़ी हुई श्रृंखला है।',
      subtitle: 'जब मौसम, बीमारी, पानी, भंडारण और बाजार अलग-अलग काम करते हैं, तो किसी एक जगह की गलती किसान की पूरी मेहनत बर्बाद कर देती है।',
      phase: 'चरण',
      agrioraRes: 'एग्रिओरा समाधान'
    },
    intelligence: {
      eyebrow: '02 // एकीकृत इंटेलिजेंस संरचना',
      title1: 'चार मुख्य आधार स्तंभ।',
      title2: 'एक पूर्ण स्वायत्त ऑपरेटिंग सिस्टम।',
      subtitle: 'सैटेलाइट डेटा से लेकर सीधे बैंक ट्रांसफर तक, एग्रिओरा हर कदम को किसान के लाभ के लिए अनुकूलित करता है।',
      pillar: 'स्तंभ',
      telemetryInputs: 'सिग्नल इनपुट',
      autonomousOutput: 'एआई परिणाम'
    },
    copilot: {
      eyebrow: '03 // कंप्यूटर विज़न एवं फसल परामर्श',
      title1: 'स्वायत्त प्लांट डॉक्टर।',
      title2: 'तुरंत सटीक पत्ती रोग पहचान।',
      scannerTab: 'होलोग्राफिक स्कैनर',
      advisorTab: 'वॉइस सलाहकार',
      opticalSpectrometry: 'ऑप्टिकल जांच',
      camera4k: 'कैमरा 4K // मैक्रो',
      runScan: 'स्कैन करें',
      scanningText: 'रोग फफूंद का विश्लेषण हो रहा है...',
      scannedDone: 'स्कैन पूर्ण हुआ',
      pathologyVerdict: 'रोग निदान परिणाम',
      severityHigh: 'जोखिम: उच्च खतरा',
      symptomsHeader: 'पहचाने गए लक्षण',
      bioPrescription: 'जैविक उपचार नुस्खा',
      immediateDispatch: 'तुरंत छिड़काव',
      preservedYield: 'सुरक्षित फसल मूल्य',
      weatherWindow: 'मौसम की स्थिति',
      aiWelcome: 'नमस्ते! मैं आपका फार्म प्लांट डॉक्टर हूँ। ज़ोन 2 के टमाटर में अगेती झुलसा के लक्षण मिले हैं। क्या आप जैविक कॉपर स्प्रे की सही मात्रा जानना चाहते हैं?',
      askPlaceholder: 'दवा की मात्रा, बुवाई समय या मंडी भाव के बारे में पूछें...',
      askButton: 'पूछें'
    },
    journey: {
      eyebrow: '04 // 7-चरणीय संपूर्ण कृषि यात्रा',
      title1: 'सात बुद्धिमत्ता पूर्ण चरण।',
      title2: 'एक निरंतर और सुरक्षित यात्रा।',
      subtitle: 'मिट्टी की तैयारी से लेकर अंतिम कॉर्पोरेट भुगतान तक, हर कदम पर किसान का मुनाफा सुरक्षित किया जाता है।',
      stageLabel: 'चरण',
      aiCapabilities: 'एआई क्षमताएं',
      realTimeMetric: 'लाइव संकेतक',
      farmerDecisionAction: 'किसान का निर्णय',
      stageTelemetry: 'चरण डेटा',
      prevStage: 'पिछला',
      nextStage: 'अगला चरण'
    },
    market: {
      eyebrow: '05 // बिचौलिया-मुक्त प्रत्यक्ष बाज़ार',
      title1: 'पारदर्शी मूल्य निर्धारण।',
      title2: 'सीधा बैंक एस्क्रो भुगतान।',
      subtitle: 'पारंपरिक मंडी की दलाली और मनमानी कटौतियों को समाप्त कर प्रमाणित संस्थागत खरीदारों से सीधा संपर्क।',
      traditionalMandi: 'पारंपरिक थोक मंडी',
      conventional: 'पुरानी व्यवस्था',
      middlemanCut: '53% आय बिचौलियों और छिपे हुए शुल्कों में चली जाती है',
      agrioraEscrow: 'एग्रिओरा प्रत्यक्ष एस्क्रो',
      marginBadge: '+114% अधिक मुनाफा',
      netRealizationNote: '100% पूरा भुगतान बिना किसी कटौती के सीधे बैंक खाते में',
      verifiedBuyersHeader: 'प्रमाणित खरीदार नेटवर्क',
      activeDemand: 'सक्रिय संस्थागत मांग',
      openEscrows: 'आज 12 प्रत्यक्ष ऑर्डर उपलब्ध',
      netToFarmer: 'किसान को शुद्ध भाव',
      demandVolume: 'मांग की मात्रा'
    },
    cta: {
      eyebrow: 'स्वतंत्र खाद्य संप्रभुता',
      title1: 'सजीव डिजिटल फार्म',
      title2: 'पारिस्थितिकी तंत्र में आएं।',
      subtitle: 'कृषि को अनिश्चित जुए से निकालकर एक लाभदायक, सम्मानजनक और सुरक्षित उद्यम बनाने वाला ऑपरेटिंग कंसोल।',
      launchBtn: 'कंसोल लॉन्च करें',
      pipelineBtn: 'तकनीकी विवरण'
    },
    footer: {
      description: 'छोटे किसानों को सटीक फसल सुरक्षा, सौर कोल्ड चेन और बिचौलिया-मुक्त प्रत्यक्ष बाजार प्रदान करने वाला स्वायत्त प्लेटफॉर्म।',
      livingTwin: 'डिजिटल ट्विन',
      operations: 'संचालन',
      workspace: 'कार्यक्षेत्र',
      allRightsReserved: 'सर्वाधिकार सुरक्षित',
      farmerSovereignty: 'डेटा संप्रभुता'
    }
  },
  te: {
    nav: {
      estateTwin: 'ఫార్మ్ ట్విన్',
      challenges: 'సమస్యలు',
      intelligence: 'ఇంటెలిజెన్స్',
      copilot: 'మొక్కల డాక్టర్',
      flow: '7-దశల ప్రయాణం',
      market: 'ప్రత్యక్ష మార్కెట్',
      launchConsole: 'కన్సోల్ తెరవండి',
      selectLanguage: 'భాష'
    },
    hero: {
      eyebrow: 'స్వయంప్రతిపత్తి కలిగిన వ్యవసాయ ఇంటెలిజెన్స్',
      titlePart1: 'ఆధునిక పంటకోసం',
      titlePart2: 'సజీవ 3D రూపకల్పన.',
      subtitle: 'ఆకుల వ్యాధి నిర్ధారణ, ఖచ్చితమైన నీటిపారుదల, సోలార్ కోల్డ్ స్టోరేజ్ మరియు ప్రత్యక్ష బ్యాంకు చెల్లింపుల సమగ్ర పర్యావరణ వ్యవస్థ.',
      launchConsole: '3D కన్సోల్ ప్రారంభించండి',
      exploreLiving: 'ఇంటెలిజెన్స్ చూడండి',
      statsFootprint: 'పొలం విస్తీర్ణం',
      statsFootprintSub: 'స్వయంప్రతిపత్తి నేల గ్రిడ్',
      statsShield: 'వ్యాధి రక్షణ కవచం',
      statsShieldSub: 'ఖచ్చితమైన రోగ నిర్ధారణ',
      statsVault: 'సోలార్ కోల్డ్ వాల్ట్',
      statsVaultSub: 'కుళ్ళిపోకుండా నివారణ',
      statsRealization: 'ప్రత్యక్ష లాభం',
      statsRealizationSub: 'దళారులు లేని నికర ఆదాయం'
    },
    problem: {
      eyebrow: '01 // మూల కారణాలు',
      title1: 'వ్యవసాయం ఒకే నిర్ణయం కాదు.',
      title2: 'ఇది ఒక గొలుసుకట్టు ప్రయాణం.',
      subtitle: 'వాతావరణం, తెగుళ్లు, నీరు, నిల్వ మరియు మార్కెట్ విడివిడిగా ఉంటే, ఏ ఒక్కటి విఫలమైనా రైతు శ్రమ మొత్తం నష్టపోతుంది.',
      phase: 'దశ',
      agrioraRes: 'అగ్రియోరా పరిష్కారం'
    },
    intelligence: {
      eyebrow: '02 // ఏకీకృత ఇంటెలిజెన్స్',
      title1: 'నాలుగు ప్రధాన స్తంభాలు.',
      title2: 'ఒకే ఒక సమగ్ర ఆపరేటింగ్ సిస్టమ్.',
      subtitle: 'శాటిలైట్ డేటా నుండి ప్రత్యక్ష బ్యాంకు జమ వరకు అన్నింటినీ అగ్రియోరా సమన్వయం చేస్తుంది.',
      pillar: 'స్తంభం',
      telemetryInputs: 'డేటా ఇన్పుట్లు',
      autonomousOutput: 'ఆటోమేటిక్ ఫలితం'
    },
    copilot: {
      eyebrow: '03 // కంప్యూటర్ విజన్ & సలహాలు',
      title1: 'స్వయంప్రతిపత్తి మొక్కల డాక్టర్.',
      title2: 'తక్షణ ఆకుల తెగులు నిర్ధారణ.',
      scannerTab: 'హోలోగ్రాఫిక్ స్కానర్',
      advisorTab: 'స్వర సలహాదారు',
      opticalSpectrometry: 'ఆప్టికల్ స్కానింగ్',
      camera4k: 'కెమెరా 4K // మాక్రో',
      runScan: 'స్కాన్ చేయండి',
      scanningText: 'తెగులును లెక్కిస్తోంది...',
      scannedDone: 'స్కాన్ పూర్తయింది',
      pathologyVerdict: 'రోగ నిర్ధారణ ఫలితం',
      severityHigh: 'ప్రమాదం: అధిక తీవ్రత',
      symptomsHeader: 'గుర్తించిన లక్షణాలు',
      bioPrescription: 'సిఫార్సు చేసిన జీవ ఔషధం',
      immediateDispatch: 'వెంటనే పిచికారీ',
      preservedYield: 'కాపాడిన పంట విలువ',
      weatherWindow: 'వాతావరణ అనుకూలత',
      aiWelcome: 'నమస్కారం! నేను మీ పొలం ప్లాంట్ డాక్టర్‌ని. టమాటా పంటలో ప్రారంభ ఆకుమచ్చ తెగులు లక్షణాలు కనిపించాయి. సేంద్రీయ కాపర్ స్ప్రే మోతాదు వివరాలు కావాలా?',
      askPlaceholder: 'మందు మోతాదు, విత్తనాల సమయం లేదా మార్కెట్ ధర గురించి అడగండి...',
      askButton: 'అడగండి'
    },
    journey: {
      eyebrow: '04 // 7-దశల సమగ్ర వ్యవసాయ చక్రం',
      title1: 'ఏడు తెలివైన దశలు.',
      title2: 'నిరంతరాయ పంట ప్రయాణం.',
      subtitle: 'విత్తనం నాటడం నుండి విక్రయం వరకు ప్రతి అడుగు లాభదాయకంగా తీర్చిదిద్దబడుతుంది.',
      stageLabel: 'దశ',
      aiCapabilities: 'ఏఐ సామర్థ్యాలు',
      realTimeMetric: 'లైవ్ కొలమానం',
      farmerDecisionAction: 'రైతు తుది నిర్ణయం',
      stageTelemetry: 'దశల డేటా',
      prevStage: 'మునుపటిది',
      nextStage: 'తరువాతి దశ'
    },
    market: {
      eyebrow: '05 // దళారులు లేని ప్రత్యక్ష మార్కెట్',
      title1: 'పారదర్శక ధరలు.',
      title2: 'సురక్షిత ఎస్క్రో గ్యారెంటీ.',
      subtitle: 'మండీ కమీషన్ల మోసాలు మరియు తూకం కోతలను తొలగించి నేరుగా సంస్థాగత కొనుగోలుదారులతో ఒప్పందం.',
      traditionalMandi: 'సాంప్రదాయ హోల్‌సేల్ మండీ',
      conventional: 'పాత పద్ధతి',
      middlemanCut: '53% ఆదాయం దళారులు మరియు కమీషన్లకే పోతుంది',
      agrioraEscrow: 'అగ్రియోరా డైరెక్ట్ ఎస్క్రో',
      marginBadge: '+114% అధిక లాభం',
      netRealizationNote: '100% మొత్తం నేరుగా రైతు బ్యాంకు ఖాతాకే జమ అవుతుంది',
      verifiedBuyersHeader: 'ధృవీకరించబడిన కొనుగోలుదారులు',
      activeDemand: 'ప్రత్యక్ష సంస్థాగత డిమాండ్',
      openEscrows: 'నేడు 12 కొనుగోలు అవకాశాలు సిద్ధం',
      netToFarmer: 'రైతుకు నికర ధర',
      demandVolume: 'అవసరమైన పరిమాణం'
    },
    cta: {
      eyebrow: 'ఆహార సార్వభౌమాధికారం',
      title1: 'సజీవ డిజిటల్ వ్యవసాయ',
      title2: 'వ్యవస్థలోకి అడుగుపెట్టండి.',
      subtitle: 'వ్యవసాయాన్ని లాభదాయకమైన మరియు గౌరవప్రదమైన వ్యాపారంగా మార్చే ఆధునిక వేదిక.',
      launchBtn: 'కన్సోల్ ప్రారంభించండి',
      pipelineBtn: 'సాంకేతిక వివరాలు'
    },
    footer: {
      description: 'చిన్న రైతులకు వ్యాధి రక్షణ, సోలార్ కోల్డ్ చైన్ మరియు దళారులు లేని మార్కెట్ అందించే ఆధునిక ప్లాట్‌ఫారమ్.',
      livingTwin: 'ఫార్మ్ ట్విన్',
      operations: 'కార్యకలాపాలు',
      workspace: 'వర్క్‌స్పేస్',
      allRightsReserved: 'సర్వహక్కులు ప్రత్యేకించబడ్డాయి',
      farmerSovereignty: 'రైతు డేటా హక్కు'
    }
  },
  kn: {
    nav: {
      estateTwin: 'ಫಾರ್ಮ್ ಟ್ವಿನ್',
      challenges: 'ಸವಾಲುಗಳು',
      intelligence: 'ಬುದ್ಧಿಮತ್ತೆ',
      copilot: 'ಸಸ್ಯ ವೈದ್ಯ',
      flow: '7-ಹಂತಗಳ ಪಯಣ',
      market: 'ನೇರ ಮಾರುಕಟ್ಟೆ',
      launchConsole: 'ಕನ್ಸೋಲ್ ತೆರೆಯಿರಿ',
      selectLanguage: 'ಭಾಷೆ'
    },
    hero: {
      eyebrow: 'ಸ್ವಾಯತ್ತ ಕೃಷಿ ಮತ್ತು ಸುಗ್ಗಿಯ ಬುದ್ಧಿಮತ್ತೆ',
      titlePart1: 'ಆಧುನಿಕ ಕೃಷಿಗಾಗಿ',
      titlePart2: 'ಸಜೀವ 3D ವಿನ್ಯಾಸ.',
      subtitle: 'ಎಲೆ ರೋಗ ಪತ್ತೆ, ನಿಖರ ನೀರಾವರಿ, ಸೌರ ಶೀತಲ ಶೇಖರಣೆ ಮತ್ತು ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆಯನ್ನು ಬೆಸೆಯುವ ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಪರಿಸರ.',
      launchConsole: '3D ಕನ್ಸೋಲ್ ಪ್ರಾರಂಭಿಸಿ',
      exploreLiving: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      statsFootprint: 'ಭೂ ವಿಸ್ತೀರ್ಣ',
      statsFootprintSub: 'ಸ್ವಾಯತ್ತ ಮಣ್ಣಿನ ಗ್ರಿಡ್',
      statsShield: 'ರೋಗ ರಕ್ಷಾ ಕವಚ',
      statsShieldSub: 'ನಿಖರ ರೋಗ ಪತ್ತೆ',
      statsVault: 'ಸೌರ ಶೀತಲ ಕೋಣೆ',
      statsVaultSub: 'ಕೊಳೆಯುವಿಕೆ ತಡೆಗಟ್ಟುವಿಕೆ',
      statsRealization: 'ನೇರ ಲಾಭಾಂಶ',
      statsRealizationSub: 'ದಲ್ಲಾಳಿ ರಹಿತ ಆದಾಯ'
    },
    problem: {
      eyebrow: '01 // ಮೂಲ ಸವಾಲುಗಳು',
      title1: 'ಕೃಷಿಯು ಕೇವಲ ಒಂದು ನಿರ್ಧಾರವಲ್ಲ.',
      title2: 'ಇದು ಪರಸ್ಪರ ಜೋಡಿಸಲಾದ ಸರಣಿ.',
      subtitle: 'ಹವಾಮಾನ, ರೋಗ, ನೀರು, ಶೇಖರಣೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರತ್ಯೇಕವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೆ, ಯಾವುದಾದರೊಂದು ವೈಫಲ್ಯವು ರೈತನ ಇಡೀ ಶ್ರಮವನ್ನು ಹಾಳುಮಾಡುತ್ತದೆ.',
      phase: 'ಹಂತ',
      agrioraRes: 'ಅಗ್ರಿಯೋರಾ ಪರಿಹಾರ'
    },
    intelligence: {
      eyebrow: '02 // ಸಂಯೋಜಿತ ತಂತ್ರಜ್ಞಾನ',
      title1: 'ನಾಲ್ಕು ಮುಖ್ಯ ಆಧಾರಸ್ತಂಭಗಳು.',
      title2: 'ಒಂದು ಸ್ವಾಯತ್ತ ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್.',
      subtitle: 'ಉಪಗ್ರಹ ಮಾಹಿತಿಯಿಂದ ನೇರ ಬ್ಯಾಂಕ್ ಠೇವಣಿಯವರೆಗೆ ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನೂ ಅಗ್ರಿಯೋರಾ ಸುಗಮಗೊಳಿಸುತ್ತದೆ.',
      pillar: 'ಸ್ತಂಭ',
      telemetryInputs: 'ಮಾಹಿತಿ ಒಳಹರಿವು',
      autonomousOutput: 'ಸ್ವಯಂಚಾಲಿತ ಫಲಿತಾಂಶ'
    },
    copilot: {
      eyebrow: '03 // ಸುಧಾರಿತ ಕಂಪ್ಯೂಟರ್ ದೃಷ್ಟಿ ಮತ್ತು ಸಲಹೆ',
      title1: 'ಸ್ವಾಯತ್ತ ಸಸ್ಯ ವೈದ್ಯ.',
      title2: 'ತ್ವರಿತ ಎಲೆ ರೋಗ ಪತ್ತೆ.',
      scannerTab: 'ಹೋಲೋಗ್ರಾಫಿಕ್ ಸ್ಕ್ಯಾನರ್',
      advisorTab: 'ಧ್ವನಿ ಸಲಹೆಗಾರ',
      opticalSpectrometry: 'ದೃಗ್ವಿಜ್ಞಾನ ಪರೀಕ್ಷೆ',
      camera4k: 'ಕ್ಯಾಮೆರಾ 4K // ಮ್ಯಾಕ್ರೋ',
      runScan: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
      scanningText: 'ಶಿಲೀಂಧ್ರ ವಿಶ್ಲೇಷಣೆ ನಡೆಯುತ್ತಿದೆ...',
      scannedDone: 'ಸ್ಕ್ಯಾನ್ ಪೂರ್ಣಗೊಂಡಿದೆ',
      pathologyVerdict: 'ರೋಗ ಪತ್ತೆಯ ಫಲಿತಾಂಶ',
      severityHigh: 'ತೀವ್ರತೆ: ಹೆಚ್ಚಿನ ಅಪಾಯ',
      symptomsHeader: 'ಕಂಡುಬಂದ ಲಕ್ಷಣಗಳು',
      bioPrescription: 'ಸೂಕ್ತ ಜೈವಿಕ ಔಷಧೋಪಚಾರ',
      immediateDispatch: 'ತಕ್ಷಣದ ಸಿಂಪಡಣೆ',
      preservedYield: 'ಉಳಿಸಿದ ಬೆಳೆ ಮೌಲ್ಯ',
      weatherWindow: 'ಹವಾಮಾನ ಅನುಕೂಲ',
      aiWelcome: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕೃಷಿ ಸಸ್ಯ ವೈದ್ಯ. ವಲಯ 2 ರ ಟೊಮೆಟೊದಲ್ಲಿ ಆರಂಭಿಕ ರೋಗ ಲಕ್ಷಣ ಕಂಡುಬಂದಿದೆ. ಸಾವಯವ ತಾಮ್ರದ ಸಿಂಪಡಣೆ ಪ್ರಮಾಣ ಬೇಕೇ?',
      askPlaceholder: 'ಔಷಧದ ಪ್ರಮಾಣ, ಬಿತ್ತನೆ ದಿನ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಯ ಬಗ್ಗೆ ಕೇಳಿ...',
      askButton: 'ಕೇಳಿ'
    },
    journey: {
      eyebrow: '04 // 7-ಹಂತಗಳ ಕೃಷಿ ಜೀವನಚಕ್ರ',
      title1: 'ಏಳು ಬುದ್ಧಿವಂತ ಹಂತಗಳು.',
      title2: 'ಒಂದು ನಿರಂತರ ಪಯಣ.',
      subtitle: 'ಬಿತ್ತನೆಯಿಂದ ಹಿಡಿದು ಅಂತಿಮ ಬ್ಯಾಂಕ್ ಜಮೆಯವರೆಗೆ ಪ್ರತಿ ನಿರ್ಧಾರವೂ ರೈತನಿಗೆ ಲಾಭ ತಂದುಕೊಡುತ್ತದೆ.',
      stageLabel: 'ಹಂತ',
      aiCapabilities: 'ಎಐ ಸಾಮರ್ಥ್ಯಗಳು',
      realTimeMetric: 'ನೈಜ ಸಮಯದ ಅಳತೆ',
      farmerDecisionAction: 'ರೈತರ ನಿರ್ಧಾರ',
      stageTelemetry: 'ಹಂತದ ಮಾಹಿತಿ',
      prevStage: 'ಹಿಂದಿನದು',
      nextStage: 'ಮುಂದಿನ ಹಂತ'
    },
    market: {
      eyebrow: '05 // ದಲ್ಲಾಳಿ ರಹಿತ ನೇರ ಮಾರುಕಟ್ಟೆ',
      title1: 'ಪಾರದರ್ಶಕ ಬೆಲೆ ನಿಗದಿ.',
      title2: 'ಖಾತರಿಯ ಎಸ್ಕ್ರೋ ಪಾವತಿ.',
      subtitle: 'ಸಾಂಪ್ರದಾಯಿಕ ಮಂಡಿ ಕಮಿಷನ್ ಮತ್ತು ತೂಕದ ಕಡಿತವನ್ನು ತೊಡೆದುಹಾಕಿ ನೇರವಾಗಿ ಕಂಪನಿಗಳೊಂದಿಗೆ ಒಪ್ಪಂದ.',
      traditionalMandi: 'ಸಾಂಪ್ರದಾಯಿಕ ಮಂಡಿ',
      conventional: 'ಹಳೆಯ ಪದ್ಧತಿ',
      middlemanCut: 'ಶೇ 53 ರಷ್ಟು ಆದಾಯ ಮಧ್ಯವರ್ತಿಗಳ ಪಾಲಾಗುತ್ತದೆ',
      agrioraEscrow: 'ಅಗ್ರಿಯೋರಾ ನೇರ ಎಸ್ಕ್ರೋ',
      marginBadge: '+114% ಹೆಚ್ಚಿನ ಆದಾಯ',
      netRealizationNote: '100% ಪೂರ್ಣ ಹಣ ನೇರವಾಗಿ ರೈತರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ',
      verifiedBuyersHeader: 'ಪರಿಶೀಲಿಸಿದ ಖರೀದಿದಾರರು',
      activeDemand: 'ಸಂಸ್ಥಾಗತ ಬೇಡಿಕೆ',
      openEscrows: 'ಇಂದು 12 ನೇರ ಆದೇಶಗಳು ಲಭ್ಯ',
      netToFarmer: 'ರೈತರಿಗೆ ನಿವ್ವಳ ಬೆಲೆ',
      demandVolume: 'ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ'
    },
    cta: {
      eyebrow: 'ಆಹಾರ ಸಾರ್ವಭೌಮತ್ವ',
      title1: 'ಸಜೀವ ಕೃಷಿ',
      title2: 'ಪರಿಸರಕ್ಕೆ ಪ್ರವೇಶಿಸಿ.',
      subtitle: 'ಕೃಷಿಯನ್ನು ಅನಿಶ್ಚಿತತೆಯಿಂದ ಲಾಭದಾಯಕ ಮತ್ತು ಗೌರವಾನ್ವಿತ ಉದ್ಯಮವಾಗಿ ಪರಿವರ್ತಿಸುವ ಆಪರೇಟಿಂಗ್ ಕನ್ಸೋಲ್.',
      launchBtn: 'ಕನ್ಸೋಲ್ ಪ್ರಾರಂಭಿಸಿ',
      pipelineBtn: 'ತಾಂತ್ರಿಕ ವಿವರ'
    },
    footer: {
      description: 'ಸಣ್ಣ ರೈತರಿಗೆ ರೋಗ ರಕ್ಷಣೆ, ಸೌರ ಶೀತಲ ಸಂಗ್ರಹಣೆ ಮತ್ತು ದಲ್ಲಾಳಿ ರಹಿತ ಮಾರುಕಟ್ಟೆ ಒದಗಿಸುವ ಆಧುನಿಕ ವೇದಿಕೆ.',
      livingTwin: 'ಫಾರ್ಮ್ ಟ್ವಿನ್',
      operations: 'ಕಾರ್ಯಾಚರಣೆಗಳು',
      workspace: 'ಕಾರ್ಯಸ್ಥಳ',
      allRightsReserved: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ',
      farmerSovereignty: 'ರೈತರ ಡೇಟಾ ಹಕ್ಕು'
    }
  },
  ml: {
    nav: {
      estateTwin: 'ഫാം ട്വിൻ',
      challenges: 'വെല്ലുവിളികൾ',
      intelligence: 'ഇന്റലിജൻസ്',
      copilot: 'സസ്യ ഡോക്ടർ',
      flow: '7-ഘട്ട യാത്ര',
      market: 'നേരിട്ടുള്ള വിപണി',
      launchConsole: 'കൺസോൾ തുറക്കുക',
      selectLanguage: 'ഭാഷ'
    },
    hero: {
      eyebrow: 'സ്വയംഭരണ കാർഷിക ഇന്റലിജൻസ്',
      titlePart1: 'ആധുനിക വിളവെടുപ്പിനായി',
      titlePart2: 'സജീവ 3D ആർക്കിടെക്ചർ.',
      subtitle: 'ഇല രോഗ നിർണ്ണയം, സൂക്ഷ്മ ജലസേചനം, സൗരോർജ്ജ ശീതീകരണ സംഭരണം, നേരിട്ടുള്ള ബാങ്ക് ഇടപാട് എന്നിവ സംയോജിപ്പിക്കുന്ന ആവാസവ്യവസ്ഥ.',
      launchConsole: '3D കൺസോൾ ആരംഭിക്കുക',
      exploreLiving: 'ഇന്റലിജൻസ് അറിയുക',
      statsFootprint: 'ഫാം വിസ്തൃതി',
      statsFootprintSub: 'ഡിജിറ്റൽ സോയിൽ ഗ്രിഡ്',
      statsShield: 'രോഗ പ്രതിരോധം',
      statsShieldSub: 'കൃത്യമായ രോഗനിർണ്ണയം',
      statsVault: 'സോളാർ കോൾഡ് വോൾട്ട്',
      statsVaultSub: 'അഴുകൽ തടയൽ',
      statsRealization: 'നേരിട്ടുള്ള ലാഭം',
      statsRealizationSub: 'ഇടനിലക്കാരില്ലാത്ത അധിക വരുമാനം'
    },
    problem: {
      eyebrow: '01 // അടിസ്ഥാന വെല്ലുവിളികൾ',
      title1: 'കൃഷി ഒരു ഒറ്റപ്പെട്ട തീരുമാനമല്ല.',
      title2: 'അത് ബന്ധിതമായ ഒരു ശൃംഖലയാണ്.',
      subtitle: 'കാലാവസ്ഥ, രോഗം, ജലം, സംഭരണം, വിപണി എന്നിവ വെവ്വേറെ പ്രവർത്തിക്കുമ്പോൾ, ഒരിടത്തെ തകർച്ച കർഷകന്റെ മുഴുവൻ അധ്വാനത്തെയും ഇല്ലാതാക്കുന്നു.',
      phase: 'ഘട്ടം',
      agrioraRes: 'അഗ്രിയോറ പരിഹാരം'
    },
    intelligence: {
      eyebrow: '02 // സംയോജിത ഇന്റലിജൻസ്',
      title1: 'നാല് പ്രധാന സ്തംഭങ്ങൾ.',
      title2: 'ഒരു പൂർണ്ണ ഓപ്പറേറ്റിംഗ് സിസ്റ്റം.',
      subtitle: 'ഉപഗ്രഹ വിവരങ്ങൾ മുതൽ നേരിട്ടുള്ള ബാങ്ക് നിക്ഷേപം വരെ കർഷകന്റെ ഓരോ ചുവടും അഗ്രിയോറ ഏകോപിപ്പിക്കുന്നു.',
      pillar: 'സ്തംഭം',
      telemetryInputs: 'സിഗ്നൽ ഇൻപുട്ടുകൾ',
      autonomousOutput: 'ഓട്ടോമാറ്റിക് ഫലം'
    },
    copilot: {
      eyebrow: '03 // കമ്പ്യൂട്ടർ വിഷൻ & കാർഷിക ഉപദേശം',
      title1: 'സസ്യ ഡോക്ടർ.',
      title2: 'തത്സമയ ഇല രോഗ നിർണ്ണയം.',
      scannerTab: 'സ്കാനർ',
      advisorTab: 'ശബ്ദ ഉപദേശകൻ',
      opticalSpectrometry: 'ഒപ്റ്റിക്കൽ പരിശോധന',
      camera4k: 'ക്യാമറ 4K // മാക്രോ',
      runScan: 'സ്കാൻ ചെയ്യുക',
      scanningText: 'രോഗാണുക്കളെ വിശകലനം ചെയ്യുന്നു...',
      scannedDone: 'സ്കാൻ പൂർത്തിയായി',
      pathologyVerdict: 'രോഗനിർണ്ണയ ഫലം',
      severityHigh: 'തീവ്രത: ഉയർന്ന അപകടസാധ്യത',
      symptomsHeader: 'കണ്ടെത്തിയ ലക്ഷണങ്ങൾ',
      bioPrescription: 'ജൈവ പരിഹാരം',
      immediateDispatch: 'ഉടൻ തളിക്കുക',
      preservedYield: 'സംരക്ഷിച്ച വിളവ് മൂല്യം',
      weatherWindow: 'അനുയോജ്യ കാലാവസ്ഥ',
      aiWelcome: 'നമസ്കാരം! ഞാൻ നിങ്ങളുടെ പ്ലാന്റ് ഡോക്ടറാണ്. തക്കാളിയിൽ ആദ്യഘട്ട ഇലപ്പുള്ളി രോഗ ലക്ഷണങ്ങൾ കാണുന്നു. ജൈവ കോപ്പർ സ്പ്രേ അളവ് അറിയണമെന്നുണ്ടോ?',
      askPlaceholder: 'മരുന്ന് അളവ്, നടീൽ തീയതി, വിപണി വില എന്നിവ ചോദിക്കുക...',
      askButton: 'ചോദിക്കുക'
    },
    journey: {
      eyebrow: '04 // 7-ഘട്ട കാർഷിക ചക്രം',
      title1: 'ഏഴ് ബുദ്ധിപരമായ ഘട്ടങ്ങൾ.',
      title2: 'തുടർച്ചയായ സുരക്ഷിത യാത്ര.',
      subtitle: 'വിത്ത് വിതയ്ക്കുന്നത് മുതൽ അന്തിമ ബാങ്ക് ഇടപാട് വരെ ഓരോ തീരുമാനവും പരമാവധി ലാഭം ഉറപ്പാക്കുന്നു.',
      stageLabel: 'ഘട്ടം',
      aiCapabilities: 'എഐ ശേഷികൾ',
      realTimeMetric: 'തത്സമയ അളവ്',
      farmerDecisionAction: 'കർഷകന്റെ അന്തിമ തീരുമാനം',
      stageTelemetry: 'ഘട്ട വിവരങ്ങൾ',
      prevStage: 'മുമ്പത്തേത്',
      nextStage: 'അടുത്ത ഘട്ടം'
    },
    market: {
      eyebrow: '05 // ഇടനിലക്കാരില്ലാത്ത നേരിട്ടുള്ള വിപണി',
      title1: 'സുതാര്യമായ വിലനിർണ്ണയം.',
      title2: 'സുരക്ഷിത ബാങ്ക് എസ്ക്രോ.',
      subtitle: 'പരമ്പരാഗത മണ്ടി കമ്മീഷനുകളും തൂക്ക വെട്ടിപ്പുകളും ഇല്ലാതാക്കി നേരിട്ടുള്ള കോർപ്പറേറ്റ് വാങ്ങൽ കരാറുകൾ.',
      traditionalMandi: 'പരമ്പരാഗത മണ്ടി',
      conventional: 'പഴയ രീതി',
      middlemanCut: '53% വരുമാനം ഇടനിലക്കാരും കമ്മീഷനുകളും കൈക്കലാക്കുന്നു',
      agrioraEscrow: 'അഗ്രിയോറ ഡയറക്ട് എസ്ക്രോ',
      marginBadge: '+114% അധിക വരുമാനം',
      netRealizationNote: '100% തുകയും പൂർണ്ണമായി നേരിട്ട് കർഷകന്റെ അക്കൗണ്ടിലേക്ക്',
      verifiedBuyersHeader: 'പരിശോധിച്ചുറപ്പിച്ച വാങ്ങലുകാർ',
      activeDemand: 'സ്ഥാപനപരമായ നേരിട്ടുള്ള ആവശ്യം',
      openEscrows: 'ഇന്ന് 12 ഓർഡറുകൾ ലഭ്യമാണ്',
      netToFarmer: 'കർഷകന് ലഭിക്കുന്ന വില',
      demandVolume: 'ആവശ്യമായ അളവ്'
    },
    cta: {
      eyebrow: 'ഭക്ഷ്യ പരമാധികാരം',
      title1: 'സജീവ കാർഷിക',
      title2: 'ലോകത്തിലേക്ക് കടക്കൂ.',
      subtitle: 'കൃഷിയെ അനിശ്ചിതത്വത്തിൽ നിന്ന് ലാഭകരവും മാന്യവുമായ സംരംഭമാക്കി മാറ്റുന്ന ഓപ്പറേറ്റിംഗ് പ്ലാറ്റ്‌ഫോം.',
      launchBtn: 'കൺസോൾ ആരംഭിക്കുക',
      pipelineBtn: 'സാങ്കേതിക വിവരങ്ങൾ'
    },
    footer: {
      description: 'ചെറുകിട കർഷകർക്ക് രോഗ പ്രതിരോധം, സൗര ശീതീകരണ സംഭരണം, നേരിട്ടുള്ള വിപണി എന്നിവ നൽകുന്ന ആധുനിക സംവിധാനം.',
      livingTwin: 'ഫാം ട്വിൻ',
      operations: 'പ്രവർത്തനങ്ങൾ',
      workspace: 'വർക്ക്സ്പേസ്',
      allRightsReserved: 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം',
      farmerSovereignty: 'ഡാറ്റാ പരമാധികാരം'
    }
  },
  mr: {
    nav: {
      estateTwin: 'शेत डिजिटल ट्विन',
      challenges: 'आव्हाने',
      intelligence: 'इंटेलिजेंस',
      copilot: 'एआय प्लांट डॉक्टर',
      flow: '7-टप्प्यांचा प्रवास',
      market: 'थेट बाजारपेठ',
      launchConsole: 'कन्सोल उघडा',
      selectLanguage: 'भाषा'
    },
    hero: {
      eyebrow: 'स्वायत्त कृषी आणि पीक बुद्धिमत्ता',
      titlePart1: 'आधुनिक शेतीसाठी',
      titlePart2: 'सजीव 3D वास्तुकला.',
      subtitle: 'पानांचे रोग निदान, सूक्ष्म सिंचन, सौर शीतगृह आणि थेट बँक खात्यात पैसे जमा करणारी आधुनिक डिजिटल परिसंस्था.',
      launchConsole: '3D कन्सोल सुरू करा',
      exploreLiving: 'माहिती जाणून घ्या',
      statsFootprint: 'शेत क्षेत्रफळ',
      statsFootprintSub: 'डिजिटल सॉईल ग्रीड',
      statsShield: 'रोग संरक्षण कवच',
      statsShieldSub: 'अचूक रोग निदान',
      statsVault: 'सोलर कोल्ड स्टोरेज',
      statsVaultSub: 'नासाडीपासून संरक्षण',
      statsRealization: 'थेट नफा',
      statsRealizationSub: 'दलालांशिवाय जास्तीचा परतावा'
    },
    problem: {
      eyebrow: '01 // मूळ समस्या',
      title1: 'शेती हा एकटा निर्णय नाही.',
      title2: 'ती एक साखळी आहे.',
      subtitle: 'जेव्हा हवामान, रोग, पाणी, साठवणूक आणि बाजारपेठ वेगवेगळी काम करतात, तेव्हा एका चुकीमुळे शेतकऱ्याचे संपूर्ण नुकसान होते.',
      phase: 'टप्पा',
      agrioraRes: 'अॅग्रिओरा उपाय'
    },
    intelligence: {
      eyebrow: '02 // एकात्मिक बुद्धिमत्ता',
      title1: 'चार मुख्य खांब.',
      title2: 'एक संपूर्ण स्वायत्त प्रणाली.',
      subtitle: 'उपग्रह डेटापासून थेट बँक खात्यापर्यंत, अॅग्रिओरा प्रत्येक पाऊल शेतकऱ्याच्या फायद्यासाठी सुलभ करते.',
      pillar: 'खांब',
      telemetryInputs: 'सिग्नल इनपुट',
      autonomousOutput: 'एआय निष्कर्ष'
    },
    copilot: {
      eyebrow: '03 // संगणक दृष्टी आणि पीक सल्ला',
      title1: 'स्वायत्त प्लांट डॉक्टर.',
      title2: 'पानांच्या रोगाचे त्वरित निदान.',
      scannerTab: 'होलोग्राफिक स्कॅनर',
      advisorTab: 'आवाज सल्लागार',
      opticalSpectrometry: 'ऑप्टिकल तपासणी',
      camera4k: 'कॅमेरा 4K // मॅक्रो',
      runScan: 'स्कॅन करा',
      scanningText: 'बुरशीचा अभ्यास करत आहे...',
      scannedDone: 'स्कॅन पूर्ण झाले',
      pathologyVerdict: 'रोग निदान निकाल',
      severityHigh: 'धोका: उच्च पातळी',
      symptomsHeader: 'आढळलेली लक्षणे',
      bioPrescription: 'जैविक औषध उपाय',
      immediateDispatch: 'तातडीने फवारणी',
      preservedYield: 'वाचवलेले पीक मूल्य',
      weatherWindow: 'हवामान अनुकूलता',
      aiWelcome: 'नमस्कार! मी तुमचा शेत वनस्पती डॉक्टर आहे. टोमॅटो पिकावर करपा रोगाची लक्षणे आढळली आहेत. सेंद्रिय तांबे फवारणीचे प्रमाण जाणून घ्यायचे आहे का?',
      askPlaceholder: 'औषध प्रमाण, पेरणी वेळ किंवा बाजारभावाबद्दल विचारा...',
      askButton: 'विचारा'
    },
    journey: {
      eyebrow: '04 // 7-टप्प्यांचे संपूर्ण कृषी चक्र',
      title1: 'सात बुद्धिमान टप्पे.',
      title2: 'एक अखंड आणि फायदेशीर प्रवास.',
      subtitle: 'पेरणीपासून ते अंतिम बँक ठेवीपर्यंत प्रत्येक निर्णय शेतकऱ्याचा नफा वाढवण्यासाठी नियोजित केला जातो.',
      stageLabel: 'टप्पा',
      aiCapabilities: 'एआय क्षमता',
      realTimeMetric: 'लाईव्ह निर्देशांक',
      farmerDecisionAction: 'शेतकऱ्याचा निर्णय',
      stageTelemetry: 'डेटा तपशील',
      prevStage: 'मागील',
      nextStage: 'पुढील टप्पा'
    },
    market: {
      eyebrow: '05 // दलालमुक्त थेट बाजार',
      title1: 'पारदर्शक भाव.',
      title2: 'सुरक्षित बँक एस्क्रो हमी.',
      subtitle: 'पारंपारिक अडत आणि वजनातील कापाकापी बंद करून थेट खरेदीदार कंपन्यांशी करार.',
      traditionalMandi: 'पारंपारिक घाऊक बाजार',
      conventional: 'जुनी पद्धत',
      middlemanCut: '53% उत्पन्न दलाल आणि अनाठायी शुल्कात जाते',
      agrioraEscrow: 'अॅग्रिओरा थेट एस्क्रो',
      marginBadge: '+114% जास्तीचा परतावा',
      netRealizationNote: '100% पूर्ण रक्कम थेट शेतकऱ्याच्या बँक खात्यात जमा',
      verifiedBuyersHeader: 'प्रमाणित खरेदीदार',
      activeDemand: 'थेट संस्थात्मक मागणी',
      openEscrows: 'आज 12 थेट खरेदी ऑर्डर उपलब्ध',
      netToFarmer: 'शेतकऱ्याला मिळणारा भाव',
      demandVolume: 'आवश्यक प्रमाण'
    },
    cta: {
      eyebrow: 'अन्न सार्वभौमत्व',
      title1: 'सजीव डिजिटल शेती',
      title2: 'परिसंस्थेत सहभागी व्हा.',
      subtitle: 'शेतीला अनिश्चिततेतून बाहेर काढून एक फायदेशीर आणि सन्माननीय व्यवसाय बनवणारे ऑपरेटिंग कन्सोल.',
      launchBtn: 'कन्सोल सुरू करा',
      pipelineBtn: 'तांत्रिक माहिती'
    },
    footer: {
      description: 'लहान शेतकऱ्यांना अचूक पीक संरक्षण, सौर शीत साखळी आणि थेट बाजारपेठ उपलब्ध करून देणारी स्वायत्त प्रणाली.',
      livingTwin: 'शेत ట్విನ್',
      operations: 'कामकाज',
      workspace: 'कार्यक्षेत्र',
      allRightsReserved: 'सर्व हक्क राखीव',
      farmerSovereignty: 'शेतकरी डेटा हक्क'
    }
  }
};

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');

  const setLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('agriora_lang', lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('agriora_lang') as SupportedLanguage;
      if (saved && TRANSLATIONS[saved]) {
        setCurrentLanguage(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
