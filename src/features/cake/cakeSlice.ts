// - - - - - - - - - Libraries
// *** Redux Toolkit
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

// - - - - - - - - - Types
export type CakeInitialStateProps = {
  numberOfCakes: number;
};

// - - - - - - - - - Initial State
const initialState: CakeInitialStateProps = {
  numberOfCakes: 10,
};

// - - - - - - - - - Cake Slice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    cakeOrdered: (state) => {
      state.numberOfCakes--;
    },
    cakeReStocked: (state, action: PayloadAction<number>) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const {cakeOrdered, cakeReStocked} = cakeSlice.actions;
