import React, { createContext, useState } from "react";

//creo el contexto (este es el que voy a estar importando en los componentes)
export const providerCart = createContext({});

//creo el componente que tiene las propiedades del provider y que envuelve la app.js
export const CartContext = (props) => {
  const [cartContent, setCart] = useState([]);
  const [totalBuy, setBuy] = useState(0);
  const [localStock, setStock] = useState(0);
  const [numbCount, setNumb] = useState(1)
  const [showButton, setShowButton] = useState(false)

  const clearCart = () => setCart([]);

  const removeProd = (idProduct) => {
    const find = cartContent.filter((i) => i.id !== idProduct);
    setCart(find);
  };

  const isInCart = (id) => cartContent.some((i) => i.id === id);

  const addCart = (product, cartCount) => {
      setCart((prev) => [...prev, { ...product, stock: product.stock - cartCount, cartCount }]);
  };

  const reduceCartCount = (idProduct,count) =>{
      const reduceCart = cartContent.map((i) => {
        if (i.id === idProduct && i.cartCount >= count) {
          return { ...i, stock: i.stock + 1, cartCount: count };
        } else if (i.id === idProduct && i.cartCount <= count) {
            return { ...i, stock: i.stock - 1, cartCount: count };
          } else return i;        
      });
      setCart(reduceCart);
  }
  /* hacer que esta funcion incremente y decremente el contador de itemcount
   y maneje el stocklocal
   con un if 
   */
    
const checkCart = (id,originalStock) => {
    if (isInCart(id)){ 
      const find = cartContent.filter((i) => i.id === id);
      const tempStock = find.map((i)=> i.stock)
      const tempNumb = find.map((i)=> i.cartCount)
      setStock(+tempStock);
      setNumb(+tempNumb);
      setShowButton(true)
      console.log(`IS IN CART localstock, numbcount`, localStock, numbCount)
    }
    else {
      setStock(originalStock);
      setNumb(1);
      setShowButton(false);
      console.log(`ELSE localstock, numbcount`, localStock, numbCount)
    }
  }

  /* 
1) hook para el boton añadir carrito

2) setear en el checkCart un boolean para que haga aparecer el boton añadir carrito
si ese item no existe, entonces se muestra el añadir,
sino tiene que mostrarse solo el contador


*/

  console.log(`contenido del carrito`, cartContent);
  //todo lo que este envuelto en con el componente CartContext podra usar las props que pase por parametro del provider
  return (
    <providerCart.Provider
      value={{ cartContent, setCart, clearCart, addCart, removeProd,localStock, setStock, totalBuy, setBuy, isInCart, numbCount,setNumb, checkCart ,showButton, setShowButton, reduceCartCount }}
    >
      {props.children}
    </providerCart.Provider>
  );
};

export default CartContext;
