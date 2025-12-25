import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import equeeLogoColour from '/img/equee-logo-colour.png';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img
                src={equeeLogoColour}
                alt="EQUEE"
                className="nav-logo-img"
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {/* Mobile Menu Header */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {/* Menu Items */}
            <ul className="nav-menu-list">
              <li className="nav-item nav-item-primary">
                <Link
                    to="/"
                    className={`sec-nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={closeMenu}
                >
                  Sign up/Login
                </Link>
              </li>
              <li className="nav-item nav-item-secondary">
                <Link
                    to="/contact"
                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Overlay for mobile */}
          {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </div>
      </nav>
  );
};