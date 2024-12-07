import { slice } from './slice';

export const reducer = slice.reducer;
export const { setCategory, setDisplay, reset } = slice.actions;
export * from './types';
