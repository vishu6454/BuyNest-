// CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // now this works because useAuth is exported

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth(); // updated to use currentUser instead of user
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (currentUser?.email) {
      const savedCart = localStorage.getItem(`cart_${currentUser.email}`);
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    } else {
      setCartItems([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id && prevItem.size === item.size
      );
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id && prevItem.size === item.size
            ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
            : prevItem
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === itemId && item.size === size))
    );
  };

  const updateQuantity = (itemId, size, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    if (currentUser?.email) {
      localStorage.removeItem(`cart_${currentUser.email}`);
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
