import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "./store";

// - - - - - - - - - Custom Hooks for TypeScript
// These hooks wrap the original ones to provide type safety throughout the app.

// *** useAppDispatch: Use this instead of `useDispatch` to handle Thunks correctly
export const useAppDispatch = () => useDispatch<AppDispatch>();

// *** useAppSelector: Use this instead of `useSelector` to get auto-completion for state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
