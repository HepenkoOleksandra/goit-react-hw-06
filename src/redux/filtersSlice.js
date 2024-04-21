import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  // name: "",
  filters: {name: ""},
}

const filterSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    setFilter(state, action) {
      state.filters.name = action.payload
    },
  },
  selectors: {
    selectNameFilter: state => state.filters.filters.name
  } 
});

// export const selectNameFilter = state => state.filters.filters.name;
export const { selectNameFilter } = filterSlice.selectors;

export const { setFilter } = filterSlice.actions;

// Редюсер слайсу
export const filtersReducer = filterSlice.reducer;