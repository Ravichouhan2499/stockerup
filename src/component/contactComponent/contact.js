import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./contact.css";
import img from '../../image/{CAEC9C11-6C53-4817-A984-AEB76D40A402}.png';

export default function ContactUs() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ty05rk", // Replace with your EmailJS Service ID
        "template_zmozbsl", // Replace with your EmailJS Template ID
        formRef.current,
        "_ybywiWeaDGGYODeo" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
          formRef.current.reset(); // Reset the form fields
        },
        (error) => {
          alert("Failed to Send Message. Please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-us">
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <h2 className="section-title">Contact Us</h2>
          <img src={img} className="profile-image" alt="Profile" />
          <p>
            <h3>Surya Prakash Tiwari</h3>
            (CPFA, MBA-Finance, 12 years of Share trading Experience, Dealt with
            over 1600 clients as on date)
            <br />
            <p>
              <b>Email:</b>
              <Link
                style={{ textDecoration: "none" }}
                to="mailto:cpfasurya2@gmail.com"
              >
                &nbsp; &nbsp;cpfasurya2@gmail.com
              </Link>
            </p>
          </p>
          <p>
            <b>Contact:</b>
            <Link
              style={{ textDecoration: "none" }}
              to="tel:9911558257"
            >
              &nbsp; &nbsp;9911558257
            </Link>
          </p>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name" // Matches the template placeholder {{from_name}}
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="to_name"
                name="from_email" // Matches the template placeholder {{to_name}}
                placeholder="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Contact</label>
              <input
                type="number"
                name="from_contact" // Matches the template placeholder {{to_contact}}
                placeholder="contact Number"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" // Matches the template placeholder {{message}}
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
