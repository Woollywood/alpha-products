import { createSlice } from '@reduxjs/toolkit';

interface Store {
	items: { id: number; image: string }[];
}

const initialState: Store = { items: [] };

export const slice = createSlice({
	name: 'products',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
});

export const reducer = slice.reducer;
