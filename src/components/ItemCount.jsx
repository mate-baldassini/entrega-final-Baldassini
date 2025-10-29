import React, { useState } from 'react';

export default function ItemCount({ stock = 0, initial = 1, onAdd }){
  const [qty, setQty] = useState(initial);

  function inc(){ setQty(q => Math.min(stock, q + 1)); }
  function dec(){ setQty(q => Math.max(1, q - 1)); }

  if(stock <= 0) return <div className="text-danger">Producto sin stock</div>;

  return (
    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-secondary btn-sm" onClick={dec}>-</button>
      <span className="fw-bold">{qty}</span>
      <button className="btn btn-outline-secondary btn-sm" onClick={inc}>+</button>
      <button className="btn btn-primary btn-sm ms-3" onClick={() => onAdd(qty)}>Agregar</button>
    </div>
  );
}
