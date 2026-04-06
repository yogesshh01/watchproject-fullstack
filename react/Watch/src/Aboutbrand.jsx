import React from 'react'
import { Linkedin,Instagram,Facebook } from 'lucide-react';

const Aboutbrand = () => {
  return (
   <>
    <div className="mainvideocontainer">
    <video
            className="bgvideo"
            src='https://cdn.shopify.com/videos/c/o/v/05b474fa191e4322bf6d8c6b19ba0d6c.mp4'
            autoPlay
            muted
            loop
            playsInline
          />
    </div>

   <div className="abouttext">
    <h6>HeadQuarter In </h6>
    <h3>Germany</h3><hr />

    <h1>About The Brand</h1><br /><br />

    <p>Alba. Founded in Japan in 1979, Alba crafts exceptionally designed watches that are assembled with meticulous attention to detail. Powered by Seiko Watch Corporation, Japan, incredible performance is the Alba DNA. Alba's trendsetting designs with distinct configurations tell more than just the time. With watches for every taste and every look, there's an Alba timepiece that speaks to every individua...</p>
   </div>

   

<footer>

<div className="container-fluid footer ">
  <div className="row">
    <div className="col-lg-6 mt-5">
      <h1 >Timeless-Tick</h1>

     <p>"At our store, we believe a watch is more than just a timepiece — it’s a statement of style, precision, and personality. Our carefully crafted collections combine timeless design with modern innovation, ensuring unmatched quality, durability, and elegance for every moment of your life."</p>
    <hr /><div className="footericon">
    {/* <Linkedin/>  
    <Instagram/>
    <Facebook/> */}


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
  )
}

export default Aboutbrand
