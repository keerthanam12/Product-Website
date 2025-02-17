import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const formRef = useRef();
  const [formErrors, setFormErrors] = useState({}); 
  const [status, setStatus] = useState("");

  const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.user_name.trim()) {
      errors.user_name = "Name is required.";
    }
    if (!formData.user_email.trim()) {
      errors.user_email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email.trim())
    ) {
      errors.user_email = "Invalid email format.";
    }
    if (!formData.user_contact.trim()) {
      errors.user_contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.user_contact.trim())) {
      errors.user_contact = "Contact number must be 10 digits.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
  
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      user_contact: e.target.user_contact.value,
      user_country: e.target.user_country.value,
      message: e.target.message.value,
    };
  
    const errors = validateForm(formData);
    setFormErrors(errors);
  
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      showNotification();
      return; 
    }
  
    emailjs
    .send(
      "service_o9p1nks",
      "template_ucwp1jq",
      {
       user_name: formData.user_name,
       user_email: formData.user_email,
       user_contact: formData.user_contact,
       user_country: formData.user_country,
       message: formData.message,
      },
      "juHsClun2bWNbxneO"
    )
      .then((result) => {
        console.log("Success:", result.text);
        setStatus("success");
        showNotification();
      })
      .catch((error) => {
        console.error("Error:", error.text);
        setStatus("error");
        showNotification();
      });
  
    e.target.reset(); 
  };  

  const showNotification = () => {
    const notification = document.getElementById("notification-box");
    notification.style.display = "flex";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div id="notification-box" className={`notification-box ${status}`}>
        <div className="icon-tick">{status === "success" ? "✔" : "✘"}</div>
        <span>{status === "success" ? "Message Sent!" : "Failed to Send!"}</span>
        <div
          className="close-btn"
          onClick={() =>
            (document.getElementById("notification-box").style.display = "none")
          }
        >
          ×
        </div>
      </div>

      <div className="contact-slider">
        <div className="contact-header">
          <h2>SEND US YOUR QUERY</h2>
          <h3>& LET’S GET IN TOUCH</h3>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className={`form-input ${
                formErrors.user_name ? "error-input" : ""
              }`}
            />
            {formErrors.user_name && (
              <span className="error-message">{formErrors.user_name}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={`form-input ${
                formErrors.user_email ? "error-input" : ""
              }`}
            />
            {formErrors.user_email && (
              <span className="error-message">{formErrors.user_email}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="user_contact"
              placeholder="Contact Number"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="user_country"
              placeholder="Country Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              className={`form-textarea ${
                formErrors.message ? "error-input" : ""
              }`}
            ></textarea>
            {formErrors.message && (
              <span className="error-message">{formErrors.message}</span>
            )}
          </div>
          <button type="submit" className="send-button">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
