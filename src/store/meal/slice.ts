import { createSlice } from '@reduxjs/toolkit';
import { Store } from './types';
import { getMeal } from './actions';

const initialState: Store = { meal: null, isLoading: true };

export const slice = createSlice({
	name: 'meal',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getMeal.pending, (state) => {
			state.meal = null;
			state.isLoading = true;
		});
		builder.addCase(getMeal.fulfilled, (state, { payload }) => {
			state.meal = payload;
			state.isLoading = false;
		});
		builder.addCase(getMeal.rejected, (state) => {
			state.isLoading = false;
		});
	},
});
