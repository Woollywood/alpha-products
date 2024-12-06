import { configureStore } from '@reduxjs/toolkit';
import { reducer as mealsReducer } from './meals';
import { reducer as categoriesReducer } from './categories';
import { reducer as favoritesReducer } from './favorites';
import { reducer as filterReducer } from './filter';

export const store = configureStore({
	reducer: {
		meal: mealsReducer,
		category: categoriesReducer,
		favorite: favoritesReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
