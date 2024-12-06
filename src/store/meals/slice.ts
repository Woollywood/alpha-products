import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMealsByCategory } from './actions';
import { Store } from './types';
import { MealPreview } from '@/api/MealsApi';

const initialState: Store = { meals: [], isLoading: true };

export const slice = createSlice({
	name: 'meals',
	initialState,
	reducers: {
		remove: (state, { payload: { idMeal } }: PayloadAction<Pick<MealPreview, 'idMeal'>>) => {
			state.meals = state.meals.filter((meal) => meal.idMeal !== idMeal);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getMealsByCategory.pending, (state) => {
			state.meals = [];
			state.isLoading = true;
		});
		builder.addCase(getMealsByCategory.fulfilled, (state, { payload: { meals } }) => {
			state.meals = meals;
			state.isLoading = false;
		});
		builder.addCase(getMealsByCategory.rejected, (state) => {
			state.isLoading = false;
		});
	},
});
