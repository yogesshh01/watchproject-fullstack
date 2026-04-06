import React from "react";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>✅ Payment Successful</h1>
      <p>Your order has been placed!</p>
    <Link to='/'>Go To Home Page</Link>
    </div>
  );
};

export default Success;