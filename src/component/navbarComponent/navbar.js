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
            Stocker<span className="dot">.</span>
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}><b>Home</b></Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}><b>About</b></Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}><b>Services</b></Link>
          </li>
          <li>
            <Link to="/contactUs" className="contact" onClick={closeMenu}>Contact</Link>
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
