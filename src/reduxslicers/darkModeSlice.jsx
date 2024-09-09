import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: { isDarkMode: false },
  reducers: {
    toggleMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
