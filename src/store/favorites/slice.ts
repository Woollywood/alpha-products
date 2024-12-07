import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MealPreview } from '@/api/MealsApi';
import { Store } from './types';

const initialState: Store = { favorites: [] };

export const slice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<MealPreview>) => {
			state.favorites.push(payload);
		},
		remove: (state, { payload: { idMeal } }: PayloadAction<Pick<MealPreview, 'idMeal'>>) => {
			state.favorites = state.favorites.filter((favorite) => favorite.idMeal !== idMeal);
		},
		reset: () => initialState,
	},
});
