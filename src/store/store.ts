import { configureStore } from '@reduxjs/toolkit';
import { reducer as productsReducer } from './products';
import { reducer as productReducer } from './product';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		product: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
