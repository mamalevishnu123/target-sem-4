import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SEM4 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="/c1">C1</Nav.Link>
            <Nav.Link href="/c2">C2</Nav.Link>
            <Nav.Link href="/m1">M1</Nav.Link>
            <Nav.Link href="/m2">M2</Nav.Link>
            <Nav.Link href="/e1">E1</Nav.Link>
            <Nav.Link href="/e2">E2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;