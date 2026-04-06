import React, { createContext , useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, amount) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + amount }
        : item
    )
  );
};



  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
