// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="logos-container">
        <img src="/plus_logo.jpg" alt="Logo 1" className="footer-logo" />
        <img src="/funded_EU.jpg" alt="Logo 2" className="footer-logo" />
        <img src="/ubs_logo.png" alt="Logo 3" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
