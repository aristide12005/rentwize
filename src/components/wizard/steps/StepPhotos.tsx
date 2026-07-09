import React, { useState, useRef } from 'react';
import { useWizard } from '../WizardContext';
import { UploadCloud, X, Loader2 } from 'lucide-react';
import { uploadToCloudinary } from '../../../lib/cloudinary';

export const StepPhotos: React.FC = () => {
  const { formData, updateFormData } = useWizard();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setIsUploading(true);
    const newUrls: string[] = [];
    
    try {
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const url = await uploadToCloudinary(file);
        newUrls.push(url);
      }
      
      updateFormData({ 
        imageUrls: [...(formData.imageUrls || []), ...newUrls] 
      });
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload images. Please try again.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removePhoto = (indexToRemove: number) => {
    const newUrls = [...(formData.imageUrls || [])];
    newUrls.splice(indexToRemove, 1);
    updateFormData({ imageUrls: newUrls });
  };

  return (
    <div className="wizard-step animate-fade-in">
      <h2>Photos</h2>
      <p className="step-subtitle">Upload clear photos of your space.</p>
      
      <div 
        className={`upload-zone ${isUploading ? 'uploading' : ''}`}
        onClick={() => !isUploading && fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          multiple 
          accept="image/*"
          onChange={handleFileChange}
        />
        
        {isUploading ? (
          <div className="upload-loading">
            <Loader2 size={40} className="spin-icon" color="var(--primary)" />
            <p>Uploading photos...</p>
          </div>
        ) : (
          <div className="upload-prompt">
            <div className="upload-icon-wrapper">
              <UploadCloud size={32} color="var(--primary)" />
            </div>
            <h4>Click to upload photos</h4>
            <p>JPG, PNG or GIF (Max 5MB)</p>
          </div>
        )}
      </div>

      {formData.imageUrls && formData.imageUrls.length > 0 && (
        <div className="uploaded-photos-grid">
          {formData.imageUrls.map((url, index) => (
            <div key={index} className="uploaded-photo-item">
              <img src={url} alt={`Upload ${index + 1}`} />
              <button 
                className="remove-photo-btn"
                onClick={(e) => { e.stopPropagation(); removePhoto(index); }}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="info-alert mt-6">
        <p><strong>💡 Pro Tip:</strong> Listings with 3 or more real photos get contacted 2x more!</p>
      </div>
    </div>
  );
};
