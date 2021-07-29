
import React, {useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { providerCart } from "../context/CartContext";

const ItemCount = ({stock,idProduct,product}) => {
    
  const { addCart, removeProd, localStock, numbCount, checkCart, showButton, setShowButton, reduceCartCount } = useContext(providerCart);
  
  const [count, setCount] = useState(1);

  const onAdd = (product, count) => {
    addCart(product, count);
    setShowButton(true);
    }; //addCart existe en contexto

  const removeProduct = (idProduct) => {
    removeProd(idProduct);
    setShowButton(false); /// ####### que sea una funcion que pasas por props desde itemDetail
  };

    useEffect(() => {
      checkCart(idProduct,stock)
      if(numbCount>1){
        
        setCount(numbCount)
      }else {
        setCount(1)
      }
    }, [numbCount,checkCart,idProduct,stock,count]) 
    //agregar o un if o un render condicional que pregunte si carrito no esta vacio que setcount=stock del cart

    return (
      <>
        <Card border="info"  style={{ width: 300 }} className="text-center">
          <Card.Header>Cantidad Disponible {localStock}</Card.Header>
          <Card.Body>
          
          {showButton ? 
          ( <Card.Text>
            <Button variant="success" disabled={localStock===0} onClick={()=> {reduceCartCount(idProduct,count+1)}}> + </Button>
            <> {count} </>
            <Button variant="danger" disabled={count<=1} onClick={()=> {reduceCartCount(idProduct,count-1)}}> - </Button>
            </Card.Text>) : null }
           <Card.Text>
            {showButton ?  null : (<Button variant="info" onClick={()=> {onAdd(product,count)}}> Añadir al carrito </Button>)}
            <Button variant="info" onClick={()=> {removeProduct(idProduct)}}> Eliminar producto del carrito </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
}

export default ItemCount


/*
traer la funcion reduceCartCount y reemplazar por el setCount's hook

cambiar el nombre de setshowbutton por otro mas especifico para el de finalizar
o pensarse como esa misma funcion puede usarse para el añadir carrito
*/