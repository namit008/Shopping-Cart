import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const searchBar = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchBar.actions;

export default searchBar.reducer;
