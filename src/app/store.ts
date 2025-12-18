// - - - - - - - - - Libraries
// *** Redux Toolkit
import {configureStore} from "@reduxjs/toolkit";
// *** Redux Logger
import logger from "redux-logger";

// - - - - - - - - - Redux Files
// *** Redux Reducers
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

// - - - - - - - - - Store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// - - - - - - - - - Store Types (TypeScript Integration)
// *** RootState: Infers the type of the entire state object from the store
export type RootState = ReturnType<typeof store.getState>;
// *** AppDispatch: Infers the specific dispatch type including middleware (like Thunk)
export type AppDispatch = typeof store.dispatch;

export default store;
