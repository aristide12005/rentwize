import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { WizardProvider, useWizard } from '../components/wizard/WizardContext';
import { StepListingType } from '../components/wizard/steps/StepListingType';
import { StepBathroom } from '../components/wizard/steps/StepBathroom';
import { StepRentBills } from '../components/wizard/steps/StepRentBills';
import { StepLocation } from '../components/wizard/steps/StepLocation';
import { StepAmenities } from '../components/wizard/steps/StepAmenities';
import { StepPhotos } from '../components/wizard/steps/StepPhotos';
import { StepReview } from '../components/wizard/steps/StepReview';
import { StepFurniture } from '../components/wizard/steps/StepFurniture';
import { StepSuccess } from '../components/wizard/steps/StepSuccess';
import '../components/wizard/wizard.css';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { Loader2 } from 'lucide-react';

const WizardContent: React.FC = () => {
  const { step, setStep, totalSteps, formData } = useWizard();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps + 1));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handlePostListing = async () => {
    if (!auth.currentUser) {
      alert("You must be logged in to post a listing.");
      return;
    }

    setIsSubmitting(true);
    try {
      const listingData = {
        ...formData,
        sellerId: auth.currentUser.uid,
        sellerName: auth.currentUser.displayName || auth.currentUser.email || 'Anonymous',
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, 'listings'), listingData);
      
      // Move to success step (step 9)
      setStep(9);
    } catch (error) {
      console.error('Error posting listing:', error);
      alert('Failed to post listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1: return <StepListingType />;
      case 2: return <StepBathroom />;
      case 3: return <StepRentBills />;
      case 4: return <StepLocation />;
      case 5: return <StepAmenities />;
      case 6: return <StepPhotos />;
      case 7: return <StepReview />;
      case 8: return <StepFurniture onSkip={handlePostListing} onAdd={() => { /* TODO: handle items */ handlePostListing(); }} />;
      case 9: return <StepSuccess />;
      default: return null;
    }
  };

  return (
    <div className="wizard-layout">
      <Navbar />
      <main className="wizard-main">
        
        {step < 9 && (
          <div className="wizard-progress-bar-container">
            <div className="wizard-progress-track">
              <div 
                className="wizard-progress-fill" 
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="wizard-progress-text">
              Step {step} of {totalSteps}
            </div>
          </div>
        )}

        <div className="wizard-panel">
          {renderStepContent()}

          {step < 8 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
              <button 
                className="btn btn-outline" 
                onClick={handlePrev} 
                disabled={step === 1 || isSubmitting}
              >
                Back
              </button>
              
              {step === 7 ? (
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext} // Go to furniture step
                  disabled={isSubmitting}
                >
                  Continue
                </button>
              ) : (
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          )}

          {isSubmitting && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', color: 'var(--primary)' }}>
              <Loader2 size={16} className="spin-icon" style={{ margin: 0 }} /> Posting...
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export const PostWizard: React.FC = () => {
  return (
    <WizardProvider>
      <WizardContent />
    </WizardProvider>
  );
};
