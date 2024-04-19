import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { filtersReducer } from "./filtersReducer";

const rootReducer = combineReducers({ //state => obj
    contacts: contactsReducer, //reducer => obj
    filters: filtersReducer, //reducer => obj
});

export const store = createStore(rootReducer);