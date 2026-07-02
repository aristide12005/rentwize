import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Onboarding } from './pages/Onboarding';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';



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
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div style={{ color: 'white', padding: '40px' }}>Chargement...</div>;

  if (user) {
    return profile?.profileComplete ? <Navigate to="/home" /> : <Navigate to="/onboarding" />;
  }

  return <>{children}</>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/onboarding" element={<ProtectedRoute requireProfile={false}><Onboarding /></ProtectedRoute>} />
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
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
