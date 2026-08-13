export interface RegionalPrice {
  regionCode: 'TR' | 'AR' | 'UA' | 'US' | 'EU';
  regionName: string;
  flag: string;
  currency: string;
  symbol: string;
  rawPrice: number;
  convertedPriceIrt: number;
}

export interface SteamGame {
  appId: number;
  title: string;
  originalPriceUsd: number;
  headerImage: string;
  developer: string;
  releaseDate: string;
  score: number;
  description: string;
  trailerUrl: string;
  tags: string[];
  requirements: {
    minimum: string;
    recommended: string;
  };
  regionalPrices: RegionalPrice[];
}

export interface CurrencyRates {
  tryIrt: number; // e.g., 1,820 Tomans per 1 TRY
  usdIrt: number; // e.g., 61,500 Tomans per 1 USD
  eurIrt: number; // e.g., 67,200 Tomans per 1 EUR
  uahIrt: number; // e.g., 1,500 Tomans per 1 UAH
  lastUpdated: string;
  provider: 'Nobitex API' | 'TGJU Free-Market' | 'Bonbast' | 'Custom Rate';
}

export interface ShortcodeOption {
  id: string;
  title: string;
  shortcode: string;
  description: string;
  previewOutput: string;
  category: 'pricing' | 'media' | 'specs' | 'matrix';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  storeName: string;
  avatar: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Sync' | 'Nobitex & API' | 'Technical';
}
