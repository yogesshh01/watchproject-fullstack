import React,{useContext} from 'react'
import Copynavbar from './Copynavbar'
import { CartContext } from './Cartprovider'
import { Link } from "react-router-dom";
import { Linkedin,Instagram,Facebook } from 'lucide-react';


const Mens = () => {

    const {addToCart} = useContext(CartContext)

    const menswatch = [
        {
            id:701,
            name:"CASIO",
            price:153,
            image:'https://justintime.in/cdn/shop/products/EX189.jpg?v=1682010513&width=1200',
            des:'G-Shock Men Quartz White Dial Chronograph Stainless Steel Watch EX189',

        },

         {
            id:702,
            name:"TIMEX",
            price:36,
            image:'https://justintime.in/cdn/shop/files/TW0TG8024.jpg?v=1751352549&width=1200',
            des:'Fashion Men Quartz Green Dial Analog Stainless Steel Watch TW0TG8024',

        },

        {
            id:703,
            name:"GUESS",
            price:186,
            image:'https://justintime.in/cdn/shop/files/GW0575G2_1.jpg?v=1766227957&width=1200',
            des:'Men Quartz Green Dial Analog Stainless Steel Watch GW0575G2',

        },

         {
            id:704,
            name:"CASIO G-SHOCK",
            price:100,
            image:'https://justintime.in/cdn/shop/products/G987.jpg?v=1682004516&width=1200',
            des:'G-Shock Men Quartz Black Dial Analog-Digital Resin Watch G987',

        },

         {
            id:705,
            name:"CASIO G-SHOCK",
            price:61,
            image:'https://justintime.in/cdn/shop/products/G310.jpg?v=1682003103&width=1200',
            des:'G-Shock Men Quartz Black Dial Analog-Digital Resin Watch G310',

        },

        {
            id:706,
            name:"GUESS",
            price:152,
            image:'https://justintime.in/cdn/shop/files/GW0571G3_1.jpg?v=1766228805&width=1200',
            des:'Headline Men Quartz Green Dial Chronograph Silicone Watch GW0571G3',

        },

          {
            id:707,
            name:"TIMEX",
            price:38,
            image:'https://justintime.in/cdn/shop/products/17YLTGb8cFSRxIXxuWY2QYrX3kOgD6hZE.jpg?v=1697178336&width=1200',
            des:'Timex TRENDING Classics Men Quartz Green Dial Analog Stainless Steel Watch TWTG10404',

        },

         {
            id:708,
            name:"FOSSIL",
            price:158,
            image:'https://justintime.in/cdn/shop/files/FS6131-3P-25.jpg?v=1757656952&width=1200',
            des:'Grant Men Quartz Green Dial Chronograph Stainless Steel Watch FS6131',

        },

         {
            id:709,
            name:"CASIO",
            price:98,
            image:'https://justintime.in/cdn/shop/files/G1551_1.jpg?v=1724319509&width=1200',
            des:'G-Shock Men Quartz Black Dial Analog-Digital Resin Watch G1551',

        },

        {
            id:710,
            name:"Armani Exchange",
            price:174,
            image:'https://justintime.in/cdn/shop/files/AX4183_1.jpg?v=1766231794&width=1200',
            des:'Sync Men Quartz Black Dial Chronograph Stainless Steel Watch AX4183',

        },

        {
            id:711,
            name:"Armani Exchange",
            price:124,
            image:'https://justintime.in/cdn/shop/products/AX1326.jpg?v=1681998047&width=1200',
            des:'Outerbanks Men Quartz Black Dial Chronograph Silicone Watch AX1326',

        },

          {
            id:712,
            name:"TISSOT",
            price:448,
            image:'https://justintime.in/cdn/shop/products/T1374101104100.jpg?v=1682058839&width=1200',
            des:'PRX Men Quartz Blue Dial Analog Stainless Steel Watch T1374101104100',

        },


    ]

  return (
    <>
    <Copynavbar/>

    <div className="backgroundimage">
      <img src='https://justintime.in/cdn/shop/files/JIT_APRIL_Mens_watches_landing_page_banner_jpg_1900x.jpg?v=1022987037494555624'/>
    </div>

    <div className="watchimages">
        {menswatch.map((watch)=>(
            <div className="brandimages" key={watch.id}>
                <img src={watch.image} alt={watch.name} />
                <h6>{watch.name}</h6>
                <p>{watch.price}</p>
                <p>{watch.des}</p>
           <Link to='/Cart'> <button onClick={()=>addToCart(watch)}>addToCart</button></Link>

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

export default Mens
