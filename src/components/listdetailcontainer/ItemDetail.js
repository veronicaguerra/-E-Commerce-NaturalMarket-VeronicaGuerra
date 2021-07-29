import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../counter/ItemCount";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { providerCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ value }) => {
  const { showButton } = useContext(providerCart);
    
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <Card style={{ width: "30rem" }} className="text-center">
              <Card.Header as="h5">{value.name}</Card.Header>
              <Card.Img
                variant="top"
                className="d-block mx-auto img-fluid w-50"
                src={`${value.img}`}
                style={{ width: "15rem" }}
              />
              <Card.Body>
                <Card.Text>{value.description}</Card.Text>
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
