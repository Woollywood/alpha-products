import { slice } from './slice';

export const reducer = slice.reducer;
export const { addFavorite, removeFavorite, removeProduct } = slice.actions;

export * from './actions';
