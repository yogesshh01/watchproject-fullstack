import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "./Cartprovider";
import Copynavbar from './Copynavbar';
import { Linkedin,Instagram,Facebook } from 'lucide-react';

const Fossil = () => {

const {addToCart} = useContext(CartContext)
    
 const watches = [
     {
    id: 601,
    name: "FOSSIL",
    price: 142,
    image: "https://justintime.in/cdn/shop/products/FS5821.jpg?v=1682340967&width=1200",
    des: "Everett Men Quartz Black Dial Analog Stainless Steel Watch FS5821"
  },
     {
    id: 602,
    name: "FOSSIL",
    price: 109,
    image: "https://justintime.in/cdn/shop/products/BQ2457.jpg?v=1682324449&width=1200",
    des: "Sullivan Men Quartz Black Dial Multi-Function Leather Watch BQ2457"
  },  
  
  {
    id: 603,
    name: "FOSSIL",
    price: 134,
    image: "https://justintime.in/cdn/shop/files/ME3257.jpg?v=1734695543&width=1200",
    des: "Bronson Men Automatic Black Dial Analog Stainless Steel Watch ME3257"
  }, 

   {
    id: 604,
    name: "FOSSIL",
    price: 175,
    image: "https://justintime.in/cdn/shop/files/FS5971_1.jpg?v=1766227752&width=1200",
    des: "Machine Men Quartz Black Dial Analog Stainless Steel Watch FS5971"
  },  
  
  {
    id: 605,
    name: "FOSSIL",
    price: 153,
    image: "https://justintime.in/cdn/shop/products/CE1107.jpg?v=1682326321&width=1200",
    des: "Fb-01 Women Quartz White Dial Analog Ceramic Watch CE1107"
  },  
  
  {
    id: 606,
    name: "FOSSIL",
    price: 88,
    image: "https://justintime.in/cdn/shop/products/ES3202.jpg?v=1682332604&width=1200",
    des: "Riley Women Quartz Silver Dial Chronograph Stainless Steel Watch ES3202"
  },

  {
    id: 607,
    name: "FOSSIL",
    price: 105,
    image: "https://justintime.in/cdn/shop/products/FS5852.jpg?v=1682341125&width=1200",
    des: "Bronson Men Quartz Black Dial Chronograph Stainless Steel Watch FS5852"
  },

  {
    id: 608,
    name: "FOSSIL",
    price: 176,
    image: "https://justintime.in/cdn/shop/products/ME3217.jpg?v=1682341327&width=1200",
    des: "Bronson Men Automatic Black Dial Analog Stainless Steel Watch ME3217"
  },

  {
    id: 609,
    name: "FOSSIL",
    price: 88,
    image: "https://justintime.in/cdn/shop/files/BQ3721-1.jpg?v=1759151627&width=1200",
    des: "Eevie Women Quartz Rose Gold Dial Multi-Function Stainless Steel Watch BQ3721"
  },
]
  return (
  <>
  <Copynavbar/>
  <div className="backgroundimage">
      <img src='https://images.unsplash.com/photo-1610897534349-7759782118b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9zc2lsJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D'/>
    </div>

    <div className="watchimages">
        {watches.map((watch)=>(
            <div className="brandimages" key={watch.id}>
                <img src={watch.image} alt={watch.name} />
                <h6>{watch.name}</h6>
                <p>{watch.price}</p>
                <p>{watch.des}</p>
            
             <Link to="/Cart">
            <button onClick={() => addToCart(watch)}>
            ADD TO CART
            </button>
            </Link>
            </div>
        ))}
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

export default Fossil
