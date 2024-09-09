import { configureStore } from "@reduxjs/toolkit";
import carDeatilsReducer from "./reduxslicers/CarDetailsSlice";
import darkModeSlice from "./reduxslicers/darkModeSlice";
export const Store = configureStore({
  reducer: {
    carDetails: carDeatilsReducer,
    darkMode: darkModeSlice,
  },
});
