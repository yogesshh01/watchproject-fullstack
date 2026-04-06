import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "./Cartprovider";
import Copynavbar from './Copynavbar';
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import './Casio.css'


const Casio = () => {
 
    const {addToCart} = useContext(CartContext)
    
 const watches = [
     {
    id: 501,
    name: "CASIO",
    price: 65,
    image: "https://justintime.in/cdn/shop/products/D128.jpg?v=1682006292&width=1200",
    des: "Vintage Unisex Quartz Rose Gold Dial Digital Stainless Steel Watch D128"
  },
     {
    id: 502,
    name: "CASIO",
    price: 63,
    image: "https://justintime.in/cdn/shop/products/A832.jpg?v=1682009386&width=1200",
    des: "Enticer Men Quartz Black Dial Chronograph Stainless Steel Watch A832"
  },  
  
  {
    id: 503,
    name: "CASIO",
    price: 22,
    image: "https://justintime.in/cdn/shop/files/D338_1.jpg?v=1768052214&width=1200",
    des: "Vintage Unisex Quartz Black Dial Digital Stainless Steel Watch D338"
  }, 

   {
    id: 504,
    name: "CASIO",
    price: 43,
    image: "https://justintime.in/cdn/shop/files/AD270_1.jpg?v=1767187822&width=1200",
    des: "Vintage Unisex Quartz Blue Dial Analog-Digital Stainless Steel Watch AD270"
  },  
  
  {
    id: 505,
    name: "CASIO",
    price: 32,
    image: "https://justintime.in/cdn/shop/files/A1369_1_825638e5-d181-4b74-8013-b62610e4ffd1.jpg?v=1766226873&width=1200",
    des: "Enticer Men Quartz Black Dial Analog Leather Watch A1369"
  },  
  
  {
    id: 506,
    name: "CASIO",
    price: 33,
    image: "https://justintime.in/cdn/shop/products/D129.jpg?v=1682010266&width=1200",
    des: "Vintage Men Quartz Black Dial Digital Stainless Steel Watch D129"
  },

  {
    id: 507,
    name: "CASIO",
    price: 30,
    image: "https://justintime.in/cdn/shop/products/A1362.jpg?v=1682007479&width=1200",
    des: "Enticer Men Quartz Black Dial Analog Stainless Steel Watch A1362"
  },

  {
    id: 508,
    name: "CASIO",
    price: 29,
    image: "https://justintime.in/cdn/shop/products/A1364.jpg?v=1682011140&width=1200",
    des: "Enticer Men Quartz Blue Dial Analog Stainless Steel Watch A1364"
  },

  {
    id: 509,
    name: "CASIO",
    price: 40,
    image: "https://justintime.in/cdn/shop/products/A1176.jpg?v=1682008373&width=1200",
    des: "Enticer Men Quartz Black Dial Multi-Function Leather Watch A1176"
  },
]
    return (
    <>
    <Copynavbar/>

     <div className="mainvideocontainer">
    <video
            className="bgvideo"
            src='https://cdn.shopify.com/videos/c/o/v/d5f76d3f9efb42c8b1153324e5842557.mp4'
            autoPlay
            muted
            loop
            playsInline
          />
    </div>

    <div className="watchimages">
        {watches.map((watch)=>(
            <div className="brandimages" key={watch.id}>
                <img src={watch.image} alt={watch.name} />
                <h6>{watch.name}</h6>
                <p>${watch.price}</p>
                <p>{watch.des}</p>

              <Link to="/Cart">
                 <button onClick={() => addToCart(watch)}>
                  ADD TO CART
                </button>
                </Link>
            </div>
        ))
        }
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

export default Casio
