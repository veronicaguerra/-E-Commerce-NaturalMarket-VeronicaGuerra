import React, {useEffect, useState} from "react";
import { CardGroup, Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
//base de datos firebase 
import { productsCollection } from '../database/FirebaseConfig';

const ItemListContainer = () => {
  const { categorie } = useParams();
  const [products, setDataP] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {

(async () =>{
     const resp = await productsCollection.get();
    setDataP(resp.docs.map((i)=>({id:i.id, ...i.data()})))
    setLoading(false);
  } )(); 
}, []) 

if (loading) return <Spinner animation="border" />

  return ( 
    <> 
    <CardGroup>
      <ItemList value={categorie} products={products} />
      </CardGroup>
    </>
  );
};

export default ItemListContainer;
