import React from "react";

const Privacy: React.FC = () => {
    return (
        <div className="privacy-page">
            <section className="privacy-hero">
                <h1>Privacy Policy</h1>
                <p className="lead">Last updated: December 20, 2025</p>
            </section>

            <section className="privacy-content">
                <div className="privacy-section">
                    <h2>Introduction</h2>
                    <p>
                        At Instagram Chat Analyzer, we take your privacy seriously. This
                        Privacy Policy explains how we handle your data when you use our
                        service.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Data Collection</h2>
                    <p>
                        <strong>We do not collect, store, or transmit your personal data.</strong>
                    </p>
                    <p>
                        All analysis of your Instagram chat data happens entirely in your
                        browser. Your uploaded files are processed locally on your device and
                        are never sent to our servers or any third-party services.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>How We Process Your Data</h2>
                    <ul>
                        <li>
                            <strong>Client-Side Processing:</strong> All data processing occurs
                            in your web browser using JavaScript.
                        </li>
                        <li>
                            <strong>No Server Upload:</strong> Your Instagram chat files are
                            never uploaded to any server.
                        </li>
                        <li>
                            <strong>No Storage:</strong> We do not store any of your chat data,
                            messages, or personal information.
                        </li>
                        <li>
                            <strong>Session Only:</strong> Data exists only during your browser
                            session and is cleared when you close or refresh the page.
                        </li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>Analytics and Cookies</h2>
                    <p>
                        We may use basic analytics tools (such as Google Analytics) to
                        understand how visitors use our website. This includes:
                    </p>
                    <ul>
                        <li>Page views and navigation patterns</li>
                        <li>Browser type and device information</li>
                        <li>General geographic location (country/city level)</li>
                    </ul>
                    <p>
                        These analytics do not include any of your Instagram chat data or
                        personal messages.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Third-Party Services</h2>
                    <p>
                        Our website may contain links to third-party websites or services
                        (such as Instagram's data download page). We are not responsible for
                        the privacy practices of these external sites.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Your Rights</h2>
                    <p>Since we don't collect or store your data, you have complete control:</p>
                    <ul>
                        <li>Your data never leaves your device</li>
                        <li>You can close the browser at any time to clear all processed data</li>
                        <li>No account creation or registration is required</li>
                        <li>No data retention or backup of your information</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>Security</h2>
                    <p>
                        While we don't store your data, we implement security best practices
                        in our code to ensure your data is processed safely in your browser.
                        We recommend using the latest version of modern browsers for the best
                        security.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Children's Privacy</h2>
                    <p>
                        Our service is not directed to children under 13. We do not knowingly
                        collect or process data from children.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will
                        be posted on this page with an updated revision date.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us
                        through our <a href="/contact">Contact Page</a>.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Consent</h2>
                    <p>
                        By using Instagram Chat Analyzer, you consent to this Privacy Policy
                        and agree to its terms.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
