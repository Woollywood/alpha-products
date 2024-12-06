import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Store } from './types';

const initialState: Store = { selectedCategory: '', selectedDisplay: 'all' };

export const slice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategory: (state, { payload }: PayloadAction<string>) => {
			state.selectedCategory = payload;
		},
		setDisplay: (state, { payload }: PayloadAction<string>) => {
			state.selectedDisplay = payload;
		},
	},
});
