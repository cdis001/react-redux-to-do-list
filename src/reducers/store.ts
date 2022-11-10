import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import storageSession from "redux-persist/lib/storage/session"; //session storage
import storage from "redux-persist/lib/storage"; //local storage

import reducer from "./reducer";

const persistConfig: any = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
