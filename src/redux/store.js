import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsReducer";

// import { combineReducers, createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";


// const rootReducer = combineReducers({ //state => obj
//     contacts: contactsReducer, //reducer => obj
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
  }
});