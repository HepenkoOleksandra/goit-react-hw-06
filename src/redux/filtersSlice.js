import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  // name: "",
  filters: {name: ""},
}

const filterSlice = createSlice({
  name: "filter",
  initialState: INITAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filters.name = action.payload
    },
  },
  // selectors: {
  //   selectNameFilter: state => state.filters.filters.name
  // } 
});

export const selectNameFilter = state => state.filters.filters.name;
// export const { selectNameFilter } = filterSlice.selectors;

export const { setFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;