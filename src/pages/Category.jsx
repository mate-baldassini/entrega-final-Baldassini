import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

export default function Category(){
  const { categoryId } = useParams();
  return (
    <div>
      <h1 className="mb-4">Categoría: {categoryId}</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}
