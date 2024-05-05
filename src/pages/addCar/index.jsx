import AddCarComponents from "../../components/addCar";
import { Container, Card } from "react-bootstrap";

function AddCar() {
  return (
      <Container className=" d-flex justify-content-center">
        <Card className="w-50 mt-5 mb-5">
          <Card.Header className="text-center">
            <h5>Add Car</h5>
          </Card.Header>
          <Card.Body>
            <AddCarComponents />
          </Card.Body>
        </Card>
      </Container>
  );
}

export default AddCar;
