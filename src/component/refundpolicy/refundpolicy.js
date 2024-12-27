import React from 'react'
import './refundpolicy.css'
import { Link } from 'react-router-dom'

export default function Refundpolicy() {
  return (
    <div className="refund-policy-container">
    <h1 className="refund-policy-title">Refund and Cancellation Policy</h1>
    <p className="refund-policy-description">
    Once we receive your refund request, it will be reviewed, and the refund will be credited to the original payment method within 7 business days if approved    </p>
    <b>Refund Eligibility</b>
    <ol className="refund-policy-list">
      <li>
      Refund requests must be submitted within <b>3 Days</b> of the purchase date.
      </li>
      <li><p>
      All requests must be made via email to <Link style={{ textDecoration: 'none' }}to='mailto:cpfasurya2@gmail.com'>cpfasurya2@gmail.com</Link></p>
      </li>
      <li>
      Refunds will only be considered if the product remains unused or unaccessed. Products that have been used, downloaded, or accessed are non-refundable.
      </li>
    </ol>
    <b>Refund Process</b>
    <ol className="refund-policy-list">
      <li>
      Once we receive your refund request, it will be reviewed, and the refund will be credited to the original payment method within <b>7 business days</b> if approved
      </li>
      <li>
      Refunds will be issued to the original payment method or as account credit, depending on payment provider capabilities and other considerations.
      </li>
    </ol>
    <b>Exceptions</b>
    <ol className="refund-policy-list">
      <li>
      Refunds are not available for subscription-based services, time-sensitive products, or items purchased using promotional codes or special discounts unless otherwise stated.
      </li>
      <li>
        <p>
      If you experience any issues with your purchase, don’t hesitate to contact us at  <Link style={{ textDecoration: 'none' }}to='mailto:cpfasurya2@gmail.com'>cpfasurya2@gmail.com</Link> before submitting a refund request.</p>
      </li>
    </ol>
    <b>Contact Us</b>
    <ol className="refund-policy-list">
      <li>
        <p>
      For any questions or concerns regarding our refund policy, please email us at <Link style={{ textDecoration: 'none' }}to='mailto:cpfasurya2@gmail.com'><b>cpfasurya2@gmail.com</b></Link></p>
      </li>
      <li>
      Thank you for choosing <b>SURYA PRAKASH TIWARI</b> We value your satisfaction and aim to provide a seamless and positive experience with our services.
      </li>
    </ol>
  </div>
  )
}
