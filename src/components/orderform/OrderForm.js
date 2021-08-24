import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ordersCollection } from "../database/FirebaseConfig";
import { providerCart } from "../context/CartContext";
import { Redirect } from "react-router-dom";



const OrderForm = () => {

  const {
    
    cartContent,
    clearCart,
    setCheckOrder,
  } = useContext(providerCart);


  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [emailCheckI, setEmailCheckI] = useState("");
  const [emailCheckII, setEmailCheckII] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [finished, setFinished] = useState(false); 
  const [tempOrder, setTempOrder] = useState([]);

  useEffect(() => {
    const temp = cartContent.map((i) => {
      return{
        idproduct:i.id,
        product:i.name,
        totalcant:i.cartCount,
        price:i.price,
        totalprice:i.cartCount*i.price
      }
    });
    
    setTempOrder(temp)

  }, [cartContent])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinished(true) // este flag le dice a este componente que redirija al path /order que renderiza CheckOrder.js
 
 if(emailInvalid === false && emailCheckI===emailCheckII){
   const orderI = {
    name:name,
    lastname:lastName,
    numberphone:numberPhone,
    email:emailCheckII,
    product:tempOrder,
    } 
 
    ordersCollection.add({ orderI })
     .then((docRef) => {
      setCheckOrder([{idorder:docRef.id, ...orderI}])
      // limpiar campos
    e.target.reset();

    setEmailError(false)

    
  }).catch((error) => {
    console.error("Error adding document: ", error);
}); 

 
    
  } else {
    setEmailError(true)
  } 
  };

  const validateEmail = (e) => {
    console.log(`e`, e)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)) {
      setEmailInvalid(true)
        } else setEmailInvalid(false)
  }

  if(finished){
    
    clearCart();
    return <Redirect to="/order"  />
  } 
 
  return (
    <>
    
      <form onSubmit={handleSubmit}>
      <input
                    name="name"
                    className="form-control my-2"
                    placeholder="Nombre"
                    onChange={(e)=> setName(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
                </span>
                
                <input
                    name="lastName"
                    className="form-control my-2"
                    placeholder="Apellido"
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
                </span>
                <input
                    name="numberPhone"
                    className="form-control my-2"
                    placeholder="Teléfono"
                    onChange={(e)=> setNumberPhone(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
                </span>
                <input
                    name="emailCheckI"
                    className="form-control my-2"
                    placeholder="Correo Electrónico"
                    onBlur={(e)=> validateEmail(e.target.value)}
                    onChange={(e)=> setEmailCheckI(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {emailInvalid ? 'Formato invalido de la dirección de correo electrónico' : null} 
                </span>
                <input
                    name="emailCheckII"
                    className="form-control my-2"
                    placeholder="Confirme su Correo Electrónico"
                    onChange={(e)=> setEmailCheckII(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
                {emailError ? 'escriba la misma dirección de correo en ambos campos': null}
                </span>
    
        <Button variant="primary" type="submit">
          Realizar compra
        </Button>
      </form>
    </>
  );
};

export default OrderForm;
