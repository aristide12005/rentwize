import React from 'react';
import { MapPin, User } from 'lucide-react';
import type { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
  onClick: (id: string) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  return (
    <div className="listing-card glass-panel" onClick={() => onClick(listing.id)}>
      <div className="listing-image-container">
        <img src={listing.imageUrls[0]} alt={listing.title} className="listing-image" />
        <div className="listing-badge">{listing.type === 'room' ? 'Chambre' : 'Appartement'}</div>
      </div>
      <div className="listing-content">
        <h3 className="listing-title">{listing.title}</h3>
        <p className="listing-price">{listing.price.toLocaleString()} FCFA/mois</p>
        
        <div className="listing-details">
          <div className="detail-item">
            <MapPin size={16} />
            <span>{listing.location}</span>
          </div>
          <div className="detail-item">
            <User size={16} />
            <span>{listing.sellerName}</span>
          </div>
        </div>
        
        <button className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>
          Voir Plus
        </button>
      </div>
    </div>
  );
};
