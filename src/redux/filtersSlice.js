import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    name: "",
}


const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
    setFilter(state, action) {},
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;