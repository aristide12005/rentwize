import React from 'react';
import { Search, LogOut, PlusCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-brand" onClick={() => navigate('/home')}>
        <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>RentWize</span>
      </div>
      
      <div className="navbar-search hide-mobile">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Rechercher un logement, un article..." className="search-input" />
      </div>

      <div className="navbar-actions hide-mobile">
        <button className="btn btn-primary btn-sm btn-post">
          <PlusCircle size={20} />
          <span className="hide-mobile">Publier</span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            {profile?.name?.charAt(0) || 'U'}
          </div>
          <span className="user-name hide-mobile">{profile?.name}</span>
        </div>

        <button className="btn btn-icon" onClick={handleLogout} title="Se déconnecter">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
};
