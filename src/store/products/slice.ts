import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { getProducts, addProduct } from './actions';

const initialState: InitialState = {
	isLoading: true,
	products: null,
	isCreating: false,
};

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
			state.products = payload.products;
		});
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false;
		});

		builder.addCase(addProduct.pending, (state) => {
			state.isCreating = true;
		});
		builder.addCase(addProduct.fulfilled, (state, { payload }) => {
			state.isCreating = false;
			state.products = [...state.products!, payload];
		});
		builder.addCase(addProduct.rejected, (state) => {
			state.isCreating = false;
		});
	},
});
