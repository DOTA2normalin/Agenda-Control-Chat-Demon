import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import contacto from '../img/contacto.jpg';
import NavDropdown from "react-bootstrap/NavDropdown";


const Header = (props) => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
         <Link to="/">
            <img
               src={contacto}
               width="40"
               height="40"
               className="d-inline-block align-top mr-2"
               alt="Agenda de Control" 
            />
            <Navbar.Brand > AGENDA DE CONTROL </Navbar.Brand>
         </Link>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav" >
         <Nav className="mr-auto mt-4 mb-4"></Nav>
         
         <Nav className="ml-auto">
            <Link to="/about">About</Link>
         </Nav>
      
         <NavDropdown className="dropdown-item-text mr-auto" title="Menu" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
               <Link to="/login">
                  <Button variant="primary">Iniciar Sesion</Button>
               </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.2">
               <Link to="/google">
                  <Button variant="primary">Iniciar con Google</Button>
               </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.3">
               <Link to="/facebook">
                  <Button variant="primary">Iniciar con facebook</Button>
               </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">
               <Link to="/registrar"> 
                  <Button variant="primary">Registrarse</Button>
               </Link>
            </NavDropdown.Item>
         </NavDropdown>
         </Navbar.Collapse>
      </Navbar>
   
  );
};
export default Header;
