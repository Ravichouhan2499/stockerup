import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <h4 className="footer-brand">
          SuloWise Capital<span className="footer-dot">.</span>
        </h4>
        <p className="footer-description">
        The Workshop is only for educational purposes. Investing in equities is subject to market risk.        </p>
        <p className="footer-contact">
          <b>Contact Us:</b>&nbsp;
          <Link to="mailto:surya.cpfp@gmail.com" className="footer-email">
            surya.cpfp@gmail.com
          </Link>
        </p>
        <p className="footer-rights">© 2024. Power of Stocks. All Rights Reserved.</p>
      </div>
    </div>
  );
}
