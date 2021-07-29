import React, { useState, useEffect } from "react";
import Item from "./Item";


const ItemList = ({ value, products }) => {
  const [items, setDataP] = useState([]);


  useEffect(() => {
    if (!value) {
      setDataP(products);
    } else {
      //cambia el estado del array a renderizar si se presiono una categoria del Navbar
      const find = products.filter((i) => i.category === value);
      setDataP(find);
    }
  }, [value, products]);
 
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
