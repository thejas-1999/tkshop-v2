import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
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
              <Nav.Link>
                <Link to="/cart" className="custom-link">
                  <FaShoppingCart /> Cart
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login" className="custom-link">
                  <FaUser /> Sign In
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
