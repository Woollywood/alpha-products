import { Meal } from '@/api/MealsApi';
import { useAppDispatch } from '@/store';
import { getMealsByCategory, reset as mealsReset } from '@/store/meals';
import { getMeal, reset as mealReset } from '@/store/meal';
import { useEffect } from 'react';

export const useGetMeals = (category: string) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (category.length > 0) {
			dispatch(getMealsByCategory({ categoryParam: category }));
		}

		return () => {
			dispatch(mealsReset());
		};
	}, [category, dispatch]);
};

export const useGetMelById = ({ idMeal }: Pick<Meal, 'idMeal'>) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMeal({ idMeal }));

		return () => {
			dispatch(mealReset());
		};
	}, [dispatch, idMeal]);
};
