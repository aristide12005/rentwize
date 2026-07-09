import React from 'react';


export const StepFurniture: React.FC<{ onSkip: () => void; onAdd: () => void }> = ({ onSkip, onAdd }) => {
  return (
    <div className="wizard-step animate-fade-in text-center">
      <div className="furniture-illustration mb-8 mt-4">
        <div style={{ fontSize: '48px' }}>🛋️</div>
      </div>
      <h2>Selling any furniture?</h2>
      <p className="step-subtitle mx-auto" style={{ maxWidth: '400px' }}>
        Are you leaving behind a bed, wardrobe, or fridge? You can add them directly to this listing so the next tenant can buy them from you!
      </p>
      
      <div className="flex flex-col gap-4 mt-8 max-w-sm mx-auto">
        <button className="btn btn-primary w-full py-3" onClick={onAdd}>
          Yes, add items to sell
        </button>
        <button className="btn btn-outline w-full py-3" onClick={onSkip}>
          No, skip this step
        </button>
      </div>
    </div>
  );
};
