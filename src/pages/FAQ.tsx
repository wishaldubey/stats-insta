import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Is my data safe?",
        answer:
            "Absolutely! All data processing happens entirely in your browser. We never upload, store, or transmit your chat data to any server. Your conversations remain completely private and secure on your device.",
    },
    {
        question: "How do I export my Instagram data?",
        answer:
            "Go to Instagram Settings > Your Activity > Download Your Information > Request a download. Select 'Messages' and choose JSON format. Meta will email you when your data is ready to download (usually takes a few days).",
    },
    {
        question: "What file format do I need?",
        answer:
            "You need JSON files from your Instagram data export. After downloading and extracting the ZIP file from Instagram, look for the 'messages' folder containing JSON files.",
    },
    {
        question: "Can I analyze multiple conversations at once?",
        answer:
            "Yes! You can upload multiple JSON files at once. The analyzer will process all of them and combine the data for comprehensive insights.",
    },
    {
        question: "Why are some messages not showing up?",
        answer:
            "The analyzer filters out certain types of messages like 'liked a message', attachments, and emoji-only messages to focus on actual text conversations. This helps provide more meaningful insights.",
    },
    {
        question: "Does this work on mobile devices?",
        answer:
            "Yes! The Instagram Chat Analyzer is fully responsive and works on all devices including smartphones and tablets. However, for the best experience, we recommend using a desktop browser.",
    },
    {
        question: "How long does the analysis take?",
        answer:
            "The analysis is nearly instant! Once you upload your JSON files, the processing happens in your browser and typically takes just a few seconds, depending on the size of your chat history.",
    },
    {
        question: "Can I save or export the analysis results?",
        answer:
            "Currently, the analysis is displayed in your browser session. You can take screenshots of the charts and statistics. We're working on adding export functionality in future updates.",
    },
    {
        question: "What browsers are supported?",
        answer:
            "Instagram Chat Analyzer works on all modern browsers including Chrome, Firefox, Safari, and Edge. Make sure you're using the latest version for the best experience.",
    },
    {
        question: "Is this tool free to use?",
        answer:
            "Yes! Instagram Chat Analyzer is completely free to use. There are no hidden fees, subscriptions, or premium features. We believe everyone should have access to their own data insights.",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <section className="faq-hero">
                <h1>Frequently Asked Questions</h1>
                <p className="lead">Find answers to common questions about Instagram Chat Analyzer</p>
            </section>

            <section className="faq-content">
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? "open" : ""}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="faq-cta">
                <h2>Still have questions?</h2>
                <p>Feel free to reach out to us through our contact page</p>
                <a href="/contact" className="btn btn-primary">
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default FAQ;
