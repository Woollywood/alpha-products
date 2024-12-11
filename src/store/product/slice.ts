import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { getProductById } from './actions';

const initialState: InitialState = { isLoading: true, product: null };

export const slice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
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
		});
	},
});
