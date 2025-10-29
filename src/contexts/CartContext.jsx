import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart(){ return useContext(CartContext); }

export function CartProvider({ children }){
  const [cartItems, setCartItems] = useState([]); 

  function addItem(item, qty){
    setCartItems(prev => {
      const exists = prev.find(p => p.id === item.id);
      if(exists){
        return prev.map(p => p.id === item.id ? { ...p, qty: Math.min(p.stock, p.qty + qty) } : p);
      }
      return [...prev, { ...item, qty }];
    });
  }

  function removeItem(id){ setCartItems(prev => prev.filter(p => p.id !== id)); }
  function clear(){ setCartItems([]); }
  function getTotalQty(){ return cartItems.reduce((s,i)=> s + i.qty, 0); }
  function getTotalPrice(){ return cartItems.reduce((s,i)=> s + i.qty * i.price, 0); }

  const value = { cartItems, addItem, removeItem, clear, getTotalQty, getTotalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
