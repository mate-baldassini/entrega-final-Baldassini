import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useCart } from '../contexts/CartContext';

export default function Checkout(){
  const { cartItems, getTotalPrice, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ name: '', email: '' });

  async function handleSubmit(e){
    e.preventDefault();
    if(cartItems.length === 0) return;
    setLoading(true);
    try{
      const ordersRef = collection(db, 'orders');
      const order = {
        buyer,
        items: cartItems,
        total: getTotalPrice(),
        createdAt: serverTimestamp()
      };
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clear();
    }catch(err){ console.error(err); }
    finally{ setLoading(false); }
  }

  if(orderId) return (
    <div className="text-center">
      <h2>Compra confirmada 🎉</h2>
      <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      <a href="/" className="btn btn-link">Volver al inicio</a>
    </div>
  );

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <h2 className="mb-4">Checkout</h2>
        {cartItems.length === 0 ? <div>Carrito vacío</div> : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input className="form-control" required value={buyer.name} onChange={e => setBuyer(b => ({...b, name: e.target.value}))} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required value={buyer.email} onChange={e => setBuyer(b => ({...b, email: e.target.value}))} />
            </div>
            <div className="mb-3">Total: ${getTotalPrice()}</div>
            <button className="btn btn-primary" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
          </form>
        )}
      </div>
    </div>
  );
}
