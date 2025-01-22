import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import logo from "../assets/logo.png";
import SearchBox from "./SearchBox";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
              <SearchBox />
              <Nav.Link as={Link} className="custom-link" to="/cart">
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                    {cartItems.reduce((acc, i) => acc + i.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              {!userInfo ? (
                <Nav.Link as={Link} className="custom-link" to="/login">
                  <FaUser /> Sign In
                </Nav.Link>
              ) : userInfo.isAdmin ? (
                <NavDropdown title="Admin" id="adminmenu">
                  <NavDropdown.Item
                    as={Link}
                    className="custom-link"
                    to="/admin/productlist"
                  >
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="custom-link"
                    to="/admin/userlist"
                  >
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="custom-link"
                    to="/admin/orderlist"
                  >
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
