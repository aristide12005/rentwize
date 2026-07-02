import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="app-footer glass-panel" style={{ borderRadius: 0, borderBottom: 'none', borderLeft: 'none', borderRight: 'none', marginTop: 'auto' }}>
      <div className="footer-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)' }}>footer</p>
      </div>
    </footer>
  );
};
