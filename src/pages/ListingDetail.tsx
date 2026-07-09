import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { BottomNav } from '../components/BottomNav';
import { MapPin, ShowerHead, Wifi, Zap, Droplets, CheckCircle2 } from 'lucide-react';

export const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock data for the view
  const listing = {
    id,
    title: 'Chambre étudiante lumineuse',
    price: 85000,
    type: 'ROOM IN APARTMENT',
    location: 'Mermoz, Dakar',
    bathroomType: 'shared',
    sharedWithCount: 2,
    bills: { water: 'included', electricity: 'usage', internet: 'included' },
    neighbourhoodDesc: '5 min from Grand Dakar mosque, very quiet area.',
    amenities: ['Furnished', 'Air conditioning', 'Security guard'],
    imageUrls: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200'],
    attachedItems: [
      { id: 'i1', name: 'Mini Refrigerator', price: 25000, imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400' }
    ]
  };

  const platformWhatsApp = '221770000000'; // Dummy platform number
  const message = encodeURIComponent(`Hi, I'm interested in [${listing.title}] (ID: ${listing.id})`);
  const whatsappUrl = `https://wa.me/${platformWhatsApp}?text=${message}`;

  return (
    <div className="dashboard-layout">
      <Navbar />
      <main className="dashboard-main" style={{ maxWidth: '800px', paddingBottom: '100px' }}>
        <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: '20px', border: 'none' }}>
          &larr; Back to browse
        </button>

        <div className="glass-panel" style={{ padding: 0, overflow: 'hidden', marginBottom: '24px' }}>
          <img src={listing.imageUrls[0]} alt={listing.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <span className="landing-badge landing-badge-blue">{listing.type}</span>
              <span className="landing-badge landing-badge-green">AVAILABLE</span>
            </div>
            
            <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>{listing.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              <MapPin size={18} /> {listing.location}
            </div>

            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '32px' }}>
              {listing.price.toLocaleString()} FCFA <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month</span>
            </div>

            {/* Bills & Details */}
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Details</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShowerHead size={20} color="var(--primary)" />
                <span>Bathroom: {listing.bathroomType === 'shared' ? `Shared (with ${listing.sharedWithCount})` : 'Inside'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Wifi size={20} color="var(--primary)" />
                <span>Internet: {listing.bills.internet}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Zap size={20} color="var(--primary)" />
                <span>Electricity: {listing.bills.electricity}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Droplets size={20} color="var(--primary)" />
                <span>Water: {listing.bills.water}</span>
              </div>
            </div>

            {/* Neighbourhood */}
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Neighbourhood</h3>
            <p>{listing.neighbourhoodDesc}</p>

            {/* Amenities */}
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Amenities</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              {listing.amenities.map(a => (
                <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(76, 167, 113, 0.1)', padding: '8px 16px', borderRadius: '20px', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> {a}
                </div>
              ))}
            </div>

            {/* Furniture Section */}
            {listing.attachedItems.length > 0 && (
              <>
                <hr style={{ borderTop: '1px solid var(--border-color)', margin: '32px 0' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Furniture for sale by this student</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                  {listing.attachedItems.map(item => (
                    <div key={item.id} style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
                      <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '12px' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</div>
                        <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{item.price.toLocaleString()} FCFA</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: '40px' }}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
                Contact about this listing
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: '12px' }}>
                You will be connected to the Rentwize matching team via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};
