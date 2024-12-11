import { ProductsApi } from '@/api/ProductsApi';
import { PaginationParams } from '@/api/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('@@products/get', async (params: Partial<PaginationParams> = {}) => {
	return await ProductsApi.getProducts(params);
});
