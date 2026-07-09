import React from 'react';
import { useWizard } from '../WizardContext';

export const StepReview: React.FC = () => {
  const { formData } = useWizard();

  return (
    <div className="wizard-step animate-fade-in">
      <h2>Review & Confirm</h2>
      <p className="step-subtitle">Make sure everything looks good before posting.</p>
      
      <div className="review-panel">
        <div className="review-section">
          <h4>Listing Overview</h4>
          <div className="review-grid">
            <div className="review-item">
              <span className="label">Type</span>
              <span className="value capitalize">{formData.type?.replace('_', ' ')}</span>
            </div>
            <div className="review-item">
              <span className="label">Rent</span>
              <span className="value highlight">{formData.price?.toLocaleString()} FCFA</span>
            </div>
            <div className="review-item">
              <span className="label">Bathroom</span>
              <span className="value capitalize">{formData.bathroomType}</span>
            </div>
            <div className="review-item">
              <span className="label">Location</span>
              <span className="value">{formData.location || 'Not specified'}</span>
            </div>
          </div>
        </div>

        <div className="review-section">
          <h4>Bills Included</h4>
          <div className="review-tags">
            {formData.bills?.water === 'included' && <span className="tag">Water</span>}
            {formData.bills?.electricity === 'included' && <span className="tag">Electricity</span>}
            {formData.bills?.internet === 'included' && <span className="tag">Internet</span>}
            {Object.values(formData.bills || {}).every(v => v !== 'included') && (
              <span className="text-muted text-sm">No bills included in rent</span>
            )}
          </div>
        </div>

        <div className="review-section">
          <h4>Amenities</h4>
          <div className="review-tags">
            {formData.amenities && formData.amenities.length > 0 ? (
              formData.amenities.map(a => <span key={a} className="tag outline">{a}</span>)
            ) : (
              <span className="text-muted text-sm">None selected</span>
            )}
          </div>
        </div>

        <div className="review-section">
          <h4>Photos ({formData.imageUrls?.length || 0})</h4>
          {formData.imageUrls && formData.imageUrls.length > 0 && (
            <div className="review-photos-mini">
              {formData.imageUrls.map((url, i) => (
                <img key={i} src={url} alt={`Preview ${i}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
