import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }){
  return (
    <div className="card h-100">
      <img src={item.image || 'https://via.placeholder.com/600x400'} className="card-img-top object-cover" style={{height:200}} alt={item.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted mb-2">${item.price}</p>
        <p className="text-secondary small">Stock: {item.stock ?? '—'}</p>
        <div className="mt-auto">
          <Link to={`/item/${item.id}`} className="btn btn-sm btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
}
