import React from 'react';
import { useWizard } from '../WizardContext';

export const StepLocation: React.FC = () => {
  const { formData, updateFormData } = useWizard();

  return (
    <div className="wizard-step animate-fade-in">
      <h2>Location Details</h2>
      <p className="step-subtitle">Where is your space located?</p>
      
      <div className="form-group mb-6">
        <label className="wizard-label">Neighborhood / Area</label>
        <input 
          type="text" 
          className="wizard-input" 
          placeholder="e.g. Grand Dakar, Ngor..."
          value={formData.location || ''}
          onChange={(e) => updateFormData({ location: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label className="wizard-label">What's nearby? (Optional)</label>
        <textarea 
          className="wizard-textarea" 
          placeholder="e.g. 5 min from the mosque, near the BRT station..."
          rows={4}
          value={formData.neighbourhoodDesc || ''}
          onChange={(e) => updateFormData({ neighbourhoodDesc: e.target.value })}
        />
        <span className="input-hint">Mentioning landmarks helps people find your listing faster.</span>
      </div>
    </div>
  );
};
