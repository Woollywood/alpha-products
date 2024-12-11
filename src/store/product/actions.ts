import { Product, ProductsApi } from '@/api/ProductsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductById = createAsyncThunk('@@product/get', async ({ id }: Pick<Product, 'id'>) => {
	try {
		return await ProductsApi.getProductById({ id });
	} catch (error) {
		throw new Error((error as Error).message);
	}
});
