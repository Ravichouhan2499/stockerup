import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import img from '../../image/{CAEC9C11-6C53-4817-A984-AEB76D40A402}.png'

export default function ContactUs() {
  return (
<section className="contact-us">
  <div className="container">
    {/* Left Column */}
    <div className="left-column">
      <h2 className="section-title">Contact Us</h2>
      <img src={img}
      className="profile-image" 
      />
      <p>
     <h3> Surya Prakash Tiwari</h3> 
(CPFA, MBA-Finance, 12 year of Share trading
Experience, Dealt over 1600 clients as on date) 
 <br/>
 <p><b>email:</b><Link style={{ textDecoration: 'none' }} to='mailto:cpfasurya2@gmail.com'>&nbsp; &nbsp;cpfasurya2@gmail.com</Link> </p>
      </p>
      <p><b>Contact:</b><Link style={{ textDecoration: 'none' }} to='tel:9911558257'>&nbsp; &nbsp;9911558257</Link> </p>
      
     
     </div>

    {/* Right Column */}
    <div className="right-column">
      <form className="contact-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
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
