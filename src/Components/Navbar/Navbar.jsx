import "./Nav.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbarsection = () => {
  return (
    <Navbar
      className="nav border-bottom bg-white sticky-top"
      data-bs-theme="light"
      expand="sm"
    >
      <Container>
        <Navbar.Brand href="/">Bandage</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarsection;
