import React from 'react';
import Item from './Item';

export default function ItemList({ items }){
  return (
    <div className="row">
      {items.map(i => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={i.id}>
          <Item item={i} />
        </div>
      ))}
    </div>
  );
}
