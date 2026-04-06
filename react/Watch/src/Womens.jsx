import React,{useContext} from 'react'
import Copynavbar from './Copynavbar'
import CartProvider, { CartContext } from './Cartprovider'
import { Link } from 'react-router-dom'
import { Linkedin,Instagram,Facebook } from 'lucide-react';


const Womens = () => {
 
const{addToCart} = useContext(CartContext)

 const women = [
    {
        id:801,
        name:'FOSSIL',
        price:147,
        image:'https://justintime.in/cdn/shop/files/ES5362_1.jpg?v=1766230862&width=1200',
        des:'Harlow Women Quartz Cream Dial Analog Stainless Steel Watch ES5362',
    },

    {
        id:802,
        name:'CASIO',
        price:27,
        image:'https://justintime.in/cdn/shop/files/A2287-1.jpg?v=1765793589&width=1200',
        des:'Enticer Women Quartz Silver Dial Analog Leather Watch A2287',
    },

    {
        id:803,
        name:'CASIO',
        price:49,
        image:'https://justintime.in/cdn/shop/products/D205.jpg?v=1682004870&width=1200',
        des:'Vintage Women Quartz Black Dial Digital Stainless Steel Watch D205',
    },

    {
        id:804,
        name:'FOSSIL',
        price:73,
        image:'https://justintime.in/cdn/shop/products/ES4432.jpg?v=1682335590&width=1200',
        des:'Carlie Women Quartz White Dial Analog Mesh Watch ES4432',
    },

{
        id:805,
        name:'Calvin Klein',
        price:125,
        image:'https://justintime.in/cdn/shop/files/25100063_3.png?v=1733381804&width=1200',
        des:'Ck Pulse Women Quartz Dual Tone Dial Analog Mesh Watch 25100063',
    },

    {
        id:806,
        name:'Calvin Klein',
        price:178,
        image:'https://justintime.in/cdn/shop/files/25200237_1.jpg?v=1766228430&width=1200',
        des:'Charming Women Quartz Silver Dial Analog Stainless Steel Watch 25200237',
    },

    
    {
        id:807,
        name:'TIMEX',
        price:52,
        image:'https://justintime.in/cdn/shop/products/TW000Q810.jpg?v=1682054243&width=1200',
        des:'Fashion Women Quartz Rose Gold Dial Chronograph Stainless Steel Watch',
    },

    {
        id:808,
        name:'GUESS',
        price:174,
        image:'https://justintime.in/cdn/shop/files/GW0308L5_1.jpg?v=1766227788&width=1200',
        des:'Luna Women Quartz Green Dial Analog Stainless Steel Watch GW0308L5',
    },

     {
        id:809,
        name:'CASIO',
        price:27,
        image:'https://justintime.in/cdn/shop/files/D215_1.jpg?v=1766228055&width=1200',
        des:'Vintage Women Quartz Black Dial Digital Resin Watch D215',
    },

    {
        id:810,
        name:'CALVIN KLEIN',
        price:137,
        image:'https://justintime.in/cdn/shop/files/25100091.jpg?v=1752919545&width=1200',
        des:'Ck Meridian Women Quartz Black Dial Analog Stainless Steel Watch 25100091',
    },

    {
        id:811,
        name:'COACH',
        price:169,
        image:'https://justintime.in/cdn/shop/files/14504419_1.png?v=1738131729&width=1200',
        des:'Sammy Women Quartz White Dial Analog Stainless Steel Watch 14504419',
    },

      {
        id:812,
        name:'FOSSIL',
        price:88,
        image:'https://justintime.in/cdn/shop/products/ES3466.jpg?v=1682333874&width=1200',
        des:'Riley Women Quartz Beige Dial Multi-Function Leather Watch ES3466',
    },

 {
        id:813,
        name:'ARMANI EXCHANGE',
        price:134,
        image:'https://justintime.in/cdn/shop/files/AX4616_1.jpg?v=1766231821&width=1200',
        des:'Women Quartz Gold Dial Analog Stainless Steel Watch AX4616',
    },

    {
        id:814,
        name:'ARMANI EXCHANGE',
        price:91,
        image:'https://justintime.in/cdn/shop/files/AX4617_1.jpg?v=1766239408&width=1200',
        des:'Women Quartz Gold Dial Analog Leather Watch AX4617',
    },

    {
        id:815,
        name:'MICHAEL KORS',
        price:267,
        image:'https://justintime.in/cdn/shop/products/MK5896.jpg?v=1682034101&width=1200',
        des:'Parker Women Quartz Pink Dial Chronograph Stainless Steel Watch MK5896',
    },
 ]


    return (
    <>
    <Copynavbar/>
 <div className="backgroundimage">
      <img src='https://justintime.in/cdn/shop/files/JIT_APRIL_Womens_watches_landing_page_banner_jpg_1900x.jpg?v=13607358076942426797'/>
    </div>

    <div className="watchimages">
        {women.map((watch)=>(
            <div className="brandimages" key={watch.id}>
                <img src={watch.image} alt={watch.name} />
            <h6>{watch.name}</h6>
            <p>${watch.price}</p>
            <p>{watch.des}</p>
           <Link to='/cart'> <button onClick={()=>addToCart(watch)}>addToCart</button></Link>
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

export default Womens
