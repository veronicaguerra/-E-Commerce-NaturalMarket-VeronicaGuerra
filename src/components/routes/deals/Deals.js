import React, { useEffect, useState } from 'react';
import { productsCollection } from '../../database/FirebaseConfig';
import ItemList from '../../listcontainer/ItemList';

const Deals = () => {

	const [dealProduct, setDeal] = useState([])

	useEffect(() => {
		productsCollection.where("deal", "==", true)
    .get()
    .then((resp) => {
       setDeal(resp.docs.map((i) =>( { ...i.data() })));
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

	}, [])

	return (
		<>
		<h1>Aprovecha las ofertas especiales que tenemos para ti</h1>
		<ItemList value={false} products={dealProduct} />
		</>
	)
}

export default Deals
