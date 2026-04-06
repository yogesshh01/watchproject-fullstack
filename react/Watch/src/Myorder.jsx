import React, { useEffect, useState } from "react";
import Copynavbar from "./Copynavbar";
import { useNavigate } from "react-router-dom";




const MyOrder = () => {

  const navigate = useNavigate()

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
 const token = localStorage.getItem('token')
    if(!token){                 
        navigate('/Signup')
    }else{
        navigate('/Myorder')
    }
    const userId = "12345"; // later from login

    const res = await fetch(
      `http://localhost:8001/my-orders/${userId}`
    );

    const data = await res.json();
    setOrders(data)
  };

  return (
    <>
    <Copynavbar/>
    <div style={{ padding: "40px" }}>
      <h1 style={{marginTop:'50px'}}>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order._id}
               style={{
                 border: "1px solid black",
                 margin: "20px",
                 padding: "15px",
                 borderRadius:'10px',
               
                 
          
               }}>
                
                
            <h3>Total: ${order.totalAmount}</h3>
            <p>Status: {order.paymentStatus}</p>

            {order.products.map((item,i) => (
              // <p key={i}>
                
              //   {item.name} - ₹{item.price}
              
               
              // </p>
              <ul style={{listStyle:'none'}} key={i}>
                {/* <li>{item._userId}</li> */}
                
                <li>{item.name}</li>
                <li>${item.price}</li>
                <li>{item.des}</li>
                <li><img style={{height:'200px'}} src={item.image}/></li>
              </ul>
              
              
              
            ))}
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default MyOrder