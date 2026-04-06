import React from 'react'
import './Alba.css'
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './Cartprovider';
import Copynavbar from './Copynavbar';


const Alba = () => {
const {addToCart} = useContext(CartContext)

  return (
    <>
    <Copynavbar/>
    
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

    <div className="allwatches">
        
        <h1>All Watches</h1>
      <Link className='link' to='/Aboutbrand'>  <h1>About Brand</h1></Link>
    </div>

    <div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AX7023X1.jpg?v=1769845231&width=1200'/>
        <h6> ALBA</h6>
        <p> Men Quartz Copper Dial Chronograph Stainless Steel Watch...</p>
        <p>$165</p>
     <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 1,
                name: "ALBA",
                price: 165,
                image: 'https://justintime.in/cdn/shop/files/AX7023X1.jpg?v=1769845231&width=1200',
                des:'Men Quartz Copper Dial Chronograph Stainless Steel Watch...Men Quartz Copper Dial Chronograph Stainless Steel Watch...'
              })
            }>ADD TO CART</button></Link>
            
        </div>



         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AL4767X1_eafd02e3-ee2e-4e20-bfee-e1fc4119bf15.webp?v=1768481902&width=1200'/>
        <h6>ALBA</h6>
        <p>Sunburst Men Automatic Green Dial Analog Steel Watch...</p>
        <p>$168</p>

          <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 2,
                name: "ALBA",
                price: 168,
                image: 'https://justintime.in/cdn/shop/files/AL4767X1_eafd02e3-ee2e-4e20-bfee-e1fc4119bf15.webp?v=1768481902&width=1200',
                des:'Men Quartz Copper Dial Chronograph Stainless Steel Watch...Men Quartz Copper Dial Chronograph Stainless Steel Watch...'
              })
              
            }>ADD TO CART</button></Link>

        

        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AX7011X1_13fc82dd-f84c-4fe6-af24-319b426b9e32.jpg?v=1768477695&width=1200'/>
        <h6>ALBA</h6>
        <p>Columbia Men Quartz Blue Dial Chronograph Steel Watch...</p>
        <p>$165</p>
          <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 3,
                name: "ALBA",
                price: 165,
                image: 'https://justintime.in/cdn/shop/files/AX7011X1_13fc82dd-f84c-4fe6-af24-319b426b9e32.jpg?v=1768477695&width=1200',
                des:'Columbia Men Quartz Blue Dial Chronograph Steel Watch...'
              })
              
            }>ADD TO CART</button></Link>
        </div>

        
    </div>
    
  

    <div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AL4771X2_424bd205-8198-478d-b9d9-928290b9919a.webp?v=1768482586&width=1200'/>
        <h6>ALBA</h6>
        <p>Men Automatic Blue Dial Analog Steel Watch AL4771X2...</p>
        <p>$200</p>
         <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 4,
                name: "ALBA",
                price: 200,
                image: 'https://justintime.in/cdn/shop/files/AL4771X2_424bd205-8198-478d-b9d9-928290b9919a.webp?v=1768482586&width=1200',
                des:'Men Automatic Blue Dial Analog Steel Watch AL4771X2...'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AX7011X1-1.jpg?v=1768477695&width=1920'/>
        <h6>ALBA</h6>
        <p>Men Quartz Green Dial Chronograph Steel Watch AT3K12X1</p>
        <p>$150</p>
             <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 5,
                name: "ALBA",
                price: 150,
                image: 'https://justintime.in/cdn/shop/files/AX7011X1-1.jpg?v=1768477695&width=1920',
                des:'Men Quartz Green Dial Chronograph Steel Watch AT3K12X1'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AZ5013X1_e20f200b-11aa-44c6-856e-52b46a3a45cb.webp?v=1768476660&width=3840'/>
        <h6>ALBA</h6>
        <p>Men Solar Blue Dial Chronograph Steel Watch AZ5013X1</p>
        <p>$140</p>
            <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 6,
                name: "ALBA",
                price: 140,
                image: 'https://justintime.in/cdn/shop/files/AZ5013X1_e20f200b-11aa-44c6-856e-52b46a3a45cb.webp?v=1768476660&width=3840',
                des:'Men Solar Blue Dial Chronograph Steel Watch AZ5013X1'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>


<div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AH7ET6X1.jpg?v=1769771514&width=1200'/>
        <h6>ALBA</h6>
        <p>Stardust Elegance Women Quartz Black Dial Analog Steel Watch AH7ET6X1</p>
        <p>$131</p>
         <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 7,
                name: "ALBA",
                price: 131,
                image: 'https://justintime.in/cdn/shop/files/AH7ET6X1.jpg?v=1769771514&width=1200',
                des:'Stardust Elegance Women Quartz Black Dial Analog Steel Watch AH7ET6X1'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AH7EA4X1.jpg?v=1769842331&width=1200'/>
        <h6>ALBA</h6>
        <p>Fashion Women Quartz Champagne Dial Analog Stainless Steel Watch AH7EA4X1</p>
        <p>$109</p>
             <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 8,
                name: "ALBA",
                price: 109,
                image: 'https://justintime.in/cdn/shop/files/AH7EA4X1.jpg?v=1769842331&width=1200',
                des:'Fashion Women Quartz Champagne Dial Analog Stainless Steel Watch AH7EA4X1'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/AH7DV3X1.jpg?v=1769842191&width=1200'/>
        <h6>ALBA</h6>
        <p>Fashion Women Quartz Mother Of Pearl Dial Analog Stainless Steel Watch AH7DV3X1</p>
        <p>$145</p>
            <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 9,
                name: "ALBA",
                price: 145,
                image: 'https://justintime.in/cdn/shop/files/AH7DV3X1.jpg?v=1769842191&width=1200',
                des:'Fashion Women Quartz Mother Of Pearl Dial Analog Stainless Steel Watch AH7DV3X1'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>




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

export default Alba
