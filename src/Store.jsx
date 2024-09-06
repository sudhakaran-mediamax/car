import { configureStore } from "@reduxjs/toolkit";
import carDeatilsReducer from "./reduxslicers/CarDetailsSlice";
export const Store = configureStore({
  reducer: {
    carDetails: carDeatilsReducer,
  },
});
