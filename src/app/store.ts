// - - - - - - - - - Libraries
// *** Redux Toolkit
import {configureStore} from "@reduxjs/toolkit";

// - - - - - - - - - Redux Files
// *** Redux Reducers
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";

// - - - - - - - - - Store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

// - - - - - - - - - Store Types (TypeScript Integration)
// *** RootState: Infers the type of the entire state object from the store
export type RootState = ReturnType<typeof store.getState>;
// *** AppDispatch: Infers the specific dispatch type including middleware (like Thunk)
export type AppDispatch = typeof store.dispatch;

export default store;
