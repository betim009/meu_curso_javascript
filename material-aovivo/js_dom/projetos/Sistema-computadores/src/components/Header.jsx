import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "./header.css";

function Header({ hideLogin, children }) {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (busca.trim()) {
      navigate(`/?busca=${encodeURIComponent(busca.trim())}`);
    }
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" className="header-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="header-brand">
            PU Suporte e Manutenção
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/checkout" className="header-checkout">
                Carrinho
              </Nav.Link>
              <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            </Nav>
            
            <Form className="d-flex me-3" role="search" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Pesquisar serviços..."
                className="me-2"
                aria-label="Search"
                value={busca}
                onChange={e => setBusca(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Form>
            
            <Nav className="mb-2 mb-lg-0">
              {!hideLogin && (
                <Nav.Link as={Link} to="/login" className="header-login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            
            {children}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;