export interface FarmStage {
  id: string;
  step: string;
  name: string;
  subtitle: string;
  description: string;
  aiCapabilities: string[];
  metrics: { label: string; value: string; delta?: string }[];
  farmerAction: string;
  status: 'active' | 'upcoming' | 'completed';
}

export interface CropDiagnostic {
  cropName: string;
  issueName: string;
  scientificName: string;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  confidence: number;
  weatherCorrelation: string;
  symptoms: string[];
  recommendedActions: { step: number; action: string; urgency: string }[];
  expertVerificationRequired: boolean;
}

export interface MarketBuyer {
  id: string;
  name: string;
  type: string;
  distanceKm: number;
  offeredPriceKg: number;
  indicativeTransportCostKg: number;
  farmerNetRealizationKg: number;
  volumeNeededTons: number;
  paymentTerms: string;
  fairTradeCertified: boolean;
  demandLevel: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface SupplyChainNode {
  id: string;
  name: string;
  type: 'farm' | 'collection' | 'storage' | 'transport' | 'market';
  location: string;
  status: 'optimal' | 'warning' | 'rerouted';
  metric: string;
  capacity?: string;
}

export type SupportedLanguage = 
  | 'en' 
  | 'ta' 
  | 'hi' 
  | 'te' 
  | 'kn' 
  | 'ml' 
  | 'mr';

export interface LanguageData {
  code: SupportedLanguage;
  nativeName: string;
  englishName: string;
  greeting: string;
  sampleVoicePrompt: string;
  sampleAiResponse: string;
}
