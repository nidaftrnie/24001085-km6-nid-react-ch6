import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCarDetail } from "../reducers/cars";

export const getCars = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}//carmodels`,
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
    url: `${import.meta.env.VITE_BACKEND_API}//carmodels/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCarDetail(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
