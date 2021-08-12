import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { productsCollection } from "../database/FirebaseConfig";
import { providerCart } from "../context/CartContext";



const OrderForm = () => {

  const {
    
    cartContent,
    clearCart,
    setModal,
  } = useContext(providerCart);


  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [emailCheckI, setEmailCheckI] = useState("");
  const [emailCheckII, setEmailCheckII] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();

    setModal(true)
/* if(emailInvalid === false && emailCheckI===emailCheckII){
     productsCollection.add({ 
      name:name,
      lastname:lastName,
      numberphone:numberPhone,
      email:emailCheckII,
      compra:cartContent
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // limpiar campos
    e.target.reset();

    // borrar carrito de compras
    clearCart();

    setEmailError(false)

    setModal(true)
  }).catch((error) => {
    console.error("Error adding document: ", error);
});

 
    
  } else {
    setEmailError(true)
  } 
    */


  };

  const validateEmail = (e) => {
    console.log(`e`, e)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)) {
      setEmailInvalid(true)
        } else setEmailInvalid(false)
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
                  {/*} {errors.name ==="required" ? "Ingrese su nombre" : null} */}
                </span>
                
                <input
                    name="lastName"
                    className="form-control my-2"
                    placeholder="Apellido"
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
                   {/*  { blankInput ? 'Escriba su apellido' : null}  */}
                </span>
                <input
                    name="numberPhone"
                    className="form-control my-2"
                    placeholder="Teléfono"
                    onChange={(e)=> setNumberPhone(e.target.value)}
                    required
                ></input>
                <span className="text-danger text-small d-block mb-2">
 {/*                    {errors?.numberPhone?.message} */}
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
