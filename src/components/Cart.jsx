import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Cart(){
  const { cartItems, removeItem, getTotalPrice } = useCart();

  if(cartItems.length === 0) return (
    <div className="text-center">
      <h2>Carrito vacío</h2>
      <Link to="/" className="btn btn-link">Volver al catálogo</Link>
    </div>
  );

  return (
    <div>
      <h2 className="mb-4">Tu carrito</h2>
      <div className="list-group">
        {cartItems.map(i => (
          <div key={i.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-semibold">{i.title}</div>
              <div className="text-muted small">${i.price} x {i.qty} = ${i.price * i.qty}</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-sm btn-danger" onClick={() => removeItem(i.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-end">
        <div className="fw-bold">Total: ${getTotalPrice()}</div>
        <Link to="/checkout" className="btn btn-success mt-2">Finalizar compra</Link>
      </div>
    </div>
  );
}
