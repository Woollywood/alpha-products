import { slice } from './slice';

export const reducer = slice.reducer;
export const { addFavorite, removeFavorite } = slice.actions;

export * from './actions';
