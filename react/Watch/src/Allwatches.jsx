import React from "react";
import { useContext } from 'react';
import { CartContext } from './Cartprovider';
import "./Allwatches.css";
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import { Link } from "react-router-dom";
import Copynavbar from "./Copynavbar";

const Allwatches=()=>{


  const {addToCart} = useContext(CartContext)
  
  // const handleAddToCart =(product)=>{
  // addToCart(product)
  // toast.success(`${product.name} added to cart 🛒`);
  // }
    return(
        <>
  <Copynavbar/>    

    <div className="backgroundimage">
      <img src='https://images.unsplash.com/photo-1447015237013-0e80b2786ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>


    <div className="maintext">
      <h1>AllWatches</h1>
    </div>

      
{/* watch images */}


<div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/A2262.jpg?v=1766231309&width=832'/>
        <h6>CASIO</h6>
        <p>Enticer Men Quartz Green Dial Analog Stainless Steel Watch A2262</p>
        <p>$43</p>
         <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 101,
                name: "CASIO",
                price: 43,
                image: 'https://justintime.in/cdn/shop/files/A2262.jpg?v=1766231309&width=832',
                des:'Enticer Men Quartz Green Dial Analog Stainless Steel Watch A2262'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/products/A832.jpg?v=1682009386&width=1200'/>
        <h6>CASIO</h6>
        <p>Enticer Men Quartz Black Dial Chronograph Stainless Steel Watch A832</p>
        <p>$54</p>
            <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 102,
                name: "CASIO",
                price: 54,
                image: 'https://justintime.in/cdn/shop/products/A832.jpg?v=1682009386&width=1200',
                des:'Enticer Men Quartz Black Dial Chronograph Stainless Steel Watch A832'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/A1369_1_825638e5-d181-4b74-8013-b62610e4ffd1.jpg?v=1766226873&width=1200'/>
        <h6>ALBA</h6>
        <p>Enticer Men Quartz Black Dial Analog Leather Watch A1369</p>
        <p>$42</p>
          <Link to='/Cart'>   <button 
           onClick={() =>
              addToCart({
                id: 103,
                name: "ALBA",
                price: 42,
                image: 'https://justintime.in/cdn/shop/files/A1369_1_825638e5-d181-4b74-8013-b62610e4ffd1.jpg?v=1766226873&width=1200',
                des:'Enticer Men Quartz Black Dial Analog Leather Watch A1369'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>


{/* 3 to 6 */}

<div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/TWEG18421_1.jpg?v=1766226651&width=1200'/>
        <h6>TIMEX</h6>
        <p>Fashion Men Quartz Silver Dial Analog Stainless Steel Watch TWEG18421</p>
        <p>$49</p>
         <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 104,
                name: "TIMEX",
                price: 49,
                image: 'https://justintime.in/cdn/shop/files/TWEG18421_1.jpg?v=1766226651&width=1200',
                des:'Fashion Men Quartz Silver Dial Analog Stainless Steel Watch TWEG18421'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/TW0TG7641-ezgif.com-webp-to-jpg-converter.jpg?v=1764566247&width=1200'/>
        <h6>TIMEX</h6>
        <p>Fashion Men Quartz Green Dial Analog Stainless Steel Watch TW0TG7641</p>
        <p>$60</p>
            <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 105,
                name: "TIMEX",
                price: 60,
                image: 'https://justintime.in/cdn/shop/files/TW0TG7641-ezgif.com-webp-to-jpg-converter.jpg?v=1764566247&width=1200',
                des:'Fashion Men Quartz Green Dial Analog Stainless Steel Watch TW0TG7641'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/TWEG18507_1.jpg?v=1766228207&width=1200'/>
        <h6>TIMEX</h6>
        <p>Fashion Men Quartz Blue Dial Chronograph Stainless Steel Watch TWEG18507</p>
        <p>$55</p>
           <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 106,
                name: "TIMEX",
                price: 55,
                image: 'https://justintime.in/cdn/shop/files/TWEG18507_1.jpg?v=1766228207&width=1200',
                des:'Fashion Men Quartz Blue Dial Chronograph Stainless Steel Watch TWEG18507'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>

    {/* 7 to 9 */}

<div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/D123_1.jpg?v=1766229996&width=1200'/>
        <h6>CASIO</h6>
        <p>Vintage Women Quartz Black Dial Digital Stainless Steel Watch D123</p>
        <p>$48</p>
        <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 107,
                name: "CASIO",
                price: 51,
                image: 'https://justintime.in/cdn/shop/files/D123_1.jpg?v=1766229996&width=1200',
                des:'Vintage Women Quartz Black Dial Digital Stainless Steel Watch D123'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/A2360.jpg?v=1737098746&width=1200'/>
        <h6>CASIO</h6>
        <p>Enticer Women Quartz Pink Dial Analog Stainless Steel Watch A2360</p>
        <p>$60</p>
            <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 108,
                name: "CASIO",
                price: 51,
                image: 'https://justintime.in/cdn/shop/files/A2360.jpg?v=1737098746&width=1200',
                des:'Enticer Women Quartz Pink Dial Analog Stainless Steel Watch A2360'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/products/TW000Q810.jpg?v=1682054243&width=1200'/>
        <h6>TIMEX</h6>
        <p>Fashion Women Quartz Rose Gold Dial Chronograph Stainless Steel Watch</p>
        <p>$55</p>
            <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 109,
                name: "TIMEX",
                price: 55,
                image: 'https://justintime.in/cdn/shop/products/TW000Q810.jpg?v=1682054243&width=1200',
                des:'Fashion Women Quartz Rose Gold Dial Chronograph Stainless Steel Watch'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>


      {/* 10 to 12 */}

<div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/products/ES4432.jpg?v=1682335590&width=1200'/>
        <h6>FOSSIL</h6>
        <p>Carlie Women Quartz White Dial Analog Mesh Watch ES4432</p>
        <p>$67</p>
        <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 110,
                name: "FOSSIL",
                price: 67,
                image: 'https://justintime.in/cdn/shop/products/ES4432.jpg?v=1682335590&width=1200',
                des:'Carlie Women Quartz White Dial Analog Mesh Watch ES4432'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/products/D170.jpg?v=1682005931&width=1200'/>
        <h6>CASIO</h6>
        <p>Vintage Women Quartz Grey Dial Digital Mesh Watch D170</p>
        <p>$40</p>
             <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 111,
                name: "CASIO",
                price: 40,
                image: 'https://justintime.in/cdn/shop/products/D170.jpg?v=1682005931&width=1200',
                des:'Vintage Women Quartz Grey Dial Digital Mesh Watch D170'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/products/TWEL12805.jpg?v=1682051322&width=1200'/>
        <h6>TIMEX</h6>
        <p>Fashion Women Quartz Black Dial Analog Stainless Steel Watch TWEL12805</p>
        <p>$37</p>
           <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 112,
                name: "TIMEX",
                price: 37,
                image: 'https://justintime.in/cdn/shop/products/TWEL12805.jpg?v=1682051322&width=1200',
                des:'Fashion Women Quartz Black Dial Analog Stainless Steel Watch TWEL12805'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>


{/* 13 to 15 */}

<div className="watchimages">
        <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/A2358_1.jpg?v=1744626399&width=1200'/>
        <h6>CASIO</h6>
        <p>Enticer Women Quartz Silver Dial Analog Leather Watch A2358</p>
        <p>$42</p>
         <Link to='/Cart'> <button 
           onClick={() =>
             addToCart({
                id: 113,
                name: "CASIO",
                price: 42,
                image: 'https://justintime.in/cdn/shop/files/A2358_1.jpg?v=1744626399&width=1200',
                des:'Enticer Women Quartz Silver Dial Analog Leather Watch A2358'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/A2289_1.jpg?v=1752484351&width=1200'/>
        <h6>CASIO</h6>
        <p>Enticer Women Quartz Silver Dial Analog Leather Watch A2289</p>
        <p>$45</p>
            <Link to='/Cart'>  <button 
           onClick={() =>
              addToCart({
                id: 114,
                name: "CASIO",
                price: 45,
                image: 'https://justintime.in/cdn/shop/files/A2289_1.jpg?v=1752484351&width=1200',
                des:'Enticer Women Quartz Silver Dial Analog Leather Watch A2289'
              })
              
            }>ADD TO CART</button></Link>
        </div>

         <div className="brandimages">
        <img src='https://justintime.in/cdn/shop/files/A2365_1.jpg?v=1766232675&width=1200'/>
        <h6>CASIO</h6>
        <p>Enticer Women Quartz Blue Dial Analog Stainless Steel Watch A2365</p>
        <p>$37</p>
            <Link to='/Cart'> <button 
           onClick={() =>
              addToCart({
                id: 115,
                name: "CASIO",
                price: 37,
                image: 'https://justintime.in/cdn/shop/files/A2365_1.jpg?v=1766232675&width=1200',
                des:'Enticer Women Quartz Blue Dial Analog Stainless Steel Watch A2365'
              })
              
            }>ADD TO CART</button></Link>
        </div>

    </div>


    

           {/* footer */}
         {/* <ToastContainer position="top-right" /> */}
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

export default Allwatches




