export interface ServiceItem {
  id: string;
  title: string;
  category: 'Enterprise' | 'Ventures';
  link: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  link: string;
}

export interface RecognitionItem {
  id: string;
  category: string;
  items: { year: string; name: string }[];
}

// New Types for Edit Mode
export interface BrandColors {
  background: string;
  foreground: string;
  gray: string;
  lightGray: string;
  textGray: string;
  accent: string;
}

export interface BrandTypography {
  displayFont: string;
  bodyFont: string;
  letterSpacing: number; // multiplier for tracking
}

export interface BrandContent {
  brandName: string;
  version: string;
  heroHeading: string;
  missionStatement: string;
}

export interface BrandSettings {
  colors: BrandColors;
  typography: BrandTypography;
  content: BrandContent;
}

export interface BrandContextType {
  settings: BrandSettings;
  updateSettings: (newSettings: Partial<BrandSettings>) => void;
  updateColor: (key: keyof BrandColors, value: string) => void;
  updateTypography: (key: keyof BrandTypography, value: string | number) => void;
  updateContent: (key: keyof BrandContent, value: string) => void;
  resetSettings: () => void;
  isEditorOpen: boolean;
  toggleEditor: () => void;
  isSecretMenuOpen: boolean;
  toggleSecretMenu: () => void;
}