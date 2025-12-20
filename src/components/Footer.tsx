import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Support</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/contact">Help Center</Link></li>
                            <li><Link to="/contact">Email Support</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Legal</h3>
                        <ul className="footer-links">
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">About</h3>
                        <p className="footer-description">
                            Instagram Chat Analyzer helps you understand your conversations with beautiful visualizations and insights. Your data stays private and secure.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 Stats Insta. All rights reserved.
                    </p>
                    <p className="footer-made-with">
                        Made with <span className="heart">♥</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
