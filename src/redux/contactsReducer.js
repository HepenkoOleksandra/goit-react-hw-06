import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    items: [],
    // filters: ""
}

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contact",
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

// export const contactsReducer = (state = INITAL_STSTE, action) => {
//     switch (action.type) {
//         case "contact/ADD_CONTACT": {
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             }
//         }
//         case "contact/DELETE_CONTACT": {
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload)
//             }
//         } 
//     case "contact/SET_FILTER": {
//             return {
//                 ...state,
//                 filters: action.payload
//             }
//         } 
//         default:
//          return state; 
//     }
// }