import "./Nav.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Badge } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbarsection = () => {
  const counterGlobalState = useSelector((store) => store.counter.counter);
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
            <Nav.Link href="/cart">
              <HiShoppingCart size={30} />
              <Badge bg="primary">{counterGlobalState}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarsection;
