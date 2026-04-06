import React,{useState} from "react";
import bannerVideo from "./assets/bannervideo.mp4";
import "./Home.css";
// import "./Responsive.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound,Menu,X } from 'lucide-react';
import AP1 from "./assets/AP1.png"
import AP2 from "./assets/AP2.png"
import AP3 from "./assets/AP3.png"
import AP4 from "./assets/AP4.png"
import AP5 from "./assets/AP5.png"
import AP6 from "./assets/AP6.png"
import AP7 from "./assets/AP7.png"
import AP8 from "./assets/AP8.png"
import AudemarsPiguet from "./assets/AudemarsPiguet.png"
import Cartier from "./assets/Cartier.png"
import R1 from "./assets/R1.png"
import B1 from "./assets/B1.png"
import H1 from "./assets/H1.png"
import IWC from "./assets/Iwc.png"
import CS1 from "./assets/Cs1.png"
import CS2 from "./assets/Cs2.png"
import CS3 from "./assets/Cs3.png"
import CS4 from "./assets/Cs4.png"
import F1 from "./assets/F1.png"
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';



const Home = () => {
 
  return (
    <>    

    {/* video..start from here */}
    <div className="hero-container">
      <video
        className="hero-video"
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay">
        <h1>Smart Electronics for Smart Living</h1>
        <p>Latest gadgets • Best prices • Fast delivery</p>
        <button className="hero-btn">Browse</button>
      </div>

{/* video end here */}


{/* navbar start from here */}
     <nav className="navbarone" >
      

      <ul className="nav-links">
        <li>Home</li>
       <li>All Watches</li>
       <li>Contact Us </li>
       <li>My orders </li>
      <li><ShoppingCart/></li>
      
      <li><CircleUserRound/> My Account</li>
       

      </ul>



       
    </nav>

    </div>
{/* navbar end here */}


{/* this is h1 ...............start from here......*/}
<div className="container-fluid">
<marquee scrollamount="35">  
  <h1 className="text z-1  p-2 rounded-1 text-center mt-4 ">  $ Premium Watch Brands $ Premium Watch Brands $ Premium Watch Brands   </h1>
</marquee>
</div>

{/* this is h1.............end here..... */}



{/* watch images 1to4............. start from here */}
<div className="container-fluid-img">
  <div className="row">
 <div className="col-lg-3">
  <img src={AP1}/>
  <h5 className="watch-price">$20,000</h5>
    <h3 className="watch-name">Audemars piguet Royal Oak</h3>
    <button type="button" className="btn btn-secondary mt-2">Add to cart</button>

  
 </div>

 <div className="col-lg-3">
  <img src={Cartier}/>
  <h5 className="watch-price">$40,300</h5>

  <h3 className="watch-name">Cartier Santos</h3>
  <button type="button" className="btn btn-secondary mt-2">Add to cart</button>


 </div>

 <div className="col-lg-3">
  <img src={R1}/>
  <h5 className="watch-price">$10,700</h5>

  <h3 className="watch-name">Rolax Submariner</h3>
  <button type="button" className="btn btn-secondary mt-2">Add to cart</button>

 </div>

 <div className="col-lg-3">
  <img src={B1}/>
  <h5 className="watch-price">$8000</h5>

  <h3 className="watch-name">Bretling Navitimer</h3>
    <button type="button" className="btn btn-secondary mt-2">Add to cart</button>

  
 </div>
 </div>
</div>

{/* watch images 1to4............. end here */}




{/* watch images 4 to 8 start from here*/}


<div className="container-fluid-img">
  <div className="row">
 <div className="col-lg-3">
  <img src={H1}/>
  <h5 className="watch-price">$27,800</h5>
    <h3 className="watch-name">Hublot Classic</h3>
    <button type="button" className="btn btn-secondary mt-2">Add to cart</button>

  
 </div>

 <div className="col-lg-3">
  <img src={IWC}/>
  <h5 className="watch-price">$13,500</h5>

  <h3 className="watch-name">IWC Pilot's Watch</h3>
  <button type="button" className="btn btn-secondary mt-2">Add to cart</button>


 </div>

 <div className="col-lg-3">
  <img src={AP8}/>
  <h5 className="watch-price">$26,000</h5>

  <h3 className="watch-name">Audemars piguet Jules Chronograph </h3>
  <button type="button" className="btn btn-secondary mt-2">Add to cart</button>

 </div>

 <div className="col-lg-3">
  <img src={AudemarsPiguet}/>
  <h5 className="watch-price">$1,000,000</h5>

  <h3 className="watch-name"> Audemars Selfwinding Flying Tourbillion</h3>
    <button type="button" className="btn btn-secondary mt-2">Add to cart</button>

  
 </div>
 </div>
</div>

{/* watch images 4 to 8 end here */}


{/* h1 arrivels ..... start from here */}
<marquee scrollamount='35'>
<h1 className="arrivels mt-4"># NEW ARRIVALS #</h1>
<h6>Coming Soon</h6>
</marquee>

{/* h1 arrivels ..... end here */}


{/* new arrivels pic ........ start from here.*/}


  
<div className="container-fluid mt-3">
<div className="row1">
  
  <div className="col-lg-3 image">
    
  <img src={CS1}/>
  <h5 className="watch-price mt-3">$7,390</h5>
    <h3 className="watch-name">Norqain Wild</h3>
    <button type="button" className="btn btn-success mt-2">Notify me</button>
    


  </div>

   <div className="col-lg-3 image">
  
  <img src={CS2}/>
  <h5 className="watch-price mt-3">$10,300</h5>
  <h3 className="watch-name">Zenith Chronomaster</h3>
  <button type="button" className="btn btn-success mt-2">Notify me</button>



  </div>

   <div className="col-lg-3 image">
    
  <img src={CS3}/>
  <h5 className="watch-price mt-3">$41,000</h5>
  <h3 className="watch-name">Jacob & Co.Epic x</h3>
  <button type="button" className="btn btn-success mt-2">Notify me</button>



  </div>

   <div className="col-lg-3 image">
    
  <img src={CS4}/>
  <h5 className="watch-price mt-3">$99,600</h5>
  <h3 className="watch-name">H. Moser & Cie.Pioneer</h3>
  <button type="button" className="btn btn-success mt-2">Notify me</button>



  </div>
</div>

</div>

{/* new arrivels pic ......... end here*/}


{/* limited time watch offer start line here */}
{/* <div className="hero mt-5">

  
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

</div> */}

{/* limited time watch offer  end here */}


{/* fotter...start from here */}


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
{/* fotter...end here */}

</>

);
};

export default Home;
