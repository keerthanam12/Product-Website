import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/OrganicProducts.css";

const OrganicProducts = () => {
  const formRef = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("");

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

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.user_name.trim()) errors.user_name = "Name is required.";
    if (!formData.user_email.trim()) {
      errors.user_email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email.trim())) {
      errors.user_email = "Invalid email format.";
    }
    if (!formData.user_contact.trim()) {
      errors.user_contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.user_contact.trim())) {
      errors.user_contact = "Contact number must be 10 digits.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";

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
      .then(() => {
        setStatus("success");
        showNotification();
      })
      .catch(() => {
        setStatus("error");
        showNotification();
      });

    e.target.reset();
  };

  const showNotification = () => {
    const notification = document.getElementById("notification-box1");
    notification.style.display = "flex";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  };

  return (
    <div className="organic-container">
      <div id="notification-box1" className={`notification-box1 ${status}`}>
        <div className="icon-tick1">{status === "success" ? "✔" : "✘"}</div>
        <span>{status === "success" ? "Message Sent!" : "Failed to Send!"}</span>
        <div
          className="close-btn1"
          onClick={() =>
            (document.getElementById("notification-box1").style.display = "none")
          }
        >
          ×
        </div>
      </div>

      <div className="fourth-section">
        <div className="center-image-start">
          <img src="/images/picture4.png" alt="Products 4" />
        </div>
      </div>

      <div className="content-form-section1">
        <div className="left-content1">
          <h1 className="main-heading1">INTERNATIONAL TRADER OF ORGANIC PRODUCTS</h1>
          <p className="main-content1">
            As one of the leading trader of organic products having established
            a firm foot in the global market as an international trading company, we deal
            in the execution of trading products (raw/processed) from different parts of
            the world. Some of the countries with which trade has been established are
            Africa, the USA, Vietnam, Canada, UAE, etc.
          </p>
          <p className="main-content1">
            As one of the leading trader of organic products having established
            a firm foot in the global market as an international trading company, we deal
            in the execution of trading products (raw/processed) from different parts of
            the world. Some of the countries with which trade has been established are
            Africa, the USA, Vietnam, Canada, UAE, etc.
          </p>
        </div>

        <div className="right-form1">
          <h2 className="form-heading1">𝓖𝓮𝓽 𝓘𝓷 𝓣𝓸𝓾𝓬𝓱</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form1">
          <div className="form-group-page1">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className={`contact-form1 input ${
                formErrors.user_name ? "error-input1" : ""
              }`}
            />
            {formErrors.user_name && (
              <span className="error-message1">{formErrors.user_name}</span>
            )}
          </div>

          <div className="form-group-page1">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={`contact-form1 input ${
                formErrors.user_email ? "error-input1" : ""
              }`}
            />
            {formErrors.user_email && (
              <span className="error-message1">{formErrors.user_email}</span>
            )}
          </div>

          <div className="form-group-page1">
            <input
              type="text"
              name="user_contact"
              placeholder="Contact Number"
              className="contact-form1 input"
            />
          </div>
          <div className="form-group-page1">
            <input
              type="text"
              name="user_country"
              placeholder="Country Name"
              className="contact-form1 input"
            />
          </div>
          <div className="form-group-page">
            <textarea
              name="message"
              placeholder="Message"
              className={`contact-form1 textarea ${
                formErrors.message ? "error-input1" : ""
              }`}
            ></textarea>
            {formErrors.message && (
              <span className="error-message1">{formErrors.message}</span>
            )}
          </div>

          <button type="submit" className="send-button1">
            SEND
          </button>
          </form>
        </div>
      </div>

      <div className="new-content-section4">
        <div className="content-section4">
          <h2 className="section-heading4">Bar Soap</h2>
          <img src="/images/barsoap1-image.png" alt="Natural Bar Soap" className="section-image4" />
          <img src="/images/barsoap2-image.png" alt="Handmade Bar Soap" className="section-image4" />
          <p className="section-content4">
            Indulge in the timeless charm of our bar soaps, crafted with natural ingredients to nourish and cleanse your skin. Available in a variety of scents and formulas, each bar soap offers a luxurious experience that caters to all skin types.
          </p>
        </div>

        <div className="content-section4">
          <h2 className="section-heading4">Liquid Soap</h2>
          <img src="/images/liquidsoap1-image.png" alt="Bottle Liquid Soap" className="section-image4" />
          <img src="/images/liquidsoap2-image.png" alt="Liquid Soap Pump" className="section-image4" />
          <p className="section-content4">
            Our liquid soaps deliver gentle yet effective cleansing, enriched with hydrating ingredients to leave your skin feeling soft and refreshed. Designed for convenience and versatility, they are perfect for home, office, or on-the-go use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganicProducts;

