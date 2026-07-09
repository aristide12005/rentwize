import React from 'react';
import { useWizard } from '../WizardContext';
import { Bath, Users } from 'lucide-react';
import type { BathroomType } from '../../../types';

export const StepBathroom: React.FC = () => {
  const { formData, updateFormData } = useWizard();

  const options: { value: BathroomType; label: string; desc: string; icon: React.ReactNode }[] = [
    { value: 'inside', label: 'Inside the room', desc: 'Private ensuite bathroom', icon: <Bath size={24} /> },
    { value: 'shared', label: 'Outside / Shared', desc: 'Shared with other roommates', icon: <Users size={24} /> },
  ];

  return (
    <div className="wizard-step animate-fade-in">
      <h2>Bathroom Setup</h2>
      <p className="step-subtitle">Is the bathroom private or shared?</p>
      
      <div className="radio-cards grid-2">
        {options.map((opt) => (
          <label key={opt.value} className={`radio-card ${formData.bathroomType === opt.value ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="bathroomType" 
              value={opt.value} 
              checked={formData.bathroomType === opt.value}
              onChange={() => updateFormData({ bathroomType: opt.value as BathroomType })}
            />
            <div className="radio-card-content center-content">
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

      {formData.bathroomType === 'shared' && (
        <div className="form-group mt-6 animate-slide-up">
          <label>How many people share this bathroom? (Optional)</label>
          <input 
            type="number" 
            min="1"
            className="wizard-input" 
            placeholder="e.g. 2"
            value={formData.sharedWithCount || ''}
            onChange={(e) => updateFormData({ sharedWithCount: parseInt(e.target.value) || undefined })}
          />
        </div>
      )}
    </div>
  );
};
