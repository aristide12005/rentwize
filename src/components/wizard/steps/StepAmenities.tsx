import React from 'react';
import { useWizard } from '../WizardContext';
import { Check } from 'lucide-react';

const AMENITIES_LIST = [
  'Furnished', 'Air conditioning', 'Security guard', 
  'Kitchen access', 'Parking', 'Water tank', 
  'Balcony', 'Washing machine', 'Elevator'
];

export const StepAmenities: React.FC = () => {
  const { formData, updateFormData } = useWizard();

  const toggleAmenity = (amenity: string) => {
    const current = formData.amenities || [];
    if (current.includes(amenity)) {
      updateFormData({ amenities: current.filter(a => a !== amenity) });
    } else {
      updateFormData({ amenities: [...current, amenity] });
    }
  };

  return (
    <div className="wizard-step animate-fade-in">
      <h2>Additional Details</h2>
      <p className="step-subtitle">Select the amenities present in your listing.</p>
      
      <div className="amenities-grid">
        {AMENITIES_LIST.map((amenity) => {
          const isSelected = formData.amenities?.includes(amenity);
          return (
            <button
              key={amenity}
              type="button"
              className={`amenity-chip ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleAmenity(amenity)}
            >
              <div className={`checkbox-circle ${isSelected ? 'checked' : ''}`}>
                {isSelected && <Check size={14} strokeWidth={3} />}
              </div>
              {amenity}
            </button>
          );
        })}
      </div>
    </div>
  );
};
