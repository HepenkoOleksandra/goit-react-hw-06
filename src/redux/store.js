import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsReducer";
import { filtersReducer } from "./filtersSlice";

// import { combineReducers, createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";


// const rootReducer = combineReducers({ //state => obj
//     contacts: contactsReducer, //reducer => obj
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
  blacklist: ["_persist"]
};

export const store = configureStore({
    reducer: {
      contacts: persistReducer(contactsPersistConfig, contactsReducer),
      filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);