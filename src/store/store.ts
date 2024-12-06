import { configureStore } from '@reduxjs/toolkit';
import { reducer as mealsReducer } from './meals';
import { reducer as categoriesReducer } from './categories';

export const store = configureStore({
	reducer: {
		meal: mealsReducer,
		category: categoriesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
