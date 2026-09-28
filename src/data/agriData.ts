import { FarmStage, CropDiagnostic, MarketBuyer, LanguageData } from '../types';

export const FARM_JOURNEY_STAGES: FarmStage[] = [
  {
    id: 'plan',
    step: '01',
    name: 'PLAN',
    subtitle: 'Predictive Agro-Climatic Sowing',
    description: 'AI models integrate soil spectroscopy, seasonal monsoon probability, groundwater tables, and historical localized yields to formulate the optimal crop-variety calendar.',
    aiCapabilities: [
      'Soil nutrient & nitrogen-phosphorus-potassium balance mapping',
      'Hyper-local 14-day weather & monsoon onset modeling',
      'Varietal seed matching for climate resilience',
      'Water availability & aquifer recharge estimation'
    ],
    metrics: [
      { label: 'Yield Risk Index', value: '11.4%', delta: '-18%' },
      { label: 'Seed Suitability', value: '96.2%', delta: '+12%' },
      { label: 'Water Budgeting', value: '410 mm', delta: 'Optimal' }
    ],
    farmerAction: 'Review crop variety recommendation and lock sowing window',
    status: 'active'
  },
  {
    id: 'grow',
    step: '02',
    name: 'GROW',
    subtitle: 'Precision Resource & Irrigation Support',
    description: 'Micro-climate sensors and satellite NDVI imagery trigger dynamic drip irrigation and micro-nutrient schedules, minimizing water waste and soil degradation.',
    aiCapabilities: [
      'Daily evapotranspiration (ETc) calculation',
      'Root-zone soil moisture boundary monitoring',
      'Micro-nutrient dosing aligned with vegetative growth stages',
      'Automated solar pump scheduling during peak solar yield'
    ],
    metrics: [
      { label: 'Irrigation Saved', value: '34.8%', delta: '+34.8%' },
      { label: 'Crop Vigor (NDVI)', value: '0.84', delta: 'Peak' },
      { label: 'Nutrient Efficiency', value: '88%', delta: '+22%' }
    ],
    farmerAction: 'Activate automated drip line valve for Zone 2',
    status: 'upcoming'
  },
  {
    id: 'protect',
    step: '03',
    name: 'PROTECT',
    subtitle: 'Early Diagnostic & Pest Surveillance',
    description: 'Computer vision diagnostics analyze smartphone leaf scans to detect fungal blights, bacterial wilt, and pest infestations up to 72 hours before visible defoliation.',
    aiCapabilities: [
      'Sub-millimeter fungal sporulation pattern recognition',
      'Regional pest swarm trajectory forecasting',
      'Targeted bio-fungicide dosing instead of blanket chemical sprays',
      'Certified agronomist review loop for borderline diagnoses'
    ],
    metrics: [
      { label: 'Detection Speed', value: '< 3 sec', delta: 'Realtime' },
      { label: 'Spray Reduction', value: '38%', delta: 'Less Chemical' },
      { label: 'Crop Saved Index', value: '94%', delta: 'High Protection' }
    ],
    farmerAction: 'Apply localized neem extract spray on northern boundary rows',
    status: 'upcoming'
  },
  {
    id: 'harvest',
    step: '04',
    name: 'HARVEST',
    subtitle: 'Optimal Ripeness & Loss Prevention',
    description: 'Brix sugar levels, fruit firmness estimates, and imminent precipitation warnings combine to predict the precise 36-hour harvest window for peak market grade.',
    aiCapabilities: [
      'Spectral maturity and moisture content assessment',
      'Precipitation risk window synchronization',
      'Shared local harvesting equipment & labor dispatch',
      'Field-level sorting guidelines to maximize Grade-A yield'
    ],
    metrics: [
      { label: 'Grade-A Produce', value: '87.4%', delta: '+19%' },
      { label: 'Harvest Loss', value: '2.1%', delta: '-6.8%' },
      { label: 'Market Timing', value: 'Optimal', delta: 'Peak Brix' }
    ],
    farmerAction: 'Schedule harvesting crew for Thursday 05:30 AM window',
    status: 'upcoming'
  },
  {
    id: 'store',
    step: '05',
    name: 'STORE',
    subtitle: 'Decentralized Cold-Chain Allocation',
    description: 'Rather than rushing to sell perishable produce at distress rates, farmers secure shared slots in nearby solar micro-cold rooms with automated ethylene monitoring.',
    aiCapabilities: [
      'Real-time micro-cold room slot reservation (within 7 km)',
      'Ethylene gas & relative humidity sensor telemetry',
      'Dynamic shelf-life extension projections (up to 18 days)',
      'Digital warehouse receipts enabling instant crop collateral credit'
    ],
    metrics: [
      { label: 'Storage Shelf Life', value: '18 Days', delta: '+12 Days' },
      { label: 'Cold-Chain Integrity', value: '99.2%', delta: 'Stable' },
      { label: 'Storage Cost', value: '₹0.35/kg/d', delta: 'Subsidized' }
    ],
    farmerAction: 'Check-in 1,200 kg batch at GreenVault Solar Pod #4',
    status: 'upcoming'
  },
  {
    id: 'transport',
    step: '06',
    name: 'TRANSPORT',
    subtitle: 'Shared Route Optimization & EV Logistics',
    description: 'Multi-farm pooling algorithms combine smaller harvest crates into refrigerated shared transit, eliminating empty-return trips and slashing transportation fees.',
    aiCapabilities: [
      'Multi-farm milk-run route consolidation',
      'Refrigerated EV fleet telematics & temperature logging',
      'Real-time traffic avoidance to avoid spoilage delays',
      'Shared freight fee splitting across participating farmers'
    ],
    metrics: [
      { label: 'Logistics Cost', value: '₹2.80/kg', delta: '-42%' },
      { label: 'Transit Loss', value: '< 1.4%', delta: '-8.6%' },
      { label: 'CO2 Emission', value: '-65%', delta: 'EV Fleet' }
    ],
    farmerAction: 'Confirm pickup slot with Village Route Van #3',
    status: 'upcoming'
  },
  {
    id: 'sell',
    step: '07',
    name: 'SELL FAIRLY',
    subtitle: 'Transparent Price Discovery & Direct Buyer Access',
    description: 'Direct matching between verified institutional buyers, co-ops, and food processors eliminates predatory intermediaries, returning fair value to growers.',
    aiCapabilities: [
      'Transparent spot & forward contract price discovery',
      'Direct buyer escrow with guaranteed 24-hour bank transfer',
      'Traceable farm-to-fork QR quality credentials',
      'Distress-sale prevention through market arbitrage alerts'
    ],
    metrics: [
      { label: 'Farmer Realization', value: '₹34.20/kg', delta: '+63% vs Mandi' },
      { label: 'Payment Latency', value: '< 24 hrs', delta: 'Direct Escrow' },
      { label: 'Market Transparency', value: '100%', delta: 'Zero Hidden Cuts' }
    ],
    farmerAction: 'Accept verified bid from AgroProcessing Co-operative',
    status: 'upcoming'
  }
];

