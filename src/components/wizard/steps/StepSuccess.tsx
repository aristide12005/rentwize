import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Share2 } from 'lucide-react';

export const StepSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    window.open('https://wa.me/?text=Check%20out%20my%20listing%20on%20Rentwize!', '_blank');
  };

  return (
    <div className="wizard-step animate-fade-in text-center" style={{ padding: '60px 20px' }}>
      <CheckCircle2 size={80} color="var(--primary)" className="mx-auto mb-6 animate-bounce-slight" />
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
        Your listing is live!
      </h1>
      <p className="text-muted max-w-md mx-auto mb-10 text-lg">
        Seekers can now view and contact you about your space.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn btn-outline py-3 px-6" onClick={() => navigate('/browse')}>
          View your listing
        </button>
        <button className="btn btn-primary py-3 px-6 flex items-center justify-center gap-2" onClick={handleShare}>
          <Share2 size={20} /> Share via WhatsApp
        </button>
      </div>
    </div>
  );
};
