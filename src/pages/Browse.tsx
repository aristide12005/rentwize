import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BottomNav } from '../components/BottomNav';
import { ListingCard } from '../components/ListingCard';
import type { Listing } from '../types';

const MOCK_HOUSING: Listing[] = [
  {
    id: 'h1', title: 'Chambre étudiante lumineuse', price: 45000, type: 'room', location: 'Dakar, Point E', imageUrls: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'], sellerName: 'Amadou B.', createdAt: new Date().toISOString(), sellerId: 's1', bathroomType: 'shared', bills: { water: 'included', electricity: 'usage', internet: 'included' }, neighbourhoodDesc: 'Proche université', amenities: ['Furnished'], attachedItems: []
  },
  {
    id: 'h2', title: 'Studio meublé avec Wifi', price: 80000, type: 'apartment', location: 'Dakar, Almadies', imageUrls: ['https://images.unsplash.com/photo-1502672260266-1c1e5250ba07?auto=format&fit=crop&q=80&w=800'], sellerName: 'Cheikh T.', createdAt: new Date().toISOString(), sellerId: 's2', bathroomType: 'inside', bills: { water: 'included', electricity: 'included', internet: 'included' }, neighbourhoodDesc: 'Proche centre commercial', amenities: ['Furnished', 'AC'], attachedItems: []
  },
  {
    id: 'h3', title: 'Colocation F4 - Chambre dispo', price: 60000, type: 'room', location: 'Dakar, Médina', imageUrls: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800'], sellerName: 'Moussa F.', createdAt: new Date().toISOString(), sellerId: 's3', bathroomType: 'shared', bills: { water: 'included', electricity: 'usage', internet: 'not_included' }, neighbourhoodDesc: 'Quartier vivant', amenities: [], attachedItems: []
  },
  {
    id: 'h4', title: 'Chambre dans villa', price: 55000, type: 'room', location: 'Dakar, Mermoz', imageUrls: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'], sellerName: 'Aïssatou D.', createdAt: new Date().toISOString(), sellerId: 's4', bathroomType: 'inside', bills: { water: 'included', electricity: 'usage', internet: 'included' }, neighbourhoodDesc: 'Quartier résidentiel calme', amenities: ['Furnished'], attachedItems: []
  },
  {
    id: 'h5', title: 'Appartement F2', price: 120000, type: 'apartment', location: 'Dakar, Fann', imageUrls: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800'], sellerName: 'Omar C.', createdAt: new Date().toISOString(), sellerId: 's5', bathroomType: 'inside', bills: { water: 'not_included', electricity: 'usage', internet: 'not_included' }, neighbourhoodDesc: 'Proche corniche', amenities: [], attachedItems: []
  },
  {
    id: 'h6', title: 'Chambre double partagée', price: 30000, type: 'room', location: 'Dakar, Fass', imageUrls: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800'], sellerName: 'Fatou S.', createdAt: new Date().toISOString(), sellerId: 's6', bathroomType: 'shared', bills: { water: 'included', electricity: 'included', internet: 'not_included' }, neighbourhoodDesc: 'Quartier étudiant', amenities: ['Furnished'], attachedItems: []
  }
];

export const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <main className="dashboard-main">
        <section className="dashboard-hero-split glass-panel">
          <div className="hero-text-content">
            <h2 className="hero-subtitle">THE PEACE OF MIND TO JUST BE A STUDENT</h2>
            <p className="hero-description">
              Join a verified network built by students, for students. Securely claim your room, buy your furniture, and settle in before the semester even starts
            </p>
          </div>
          <div className="hero-image-content">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Student studying" 
              className="hero-img"
            />
          </div>
        </section>

        <section className="dashboard-section glass-panel">
          <h3 style={{ marginBottom: '24px', fontSize: '1.5rem', color: 'var(--primary)' }}>Chambres & Appartements</h3>
          <div className="listings-grid">
            {MOCK_HOUSING.map(listing => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                onClick={handleCardClick}
              />
            ))}
          </div>
        </section>

      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
};
