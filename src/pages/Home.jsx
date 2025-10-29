import React from 'react';
import ItemListContainer from '../components/ItemListContainer';

export default function Home(){
  return (
    <div>
      <h1 className="mb-4">Catálogo</h1>
      <ItemListContainer />
    </div>
  );
}
