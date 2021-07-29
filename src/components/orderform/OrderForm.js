import React from 'react'
import { Button, Form } from 'react-bootstrap'

const orderForm = () => {
    return (
        <>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre y Apellido</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Realizar compra
  </Button>
</Form>
        </>
    )
}

export default orderForm
