import React from "react";

const Disclaimer: React.FC = () => {
    return (
        <div className="privacy-page">
            <section className="privacy-hero">
                <h1>Disclaimer</h1>
                <p className="lead">Important information about using Stats Insta</p>
            </section>

            <section className="privacy-content">
                <div className="privacy-section">
                    <h2>General Information</h2>
                    <p>
                        The information provided by Stats Insta ("we," "us," or "our") on stats-insta.vercel.app (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>No Professional Advice</h2>
                    <p>
                        The Site cannot and does not contain professional advice. The analytics and statistics information is provided for general informational and educational purposes only and is not a substitute for professional advice.
                    </p>
                    <p>
                        Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Third-Party Content</h2>
                    <p>
                        Stats Insta is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. (Facebook/Instagram). Instagram is a trademark of Meta Platforms, Inc. We are an independent service that helps users analyze their own Instagram data.
                    </p>
                    <p>
                        Users must obtain their Instagram data through official Meta/Instagram data download features. We do not access Instagram accounts or servers directly.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Accuracy of Information</h2>
                    <p>
                        While we strive to provide accurate analytics and visualizations, the accuracy of the results depends on the quality and completeness of the data you provide. We cannot guarantee that all statistics and insights will be 100% accurate.
                    </p>
                    <p>
                        The Service processes data as provided by Instagram's data export feature. Any errors or inconsistencies in the exported data may affect the analysis results.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>External Links Disclaimer</h2>
                    <p>
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                    </p>
                    <p>
                        We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Data Privacy</h2>
                    <p>
                        All data processing happens locally in your browser. We do not collect, store, or transmit your Instagram chat data. However, you are responsible for:
                    </p>
                    <ul>
                        <li>Ensuring you have the right to analyze the chat data</li>
                        <li>Protecting your own privacy and the privacy of others in your chats</li>
                        <li>Not sharing sensitive information from your analysis publicly</li>
                        <li>Using the Service in accordance with Instagram's Terms of Service</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>Limitation of Liability</h2>
                    <p>
                        Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Changes to This Disclaimer</h2>
                    <p>
                        We may update our Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page and updating the "Last updated" date.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Disclaimer, please contact us at:
                    </p>
                    <p>
                        Email: support@stats-insta.com
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
