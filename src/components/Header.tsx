import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">Stats Insta</span>
                </Link>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                    <Link to="/" className={`nav-link ${isActive("/")}`} onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/analyze" className={`nav-link ${isActive("/analyze")}`} onClick={() => setIsMenuOpen(false)}>
                        Analyze
                    </Link>
                    <Link to="/about" className={`nav-link ${isActive("/about")}`} onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <Link to="/faq" className={`nav-link ${isActive("/faq")}`} onClick={() => setIsMenuOpen(false)}>
                        FAQ
                    </Link>
                    <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
