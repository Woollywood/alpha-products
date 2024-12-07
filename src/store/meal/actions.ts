import { Meal, MealsApi } from '@/api/MealsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMeal = createAsyncThunk('@@meal/get', async ({ idMeal }: Pick<Meal, 'idMeal'>) => {
	const data = await MealsApi.getMealById({ idMeal });
	return data;
});
