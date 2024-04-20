import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    items: [],
  //  contacts: {items: []}
}

const contactSlice = createSlice({
  // Ім'я слайсу
  name: "contact",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactSlice.reducer;

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