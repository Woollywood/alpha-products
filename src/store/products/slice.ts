import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { getProducts, nextProducts, addProduct } from './actions';

const initialState: InitialState = {
	isLoading: true,
	isNextPageLoading: true,
	hasNextPage: true,
	products: null,
	renderedProducts: null,
	isCreating: false,
};

const LIMIT = 32;

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
			state.isNextPageLoading = true;
			state.hasNextPage = true;
			state.products = payload.products;
			state.limit = LIMIT;
			state.skip = 0;
			state.total = payload.total;
		});
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(nextProducts.pending, (state) => {
			state.isNextPageLoading = true;
		});
		builder.addCase(nextProducts.fulfilled, (state) => {
			state.isNextPageLoading = false;

			if (state.hasNextPage) {
				const productsChunk = state.products?.slice().splice(state.skip!, LIMIT) || [];
				state.renderedProducts = state.renderedProducts
					? [...state.renderedProducts, ...productsChunk]
					: productsChunk;
			}

			state.skip = state.skip! + LIMIT;
			state.hasNextPage = state.skip <= state.total!;
		});
		builder.addCase(nextProducts.rejected, (state) => {
			state.isNextPageLoading = false;
		});
		builder.addCase(addProduct.pending, (state) => {
			state.isCreating = true;
		});
		builder.addCase(addProduct.fulfilled, (state, { payload }) => {
			state.isCreating = false;
			state.products = [...state.products!, payload];
			state.total = state.total! + 1;
		});
		builder.addCase(addProduct.rejected, (state) => {
			state.isCreating = false;
		});
	},
});
