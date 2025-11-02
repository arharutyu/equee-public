import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section: Logo and Contact Button */}
                <div className="footer-top">
                    <Link to="/" className="footer-logo">
                        <img
                            src="/img/equee-logo-white.png"
                            alt="EQUEE"
                            className="footer-logo-img"
                        />
                    </Link>
                    <Link to="/contact" className="footer-contact-btn">
                        Contact us
                    </Link>
                </div>

                {/* Separator Line */}
                <div className="footer-separator"></div>

                {/* Navigation Links */}
                <nav className="footer-nav">
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/login" className="footer-link">Login/Register</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                    <Link to="/financial-services-guide" className="footer-link">Financial Services Guide</Link>
                </nav>

                {/* Bottom Section: Copyright and Credits */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        Equee © 2025 | Equee Pty Ltd| Corporate Authorised Representative of Lifestyle Investment Planning Pty Ltd No. 000 021 069 | ABN 43 674 034 185
                    </p>
                    <p className="footer-credit">
                        Site by Click Creative
                    </p>
                </div>
            </div>
        </footer>
    );
};