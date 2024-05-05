import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/actions/cars";

import { Button, Form } from "react-bootstrap";

function AddCarComponents() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [car_model_id, setCarModelId] = useState("");
  const [plate, setPlate] = useState("");
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [available, setAvailable] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      addNewCar(
        navigate,
        car_model_id,
        plate,
        image,
        rentPerDay,
        capacity,
        available,
        description,
        setIsLoading
      )
    );
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>Car Model's ID *</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter ID"
          value={car_model_id}
          onChange={(e) => setCarModelId(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="plate">
        <Form.Label>Plate Number *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Plate Number"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="capacity">
        <Form.Label>Capacity *</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rentPerDay">
        <Form.Label>Rent Per Day *</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Rent Per Day"
          value={rentPerDay}
          onChange={(e) => setRentPerDay(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="available">
        <Form.Label>Availability *</Form.Label>
        <Form.Select
          aria-label="Select Availability"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
          required
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="image" className="mb-3">
        <Form.Label>Image (optional)</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="mt-2 w-100"
        disabled={isLoading}
        onClick={() => {
          const confirm = window.confirm("Are you this data is correct?");
          if (confirm) {
            onSubmit();
          }
        }}
      >
        {isLoading ? "Processing..." : "Save"}
      </Button>
    </Form>
  );
}

export default AddCarComponents;
