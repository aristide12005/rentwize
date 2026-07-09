import React from 'react';
import { useWizard } from '../WizardContext';
import type { BillStatus } from '../../../types';

export const StepRentBills: React.FC = () => {
  const { formData, updateFormData } = useWizard();

  const handleBillChange = (billType: 'water' | 'electricity' | 'internet', status: BillStatus) => {
    updateFormData({
      bills: {
        ...formData.bills!,
        [billType]: status
      }
    });
  };

  return (
    <div className="wizard-step animate-fade-in">
      <h2>Rent & Bills</h2>
      <p className="step-subtitle">How much is it, and what's included?</p>
      
      <div className="form-group mb-8">
        <label className="wizard-label">Monthly Rent (FCFA)</label>
        <div className="input-with-icon">
          <span className="input-prefix">FCFA</span>
          <input 
            type="number" 
            className="wizard-input pl-14" 
            placeholder="e.g. 85000"
            value={formData.price || ''}
            onChange={(e) => updateFormData({ price: parseInt(e.target.value) || 0 })}
          />
        </div>
      </div>

      <div className="bills-section">
        <h4 className="bills-title">Utility Bills</h4>
        
        {(['water', 'electricity', 'internet'] as const).map(bill => (
          <div key={bill} className="bill-row">
            <div className="bill-name">
              {bill.charAt(0).toUpperCase() + bill.slice(1)}
            </div>
            <div className="bill-select-wrapper">
              <select 
                className="wizard-select"
                value={formData.bills?.[bill]}
                onChange={(e) => handleBillChange(bill, e.target.value as BillStatus)}
              >
                <option value="included">Included in rent</option>
                <option value="not_included">Not included</option>
                <option value="usage">Depends on usage</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
