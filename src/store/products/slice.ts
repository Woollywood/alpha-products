import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { getProducts } from './actions';

const initialState: InitialState = { isLoading: true, products: null };

export const slice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.products = payload;
		});
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false;
		});
	},
});
