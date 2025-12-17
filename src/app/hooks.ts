import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "./store";

// - - - - - - - - - Custom Hooks To Fit With Typescript
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
