import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Link className="custom-link">
            <Navbar.Brand>
              <img
                src={logo}
                style={{ height: "60px", borderRadius: "20px" }}
                alt=""
              />{" "}
              TK shop
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="custom-link" to="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link as={Link} className="custom-link" to="/cart">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
