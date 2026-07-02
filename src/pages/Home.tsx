import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BottomNav } from '../components/BottomNav';
import { ListingCard } from '../components/ListingCard';
import type { Listing } from '../types';

// Mock data duplicated to match the 6-item layout per section shown in the wireframe.
const MOCK_HOUSING: Listing[] = [
  {
    id: 'h1', title: 'Chambre étudiante lumineuse', price: 45000, description: 'Belle chambre proche de l\'université.', type: 'housing', location: 'Dakar, Point E', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800', sellerName: 'Amadou B.', createdAt: new Date().toISOString()
  },
  {
    id: 'h2', title: 'Studio meublé avec Wifi', price: 80000, description: 'Studio indépendant tout confort.', type: 'housing', location: 'Dakar, Almadies', imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1e5250ba07?auto=format&fit=crop&q=80&w=800', sellerName: 'Cheikh T.', createdAt: new Date().toISOString()
  },
  {
    id: 'h3', title: 'Colocation F4 - Chambre dispo', price: 60000, description: 'Recherche un(e) colocataire.', type: 'housing', location: 'Dakar, Médina', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800', sellerName: 'Moussa F.', createdAt: new Date().toISOString()
  },
  {
    id: 'h4', title: 'Chambre dans villa', price: 55000, description: 'Calme et sécurisé.', type: 'housing', location: 'Dakar, Mermoz', imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', sellerName: 'Aïssatou D.', createdAt: new Date().toISOString()
  },
  {
    id: 'h5', title: 'Appartement F2', price: 120000, description: 'Proche toutes commodités.', type: 'housing', location: 'Dakar, Fann', imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800', sellerName: 'Omar C.', createdAt: new Date().toISOString()
  },
  {
    id: 'h6', title: 'Chambre double partagée', price: 30000, description: 'Pour étudiant budget réduit.', type: 'housing', location: 'Dakar, Fass', imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800', sellerName: 'Fatou S.', createdAt: new Date().toISOString()
  }
];

const MOCK_ITEMS: Listing[] = [
  {
    id: 'i1', title: 'MacBook Pro M1 (2020)', price: 450000, description: 'Parfait état.', type: 'item', location: 'Dakar, Mermoz', imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800', sellerName: 'Fatou S.', createdAt: new Date().toISOString()
  },
  {
    id: 'i2', title: 'Bureau + Chaise ergonomique', price: 35000, description: 'Pack complet.', type: 'item', location: 'Dakar, Yoff', imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800', sellerName: 'Aïcha D.', createdAt: new Date().toISOString()
  },
  {
    id: 'i3', title: 'Livre: Introduction à l\'économie', price: 5000, description: 'Édition 2023.', type: 'item', location: 'Dakar, Campus UCAD', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800', sellerName: 'Mariama N.', createdAt: new Date().toISOString()
  },
  {
    id: 'i4', title: 'Calculatrice scientifique', price: 15000, description: 'Casio fx-991ES PLUS.', type: 'item', location: 'Dakar, Point E', imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=800', sellerName: 'Ibrahima K.', createdAt: new Date().toISOString()
  },
  {
    id: 'i5', title: 'Lampe de bureau LED', price: 8000, description: 'Trois niveaux d\'intensité.', type: 'item', location: 'Dakar, Sicap', imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800', sellerName: 'Ndeye F.', createdAt: new Date().toISOString()
  },
  {
    id: 'i6', title: 'Sac à dos imperméable', price: 12000, description: 'Idéal pour ordinateur 15".', type: 'item', location: 'Dakar, Liberté 6', imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800', sellerName: 'Alioune T.', createdAt: new Date().toISOString()
  }
];

export const Home: React.FC = () => {
  const handleCardClick = (id: string) => {
    console.log('Clicked listing:', id);
    // Future navigation to details page
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <main className="dashboard-main">
        {/* Split Hero Section */}
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

        {/* Housing Section */}
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
          <div className="section-footer">
            <button className="btn btn-outline btn-more">Voir plus</button>
          </div>
        </section>

        {/* Items Section */}
        <section className="dashboard-section glass-panel">
          <h3 style={{ marginBottom: '24px', fontSize: '1.5rem', color: 'var(--primary)' }}>Meubles & Matériel</h3>
          <div className="listings-grid">
            {MOCK_ITEMS.map(listing => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                onClick={handleCardClick}
              />
            ))}
          </div>
          <div className="section-footer">
            <button className="btn btn-outline btn-more">Voir plus</button>
          </div>
        </section>

      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
};
