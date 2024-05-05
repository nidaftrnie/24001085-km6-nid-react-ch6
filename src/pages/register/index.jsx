import RegisterComponent from "../../components/Register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Register() {
  return (
    <>
      <Row className="mt-5 mb-5">
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header className="text-center">
              <h5>Register</h5>
            </Card.Header>
            <Card.Body>
              <RegisterComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Register;
