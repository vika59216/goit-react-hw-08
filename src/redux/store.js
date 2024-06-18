import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
//import storage from "redux-persist/lib/storage";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },

});



/*import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";



const contactPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        contacts: persistReducer(contactPersistConfig, contactsReducer),
    
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);*/