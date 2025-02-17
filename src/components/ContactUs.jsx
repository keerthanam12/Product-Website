import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      header.classList.add("static-header");
    }

    return () => {
      if (header) {
        header.classList.remove("static-header");
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "The field is required.";
    if (!formData.email) formErrors.email = "The field is required.";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await emailjs.send(
        "service_f6dxjqh", 
        "template_vcmbql2", 
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "No Subject", 
          message: formData.message,
        },
        "juHsClun2bWNbxneO" 
      );

      setSubmissionStatus({
        type: "success",
        message: "Form submitted and email sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      setSubmissionStatus({
        type: "error",
        message: "Failed to send email. Please try again later.",
      });
    }
  };

  const handleNotificationDismiss = () => {
    setSubmissionStatus(null);
  };

  return (
    <div className="contact-us-container">
      {submissionStatus && (
        <div
          className={`notification-slider ${
            submissionStatus.type === "success" ? "success" : "error"
          }`}
        >
          <div
            className={`notification-underline ${
              submissionStatus.type === "success"
                ? "underline-success"
                : "underline-error"
            }`}
          ></div>
          <div
            className="circle"
            style={{
              backgroundColor:
                submissionStatus.type === "success" ? "#4caf50" : "#f44336",
            }}
          >
            {submissionStatus.type === "success" ? "✔" : "✘"}
          </div>
          <h2 className="notification-title">
            {submissionStatus.type === "success" ? "THANK YOU" : "ERROR"}
          </h2>
          <p className="notification-message">
            {submissionStatus.type === "success"
              ? "Form Submitted Successfully!"
              : submissionStatus.message}
          </p>
          <button onClick={handleNotificationDismiss} className="dismiss-btn">
            OK
          </button>
        </div>
      )}

      <div className="left-slider">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-info">
          <div className="info-item">
            <img src="/images/user-icon.png" alt="User Icon" className="icon" />
            Fronedge Overseas Pvt Ltd
          </div>
          <div className="info-item">
            <img
              src="/images/whatsapp-icon.png"
              alt="Whatsapp Icon"
              className="icon"
            />
            +91 9444030566
          </div>
          <div className="info-item">
            <img src="/images/email-icon.png" alt="Email Icon" className="icon" />
            fronedgeoverseas@gmail.com
          </div>
          <h2 className="section-title">Location</h2>
          <div className="info-item">
            <img
              src="/images/location-icon.png"
              alt="Location Icon"
              className="icon"
            />
            India
          </div>
          <div className="info-item">
            <img
              src="/images/address-icon.png"
              alt="Address Icon"
              className="icon"
            />
            Tamil Nadu
          </div>
        </div>
      </div>

      <div className="right-slider">
        <h2 className="form-title">Talk To Us – We’re Here To Help</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name (required)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Your Email (required)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
