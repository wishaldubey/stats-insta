import React, { useState } from "react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Get In Touch</h1>
                <p className="lead">
                    Have questions, feedback, or suggestions? We'd love to hear from you!
                </p>
            </section>

            <section className="contact-content">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <div className="info-icon">📧</div>
                            <div>
                                <h3>Email</h3>
                                <p>support@stats-insta.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">💬</div>
                            <div>
                                <h3>Instagram</h3>
                                <p><a href="https://www.instagram.com/lipstickeraservishal/" style={{ color: 'gray' }}>@lipstickeraservishal</a></p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">🌍</div>
                            <div>
                                <h3>Location</h3>
                                <p>Available worldwide</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Send Us a Message</h2>
                        {submitted && (
                            <div className="success-message">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Tell us more..."
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
