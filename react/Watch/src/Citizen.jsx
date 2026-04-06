import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "./Cartprovider";
import Copynavbar from './Copynavbar';
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import './Citizen.css'

const Citizen = () => {

    const { addToCart } = useContext(CartContext);

  const watches = [
     {
    id: 401,
    name: "Citizen",
    price: 186,
    image: "https://justintime.in/cdn/shop/files/AN3689-55X_1.jpg?v=1766228338&width=1200",
    des: "Men Quartz Green Dial Chronograph Stainless Steel Watch AN3689-55X"
  },
     {
    id: 402,
    name: "Citizen",
    price: 98,
    image: "https://justintime.in/cdn/shop/files/BI5000-87L.jpg?v=1737190393&width=1200",
    des: "Men Quartz Blue Dial Analog Stainless Steel Watch BI5000-87L"
  },  
  
  {
    id: 403,
    name: "Citizen",
    price: 417,
    image: "https://justintime.in/cdn/shop/products/NJ0151-88M.jpg?v=1743414968&width=1200",
    des: "Tsuyosa Men Automatic Blue Dial Analog Stainless Steel Watch NJ0151-88M"
  }, 

   {
    id: 404,
    name: "Citizen",
    price: 142,
    image: "https://justintime.in/cdn/shop/files/BI5127-51H_1.jpg?v=1766231628&width=1200",
    des: "Men Quartz Grey Dial Analog Stainless Steel Watch BI5127-51H"
  },  
  
  {
    id: 405,
    name: "Citizen",
    price: 274,
    image: "https://justintime.in/cdn/shop/files/EW2297-55X_1.jpg?v=1766240531&width=1200",
    des: "Corso Women Eco-Drive Green Dial Analog Stainless Steel Watch EW2297-55X"
  },  
  
  {
    id: 406,
    name: "Citizen",
    price: 120,
    image: "https://justintime.in/cdn/shop/files/BI5110-54B_1.jpg?v=1766228242&width=1200",
    des: "Hyperion Men Quartz Gold Dial Analog Stainless Steel Watch BI5110-54B"
  },

  {
    id: 407,
    name: "Citizen",
    price: 318,
    image: "https://justintime.in/cdn/shop/files/NJ0158-89W_1.jpg?v=1766229159&width=1200",
    des: "Tsuyosa Men Automatic Red Dial Analog Stainless Steel Watch NJ0158-89W"
  },

  {
    id: 408,
    name: "Citizen",
    price: 428,
    image: "https://justintime.in/cdn/shop/files/NJ0150-56W.png?v=1732542034&width=1200",
    des: "Tsuyosa Men Automatic Red Dial Analog Stainless Steel Watch NJ0150-56W"
  },

  {
    id: 409,
    name: "Citizen",
    price: 252,
    image: "https://justintime.in/cdn/shop/products/GA1052-55E.jpg?v=1682017443&width=1200",
    des: "Axiom Women Eco-Drive Black Dial Analog Stainless Steel Watch GA1052-55E"
  },
]



  return (
    <>
    <Copynavbar/>
     <div className="mainvideocontainer">
    <video
            className="bgvideo"
            src='https://cdn.shopify.com/videos/c/o/v/4b9c8ea217c549e4a6b2b39aa34c51e8.mp4'
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

export default Citizen