export const SAMPLE_DIAGNOSTICS: Record<string, CropDiagnostic> = {
  tomato_blight: {
    cropName: 'Roma Tomato (Lycopersicon esculentum)',
    issueName: 'Early Blight (Alternaria solani)',
    scientificName: 'Alternaria solani',
    riskLevel: 'Moderate',
    confidence: 94.6,
    weatherCorrelation: 'High humidity (82%) and warm nights (24°C) created favorable conditions for spore germination over the last 48 hours.',
    symptoms: [
      'Concentric dark brown rings on lower mature leaves',
      'Yellow chlorotic halos surrounding lesions',
      'No stem girdling observed yet in upper canopy'
    ],
    recommendedActions: [
      { step: 1, action: 'Prune and safely burn or discard infected lower 3-leaf clusters immediately.', urgency: 'Within 12 hours' },
      { step: 2, action: 'Apply targeted bio-fungicide (Trichoderma viride or copper hydroxide at 2.5g/L) during early morning.', urgency: 'Next 24 hours' },
      { step: 3, action: 'Switch to morning-only drip irrigation to allow canopy surface to dry before evening.', urgency: 'Immediate' }
    ],
    expertVerificationRequired: false
  },
  rice_blast: {
    cropName: 'Basmati Paddy (Oryza sativa)',
    issueName: 'Leaf Blast (Magnaporthe oryzae)',
    scientificName: 'Magnaporthe oryzae',
    riskLevel: 'High',
    confidence: 91.8,
    weatherCorrelation: 'Extended overcast sky with morning dew retention > 8 hours and excess nitrogen application.',
    symptoms: [
      'Spindle-shaped diamond lesions with gray-white centers',
      'Brown borders coalescing across midrib',
      'Upper flag leaves showing initial pinhead lesions'
    ],
    recommendedActions: [
      { step: 1, action: 'Temporarily suspend nitrogen top-dressing; apply potassium sulphate to bolster cell wall rigidity.', urgency: 'Immediate' },
      { step: 2, action: 'Deploy recommended bio-agent Pseudomonas fluorescens spray (0.2%).', urgency: 'Within 24 hours' },
      { step: 3, action: 'Maintain standing water at 2-3 cm; avoid deep submergence.', urgency: 'Next 48 hours' }
    ],
    expertVerificationRequired: true
  },
  wheat_rust: {
    cropName: 'Durum Wheat (Triticum durum)',
    issueName: 'Stripe / Yellow Rust (Puccinia striiformis)',
    scientificName: 'Puccinia striiformis',
    riskLevel: 'Critical',
    confidence: 96.1,
    weatherCorrelation: 'Cool ambient temperatures (12°C–18°C) with persistent fog across northern districts.',
    symptoms: [
      'Linear stripes of bright yellow-orange pustules on leaf blades',
      'Premature drying of leaf tips',
      'Powdery spore deposit upon contact'
    ],
    recommendedActions: [
      { step: 1, action: 'Alert district agronomist extension officer; this is a regional quarantine alert trigger.', urgency: 'Within 6 hours' },
      { step: 2, action: 'Localized spot-application of approved triazole fungicide on perimeter 15 meters buffer.', urgency: 'Within 18 hours' },
      { step: 3, action: 'Avoid moving machinery from infected sector to healthy acreage to curb mechanical transmission.', urgency: 'Immediate' }
    ],
    expertVerificationRequired: true
  }
};

