import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { getProducts, addProduct } from './actions';
import { Product } from '@/api/ProductsApi';

const initialState: InitialState = {
	isLoading: true,
	products: null,
	favorites: [],
	isCreating: false,
};

export const slice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addFavorite: (state, { payload }: PayloadAction<Product>) => {
			state.favorites.push(payload);
		},
		removeFavorite: (state, { payload: { id } }: PayloadAction<Pick<Product, 'id'>>) => {
			state.favorites = state.favorites.filter((product) => product.id !== id);
		},
		removeProduct: (state, { payload: { id } }: PayloadAction<Pick<Product, 'id'>>) => {
			if (state.products) {
				state.products = state.products?.filter((product) => product.id !== id);
				state.favorites = state.favorites.filter((product) => product.id !== id);
			}
		},
	},
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
