import React, { useContext } from "react";
import ItemCount from "../counter/ItemCount";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { providerCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ value }) => {
  const { showButton } = useContext(providerCart);
    
  return (
    <>
      <Container style={{ padding: 30 }}>
        <Row>
          <Col sm={8}>
            <Card style={{ width: "40rem" }} className="text-center">
              <Card.Header as="h5">{value.name}</Card.Header>
              <Card.Img
                variant="top"
                className="d-block mx-auto img-fluid w-50"
                src={`${value.img}`}
                style={{ width: "15rem" }}
              />
              <Card.Body>
                <Card.Text>{value.description}</Card.Text>
                <Card.Footer className="text-dark" >Precio Unitario {value.price}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <ItemCount
                  stock={value.stock}
                  idProduct={value.id}
                  product={value}
                />

                {showButton ? (
                  <Button variant="light">
                    <Link to={`/cart`}>Finalizar compra</Link>
                  </Button>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