export const MARKET_BUYERS_DATA: MarketBuyer[] = [
  {
    id: 'buyer-01',
    name: 'Buyer A (Regional Processing Co-operative)',
    type: 'Farmer Producer Co-op',
    distanceKm: 14.5,
    offeredPriceKg: 38.50,
    indicativeTransportCostKg: 2.10,
    farmerNetRealizationKg: 36.40,
    volumeNeededTons: 4.5,
    paymentTerms: 'Direct Escrow T+0 UPI/NEFT',
    fairTradeCertified: true,
    demandLevel: 'HIGH'
  },
  {
    id: 'buyer-02',
    name: 'Buyer B (Direct Retail Network)',
    type: 'Direct Farm-to-Retail Chain',
    distanceKm: 22.0,
    offeredPriceKg: 41.00,
    indicativeTransportCostKg: 3.80,
    farmerNetRealizationKg: 37.20,
    volumeNeededTons: 2.5,
    paymentTerms: 'Guaranteed 24-hr Escrow',
    fairTradeCertified: true,
    demandLevel: 'HIGH'
  },
  {
    id: 'buyer-03',
    name: 'Buyer C (Institutional Procurement Hub)',
    type: 'State Food Security Hub',
    distanceKm: 18.0,
    offeredPriceKg: 35.00,
    indicativeTransportCostKg: 2.50,
    farmerNetRealizationKg: 32.50,
    volumeNeededTons: 10.0,
    paymentTerms: 'Direct DBT Bank Credit',
    fairTradeCertified: true,
    demandLevel: 'MEDIUM'
  }
];

