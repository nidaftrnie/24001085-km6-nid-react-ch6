import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/cars";

export const getCars = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/carDetails`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCars(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}//cardetails/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCar(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
    navigate("/");
  }
};

export const addNewCar =
  (
    navigate,
    car_model_id,
    plate,
    image,
    rentPerDay,
    capacity,
    available,
    description,
    setIsLoading
  ) =>
  async (dispatch, getState) => {
    const state = getState();
    const { token } = state.auth;

    setIsLoading(true);

    let data = new FormData();
    data.append("car_model_id", car_model_id);
    data.append("plate", plate);
    data.append("image", image);
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("available", available);
    data.append("description", description);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}//cardetails`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      navigate("/");
      if (response?.data?.message === "Add Car Success!") {
        toast.success(response?.data?.message);
        dispatch(getCars());
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/");
    }
    setIsLoading(false);
  };

export const editCar =
  (
    id,
    navigate,
    car_model_id,
    plate,
    image,
    rentPerDay,
    capacity,
    available,
    description
  ) =>
  async (dispatch, getState) => {
    const state = getState();
    const { token } = state.auth;

    let data = new FormData();
    data.append("car_model_id", car_model_id);
    data.append("plate", plate);
    data.append("image", image);
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("available", available);
    data.append("description", description);

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/cardetails/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      if (response?.data?.message === "Update Success!") {
        toast.success(response?.data?.message);
        dispatch(getCars());
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/");
    }
  };

export const deleteCar = (id) => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/cardetails/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    if (response?.data?.message === "Delete Car Successs!") {
      toast.success(response?.data?.message);
      dispatch(getCars());
      navigate("/");
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
