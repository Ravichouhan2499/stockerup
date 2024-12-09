import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function NavbarComponent() {
  const [user, setUser] = useState(null); // State to track authentication status
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user if logged in
      } else {
        setUser(null); // Clear user if logged out
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="navbar-brand">
          SuloWise Capital<span className="dot">.</span>
         {/* <div className="tag-line">Light your path to financial growth</div> */}
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {/* <li>
            <Link to="/homePages" onClick={closeMenu}><b>Home</b></Link>
          </li> */}
          <li>
            <Link to="/marketing-training" onClick={closeMenu}><b>Market Training</b></Link>
          </li>
          <li>
            <Link to="/financial-advising" onClick={closeMenu}><b>Personal Financial Advicing</b></Link>
          </li>
          <li>
            <Link to="/pricing" onClick={closeMenu}><b>Pricing</b></Link>
          </li>
          <li>
            <Link to="/refund-policy" onClick={closeMenu}><b>Refund Policy</b></Link>
          </li>
          <li>
            <Link to="/contact-us" className="contact" onClick={closeMenu}>Contact Us</Link>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          ) : (
            <li onClick={() => navigate("/login")}>
             
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
