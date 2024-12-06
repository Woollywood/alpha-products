import { MealsApi } from '@/api/MealsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMealsByCategory = createAsyncThunk(
	'@@meals/getByCategory',
	async ({ categoryParam }: { categoryParam: string }) => {
		const data = MealsApi.getByCategory({ categoryParam });

		return data;
	},
);
