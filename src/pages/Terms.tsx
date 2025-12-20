import React from "react";

const Terms: React.FC = () => {
    return (
        <div className="privacy-page">
            <section className="privacy-hero">
                <h1>Terms of Service</h1>
                <p className="lead">Last updated: December 20, 2025</p>
            </section>

            <section className="privacy-content">
                <div className="privacy-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Stats Insta ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use the Service.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>2. Description of Service</h2>
                    <p>
                        Stats Insta is a web-based tool that allows users to analyze their Instagram chat data through visualizations and statistics. All data processing occurs locally in your browser, and no data is transmitted to our servers.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>3. User Responsibilities</h2>
                    <ul>
                        <li>You are responsible for obtaining your Instagram data through official Meta/Instagram channels</li>
                        <li>You must have the right to analyze the chat data you upload</li>
                        <li>You agree not to use the Service for any illegal or unauthorized purpose</li>
                        <li>You will not attempt to reverse engineer or modify the Service</li>
                        <li>You are responsible for maintaining the confidentiality of your data</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>4. Privacy and Data Processing</h2>
                    <p>
                        All data processing happens entirely in your browser. We do not collect, store, or transmit your personal data or Instagram chat information. For more details, please refer to our Privacy Policy.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>5. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are owned by Stats Insta and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>6. Disclaimer of Warranties</h2>
                    <p>
                        The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that:
                    </p>
                    <ul>
                        <li>The Service will be uninterrupted, timely, secure, or error-free</li>
                        <li>The results obtained from using the Service will be accurate or reliable</li>
                        <li>Any errors in the Service will be corrected</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        In no event shall Stats Insta, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>8. Third-Party Services</h2>
                    <p>
                        Our Service may contain links to third-party websites or services that are not owned or controlled by Stats Insta. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>9. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>10. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <p>
                        Email: support@stats-insta.com
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Terms;
