import { ProductsApi } from '@/api/ProductsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('@@products/get', async () => {
	return await ProductsApi.getProducts();
});

export const nextProducts = createAsyncThunk('@@products/next', async () => {
	return await new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
});
