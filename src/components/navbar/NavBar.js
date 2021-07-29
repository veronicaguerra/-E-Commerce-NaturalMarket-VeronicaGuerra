import React,{useContext} from "react";
import Nav from "react-bootstrap/Nav";
import brandLogo from "../images/brandLogo.png";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import cartLogo from "../images/cartLogo.png";
import { Badge, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { providerCart } from "../context/CartContext";

const Barra = () => {

  const { totalBuy } = useContext(providerCart);

  return (
    <>
      <Navbar bg="#E8D9AC" expand="lg" navbarBsPrefix="fixed-bottom">
      <Link to={`/`}>
        <Navbar.Brand >
          <img
            src={brandLogo}
            height="80rem"
            width="100rem"
            alt="logo-empresa"
          />
          
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link><Link to={`/`}>Inicio</Link></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link  to={`/categories/jabones`}>Jabones</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={`/categories/mp`}> Materias Primas</Link></NavDropdown.Item>
             <NavDropdown.Item><Link to={`/categories/velas`}>Velas</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to={`/deals`}>Ofertas</Link></Nav.Link>
            <Nav.Link><Link to={`/contact`}>Contactos</Link></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="jabon, glicerina, aceites esenciales..."
              className="mr-sm-2 justify-content-end"
              size="sm"
            />

            <Button variant="outline-secondary" className="justify-content-end">
              Busqueda
            </Button>
          </Form>
          <Nav className="justify-content-end">
          <Nav.Link><Link to={`/cart`}>
              <img src={cartLogo} width="35rem" alt="logo-carrito-compras" />{" "}
              <Badge bg="secondary">${totalBuy}</Badge>
              </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Barra;
