import { configureStore } from '@reduxjs/toolkit';
import { reducer as mealsReducer } from './meals';
import { reducer as categoriesReducer } from './categories';
import { reducer as favoritesReducer } from './favorites';
import { reducer as filterReducer } from './filter';
import { reducer as mealReducer } from './meal';

export const store = configureStore({
	reducer: {
		meals: mealsReducer,
		category: categoriesReducer,
		favorite: favoritesReducer,
		filter: filterReducer,
		meal: mealReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
