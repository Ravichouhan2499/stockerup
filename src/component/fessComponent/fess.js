import React from 'react'
import './fess.css'
import { Link } from 'react-router-dom'

export default function Fess() {
  return (
    <div className='container-1'>
      <h1>Stage 1</h1>
      <p>
     <b> Course Fee: INR 4000 (Online) | INR 5500 + Hall Charge (Offline) </b>
      </p>
      <div className='req-btn-container'>
        <Link to="https://phon.pe/ttguox0n" > <button className="button req-btn">Pay Now</button></Link>  
        </div> 
      <br/>
      
      <h1>Stage 2</h1>
      <p>
      <b>Course Fee: INR 35000 (Online) </b>
      {/* <div className='req-btn-container'>
        <Link to="https://phon.pe/ttguox0n" > <button className="button req-btn">Pay Now</button></Link>  
        </div>  */}
      </p>
      
 <br/>
      <h1>Personal Financial Planning</h1>
      <p>
     <b> Course Fee: INR 9500 (Online)  </b>
      </p>
      <div className='req-btn-container'>
        <Link to="https://phon.pe/am7awuzw" > <button className="button req-btn">Pay Now</button></Link>  
        </div> 
<br/>
           OR
<br/>
      <div className='req-btn-container'>
        <Link to="/contact-us" > <button className="button req-btn">Request a Appointment</button></Link>  
        </div> 

    </div>
  )
}
