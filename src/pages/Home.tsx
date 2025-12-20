import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Instagram Chat Analyzer
          </h1>
          <p className="hero-subtitle">
            Analyze your Instagram conversations with powerful insights and beautiful visualizations
          </p>
          <div className="hero-buttons">
            <Link to="/analyze" className="btn btn-primary">
              Start Analyzing
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Message Analytics</h3>
            <p>Get detailed insights into your chat patterns and message frequency</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Visual Charts</h3>
            <p>Beautiful pie charts and bar graphs to visualize your data</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>All analysis happens locally in your browser - your data never leaves your device</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Easy</h3>
            <p>Upload your Instagram JSON files and get instant results</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to analyze your chats?</h2>
          <p>Upload your Instagram data and discover insights in seconds</p>
          <Link to="/analyze" className="btn btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
