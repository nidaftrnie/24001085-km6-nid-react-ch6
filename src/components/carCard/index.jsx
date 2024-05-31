import { Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars, deleteCar } from "../../redux/actions/cars";
import "../../assets/css/style.css";

const carCard = ({ car }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
 
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <Col md={4} className="g-4">
      <Card className="car-card" style={{ backgroundColor: "#f1f3ff" }}>
        <Card.Body>
          {car?.image && (
            <Image src={car?.image} className="img-fluid" rounded />
          )}
          <div className={car?.image && "mt-4"}>
            <h6> Rp. {car?.rentPerDay}/day</h6>
            <p style={{ textAlign: "justify" }}>{car?.description}</p>
            <Button
              className="w-100 mb-3"
              variant="outline-primary"
              as={Link}
              to={`/carmodels/${car?.id}`}
            >
              Show Details
            </Button>
            {user?.role == "admin" && (
              <>
                <Button
                  variant="outline-success"
                  as={Link}
                  to={`/cardetails/edit/${car?.id}`}
                  className="w-100 mb-3"
                >
                  Edit Data
                </Button>
                <Button
                  variant="outline-danger"
                  as={Link}
                  to={`/carmodels/${car?.id}`}
                  className="w-100 mb-3"
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      window.confirm("Are you sure want to delete this car?")
                    ) {
                      dispatch(deleteCar(car?.id));
                    }
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default carCard;
