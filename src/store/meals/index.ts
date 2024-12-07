import { slice } from './slice';

export const reducer = slice.reducer;
export const { remove, reset } = slice.actions;
export * from './actions';
export * from './types';
