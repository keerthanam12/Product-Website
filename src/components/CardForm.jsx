import React, { useState } from "react";
import "../styles/CardForm.css";

const CardForm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Why should I employ an import export specialist company?",
      answer:
        "An import-export specialist ensures smooth global trade operations by handling documentation, compliance, and logistics.",
    },
    {
      question: "What do I need to remember before heading to global trade?",
      answer:
        "Understand market requirements, compliance regulations, and have a clear trading strategy.",
    },
    {
      question: "How do you treat end-to-end shipments?",
      answer:
        "We ensure timely delivery and quality control throughout the entire supply chain.",
    },
    {
      question: "How can I get my business started with you?",
      answer:
        "Reach out to us via the contact details provided, and we’ll assist you with a personalized plan.",
    },
  ];

  return (
    <div className="cardform-container">
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          {questions.map((item, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <span className="faq-symbol">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="/products/agro-commodities">Agro Commodities</a>
          </li>
          <li>
            <a href="/products/metals-and-alloys">Metals and Alloys</a>
          </li>
          <li>
            <a href="/products/handicrafts">Handicrafts</a>
          </li>
          <li>
            <a href="/products/organic-products">Organic Products</a>
          </li>
          <li>
            <a href="/products/decors">Decors</a>
          </li>
        </ul>
      </div>

      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>India</p>
        <p className="contact-spacing"></p>
        <p className="contact-details">
          Mobile: +91 9444030566
          <br />
          Email:{" "}
          <a href="mailto:fronedgeoverseas@gmail.com">fronedgeoverseas@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default CardForm;