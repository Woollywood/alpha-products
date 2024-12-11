import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { getProductById } from './actions';
import { Product } from '@/api/ProductsApi';

const initialState: InitialState = { isLoading: true, product: null };

export const slice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		set: (state, { payload }: PayloadAction<Product>) => {
			state.isLoading = false;
			state.product = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProductById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProductById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.product = payload;
		});
		builder.addCase(getProductById.rejected, (state) => {
			state.isLoading = false;

			throw new Error();
		});
	},
});
