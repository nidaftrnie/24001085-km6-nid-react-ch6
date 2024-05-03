import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars";
import CarCard from "../../components/carCard";
// import "../../css"

const Home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <h1>List Cars</h1>
      <Row>
        {cars.length > 0 &&
          cars.map((car) => <CarCard key={car?.id} car={car} />)}
      </Row>
    </>
  );
};

export default Home;
