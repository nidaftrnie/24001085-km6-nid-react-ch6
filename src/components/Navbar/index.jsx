import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch, token]);

  return (
    <>
      <div className="navigation" style={{ backgroundColor: "#dee3ff" }}>
        <Navbar expand="md" className="justify-content-end">
          <Container>
            <Navbar.Brand href="/">Kampus Merdeka</Navbar.Brand>
            <Navbar.Toggle
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            />
            <Navbar.Collapse
              id="offcanvasNavbar"
              className="justify-content-end"
            >
              <Nav className="navbar-nav justify-content-end">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                {user ? (
                  <>
                    <Nav.Link as={Link} to="/profile">
                      Profile
                    </Nav.Link>
                    <Button
                      className="ms-2"
                      variant="outline-danger"
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.confirm("Are you sure want to logout?")) {
                          dispatch(logout());
                          navigate("/login");
                        }
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      as={Link}
                      to="/login"
                      variant="outline-primary"
                      className="fw-bold"
                    >
                      Login
                    </Button>
                  </>
                )}
                <Nav.Item></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
