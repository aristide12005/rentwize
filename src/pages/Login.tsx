import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, User as UserIcon } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setLoading(true);
      // For prototype: using register since login Email/Pass might not be fully wired
      await register(email, password || 'rentwizeDummyPass123!');
      navigate('/post');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <div className="login-icon-wrapper">
          <UserIcon size={64} strokeWidth={1} />
        </div>
        <h1 className="login-title">User Login</h1>

        <form onSubmit={handleEmailSubmit} style={{ width: '100%' }}>
          <div className="input-line-group">
            <Mail size={20} />
            <input 
              type="email" 
              className="input-line"
              placeholder="Email ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-line-group">
            <Lock size={20} />
            <input 
              type="password" 
              className="input-line"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="login-options">
            <label className="login-checkbox">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="login-link">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-login" disabled={loading || !email}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
