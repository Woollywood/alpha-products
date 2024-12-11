import { Product, ProductsApi } from '@/api/ProductsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductById = createAsyncThunk('@@product/get', async ({ id }: Pick<Product, 'id'>) => {
	return await ProductsApi.getProductById({ id });
});
