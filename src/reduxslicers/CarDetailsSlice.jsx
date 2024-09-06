import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  status: "idle",
  error: null,
};

export const carDetailsSlice = createSlice({
  name: "carDetails",
  initialState,
  reducers: {
    getDetailsStart: (state) => {
      state.status = "loading";
    },
    getDetailsSuccess: (state, action) => {
      state.value = action.payload;
      state.status = "succeeded";
    },
    getDetailsFailure: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const { getDetailsStart, getDetailsSuccess, getDetailsFailure } =
  carDetailsSlice.actions;

export const fetchDetails = () => async (dispatch) => {
  dispatch(getDetailsStart());
  try {
    const response = await axios.get("/data.json"); // Note the path here
    dispatch(getDetailsSuccess(response.data));
  } catch (error) {
    dispatch(getDetailsFailure(error.message));
  }
};

export default carDetailsSlice.reducer;
