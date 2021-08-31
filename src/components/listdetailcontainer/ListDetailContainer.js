import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { productsCollection } from "../database/FirebaseConfig";
import { Spinner } from "react-bootstrap";


const ListDetailContainer = () => {

  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      (async () => {
        const resp = await productsCollection.doc(id).get();
        setProduct({ id: resp.id, ...resp.data()});
        setLoading(false);
      } )();
    }, [id])

  if (loading || !product   ) return <Spinner animation="border" />

  return (
    <>
    <ItemDetail value = { product }/>
    </>
  );
}

export default ListDetailContainer;
