import { createSlice } from '@reduxjs/toolkit';
import { getMealsByCategory } from './actions';
import { Store } from './types';

const initialState: Store = { meals: [], isLoading: false };

export const slice = createSlice({
	name: 'meals',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMealsByCategory.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getMealsByCategory.fulfilled, (state, { payload: { meals } }) => {
			state.meals = meals;
			state.isLoading = false;
		});
		builder.addCase(getMealsByCategory.rejected, (state) => {
			state.isLoading = false;
		});
	},
});
