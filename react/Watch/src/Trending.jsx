import React,{useContext} from 'react'
import Copynavbar from './Copynavbar'
import { CartContext } from './Cartprovider'
import { Link } from 'react-router-dom'
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import './Trending.css'


const Trending = () => {

const{addToCart} = useContext(CartContext)


    const trending = [
        {
            id:901,
            name:'Longines',
            image:'https://justintime.in/cdn/shop/files/L38354726-1.jpg?v=1767616401&width=1200',
            price:4080,
            des:'Conquest Men Automatic Silver Dial Chronograph Stainless Steel Watch',
        },

        {
            id:902,
            name:'CITIZEN',
            image:'https://justintime.in/cdn/shop/files/BJ7138-04E.jpg?v=1768567440&width=1200',
            price:491,
            des:'Promaster Men Quartz Black Dial Analog Leather Watch BJ7138-04E',
        },

          {
            id:903,
            name:'CITIZEN',
            image:'https://justintime.in/cdn/shop/files/PR1023-10H.png?v=1769088035&width=1200',
            price:436,
            des:'Women Automatic Black Dial Analog Leather Watch PR1023-10H',
        },

          {
            id:904,
            name:'SEIKO',
            image:'https://justintime.in/cdn/shop/files/SRE023K1-1.jpg?v=1765888494&width=1200',
            price:382,
            des:'5 Sports Women Automatic Beige Dial Analog Stainless Steel Watch SRE023K1',
        },

         {
            id:905,
            name:'TIMEX',
            image:'https://justintime.in/cdn/shop/files/TWEG26800-1.jpg?v=1765361128&width=1200',
            price:131,
            des:'Marlin Men Quartz Green Dial Multi-Function Leather Watch TWEG26800',
        },

         {
            id:906,
            name:'FERRAGAMO',
            image:'https://justintime.in/cdn/shop/files/SFKJ01224-1.png?v=1762603011&width=1200',
            price:131,
            des:'Women Quartz Brown Dial Analog Stainless Steel Watch SFKJ01224',
        },

        {
            id:907,
            name:'CASIO',
            image:'https://justintime.in/cdn/shop/files/ED673_1.jpg?v=1766240645&width=1200',
            price:437,
            des:'G-Shock Men Automatic Black Dial Analog Stainless Steel Watch ED673',
        },

        {
            id:908,
            name:'CASIO',
            image:'https://justintime.in/cdn/shop/files/ED672_1.jpg?v=1772004084&width=1200',
            price:284,
            des:'G-Shock Men Automatic Silver Dial Analog Stainless Steel Watch ED672',
        },

         {
            id:909,
            name:'TISSOT',
            image:'https://justintime.in/cdn/shop/files/T1564081109300.jpg?v=1758612573&width=1200',
            price:1142,
            des:'Ballade Powermatic 80 COSC Unisex Automatic Green Dial Analog Stainless Steel Watch T1564081109300',
        },

    ]

    const best = [
        {
            id:910,
            name:'SEIKO',
            image:'https://justintime.in/cdn/shop/files/SSC955P1-1.png?v=1766240541&width=832',
            price:765,
            des:'Prospex Speedtimer Men Solar Purple Dial Chronograph Stainless Steel Tokyo World',
        },

         {
            id:911,
            name:'CITIZEN',
            image:'https://justintime.in/cdn/shop/files/NK0023-57L_1.jpg?v=1766240708&width=1200',
            price:654,
            des:'Tsuyosa 60 Men Automatic Blue Dial Analog Stainless Steel Watch NK0023-57L',
        },

        
         {
            id:912,
            name:'FOSSIL',
            image:'https://justintime.in/cdn/shop/files/FS6131-3P-25.jpg?v=1757656952&width=1200',
            price:158,
            des:'Grant Men Quartz Green Dial Chronograph Stainless Steel Watch FS6131',
        },
    ]

    const limit = [
        {
        id:913,
        name:"SEIKO",
        image:'https://justintime.in/cdn/shop/files/SRPL53K1.png?v=1757923411&width=1200',
        price:601,
        des:'Prospex PADI 60th Anniversary Men Automatic SRPL53K1'
        },

        {
        id:914,
        name:"SEIKO",
        image:'https://justintime.in/cdn/shop/files/SPB519J1.png?v=1757924743&width=1200',
        price:1639,
        des:'Prospex 1968 Heritage Diver’s GMT 60th Anniversary Men Automatic White Dial'
        },
    ]
  return (
    <>
    <Copynavbar/>

    <div className="backgroundimage">
      <img src='https://media.istockphoto.com/id/183796634/photo/businessman-checking-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=WxZrx6DBXq2TG-U3obChoRCv2-bZpLnw7TS2KjvtQkg='/>
    </div>
    <div className="watchimages">
        {trending.map((watch)=>(
            <div className="brandimages" key={watch.id}>

                 <span className="trending-label">✓ TRENDING</span>

                <img src={watch.image} alt={watch.name}/>
                <h6>{watch.name}</h6>
                <p>${watch.price}</p>
                <p>{watch.des}</p>
           <Link to='/cart'> <button onClick={()=>addToCart(watch)}>addToCart</button></Link>


            </div>
        ))}
    </div>


    <div className="watchimages">
        {best.map((watch)=>(
            <div className="brandimages" key={watch.id}>
              <img src={watch.image} alt={watch.name} />  
              <span className='best'>✓ BESTSELLER</span>
            <h6>{watch.name}</h6>
            <p>${watch.price}</p>
            <p>{watch.des}</p>
           <Link to='/cart'> <button onClick={()=>addToCart(watch)}>addToCart</button></Link>

            </div>
        ))}
    </div>


     <div className="watchimages">
        {limit.map((watch)=>(
            <div className="brandimages" key={watch.id}>
              <img src={watch.image} alt={watch.name} />  
              <span className='limit'>✓ Limited Edition</span>
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

export default Trending
