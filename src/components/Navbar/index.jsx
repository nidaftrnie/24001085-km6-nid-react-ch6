import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { getProfile, logout } from "../../redux/actions/auth";
import logo from "../../assets/icons/logobinar.png";
import car from "../../assets/image/img_car.svg";
import profile from "../../assets/icons/person-circle.svg";

import "../../assets/css/style.css";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { user, token } = useSelector((state) => state.auth);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    dispatch(getProfile(null, null, null));
    setIsHomePage(location.pathname === "/");
  }, [dispatch, token, location]);

  return (
    <div className="navigation pe-1" style={{ backgroundColor: "#f1f3ff" }}>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link to="/">
            <img
              className="navbar-brand"
              src={logo}
              id="logobinar"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {isHomePage && ( // Render navigation links only if it's the home page
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="#ourservice">
                        {" "}
                        Our Service{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#whyus">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#testimonial">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#faq">
                        FAQ
                      </a>
                    </li>
                  </>
                )}
                {!user &&
                  isHomePage && (
                    <li className="nav-item">
                      <Button
                        onClick={() => navigate("/register")}
                        className="register nav-link rounded fw-bold"
                      >
                        Register
                      </Button>
                    </li>
                  )}
                {user && (
                  <>
                    <li className="nav-item mt-1 me-3">
                      <img
                        src={profile}
                        className="profile"
                        onClick={() => navigate("/profile")}
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                    <li className="nav-item">
                      <Button
                        className="ms-2 btn-danger logout-button"
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
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isHomePage && (
        <section id="hero" className="pb-5">
          <Container>
            <div className="row d-flex align-items-center my-auto g-5 ps-1">
              <div className="col-md-7" style={{ textAlign: "justify" }}>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <button
                  type="button"
                  className="btn fw-bold rounded"
                  onClick={() => navigate("/carimobil")}
                >
                  Cari Mobil
                </button>
              </div>
              <div className="col-md-5">
                <img src={car} className="img-fluid" alt="Car" />
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default NavbarComponent;
