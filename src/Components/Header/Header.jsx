import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="nav mt-0">
        <Container>
          <Navbar.Brand href="#home">STARTUP Z</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STARTUP</Nav.Link>
            <Nav.Link href="#pricing">INVESTOR</Nav.Link>
          </Nav> 
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
