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
  const [checkOrder, setCheckOrder] = useState([])
  
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
    
const checkCart = (id,originalStock) => {
    if (isInCart(id)){ 
      const find = cartContent.filter((i) => i.id === id);
      const tempStock = find.map((i)=> i.stock)
      const tempNumb = find.map((i)=> i.cartCount)
      setStock(+tempStock);
      setNumb(+tempNumb);
      setShowButton(true)
    }
    else {
      setStock(originalStock);
      setNumb(1);
      setShowButton(false);
    }
  }

  //todo lo que este envuelto en con el componente CartContext podra usar las props que pase por parametro del provider
  return (
    <providerCart.Provider
      value={{ cartContent, setCart, clearCart, addCart, removeProd,localStock, setStock, totalBuy, setBuy, isInCart, numbCount,setNumb, checkCart ,showButton, setShowButton, reduceCartCount, checkOrder, setCheckOrder}}
    >
      {props.children}
    </providerCart.Provider>
  );
};

export default CartContext;
