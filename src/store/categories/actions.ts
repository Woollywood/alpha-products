import { CategoriesApi } from '@/api/CategoriesApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCategories = createAsyncThunk('@@categories/getAll', async () => {
	const data = await CategoriesApi.getAll();
	return data;
});
