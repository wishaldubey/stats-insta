import React from "react";

const About: React.FC = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1>About Instagram Chat Analyzer</h1>
                <p className="lead">
                    Your privacy-focused tool for understanding Instagram conversations
                </p>
            </section>

            <section className="about-content">
                <div className="about-section">
                    <h2>What We Do</h2>
                    <p>
                        Instagram Chat Analyzer is a powerful web-based tool that helps you
                        analyze and visualize your Instagram chat data. Upload your exported
                        Instagram messages and get instant insights into your conversation
                        patterns, most active contacts, and messaging habits.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Why We Built This</h2>
                    <p>
                        We believe everyone should have access to their own data and the
                        ability to understand their digital communication patterns. Instagram
                        Chat Analyzer was created to give users meaningful insights into
                        their conversations without compromising their privacy.
                    </p>
                </div>

                <div className="about-section">
                    <h2>How It Works</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Export Your Data</h3>
                            <p>Request your Instagram data from Meta in JSON format</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Upload Files</h3>
                            <p>Upload your JSON files to our analyzer</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Get Insights</h3>
                            <p>View beautiful charts and statistics about your chats</p>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <h2>Privacy & Security</h2>
                    <p>
                        Your privacy is our top priority. All data processing happens
                        entirely in your browser - we never upload, store, or transmit your
                        chat data to any server. Your conversations remain completely private
                        and secure on your device.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Features</h2>
                    <ul className="features-list">
                        <li>📊 Message count analysis by user</li>
                        <li>📈 Most frequently used messages</li>
                        <li>⏰ Timeline of earliest and latest messages</li>
                        <li>🎨 Beautiful, interactive visualizations</li>
                        <li>🔒 100% client-side processing</li>
                        <li>⚡ Fast and responsive interface</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At Stats Insta, we're committed to empowering users with tools to understand their digital communication patterns. We believe in transparency, privacy, and giving users control over their own data. Our mission is to provide free, accessible analytics tools that respect user privacy while delivering valuable insights.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or feedback? We'd love to hear from you! Reach out to us at support@stats-insta.com or visit our Contact page for more ways to get in touch.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
