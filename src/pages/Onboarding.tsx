import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { uploadToCloudinary } from '../lib/cloudinary';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import PhoneInputImport from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getFirebaseErrorMessage } from '../lib/errorUtils';

const PhoneInput: any = (PhoneInputImport as any).default || PhoneInputImport;

export const Onboarding: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Step 1 State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Step 2 State
  const [verificationMethod, setVerificationMethod] = useState('');
  const [verificationValue, setVerificationValue] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const hasEduEmail = user?.email?.toLowerCase().includes('.edu');

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    if (name.trim() && phone.trim()) {
      if (hasEduEmail) {
        setLoading(true);
        setError('');
        try {
          await setDoc(doc(db, 'users', user.uid), {
            name,
            phone,
            verificationMethod: 'School Email',
            verificationValue: user.email,
            profileComplete: true,
            createdAt: new Date().toISOString(),
          });
          navigate('/home');
        } catch (err: any) {
          setError(getFirebaseErrorMessage(err) || 'Échec de la complétion du profil');
        } finally {
          setLoading(false);
        }
      } else {
        setStep(2);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    setError('');

    try {
      let finalVerificationValue = verificationValue;

      // Handle file upload if method is not email
      if (verificationMethod !== 'School Email' && file) {
        finalVerificationValue = await uploadToCloudinary(file);
      }

      // Save to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        phone,
        verificationMethod,
        verificationValue: finalVerificationValue,
        profileComplete: true,
        createdAt: new Date().toISOString(),
      });

      navigate('/home');
    } catch (err: any) {
      setError(getFirebaseErrorMessage(err) || 'Échec de la complétion du profil');
    } finally {
      setLoading(false);
    }
  };

  const isStep2Valid = verificationMethod && (verificationMethod === 'School Email' ? verificationValue.trim() : file);

  return (
    <div className="auth-layout">
      <div className="glass-panel auth-card">
        <h1>Compléter le profil</h1>
        <p>Étape {step} sur {hasEduEmail ? 1 : 2} : {step === 1 ? 'Informations de base' : 'Vérification du statut étudiant'}</p>

        {error && <div style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.875rem' }}>{error}</div>}

        {step === 1 && (
          <form onSubmit={handleNextStep}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jeanne Dupont"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Numéro de téléphone</label>
              <PhoneInput
                country={'sn'}
                value={phone}
                onChange={(phone: string) => setPhone('+' + phone)}
                inputProps={{
                  name: 'phone',
                  required: true,
                  id: 'phone'
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={!name || !phone || loading}>
              {loading ? 'Enregistrement en cours...' : (hasEduEmail ? 'Terminer le profil' : 'Continuer')}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="method">Méthode de vérification</label>
              <select
                id="method"
                required
                value={verificationMethod}
                onChange={(e) => {
                  setVerificationMethod(e.target.value);
                  setVerificationValue('');
                  setFile(null);
                }}
              >
                <option value="" disabled>Sélectionnez une méthode...</option>
                <option value="School Email">E-mail de l'école (.edu)</option>
                <option value="Student Card">Carte d'étudiant</option>
                <option value="Admission Letter">Lettre d'admission</option>
              </select>
            </div>

            {verificationMethod === 'School Email' && (
              <div className="form-group" style={{ animation: 'slideUp 0.3s ease' }}>
                <label htmlFor="schoolEmail">L'e-mail de votre école</label>
                <input
                  id="schoolEmail"
                  type="email"
                  required
                  value={verificationValue}
                  onChange={(e) => setVerificationValue(e.target.value)}
                  placeholder="etudiant@universite.edu"
                />
              </div>
            )}

            {(verificationMethod === 'Student Card' || verificationMethod === 'Admission Letter') && (
              <div className="form-group" style={{ animation: 'slideUp 0.3s ease' }}>
                <label>Téléverser l'image du document</label>
                <div 
                  style={{
                    border: '2px dashed var(--border-color)',
                    padding: '32px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    background: file ? 'rgba(76, 167, 113, 0.1)' : 'transparent',
                  }}
                >
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      opacity: 0, cursor: 'pointer'
                    }}
                  />
                  {file ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                      <CheckCircle2 size={32} />
                      <span style={{ fontWeight: 500 }}>{file.name}</span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                      <UploadCloud size={32} />
                      <span>Cliquez ou glissez le fichier ici</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button type="button" className="btn btn-outline" onClick={() => setStep(1)} style={{ flex: 1 }}>
                Retour
              </button>
              <button type="submit" className="btn btn-primary" style={{ flex: 2 }} disabled={!isStep2Valid || loading}>
                {loading ? 'Enregistrement en cours...' : 'Terminer le profil'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
