import React from "react"
import F1 from "./assets/F1.png"
import "./Myproject.css"
const Myproject=()=>{
  return(
    <>
    
<div className="hero mt-5">

  
  <div className="hero-left">
    
    <span className="offer-badge">Limited Time Offer</span>

    <h1>Premium Luxury<br/>Watches Collection</h1>

    <p>
      Discover our exclusive selection of premium timepieces with 
      special discounts up to 30% off. Elevate your style with 
      precision craftsmanship.
    </p>

   
    <div className="countdown">
      <div className="time-box">
        <h2>02</h2>
        <span>Days</span>
      </div>
      <div className="time-box">
        <h2>12</h2>
        <span>Hours</span>
      </div>
      <div className="time-box">
        <h2>45</h2>
        <span>Minutes</span>
      </div>
      <div className="time-box">
        <h2>05</h2>
        <span>Seconds</span>
      </div>
    </div>

    
    <div className="features">
      <span>🚚 Free Shipping</span>
      <span>🛡 2-Year Warranty</span>
      <span>↩ 30-Day Returns</span>
    </div>

  </div>

  
  <div className="hero-right">
    <img src={F1} alt="Watch"/>
    
    <div className="price-card">
      <small className="old-price">$599.99</small>
      <h3>$419.3</h3>
      <span>Save 30%</span>
    </div>
  </div>

</div>
    </>
  )
}


export default Myproject;
