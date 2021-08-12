import React, { useContext } from 'react';
import ItemListContainer from '../../listcontainer/ItemListContainer';
import ModalCheckOut from '../../modalcheckout/ModalCheckOut';
import { providerCart } from "../../context/CartContext";

const Home = () => {
	
	const {
		modalShow,
	  } = useContext(providerCart);
	

	if (modalShow) return <> <ModalCheckOut/> </>

	return (
		<div>
			<ItemListContainer/>
		</div>
	)
}

export default Home
