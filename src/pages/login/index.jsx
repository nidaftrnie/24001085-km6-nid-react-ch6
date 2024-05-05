import LoginComponent from "../../components/Login";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Row className="mt-5">
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header className="text-center">
              <h5>Login</h5>
            </Card.Header>
            <Card.Body>
              <LoginComponent />
            </Card.Body>
            <Card.Footer className="text-center">
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
