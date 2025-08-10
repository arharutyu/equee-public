import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import equeeLogoColour from '../assets/img/equee-logo-colour.png';
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
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMenu}
              >
                Sign Up / Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  to="/contact"
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Overlay for mobile */}
          {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </div>
      </nav>
  );
};