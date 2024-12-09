import React from 'react'
import './fess.css'
import { Link } from 'react-router-dom'

export default function Fess() {
  return (
    <div className='container-1'>
      <h1>Stage 1</h1>
      <p>
     <b> Course Fee: Rs 4000 (Online) | Rs 5500 + Hall Charge (Offline) </b>
      </p>
      <br/>
      
      <h1>Stage 2</h1>
      <p>
      <b>Course Fee: Rs 35000 (Online) </b>
      </p>
      
 <br/>
      <h1>Personal Financial Planning</h1>
      <p>
     <b> Course Fee: Rs 9500 (Online)  </b>
      </p>

<br/>
      <div className='req-btn-container'>
        <Link to="/contact-us" > <button className="button req-btn">Request a Appointment</button></Link>  
        </div> 

    </div>
  )
}
