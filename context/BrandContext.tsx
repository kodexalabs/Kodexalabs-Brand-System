import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BrandSettings, BrandContextType, BrandColors, BrandTypography, BrandContent } from '../types';

const defaultSettings: BrandSettings = {
  colors: {
    background: '#000000',
    foreground: '#FFFFFF',
    gray: '#1a1a1a',
    lightGray: '#333333',
    textGray: '#888888',
    accent: '#FFFFFF'
  },
  typography: {
    displayFont: 'Space Grotesk',
    bodyFont: 'Inter',
    letterSpacing: 0, // Default 0 (normal)
  },
  content: {
    brandName: 'KODEXALABS',
    version: 'V.2.0.24',
    heroHeading: 'Brand \nGuidelines',
    missionStatement: 'To eliminate friction in the deployment of sovereign digital assets and infrastructure.'
  }
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<BrandSettings>(defaultSettings);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isSecretMenuOpen, setIsSecretMenuOpen] = useState(false);

  const updateSettings = (newSettings: Partial<BrandSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const updateColor = (key: keyof BrandColors, value: string) => {
    setSettings((prev) => ({
      ...prev,
      colors: { ...prev.colors, [key]: value }
    }));
  };

  const updateTypography = (key: keyof BrandTypography, value: string | number) => {
    setSettings((prev) => ({
      ...prev,
      typography: { ...prev.typography, [key]: value }
    }));
  };

  const updateContent = (key: keyof BrandContent, value: string) => {
    setSettings((prev) => ({
      ...prev,
      content: { ...prev.content, [key]: value }
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const toggleEditor = () => setIsEditorOpen(!isEditorOpen);
  const toggleSecretMenu = () => setIsSecretMenuOpen(!isSecretMenuOpen);

  return (
    <BrandContext.Provider value={{ 
      settings, 
      updateSettings, 
      updateColor, 
      updateTypography, 
      updateContent,
      resetSettings,
      isEditorOpen,
      toggleEditor,
      isSecretMenuOpen,
      toggleSecretMenu
    }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};