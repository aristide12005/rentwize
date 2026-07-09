import React, { createContext, useContext, useState } from 'react';
import type { Listing, ListingType, BathroomType, BillPreferences, AttachedItem } from '../../types';

export type PartialListing = Partial<Omit<Listing, 'id' | 'sellerId' | 'sellerName' | 'createdAt'>> & {
  type?: ListingType;
  bathroomType?: BathroomType;
  bills?: BillPreferences;
  amenities?: string[];
  imageUrls?: string[];
  attachedItems?: AttachedItem[];
  price?: number;
  title?: string;
  location?: string;
  neighbourhoodDesc?: string;
  sharedWithCount?: number;
};

interface WizardContextType {
  formData: PartialListing;
  updateFormData: (data: Partial<PartialListing>) => void;
  step: number;
  setStep: (step: number | ((s: number) => number)) => void;
  totalSteps: number;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export const WizardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PartialListing>({
    type: 'room',
    bathroomType: 'shared',
    bills: { water: 'included', electricity: 'usage', internet: 'included' },
    amenities: [],
    imageUrls: [],
    attachedItems: [],
    price: 0,
    title: '',
    location: '',
    neighbourhoodDesc: '',
  });

  const updateFormData = (data: Partial<PartialListing>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const totalSteps = 8; // 7 base steps + 1 items step

  return (
    <WizardContext.Provider value={{ formData, updateFormData, step, setStep, totalSteps }}>
      {children}
    </WizardContext.Provider>
  );
};

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (!context) throw new Error('useWizard must be used within WizardProvider');
  return context;
};
