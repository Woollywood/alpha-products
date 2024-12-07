import { createSlice } from '@reduxjs/toolkit';
import { Store } from './types';
import { getAllCategories } from './actions';

const initialState: Store = { categories: [], isLoading: true };

export const slice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getAllCategories.pending, (state) => {
			state.categories = [];
			state.isLoading = true;
		});
		builder.addCase(getAllCategories.fulfilled, (state, { payload: { categories } }) => {
			state.categories = categories;
			state.isLoading = false;
		});
		builder.addCase(getAllCategories.rejected, (state) => {
			state.isLoading = false;
		});
	},
});