export const LANGUAGES_DATA: LanguageData[] = [
  {
    code: 'en',
    nativeName: 'English',
    englishName: 'English',
    greeting: 'Welcome to AGRIORA farm intelligence.',
    sampleVoicePrompt: 'How much water does my tomato crop need today?',
    sampleAiResponse: 'Sensor Zone 2 has 68% moisture. Delay irrigation by 18 hours to save 450 liters.'
  },
  {
    code: 'ta',
    nativeName: 'தமிழ்',
    englishName: 'Tamil',
    greeting: 'அக்ரியோரா விவசாய நுண்ணறிவுக்கு நல்வரவு.',
    sampleVoicePrompt: 'இன்று என் தக்காளி பயிருக்கு எவ்வளவு தண்ணீர் தேவை?',
    sampleAiResponse: 'மண் ஈரப்பதம் 68% உள்ளது. 18 மணிநேரம் நீர்ப்பாசனத்தை தள்ளிப்போட்டு 450 லிட்டர் தண்ணீரை சேமிக்கவும்.'
  },
  {
    code: 'hi',
    nativeName: 'हिन्दी',
    englishName: 'Hindi',
    greeting: 'एग्रिओरा कृषि बुद्धिमत्ता में आपका स्वागत है।',
    sampleVoicePrompt: 'आज मेरी टमाटर की फसल को कितने पानी की जरूरत है?',
    sampleAiResponse: 'मिट्टी की नमी 68% है। 18 घंटे सिंचाई टालें और 450 लीटर पानी बचाएं।'
  },
  {
    code: 'te',
    nativeName: 'తెలుగు',
    englishName: 'Telugu',
    greeting: 'అగ్రియోరా వ్యవసాయ ఇంటెలిజెన్స్‌కు స్వాగతం.',
    sampleVoicePrompt: 'ఈ రోజు నా టమోటా పంటకు ఎంత నీరు అవసరం?',
    sampleAiResponse: 'నేల తేమ 68% ఉంది. 18 గంటలు నీటిపారుదల వాయిదా వేసి 450 లీటర్ల నీటిని ఆదా చేయండి.'
  },
  {
    code: 'kn',
    nativeName: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    greeting: 'ಅಗ್ರಿಯೋರಾ ಕೃಷಿ ಇಂಟೆಲಿಜೆನ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ.',
    sampleVoicePrompt: 'ಇಂದು ನನ್ನ ಟೊಮೆಟೊ ಬೆಳೆಗೆ ಎಷ್ಟು ನೀರು ಬೇಕು?',
    sampleAiResponse: 'ಮಣ್ಣಿನ ತೇವಾಂಶ 68% ಇದೆ. 18 ಗಂಟೆಗಳ ಕಾಲ ನೀರಾವರಿ ಮುಂದೂಡಿ 450 ಲೀಟರ್ ನೀರನ್ನು ಉಳಿಸಿ.'
  },
  {
    code: 'ml',
    nativeName: 'മലയാളം',
    englishName: 'Malayalam',
    greeting: 'അഗ്രിയോറ കാർഷിക ഇന്റലിജൻസിലേക്ക് സ്വാഗതം.',
    sampleVoicePrompt: 'ഇന്ന് എന്റെ തക്കാളി വിളയ്ക്ക് എത്ര വെള്ളം ആവശ്യമുണ്ട്?',
    sampleAiResponse: 'മണ്ണിലെ ഈർപ്പം 68% ആണ്. 18 മണിക്കൂർ ജലസേചനം മാറ്റി 450 ലിറ്റർ വെള്ളം ലാഭിക്കുക.'
  },
  {
    code: 'mr',
    nativeName: 'मराठी',
    englishName: 'Marathi',
    greeting: 'अॅग्रिओरा शेती बुद्धिमत्तेमध्ये आपले स्वागत आहे.',
    sampleVoicePrompt: 'आज माझ्या टोमॅटो पिकाला किती पाण्याची गरज आहे?',
    sampleAiResponse: 'मातीचा ओलावा 68% आहे. 18 तास सिंचन पुढे ढकला आणि 450 लिटर पाण्याची बचत करा.'
  }
];
