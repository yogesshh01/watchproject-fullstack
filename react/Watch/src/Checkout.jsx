import React, { useContext, useState } from "react";
import { CartContext } from "./Cartprovider";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePayment = async () => {


    setLoading(true);

    const res = await fetch("http://localhost:8001/fake-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "12345",
        products: cartItems,
        totalAmount,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
        removeFromCart()
      navigate("/success");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Checkout</h1>
      <h2>Total: ${totalAmount}</h2>

      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;