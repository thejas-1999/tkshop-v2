import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px" }}
              className="me-2"
            />
            TKShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="me-2" />
              Cart
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
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
