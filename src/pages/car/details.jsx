import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "../../redux/actions/cars";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  const { cardetail } = useSelector((state) => state.car);

  useEffect(() => {
    // get car details by params id
    dispatch(getCar(navigate, id));
  }, [dispatch, id, navigate]);

  return (
    <Row>
      <Col md={6} className="offset-md-3 mb-5">
        <Card>
          <Card.Body>
            <Form className="">
              {!cardetail ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {cardetail?.image && (
                    <Image
                      src={cardetail?.image}
                      className="img-fluid"
                      rounded
                    />
                  )}

                  <div className={cardetail?.image && "mt-4"}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Model ID</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.car_model_id}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Plate</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.plate}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Rent Per Day</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.rentPerDay}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Capacity</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.capacity}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Available</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.available}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.description}
                        disabled
                      />
                    </Form.Group>
                  </div>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Details;
