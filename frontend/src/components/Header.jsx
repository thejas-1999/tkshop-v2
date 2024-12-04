import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">TKShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart className="me-2" />
              Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <FaUser className="me-2" />
              Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
