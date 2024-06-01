import LoginComponent from "../../components/Login";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import carauth from "../../assets/image/carauth.jpg";
import back from "../../assets/icons/back.svg";
import "../../assets/css/style.css";

function Login() {
  return (
    <div>
      <Link to="/">
        <img src={back} className="back-icon" alt="Back" />
      </Link>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <div className="d-none d-md-block">
              <Card className="card" style={{ borderRadius: "20px" }}>
                <Row className="card-container d-flex justify-content-center align-items-center">
                  <Col md={6}>
                    <img
                      src={carauth}
                      className="w-100"
                      alt="Car Authentication"
                      style={{ borderRadius: "20px 0 0 20px" }}
                    />
                  </Col>
                  <Col md={6}>
                    <h1 className="fw-bold text-center">Login</h1>
                    <Card.Body>
                      <LoginComponent />
                    </Card.Body>
                    <p className="text-center">
                      Don't have an account?{" "}
                      <Link to="/register">Register</Link>{" "}
                    </p>
                  </Col>
                </Row>
              </Card>
            </div>
            <div className="d-md-none">
              <h1 className="fw-bold text-center">Login</h1>
              <LoginComponent />
              <p className="text-center">
                Don't have an account? <Link to="/register">Register</Link>{" "}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
