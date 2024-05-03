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
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>{cardetail?.model}</Card.Header>
          <Card.Body>
            <Form>
              {!cardetail ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {cardetail?.carDetail?.image && (
                    <Image
                      src={cardetail?.carDetail?.image}
                      className="img-fluid"
                      rounded
                    />
                  )}

                  <div className={cardetail?.carDetail?.image && "mt-4"}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Model</Form.Label>
                      <Form.Control
                        type="text"
                        value={cardetail?.model}
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
