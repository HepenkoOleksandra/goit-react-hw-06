import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    // items: [],
   contacts: {items: []},
}

const contactSlice = createSlice({
  name: "contact",
  initialState: INITAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload)
    },
  },
  // selectors: {
  //   selectContacts: state => state.contacts.contacts.items
  // },
})

 export const selectContacts = state => state.contacts.contacts.items;
// export const { selectContacts } = contactSlice.selectors;

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
