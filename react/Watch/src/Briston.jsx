import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import watches from "../data/bristonData";
import { CartContext } from "./Cartprovider";
// import './Briston.css'
import Copynavbar from './Copynavbar';
import { Linkedin,Instagram,Facebook } from 'lucide-react';


const Briston = () => {

const { addToCart } = useContext(CartContext);

  const watches = [
     {
    id: 301,
    name: "BRISTON",
    price: 494,
    image: "https://justintime.in/cdn/shop/files/18142.PBAM.GTS.3.NG.jpg?v=1742995377&width=1200",
    des: "Clubmaster Sport Men Quartz Matt Black Dial Chronograph NATO Watch"
  },
     {
    id: 302,
    name: "BRISTON",
    price: 439,
    image: "https://justintime.in/cdn/shop/files/17142.SA.TS.10.NBG.jpg?v=1743073390&width=1200",
    des: "Clubmaster Sport Men Quartz Green Dial Chronograph NATO Watch"
  },  
  
  {
    id: 303,
    name: "BRISTON",
    price: 500,
    image: "https://justintime.in/cdn/shop/files/24142.SA.B.2.LB.jpg?v=1742905823&width=1200",
    des: "Streamliner Urban Men Quartz White Dial Chronograph Leather Watch 24142.SA.B.2.LB"
  }, 

   {
    id: 304,
    name: "BRISTON",
    price: 296,
    image: "https://justintime.in/cdn/shop/files/21536_PRA_UB_33_NMB_1.jpg?v=1766240461&width=1200",
    des: "Clubmaster Chic Women Quartz Midnight Blue Dial Analog NATO Watch"
  },  
  
  {
    id: 305,
    name: "BRISTON",
    price: 658,
    image: "https://justintime.in/cdn/shop/files/251838_SA_T_2_FBR_1.jpg?v=1766240483&width=1200",
    des: "Streamliner Kennedy Men Quartz White Dial Chronograph Rubber Watch"
  },  
  
  {
    id: 306,
    name: "BRISTON",
    price: 438,
    image: "https://justintime.in/cdn/shop/files/14140.PRA.T.1.NB.jpg?v=1743073217&width=1200",
    des: "Clubmaster Classic Men Quartz Black Dial Chronograph NATO Watch 14140.PRA.T.1.NB"
  },

  {
    id: 307,
    name: "BRISTON",
    price: 450,
    image: "https://justintime.in/cdn/shop/files/20140.PRAT.37.NTCH-1.jpg?v=1766563117&width=1200",
    des: "Clubmaster Classic Unisex Quartz Chocolate Dial Chronograph NATO Watch"
  },

  {
    id: 308,
    name: "BRISTON",
    price: 680,
    image: "https://justintime.in/cdn/shop/files/25639.SA.T.2.LABR-1.jpg?v=1770720067&width=1200",
    des: "Clubmaster Legend Classic HMS Unisex Automatic White Dial Analog Leather Watch 25639.SA.T.2.LABR"
  },

  {
    id: 309,
    name: "BRISTON",
    price: 679,
    image: "https://justintime.in/cdn/shop/files/25639.SA.T.1.LAB-1.jpg?v=1766563203&width=1200",
    des: "Clubmaster Legend Classic HMS Unisex Automatic Black Dial Analog Leather Watch 25639.SA.T.1.LAB"
  },
]



    return (
 <>
 <Copynavbar/>
  <div className="backgroundimage">
      <img src='https://images.unsplash.com/photo-1447015237013-0e80b2786ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>
    
 <div className="watchimages">
   
        {watches.map((watch) => (
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

export default Briston
