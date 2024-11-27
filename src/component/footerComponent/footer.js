import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div>  
      <div className="footer">
  <div className="footer-top text-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          {/* Brand Logo */}
          <h4 className="navbar-brand">
            Stocker<span className="dot">.</span>
          </h4>
          <p>
            Simple way to understand the market. A way to understand the stock
            market is to get a glimpse of why it exists, who it serves, and how
            it works. We made it easy for you...
          </p>
          <p>© 2024. Power of Stocks. All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              <i className="bx bxl-pinterest"></i>
            </a>
          </div>
          <p className="mb-0">
      <Link to="/terms">Terms & Conditions</Link> |{" "}
      <Link to="/refund-policy">Cancellation / Refund Policy</Link>
    </p>
    <p>
      Distributed By <a href="/">Makeover Solutions</a>
    </p>

          {/* Conditions Links */}
          {/* <div className="conditions-section">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div> */}
        </div>
      </div>
      
    </div>
  </div>

  <div className="footer-bottom text-center">
   
  </div>
</div>


      
    </div>
  )
}
