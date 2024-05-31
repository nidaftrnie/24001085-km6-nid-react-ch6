import { useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars";
import CarCard from "../../components/carCard";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const CariMobil = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <div className="mb-5">
        {user?.role == "admin" && (
          <>
            <Button
              variant="outline-success"
              as={Link}
              to={`/car/add`}
              className="w-100 mb-3"
            >
              Add Car
            </Button>
          </>
        )}
        <Row className="justify-content-center">
          {cars.length > 0 &&
            cars.map((car) => (
              <CarCard key={car?.id} car={car} className="car-card" />
            ))}
        </Row>
      </div>
    </>
  );
};

export default CariMobil;
