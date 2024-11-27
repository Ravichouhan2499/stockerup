import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const [user, setUser] = useState(null); // State to track if the user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    // Set up a listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is logged in
      } else {
        setUser(null); // No user is logged in
      }
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to the login page after logging out
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Stocker<span className="dot">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Common Links */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>

              {/* User-specific menu */}
              {user ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/adminDashboard">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
            </ul>
            <a
              href="/contactus"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-brand ms-lg-3"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
