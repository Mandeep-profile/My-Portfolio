import React, { useState } from "react";
import avatar from "../../Assets/avatar.svg";
import Navbar from "../Navbar/Navbar";
import "./Contact.scss";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const AllFieldsFilled =
    contactForm.firstName !== "" &&
    contactForm.lastName !== "" &&
    contactForm.email !== "" &&
    contactForm.phoneNumber !== "" &&
    contactForm.subject !== "" &&
    contactForm.message !== "";

  const handleContactFormSubmit = () => {};

  return (
    <div className="contact-main-div">
      <div className="contact-nav">
        <Navbar />
      </div>
      <div className="avatar-img-main-div">
        <img src={avatar} className="avatar-img" alt="avatar" />
      </div>
      <div className="contact-form">
      <h1 className="contact-heading">LET'S BUILD A PROJECT</h1>
      <div className="input-contact-main">
        <div className="input-div">
          <input
            type="text"
            name="firstName"
            value={contactForm.firstName}
            placeholder="First Name*"
            className="contact-input"
            onChange={handleContactChange}
            autoComplete="off"
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            name="lastName"
            value={contactForm.lastName}
            placeholder="Last Name*"
            className="contact-input"
            onChange={handleContactChange}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="input-contact-main">
        <div className="input-div">
          <input
            type="email"
            name="email"
            value={contactForm.email}
            placeholder="Email*"
            className="contact-input"
            onChange={handleContactChange}
            autoComplete="off"
          />
        </div>
        <div className="input-div">
          <input
            type="number"
            name="phoneNumber"
            value={contactForm.phoneNumber}
            placeholder="Phone*"
            className="contact-input"
            onChange={handleContactChange}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="input-contact-main">
        <div className="input-div">
          <input
            type="text"
            name="subject"
            value={contactForm.subject}
            placeholder="Subject*"
            className="contact-input-sub"
            onChange={handleContactChange}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="input-contact-main">
        <div className="input-div">
          <textarea
            type="text"
            name="message"
            value={contactForm.message}
            placeholder="Message*"
            className="contact-input-textarea"
            onChange={handleContactChange}
            autoComplete="off"
          />
        </div>
      </div>
      <button
        className="contact-btn"
        disabled={!AllFieldsFilled}
        onClick={handleContactFormSubmit}
      >
        Submit
      </button>
      </div>
    </div>
  );
};

export default Contact;