import { Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const carCard = ({ car }) => {
  return (
    <Col md={4} className="g-4">
      <Card>
        <Card.Body>
          {car?.carDetail?.image && (
            <Image src={car?.carDetail?.image} className="img-fluid" rounded />
          )}
          <div className={car?.carDetail?.image && "mt-4"}>
            <h5>{car?.model}</h5>
            <h6>{car?.year}</h6>
            <p style={{ textAlign: "justify" }}>
              {car?.carDetail?.description}
            </p>
            <Button variant="primary" as={Link} to={`/carmodels/${car?.id}`}>
              Show Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};


export default carCard;
