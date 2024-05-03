import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  cars: [],
  cardetail:null,
};

// Define the slice
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setCarDetail: (state, action) => {
      state.cardetail = action.payload;
    },
  },
});

// export the setter funtion
export const { setCars, setCarDetail } = carSlice.actions;

// export the reducer
export default carSlice.reducer;
