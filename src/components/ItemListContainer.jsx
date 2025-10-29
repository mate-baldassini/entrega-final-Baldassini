import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function ItemListContainer({ categoryId }){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData(){
      try{
        const productsRef = collection(db, 'products');
        let q = productsRef;
        if(categoryId){
          q = query(productsRef, where('category', '==', categoryId));
        }
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(list);
      }catch(err){
        console.error(err);
      }finally{ setLoading(false); }
    }
    fetchData();
  }, [categoryId]);

  if(loading) return <div>Cargando productos...</div>;
  if(items.length === 0) return <div>No hay productos en esta categoría.</div>;

  return <ItemList items={items} />;
}
