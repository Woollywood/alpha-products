import { slice } from './slice';

export const reducer = slice.reducer;
export const { add, remove } = slice.actions;
export * from './types';
