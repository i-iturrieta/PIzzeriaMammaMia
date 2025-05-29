import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prev => {
      const item = prev.find(p => p.id === pizza.id);
      if (item) {
        return prev.map(p => p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p);
      } else {
        return [...prev, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const increaseQty = (id) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(p => p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p)
        .filter(p => p.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};
