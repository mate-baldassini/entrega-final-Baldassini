import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemCount from './ItemCount';
import { useCart } from '../contexts/CartContext';

export default function ItemDetailContainer(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    async function fetchItem(){
      try{
        const docRef = doc(db, 'products', id);
        const snap = await getDoc(docRef);
        if(snap.exists()) setItem({ id: snap.id, ...snap.data() });
      }catch(err){ console.error(err); }
      finally{ setLoading(false); }
    }
    fetchItem();
  }, [id]);

  if(loading) return <div>Cargando detalle...</div>;
  if(!item) return <div>Producto no encontrado.</div>;

  function handleAdd(qty){
    addItem({ id: item.id, title: item.title, price: item.price, stock: item.stock, image: item.image }, qty);
    setAdded(true);
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-md-6">
        <img src={item.image || 'https://via.placeholder.com/800x600'} alt={item.title} className="img-fluid rounded" />
      </div>
      <div className="col-12 col-md-6">
        <h2>{item.title}</h2>
        <p className="text-muted">${item.price}</p>
        <p>{item.description}</p>
        <p className="text-secondary">Stock: {item.stock}</p>

        {!added ? (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div className="mt-3">
            <div className="alert alert-success">Agregado al carrito ✅</div>
            <Link to="/cart" className="btn btn-sm btn-primary">Ir al carrito</Link>
          </div>
        )}
      </div>
    </div>
  );
}
