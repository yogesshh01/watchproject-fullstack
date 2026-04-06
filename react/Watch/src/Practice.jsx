import React, { useState } from "react";
import bannerVideo from "./assets/bannervideo.mp4";
import { ShoppingCart, CircleUserRound, Menu, X } from "lucide-react";
import "./Practice.css";
import AP1 from "./assets/AP1.png";
import Cartier from "./assets/Cartier.png";
import R1 from "./assets/R1.png";
import B1 from "./assets/B1.png";
import H1 from "./assets/H1.png"
import IWC from "./assets/Iwc.png"
import AP8 from "./assets/AP8.png"
import AudemarsPiguet from "./assets/AudemarsPiguet.png"
import F1 from "./assets/F1.png"
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import { Link } from "react-router-dom";
import Copynavbar from "./Copynavbar";




const Practice = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>
    <Copynavbar/>
    <div className="hero-container">

      {/* ===== NAVBAR ===== */}
      {/* <nav className="navbar">
        <div className="logo">SmartStore</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>Home</li>
          <li>All Watches</li>
          <li>Contact Us</li>
          <li>My Orders</li>
        <Link to="/Cart">
          <li><ShoppingCart /></li></Link>
          <li className="account">
            <CircleUserRound /> My Account
          </li>
        </ul>
      </nav> */}

      {/* ===== HERO VIDEO ===== */}
      <video
        className="hero-video"
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== HERO CONTENT ===== */}
      <div className="hero-overlay">
        <h1>Smart Electronics for Smart Living</h1>
        <p>Latest gadgets • Best prices • Fast delivery</p>
        <Link to='Allwatches'><button className="hero-btn">Browse</button></Link>
      </div>

    </div>

    {/* featured by */}

    <div className="featuredbrand">
      <div className="h1text">
        <h1>Featured Brands</h1>
        <div className="brand images">
     <Link to="/Alba"> <img style={{ backgroundColor:'white', border:'1px solid black', borderRadius:'50%',height:'180px' ,marginLeft:'50px'}} src="https://justintime.in/cdn/shop/files/Alba1.png?v=1768543834&width=352"  /></Link>
      <Link to="/Briston"> <img style={{backgroundColor:'grey',border:'1px solid black', borderRadius:'50%',height:'180px' ,marginLeft:'50px'}} src="https://justintime.in/cdn/shop/files/SB_Menu_Briston_65d280f3-b8de-4ecc-891a-c3bdd658510b.png?v=1759906316&width=352"/></Link>
      <Link to="/Citizen"> <img style={{backgroundColor:'grey',border:'1px solid black', borderRadius:'50%',height:'180px' ,marginLeft:'50px'}}  src="https://justintime.in/cdn/shop/files/SB_Menu_Citizen_6fe0cbd3-d5b2-4af0-97b3-9a74ba636058.png?v=1759906316&width=352"/></Link>
      <Link to="/Casio"> <img style={{backgroundColor:'grey',border:'1px solid black', borderRadius:'50%',height:'180px' ,marginLeft:'50px'}} src="https://justintime.in/cdn/shop/files/SB_Menu_Casio_d93df85b-9e19-4c07-9a04-849fed911464.png?v=1759906316&width=352"/></Link>
      <Link to="/Fossil">  <img style={{backgroundColor:'grey',border:'1px solid black', borderRadius:'50%',height:'180px' ,marginLeft:'50px'}} src="https://justintime.in/cdn/shop/files/SB_Menu_Fossil_2a603726-555f-4e8c-bfa5-e871db6a0c33.png?v=1759906316&width=352"/></Link>
        </div>

      </div>
    </div>

{/* card section */}



    <div className="categories">

      <h1>Shop by Category</h1>

  <div className="allcategoryimage">

      <div className="category">
     <Link to='/Mens'> <img src="https://justintime.in/cdn/shop/files/Men_2-a.webp?v=1766555121&width=352" /></Link>
      <h5>MEN'S</h5>
      {/* <p>$500</p> */}
      </div>

      <div className="category">
       
     <Link to='/womens'> <img src="https://justintime.in/cdn/shop/files/Women_1-a.webp?v=1766555263&width=352" /></Link>
      <h5>WOMEN'S</h5>
      {/* <p>$400</p> */}
      </div>

      <div className="category">
       
     <Link to='/Trending'> <img src="https://justintime.in/cdn/shop/files/Trending-a.webp?v=1766555380&width=352" /></Link>
      <h5>TRENDING</h5>
      {/* <p>$300</p> */}
      </div>

</div>
     
    </div>

{/* limited time offer */}

<div className="offer-container">
      <div className="offer-left">
        <span className="offer-badge">Limited Time Offer</span>

        <h1>
          Premium Luxury <br /> Watches Collection
        </h1>

        <p>
          Discover our exclusive selection of premium timepieces with
          special discounts up to 30% off. Elevate your style with
          precision craftsmanship.
        </p>

        {/* Countdown */}
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

        {/* Features */}
        <div className="features">
          <span>🚚 Free Shipping</span>
          <span>🛡 2-Year Warranty</span>
          <span>↩ 30-Day Returns</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="offer-right">
        <img src={F1} alt="Watch" />

        <div className="price-card">
          <p className="old-price">₹899.99</p>
          <h3>₹629.99</h3>
          <span>Save 30%</span>
        </div>
      </div>
    </div>


{/* another video */}

<h1 style={{textAlign:'center',marginTop:'20px'}}>Why Buy From Us</h1>
<div className="mainvideocontainer">
    <video
            className="bgvideo"
            src='https://justintime.in/cdn/shop/videos/c/vp/abf53a141d6d425795810c56f8c9b8db/abf53a141d6d425795810c56f8c9b8db.SD-480p-1.5Mbps-63951198.mp4?v=0'
            autoPlay
            muted
            loop
            playsInline
          />
    </div>

{/* footer */}
<footer>

<div className="container-fluid footer ">
  <div className="row">
    <div className="col-lg-6 mt-5">
      <h1 >Timeless-Tick</h1>

     <p>"At our store, we believe a watch is more than just a timepiece — it’s a statement of style, precision, and personality. Our carefully crafted collections combine timeless design with modern innovation, ensuring unmatched quality, durability, and elegance for every moment of your life."</p>
    <hr /><div className="footericon">
    <Linkedin/>  
    <Instagram/>
    <Facebook/>


    </div>
  <button type="submit" className="btn btn-dark mt-4 mb-5">Back to top</button>
  
    </div>

  <div className="col-lg-6 mt-5 mb-auto ">
      
  <form>
 
    {/* <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label> */}
    
  {/* <input type="email" className="form-control" id="inputEmail3"/> */}
  {/* <button type="submit" className="btn btn-primary mt-3">Sign in</button><br /> */}

  <div className="main">

<div className="sitemap">
  <h5>Site Map</h5>
  <button type="button" className="btn btn-link">Home page</button><br />
  <button type="button" className="btn btn-link">Technology</button><br />
  <button type="button" className="btn btn-link">Contact us</button><br />
  <button type="button" className="btn btn-link">Portal</button><br />
  <button type="button" className="btn btn-link">careers</button><br />
  </div>

  <div className="legal">
    <h5>Legal</h5>
  <button type="button" className="btn btn-link">Privacy Policy</button><br />
  <button type="button" className="btn btn-link">Term of services</button>


  </div>
  </div>


</form>
    </div>
  </div>
 
</div>



</footer>
</>
  );
};

export default Practice;
