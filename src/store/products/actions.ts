import { Product, ProductsApi } from '@/api/ProductsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('@@products/get', async () => {
	return await ProductsApi.getProducts();
});

export const addProduct = createAsyncThunk('@@product/create', async (params: Omit<Product, 'id' | 'reviews'>) => {
	await new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});

	return await ProductsApi.addProduct(params);
});
