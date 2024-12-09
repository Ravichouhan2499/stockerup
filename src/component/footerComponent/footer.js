import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="footer-container">
      <div className="footer-box">
        <h4 className="footer-brand">
          SuloWise Capital<span className="footer-dot">.</span>
        </h4>
        <p className="footer-description">
        The Workshop is only for educational purposes. Investing in equities is subject to market risk.        </p>
          <div className="footer-links">
          <p>
            <Link to='/terms-&-conditions' onClick={handleLinkClick}>Terms & Conditions</Link>
          </p>
          <p>
            <Link to='/privacy-policy' onClick={handleLinkClick}>I &nbsp;Privacy Policy</Link>
          </p>
        </div>
        <p className="footer-rights">© 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
}
