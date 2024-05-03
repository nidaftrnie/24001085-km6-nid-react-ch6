import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get user profile if we have token
    const token = localStorage.getItem("token");
    if (token) {
      // get profile
      dispatch(getProfile(null, null, null));
    }
  }, [dispatch]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>My Profile</Card.Header>
          <Card.Body>
            <Form>
              {!user ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {user?.image && (
                    <Image src={user?.image} className="img-fluid" rounded />
                  )}

                  <div className={user?.image && "mt-4"}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value={user?.name} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={user?.email} disabled />
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

export default Profile;
