import { Product, ProductsApi } from '@/api/ProductsApi';
import { delay } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('@@products/get', async () => {
	return await ProductsApi.getProducts();
});

export const addProduct = createAsyncThunk('@@product/create', async (params: Omit<Product, 'id' | 'reviews'>) => {
	await delay(1000);
	return await ProductsApi.addProduct(params);
});
