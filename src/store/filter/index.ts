import { slice } from './slice';

export const reducer = slice.reducer;
export const { setCategory, setDisplay } = slice.actions;
export * from './types';
