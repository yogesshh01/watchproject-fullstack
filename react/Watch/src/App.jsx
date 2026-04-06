import { useState } from 'react'
import './App.css'
import Home from './Home'
import Myproject from './Myproject'
import Practice from './Practice'
import Allwatches from './Allwatches'
import Alba from './Alba'
import Aboutbrand from './Aboutbrand'
import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import CartProvider from './Cartprovider'
import Cart from './Cart'
import Copynavbar from './Copynavbar'
import Singup from './Singup'
import Login from './Login'
import Myorder from './Myorder'
// import Buypage from './Buypage'
import Checkout from "./Checkout";
import Success from "./Success";
import Briston from './Briston'
import Citizen from './Citizen'
import Casio from './Casio'
import Fossil from './Fossil'
import Mens from './Mens'
import Womens from './Womens'
import Trending from './Trending'
import Contact from './Contact'

function App() {
  

  return (
    <>
    {/* <Copynavbar/> */}
    <CartProvider>

    

<Routes>
  <Route path='/' element={<Practice/>}/>
  <Route path='/Allwatches' element={<Allwatches/>}/>

  <Route path='/Aboutbrand' element={<Aboutbrand/>}/>
  <Route path='/Alba' element={<Alba/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/Signup' element={<Singup/>}/>
   <Route path='/Login' element={<Login/>}/>
   <Route path='/Myorder' element={<Myorder/>}/>
   {/* <Route path='/Buypage' element={<Buypage/>}/> */}
<Route path="/checkout" element={<Checkout />} />
<Route path="/success" element={<Success />} />
<Route path="/Briston" element={<Briston />} />
<Route path="/citizen" element={<Citizen />} />
<Route path="/casio" element={<Casio />} />
<Route path="/fossil" element={<Fossil />} />
<Route path="/Mens" element={<Mens />} />
<Route path="/Womens" element={<Womens />} />
<Route path="/Trending" element={<Trending />} />
<Route path="/Contact" element={<Contact />} />












</Routes>

  </CartProvider>
</>
  )
}

export default App
