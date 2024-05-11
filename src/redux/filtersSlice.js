import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
      console.log(state.filters.name);
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
