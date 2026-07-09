import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Onboarding } from './pages/Onboarding';
import { Welcome } from './pages/Welcome';
import { Browse } from './pages/Browse';
import { ListingDetail } from './pages/ListingDetail';
import { PostWizard } from './pages/PostWizard';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminConversations } from './pages/admin/AdminConversations';

// Route protection wrappers
const ProtectedRoute: React.FC<{ children: React.ReactNode, requireProfile?: boolean }> = ({ children, requireProfile = true }) => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div style={{ color: 'white', padding: '40px' }}>Chargement...</div>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requireProfile && !profile?.profileComplete) {
    return <Navigate to="/onboarding" />;
  }

  if (!requireProfile && profile?.profileComplete) {
    return <Navigate to="/browse" />;
  }

  return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div style={{ color: 'white', padding: '40px' }}>Chargement...</div>;

  if (user) {
    return profile?.profileComplete ? <Navigate to="/browse" /> : <Navigate to="/onboarding" />;
  }

  return <>{children}</>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/onboarding" element={<ProtectedRoute requireProfile={false}><Onboarding /></ProtectedRoute>} />
      
      {/* Public Pages */}
      <Route path="/" element={<Welcome />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
      
      {/* Protected Poster Flow */}
      <Route path="/post" element={<ProtectedRoute><PostWizard /></ProtectedRoute>} />
      
      {/* Admin Panel */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="conversations" />} />
        <Route path="dashboard" element={<div>Dashboard Placeholder</div>} />
        <Route path="users" element={<div>Users Placeholder</div>} />
        <Route path="listings/houses" element={<div>Houses Placeholder</div>} />
        <Route path="listings/furnitures" element={<div>Furnitures Placeholder</div>} />
        <Route path="conversations" element={<AdminConversations />} />
        <Route path="money" element={<div>Money Placeholder</div>} />
      </Route>

      {/* Legacy Redirects */}
      <Route path="/home" element={<Navigate to="/browse" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
