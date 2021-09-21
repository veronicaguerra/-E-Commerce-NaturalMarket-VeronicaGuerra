import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ( { item } ) => { 

  console.log(`item`, item)

    return (
      <>
        <Card  style={{ width: '25rem' , padding: 20, margin: 5 }}>
        <Card.Img className="d-block mx-auto" variant="top" src={item.img}  style={{ width: '18rem' }}/>
          <Card.Body>
          <Link to={`/item/${item.id}`}>
          <Card.Title>{item.name}</Card.Title>
          </Link>
          </Card.Body>
        </Card>
      
      </>
    );
}

export default Item
