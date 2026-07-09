import React from 'react';
import { useWizard } from '../WizardContext';
import { Building2, Home, HelpCircle } from 'lucide-react';
import type { ListingType } from '../../../types';

export const StepListingType: React.FC = () => {
  const { formData, updateFormData } = useWizard();

  const options: { value: ListingType; label: string; desc: string; icon: React.ReactNode }[] = [
    { value: 'room', label: 'A Room', desc: 'In a shared apartment or house', icon: <Building2 size={24} /> },
    { value: 'apartment', label: 'Entire Place', desc: 'An apartment or studio to yourself', icon: <Home size={24} /> },
    { value: 'not_sure', label: 'Not Sure', desc: "I haven't decided yet", icon: <HelpCircle size={24} /> },
  ];

  return (
    <div className="wizard-step animate-fade-in">
      <h2>What are you listing?</h2>
      <p className="step-subtitle">Select the option that best describes your space.</p>
      
      <div className="radio-cards">
        {options.map((opt) => (
          <label key={opt.value} className={`radio-card ${formData.type === opt.value ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="listingType" 
              value={opt.value} 
              checked={formData.type === opt.value}
              onChange={() => updateFormData({ type: opt.value as ListingType })}
            />
            <div className="radio-card-content">
              <div className="radio-card-icon">{opt.icon}</div>
              <div className="radio-card-text">
                <h4>{opt.label}</h4>
                <p>{opt.desc}</p>
              </div>
            </div>
            <div className="radio-card-border"></div>
          </label>
        ))}
      </div>
    </div>
  );
};
