import React,{useContext} from 'react'
import { CartContext } from './Cartprovider'
import './Cart.css'
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from './counterSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Copynavbar from './Copynavbar';




function Cart () {
const navigate = useNavigate();
const { cartItems, removeFromCart,updateQuantity} = useContext(CartContext);
// const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

// const Qty = useSelector((state) => state.Qty.value);
//   const dispatch = useDispatch();

const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * (item.quantity || 1),
  0
);

const handlebuynow=()=>{
    const token = localStorage.getItem('token')
    if(!token){
        navigate('/Signup')
    }else{
        navigate('/Checkout')
    }
}

  return (
     

<>
<Copynavbar/>
<div className="cart-page">

                <h2 className="cart-title">Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="empty-cart">Cart is empty</p>
                ) : (
                    <div className="cart-container">

                        {/* LEFT SIDE - ITEMS */}
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div className="cart-card" key={item.id}>

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-img"
                                    />

                                    <div className="cart-details">
                                        <h4>{item.name}</h4>
                                        <p className="price">${item.price}</p>
                                        <p className="des">{item.des}</p>

                                         <div className="quantity-box">
                                 <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity || 1}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>
                                        
                                    </div>

                                   
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>

                                </div>
                            ))}
                        </div>

                        {/* RIGHT SIDE - SUMMARY */}
                        <div className="cart-summary">
                            <h3>Order Summary</h3>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                           {/* <button onClick={()=>dispatch(decrement())}>-</button>
                            <h1>{Qty}</h1>
                             <button onClick={()=>dispatch(increment())}>+</button> */}
                             {/* <div className="quantity-box">
                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                             <span>{item.quantity || 1}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div> */}
                         <button className="checkout-btn"  onClick={handlebuynow}>Checkout</button>

                           
                        </div>

                    </div>
                )}

            </div>
</>
  )
}

export default Cart
