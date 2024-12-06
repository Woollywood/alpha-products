import { createSlice } from '@reduxjs/toolkit';
import { Store } from './types';
import { getAllCategories } from './actions';

const initialState: Store = { categories: [], isLoading: false };

export const slice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllCategories.pending, (state) => {
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
