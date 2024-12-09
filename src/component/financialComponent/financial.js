import React from 'react'
import './financial.css'
import { Link } from 'react-router-dom'

export default function Financial() {
  return (
    <div className="financial-container">
    <header className="hero">
      <div className="hero-content">
        <h1>Personal Financial Planning</h1>
        <p>
          Simplify your financial life with comprehensive financial planning,
          investing, and total wealth management. We help you grow, manage,
          and protect your wealth so you can pursue your dreams.
        </p>
        <button className="cta-button">Request an Appointment</button>
      </div>
    </header>
    <main className="main about-section">
    <section className="about">
        <h2>Every client is unique</h2>
        <p>
        We work closely with you to understand your life and goals, and develop a personalized plan to help you get there. We are here to guide you at every life decision.
        </p>
     
        <h2> Our clients</h2>
        <p>
        Our clients include families, high income salaried class employees, and entrepreneurs. We are proud to serve multiple generations of families to whom we provide holistic wealth management services.        </p>
        <h2>Our Commitment</h2>
        <p>
          As independent fiduciary financial advisors, we provide unbiased
          advice and personalized financial plans, free from conflicts of
          interest.
        </p>
      </section>
      <section id="principles" className="principles">
        <strong>We have adopted the following principles based on the CERTIFIED FINANCIAL ADVISING (NISM) Code of Ethics. We owe a duty of loyalty, fairness and good faith toward our clients</strong>
        <h2>Our Principles</h2>
        <div className="principle-cards">
          <div className="card">
            <h3>Objectivity</h3>
            <p>We act in the best interest of every client.</p>
          </div>
          <div className="card">
            <h3>Integrity</h3>
            <p>We maintain honesty and dignity in all dealings.</p>
          </div>
          <div className="card">
            <h3>Competence</h3>
            <p>We continually enhance our professional education.</p>
          </div>
          <div className="card">
            <h3>Confidentiality</h3>
            <p>We safeguard all client information with consent.</p>
          </div>
          <div className="card">
            <h3>Professionalism</h3>
            <p>We diligently provide high-quality professional services.</p>
          </div>
        </div>
      </section>    
      <section>    
        <h1 className='text-center'>Steps to Subscribe</h1>
        <ul className="steps-list">
      
          <li>Spend 10 minutes discussing your goals with an advisor.</li>
          <li>Make a yearly payment of INR 9500 and share payment details.</li>
          <li>
            We will assess your pINRnal finance and connect with you via
            voice/video call.
          </li>
          <li>
            Receive a tailored action plan and implementation assistance to
            achieve your goals.
          </li>
          <li>
            Ongoing reminders and guidance throughout the tenure of your plan.
          </li>
        </ul>
        <div className='req-btn-container'>
        <Link to="/contact-us" > <button className="button req-btn">Request a Appointment</button></Link>  
        </div> 
           </section>
    </main>
  </div>
    )
}
