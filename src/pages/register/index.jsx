import RegisterComponent from "../../components/Register";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import carauth from "../../assets/image/carauth.jpg";
import back from "../../assets/icons/back.svg";
import "../../assets/css/style.css";

function Register() {
  return (
    <div>
      <Link to="/">
        <img src={back} className="back-icon" alt="Back" />
      </Link>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="d-none d-md-block">
              <Card style={{ borderRadius: "40px", height: "auto" }}>
                <Row>
                  <Col md={6}>
                    <img
                      src={carauth}
                      className="w-100 h-100"
                      alt="Car Authentication"
                      style={{ borderRadius: "40px 0 0 40px" }}
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Body className="d-flex flex-column justify-content-center">
                      <h1 className="fw-bold text-center mb-4">Register</h1>
                      <RegisterComponent />
                      <p className="text-center mt-4">
                        Already have an account? <Link to="/login">Login</Link>{" "}
                      </p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
            <div className="d-md-none">
              <h1 className="fw-bold text-center mb-4">Register</h1>
              <RegisterComponent />
              <p className="text-center mt-4">
                Already have an account? <Link to="/login">Login</Link>{" "}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Register;
