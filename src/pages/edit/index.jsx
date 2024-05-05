import EditComponent from "../../components/Edit";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Edit() {
  return (
    <>
      <Row className="mt-5 mb-5">
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header className="text-center">
              <h5>Edit Data</h5>
            </Card.Header>
            <Card.Body>
              <EditComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Edit;
