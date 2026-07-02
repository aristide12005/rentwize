import React from 'react';
import { Home, Search, PlusCircle, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="bottom-nav hide-desktop">
      <button className="nav-item active" onClick={() => navigate('/home')}>
        <Home size={24} />
        <span>Accueil</span>
      </button>
      <button className="nav-item">
        <Search size={24} />
        <span>Recherche</span>
      </button>
      <button className="nav-item nav-item-primary">
        <PlusCircle size={28} />
      </button>
      <button className="nav-item">
        <User size={24} />
        <span>Profil</span>
      </button>
      <button className="nav-item" onClick={handleLogout}>
        <LogOut size={24} />
        <span>Quitter</span>
      </button>
    </div>
  );
};
