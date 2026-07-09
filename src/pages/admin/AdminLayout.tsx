import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Home, Box, MessageSquare, DollarSign, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../lib/firebase';

export const AdminLayout: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="admin-layout">
      {/* Top Header */}
      <header className="admin-header">
        <div className="admin-header-left">
          <h1 className="admin-logo">RentWize</h1>
        </div>
        <div className="admin-header-center">
          <h2>ADMIN PANNEL</h2>
        </div>
        <div className="admin-header-right">
          <div className="admin-user-profile">
            <div className="admin-avatar-placeholder">
              {profile?.name?.charAt(0) || user?.email?.charAt(0) || 'A'}
            </div>
          </div>
        </div>
      </header>

      <div className="admin-body">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
              <LayoutDashboard size={20} />
              <span>DASHBOARD</span>
            </NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
              <Users size={20} />
              <span>USERS</span>
            </NavLink>
            
            <div className="admin-nav-section">
              <span className="admin-nav-section-title">LISTINGS</span>
              <NavLink to="/admin/listings/houses" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
                <Home size={20} />
                <span>HOUSES</span>
              </NavLink>
              <NavLink to="/admin/listings/furnitures" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
                <Box size={20} />
                <span>FURNITURES</span>
              </NavLink>
            </div>

            <NavLink to="/admin/conversations" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
              <MessageSquare size={20} />
              <span>CONVERSATIONS</span>
            </NavLink>
            <NavLink to="/admin/money" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
              <DollarSign size={20} />
              <span>MONEY</span>
            </NavLink>
          </nav>
          
          <div className="admin-sidebar-footer">
            <button onClick={handleLogout} className="admin-logout-btn">
              <LogOut size={20} />
              <span>LOGOUT</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
