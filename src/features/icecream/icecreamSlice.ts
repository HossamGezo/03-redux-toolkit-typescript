// - - - - - - - - - Libraries
// *** Redux Toolkit
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

// - - - - - - - - - Types
type IcecreamInitialStateProps = {
  numberOfIcecreams: number;
};

// - - - - - - - - - Initial State
const initialState: IcecreamInitialStateProps = {
  numberOfIcecreams: 20,
};

// - - - - - - - - - Icecream Slice
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    icecreamOrdered: (state) => {
      state.numberOfIcecreams--;
    },
    icecreamRestoked: (state, action: PayloadAction<number>) => {
      state.numberOfIcecreams += action.payload;
    },
  },
});

export const {icecreamOrdered, icecreamRestoked} = icecreamSlice.actions;
export default icecreamSlice.reducer;
