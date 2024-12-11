import { slice } from './slice';

export const reducer = slice.reducer;
export const { set } = slice.actions;

export * from './actions';
